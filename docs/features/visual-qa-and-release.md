# 视觉 QA 与发布检查

状态：持续执行，线上截图级 smoke 待补  
最后更新：2026-06-14

## 目标

确保 RadishX 官网在本地和线上发布后保持桌面、移动端、metadata、路由 fallback、SEO 辅助文件和公开图片资源可用。

## 背景

当前已经完成多轮本地响应式、可访问性和生产质量检查；线上 HTTP 状态、根域跳转、`sitemap.xml` 和 `robots.txt` 已验证。Browser / Chrome 截图采集链路曾出现不稳定，线上截图级视觉 smoke 需要后续补跑。

## 范围

- 本地构建和静态资源输出。
- 桌面与 390px 移动端视觉 smoke。
- `radishx.com` 与 `www.radishx.com` 跳转和路径保留。
- 站内路由与未知路径 `index.html` fallback。
- `sitemap.xml`、`robots.txt`、canonical、Open Graph 和 Twitter Card。
- 图片资源访问、加载和裁切。

## 不做

- 不在本目标中改变页面视觉方向。
- 不配置四个未来项目子域名为当前官网 Vercel 路由。
- 不把线上 smoke 结果替代本地构建验证。

## 基础检查

- `npm run build`
- `git diff --check`
- 必要时检查 `dist/` 是否包含 `sitemap.xml`、`robots.txt` 和公开图片资源。
- 视觉改动后检查至少一个桌面视口和一个 390px 移动端视口。

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
