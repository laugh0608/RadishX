#!/usr/bin/env python3
"""萝卜智能 V6 标识几何生成器。

构造（全部为解析几何，无手工微调坐标）：
  1. 身体：半径 R 的圆。
  2. 根部：一根倾斜背脊上的宽度扫掠，在半宽等于圆的半弦处与圆相接，
     因此在衔接处天然相切，不会出现台阶或自交。
  3. 叶冠：三片圆角菱形叶，从身体右上方的冠点向外展开。

设计空间居中于原点；main() 会量出真实包围盒，等比归一化到 1:1 画布并居中。
每次生成都会做自交与绕向自检，避免静默产出破面几何。
只在本地写出 v6 目录下的文件，不触碰任何历史素材。
"""

from __future__ import annotations

import math
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
OUT = HERE.parent
RENDER = HERE / "render.py"

# 家族色（docs/design/family-ui/02-color.md）
JADE = "#4f9c83"        # accent-jade / 玉青
JADE_DEEP = "#1b3c31"   # 玉青最深阶
GRAYJADE = "#78a496"    # 品牌主色 grayjade
PAPER = "#f4efe6"
INK = "#11100f"

CANVAS = 1024
MARGIN = 32


def f(v: float) -> str:
    return f"{v:.2f}".rstrip("0").rstrip(".")


def P(deg: float, r: float, cx: float = 0.0, cy: float = 0.0):
    a = math.radians(deg)
    return (cx + r * math.cos(a), cy + r * math.sin(a))


def arc_pts(a0: float, a1: float, r: float, cx: float = 0.0, cy: float = 0.0, step: float = 6.0):
    n = max(1, int(math.ceil(abs(a1 - a0) / step)))
    return [P(a0 + (a1 - a0) * i / n, r, cx, cy) for i in range(n + 1)]


class Tf:
    """等比缩放 + 旋转 + 平移。"""

    def __init__(self, s: float, dx: float = 0.0, dy: float = 0.0, rot_deg: float = 0.0):
        self.s, self.dx, self.dy = s, dx, dy
        self.cos = math.cos(math.radians(rot_deg))
        self.sin = math.sin(math.radians(rot_deg))

    def __call__(self, p):
        x, y = p[0] * self.s, p[1] * self.s
        return (x * self.cos - y * self.sin + self.dx, x * self.sin + y * self.cos + self.dy)

    def deg(self, d: float) -> float:
        return d + math.degrees(math.atan2(self.sin, self.cos))


# ---------------------------------------------------------------------------
# 根体
# ---------------------------------------------------------------------------


