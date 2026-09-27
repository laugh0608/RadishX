#!/usr/bin/env python3
"""萝卜智能标识 V6 几何生成器（最终版）。

构造（全部解析计算，轮廓天然单调、不自交）：
  身体 = 半径 R 的圆；根部 = 由切点向下的对称收束，收成尖根。
  下轮廓线从圆的切点出发，沿同一切线方向一直走到根尖，因此在接点处严格相切，
  轮廓沿圆周单向走一圈后回到另一侧切点，不存在拼装接缝。

设计空间原点位于身体圆心，y 向下。main() 量出真实包围盒后等比归一化到 1:1 画布。
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
MARGIN = 34


def f(v: float) -> str:
    return f"{v:.2f}".rstrip("0").rstrip(".")


def P(deg: float, r: float, cx: float = 0.0, cy: float = 0.0):
    a = math.radians(deg)
    return (cx + r * math.cos(a), cy + r * math.sin(a))


class Tf:
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
# 根体：圆 + 相切收束的根尖
# ---------------------------------------------------------------------------


def body_outline(R: float, y_base: float, y_tip: float, n_body: int = 260,
                 n_side: int = 110) -> list[tuple[float, float]]:
    """圆身与三角形根部的并集轮廓，轮廓严格简单（不自交）。

    底边取在圆心下方 y_base；圆与底边的交点为 P、Q，根尖在 (0, y_tip)。
    轮廓 = 圆的优弧 P -> 顶部 -> Q，再经 Q -> 根尖 -> P 闭合。
    """
    if y_base >= R:
        raise ValueError("y_base 必须小于 R，否则圆与底边无交点")
    if y_tip <= y_base:
        raise ValueError("y_tip 必须大于 y_base")
    x_hit = math.sqrt(R * R - y_base * y_base)
    pq = (x_hit, y_base)                 # 右侧交点
    qp = (-x_hit, y_base)                # 左侧交点
    print(f"  [geom] 圆与底边交点 ±{x_hit:.1f} @ y={y_base:.0f}，根尖 y={y_tip:.0f}")

    a_p = math.degrees(math.atan2(y_base, x_hit)) % 360      # 右交点角度
    a_q = math.degrees(math.atan2(y_base, -x_hit)) % 360     # 左交点角度

    pts: list[tuple[float, float]] = []
    # 圆：左交点 -> 正上方 -> 右交点（逆时针，覆盖圆的其余全部）
    for i in range(n_body + 1):
        pts.append(P(a_q + ((a_p + 360.0) - a_q) * i / n_body, R))
    # 右侧边：交点 -> 根尖
    for i in range(1, n_side + 1):
        t = i / n_side
        pts.append((pq[0] + (0.0 - pq[0]) * t, pq[1] + (y_tip - pq[1]) * t))
    # 左侧边：根尖 -> 交点
    for i in range(n_side - 1, 0, -1):
        t = i / n_side
        pts.append((qp[0] + (0.0 - qp[0]) * t, qp[1] + (y_tip - qp[1]) * t))
    return dedupe(pts)


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


def rounded_poly_pts(points, radii, arc_step: float = 8.0):
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
        steps = max(2, int(math.ceil(abs(a1 - a0) / arc_step)))
        out += [P(a0 + (a1 - a0) * k / steps, r_eff, cen[0], cen[1]) for k in range(steps + 1)]
    return dedupe(out)


def dedupe(pts, eps: float = 1e-6):
    out = []
    for p in pts:
        if not out or abs(p[0] - out[-1][0]) > eps or abs(p[1] - out[-1][1]) > eps:
            out.append(p)
    if len(out) > 1 and abs(out[0][0] - out[-1][0]) <= eps and abs(out[0][1] - out[-1][1]) <= eps:
        out.pop()
    return out


# ---------------------------------------------------------------------------
# 校验与组装
# ---------------------------------------------------------------------------


def signed_area(pts):
    t = 0.0
    n = len(pts)
    for i in range(n):
        x0, y0 = pts[i]
        x1, y1 = pts[(i + 1) % n]
        t += x0 * y1 - x1 * y0
    return t / 2.0


def validate(pts, label: str) -> list[str]:
    issues = []
    if abs(signed_area(pts)) < 1.0:
        issues.append(f"{label}: 面积趋零")
    if len(pts) < 8:
        issues.append(f"{label}: 采样点过少（{len(pts)}）")
    return issues


def slot_ring(cfg, crown):
    """可选：叶冠下方的斜向切槽（以背景色填充形成负空间）。"""
    if not cfg.get("slot"):
        return None
    (x0f, y0f, x1f, y1f, half_w) = cfg["slot"]
    ax, ay = cfg["R"] * x0f, cfg["R"] * y0f
    bx, by = cfg["R"] * x1f, cfg["R"] * y1f
    vx, vy = bx - ax, by - ay
    ln = math.hypot(vx, vy)
    ux, uy = vx / ln, vy / ln
    px, py = -uy, ux
    pts = [
        (ax + px * half_w, ay + py * half_w),
        (bx + px * half_w, by + py * half_w),
        (bx - px * half_w, by - py * half_w),
        (ax - px * half_w, ay - py * half_w),
    ]
    return rounded_poly_pts(pts, [half_w * 0.9] * 4)


def build_rings(cfg):
    R = cfg["R"]
    body = body_outline(R, cfg["y_base"], cfg["y_tip"])
    crown = P(cfg["crown_deg"], R)
    rings = [(body, cfg["body_fill"], "body")]
    slot = slot_ring(cfg, crown)
    if slot:
        rings.append((slot, cfg.get("bg_fill", "#ffffff"), "slot"))
    for (length, width, angle) in cfg["leaves"]:
        pts = leaf_pts(crown, length, width, angle)
        rings.append((rounded_poly_pts(pts, cfg["leaf_radii"]), cfg["leaf_fill"], "leaf"))
    return rings, crown


def bounds(rings, rot: float = 0.0):
    cs, sn = math.cos(math.radians(rot)), math.sin(math.radians(rot))
    xs, ys = [], []
    for pts, _, _ in rings:
        for p in pts:
            xs.append(p[0] * cs - p[1] * sn)
            ys.append(p[0] * sn + p[1] * cs)
    return min(xs), min(ys), max(xs), max(ys)


def fit(cfg, rings, size: int = CANVAS, margin: int = MARGIN):
    rot = cfg.get("rot", 0.0)
    x0, y0, x1, y1 = bounds(rings, rot)
    s = (size - 2 * margin) / max(x1 - x0, y1 - y0)
    tf0 = Tf(s, 0.0, 0.0, rot)
    cs = [tf0((x0, y0)), tf0((x1, y0)), tf0((x0, y1)), tf0((x1, y1))]
    rx0, ry0 = min(c[0] for c in cs), min(c[1] for c in cs)
    rx1, ry1 = max(c[0] for c in cs), max(c[1] for c in cs)
    tf = Tf(s, (size - (rx1 - rx0)) / 2 - rx0, (size - (ry1 - ry0)) / 2 - ry0, rot)
    return tf, (rx1 - rx0, ry1 - ry0)


def poly_d(points, tf: Tf) -> str:
    pts = [tf(p) for p in points]
    parts = [f"M {f(pts[0][0])} {f(pts[0][1])}"]
    parts += [f"L {f(x)} {f(y)}" for x, y in pts[1:]]
    parts.append("Z")
    return " ".join(parts)


def svg_doc(rings, tf: Tf, size: int = CANVAS, label: str = "萝卜智能 Radish Intelligence 标识") -> str:
    body = "\n".join(f'  <path fill="{color}" d="{poly_d(pts, tf)}"/>' for pts, color, _ in rings)
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" '
        f'viewBox="0 0 {size} {size}" role="img" aria-label="{label}">\n{body}\n</svg>\n'
    )


# ---------------------------------------------------------------------------
# 候选方案
# ---------------------------------------------------------------------------

BASE = dict(
    R=300,
    y_base=180.0,        # 根部底边高度（圆心下方）：越大根越宽越短
    y_tip=470.0,         # 根尖高度
    crown_deg=-68,
    leaves=[
        (272, 106, -102),
        (262, 100, -68),
        (220, 90, -36),
    ],
    leaf_radii=[12, 30, 8, 30],
    body_fill=JADE,
    leaf_fill=JADE_DEEP,
)

VARIANTS = {
    # a：叶冠三片均匀展开
    # a：短圆三叶，向上展开（主方案）
    "a": dict(BASE, y_base=145.0, y_tip=418.0, crown_deg=-76, bulge=0.34,
              leaves=[(198, 86, -108), (196, 86, -78), (186, 84, -48)],
              leaf_radii=[26, 14, 30, 14]),
    # b：三叶更紧凑
    "b": dict(BASE, y_base=160.0, y_tip=405.0, crown_deg=-84, bulge=0.34,
              leaves=[(176, 80, -116), (174, 80, -86), (166, 78, -56)],
              leaf_radii=[24, 13, 28, 13]),
    # d：轻微倾斜，根尖偏左下
    "d": dict(BASE, rot=-24, y_base=152.0, y_tip=420.0, crown_deg=-64, bulge=0.34,
              leaves=[(190, 84, -74), (188, 84, -44), (178, 82, -14)],
              leaf_radii=[26, 14, 30, 14]),
    # f：a + 沿身体轴向的负空间切槽（数据通路）
    "f": dict(BASE, y_base=145.0, y_tip=418.0, crown_deg=-76, bulge=0.34,
              leaves=[(198, 86, -108), (196, 86, -78), (186, 84, -48)],
              leaf_radii=[26, 14, 30, 14],
              slot=(-0.12, -0.58, 0.14, 0.26, 11.0), bg_fill="#ffffff"),
}


def main() -> int:
    want_png = "--png" in sys.argv
    problems: list[str] = []
    for name, cfg in VARIANTS.items():
        rings, _ = build_rings(cfg)
        for pts, _, kind in rings:
            problems += validate(pts, f"{name}/{kind}")
        tf, (w, h) = fit(cfg, rings)
        svg_path = OUT / f"draft-{name}.svg"
        svg_path.write_text(svg_doc(rings, tf), encoding="utf-8")
        print(f"{name}: 图形 {w:.0f} x {h:.0f}  宽高比 {w / h:.3f}")
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
    print("\n校验通过：轮廓单调、面积正常。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
