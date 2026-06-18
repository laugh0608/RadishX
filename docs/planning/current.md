# 当前规划

最后更新：2026-06-18

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
| 项目视觉素材准入准备 | [project-visual-asset-readiness.md](../features/project-visual-asset-readiness.md) | 四项目正式 Logo、截图、视频和自有视觉准入清单已建立 |
| Mascot 虚拟形象页 | [mascot-page.md](../features/mascot-page.md) | Gallery / Usage、Chrome smoke、单张表情 Web 文件生成、`/mascot` 候选预览区接入与设计源同步已完成 |
| About 联系区 | [about-contact-surface.md](../features/about-contact-surface.md) | 二轮扫读优化已完成 |
| 素材治理 | [asset-governance.md](../features/asset-governance.md) | Mascot 首批单张表情已生成 Web 展示图，下载、素材包和外部分发继续关闭 |
| 视觉 QA 与发布检查 | [visual-qa-and-release.md](../features/visual-qa-and-release.md) | 本地质量基线收束、HTTP smoke、实现口径对齐、设计源同步、Mascot Chrome smoke、Mascot 单张表情 smoke、线上 HTTP smoke 和线上截图级 smoke 已完成 |
| 设计源精确化 | [design-source-refresh.md](../features/design-source-refresh.md) | v1.1 桌面 / 移动画板已补齐，Mascot 单张表情候选预览区已同步 |
| React 与设计源对照校准 | [react-design-alignment.md](../features/react-design-alignment.md) | 已完成，首页项目 band、关键媒体加载和三页独立移动稿对照已完成 |

## 当前活跃目标

当前已完成：

