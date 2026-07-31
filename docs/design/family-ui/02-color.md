# 02 色彩系统

色彩系统分两层：L0 原始母板（只定义候选色阶、不直接消费）与 L1 语义 token（组件消费层）。母板是通用参考集合，不为任何具体项目预先分配主色或辅助色；使用方可按自身品牌与内容决定是否采用、覆盖或扩展。

机器可读定义：[tokens/tokens.json](tokens/tokens.json)；CSS 参考实现：[tokens/tokens.css](tokens/tokens.css)。三处值必须一致，修改时三处同步。

## 1. L0 配色母板

由人民币纸币色系提炼的低饱和母板：

| 色系 | 值 |
| --- | --- |
| 胭脂（100 元系） | `#b24057` `#cd5076` `#bf6074` `#da738a` `#cc7888` `#cd94b2` |
| 玉青（50 元系） | `#1b3c31` `#437371` `#4f9c83` `#73bea0` `#98c0c9` `#c4f8e7` |
| 赭石（20 元系） | `#824d3e` `#8f584f` `#886349` `#b5826d` `#e9be9e` `#f3e7e9` |
| 墨蓝（10 元系） | `#1f2d38` `#414d61` `#435c74` `#c3d8e9` `#d4e1f1` `#c1d2e2` |
| 雅紫（5 元系） | `#3f3157` `#604771` `#846992` `#995a70` `#d5bfc2` `#e7d5be` |
| 灰玉（1 元系） | `#6e736d` `#5d6c57` `#78a496` `#89916b` `#cfe0d0` `#e5e1c8` |

家族补充的中性纸阶与墨字阶（从既有实现提炼）：

| 名称 | 值 | 说明 |
| --- | --- | --- |
| paper-50 | `#fdfbf7` | 最浅暖白 |
| paper-100 | `#fbf7f0` | 面板底 |
| paper-200 | `#f4efe6` | 纸色基底 |
| paper-300 | `#efe7db` | 次级分区 |
| paper-400 | `#e6dccc` | 深纸色 |
| paper-500 | `#d9cbb9` | 实色弱边框 |
| ink-900 | `#11100f` | 墨黑（深色块） |
| ink-700 | `#2f2a25` | 主文本 |
| ink-500 | `#6a5c4f` | 次级文本 |
| ink-300 | `#8d7b6c` | 弱文本 |

## 2. L1 语义 token（亮色全表）

### 背景与文本

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-bg-app` | `#f4efe6` | 应用 / 页面底色 |
| `--rd-bg-surface` | `#fbf7f0` | 卡片、面板、窗口、浮层底 |
| `--rd-bg-muted` | `#efe7db` | 次级分区、表头、行 hover 底 |
| `--rd-bg-ink` | `#11100f` | 深色收束区、反色块 |
| `--rd-bg-canvas` | `#f9f6f0` | 画布类底色（流程图 / 节点编辑器） |
| `--rd-text-primary` | `#2f2a25` | 标题与正文 |
| `--rd-text-secondary` | `#6a5c4f` | 辅助说明、时间、metadata |
| `--rd-text-muted` | `#8d7b6c` | 弱提示、占位 |
| `--rd-text-on-brand` | `#fffdf8` | 品牌实底上的文字；暗色下随品牌亮度切换 |
| `--rd-text-on-accent` | `#fffdf8` | 深色 / 强色底上的文字 |
| `--rd-text-on-ink` | `#f4efe6` | `bg-ink` 上的文字 |

