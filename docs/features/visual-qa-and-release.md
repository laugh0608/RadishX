# 视觉 QA 与发布检查

状态：持续执行，本地发布前复查、HTTP smoke 准备、可访问性整理、实现口径对齐检查与设计源同步说明已完成，线上截图级 smoke 待补
最后更新：2026-06-16

## 目标

确保 RadishX 官网在本地和线上发布后保持桌面、移动端、metadata、路由 fallback、SEO 辅助文件、公开图片资源、语义结构和键盘访问可用。

## 背景

当前已经完成多轮本地响应式、可访问性和生产质量检查；线上 HTTP 状态、根域跳转、`sitemap.xml` 和 `robots.txt` 已验证。Browser / Chrome 截图采集链路曾出现不稳定，线上截图级视觉 smoke 需要后续补跑。

已新增可复用 HTTP smoke 脚本，用于在本地或未来线上目标上检查路由 HTML、SEO 文件、公开图片资源和可选 `www` 跳转；该脚本不替代 Browser / Chrome 的截图级视觉检查。

本轮按“跳过发布，继续本地开发”的节奏，只推进本地站点级质量与可访问性整理，不触发推送、部署或线上 smoke。

## 范围

- 本地构建和静态资源输出。
- 桌面与 390px 移动端视觉 smoke。
- `radishx.com` 与 `www.radishx.com` 跳转和路径保留。
- 站内路由与未知路径 `index.html` fallback。
- `sitemap.xml`、`robots.txt`、canonical、Open Graph 和 Twitter Card。
- 图片资源访问、加载和裁切。
- 页面 heading 层级、主内容跳转、导航语义、重复链接可访问名称和键盘焦点。

## 不做

- 不在本目标中改变页面视觉方向。
- 不配置四个未来项目子域名为当前官网 Vercel 路由。
- 不把线上 smoke 结果替代本地构建验证。
- 不引入新素材、新依赖或下载入口。

## 基础检查

- `npm run build`
- `npm run check:local-release`
- `npm run check:http-smoke -- --base-url http://127.0.0.1:4500`
- `git diff --check`
- 必要时检查 `dist/` 是否包含 `sitemap.xml`、`robots.txt` 和公开图片资源。
- 视觉改动后检查至少一个桌面视口和一个 390px 移动端视口。
- 可访问性整理后检查 skip link、`main` 聚焦、导航 / 页脚语义、重复链接名称、heading 序列、横向溢出和 console error。

## 本地检查记录

2026-06-16 已完成一轮本地发布前复查：

- 新增 `npm run check:local-release`，用于复用本地发布前静态输出检查；该命令会先执行生产构建，再检查 `dist/` 入口文件、SEO 文件、Vite asset 和公开图片资源。
- 执行 `npm run check:local-release` 通过，确认 18 个公开图片文件和 2 个 Vite asset 文件已输出。
- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 检查 `dist/` 输出，包含 `index.html`、`favicon.ico`、`robots.txt`、`sitemap.xml`、构建后的 CSS / JS、3 张项目代表图、13 张 Mascot 图和 2 张社交 / 联系图片。
- 使用 Browser 检查 `1440x900` 桌面视口下的 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test`；页面标题、H1、路由 fallback、导航 active 状态、横向滚动、主内容和 skip link 均正常，console error 为空。
- 使用 Browser 检查 `390x844` 移动视口下的同一组路由；未发现横向溢出、低于 `44px` 的可点击目标、关键文案遮挡或按钮明显错位。
- 使用 Browser 检查 8 个路由的 metadata、canonical、Open Graph、Twitter Card 和 robots 口径；正常页面为 `index, follow`，未知路径为 `noindex, nofollow`。
- 使用 Browser 直接打开 `sitemap.xml` 和 `robots.txt`，确认本地可访问且内容类型正确。
- 使用 Browser 直接打开 `public/images` 中 18 个公开图片路径，均可解码并返回有效原始尺寸。
- 本轮 Browser 后台滚动动作未改变页面 `scrollY`，因此未把 Gallery lazy 图片的页面内滚动触发作为本轮结论；资源解码和页面结构已完成复查，后续如需截图级或滚动级视觉结论，可换可滚动的浏览器会话复跑。
- 执行 `git diff --check` 通过。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

2026-06-16 已完成一轮本地 HTTP smoke 准备：

- 新增 `npm run check:http-smoke`，用于对指定 `--base-url` 做站内路由 HTML、`robots.txt`、`sitemap.xml` 和公开图片 HTTP 检查。
- 该命令默认检查 `http://127.0.0.1:4500`，可通过 `--base-url` 或 `SITE_BASE_URL` 指定目标；进入发布阶段后可增加 `--www-url` 或 `SITE_WWW_URL` 检查 `www` 到 canonical 根域的路径保留跳转。
- 执行 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 通过，确认 8 个路由和 18 个公开图片资源可访问。
- 本地沙箱内本机 HTTP 请求受限时，该命令需要按权限规则在沙箱外复跑；这不改变脚本的检查范围。
- 执行 `git diff --check` 通过。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

2026-06-15 已完成一轮本地发布检查：

- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 执行 `git diff --check` 通过，确认当前文档与代码改动无空白问题。
- 使用 Browser 检查 `1440x900` 桌面视口下的 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test`；页面标题、H1、路由 fallback 和横向滚动检查正常，console error 为空。
- 使用 Browser 检查 `390x844` 移动视口下的同一组路由；未发现横向溢出、导航挤压、关键文案遮挡或按钮明显错位。
- 抽查桌面首页、移动首页、移动 Mascot、移动 About 和移动 404 首屏截图，未发现视觉阻断问题。
- 在移动端滚动检查 `/mascot` Gallery，12 张页面图片滚入视口后均完成加载，console error 为空。
- 检查 `dist/` 输出，包含 `index.html`、`favicon.ico`、`robots.txt`、`sitemap.xml`、构建后的 CSS / JS，以及项目、Mascot、社交图片资源。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

## 本地可访问性整理记录

2026-06-15 已完成一轮站点级语义与可访问性整理：

- 保留现有 skip link、`main#main-content` 和路径切换后的主内容聚焦机制。
- 将页脚链接容器从普通 `div` 升级为 `nav`，并保留 `aria-label="页脚链接"`。
- 为首页项目 band 中重复出现的“查看详情”和“GitHub”链接补充项目上下文可访问名称。
- 为首页星图项目入口、顶部 / 页脚 GitHub 入口、项目页 Hero 操作和 `InfoRail` 外链补充更明确的可访问名称。
- 使用 Browser 检查 `/`、`/radish`、`/mascot`、`/about` 和 `/abc-test` 在 `1440x900` 与 `390x844` 下的语义结构；确认每页 1 个 `h1`、存在 skip link 与 `main#main-content`、顶部和页脚导航语义正常、图片均有 `alt`、重复链接已具备具体可访问名称、无横向溢出，console 无 error。
- 本轮不改视觉方向、不接入新素材、不修改部署配置。

## 设计源与实现口径对齐记录

2026-06-16 按“跳过发布，继续本地开发”的节奏完成一轮对齐检查：

- 对照 `docs/design/visual-guidelines.md`、`docs/development/standards.md`、当前目标文档和 React 实现，复查首页、四个项目页、Mascot 页、About 页的页面节奏、移动端结构、说明文案和素材边界。
- 首页继续符合“首屏品牌与项目矩阵 -> 项目 band -> 生态关系 -> 公开入口 -> Mascot 入口”的节奏；Radish Orbit 使用已审核可爱Q版站姿图作为中心视觉锚点，未接入新的未审核主视觉。
- 四个项目详情页继续使用克制的信息结构，保留 Hero 下方站内导览、公开文档入口、未来域名、禁用访问入口、素材审核说明和代码内临时项目标识；未把临时标识描述为正式 Logo。
- Mascot 页继续保留三形态、Gallery 整图预览和使用边界；表情、贴纸、seasonal 图和下载入口仍按素材治理文档后置，不进入本轮实现。
- About 页继续保持联系方式、微信公众号二维码、GitHub 仓库入口和域名边界的收束结构；微信公众号二维码未进入首页首屏。
- 样式层继续以 `--rx-*` token 为主，未在 JSX 中扩散硬编码复杂样式；移动端已降低背景密度，主要按钮和站内导览触控高度不低于 `44px`。
- 初次尝试读取 Pencil 设计源时，Pencil 应用连接不可用；后续用户启动 Pencil 后，确认 active editor 为 `docs/design/sources/radishx-site-v0.pen`。
- 通过 Pencil 检查 5 个顶层画板：`Home Desktop v1 - Radish Orbit`、`Home Mobile v1 - Radish Orbit`、`Project Detail Template v1 - Flow Example`、`Mascot Page v1` 和 `About Page v1`；Pencil 报告无布局问题。
- 设计源当前结构稳定，但视觉内容仍偏 v1 早期设计：首页、项目模板和 Mascot 页仍存在候选 / 占位表达，尚未逐屏重绘为当前 React 实现。
- 已通过 Pencil 在 5 个画板底部追加 `2026-06-16 实现口径同步` 说明 band，记录当前 React 实现、素材边界和后续重绘注意事项；同步后再次检查无布局问题。
- 使用 Browser 检查 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test` 在 `1440x900` 与 `390x844` 下的标题、H1、导航 active 状态、横向滚动、触控目标和 console error；未发现阻断问题。
- 对首页和 `/mascot` 追加滚动加载复查；Mascot 页 12 张图片滚入视口后均完成加载，首页重复使用的可爱Q版站姿图具备有效原始尺寸，无图片资源 404 或页面 error。

## 线上检查

Browser / Chrome 会话稳定后补跑：

- `https://radishx.com/`
- `https://radishx.com/radish`
- `https://radishx.com/catalyst`
- `https://radishx.com/flow`
- `https://radishx.com/mind`
- `https://radishx.com/mascot`
- `https://radishx.com/about`
- 一个未知路径，例如 `/abc-test`

检查重点：

- HTTP 状态和 fallback 正常。
- `www.radishx.com` 跳转到根域并保留路径。
- 页面无横向滚动。
- 关键图片加载成功。
- metadata、canonical、Open Graph 和 noindex 口径符合预期。
- 页面 error console 为空或无项目相关错误。

可先使用 HTTP smoke 做状态层检查：

```bash
npm run check:http-smoke -- --base-url https://radishx.com --www-url https://www.radishx.com
```

该命令只覆盖 HTTP、SEO 文件和公开图片资源，不覆盖视觉截图、滚动加载和交互状态。

## 完成标准

- 本地构建通过。
- 桌面和 390px 移动端关键路由无视觉阻断问题。
- 线上 HTTP 和截图级 smoke 有明确记录。
- 发布相关风险写入本周开发日志。

## 后续事项

- 后续如需要把设计源升级为精确实现稿，再通过 Pencil 逐屏重绘首页、项目详情模板、Mascot 页和 About 页；当前只完成实现口径同步说明，不做大面积视觉重做。
- Browser / Chrome 稳定后补跑线上截图级 smoke。
- 首页主视觉或 Open Graph 图替换后，复查分享预览。
- 四个项目有独立站上线后，重新评估域名区和 sitemap 边界。