def body_outline(R: float, L: float, w0: float, k: float, tip_len: float, tilt: float,
                 n_body: int = 180, n_root: int = 160, n_tip: int = 22):
    """返回根体轮廓点列。

    背脊方向 theta = 90 - tilt（90° 为竖直向下），根部在该方向上从圆内量起。
    在 |s| = R 处半宽 w 恰等于圆的半弦，于是根部两个端点正好落在圆上。
    """
    theta = 90.0 - tilt
    a = math.radians(theta)
    ux, uy = math.cos(a), math.sin(a)
    if L <= R:
        raise ValueError("L 必须大于 R，否则根部无法超出身体圆")

    def base_w(s: float) -> float:
        if s <= R:
            return math.sqrt(max(R * R - s * s, 0.0))
        t = min((s - R) / (L - R), 1.0)
        return R * (1.0 - t**k) + w0 * (t**k)

    def rp(s: float, w: float, side: int):
        cx, cy = ux * s, uy * s
        return (cx - side * uy * w, cy + side * ux * w)

    def tip_w(u: float) -> float:
        """根尖段半宽：从根部末端宽度收束到 0，末端落在背脊上。"""
        return w0 * (1.0 - u) ** 1.15

    # 轮廓走向：背脊负向接点 -> 左侧根部 -> 根尖 -> 右侧根部 -> 背脊正向接点 -> 身体圆弧。
    # 沿背脊的参数 s 从 -R 连续走到 +R，两个接点都精确落在圆上，因此不会有跳变。
    n_neg = max(4, n_body // 2)
    pts: list[tuple[float, float]] = []
    for i in range(n_neg + 1):                      # s: -R -> 0
        s = -R + R * i / n_neg
        pts.append(rp(s, base_w(abs(s)), +1))
    for i in range(1, n_root + 1):                  # s: 0 -> L
        s = L * i / n_root
        pts.append(rp(s, base_w(s), +1))
    for i in range(1, n_tip + 1):                   # 根尖左半
        u = i / n_tip
        pts.append(rp(L + tip_len * u, tip_w(u), +1))
    for i in range(n_tip - 1, -1, -1):              # 根尖右半
        u = i / n_tip
        pts.append(rp(L + tip_len * u, tip_w(u), -1))
    for i in range(n_root, -1, -1):                 # s: L -> 0
        s = L * i / n_root
        pts.append(rp(s, base_w(s), -1))
    for i in range(1, n_neg + 1):                   # s: 0 -> R
        s = R * i / n_neg
        pts.append(rp(s, base_w(s), -1))
    pts += arc_pts(theta, theta + 180.0, R, step=180.0 / n_body)[1:]
    return pts


# ---------------------------------------------------------------------------
# 校验
# ---------------------------------------------------------------------------


def signed_area(pts):
    t = 0.0
    n = len(pts)
    for i in range(n):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % n]
        t += x0 * y1 - x1 * y0
    return t / 2.0


def segments_cross(p1, p2, p3, p4) -> bool:
    """严格相交判定：共享端点、共线、包围盒不相交都返回 False。"""
    eps = 1e-6

    def eq(a, b):
        return abs(a[0] - b[0]) <= eps and abs(a[1] - b[1]) <= eps

    if eq(p1, p3) or eq(p1, p4) or eq(p2, p3) or eq(p2, p4):
        return False
    if (max(p1[0], p2[0]) < min(p3[0], p4[0]) - eps
            or max(p3[0], p4[0]) < min(p1[0], p2[0]) - eps
            or max(p1[1], p2[1]) < min(p3[1], p4[1]) - eps
            or max(p3[1], p4[1]) < min(p1[1], p2[1]) - eps):
        return False

    def orient(a, b, c):
        return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])

    def sgn(v):
        return 1 if v > eps else (-1 if v < -eps else 0)

    d1, d2 = sgn(orient(p3, p4, p1)), sgn(orient(p3, p4, p2))
    d3, d4 = sgn(orient(p1, p2, p3)), sgn(orient(p1, p2, p4))
    if d1 == 0 or d2 == 0 or d3 == 0 or d4 == 0:
        return False
    return (d1 != d2) and (d3 != d4)


def first_self_intersection(pts):
    """返回第一个自交的相邻段索引，正常轮廓返回 None。"""
    n = len(pts)
    for i in range(n):
        a1, a2 = pts[i], pts[(i + 1) % n]
        for j in range(i + 1, n):
            if j == i or (j + 1) % n == i or j == (i + 1) % n:
                continue
            b1, b2 = pts[j], pts[(j + 1) % n]
            if segments_cross(a1, a2, b1, b2):
                return (i, j)
    return None


def validate(pts, label: str) -> list[str]:
    issues = []
    if abs(signed_area(pts)) < 1.0:
        issues.append(f"{label}: 轮廓面积趋零，形状退化")
    hit = first_self_intersection(pts)
    if hit:
        issues.append(f"{label}: 轮廓自交于第 {hit[0]} 与 {hit[1]} 段，坐标 {pts[hit[0]]} / {pts[hit[1]]}")
    return issues


