# 视觉 QA 与发布检查

状态：持续执行，本地发布检查与可访问性整理已完成，线上截图级 smoke 待补
最后更新：2026-06-15

## 目标

确保 RadishX 官网在本地和线上发布后保持桌面、移动端、metadata、路由 fallback、SEO 辅助文件、公开图片资源、语义结构和键盘访问可用。

## 背景

当前已经完成多轮本地响应式、可访问性和生产质量检查；线上 HTTP 状态、根域跳转、`sitemap.xml` 和 `robots.txt` 已验证。Browser / Chrome 截图采集链路曾出现不稳定，线上截图级视觉 smoke 需要后续补跑。

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
- `git diff --check`
- 必要时检查 `dist/` 是否包含 `sitemap.xml`、`robots.txt` 和公开图片资源。
- 视觉改动后检查至少一个桌面视口和一个 390px 移动端视口。
- 可访问性整理后检查 skip link、`main` 聚焦、导航 / 页脚语义、重复链接名称、heading 序列、横向溢出和 console error。

## 本地检查记录

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

## 完成标准

- 本地构建通过。
- 桌面和 390px 移动端关键路由无视觉阻断问题。
- 线上 HTTP 和截图级 smoke 有明确记录。
- 发布相关风险写入本周开发日志。

## 后续事项

- Browser / Chrome 稳定后补跑线上截图级 smoke。
- 首页主视觉或 Open Graph 图替换后，复查分享预览。
- 四个项目有独立站上线后，重新评估域名区和 sitemap 边界。
