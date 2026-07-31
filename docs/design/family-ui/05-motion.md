# 05 动效

## 1. 时长与缓动

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-motion-fast` | 120ms | hover、焦点、chip 状态切换 |
| `--rd-motion-base` | 200ms | 下拉、tab、开关、按钮反馈 |
| `--rd-motion-slow` | 320ms | 浮层进入 / 退出、抽屉 |
| `--rd-motion-brand` | 500ms | Brand 面主视觉进入或展示型叙事动效 |
| `--rd-ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | 通用 |
| `--rd-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | 进入 |
| `--rd-ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | 退出 |

## 2. 原则

- 动效服务节奏与内容进入，不制造持续干扰。
- Workbench 面动效克制：状态反馈、焦点、展开收起为主，不做装饰性循环动画。
- Brand 面可用淡入、轻位移、轻视差、图片浮层进入；同屏不堆叠多组入场。
- 不使用持续抖动、复杂背景动画、影响阅读的循环动效。
- 移动端降低动效强度与幅度。

## 3. 无障碍

- 必须尊重 `prefers-reduced-motion: reduce`：关闭非必要位移 / 视差 / 循环动画，只保留不引起前庭不适的透明度过渡。
- 动效不得成为信息的唯一载体；状态变化必须有静态可读结果。
