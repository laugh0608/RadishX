# 当前规划

最后更新：2026-06-13

## 当前阶段

RadishX 当前处于官网项目初始化前的 Pencil 设计稿阶段。

已完成：

- 明确技术栈：Vite + React + TypeScript。
- 明确部署目标：GitHub 公开仓库 + Vercel 免费部署 `radishx.com`。
- 明确页面结构：首页、四个项目介绍页、Mascot、About。
- 明确官网气质：创意品牌 / 游戏感 / 视觉冲击，参考 Apple 官网的节奏。
- 整理虚拟形象和社交媒体素材。
- 建立基础文档、协作文件和仓库通用配置。
- 初始化 Git 仓库并推送到 `laugh0608/RadishX`。
- 生成“萝小白”可爱Q版安全设定图候选 `assets/avatars/child/radish-child-safe-design-sheet-v1.png`。
- 添加 RadishX source-available 许可证 `LICENSE`。
- 创建 RadishX Pencil 设计源文件 `docs/design/sources/radishx-site-v0.pen`。
- 形成 RadishX 视觉与前端规范、开发规范，明确先设计后实现的流程。
- 完成首页桌面版当前方向 `Home Desktop v1 - Radish Orbit`，采用项目星图、四道入口和萝小白叙事结构。
- 完成首页移动版 `Home Mobile v1 - Radish Orbit`，将桌面星图改为移动端可读的纵向项目轨道。
- 完成项目详情页模板 `Project Detail Template v1 - Flow Example`，用于四个项目详情页复用。
- 完成 `Mascot Page v1` 与 `About Page v1` 桌面版设计稿。
- 确认第一版项目详情页暂不放真实截图和视频素材，使用图形化候选媒体框和项目状态信息承载视觉区域。
- 确认萝小白原始形象可作为站点图标和第一版临时 Logo，并生成 `public/favicon.ico`。

## 产品边界

当前官网只负责展示 RadishX 和四个项目矩阵。

本官网包含：

- `radishx.com` 官网首页。
- Radish、RadishCatalyst、RadishFlow、RadishMind 的站内介绍页。
- Mascot 虚拟形象页。
- About 联系方式和社交媒体页面。

本官网不包含：

- 四个项目的实际业务功能。
- 四个项目未来独立站点的部署。
- 登录、后台、数据库、服务端 API。

## 域名决策

- `radishx.com`：当前官网，部署在 Vercel。
- `hub.radishx.com`：Radish 未来独立访问域名。
- `forge.radishx.com`：RadishCatalyst 未来独立访问域名。
- `flow.radishx.com`：RadishFlow 未来独立访问域名。
- `mind.radishx.com`：RadishMind 未来独立访问域名。
- `x.radishx.com`：保留给 RadishX Labs、实验入口、短链或统一跳转页。

四个项目域名不是当前 Vercel 官网项目的路由或重写规则。

## 待确认

- 首页主视觉最终选图。
- 四个项目详情页后续是否需要独立 Logo、真实截图或视频素材。
- “萝小白”三种形态的正式主图和 Gallery 素材。
- 是否需要为项目文档入口暴露仓库内 docs 链接。
- 项目详情模板、Mascot 页和 About 页是否在 React 实现前补独立移动版设计稿。

## 下一步建议

1. 审核 `Home Mobile v1 - Radish Orbit`、项目详情模板、Mascot 页和 About 页设计稿。
2. 审核首页和 Mascot 页首批候选图，确认哪些素材可进入正式实现。
3. 视审核结果补项目详情模板、Mascot 页和 About 页移动版设计稿，或在实现阶段按桌面稿拆响应式布局。
4. 初始化 Vite + React + TypeScript 项目，接入 `public/favicon.ico`、路由、数据层和样式 token。
5. 实现静态多页面官网骨架并完成 PC / 移动端响应式首轮验证。
