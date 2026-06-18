# 当前规划

最后更新：2026-06-18

## 当前阶段

RadishX 当前处于 React 官网首版实现后的发布准备、文档一致性维护和公开素材治理等待期。除发布复核、文档一致性、验证脚本维护和必要的小范围质量修正外，官网功能开发暂时收住。

当前站点已具备：

- Vite + React + TypeScript 静态官网骨架。
- `/`、四个项目详情页、`/mascot`、`/about` 和 404 页面。
- `radishx.com` canonical 域名、`www.radishx.com` 兼容跳转、Vercel History API fallback。
- 基础 metadata、Open Graph / Twitter Card、`sitemap.xml` 和 `robots.txt`。
- 首批已审核 Mascot / About 素材、项目详情页代表视觉和首页 Radish Orbit 中心视觉锚点。
- Mascot Gallery 整图预览、首批 10 张单张表情 Web 展示图和 `/mascot` 候选预览区。
- 四个项目详情页公开文档入口、Hero 下方站内导览和代码内临时项目标识。
- Pencil v1.1 桌面与独立移动设计源，已同步 Mascot 单张表情候选预览区。
- 本地构建、静态输出检查、HTTP smoke、桌面 / 移动端视觉 smoke、线上 HTTP smoke 和线上截图级 smoke 的阶段性记录。

当前没有新的正式项目 Logo、真实截图、公开视频素材、seasonal 活动目标、下载授权或发布要求。因此本阶段不继续扩展素材入口，不开放下载或素材包，不启动 seasonal 页面实现。下一轮 RadishX 官网开发应等待 Radish、RadishCatalyst、RadishFlow 和 RadishMind 各自开发到更适合公开展示的阶段，并补齐对应正式材料后再启动。

## 执行口径

- `docs/planning/current.md` 只记录当前阶段、活跃目标、执行顺序和跨目标风险。
- 具体页面、功能或素材治理工作写入 `docs/features/*.md`。
- `docs/devlogs/` 记录已经完成的结果、关键决策、验证和遗留风险，不承载展开式任务清单。
- 开始开发一个新目标前，先阅读或补齐对应 `docs/features/*.md`，再进入设计稿、代码或素材实现。
- 如果目标涉及重大页面结构、视觉方向、素材版权、域名或部署边界，同时同步 `README.md`、`AGENTS.md`、`CLAUDE.md` 和相关 `docs/` 入口。

## 目标文档索引

| 目标 | 文档 | 当前状态 |
| --- | --- | --- |
| 首页首屏与主视觉 | [home-hero-visual.md](../features/home-hero-visual.md) | 站姿中心视觉锚点已接入，OG 已评估暂不替换 |
| 四个项目详情页 | [project-detail-pages.md](../features/project-detail-pages.md) | 首版已实现，已补站内导览 |
| 项目视觉素材准入准备 | [project-visual-asset-readiness.md](../features/project-visual-asset-readiness.md) | 四项目正式 Logo、截图、视频和自有视觉准入清单已建立 |
| Mascot 虚拟形象页 | [mascot-page.md](../features/mascot-page.md) | Gallery / Usage、Chrome smoke、单张表情 Web 文件生成、`/mascot` 候选预览区接入与设计源同步已完成 |
| About 联系区 | [about-contact-surface.md](../features/about-contact-surface.md) | 二轮扫读优化已完成 |
| 素材治理 | [asset-governance.md](../features/asset-governance.md) | Mascot 首批单张表情已生成 Web 展示图，下载、素材包和外部分发继续关闭 |
| 视觉 QA 与发布检查 | [visual-qa-and-release.md](../features/visual-qa-and-release.md) | 本地质量基线收束、HTTP smoke、实现口径对齐、设计源同步、Mascot Chrome smoke、Mascot 单张表情 smoke、线上 HTTP smoke 和线上截图级 smoke 已完成 |
| 设计源精确化 | [design-source-refresh.md](../features/design-source-refresh.md) | v1.1 桌面 / 移动画板已补齐，Mascot 单张表情候选预览区已同步 |
| React 与设计源对照校准 | [react-design-alignment.md](../features/react-design-alignment.md) | 已完成，首页项目 band、关键媒体加载和三页独立移动稿对照已完成 |

## 当前活跃目标

当前没有新的页面、素材、下载、seasonal 或部署目标。当前活跃目标从功能开发转为保持官网首版可发布状态，并做轻量的状态复核、文档一致性检查和必要的小范围质量改进。

本阶段优先级：

1. 保持 README、`docs/features/*`、`docs/assets/materials.md`、`docs/development/standards.md`、`docs/design/visual-guidelines.md` 和实现口径一致。
2. 只修复会影响后续发布判断、素材授权边界或验证复跑的文档 / 脚本 / 小范围实现问题。
3. 页面代码、公开图片资源、Vercel 配置或域名策略没有变化时，不重复触发完整线上截图级 smoke。
4. 如果出现新素材、下载授权、seasonal 活动目标或发布要求，先更新对应目标文档，再进入设计源、实现和验证。

