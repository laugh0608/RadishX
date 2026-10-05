# RadishX

RadishX 是 Radish 系列项目的官网与统一入口。这个仓库作为 RadishX 官网根站点，通过 GitHub 托管代码，并使用 Vercel 免费额度部署；当前主域为 <https://radishx.com/>，`www.radishx.com` 作为兼容入口跳转到根域。

当前仓库状态：Vite + React + TypeScript 静态官网已完成首版实现，包含首页、九个产品详情页、`/mascot`、`/about` 和 404 页面；已接入路由、数据层、favicon、metadata、Open Graph / Twitter Card、`sitemap.xml`、`robots.txt`、Vercel History API fallback、公开图片和 family-ui 双层样式 token。`radishx-site-v1.pen` 的首页桌面与 390px 移动灰玉方案已落地 React：使用干净标题、可切换项目内容舞台、不对称生态图谱和透明萝小白立绘舞台；其余页面继续保留 v1.2 craft 信息架构。产品列表已按本地兄弟仓库更新为九项；Axiom Checker 作为 Axiom 配套仓库。当前阶段和验证状态见 [当前规划](docs/planning/current.md)。

## 已确认方向

- 技术栈：`Vite + React + TypeScript`
- 部署目标：GitHub 仓库 + Vercel 免费部署，当前主域为 `https://radishx.com/`
- 页面结构：首页 + 九个产品详情页 + About 页面 + 虚拟形象页面
- 官网气质：偏创意品牌、游戏感和视觉冲击，参考 Apple 官网的克制文案、大幅视觉、清晰节奏和强产品呈现，同时继承 Radish 的淡雅新中式、纸感、印色感和低饱和轻纹样
- 家族 UI 规范：`docs/design/family-ui/` 提供 family-ui v26.7.3 通用视觉原则、参考 token、组件形态与 UI 参考，不分配具体项目配色，也不跟踪其他项目的采用进度
- 设计流程：保留 `docs/design/sources/radishx-site-v0.pen` 作为历史基线；首页新方向在 `docs/design/sources/radishx-site-v1.pen` 评审确认后已进入 React 实现
- 前端实现：已建立 `src/` 推荐目录结构，使用轻量路由表实现 `/`、九个产品页、`/mascot` 和 `/about`
- 素材使用：首批 Mascot / About 图片、项目代表图、表情 / 贴纸整图预览已审核并生成 Web 版本；后续截图、Logo、角色图、单张贴纸或活动图正式用于页面前仍需先审核具体选图
- GitHub 仓库：公开仓库
- 许可证：source-available，详见 [LICENSE](LICENSE)

## 当前开发节奏

内容维护按兄弟仓库的最新定位与状态同步；页面、视觉、素材和发布扩展先明确对应目标与边界。阶段、优先级和停止线统一见 [当前规划](docs/planning/current.md)，九产品范围与来源见 [产品矩阵同步](docs/features/product-matrix-refresh.md)。

## 参考项目

本官网按九个独立产品组织内容：

- `Radish`：面向兴趣与创作者群体的现代社区，Web 已发布，Flutter Native 按平台建设。
- `RadishCatalyst`：异星化工生产经营游戏，三维基础工厂持续迭代。
- `RadishFlow`：以 Rust 为核心的可扩展流程模拟平台，已恢复正常开发。
- `RadishMind`：AI 应用、工作流与模型集成平台，处于内部开发者预览。
- `RadishLex`：本地优先的中文输入系统，建设离线输入、个人化与自部署加密同步。
- `RadishAxiom`：面向 AI Agent 的验证优先语言与可信语义层；`RadishAxiomChecker` 是其配套检查器，合计一个产品。
- `RadishLink`：离线自组网通信设备与协议探索。
- `RadishMemory`：用户拥有、模型无关的个人长期记忆与上下文系统。
- `RadishNexus`：研发团队自部署优先的沟通、协作与交付枢纽。

## GitHub 仓库

