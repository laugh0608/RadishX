#!/usr/bin/env python3
"""只读几何预览工具：把 SVG 光栅化为 PNG 并输出 ASCII 缩略图。

用途：在设计 V6 萝卜符号时，不依赖浏览器或第三方库即可检查造型、留白与
小尺寸可读性。仅使用 Python 标准库；不修改任何原始素材。
"""

from __future__ import annotations

import argparse
import json
import math
import re
import struct
import sys
import zlib
from pathlib import Path

# ---------------------------------------------------------------------------
# SVG 子集解析（path / circle / rect / polygon / g）
# ---------------------------------------------------------------------------

TOKEN_RE = re.compile(r"([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:[eE][-+]?\d+)?)")


def parse_path(d: str) -> list[list[tuple[float, float]]]:
    """把 path 的 d 属性解析为若干条折线（已展平曲线）。返回子路径列表。"""
    tokens: list[tuple[str, str]] = []
    for m in TOKEN_RE.finditer(d):
        if m.group(1):
            tokens.append(("cmd", m.group(1)))
        else:
            tokens.append(("num", m.group(2)))

    subs: list[list[tuple[float, float]]] = []
    cur: list[tuple[float, float]] = []
    pos = (0.0, 0.0)
    start = (0.0, 0.0)
    prev_ctrl: tuple[float, float] | None = None
    cmd = ""
    i = 0

    def nums(n: int) -> list[float] | None:
        nonlocal i
        vals: list[float] = []
        j = i
        while len(vals) < n and j < len(tokens) and tokens[j][0] == "num":
            vals.append(float(tokens[j][1]))
            j += 1
        if len(vals) < n:
            return None
        i = j
        return vals

    while i < len(tokens):
        kind, val = tokens[i]
        if kind == "cmd":
            cmd = val
            i += 1
            if cmd in "Zz":
                if cur:
                    if cur[0] != cur[-1]:
                        cur.append(cur[0])
                    subs.append(cur)
                    cur = []
                pos = start
                prev_ctrl = None
                continue
        elif not cmd:
            i += 1
            continue

        rel = cmd.islower()
        c = cmd.upper()

        if c == "M":
            v = nums(2)
            if v is None:
                break
            pos = (pos[0] + v[0], pos[1] + v[1]) if rel else (v[0], v[1])
            start = pos
            if cur:
                subs.append(cur)
            cur = [pos]
            prev_ctrl = None
            cmd = "l" if rel else "L"
        elif c == "L":
            v = nums(2)
            if v is None:
                break
            pos = (pos[0] + v[0], pos[1] + v[1]) if rel else (v[0], v[1])
            cur.append(pos)
            prev_ctrl = None
        elif c == "H":
            v = nums(1)
            if v is None:
                break
            pos = (pos[0] + v[0], pos[1]) if rel else (v[0], pos[1])
            cur.append(pos)
            prev_ctrl = None
        elif c == "V":
            v = nums(1)
            if v is None:
                break
            pos = (pos[0], pos[1] + v[0]) if rel else (pos[0], v[0])
            cur.append(pos)
            prev_ctrl = None
        elif c == "C":
            v = nums(6)
            if v is None:
                break
            p0 = pos
            if rel:
                c1 = (p0[0] + v[0], p0[1] + v[1])
                c2 = (p0[0] + v[2], p0[1] + v[3])
                p3 = (p0[0] + v[4], p0[1] + v[5])
            else:
                c1, c2, p3 = (v[0], v[1]), (v[2], v[3]), (v[4], v[5])
            cur.extend(flatten_cubic(p0, c1, c2, p3))
            pos = p3
            prev_ctrl = c2
        elif c == "S":
            v = nums(4)
            if v is None:
                break
            p0 = pos
            c1 = (2 * p0[0] - prev_ctrl[0], 2 * p0[1] - prev_ctrl[1]) if prev_ctrl else p0
            if rel:
                c2 = (p0[0] + v[0], p0[1] + v[1])
                p3 = (p0[0] + v[2], p0[1] + v[3])
            else:
                c2, p3 = (v[0], v[1]), (v[2], v[3])
            cur.extend(flatten_cubic(p0, c1, c2, p3))
            pos = p3
            prev_ctrl = c2
        elif c == "Q":
            v = nums(4)
            if v is None:
                break
            p0 = pos
            if rel:
                c1 = (p0[0] + v[0], p0[1] + v[1])
                p3 = (p0[0] + v[2], p0[1] + v[3])
            else:
                c1, p3 = (v[0], v[1]), (v[2], v[3])
            cur.extend(flatten_quad(p0, c1, p3))
            pos = p3
            prev_ctrl = c1
        elif c == "A":
            v = nums(7)
            if v is None:
                break
            p0 = pos
            if rel:
                p1 = (p0[0] + v[5], p0[1] + v[6])
            else:
                p1 = (v[5], v[6])
            cur.extend(flatten_arc(p0, v[0], v[1], v[2], v[3] != 0, v[4] != 0, p1))
            pos = p1
            prev_ctrl = None
        else:
            i += 1
            continue

        while i < len(tokens) and tokens[i][0] == "num":
            if c == "L":
                v = nums(2)
                if v is None:
                    break
                pos = (pos[0] + v[0], pos[1] + v[1]) if rel else (v[0], v[1])
                cur.append(pos)
            elif c == "C":
                v = nums(6)
                if v is None:
                    break
                p0 = pos
                if rel:
                    c1 = (p0[0] + v[0], p0[1] + v[1])
                    c2 = (p0[0] + v[2], p0[1] + v[3])
                    p3 = (p0[0] + v[4], p0[1] + v[5])
                else:
                    c1, c2, p3 = (v[0], v[1]), (v[2], v[3]), (v[4], v[5])
                cur.extend(flatten_cubic(p0, c1, c2, p3))
                pos = p3
            else:
                break

    if cur:
        subs.append(cur)
    return subs