### 边框与焦点

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-border-soft` | `rgba(136, 99, 73, 0.16)` | 默认边框、分隔线 |
| `--rd-border-strong` | `rgba(136, 99, 73, 0.30)` | 强分隔、可交互控件描边 |
| `--rd-focus-ring` | `rgba(67, 92, 116, 0.45)` | 键盘焦点环（2px） |

### 品牌与操作（拆分定义）

品牌色负责身份识别，操作色负责界面主操作。两者可以相同，也可以分离；本表以灰玉品牌色与墨蓝操作色演示二者分离后的参考实现。

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-brand-primary` | `#5d6c57` | 品牌识别、品牌 CTA、灰玉印色点缀 |
| `--rd-brand-hover` | `#6e736d` | 品牌色悬停 |
| `--rd-brand-soft` | `rgba(120, 164, 150, 0.16)` | 品牌柔化底 |
| `--rd-action-primary` | `#435c74` | 工作面主按钮、激活态、链接 |
| `--rd-action-hover` | `#55738f` | 操作色悬停 |
| `--rd-action-soft` | `rgba(67, 92, 116, 0.12)` | 选中底、导航 active 柔底 |

### 模块 accent

| Token | 值 |
| --- | --- |
| `--rd-accent-rouge` | `#b24057` |
| `--rd-accent-jade` | `#4f9c83` |
| `--rd-accent-ink` | `#435c74` |
| `--rd-accent-earth` | `#886349` |
| `--rd-accent-purple` | `#846992` |
| `--rd-accent-grayjade` | `#78a496` |

### 状态色（印色化，全家族语义固定）

| Token | 值 | 柔化底 | 语义 |
| --- | --- | --- | --- |
| `--rd-state-success` | `#4f9c83` | `rgba(79, 156, 131, 0.14)` | ready、online、passed、completed |
| `--rd-state-warning` | `#b5826d` | `rgba(181, 130, 109, 0.16)` | pending、stale、preview、coming soon |
| `--rd-state-danger` | `#c3564d` | `rgba(195, 86, 77, 0.14)` | failed、error、blocked、unsafe |
| `--rd-state-info` | `#435c74` | `rgba(67, 92, 116, 0.12)` | 说明、进行中、辅助提示 |
| `--rd-state-neutral` | `#6e736d` | `rgba(110, 115, 109, 0.14)` | draft、disabled、archived |

扩展语义不新增颜色，用组合表达（详见 [06-components.md](06-components.md)）：`blocked` = danger 柔底 + 锁形图标；`stale` = warning 柔底 + 时钟图标；`read-only` = neutral 柔底 + 文字标签。

注意：**danger ≠ brand**。即使品牌色与危险色在某一主题中接近，也必须保留独立语义和双通道表达。

### 纹样与阴影

| Token | 值 | 用途 |
| --- | --- | --- |
| `--rd-pattern-line` | `rgba(122, 92, 64, 0.14)` | 纹样线稿默认色 |
| `--rd-shadow-soft` | `0 16px 40px rgba(91, 66, 44, 0.10)` | 大图、Brand 面浮层 |
| `--rd-shadow-panel` | `0 8px 24px rgba(91, 66, 44, 0.08)` | 卡片、面板 |
| `--rd-shadow-popover` | `0 12px 32px rgba(91, 66, 44, 0.14)` | 浮层、菜单、toast |

## 3. Profile 覆盖

Workbench 面把底色抬亮一档（参考图的近白基底 + 家族暖纸倾向），其余 token 共用：

| Token | Brand（默认） | Workbench 覆盖 |
| --- | --- | --- |
| `--rd-bg-app` | `#f4efe6` | `#f7f4ee` |
| `--rd-bg-surface` | `#fbf7f0` | `#fffdf8` |
| `--rd-bg-muted` | `#efe7db` | `#f3eee5` |

Game 面不使用本表；只须保证状态色语义与双通道原则成立。

## 4. 品牌与 accent 选色原则

- 母板中的胭脂、玉青、赭石、墨蓝、雅紫与灰玉都是可选色系，不绑定任何项目或产品类型。
- 使用方自行决定品牌主色、辅助色和项目内部的 accent 分工，无须在本规范登记。
- 默认参考实现以灰玉作为 `brand`、墨蓝作为 `action`；它表达一种可复用方案，不构成强制品牌分配。
- 浅阶颜色优先用于柔底、选中态和低强度装饰；实底按钮应选择满足文字对比度的深阶颜色。
- 若品牌色与 success、info 等状态色接近，需通过图标、文字、形状或位置保持语义可辨。

