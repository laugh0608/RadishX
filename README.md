# RadishX

RadishX 是 Radish 系列项目的官网与统一入口。这个仓库计划作为 `radishx.com` 的根站点，通过 GitHub 托管代码，并使用 Vercel 的免费额度进行部署。

当前仓库状态：基础仓库和远程仓库已创建，官网定位、页面内容、域名结构和素材归档已完成首轮规划；Vite + React + TypeScript 官网骨架已初始化，并接入路由、数据层、favicon 和 `--rx-*` 样式 token。

## 已确认方向

- 技术栈：`Vite + React + TypeScript`
- 部署目标：GitHub 仓库 + Vercel 免费部署
- 页面结构：首页 + 四个项目详情页 + About 页面 + 虚拟形象页面
- 官网气质：偏创意品牌、游戏感和视觉冲击，参考 Apple 官网的克制文案、大幅视觉、清晰节奏和强产品呈现，同时继承 Radish 的淡雅新中式、纸感、印色感和低饱和轻纹样
- 设计流程：先在 `docs/design/sources/radishx-site-v0.pen` 完成页面设计稿，审核后再进入 React 实现
- 前端实现：已建立 `src/` 推荐目录结构，使用轻量路由表实现 `/`、四个项目页、`/mascot` 和 `/about`
- 素材使用：可以复用现有截图、Logo 和虚拟形象图片，但正式用于页面前需要先审核具体选图
- GitHub 仓库：公开仓库
- 许可证：source-available，详见 [LICENSE](LICENSE)

## 参考项目

本官网会围绕上一级目录中的四个项目组织内容：

- `Radish`：现代化内容社区与 WebOS 风格工作台，后端基于 ASP.NET Core，前端基于 React / Vite / TypeScript。
- `RadishCatalyst`：以异星化工基地、人物探索战斗、角色成长和后续协作联机为方向的 2D / 2.5D 工业科幻 ARPG。
- `RadishFlow`：以 Rust 为核心、Rust UI 为主界面、`.NET` 负责 CAPE-OPEN / COM 适配的稳态流程模拟软件。
- `RadishMind`：Radish 体系下的外部智能层，负责协议、评测、工具编排与模型实验。

## GitHub 仓库

- `RadishX`：<https://github.com/laugh0608/RadishX>
- `Radish`：<https://github.com/laugh0608/Radish>
- `RadishCatalyst`：<https://github.com/laugh0608/RadishCatalyst>
- `RadishFlow`：<https://github.com/laugh0608/RadishFlow>
- `RadishMind`：<https://github.com/laugh0608/RadishMind>

## 文档入口

- [文档首页](docs/README.md)
- [当前规划](docs/planning/current.md)
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

## 域名草案

根域名：

- `radishx.com`：RadishX 官网首页，展示整个 Radish 项目矩阵。

建议的四个项目子域名：

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind

这些子域名不是当前官网 Vercel 项目的路由，也不需要在 Vercel 中为本官网做重写。它们是未来四个项目各自开发完毕、单独部署后的独立访问域名。

## 链接策略

项目详情页第一版优先开放稳定链接：

- GitHub 仓库链接：全部展示。
- 文档链接：如果项目已有公开文档站或适合公开的仓库文档入口，再展示。
- 演示站、下载页、在线应用：没有稳定公开入口前先不展示，避免用户点到不可用服务。

也就是说，第一版官网可以先把四个项目都指向 GitHub；后续哪个项目有稳定 Demo、文档站或下载页，再单独补入口。

## 部署与跳转策略

当前部署边界：

- 只有 `radishx.com` 这个官网项目部署在 Vercel。
- 首页、四个项目介绍页、虚拟形象页和 About 页面都属于本官网项目。
- `hub.radishx.com`、`forge.radishx.com`、`flow.radishx.com`、`mind.radishx.com` 是未来四个项目各自上线后的独立域名。
- 官网中的项目详情页可以展示这些域名作为“访问项目”按钮；对应项目还没上线前，可以先禁用按钮或标注 Coming Soon。

第一版官网内的项目介绍页不依赖这些域名是否已上线。它们只是官网向外跳转的目标，不承担本官网页面路由。

## 官网目标

官网不需要复杂系统，优先做成轻量、稳定、易维护的静态站点：

- 说明 RadishX 是什么，以及四个项目之间的关系。
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

节日素材不建议作为官网长期主视觉，更适合作为活动 Banner 或节日彩蛋。官网长期主视觉更适合从可爱Q版和虚拟形象完全体的设定图、站姿图中挑选。

## 待讨论方案

正式实现前需要确认以下内容：

- 首页主视觉选图：需要从现有素材或后续新图中审核确认。

## 初步建议

推荐第一版先做成静态多页面官网：

1. 顶部导航：RadishX、Projects、Mascot、About、GitHub。
2. 首页首屏：大幅视觉 + 极少文案，突出 RadishX 是 Radish 系列项目矩阵。
3. 首页项目区：四个项目作为四个强视觉入口，而不是普通信息卡片。
4. 项目详情页：每页围绕一句核心定位、当前状态、关键能力、入口链接组织。
5. 虚拟形象页：以角色设定页方式展示三种形态，后续可扩展为素材库或下载页。
6. About 页：联系方式、社交媒体、组织说明、项目仓库入口。

当前阶段已进入 React 实现，第一版页面先使用图形化候选媒体框、项目状态信息和萝小白原始形象 favicon 作为临时 Logo；未确认的大图素材暂不进入公开页面实现。
