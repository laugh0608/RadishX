# 04 间距、圆角、描边与层级

## 1. 间距阶梯

基础 4px 网格：

| Token | 值 |
| --- | --- |
| `--rd-space-1` | 4px |
| `--rd-space-2` | 8px |
| `--rd-space-3` | 12px |
| `--rd-space-4` | 16px |
| `--rd-space-5` | 24px |
| `--rd-space-6` | 32px |
| `--rd-space-7` | 48px |
| `--rd-space-8` | 64px |

规则：

- 面板内边距 12–16px（Workbench）；Brand 面区块间距可用 48–64px 制造留白。
- 间距承担层级，不靠装饰分隔线堆叠。

## 2. 圆角

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-radius-xs` | 4px | 输入框、小控件、窗口微倒角 |
| `--rd-radius-sm` | 8px | 按钮、chip、卡片（Workbench 默认） |
| `--rd-radius-md` | 12px | 大卡片、面板、浮层 |
| `--rd-radius-lg` | 16px | Brand 面大卡片、媒体框 |
| `--rd-radius-pill` | 999px | 胶囊 chip、toggle、pill 筛选器 |

档位纪律：Workbench 面卡片 / 面板不超过 12px，控件用 8px；Brand 面可用到 16px。参考图偏爱 12–16px 大圆角，家族在 Workbench 面收敛到 8–12px 以保持工程感，仅 Brand 面放宽。

## 3. 描边与阴影

- 边框优先于重阴影表达层级（全家族）。
- 默认边框 `--rd-border-soft`，可交互控件 `--rd-border-strong`，焦点 `--rd-focus-ring`（2px）。
- 阴影三档：`--rd-shadow-panel`（卡片）、`--rd-shadow-popover`（浮层 / 菜单 / toast）、`--rd-shadow-soft`（Brand 面大图）。
- 不做卡片套卡片；不做双层大白框浮层。

## 4. 密度档

| 档 | 行高基准 | 控件最小高 | 适用 |
| --- | --- | --- | --- |
| comfortable | 正文 1.6 | 40px | Brand 面、低密度阅读页 |
| compact | 正文 1.5 | 32px | Workbench 面表格、表单、列表 |

- 触控目标不小于 44px（移动与触控场景），即使 compact 档也须在触控端放大命中区。
- 常驻侧栏默认宽度不低于 220px（Flow / Mind 先例）。
- 固定格式元素须有稳定尺寸或 min/max 约束，避免 hover、状态 chip、长标签或语言切换导致布局跳动。

## 5. 层级（z-index 语义）

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-z-base` | 0 | 常规内容 |
| `--rd-z-sticky` | 100 | 吸顶导航、表头 |
| `--rd-z-dropdown` | 200 | 下拉、气泡 |
| `--rd-z-overlay` | 300 | 遮罩层 |
| `--rd-z-modal` | 400 | 弹窗、抽屉 |
| `--rd-z-toast` | 500 | 全局提示 |