def subdivide(pts, n: int = 3):
    """细分点列（线性加密），让自交检测更可靠。"""
    out = []
    m = len(pts)
    for i in range(m):
        p0, p1 = pts[i], pts[(i + 1) % m]
        for k in range(n):
            t = k / n
            out.append((p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t))
    return out


# ---------------------------------------------------------------------------
# 叶冠
# ---------------------------------------------------------------------------


def leaf_pts(crown, length, width, angle_deg, bulge=0.42):
    a = math.radians(angle_deg)
    ux, uy = math.cos(a), math.sin(a)
    px, py = -uy, ux
    hx, hy = length * bulge, width / 2
    return [
        crown,
        (crown[0] + ux * hx + px * hy, crown[1] + uy * hx + py * hy),
        (crown[0] + ux * length, crown[1] + uy * length),
        (crown[0] + ux * hx - px * hy, crown[1] + uy * hx - py * hy),
    ]


def rounded_poly_pts(points, radii):
    n = len(points)
    out = []
    for i in range(n):
        prev, v, nxt = points[(i - 1) % n], points[i], points[(i + 1) % n]
        r = radii[i]
        vx, vy = v
        ax, ay = prev[0] - vx, prev[1] - vy
        bx, by = nxt[0] - vx, nxt[1] - vy
        la, lb = math.hypot(ax, ay), math.hypot(bx, by)
        if r <= 0 or la < 1e-9 or lb < 1e-9:
            out.append(v)
            continue
        uax, uay, ubx, uby = ax / la, ay / la, bx / lb, by / lb
        cos_t = max(-1.0, min(1.0, uax * ubx + uay * uby))
        theta = math.acos(cos_t)
        if theta < 1e-6 or abs(theta - math.pi) < 1e-6:
            out.append(v)
            continue
        d = min(r / math.tan(theta / 2), min(la, lb) * 0.5)
        r_eff = d * math.tan(theta / 2)
        bis = (uax + ubx, uay + uby)
        ln = math.hypot(*bis)
        if ln < 1e-9:
            out.append(v)
            continue
        cen = (vx + bis[0] / ln * (r_eff / math.sin(theta / 2)),
               vy + bis[1] / ln * (r_eff / math.sin(theta / 2)))
        p_in = (vx + uax * d, vy + uay * d)
        p_out = (vx + ubx * d, vy + uby * d)
        a0 = math.degrees(math.atan2(p_in[1] - cen[1], p_in[0] - cen[0]))
        a1 = math.degrees(math.atan2(p_out[1] - cen[1], p_out[0] - cen[0]))
        if (uax * uby - uay * ubx) < 0:
            while a1 < a0:
                a1 += 360.0
        else:
            while a1 > a0:
                a1 -= 360.0
        out += arc_pts(a0, a1, r_eff, cen[0], cen[1], step=8.0)
    return out


# ---------------------------------------------------------------------------
# 组装
# ---------------------------------------------------------------------------


def build_shape(cfg):
    """返回 (rings, crown)：rings 为 [(点列, 颜色, 名称)]。"""
    R = cfg["R"]
    body = body_outline(R, cfg["L"], cfg["w0"], cfg["k"], cfg["tip_len"], cfg["tilt"])
    crown = P(cfg["crown_deg"], R)
    rings = [(body, cfg["body_fill"], "body")]
    for (length, width, angle) in cfg["leaves"]:
        pts = leaf_pts(crown, length, width, angle)
        rings.append((rounded_poly_pts(pts, cfg["leaf_radii"]), cfg["leaf_fill"], "leaf"))
    return rings, crown


def bounds(rings, rot: float = 0.0):
    cs, sn = math.cos(math.radians(rot)), math.sin(math.radians(rot))
    xs, ys = [], []
    for pts, _, _ in rings:
        for p in pts:
            x, y = p[0] * cs - p[1] * sn, p[0] * sn + p[1] * cs
            xs.append(x)
            ys.append(y)
    return min(xs), min(ys), max(xs), max(ys)


