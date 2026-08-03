# RadishX

RadishX 是 Radish 系列项目的官网与统一入口。这个仓库作为 RadishX 官网根站点，通过 GitHub 托管代码，并使用 Vercel 免费额度部署；当前主域为 <https://radishx.com/>，`www.radishx.com` 作为兼容入口跳转到根域。

当前仓库状态：Vite + React + TypeScript 静态官网已完成首版实现，包含首页、五个项目详情页、`/mascot`、`/about` 和 404 页面；已接入路由、数据层、favicon、metadata、Open Graph / Twitter Card、`sitemap.xml`、`robots.txt`、Vercel History API fallback、公开图片和 family-ui 双层样式 token。React 仍维持 `radishx-site-v0.pen` 对应的 v1.2 craft 基线；新的 `radishx-site-v1.pen` 已完成首页桌面四轮视觉校正与 390px 移动首版，采用干净标题、项目内容舞台、不对称生态图谱和透明萝小白立绘舞台，等待视觉复核后再决定是否实现。官网功能开发仍处于等待期，不继续扩展新页面、素材入口、下载能力或 seasonal 活动。

## 已确认方向

- 技术栈：`Vite + React + TypeScript`
- 部署目标：GitHub 仓库 + Vercel 免费部署，当前主域为 `https://radishx.com/`
- 页面结构：首页 + 五个项目详情页 + About 页面 + 虚拟形象页面
- 官网气质：偏创意品牌、游戏感和视觉冲击，参考 Apple 官网的克制文案、大幅视觉、清晰节奏和强产品呈现，同时继承 Radish 的淡雅新中式、纸感、印色感和低饱和轻纹样
- 家族 UI 规范：`docs/design/family-ui/` 提供 family-ui v26.7.3 通用视觉原则、参考 token、组件形态与 UI 参考，不分配具体项目配色，也不跟踪其他项目的采用进度
- 设计流程：保留 `docs/design/sources/radishx-site-v0.pen` 作为已落地历史基线；新方向先在 `docs/design/sources/radishx-site-v1.pen` 评审，确认后再进入 React 实现
- 前端实现：已建立 `src/` 推荐目录结构，使用轻量路由表实现 `/`、五个项目页、`/mascot` 和 `/about`
- 素材使用：首批 Mascot / About 图片、项目代表图、表情 / 贴纸整图预览已审核并生成 Web 版本；后续截图、Logo、角色图、单张贴纸或活动图正式用于页面前仍需先审核具体选图
- GitHub 仓库：公开仓库
- 许可证：source-available，详见 [LICENSE](LICENSE)

## 当前开发节奏

RadishX 官网首版已经完成当前阶段需要承载的内容：项目矩阵、五个项目介绍页、Mascot 页、About 页、基础 SEO、发布检查和设计源同步。后续不为了保持开发动作而继续新增功能。

下一轮官网开发应等待 Radish、RadishCatalyst、RadishFlow、RadishMind 和 RadishLex 各自开发到更适合公开展示的阶段，并补齐正式材料后再启动。可触发恢复开发的材料包括：

- 独立稳定 Logo。
- 真实产品截图、项目自有可视化图或公开视频。
- 稳定 Demo、文档站、下载页或在线入口。
- 项目域名、部署策略、发布计划或下载授权变化。
- Mascot 下载、素材包、社交贴纸包、seasonal 活动或外部分发授权。

恢复开发前先更新对应 `docs/features/*.md`、素材清单和当前规划，再进入设计源、React 实现和验证。

## 参考项目

本官网会围绕上一级目录中的五个项目组织内容：

- `Radish`：现代化内容社区与 WebOS 风格工作台，后端基于 ASP.NET Core，前端基于 React / Vite / TypeScript。
- `RadishCatalyst`：以异星化工基地、人物探索战斗、角色成长和后续协作联机为方向的 2D / 2.5D 工业科幻 ARPG。
- `RadishFlow`：以 Rust 为核心、Rust UI 为主界面、`.NET` 负责 CAPE-OPEN / COM 适配的稳态流程模拟软件。
- `RadishMind`：Radish 体系下的外部智能层，负责协议、评测、工具编排与模型实验。
- `RadishLex`：本地优先的中文输入系统，聚焦离线输入、可解释学习、可删除数据和端到端加密同步。

## GitHub 仓库

- `RadishX`：<https://github.com/laugh0608/RadishX>
- `Radish`：<https://github.com/laugh0608/Radish>
- `RadishCatalyst`：<https://github.com/laugh0608/RadishCatalyst>
- `RadishFlow`：<https://github.com/laugh0608/RadishFlow>
- `RadishMind`：<https://github.com/laugh0608/RadishMind>
- `RadishLex`：<https://github.com/laugh0608/RadishLex>

