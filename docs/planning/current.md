# 当前规划

最后更新：2026-06-14

## 当前阶段

RadishX 当前处于官网项目初始化后的 React 实现阶段。

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
- 初始化 Vite + React + TypeScript 官网骨架。
- 建立 `src/` 推荐目录结构，接入轻量路由、项目数据层、联系方式数据层和 Mascot 数据层。
- 接入 `public/favicon.ico` 作为站点图标、导航图标和第一版临时 Logo。
- 建立 `src/styles/tokens.css`、`global.css` 和 `utilities.css`，落地 `--rx-*` 语义 token。
- 实现首页、四个项目详情页、Mascot 页、About 页和 404 页面首版响应式骨架。
- 添加 `vercel.json`，为官网站内 History API 路由提供 `index.html` fallback。
- 细化首页项目 band 的信息层级，补充未来域名、项目角色和公开信号。
- 细化图形化候选媒体框，补充项目短名、阶段和项目轨道标签。
- 细化 Mascot 页和 About 页移动端布局，补强三形态、素材口径、联系方式、二维码占位、仓库入口和域名边界的 390px 可读性。
- 细化四个项目详情页移动端公开信息层级，补充 Hero 摘要、媒体框说明、公开状态行和项目矩阵回流入口。
- 完成 768px tablet 和 1728px wide 第一轮响应式 QA，覆盖首页、四个项目详情页、Mascot 和 About 的横向溢出和关键区域渲染。
- 细化首页主视觉的素材接入口径，在 Radish Orbit 星图下补充 Hero 主视觉、萝小白三形态和项目媒体三类素材状态槽，继续避免未审核图片进入正式页面。
- 补齐官网第一版基础 metadata、canonical、Open Graph、Twitter Card、404 noindex、skip link 和外链安全口径，为 Vercel 首次部署检查做准备。
- 完成 Vercel 首次线上 smoke：`https://www.radishx.com/` 可访问，站内路径和未知路径均返回 `index.html` fallback；完整视觉 smoke 需要在 Chrome 会话稳定后复查。
- 完成 2026-06-14 本地桌面与 390px 移动端全路由响应式 smoke，覆盖首页、四个项目详情页、Mascot、About 和 404 测试路径；修正导航 / 信息栏小链接触控目标和 About 二维码占位文本溢出。
- 复查 `https://www.radishx.com/` 线上 HTTP 状态，首页、站内路径和未知路径均返回 `200`；线上浏览器截图采集仍受当前 Browser / Playwright 会话稳定性限制。
- 确认 `radishx.com` 为官网 canonical 主域，`www.radishx.com` 作为兼容入口跳转到根域，并验证根路径与 `/about` 跳转保留路径。

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

- 首页主视觉最终选图。
- 四个项目详情页后续是否需要独立 Logo、真实截图或视频素材。
- “萝小白”三种形态的正式主图和 Gallery 素材。
- 是否需要为项目文档入口暴露仓库内 docs 链接。
- 项目详情模板、Mascot 页和 About 页是否在 React 实现前补独立移动版设计稿。

## 下一步建议

1. 在 Browser / Chrome 会话稳定后补一次线上桌面与 390px 移动端截图级视觉 smoke，确认生产站点视觉与本地验证一致。
2. 开始审核首页与 Mascot 首批候选素材，确认哪些图片可以进入公开页面；通过审核后再生成 Web 优化版本并放入 `public/images/`。
3. 继续让 React 实现贴近 Pencil v1，优先补首页主视觉状态槽、项目详情状态区、Mascot 三形态和 About 联系区的精细节奏。
4. 推进 `sitemap.xml`、`robots.txt` 和分享预览图片等 SEO 辅助文件。
