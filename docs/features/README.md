# 功能与目标文档

本目录存放 RadishX 官网的页面、功能和开发目标级设计与开发文档。

## 使用规则

- `docs/planning/current.md` 负责阶段控制、当前目标和执行顺序。
- 本目录文档负责具体目标的背景、范围、设计要求、开发任务、验证和完成标准。
- 新增页面、功能、素材替换、发布检查或较大视觉调整前，先创建或更新对应目标文档。
- 完成目标后，更新目标文档状态、`docs/planning/current.md` 和当周开发日志。
- 历史过程、验证输出和关键决策写入 `docs/devlogs/`，不要继续堆在入口规划页里。

## 当前开发节奏

官网首版功能已经收束，当前不再主动扩展新页面、素材入口、下载能力或 seasonal 活动。后续功能开发等待五个项目任一进入更适合公开展示的阶段，并补齐正式 Logo、真实截图、公开视频、稳定 Demo、文档站、下载页或项目自有视觉等材料后再启动。

在恢复功能开发前，只推进发布复核、文档一致性、验证脚本维护和必要的小范围质量修正。任何新目标都应先更新对应 `docs/features/*.md`，再进入设计源、React 实现和验证。

## 当前目标索引

| 文档 | 目标 | 状态 |
| --- | --- | --- |
| [home-hero-visual.md](home-hero-visual.md) | 首页首屏、Radish Orbit 和主视觉替换 | 站姿中心视觉锚点已接入，OG 已评估暂不替换 |
| [project-detail-pages.md](project-detail-pages.md) | 五个项目详情页内容、视觉、公开文档入口和公开素材边界 | 首版、站内导览与 craft Phase 3 已完成 |
| [project-visual-asset-readiness.md](project-visual-asset-readiness.md) | 五个项目正式 Logo、截图、视频和自有视觉准入准备 | 准入清单已建立，等待五项目开发成熟和新的正式候选素材 |
| [mascot-page.md](mascot-page.md) | Mascot 虚拟形象页、三形态和 Gallery | Gallery / Usage、Chrome smoke、首批单张表情 Web 文件生成、候选预览区接入与设计源同步已完成 |
| [about-contact-surface.md](about-contact-surface.md) | About 联系区、仓库入口和域名边界 | 二轮扫读优化已完成 |
| [asset-governance.md](asset-governance.md) | 素材审核、Web 优化和 `public/images` 准入 | Mascot 首批单张表情 Web 展示图已接入，下载、素材包和外部分发继续关闭 |
| [visual-qa-and-release.md](visual-qa-and-release.md) | 本地 / 线上视觉 QA、构建和发布检查 | 本地质量基线收束、HTTP smoke、实现口径对齐、设计源同步、Mascot Chrome smoke、Mascot 单张表情 smoke、线上 HTTP smoke 和线上截图级 smoke 已完成 |
| [design-source-refresh.md](design-source-refresh.md) | Pencil 设计源精确化与 craft 基线 | 已切换到 v1.2 craft 单基线，保留 10 张桌面 / 移动 / 暗色画板 |
| [react-design-alignment.md](react-design-alignment.md) | React 页面与 v1.1 设计源对照校准 | 已完成，首页项目 band、关键媒体加载和三页独立移动稿对照已完成 |
| [craft-visual-refresh.md](craft-visual-refresh.md) | v1.2 craft 视觉基线落进 React | Phase 0–3 已完成，Phase 4–5 待续 |
| [family-ui-spec.md](family-ui-spec.md) | Radish 家族统一 UI / 视觉设计规范 | v26.7.2 已建立亮暗 token，参考图入库，各兄弟项目待按迁移说明书接入 |

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