## 文档入口

- [文档首页](docs/README.md)
- [当前规划](docs/planning/current.md)
- [功能与目标文档](docs/features/README.md)
- [开发规范](docs/development/standards.md)
- [视觉规范](docs/design/visual-guidelines.md)
- [Vercel 与域名说明](docs/deployment/vercel.md)
- [素材治理](docs/assets/materials.md)
- [开发日志](docs/devlogs/README.md)

## 本地开发

```bash
npm run dev
```

本地开发服务器默认监听 `http://127.0.0.1:4500/`。

```bash
npm run build
```

本地发布前静态输出检查：

```bash
npm run check:local-release
```

运行中 HTTP 目标检查：

```bash
npm run check:http-smoke -- --base-url http://127.0.0.1:4500
```

`check:http-smoke` 可在发布阶段追加 `--www-url https://www.radishx.com` 检查 `www` 到 canonical 根域的路径保留跳转；它不替代桌面和移动端视觉 smoke。

## 域名策略

根域名：

- `radishx.com`：RadishX 官网 canonical 主域，展示整个 Radish 项目矩阵。
- `www.radishx.com`：兼容访问入口，当前由 Vercel 跳转到 `radishx.com` 并保留路径。

建议的五个项目子域名：

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind
- `lex.radishx.com`：RadishLex

这些子域名不是当前官网 Vercel 项目的路由，也不需要在 Vercel 中为本官网做重写。它们是未来五个项目各自开发完毕、单独部署后的独立访问域名。

## 链接策略

项目详情页第一版优先开放稳定链接：

- GitHub 仓库链接：全部展示。
- 文档链接：当前已展示各仓库 `dev` 分支中的 README / docs / wiki / status / contracts 等稳定入口。
- 演示站、下载页、在线应用：没有稳定公开入口前先不展示，避免用户点到不可用服务。

也就是说，第一版官网展示 GitHub 和公开文档，不把未来独立域名伪装成已上线服务；后续哪个项目有稳定 Demo、文档站或下载页，再单独补入口。

## 部署与跳转策略

当前部署边界：

- 当前官网 Vercel 项目承载 RadishX 官网，`https://radishx.com/` 是 canonical 主域。
- `www.radishx.com` 已配置为跳转到 `radishx.com`，用于兼容访问和旧入口。
- 首页、五个项目介绍页、虚拟形象页和 About 页面都属于本官网项目。
- `hub.radishx.com`、`forge.radishx.com`、`flow.radishx.com`、`mind.radishx.com`、`lex.radishx.com` 是未来五个项目各自上线后的独立域名。
- 官网中的项目详情页可以展示这些域名作为“访问项目”按钮；对应项目还没上线前，可以先禁用按钮或标注 Coming Soon。
- `sitemap.xml` 和 `robots.txt` 只覆盖当前官网站内页面，不包含五个未来项目子域。

第一版官网内的项目介绍页不依赖这些域名是否已上线。它们只是官网向外跳转的目标，不承担本官网页面路由。

## 官网目标

官网不需要复杂系统，优先做成轻量、稳定、易维护的静态站点：

- 说明 RadishX 是什么，以及五个项目之间的关系。
- 给每个项目一个清晰入口，方便后续接 GitHub、文档、演示站或下载页。
- 使用适合 Vercel 免费部署的技术方案，避免不必要的后端依赖。
- 保持后续可扩展：可以从单页官网逐步演进为多页面项目门户。

## 页面规划

计划页面：

- `/`：RadishX 首页，展示项目矩阵和品牌主视觉。
- `/radish`：Radish 项目详情页。
- `/catalyst`：RadishCatalyst 项目详情页。
- `/flow`：RadishFlow 项目详情页。
- `/mind`：RadishMind 项目详情页。
- `/lex`：RadishLex 项目详情页。
- `/mascot`：虚拟形象页面，展示“萝小白”的原始形象、可爱Q版和虚拟形象完全体。
- `/about`：组织说明、联系方式、社交媒体和项目入口。

## About 信息

- QQ：`2101827166`
- Email：<luobo0608@foxmail.com>
- GitHub 主页：<https://github.com/laugh0608>
- 个人主页：<https://www.imbhj.com>
- 微信公众号：`大白萝卜的坑`
- 微信公众号二维码：`assets/social/wechat-official-account-qr.png`

## 素材规划

