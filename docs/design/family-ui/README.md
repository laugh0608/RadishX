# Radish 家族统一 UI 规范（family-ui）

版本：`v26.7.2`（2026-07-12）

本专题是 Radish 家族所有产品的统一 UI / 视觉设计规范，是家族级视觉真相源。各项目的通用视觉规则以本专题为准；项目仓库只保留「差异附录」，不再各自维护整套通用规范。

一句话方向：**现代工作台骨架 × 纸墨印色气质**——结构、密度与组件形态学取自现代清爽工作台语言（见 [references.md](references.md)），色彩与气质取自 Radish 人民币纸币色系配色母板。

## 使用前必读：参考图不是可选灵感

任何项目在评估、设计、迁移或重构 UI 前，必须同时完成以下阅读和观察：

1. 完整阅读 [references.md](references.md)；
2. 逐张查看 `assets/design-references/ui/` 中由该索引登记的参考图；
3. 对照索引中的“主要学习点 / 明确不学”，再阅读与当前任务相关的颜色、组件、布局和平台章节；
4. 明确当前页面采用哪些参考原则、拒绝哪些表面特征后，才进入 Pencil 或代码实现。

`references.md` 与参考图共同定义“现代工作台骨架”的视觉依据，承担布局比例、信息密度、组件形态、状态双通道、列表 / 详情关系和多栏工作区节奏。只读本页或只复制 token，只能完成颜色与变量接入，不能视为完成 family-ui 视觉评估或页面迁移。

参考素材的使用边界同样是强制规则：

- 参考图仅用于家族内部观察和原则提炼，不是可复用产品素材；
- 禁止把参考图复制到产品、`public/`、官网页面、设计交付物或对外文档；
- 禁止照搬外部页面结构、品牌元素、图标、配色或文案；
- 参考图以桌面工作台为主，移动端必须继续以 [07-layout-platforms.md](07-layout-platforms.md) 的重排规则为准，不能把桌面布局等比缩小；
- 未实际查看参考图时，不得宣称已完成视觉方向评估，也不得直接开始页面级 Pencil 或代码重构。

## 适用范围

| 项目 | 产品形态 | 适用面 |
| --- | --- | --- |
| Radish | Web 社区 + Console + Flutter 移动原生端；Tauri 暂时弃用 | Web / Console / Flutter；Tauri 只保留历史资产，未来重新评估 |
| RadishCatalyst | Godot 游戏 + Wiki / 官方工具 | 游戏内为 Game 面；Wiki / 工具为 Workbench 面 |
| RadishFlow | 流程模拟桌面软件（已归档，规范仍适用） | Workbench 面 |
| RadishMind | AI runtime 工作台（console + web） | Workbench 面 |
| RadishLex | 输入法（Flutter 管理端 + 各平台候选窗） | 管理端为 Workbench 面；候选窗见平台章 |
| RadishX | 官网 | Brand 面 |
| 未来新产品 | — | 按 [10-migration-playbook.md](10-migration-playbook.md) 接入模板自定位 |

## 三种表面 Profile

共享同一套 token 底座，应用强度不同：

| Profile | 典型载体 | 气质强度 |
| --- | --- | --- |
| Brand 展示面 | RadishX 官网、公开 Web 的欢迎 / 空态、未来营销页 | 纸感最强，允许衬线大标题、轻纹样、大留白 |
| Workbench 工作面 | Console、Mind、Flow、Lex 管理端、Catalyst Wiki / 工具、Radish 私域 | 现代工作台 + 纸色化；纹样为零或近零，密度紧凑，状态 chip 体系完整 |
| Game 游戏面 | Catalyst 游戏内 HUD、基地面板 | 只强制继承色彩语义、图标分类逻辑与可读性底线，气质自治 |

## 合规三档

