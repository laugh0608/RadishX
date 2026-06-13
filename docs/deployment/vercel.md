# Vercel 与域名说明

本文记录 RadishX 官网部署边界和域名策略。

## 当前官网部署

当前只有 RadishX 官网部署到 Vercel。四个项目未来域名不属于本官网项目的路由或重写规则。

- GitHub 仓库：`https://github.com/laugh0608/RadishX`
- Vercel 项目：已创建，项目名以 Vercel 控制台为准
- 主域名目标：`radishx.com`
- 已验证访问入口：`https://www.radishx.com/`
- 待确认：`radishx.com` 与 `www.radishx.com` 的 canonical / redirect 策略
- 站点内容：首页、四个项目介绍页、Mascot、About

## 未来项目域名

以下域名是四个项目未来独立部署后的访问入口，不是当前官网 Vercel 项目的路由或重写规则。

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind

官网中可以把这些域名作为“访问项目”的外部链接。对应项目未上线前，按钮应禁用、隐藏或标注 Coming Soon。

## 第一版部署配置

第一版部署边界：

1. 公开 GitHub 仓库使用 `laugh0608/RadishX`。
2. Vercel 只构建和部署本官网静态站点。
3. `radishx.com` 是官网主域名目标，`www.radishx.com` 当前已验证可访问。
4. 根域与 `www` 的规范化跳转策略需要在 Vercel / DNS 配置中确认。
5. 四个未来项目域名不配置成本官网 rewrite。

预期 Vite 配置：

- Build command：`npm run build`
- Output directory：`dist`

当前 React 官网使用浏览器 History API 做站内路由，因此需要将站内路径回退到 `index.html`。仓库根目录已添加 `vercel.json`：

```json
{
  "rewrites": [
    {
      "source": "/((?!favicon.ico|assets/.*|images/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

该配置只处理官网自身的静态页面路径，不包含四个未来项目域名。

## 2026-06-13 线上 smoke 记录

- Chrome 插件已确认 `https://www.radishx.com/` 能在真实 Chrome 中打开，页面标题为 `RadishX - Radish 系列项目矩阵`。
- Chrome 插件在 DOM / 截图采集阶段出现超时，疑似与当时两个会话同时控制 Chrome 有关；后续需要在 Chrome 会话稳定时补一次完整桌面和移动端视觉 smoke。
- 直接 HTTP 检查确认 `https://www.radishx.com/` 返回 `HTTP/2 200`，响应来自 Vercel / Cloudflare，`x-vercel-cache: HIT`。
- 站内路径 `/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 均返回 `HTTP/2 200`，并落到 `index.html`。
- 未知路径 `/abc-test` 返回 `HTTP/2 200` 并落到 `index.html`，确认当前 Vercel fallback 可覆盖 History API 路由。
- 本机 shell 环境存在失效的 `127.0.0.1:10808` 代理配置；后续直接 HTTP 检查需要先确认代理状态，或在命令中显式清理代理变量。

## 不在当前阶段做

- 不为四个未来项目域名配置 Vercel 重写。
- 不把四个项目部署到当前官网 Vercel 项目中。
- 不为官网引入后端服务。
- 不在未上线项目前暴露不可用的跳转按钮。
