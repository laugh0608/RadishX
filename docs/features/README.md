# 功能与目标文档

本目录存放 RadishX 官网的页面、功能和开发目标级设计与开发文档。

## 使用规则

- `docs/planning/current.md` 负责阶段控制、当前目标和执行顺序。
- 本目录文档负责具体目标的背景、范围、设计要求、开发任务、验证和完成标准。
- 新增页面、功能、素材替换、发布检查或较大视觉调整前，先创建或更新对应目标文档。
- 完成目标后，更新目标文档状态、`docs/planning/current.md` 和当周开发日志。
- 历史过程、验证输出和关键决策写入 `docs/devlogs/`，不要继续堆在入口规划页里。

## 当前目标索引

| 文档 | 目标 | 状态 |
| --- | --- | --- |
| [home-hero-visual.md](home-hero-visual.md) | 首页首屏、Radish Orbit 和主视觉替换 | 站姿中心视觉锚点已接入，OG 已评估暂不替换 |
| [project-detail-pages.md](project-detail-pages.md) | 四个项目详情页内容、视觉、公开文档入口和公开素材边界 | 首版已实现，已补站内导览 |
| [mascot-page.md](mascot-page.md) | Mascot 虚拟形象页、三形态和 Gallery | Gallery / Usage 实现与设计源同步已完成，浏览器视觉 smoke 待补 |
| [about-contact-surface.md](about-contact-surface.md) | About 联系区、仓库入口和域名边界 | 二轮扫读优化已完成 |
| [asset-governance.md](asset-governance.md) | 素材审核、Web 优化和 `public/images` 准入 | Mascot 表情 / 贴纸与 seasonal 使用边界已记录 |
| [visual-qa-and-release.md](visual-qa-and-release.md) | 本地 / 线上视觉 QA、构建和发布检查 | 本地发布检查、HTTP smoke 准备、可访问性整理、实现口径对齐检查与设计源同步说明已完成，线上截图级 smoke 待补 |
| [design-source-refresh.md](design-source-refresh.md) | Pencil 设计源 v1.1 精确实现稿 | v1.1 桌面 / 移动画板已补齐，Mascot Gallery / Usage 已同步 |
| [react-design-alignment.md](react-design-alignment.md) | React 页面与 v1.1 设计源对照校准 | 已完成，首页项目 band、关键媒体加载和三页独立移动稿对照已完成 |

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