| 档位 | 内容 |
| --- | --- |
| 必须统一 | 配色母板与 L1 语义 token 命名、状态色语义、字体策略、图标风格基线、Mascot 使用边界、避免方向清单 |
| 强烈建议 | 组件形态学、间距 / 圆角 / 阴影阶梯、布局模式、断点与响应式规则 |
| 项目自治 | 领域组件：Flow 画布图元、Mind 停止线 / 证据视觉、Catalyst HUD、Lex 候选窗细节等 |

通用性与差异性的详细边界见 [01-principles.md](01-principles.md)。

## 文档地图

| 文档 | 内容 |
| --- | --- |
| [01-principles.md](01-principles.md) | 气质关键词、设计原则、避免方向、通用与差异边界 |
| [02-color.md](02-color.md) | L0 配色母板、L1 语义 token 全表、状态色、项目 accent 分工、暗色核心映射 |
| [03-typography.md](03-typography.md) | 字体策略、衬线边界、字号与行高阶梯 |
| [04-space-shape-elevation.md](04-space-shape-elevation.md) | 间距、圆角、描边、阴影、层级、密度档 |
| [05-motion.md](05-motion.md) | 动效时长、缓动、reduced-motion |
| [06-components.md](06-components.md) | 按钮、输入、chip、表格、侧栏、KPI 卡、通知、浮层等形态学规范 |
| [07-layout-platforms.md](07-layout-platforms.md) | 布局模式、断点、Web / 桌面 / 移动 / 游戏 / 输入法平台适配 |
| [08-brand-assets.md](08-brand-assets.md) | 纹样、纸感、Mascot、图标、插画使用规则 |
| [09-adoption.md](09-adoption.md) | 各项目现状映射、待收敛清单、合规检查清单 |
| [10-migration-playbook.md](10-migration-playbook.md) | 撤项目 UI 专题的迁移说明书、差异附录模板、新产品接入模板 |
| [references.md](references.md) | **视觉设计前必读**：27 张参考图索引、学习 / 排除规则与版权口径 |
| [tokens/tokens.json](tokens/tokens.json) | 机器可读 token（W3C design tokens 风格） |
| [tokens/tokens.css](tokens/tokens.css) | CSS 参考实现（含暗色核心映射与 Workbench 覆盖） |

## 引用与迁移方式

- 各项目在其 `CLAUDE.md` / `AGENTS.md` / README 中声明「UI 通用规范遵循 RadishX `docs/design/family-ui/`」，并记录所遵循的版本号。
- token 文件以复制为主（进入各项目构建），规范正文以引用为主；具体步骤、差异附录模板与新产品接入模板见 [10-migration-playbook.md](10-migration-playbook.md)。
- 各项目接入或迁移完成后，回写 [09-adoption.md](09-adoption.md) 登记状态。

## 版本与变更流程

- 版本号采用家族日历版本号 `vYY.M.RELEASE`（如 `v26.7.1` = 2026 年 7 月第 1 版，与 Radish / RadishFlow 发版格式一致）；破坏性变更（改语义、删 token、换值域）在 Changelog 标注 `[breaking]`。
- 变更先改本规范，再改实现；实现与规范冲突时优先修实现，规范不合理再回到本专题迭代（沿用 Radish 维护规则）。
- 破坏性变更必须在 [09-adoption.md](09-adoption.md) 登记各项目迁移窗口。

## Changelog

- `v26.7.2`（2026-07-12）：补全暗色模式全表（accent / state 柔底 / shadow / focus / on-ink 等约 40 个 `--rd-*`），经 RadishX Brand 面明暗双态截图验证；RadishX 落地主题切换（跟随系统 + 手动三态 + localStorage 记忆 + 防 FOUC）。
- `v26.7.1`（2026-07-11）：首版。建立三 Profile、合规三档、`--rd-*` 双层 token、亮色全表与暗色核心映射、组件形态学、平台适配、迁移说明书与参考图索引；新增灰玉 `--rd-accent-grayjade` 供 RadishLex 使用。
