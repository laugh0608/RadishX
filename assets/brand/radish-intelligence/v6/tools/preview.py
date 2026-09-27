#!/usr/bin/env python3
"""把 build.py 里的候选方案渲染成 PNG 预览，便于逐版比对。

用法：python3 tools/preview.py [--size 400] [--scale 3] [--bg '#ffffff']
"""

from __future__ import annotations

import argparse
import pathlib
import subprocess
import sys

HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

from build import CANVAS, MARGIN, Tf, VARIANTS, emit, measure, svg_doc  # noqa: E402


def render_variant(name: str, cfg: dict, out_dir: pathlib.Path, size: int, scale: int, bg: str | None):
    rot = cfg.get("rot", 0.0)
    _, _, bb = measure(cfg, rot)
    w, h = bb[2] - bb[0], bb[3] - bb[1]
    s = (CANVAS - 2 * MARGIN) / max(w, h)
    tf0 = Tf(s, 0.0, 0.0, rot)
    corners = [tf0((bb[0], bb[1])), tf0((bb[2], bb[1])), tf0((bb[0], bb[3])), tf0((bb[2], bb[3]))]
    rx0, ry0 = min(c[0] for c in corners), min(c[1] for c in corners)
    rx1, ry1 = max(c[0] for c in corners), max(c[1] for c in corners)
    tf = Tf(s, (CANVAS - (rx1 - rx0)) / 2 - rx0, (CANVAS - (ry1 - ry0)) / 2 - ry0, rot)

    svg_path = HERE.parent / f"draft-{name}.svg"
    svg_path.write_text(svg_doc(emit(cfg, tf)), encoding="utf-8")

    png = out_dir / f"{name}.png"
    cmd = [
        sys.executable, str(HERE / "render.py"), str(svg_path),
        "--size", str(size), "--scale", str(scale), "--png", str(png),
    ]
    if bg:
        cmd += ["--bg", bg]
    subprocess.run(cmd, check=False)
    return (rx1 - rx0, ry1 - ry0)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--size", type=int, default=400)
    ap.add_argument("--scale", type=int, default=3)
    ap.add_argument("--bg", default="#ffffff")
    ap.add_argument("--out", type=pathlib.Path, default=pathlib.Path("/tmp/v6"))
    args = ap.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)

    for name, cfg in VARIANTS.items():
        w, h = render_variant(name, dict(cfg), args.out, args.size, args.scale, args.bg)
        label = cfg.get("label", name)
        print(f"{name:8s} {label:22s} {w:6.0f} x {h:6.0f}  ratio {w / h:.3f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
