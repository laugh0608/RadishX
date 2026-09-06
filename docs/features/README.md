# 功能与目标文档

本目录存放 RadishX 官网的页面、功能和开发目标级设计与开发文档。

## 使用规则

- `docs/planning/current.md` 负责阶段控制、当前目标和执行顺序。
- 本目录文档负责具体目标的背景、范围、设计要求、开发任务、验证和完成标准。
- 新增页面、功能、素材替换、发布检查或较大视觉调整前，先创建或更新对应目标文档。
- 完成目标后，更新目标文档状态、`docs/planning/current.md` 和当周开发日志。
- 历史过程、验证输出和关键决策写入 `docs/devlogs/`，不要继续堆在入口规划页里。

## 目标使用与历史边界

当前顺位、停止线和执行范围只见 [当前规划](../planning/current.md)。质量修正、公开文案与 SEO 评估统一进入 [官网质量与对外表达收口](site-quality-and-public-content.md)，内容核验无需等待新素材。

已完成 feature 保留当时的设计和验证事实；首页已由灰玉目标替代 craft 首页，其他页面保留 craft 结构。历史全文中的“当前”“本轮”按该目标日期理解，不作为新的开发指令。新一轮实施应更新当前目标，避免继续追加到旧目标的完成记录中。

## 当前目标索引

| 文档 | 目标 | 状态 |
| --- | --- | --- |
| [site-design-refinement.md](site-design-refinement.md) | 官网整体设计美化：精选、目录与跨页统一 | R2.1 双端构图与项目展陈精修完成，所有者已确认，待 React 实现 |
| [product-matrix-refresh.md](product-matrix-refresh.md) | 现有五项目事实同步与新增矩阵规划 | 十个本地兄弟仓库已核验；页面、路由与公开入口待实施 / 核验 |
| [site-quality-and-public-content.md](site-quality-and-public-content.md) | 官网质量、公开文案、SEO 与验证收口 | 文档目标已建立，代码与部署尚未实施 |
| [home-hero-visual.md](home-hero-visual.md) | 首页首屏、项目内容舞台和主视觉 | 灰玉项目舞台已实现并通过双端复核，OG 暂不替换 |
| [project-detail-pages.md](project-detail-pages.md) | 五个项目详情页内容、视觉、公开文档入口和公开素材边界 | 首版、站内导览与 craft Phase 3 已完成 |
| [project-visual-asset-readiness.md](project-visual-asset-readiness.md) | 五个项目正式 Logo、截图、视频和自有视觉准入准备 | 既有准入保留，新增候选类型已规划；具体文件仍待审核 |
| [mascot-page.md](mascot-page.md) | Mascot 虚拟形象页、三形态和 Gallery | Gallery / Usage、首批单张表情与 craft Phase 4 视觉收敛已完成 |
| [about-contact-surface.md](about-contact-surface.md) | About 联系区、仓库入口和域名边界 | 二轮扫读优化与 craft Phase 4 视觉收敛已完成 |
| [asset-governance.md](asset-governance.md) | 素材审核、Web 优化和 `public/images` 准入 | Mascot 首批单张表情 Web 展示图已接入，下载、素材包和外部分发继续关闭 |
| [visual-qa-and-release.md](visual-qa-and-release.md) | 本地 / 线上视觉 QA、构建和发布检查 | craft Phase 5 本地 54 组合终验、9 路由 HTTP smoke 与既有线上发布检查已完成 |
| [design-source-refresh.md](design-source-refresh.md) | Pencil 设计源精确化与 craft 基线 | v0 历史 craft 基线保留 10 张画板；首页当前采用 v1 灰玉设计 |
| [grayjade-brand-refresh.md](grayjade-brand-refresh.md) | 灰玉品牌视觉与 `radishx-site-v1.pen` 首页落地 | 桌面与移动设计已确认，React 首页已实现并通过双端复核 |
| [react-design-alignment.md](react-design-alignment.md) | React 页面与 v1.1 历史设计源对照校准 | 历史基线已完成；首页现由灰玉目标替代，其他页面继续保留 craft 基线 |
| [craft-visual-refresh.md](craft-visual-refresh.md) | v1.2 craft 视觉基线落进 React | 历史 Phase 0–5 已完成；首页与共享 Header / token 后由灰玉目标更新 |
| [family-ui-spec.md](family-ui-spec.md) | Radish 家族统一 UI / 视觉参考规范 | v26.7.3：灰玉默认品牌参考、通用规范边界、参考 UI 同目录归档 |

## 推荐文档结构

每个目标文档优先包含：

- 目标
- 背景
- 范围
- 不做
- 设计要求
- 开发任务
- 验证
- 完成标准
- 后续事项

小目标可以合并条目，但必须保留范围、验证和完成标准。
