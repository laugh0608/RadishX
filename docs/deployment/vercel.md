# Vercel 与域名说明

本文记录 RadishX 官网部署边界和域名策略。

## 当前官网部署

本 Vercel 项目仅承载 RadishX 官网。2026-10-06 所有者确认 Radish 与 RadishInk 已独立部署；2026-10-17 所有者要求官网移除未部署项目的网页链接，仅保留这两个已部署入口。项目子域不属于本官网的路由或重写规则。

- GitHub 仓库：`https://github.com/laugh0608/RadishX`
- Vercel 项目：历史记录为已创建，实际项目名与当前部署提交以获准核验后的 Vercel 记录为准
- Canonical 主域名：`radishx.com`
- 兼容访问入口：`https://www.radishx.com/`，跳转到 `https://radishx.com/`
- 站点内容：首页、十三个产品介绍页、Mascot、About

## 项目独立域名

已部署的 Web 入口（2026-10-06 所有者确认）：

- `hub.radishx.com`：Radish
- `ink.radishx.com`：RadishInk，主要以 Web 方式提供服务

官网只登记和展示上述两个已部署入口，开放对应项目的访问按钮。其他项目暂不登记、不推导、不展示暂定域名、禁用按钮或“即将上线”暗示；只保留 GitHub 与项目文档入口。部署状态依据所有者确认及 RadishInk 本地部署文档，本次不代表重新执行了线上可用性验收。

## 第一版部署配置

第一版部署边界：

1. 公开 GitHub 仓库使用 `laugh0608/RadishX`。
2. Vercel 只构建和部署本官网静态站点。
3. `radishx.com` 是官网 canonical 主域。
4. `www.radishx.com` 作为兼容访问入口跳转到根域，并保留路径。
5. 项目独立域名不配置成本官网 rewrite。

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

该配置只处理官网自身的静态页面路径，不包含项目独立域名。`favicon.ico`、`robots.txt`、`sitemap.xml`、`assets/` 和 `images/` 明确排除在 History API fallback 之外。

## SEO 辅助文件

当前公开静态文件：

- `public/robots.txt`：允许抓取当前官网，并声明 `https://radishx.com/sitemap.xml`。
- `public/sitemap.xml`：只列出当前官网站内页面：`/`、十三个产品介绍页、`/mascot` 和 `/about`。
- `public/images/social/radishx-og-image.png`：1200x630 Open Graph / Twitter 分享预览图，metadata 中使用 `https://radishx.com/images/social/radishx-og-image.png`。

项目独立子域名不写入当前官网 sitemap，等对应项目独立部署后由各自站点维护。

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

## 2026-11-01 迁入组织评估（未执行）

建议目标为 `RadishIntelligence/RadishX`，继续使用 RadishX 官网名、`radishx.com` 主域与现有 Vercel 项目。GitHub 仓库所有者、仓库名、Vercel 项目归属和域名是分别管理的对象；移动 GitHub 仓库不要求同时重命名或另建 Vercel 项目。展示品牌统一为「萝卜智能 · Radish Intelligence」，不把暂定公司全名当作已成立公司。

命名选择：

| 名称 | 建议 |
| --- | --- |
| `RadishIntelligence/RadishX` | 首选；保留既有识别度与历史链接，只变更所有者 |
| `RadishIntelligence/website` | 职责直观，但本轮没有改名收益，不建议与迁移叠加 |
| `RadishIntelligence/radishintelligence.github.io` | 只有确实采用组织 GitHub Pages 用户站点时才有命名意义；目前使用 Vercel，无需这样命名 |
| 组织展示仓库 `.github` | 保持 `.github` 和 `profile/README.md`；本地目录名不影响展示 |

GitHub API 只读核验：`laugh0608/RadishX` 当前公开、默认分支为 `master`；组织展示仓库为公开的 `RadishIntelligence/.github`。本地没有 `.vercel/project.json`，本轮未读取 Vercel 控制台，当前套餐、项目 ID / 归属、Git App 权限和生产分支仍待核验，不能承诺迁移后自动部署无需调整。

Vercel 官方说明存在口径差异：[Git 部署说明](https://vercel.com/docs/git#using-hobby-teams)明确禁止 Hobby 部署组织私有仓库，并提出公开仓库或 Pro 的选择；[Limits](https://vercel.com/docs/limits#connecting-a-project-to-a-git-repository)仍笼统写 Hobby 不支持组织仓库。因而对本仓库的公开组织连接资格，应以实际账户控制台或 Vercel 支持确认为准，不能直接保证 Hobby 可用。[Hobby 说明](https://vercel.com/docs/plans/hobby)限定个人非商业用途；若官网用于公司业务或需要多人管理部署，优先评估 Pro。此处没有购买、升级套餐或改变部署方式。

建议迁移步骤（须另行授权后执行）：

1. 在现有 Vercel 项目记录 ID、团队 / 套餐、Git 连接、生产分支、Build `npm run build`、Output `dist`、Node 版本、环境变量作用域、域名和现网部署提交；敏感值不写入仓库。先确认组织仓库连接资格，以及 Vercel GitHub App 对目标仓库的访问权限。
2. 核对 GitHub 转移权限、目标无同名仓库、Rulesets / 权限 / Actions 设置；将仓库转移到 `RadishIntelligence`，保留 `RadishX` 名称和公开可见性。转移后复核权限和保护规则，不假设原设置自动满足组织要求。
3. 在**原 Vercel 项目**检查 Git 连接；若未跟随转移，在 Settings → Git 重新连接 `RadishIntelligence/RadishX`，复核生产分支及分支相关配置。官方支持在原项目更换 Git 仓库，见 [GitHub 集成说明](https://vercel.com/docs/git/vercel-for-github#changing-the-github-repository-of-a-project)。保留已有项目和域名，不同时迁移 Vercel 团队或更改 DNS。
4. 更新本地 origin、三个其他展示仓库和官网中的源码链接；历史日期证据保留。不要在 `laugh0608/RadishX` 旧位置新建仓库，以免破坏 GitHub 自动重定向。
5. 对明确提交做预览部署，检查首页、`/forge`、About、静态图片、未知路径和移动端；再按批准范围生产发布，核对实际部署 SHA、canonical 及 `www` 保持路径的跳转。保留原生产部署作为失败时的回退目标。仓库转移或 Git 连接成功不等于部署验收成功。

GitHub 通常为转移后的仓库提供 Web / Git 重定向，但 GitHub Pages 不随之重定向；已有链接仍应更新，参见 [仓库转移说明](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)。个人 profile `laugh0608/laugh0608` 和个人 Pages 镜像 `laugh0608/laugh0608.github.io` 保留个人归属，不纳入本次组织迁移建议。

## 不在当前阶段做

- 不为项目独立域名配置 Vercel 重写。
- 不把家族产品部署到当前官网 Vercel 项目中。
- 不为官网引入后端服务。
- 不在未上线项目前暴露不可用的跳转按钮。