## 5. 用色纪律

- 大面积背景只用纸阶 / 暖白；母板强色不满铺。
- 同一屏强强调色不超过两组；状态色不作装饰。
- chip 一律浅柔底 + 深字，不用高饱和整块。
- 深色区域（`bg-ink`）允许作收束与反差，不作全站默认。
- 图表用色从 accent 与其浅阶衍生，网格线用 `--rd-border-soft`，不引入荧光色。
- 主观校验：颜色应更接近「纸、墨、印、染、玉、木」，而不是「荧光、塑料、金属」。

## 6. 暗色模式

原则：墨色暗纸底（暖黑，不用纯黑冷灰）、印色整体提亮一档、纹样进一步减弱、阴影转黑、对比度达标后再谈气质。

| Token | 暗色值 |
| --- | --- |
| `--rd-bg-app` | `#1a1713` |
| `--rd-bg-surface` | `#23201a` |
| `--rd-bg-muted` | `#2b2721` |
| `--rd-bg-ink` | `#0d0c0a` |
| `--rd-bg-canvas` | `#201d17` |
| `--rd-text-primary` | `#ede5d8` |
| `--rd-text-secondary` | `#b8ab9a` |
| `--rd-text-muted` | `#8d8172` |
| `--rd-text-on-brand` | `#1a1713` |
| `--rd-text-on-accent` | `#fffdf8` |
| `--rd-text-on-ink` | `#ede5d8` |
| `--rd-border-soft` | `rgba(237, 229, 216, 0.14)` |
| `--rd-border-strong` | `rgba(237, 229, 216, 0.26)` |
| `--rd-focus-ring` | `rgba(127, 160, 189, 0.55)` |
| `--rd-brand-primary` | `#8fb3a5` |
| `--rd-brand-hover` | `#a7c4b9` |
| `--rd-brand-soft` | `rgba(143, 179, 165, 0.20)` |
| `--rd-action-primary` | `#7fa0bd` |
| `--rd-action-hover` | `#98b4cd` |
| `--rd-action-soft` | `rgba(127, 160, 189, 0.18)` |
| `--rd-accent-rouge` | `#cd5076` |
| `--rd-accent-jade` | `#6fb39c` |
| `--rd-accent-ink` | `#7fa0bd` |
| `--rd-accent-earth` | `#c9997f` |
| `--rd-accent-purple` | `#a88bb5` |
| `--rd-accent-grayjade` | `#8fb3a5` |
| `--rd-state-success` | `#6fb39c` |
| `--rd-state-success-soft` | `rgba(111, 179, 156, 0.18)` |
| `--rd-state-warning` | `#c9997f` |
| `--rd-state-warning-soft` | `rgba(201, 153, 127, 0.18)` |
| `--rd-state-danger` | `#d4726a` |
| `--rd-state-danger-soft` | `rgba(212, 114, 106, 0.18)` |
| `--rd-state-info` | `#7fa0bd` |
| `--rd-state-info-soft` | `rgba(127, 160, 189, 0.16)` |
| `--rd-state-neutral` | `#9a9a94` |
| `--rd-state-neutral-soft` | `rgba(154, 154, 148, 0.16)` |
| `--rd-pattern-line` | `rgba(237, 229, 216, 0.10)` |
| `--rd-shadow-soft` | `0 16px 40px rgba(0, 0, 0, 0.44)` |
| `--rd-shadow-panel` | `0 8px 24px rgba(0, 0, 0, 0.36)` |
| `--rd-shadow-popover` | `0 12px 32px rgba(0, 0, 0, 0.48)` |

暗色接入要点：`bg-ink` 强调块使用 `--rd-text-on-ink`；亮灰玉品牌实底使用 `--rd-text-on-brand` 的深墨前景，不能沿用白字；阴影转黑增强暗底纵深。主题切换机制由具体实现决定，但必须保证首屏主题稳定、焦点可见，并维持「颜色 + 图标 / 文字」双通道。