def poly_d(points, tf: Tf) -> str:
    pts = [tf(p) for p in points]
    parts = [f"M {f(pts[0][0])} {f(pts[0][1])}"]
    parts += [f"L {f(x)} {f(y)}" for x, y in pts[1:]]
    parts.append("Z")
    return " ".join(parts)


def svg_doc(rings, tf: Tf, size: int = CANVAS) -> str:
    body = "\n".join(f'  <path fill="{color}" d="{poly_d(pts, tf)}"/>' for pts, color, _ in rings)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" '
        f'viewBox="0 0 {size} {size}" role="img" '
        f'aria-label="萝卜智能 Radish Intelligence 标识">\n{body}\n</svg>\n'
    )


def fit(cfg, rings, size: int = CANVAS, margin: int = MARGIN):
    """量包围盒，返回把图形等比放进 size x size 画布并居中的变换。"""
    rot = cfg.get("rot", 0.0)
    x0, y0, x1, y1 = bounds(rings, rot)
    s = (size - 2 * margin) / max(x1 - x0, y1 - y0)
    tf0 = Tf(s, 0.0, 0.0, rot)
    cs = [tf0((x0, y0)), tf0((x1, y0)), tf0((x0, y1)), tf0((x1, y1))]
    rx0, ry0 = min(c[0] for c in cs), min(c[1] for c in cs)
    rx1, ry1 = max(c[0] for c in cs), max(c[1] for c in cs)
    tf = Tf(s, (size - (rx1 - rx0)) / 2 - rx0, (size - (ry1 - ry0)) / 2 - ry0, rot)
    return tf, (rx1 - rx0, ry1 - ry0)


# ---------------------------------------------------------------------------
# 候选方案
# ---------------------------------------------------------------------------

BASE = dict(
    R=300,
    L=560,
    w0=46,
    k=2.1,
    tip_len=68,
    tilt=8.0,
    crown_deg=-66,
    leaves=[
        (268, 104, -100),
        (258, 100, -66),
        (216, 90, -34),
    ],
    leaf_radii=[12, 30, 8, 30],
    body_fill=JADE,
    leaf_fill=JADE_DEEP,
)

VARIANTS = {
    "a": dict(BASE, L=520, w0=66, k=1.7, tilt=0.0),
    "b": dict(BASE, L=540, w0=54, k=1.9, tilt=0.0),
    "c": dict(BASE, L=545, w0=58, k=1.8, tilt=10.0),
    "d": dict(BASE, L=540, w0=54, k=1.9, tilt=0.0, crown_deg=-48,
              leaves=[(276, 106, -84), (266, 102, -50), (222, 92, -18)]),
    "e": dict(BASE, rot=-36, L=540, w0=54, k=1.9, tilt=0.0, crown_deg=-56,
              leaves=[(260, 100, -54), (250, 96, -20), (210, 88, 12)]),
}


def main() -> int:
    want_png = "--png" in sys.argv
    problems: list[str] = []
    for name, cfg in VARIANTS.items():
        rings, _ = build_shape(cfg)
        problems += validate(rings[0][0], f"{name}/body")
        for pts, _, kind in rings[1:]:
            problems += validate(pts, f"{name}/{kind}")
        tf, (w, h) = fit(cfg, rings)
        svg_path = OUT / f"draft-{name}.svg"
        svg_path.write_text(svg_doc(rings, tf), encoding="utf-8")
        print(f"{name}: 画布占比 {w:.0f} x {h:.0f}  宽高比 {w / h:.3f}")
        if want_png:
            subprocess.run(
                [sys.executable, str(RENDER), str(svg_path), "--size", "380",
                 "--scale", "3", "--png", f"/tmp/v6/{name}.png"],
                check=False, capture_output=True,
            )
    if problems:
        print("\n校验未通过：")
        for p in problems:
            print("  -", p)
        return 1
    print("\n校验通过：所有轮廓绕向正确、无自交。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