def flatten_cubic(p0, c1, c2, p3, steps: int = 24):
    out = []
    for k in range(1, steps + 1):
        t = k / steps
        mt = 1 - t
        x = mt**3 * p0[0] + 3 * mt**2 * t * c1[0] + 3 * mt * t**2 * c2[0] + t**3 * p3[0]
        y = mt**3 * p0[1] + 3 * mt**2 * t * c1[1] + 3 * mt * t**2 * c2[1] + t**3 * p3[1]
        out.append((x, y))
    return out


def flatten_quad(p0, c1, p3, steps: int = 16):
    out = []
    for k in range(1, steps + 1):
        t = k / steps
        mt = 1 - t
        x = mt**2 * p0[0] + 2 * mt * t * c1[0] + t**2 * p3[0]
        y = mt**2 * p0[1] + 2 * mt * t * c1[1] + t**2 * p3[1]
        out.append((x, y))
    return out


def flatten_arc(p0, rx, ry, rot_deg, large, sweep, p1, steps: int = 48):
    if rx == 0 or ry == 0 or p0 == p1:
        return [p1]
    phi = math.radians(rot_deg)
    cos_p, sin_p = math.cos(phi), math.sin(phi)
    dx2, dy2 = (p0[0] - p1[0]) / 2, (p0[1] - p1[1]) / 2
    x1p = cos_p * dx2 + sin_p * dy2
    y1p = -sin_p * dx2 + cos_p * dy2
    rx, ry = abs(rx), abs(ry)
    lam = (x1p**2) / (rx**2) + (y1p**2) / (ry**2)
    if lam > 1:
        s = math.sqrt(lam)
        rx, ry = rx * s, ry * s
    num = rx**2 * ry**2 - rx**2 * y1p**2 - ry**2 * x1p**2
    den = rx**2 * y1p**2 + ry**2 * x1p**2
    coef = math.sqrt(max(num / den, 0.0))
    if large == sweep:
        coef = -coef
    cxp = coef * rx * y1p / ry
    cyp = -coef * ry * x1p / rx
    cx = cos_p * cxp - sin_p * cyp + (p0[0] + p1[0]) / 2
    cy = sin_p * cxp + cos_p * cyp + (p0[1] + p1[1]) / 2

    def angle(ux, uy, vx, vy):
        dot = ux * vx + uy * vy
        norm = math.hypot(ux, uy) * math.hypot(vx, vy)
        a = math.acos(max(-1.0, min(1.0, dot / norm)))
        return -a if (ux * vy - uy * vx) < 0 else a

    theta1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry)
    dtheta = angle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry)
    if not sweep and dtheta > 0:
        dtheta -= 2 * math.pi
    elif sweep and dtheta < 0:
        dtheta += 2 * math.pi

    out = []
    for k in range(1, steps + 1):
        t = theta1 + dtheta * k / steps
        xs, ys = rx * math.cos(t), ry * math.sin(t)
        out.append((cos_p * xs - sin_p * ys + cx, sin_p * xs + cos_p * ys + cy))
    return out


class Shape:
    __slots__ = ("rings", "color")

    def __init__(self, rings, color):
        self.rings = rings
        self.color = color