1. `/about` 页面联系方式、微信公众号二维码、GitHub 仓库入口和域名边界已完成首轮精细化与二轮扫读优化。
2. PC 与 390px 移动端已检查，长邮箱、链接、二维码说明、按钮、仓库卡片和域名卡片未发现横向溢出；二轮新增联系用途标签、二维码状态标签、具体仓库动作文案和 `No login / API surface` 边界信号。
3. 四个项目详情页已补公开文档入口，链接对应仓库 `dev` 分支中的 README / docs / wiki / status / contracts 等稳定入口，并保留 RadishFlow archived 口径。
4. 首页首屏已把已审核可爱Q版站姿图接入 Radish Orbit 中心视觉锚点，四个项目节点和素材状态槽在桌面与 390px 移动端已复查，无横向溢出或节点相交。
5. Open Graph 分享预览图已完成本地评估，现有 `1200x630` 横图继续保留，本轮不生成新候选图。
6. RadishMind 详情页已补强代码内 `Evaluation loop` 自有视觉，继续不接入外部参考截图或未审核图片。
7. 四个项目已补代码内临时标识，覆盖首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片；这些标识不是正式 Logo。
8. 已完成四个兄弟项目的 Logo、真实截图和公开视频素材二轮只读复核；未发现新增或修改的媒体文件，也未发现可直接公开的视频素材。
9. Mascot 页已接入可爱Q版表情格和 4 张贴纸横图的 Web 版本，当前只做整图预览，不拆分单张贴纸，不提供下载入口；Gallery 已补充公开状态、使用边界和后续处理。
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
25. 已新增 `npm run check:http-smoke` HTTP 目标检查命令，可对指定 `--base-url` 检查关键路由 HTML、SEO 文件和公开图片资源；本地 `127.0.0.1:4500` 目标已验证通过，未来进入发布阶段时可追加 `--www-url` 检查路径保留跳转。
26. About 二轮扫读优化已完成，覆盖 `/about` 联系方式用途标签、微信公众号状态标签、仓库入口动作文案、域名边界说明和桌面 / 移动端 smoke；本轮不新增社交账号、不修改域名策略、不推送、不部署。
27. Mascot 页 Gallery 信息层级与 Usage 说明实现已完成，覆盖 7 张整图预览的公开状态、使用边界、后续处理和四组 Usage 边界；本轮不新增素材、不拆分贴纸、不生成缩略图、不开放下载、不接 seasonal；Browser 插件曾因 URL policy 拦截，用户明确要求使用 Chrome 插件后已补跑本地视觉 smoke。
28. Pencil 设计源已同步 Mascot 页 Gallery / Usage 二轮口径，覆盖桌面 `Mascot Page v1.1 - React Accurate` 和独立移动 `Mascot Page Mobile v1.1 - React Accurate`；两张画板 `snapshot_layout` 均无布局问题，本轮不改 React 代码、不新增素材、不推送、不部署。
29. 已建立四项目视觉素材准入清单，覆盖正式 Logo、真实截图、视频、key visual、diagram、RadishMind 自有视觉、替换范围、降级策略和授权备注；当前没有新的正式候选素材，不替换代码内临时项目标识、不迁入兄弟项目素材。
30. Chrome 插件已补跑本地 `/mascot` smoke：`1440x900` 桌面和 `390x844` 移动端均确认 7 张 Gallery 卡片、14 条 Boundary / Next facts、4 个 Usage 分组、11 张页面图片、横向宽度、触控目标和 console error 正常；本轮不推送、不部署，线上截图级 smoke 仍留到发布阶段。
31. 已完成一轮本地质量基线收束：`npm run build`、`npm run check:local-release` 和 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 均通过；确认 8 个关键路由、18 个公开图片资源、18 个公开图片文件和 2 个 Vite asset 文件正常，本轮不推送、不部署。
32. 已完成 Mascot 单张表情拆分准备清单，覆盖首批 10 个表情格候选、命名规则、审核字段、授权边界、使用场景、撤回策略和下载关闭口径；本轮不切图、不生成单张 Web 文件或缩略图、不开放下载入口、不新增 seasonal 实现。
33. 已补跑线上 HTTP smoke：`npm run check:http-smoke -- --base-url https://radishx.com --www-url https://www.radishx.com` 通过，确认 8 个线上关键路由、18 个公开图片资源和 `www` 到 canonical 根域入口检查正常；本轮不推送、不部署。
34. Browser 插件已完成线上首页和 Mascot 页默认视口抽查：标题、首屏截图、Mascot 默认视口 DOM 指标、横向宽度、broken image 和页面相关 console error 未发现阻断问题；`390x844` 移动视口和跨路由批量截图在 Browser 控制层出现超时，线上截图级 smoke 仍待补。
35. Browser 插件已扩展线上默认视口截图抽查到 `/flow`、`/about` 和 `/abc-test`：项目 Hero、About Hero、404 fallback、导航 active 状态和关键首屏信息未发现视觉阻断；`390x844` 移动截图仍因 Browser 控制层 `Page.captureScreenshot` 超时待补。
36. 已按用户要求尝试 Chrome 插件补测线上移动截图：Chrome 默认视口截图可用，但 CDP 移动指标设置、轻量脚本读取和 DevTools 设备模式切换未能稳定进入 `390x844` 移动 viewport；线上移动截图级 smoke 仍待补。
37. 用户手动打开 Chrome 移动端视图后，已补读线上首页移动 DOM 指标：`innerWidth`、`clientWidth` 和 `scrollWidth` 均为 `321`，H1、图片解码、broken image 和页面 error console 未发现阻断问题；但 Chrome 截图、CDP、可见 DOM、DOM snapshot 和跨路由补查仍出现控制层超时，因此线上移动截图级 smoke 仍待补。
38. 已使用 Playwright + 本机 Google Chrome 完成线上截图级发布检查：覆盖 `https://radishx.com` 下 8 个关键路由在 `1440x900` 桌面与 `390x844` 移动视口的 full-page 截图、逐图 lazy 解码、横向宽度、broken image、console / page error 和触控目标检查，16 个组合均通过；截图与汇总保存在本地 `output/playwright/online-visual-smoke-2026-06-18/`，作为 QA artifact 不提交。
39. 已完成 Mascot 首批 10 个单张表情候选的人工框选复核准备：源图 `1024x1536`、4 列 6 行，计划使用原图整格 `256x256` 框保留圆角边框、角色主体、表情符号和中文标签；该步骤未生成单张 Web 文件、缩略图或下载入口。
40. 已完成 Mascot 首批单张表情授权与页面接入范围确认：当前只允许作为 RadishX 官网内部轻量展示候选，允许位置为 `/mascot` 单张预览候选、404 辅助、FAQ / 状态反馈和开发日志辅助视觉；禁止进入下载区、素材包、社交贴纸包、首页首屏、四项目 Logo 或外部复用场景。
41. 已生成 Mascot 首批 10 张单张表情 Web 展示图，路径为 `public/images/mascot/expressions/radish-child-expression-*-web.jpg`；`/mascot` 已新增单张表情候选预览区，页面文案只表达官网内部展示候选，不提供下载、素材包或外部分发口径。
42. 已完成 Mascot 单张表情接入后的本地验证：`npm run build`、`npm run check:local-release`、`npm run check:http-smoke -- --base-url http://127.0.0.1:4500`、`git diff --check` 和 `sips` 尺寸检查均通过；Playwright + 本机 Chrome 确认 `/mascot` 在 `1440x900` 与 `390x844` 下单张表情卡片 `10/10`、图片 `10/10`、无横向溢出、无 broken image、无 console / page error。
43. 已通过 Pencil 同步 Mascot 桌面 / 移动 v1.1 设计源：`Mascot Page v1.1 - React Accurate` 新增 5 列 x 2 行单张表情候选区，`Mascot Page Mobile v1.1 - React Accurate` 新增 2 列 x 5 行单张表情候选区；两张画板 `snapshot_layout` 均无布局问题。