- `RadishX`：<https://github.com/laugh0608/RadishX>
- `Radish`：<https://github.com/laugh0608/Radish>
- `RadishCatalyst`：<https://github.com/laugh0608/RadishCatalyst>
- `RadishFlow`：<https://github.com/laugh0608/RadishFlow>
- `RadishMind`：<https://github.com/laugh0608/RadishMind>
- `RadishLex`：<https://github.com/laugh0608/RadishLex>
- `RadishAxiom`：<https://github.com/laugh0608/RadishAxiom>
- `RadishAxiomChecker`：<https://github.com/laugh0608/RadishAxiomChecker>
- `RadishLink`：<https://github.com/laugh0608/RadishLink>
- `RadishMemory`：<https://github.com/laugh0608/RadishMemory>
- `RadishNexus`：<https://github.com/laugh0608/RadishNexus>

## 文档入口

- [文档首页](docs/README.md)
- [当前规划](docs/planning/current.md)
- [Agent 协作与执行规则](docs/development/agent-collaboration.md)
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

既有五个项目规划子域名：

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind
- `lex.radishx.com`：RadishLex

这些子域名不是当前官网 Vercel 项目的路由，也不需要在 Vercel 中为本官网做重写。它们是对应项目各自开发完毕、单独部署后的独立访问域名。

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
- 首页、九个产品介绍页、虚拟形象页和 About 页面都属于本官网项目。
- `hub.radishx.com`、`forge.radishx.com`、`flow.radishx.com`、`mind.radishx.com`、`lex.radishx.com` 是未来九个产品各自上线后的独立域名。
- 官网中的项目详情页可以展示这些域名作为“访问项目”按钮；对应项目还没上线前，可以先禁用按钮或标注 Coming Soon。
- `sitemap.xml` 和 `robots.txt` 只覆盖当前官网站内页面，不包含五个未来项目子域。

第一版官网内的项目介绍页不依赖这些域名是否已上线。它们只是官网向外跳转的目标，不承担本官网页面路由。

## 官网目标

官网不需要复杂系统，优先做成轻量、稳定、易维护的静态站点：

- 说明 RadishX 是什么，以及九个产品之间的关系。
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
- `/axiom`：RadishAxiom 产品介绍页。
- `/link`：RadishLink 产品介绍页。
- `/memory`：RadishMemory 产品介绍页。
- `/nexus`：RadishNexus 产品介绍页。
- `/mascot`：虚拟形象页面，展示“萝小白”的原始形象、可爱Q版和虚拟形象完全体。
- `/about`：组织说明、联系方式、社交媒体和项目入口。

## About 信息

- QQ：`2101827166`
- Email：<luobo@radishx.com>
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
- `public/images/mascot/radish-mature-standing-grayjade-v1-transparent.png`：首页 Mascot 舞台透明完全体立绘，只用于官网展示，不开放下载。
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

- 九个产品后续是否补独立稳定 Logo，用于替换当前代码内临时项目标识。
- 九个产品后续是否提供真实截图或可公开视频素材。
- RadishMind 后续是否补项目自有 Logo、Console 截图或协议 / 评测可视化图。
- 九个产品是否已有稳定 Demo、文档站、下载页、在线入口、项目域名或发布计划需要官网同步。
- “萝小白”首批单张表情已生成 Web 展示图并接入 `/mascot` 候选预览区；后续如需开放下载、素材包、社交贴纸包或外部分发，仍需另行确认授权和文件包边界。具体 seasonal 活动实现仍待确认。
- 线上 HTTP、根域跳转、路径保留以及桌面 / 移动端截图级 smoke 已完成；后续如果页面、资源或部署变化，再复跑对应检查。

## 当前实现状态

第一版已按静态多页面官网实现：

1. 顶部导航：RadishX、Projects、Mascot、About、GitHub。
2. 首页首屏：灰玉纯标题 + 可切换单项目内容舞台 + 九产品索引，支持鼠标与键盘操作。
3. 首页项目区：九个产品；原五项保留既有视觉，新增四项使用文字定位与临时标识。
4. 项目详情页：每页围绕定位、当前状态、公开文档、关键能力、素材审核和项目矩阵关系组织，并提供 Hero 下方站内导览。
5. Mascot 页：展示三种形态、主视觉、Gallery 整图预览、首批单张表情候选预览和使用边界，不提供下载入口。
6. About 页：联系方式、微信公众号二维码、GitHub 仓库入口和域名边界。

首页灰玉原五项目基线保留历史验证记录；九产品更新的验证证据见当前规划与开发日志。代码内临时标识不声明为正式 Logo，新增产品未引入未经审核的截图或素材。