## 当前不推进

- 不迁入兄弟项目代码或未审核素材。
- 不把代码内临时项目标识声明为正式 Logo。
- 不替换四个项目详情页为真实截图或视频，除非先出现明确候选来源和授权记录。
- 不把 Mascot 首批单张表情升级为下载素材、素材包、社交贴纸包或外部分发资源。
- 不生成 Mascot 单张缩略图，除非页面性能或文件包边界出现真实需要并另行确认。
- 不启动 seasonal 页面、活动 Banner 或节日彩蛋实现。
- 不修改 `hub.radishx.com`、`forge.radishx.com`、`flow.radishx.com`、`mind.radishx.com` 的本官网路由 / rewrite 边界。
- 不为了保持开发节奏而新增页面、入口、视觉效果或素材分类；新增功能必须有明确项目进展、正式材料或发布需求支撑。

## 产品边界

当前官网只负责展示 RadishX 和四个项目矩阵。

本官网包含：

- `radishx.com` 官网首页；`www.radishx.com` 作为兼容入口跳转到根域。
- Radish、RadishCatalyst、RadishFlow、RadishMind 的站内介绍页。
- Mascot 虚拟形象页。
- About 联系方式和社交媒体页面。

本官网不包含：

- 四个项目的实际业务功能。
- 四个项目未来独立站点的部署。
- 登录、后台、数据库、服务端 API。

## 域名决策

- `radishx.com`：当前官网 canonical 主域名，部署在 Vercel。
- `www.radishx.com`：兼容访问入口，跳转到 `radishx.com` 并保留路径。
- `hub.radishx.com`：Radish 未来独立访问域名。
- `forge.radishx.com`：RadishCatalyst 未来独立访问域名。
- `flow.radishx.com`：RadishFlow 未来独立访问域名。
- `mind.radishx.com`：RadishMind 未来独立访问域名。
- `x.radishx.com`：保留给 RadishX Labs、实验入口、短链或统一跳转页。

四个项目域名不是当前 Vercel 官网项目的路由或重写规则。

## 待确认

- 四个项目后续是否补独立稳定 Logo，用于替换当前代码内临时标识。
- 四个项目详情页后续是否需要真实截图或视频素材。
- RadishMind 后续是否补项目自有 Logo、Console 截图或真实图片素材，用于替换当前代码内评测回路图。
- “萝小白”首批单张表情已生成 Web 展示图并进入 `/mascot` 候选预览区；后续如果开放下载、素材包、社交贴纸包或外部分发，仍需另行确认授权和文件包边界。
- 具体 seasonal 活动实现仍待确认活动目标、上线 / 下线时间、页面位置、文案边界、授权来源和撤下策略。

## 恢复开发条件

下一轮 RadishX 官网功能开发应至少满足以下条件之一：

1. Radish、RadishCatalyst、RadishFlow 或 RadishMind 有新的公开阶段成果，需要在官网更新定位、状态、入口或页面结构。
2. 四个项目补齐正式 Logo、真实截图、公开视频、稳定 Demo、文档站、下载页或项目自有可视化素材。
3. 项目域名、部署策略、下载授权、素材授权或公开发布计划发生变化，需要官网同步。
4. Mascot 素材确认新的授权范围，例如下载、素材包、社交贴纸包、seasonal 活动或外部分发。
5. 首页主视觉、Open Graph、信息架构或品牌表达需要随项目实质进展更新。

恢复开发时，先更新对应 `docs/features/*.md` 和素材清单，再决定是否同步 Pencil 设计源、React 实现和发布验证。

## 后续顺序

1. 保持当前首版官网可发布状态，必要时复核文档、验证脚本和发布检查记录。
2. 等待四个项目进入更适合公开展示的阶段，并补齐正式 Logo、真实截图、视频、Demo、下载页、文档站或 RadishMind 自有视觉等材料。
3. 四个项目出现新的正式候选来源后，先按项目视觉素材准入清单补齐字段，再进入素材审核和 Web 优化。
4. 如 React 页面继续调整或新增正式素材，先同步对应目标文档，再通过 Pencil 工具维护桌面与移动 v1.1 画板。
5. 如进入新的部署阶段或页面 / 资源发生变化，线上 HTTP smoke 可复用当前脚本复跑确认；截图级发布检查使用 Playwright + 本机 Chrome 覆盖桌面与移动端。
6. 如需使用 seasonal 图，先选择具体活动目标并确认上线 / 下线时间、页面位置、文案、授权和撤下策略，再生成 Web 版本。
7. 后续只有首页视觉再次明显变化或社交预览目标变化时，再评估 Open Graph 分享预览图。
8. 如需继续推进 Mascot 单张表情后续形态，只能在当前官网内部展示候选基础上评估更多格位、缩略图或下载文件包；下载、素材包和外部分发需要另行确认授权范围、文件包边界和撤回策略。
