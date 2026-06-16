# 当前规划

最后更新：2026-06-16

## 当前阶段

RadishX 当前处于 React 官网首版实现后的页面完善与公开素材治理阶段。

当前站点已具备：

- Vite + React + TypeScript 静态官网骨架。
- `/`、四个项目详情页、`/mascot`、`/about` 和 404 页面。
- `radishx.com` canonical 域名、`www.radishx.com` 兼容跳转、Vercel History API fallback。
- 基础 metadata、Open Graph / Twitter Card、`sitemap.xml` 和 `robots.txt`。
- 首批已审核 Mascot / About 素材和项目详情页代表视觉。
- 首页首屏已在 Radish Orbit 项目星图中接入已审核可爱Q版站姿图作为中心视觉锚点。
- 桌面与 390px 移动端的多轮响应式、可访问性和生产质量检查记录。

下一阶段不再把所有后续事项堆在本文件中推进，而是按页面、功能或开发目标拆分为独立设计与开发文档。

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
| Mascot 虚拟形象页 | [mascot-page.md](../features/mascot-page.md) | Seasonal 活动图已评估，当前不进入实现 |
| About 联系区 | [about-contact-surface.md](../features/about-contact-surface.md) | 首轮精细化已完成 |
| 素材治理 | [asset-governance.md](../features/asset-governance.md) | Mascot 表情 / 贴纸与 seasonal 使用边界已记录 |
| 视觉 QA 与发布检查 | [visual-qa-and-release.md](../features/visual-qa-and-release.md) | 本地发布前复查、可访问性整理、实现口径对齐检查与设计源同步说明已完成，线上截图级 smoke 待补 |
| 设计源精确化 | [design-source-refresh.md](../features/design-source-refresh.md) | 首页桌面 / 移动、项目详情模板、Mascot 和 About v1.1 已新增，三张独立移动稿已补齐 |
| React 与设计源对照校准 | [react-design-alignment.md](../features/react-design-alignment.md) | 已完成，首页项目 band、关键媒体加载和三页独立移动稿对照已完成 |

## 当前活跃目标

当前已完成：