def parse_svg(text: str) -> tuple[float, float, list[Shape]]:
    vb = re.search(r'viewBox\s*=\s*"([^"]+)"', text)
    if vb:
        parts = [float(x) for x in re.split(r"[\s,]+", vb.group(1).strip())]
        w, h = parts[2], parts[3]
    else:
        wm = re.search(r'width\s*=\s*"([\d.]+)', text)
        hm = re.search(r'height\s*=\s*"([\d.]+)', text)
        w, h = float(wm.group(1)), float(hm.group(1))

    shapes: list[Shape] = []
    for m in re.finditer(r"<(path|circle|rect|polygon|ellipse)\b([^>]*)/?>", text, re.S):
        tag, attrs = m.group(1), m.group(2)
        fill = re.search(r'fill\s*=\s*"([^"]+)"', attrs)
        color = fill.group(1) if fill else "#000000"
        if color in ("none", "transparent"):
            continue

        def attr(name, default=None):
            mm = re.search(name + r'\s*=\s*"([^"]+)"', attrs)
            return mm.group(1) if mm else default

        if tag == "path":
            d = attr("d", "")
            rings = parse_path(d)
        elif tag == "circle":
            cx, cy, r = float(attr("cx", 0)), float(attr("cy", 0)), float(attr("r", 0))
            rings = [
                [
                    (cx + r * math.cos(t), cy + r * math.sin(t))
                    for t in [k * 2 * math.pi / 64 for k in range(65)]
                ]
            ]
        elif tag == "ellipse":
            cx, cy = float(attr("cx", 0)), float(attr("cy", 0))
            rx, ry = float(attr("rx", 0)), float(attr("ry", 0))
            rings = [
                [
                    (cx + rx * math.cos(t), cy + ry * math.sin(t))
                    for t in [k * 2 * math.pi / 64 for k in range(65)]
                ]
            ]
        elif tag == "rect":
            x, y = float(attr("x", 0)), float(attr("y", 0))
            rw, rh = float(attr("width", 0)), float(attr("height", 0))
            rings = [[(x, y), (x + rw, y), (x + rw, y + rh), (x, y + rh), (x, y)]]
        elif tag == "polygon":
            pts = [float(v) for v in re.split(r"[\s,]+", attr("points", "").strip()) if v]
            rings = [[(pts[i], pts[i + 1]) for i in range(0, len(pts) - 1, 2)]]
        else:
            continue
        if rings:
            shapes.append(Shape(rings, color))
    return w, h, shapes


# ---------------------------------------------------------------------------
# 光栅化
# ---------------------------------------------------------------------------


def decode_color(value: str) -> tuple[int, int, int]:
    v = value.strip()
    if v.startswith("#"):
        v = v[1:]
        if len(v) == 3:
            v = "".join(ch * 2 for ch in v)
        return int(v[0:2], 16), int(v[2:4], 16), int(v[4:6], 16)
    m = re.match(r"rgba?\(([^)]+)\)", v)
    if m:
        parts = [p.strip() for p in m.group(1).split(",")]
        return int(float(parts[0])), int(float(parts[1])), int(float(parts[2]))
    return (0, 0, 0)


def coverage(ring, px: float, py: float) -> int:
    """非零环绕规则单点判定，返回 1/0。"""
    winding = 0
    n = len(ring)
    for i in range(n):
        x0, y0 = ring[i]
        x1, y1 = ring[i + 1] if i + 1 < n else ring[0]
        if (y0 <= py < y1) or (y1 <= py < y0):
            t = (py - y0) / (y1 - y0)
            if x0 + t * (x1 - x0) > px:
                winding += 1 if y1 > y0 else -1
    return 1 if winding != 0 else 0