虚拟形象“萝小白”素材已整理到 `assets/avatars/`：

- `origin/`：原始形象。
- `child/`：可爱Q版安全候选素材、设定图、站姿、表情包和服装变体。
- `mature/`：虚拟形象完全体、设定图、站姿和表情包。
- `seasonal/`：新年、节日和运营类视觉素材。

社交媒体素材已整理到 `assets/social/`：

- `wechat-official-account-qr.png`：微信公众号“大白萝卜的坑”二维码。

当前已确认并接入首批公开 Web 素材：

- `public/images/mascot/radish-child-safe-design-sheet-v1-web.jpg`
- `public/images/mascot/radish-child-standing-white-dress-web.jpg`
- `public/images/mascot/radish-child-standing-white-dress-tall-web.jpg`
- `public/images/mascot/radish-mature-design-sheet-web.jpg`
- `public/images/mascot/radish-mature-standing-white-dress-web.jpg`
- `public/images/mascot/radish-origin-icon-web.jpg`
- `public/images/mascot/radish-child-outfit-variants-web.jpg`
- `public/images/mascot/radish-child-expression-sheet-grid-web.jpg`
- `public/images/mascot/radish-child-sticker-sheet-wide-01-web.jpg`
- `public/images/mascot/radish-child-sticker-sheet-wide-02-web.jpg`
- `public/images/mascot/radish-child-sticker-sheet-wide-03-web.jpg`
- `public/images/mascot/radish-child-sticker-sheet-wide-04-web.jpg`
- `public/images/mascot/radish-mature-sticker-sheet-wide-web.jpg`
- `public/images/mascot/expressions/radish-child-expression-*-web.jpg`：首批 10 张可爱Q版单张表情 Web 展示图，只用于官网内部展示候选。
- `public/images/projects/radish/radish-acg-web.jpg`
- `public/images/projects/catalyst/radishcatalyst-demo-first-screen-web.jpg`
- `public/images/projects/flow/radishflow-workbench-concept-web.jpg`
- `public/images/social/wechat-official-account-qr-web.png`
- `public/images/social/radishx-og-image.png`：1200x630 Open Graph / Twitter 分享预览图。

可爱Q版表情格和贴纸横图继续保留整图预览；首批 10 张基础表情已生成单张 Web 展示图并接入 `/mascot` 候选预览区，不生成缩略图、不提供下载入口、不声明可自由复用。节日素材不建议作为官网长期主视觉，更适合作为活动 Banner、节日彩蛋或运营内容候选；具体进入页面前需要确认活动窗口、页面位置、文案和授权。

## 待确认事项

后续需要继续确认以下内容：

- 五个项目后续是否补独立稳定 Logo，用于替换当前代码内临时项目标识。
- 五个项目后续是否提供真实截图或可公开视频素材。
- RadishMind 后续是否补项目自有 Logo、Console 截图或协议 / 评测可视化图。
- 五个项目是否已有稳定 Demo、文档站、下载页、在线入口、项目域名或发布计划需要官网同步。
- “萝小白”首批单张表情已生成 Web 展示图并接入 `/mascot` 候选预览区；后续如需开放下载、素材包、社交贴纸包或外部分发，仍需另行确认授权和文件包边界。具体 seasonal 活动实现仍待确认。
- 线上 HTTP、根域跳转、路径保留以及桌面 / 移动端截图级 smoke 已完成；后续如果页面、资源或部署变化，再复跑对应检查。

## 当前实现状态

第一版已按静态多页面官网实现：

1. 顶部导航：RadishX、Projects、Mascot、About、GitHub。
2. 首页首屏：Radish Orbit 项目星图 + 已审核可爱Q版站姿中心视觉锚点。
3. 首页项目区：五个项目作为大幅 band 入口，保留 GitHub、未来域名和素材边界说明。
4. 项目详情页：每页围绕定位、当前状态、公开文档、关键能力、素材审核和项目矩阵关系组织，并提供 Hero 下方站内导览。
5. Mascot 页：展示三种形态、主视觉、Gallery 整图预览、首批单张表情候选预览和使用边界，不提供下载入口。
6. About 页：联系方式、微信公众号二维码、GitHub 仓库入口和域名边界。

当前阶段已进入 React 官网首版实现后的发布准备、文档一致性维护和公开素材治理等待期。五个项目当前使用 RadishX 统一风格代码内临时项目标识，不声明为正式 Logo；未审核图片、外部参考图、活动图和可独立传播素材不进入正式页面实现。下一轮功能开发等待五个项目自身进展和正式材料补齐后再启动。