1. `/about` 页面联系方式、微信公众号二维码、GitHub 仓库入口和域名边界已完成首轮精细化。
2. PC 与 390px 移动端已检查，长邮箱、链接、二维码说明、按钮、仓库卡片和域名卡片未发现横向溢出。
3. 四个项目详情页已补公开文档入口，链接对应仓库 `dev` 分支中的 README / docs / wiki / status / contracts 等稳定入口，并保留 RadishFlow archived 口径。
4. 首页首屏已把已审核可爱Q版站姿图接入 Radish Orbit 中心视觉锚点，四个项目节点和素材状态槽在桌面与 390px 移动端已复查，无横向溢出或节点相交。
5. Open Graph 分享预览图已完成本地评估，现有 `1200x630` 横图继续保留，本轮不生成新候选图。
6. RadishMind 详情页已补强代码内 `Evaluation loop` 自有视觉，继续不接入外部参考截图或未审核图片。
7. 四个项目已补代码内临时标识，覆盖首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片；这些标识不是正式 Logo。
8. 已完成四个兄弟项目的 Logo、真实截图和公开视频素材二轮只读复核；未发现新增或修改的媒体文件，也未发现可直接公开的视频素材。
9. Mascot 页已接入可爱Q版表情格和 4 张贴纸横图的 Web 版本，当前只做整图预览，不拆分单张贴纸，不提供下载入口。
10. 已完成 Mascot 单张表情拆分、缩略图命名和下载政策评估；当前继续整图预览，不生成单张文件、不生成缩略图、不开放下载。
11. 已完成 `assets/avatars/seasonal/` 6 张节日活动图评估；当前全部只作为活动 Banner、节日彩蛋或运营内容候选，不进入长期 Gallery、默认主视觉或公开资源目录。
12. 已完成本地发布检查复跑，覆盖 `npm run build`、`git diff --check`、`1440x900` 桌面视口、`390x844` 移动视口、关键路由、未知路径 fallback、Mascot Gallery 图片加载和 `dist/` 输出文件。
13. 顶部 `Projects` 导航已补齐 `/#projects` 锚点 active 状态，和四个项目详情页的矩阵入口状态保持一致。
14. 四个项目详情页已补 Hero 下方站内导览，可跳转到 `Public Surface`、`Documentation`、`Capabilities` 和 `Matrix`。
15. 全站已完成本地可访问性整理，补强页脚导航语义、重复链接可访问名称、项目入口和外链上下文；本轮继续不推送、不部署。
16. README、目标文档、本文件和本周开发日志已同步记录。
17. 已完成设计源、视觉规范、开发规范和 React 实现的口径对齐检查；首页、项目页、Mascot 页和 About 页的页面节奏、移动端结构、说明文案、素材边界和本地 Browser smoke 均未发现阻断问题。
18. Pencil 设计源已通过 MCP 补做只读复核，确认 5 个顶层 v1 画板结构完整且无布局问题；这些画板保留为早期设计记录，并已在底部追加 `2026-06-16 实现口径同步` 说明 band。
19. 已通过 Pencil 新增 5 个 v1.1 精确实现稿：`Home Desktop v1.1 - React Accurate`、`Home Mobile v1.1 - React Accurate`、`Project Detail Template v1.1 - Flow Example`、`Mascot Page v1.1 - React Accurate` 和 `About Page v1.1 - React Accurate`，并逐一完成 `snapshot_layout` 检查。
20. 已完成 React 页面与 v1.1 设计源对照校准：首页项目 band 已接入项目详情页同口径媒体，`/flow` 主媒体、`/mascot` 主视觉和 `/about` 二维码已调整首屏加载策略，并通过本地构建、空白检查和桌面 / 移动端浏览器检查。
21. 已通过 Pencil 新增 3 个独立 `390px` 移动版 v1.1 画板：`Project Detail Template Mobile v1.1 - Flow Example`、`Mascot Page Mobile v1.1 - React Accurate` 和 `About Page Mobile v1.1 - React Accurate`，并逐一完成 `snapshot_layout` 检查。
22. 已基于新增独立移动稿复查 `/flow`、`/mascot` 和 `/about` 的 `390x844` React 实现：区块顺序、关键数量、图片加载、触控目标、横向溢出和 console 均未发现阻断问题，本轮不需要改 React 代码。
23. 已完成本地发布前复查：`npm run build` 通过，`dist/` 输出完整，`1440x900` 和 `390x844` 下关键路由、未知路径 fallback、metadata、SEO 文件、公开图片资源、触控目标和横向溢出均未发现阻断问题；Browser 后台滚动本轮无法触发页面内 lazy 图片，已改用直接资源解码补充验证。
24. 已新增 `npm run check:local-release` 本地发布检查命令，复用生产构建并检查 `dist/` 入口文件、SEO 文件、Vite asset 和 18 个公开图片输出。

下一步建议推进：

1. 继续先不推送、不部署；如果后续进入发布阶段，再补跑线上 HTTP、根域跳转、路径保留和截图级 smoke。
2. 若继续推进页面质量，优先处理线上截图级 smoke 准备或下一轮具体页面内容优化；不要引入新素材或下载入口。
3. 如果后续选择具体 seasonal 活动，再按已评估的窗口、位置、文案边界和授权要求生成 Web 版本并进入短期页面实现。
4. 四个项目后续只有出现新的独立 Logo、真实截图或视频候选来源时，再按素材治理文档重新审核。

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
- “萝小白”后续是否启动单张表情拆分清单、具体 seasonal 活动实现和下载口径。

## 后续顺序

1. 如需要继续设计侧推进，基于已补齐的独立移动版 Pencil 画板做后续改版同步；涉及 `.pen` 设计源时只通过 Pencil 工具处理。
2. 如进入部署阶段，先补跑线上 HTTP、根域跳转、路径保留和截图级 smoke。
3. 如需使用 seasonal 图，先选择具体活动目标并确认上线 / 下线时间、页面位置、文案、授权和撤下策略，再生成 Web 版本。
4. 四个项目出现新的独立 Logo、真实截图或视频候选来源后，再回到项目素材审核和 Web 优化。
5. 后续只有首页视觉再次明显变化或社交预览目标变化时，再评估 Open Graph 分享预览图。
6. 如需推进 Mascot 单张表情展示，先建立拆分清单和首批候选；确认版权、授权和文件包边界前不提供下载入口。
