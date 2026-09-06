# Vercel 与域名说明

本文记录 RadishX 官网部署边界和域名策略。

## 当前官网部署

当前只有 RadishX 官网部署到 Vercel。五个项目未来域名不属于本官网项目的路由或重写规则。

- GitHub 仓库：`https://github.com/laugh0608/RadishX`
- Vercel 项目：历史记录为已创建，实际项目名与当前部署提交以获准核验后的 Vercel 记录为准
- Canonical 主域名：`radishx.com`
- 兼容访问入口：`https://www.radishx.com/`，跳转到 `https://radishx.com/`
- 站点内容：首页、五个项目介绍页、Mascot、About

## 未来项目域名

以下域名是五个项目未来独立部署后的访问入口，不是当前官网 Vercel 项目的路由或重写规则。

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind
- `lex.radishx.com`：RadishLex

官网中可以展示这些域名，但实际外链只在入口稳定可用后开放。未上线与暂停维护分别表达，不对 Archived 项目统一标注 Coming Soon。

## 第一版部署配置

第一版部署边界：

1. 公开 GitHub 仓库使用 `laugh0608/RadishX`。
2. Vercel 只构建和部署本官网静态站点。
3. `radishx.com` 是官网 canonical 主域。
4. `www.radishx.com` 作为兼容访问入口跳转到根域，并保留路径。
5. 五个未来项目域名不配置成本官网 rewrite。

当前构建配置：

- Build command：`npm run build`
- Output directory：`dist`

当前 React 官网使用浏览器 History API 做站内路由，因此需要将站内路径回退到 `index.html`。仓库根目录已添加 `vercel.json`：

```json
{
  "rewrites": [
    {
      "source": "/((?!favicon.ico|robots.txt|sitemap.xml|assets/.*|images/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

该配置只处理官网自身的静态页面路径，不包含五个未来项目域名。`favicon.ico`、`robots.txt`、`sitemap.xml`、`assets/` 和 `images/` 明确排除在 History API fallback 之外。

## SEO 辅助文件

当前公开静态文件：

- `public/robots.txt`：允许抓取当前官网，并声明 `https://radishx.com/sitemap.xml`。
- `public/sitemap.xml`：只列出当前官网站内页面：`/`、五个项目介绍页、`/mascot` 和 `/about`。
- `public/images/social/radishx-og-image.png`：1200x630 Open Graph / Twitter 分享预览图，metadata 中使用 `https://radishx.com/images/social/radishx-og-image.png`。

五个未来项目子域名不写入当前官网 sitemap，等对应项目独立部署后由各自站点维护。

## 输出与 SEO 能力边界

当前所有页面路径共用 `index.html`，title、description、canonical 与 OG / Twitter 在浏览器执行 JavaScript 后更新。初始 HTML 为首页信息，不具备逐路由静态正文；未知路径同样进入 fallback，客户端再显示 404 并设置 `noindex`。

后续静态 HTML 输出与未知路径响应只处于 [质量收口目标](../features/site-quality-and-public-content.md) 的方案评估，尚未选定工具或修改 rewrite。已有 sitemap、客户端 metadata 和历史 HTTP smoke 不等于逐页面抓取 / 分享结果已验证。

## 发布与核验记录

一次发布应分别记录：本地提交及工作区状态、目标站点、实际部署提交或可识别部署版本、核验日期、执行的 HTTP / 浏览器检查及结果。未获取实际线上版本时，明确记为未核验，不根据本地构建或旧截图推断部署一致。

`www` 跳转来自托管侧配置，当前 `vercel.json` 本身没有定义这一跳转。配置变化或新的发布检查时应重新验证路径保留；本地仓库检查不能证明控制台配置有效。

## 历史记录索引

- 2026-06-13 / 14 的 HTTP、浏览器链路和域名规范化原始记录已归入 [2026-W24 开发日志](../devlogs/2026-W24.md)。其中早期 `www` 返回 200 和后续变为 307 是不同时间的事实，不是当前相互冲突的要求。
- 后续线上检查记录见 [视觉 QA 与发布检查](../features/visual-qa-and-release.md)；只对各自日期和目标有效。
- 当前版本核验状态见 [当前规划](../planning/current.md)。

## 不在当前阶段做

- 不为五个未来项目域名配置 Vercel 重写。
- 不把五个项目部署到当前官网 Vercel 项目中。
- 不为官网引入后端服务。
- 不在未上线项目前暴露不可用的跳转按钮。