def render(svg_path: Path, size: int, scale: int, bg: str | None):
    text = svg_path.read_text(encoding="utf-8")
    vw, vh, shapes = parse_svg(text)
    k = size / max(vw, vh)
    off_x = (size - vw * k) / 2
    off_y = (size - vh * k) / 2

    bg_rgb = decode_color(bg) if bg else None
    pix = [[(0, 0, 0, 0) for _ in range(size)] for _ in range(size)]
    if bg_rgb:
        pix = [[(bg_rgb[0], bg_rgb[1], bg_rgb[2], 255) for _ in range(size)] for _ in range(size)]

    step = 1.0 / scale
    offsets = [
        (sx * step + step / 2, sy * step + step / 2)
        for sy in range(scale)
        for sx in range(scale)
    ]

    for shape in shapes:
        rgb = decode_color(shape.color)
        scaled_rings = [
            [((x) * k + off_x, (y) * k + off_y) for x, y in ring] for ring in shape.rings
        ]
        xs = [p[0] for ring in scaled_rings for p in ring]
        ys = [p[1] for ring in scaled_rings for p in ring]
        x0 = max(0, int(min(xs)) - 1)
        x1 = min(size - 1, int(max(xs)) + 1)
        y0 = max(0, int(min(ys)) - 1)
        y1 = min(size - 1, int(max(ys)) + 1)
        for py in range(y0, y1 + 1):
            row = pix[py]
            for px in range(x0, x1 + 1):
                hits = 0
                for ox, oy in offsets:
                    inside = 0
                    for ring in scaled_rings:
                        inside ^= coverage(ring, px + ox, py + oy)
                    hits += inside
                if not hits:
                    continue
                cov = hits / len(offsets)
                br, bgc, bb, ba = row[px]
                a = cov + (ba / 255) * (1 - cov)
                if a <= 0:
                    continue
                nr = (rgb[0] * cov + br * (ba / 255) * (1 - cov)) / a
                ng = (rgb[1] * cov + bgc * (ba / 255) * (1 - cov)) / a
                nb = (rgb[2] * cov + bb * (ba / 255) * (1 - cov)) / a
                row[px] = (int(nr + 0.5), int(ng + 0.5), int(nb + 0.5), int(a * 255 + 0.5))
    return pix


def write_png(pix, path: Path):
    size = len(pix)
    raw = b"".join(
        b"\x00" + b"".join(struct.pack("BBBB", *pix[y][x]) for x in range(size)) for y in range(size)
    )

    def chunk(tag: bytes, data: bytes):
        body = tag + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(raw, 9))
    png += chunk(b"IEND", b"")
    path.write_bytes(png)


RAMP = " .:-=+*#%@"


def ascii_preview(pix, cols: int, bg_light: bool = True):
    size = len(pix)
    step = size / cols
    rows = cols // 2
    lines = []
    for ry in range(rows):
        line = []
        for rx in range(cols):
            x0, x1 = int(rx * step), max(int(rx * step) + 1, int((rx + 1) * step))
            y0, y1 = int(ry * step * 2), max(int(ry * step * 2) + 1, int((ry + 1) * step * 2))
            tot = 0.0
            cnt = 0
            for y in range(y0, min(y1, size)):
                for x in range(x0, min(x1, size)):
                    r, g, b, a = pix[y][x]
                    lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
                    alpha = a / 255
                    ink = alpha * (1 - lum if bg_light else lum)
                    tot += ink
                    cnt += 1
            v = tot / cnt if cnt else 0.0
            idx = min(len(RAMP) - 1, int((1 - v) * (len(RAMP) - 1) + 0.5)) if bg_light else min(
                len(RAMP) - 1, int(v * (len(RAMP) - 1) + 0.5)
            )
            line.append(RAMP[idx])
        lines.append("".join(line))
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("svg", type=Path)
    ap.add_argument("--png", type=Path)
    ap.add_argument("--size", type=int, default=256)
    ap.add_argument("--scale", type=int, default=3)
    ap.add_argument("--bg")
    ap.add_argument("--ascii", type=int, default=0)
    ap.add_argument("--json", type=Path)
    args = ap.parse_args()

    pix = render(args.svg, args.size, args.scale, args.bg)
    if args.png:
        args.png.parent.mkdir(parents=True, exist_ok=True)
        write_png(pix, args.png)
        print(f"wrote {args.png} ({args.size}x{args.size})")
    if args.ascii:
        print(ascii_preview(pix, args.ascii, bg_light=not args.bg or args.bg.upper() > "#888888"))
    if args.json:
        cov = [[pix[y][x][3] / 255 for x in range(args.size)] for y in range(args.size)]
        xs = [x for x in range(args.size) for y in range(args.size) if cov[y][x] > 0.5]
        ys = [y for y in range(args.size) for x in range(args.size) if cov[y][x] > 0.5]
        data = {
            "size": args.size,
            "bbox": [min(xs), min(ys), max(xs), max(ys)] if xs else None,
            "bbox_w": (max(xs) - min(xs) + 1) if xs else 0,
            "bbox_h": (max(ys) - min(ys) + 1) if ys else 0,
            "ink_ratio": sum(sum(r) for r in cov) / (args.size * args.size),
        }
        args.json.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        print(json.dumps(data, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    sys.exit(main())
