# 功能与目标文档

本目录是 RadishX 唯一的能力专题地图。全局目标与阶段出口见[官网整体规划](../planning/overview.md)，实际顺位见[当前规划](../planning/current.md)。本页只维护归属、依赖与来源，不复制任务进展。

## 使用规则

- 采用“整体规划 → 大专题 → 子专题”；下列四个章节承载大专题，既有 feature 文件承载子专题或具名的整合切片，保留目录与编号。
- 每个子专题只有一个主要归属；跨专题依赖列为协同，不重复拥有任务。阶段、R2 批次和能力层级分别管理。
- 表中“任务 / 状态来源”是详细范围与进展的维护位置；验收链接定义标准，实际结果在同文对应批次及其引用的[开发日志](../devlogs/README.md)。current 只引用摘要。
- 方案状态（草案 / 已确认 / 已替代）、执行状态（待开始 / 进行中 / 待验收 / 已完成，附阻塞或暂停）及验证事实分别记录。历史称谓按目标日期理解，不改写原有验收结论。
- 新增或较大调整先更新所属目标的范围、任务、失败边界和完成条件。已完成切片不代表持续维护专题永久完成，推进后同步 current 摘要和当周日志。

<a id="content"></a>

## 产品信息与内容

**价值与边界：**维护项目用途、公开成熟度、矩阵与入口事实；不代替兄弟项目的正式规划，也不从代码或暂定域名推断上线。内容由页面主线消费，公开表达质量与 URL 核验协同质量主线。内容核验规则见[质量目标](site-quality-and-public-content.md#内容核验方式)，域名边界见[Vercel 与域名](../deployment/vercel.md)。

| 子专题 | 阶段 / 协同 | 任务 / 状态来源 | 验收入口 |
| --- | --- | --- | --- |
| 产品矩阵同步与扩展 | 按产品纳入批次持续维护；协同页面、质量 | [产品矩阵及日期批次](product-matrix-refresh.md) | [本轮完成标准](product-matrix-refresh.md#本轮完成标准) |

**完成条件：**指定批次的项目事实有来源与日期，名称、状态、介绍及公开入口在所有消费页面一致；未部署项目不暗示可访问。后续项目事实变化再开启维护切片。

<a id="pages"></a>

## 页面与交互

**价值与边界：**组织首页、项目详情、About、Mascot 的阅读路径、响应式与共享交互；不承载产品业务。依赖内容主线的事实、品牌主线的 token 与准入素材，由质量主线验证运行与发布。设计依据见[视觉规范](../design/visual-guidelines.md)，工程依据见[开发规范](../development/standards.md)。

| 子专题 / 整合切片 | 阶段 / 协同 | 任务 / 状态来源 | 验收入口 |
| --- | --- | --- | --- |
| 官网整体设计与美化（跨页面整合） | R2.1 / R2.2；协同内容、品牌、质量，统筹以下四页和共享层 | [整合目标与后续批次](site-design-refinement.md#后续批次) | [验证与完成标准](site-design-refinement.md#验证与完成标准)及同文 R2.2 日期批次 |
| 首页首屏与主视觉 | 当前页面批次随整合目标；协同内容、品牌 | [当前实现与后续事项](home-hero-visual.md) | [完成标准](home-hero-visual.md#完成标准) |
| 项目详情页 | 当前页面批次随整合目标；协同内容、素材 | [当前实现与后续事项](project-detail-pages.md) | [完成标准](project-detail-pages.md#完成标准) |
| About 联系区 | R2.2 与后续内容维护；协同内容、质量 | [页面目标及日期批次](about-contact-surface.md) | [完成标准](about-contact-surface.md#完成标准) |
| Mascot 虚拟形象页 | R2.2 与后续展示维护；协同素材治理 | [页面目标及日期批次](mascot-page.md) | [完成标准](mascot-page.md#完成标准) |

**完成条件：**指定页面批次的内容、共享层与双端交互一致，完成对应页面验收及跨页复核；Pencil 回填、React 实现和线上发布分别判断。整合目标引用页面结果，不另抄页面待办。

<a id="brand"></a>

## 品牌视觉与素材

**价值与边界：**提供一致且可追溯的品牌语言、设计源与展示素材；不自动授权下载、再分发或写回其他项目。规则分别由[视觉规范](../design/visual-guidelines.md)、[family-ui](../design/family-ui/README.md)、[素材治理](../assets/materials.md)维护；页面主线消费，质量主线复核。family-ui 是可选参考，不成为兄弟项目的隐式依赖。

| 子专题 | 阶段 / 协同 | 任务 / 状态来源 | 验收入口 |
| --- | --- | --- | --- |
| 公司品牌探索 | 命名与 Logo 探索批次；协同公开内容 | [公司品牌目标](company-brand-identity.md) | [验证与后续](company-brand-identity.md#验证与后续) |
| 家族 UI 参考规范 | 规范版本演进；协同页面 | [本轮任务](family-ui-spec.md#本轮任务)与同文状态 | [完成标准](family-ui-spec.md#完成标准) |
| RadishUI 组件消费与有限试点 | 有限产品采用；协同 About 页面与 family-ui | [产品范围与验收](radishui-pilot.md#formal-pilot-closeout) | [技术与采用出口](radishui-pilot.md#formal-pilot-closeout) |
| 素材治理目标 | 按素材批次持续执行；协同 Mascot / 页面 | [准入与开发任务](asset-governance.md) | [完成标准](asset-governance.md#完成标准) |
| 项目视觉素材准入准备 | 按具体候选启动；协同矩阵 / 详情页 | [项目清单与接入顺序](project-visual-asset-readiness.md) | [完成标准](project-visual-asset-readiness.md#完成标准) |
| 设计源精确化 | v0 craft 历史基线；协同页面 | [历史任务与记录](design-source-refresh.md) | [完成标准](design-source-refresh.md#完成标准) |
| 灰玉品牌视觉 | v1 灰玉批次；协同首页 | [当前结果（该批次）](grayjade-brand-refresh.md#当前结果) | [完成标准](grayjade-brand-refresh.md#完成标准) |
| React 与设计源校准 | v1.1 历史基线；协同页面 | [历史任务与对照记录](react-design-alignment.md) | [完成标准](react-design-alignment.md#完成标准) |
| craft 视觉基线落地 | v1.2 Phase 0–5 历史切片；协同页面 | [分阶段](craft-visual-refresh.md#分阶段)与同文进度记录 | [完成标准](craft-visual-refresh.md#完成标准) |

**完成条件：**选定批次的设计确认、文件来源、授权范围、派生图与实际显示分别有证据；候选清单或规范发布不等于正式页面已采用。当前页面结构以 R2.2 为准，历史稿的“当前”“后续”不构成新的执行指令。

<a id="quality"></a>

## 站点质量与发布

**价值与边界：**保持内容准确、可访问与可复验，管理本地和线上证据；不扩大为服务端业务或自动部署。依赖其他三条主线的交付范围，验证规则见[开发规范](../development/standards.md)，发布边界见[Vercel 与域名](../deployment/vercel.md)。

| 子专题 | 阶段 / 协同 | 任务 / 状态来源 | 验收入口 |
| --- | --- | --- | --- |
| 官网质量与对外表达收口 | A–D 批次 / Q01–Q09；协同内容、页面、品牌 | [待处理问题](site-quality-and-public-content.md#待处理问题)与同文实施顺序 | [验证与完成标准](site-quality-and-public-content.md#验证与完成标准) |
| 视觉 QA 与发布检查 | 历史 craft QA / 发布基线；新增补漏归上行 | [历史本地与线上记录](visual-qa-and-release.md) | [完成标准](visual-qa-and-release.md#完成标准) |

**完成条件：**指定问题逐项有修复与匹配的验证；SEO 评估不冒充实现，本地检查不冒充线上核验。发布只在另获授权后核对候选、部署结果、路由和域名；历史线上结果不能证明当前候选已发布。

## 推荐文档结构

子专题保留目标场景、主要归属、阶段、范围与非目标、已有基础、输入输出、依赖、正常 / 失败 / 恢复路径、实施切片、任务、验收、证据和剩余事项。小目标可合并章节；主要归属以本页为准，不另建重复映射。远期条目先记录边界与启动条件，临近实施再细化。

每期交付写清范围与通过条件。计划确认、局部实现、目标环境验收、发布回执各自标明依据；更完整规则见[协作专题](../development/agent-collaboration.md#规划层级与进度来源)。