下一步事项：

1. 下一项可推进的是维持当前本地成果等待后续素材或发布节奏：没有新的正式项目 Logo、截图、视频、seasonal 活动目标或下载授权前，不继续扩展素材入口。
2. 四个项目视觉素材继续按准入清单等待真实候选来源；只有出现独立 Logo、真实截图、视频或 RadishMind 自有视觉候选时，才进入素材审核、Web 优化和设计源同步。
3. 设计源只在 React 页面继续调整、公开素材替换或单张表情进入页面展示时同步对应 v1.1 桌面 / 移动画板；涉及 `.pen` 设计源时只通过 Pencil 工具处理。
4. 不启动 seasonal 页面实现，除非先确认具体活动目标、上线 / 下线时间、页面位置、文案边界、授权来源和撤下策略。
5. 后续如页面代码、公开图片资源、Vercel 部署或域名策略变化，再复跑线上 HTTP smoke 和 Playwright 桌面 / 移动端截图级 smoke。

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
- “萝小白”首批单张表情已生成 Web 展示图并进入 `/mascot` 候选预览区；后续如果开放下载、素材包、社交贴纸包或外部分发，仍需另行确认授权和文件包边界。具体 seasonal 活动实现仍待确认。

## 后续顺序

1. 如 React 页面继续调整或新增正式素材，先同步对应目标文档，再通过 Pencil 工具维护桌面与移动 v1.1 画板。
2. 如进入新的部署阶段或页面 / 资源发生变化，线上 HTTP smoke 可复用当前脚本复跑确认；截图级发布检查使用 Playwright + 本机 Chrome 覆盖桌面与移动端。
3. 如需使用 seasonal 图，先选择具体活动目标并确认上线 / 下线时间、页面位置、文案、授权和撤下策略，再生成 Web 版本。
4. 四个项目出现新的独立 Logo、真实截图、视频或 RadishMind 自有视觉候选来源后，先按项目视觉素材准入清单补齐字段，再进入素材审核和 Web 优化。
5. 后续只有首页视觉再次明显变化或社交预览目标变化时，再评估 Open Graph 分享预览图。
6. 如需继续推进 Mascot 单张表情后续形态，只能在当前官网内部展示候选基础上评估缩略图、更多格位或下载文件包；下载、素材包和外部分发需要另行确认授权范围、文件包边界和撤回策略。
