# Vercel 与域名说明

本文记录 RadishX 官网部署边界和域名策略。

## 当前官网部署

当前只有 RadishX 官网部署到 Vercel。

- GitHub 仓库：`https://github.com/laugh0608/RadishX`
- Vercel 项目：未来创建
- 主域名：`radishx.com`
- 站点内容：首页、四个项目介绍页、Mascot、About

## 未来项目域名

以下域名是四个项目未来独立部署后的访问入口，不是当前官网 Vercel 项目的路由或重写规则。

- `hub.radishx.com`：Radish
- `forge.radishx.com`：RadishCatalyst
- `flow.radishx.com`：RadishFlow
- `mind.radishx.com`：RadishMind

官网中可以把这些域名作为“访问项目”的外部链接。对应项目未上线前，按钮应禁用、隐藏或标注 Coming Soon。

## 第一版部署策略

第一版只需要：

1. 创建公开 GitHub 仓库 `laugh0608/RadishX`。
2. 将本项目推送到 GitHub。
3. 在 Vercel 创建一个静态前端项目。
4. 绑定 `radishx.com` 到该 Vercel 项目。
5. 确认 Vercel 构建命令和输出目录。

预期 Vite 配置：

- Build command：`npm run build`
- Output directory：`dist`

## 不在当前阶段做

- 不为四个未来项目域名配置 Vercel 重写。
- 不把四个项目部署到当前官网 Vercel 项目中。
- 不为官网引入后端服务。
- 不在未上线项目前暴露不可用的跳转按钮。
