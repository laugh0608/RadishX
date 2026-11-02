# Vercel 与域名说明

本文记录 RadishX 官网部署边界和域名策略。

## 当前官网部署

本 Vercel 项目仅承载 RadishX 官网。Radish 与 RadishInk 是已确认的独立产品 Web 入口；2026-11-02 所有者新增确认 RadishUI 设计系统展示站。独立子域不属于本官网的路由或重写规则，未部署产品继续不登记暂定域名。

- GitHub 仓库：`https://github.com/laugh0608/RadishX`
- Vercel 项目：2026-11-02 控制台显示 [DaBaiLuoBo / radish-x](https://vercel.com/dabailuobo/radish-x)，Hobby；此前 scope 为 `laugh0608's projects`、项目为 `radishx`，历史核查保留原名称。官网主域的端到端访问仍未在本批重新验收
- Canonical 主域名：`radishx.com`
- 兼容访问入口：`https://www.radishx.com/`，跳转到 `https://radishx.com/`
- 站点内容：首页、十三个产品介绍页、Mascot、About

## 项目独立域名

已部署的 Web 入口（2026-10-06 所有者确认）：

- `hub.radishx.com`：Radish
- `ink.radishx.com`：RadishInk，主要以 Web 方式提供服务

独立共享基础设施入口（2026-11-02 所有者确认）：

- `ui.radishx.com`：RadishUI，共享设计系统的工程预览；源码为 `RadishIntelligence/RadishUI`，Vercel 项目为 [DaBaiLuoBo / radish-ui](https://vercel.com/dabailuobo/radish-ui)。

官网登记上述两个产品入口和 RadishUI 展示站。RadishUI 作为共享基础设施进入 About 与页脚，不计为独立产品，不增加官网路由或 rewrite。其他未部署项目只保留 GitHub 与文档入口。

2026-11-02 真实 Chrome 访问 `ui.radishx.com` 已显示 RadishUI 页面；本机命令行请求返回 Cloudflare 403，默认 `radishui.vercel.app` 请求为 200。此处区分浏览器结果与自动请求限制，不宣称已完成所有网络环境验收。

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

**最终决定：2026-11-01 所有者确认不迁移。** GitHub 保留 `laugh0608/RadishX`，Vercel 保留 `laugh0608's projects` 下的 `radishx`，现有 Git 连接、域名和 DNS 继续沿用。迁移事项关闭，不再作为待办；下方保留当时的评估与核查事实，仅供历史参考，不代表执行计划或授权。

评估时的候选目标为 `RadishIntelligence/RadishX`，继续使用 RadishX 官网名、`radishx.com` 主域与现有 Vercel 项目。GitHub 仓库所有者、仓库名、Vercel 项目归属和域名是分别管理的对象；移动 GitHub 仓库不要求同时重命名或另建 Vercel 项目。展示品牌统一为「萝卜智能 · Radish Intelligence」，不把暂定公司全名当作已成立公司。

命名选择：

| 名称 | 建议 |
| --- | --- |
| `RadishIntelligence/RadishX` | 首选；保留既有识别度与历史链接，只变更所有者 |
| `RadishIntelligence/website` | 职责直观，但本轮没有改名收益，不建议与迁移叠加 |
| `RadishIntelligence/radishintelligence.github.io` | 只有确实采用组织 GitHub Pages 用户站点时才有命名意义；目前使用 Vercel，无需这样命名 |
| 组织展示仓库 `.github` | 保持 `.github` 和 `profile/README.md`；本地目录名不影响展示 |

GitHub API 只读核验：`laugh0608/RadishX` 当前公开、默认分支为 `master`，未启用 GitHub Pages；当前用户拥有仓库 admin 权限及目标组织 admin 身份，目标组织没有同名仓库。组织展示仓库为公开的 `RadishIntelligence/.github`。组织 installations 接口返回 0，尚未安装 Vercel GitHub App；迁移前需完成目标组织的 App 授权及目标仓库访问配置。本地没有 `.vercel/project.json`。

### 控制台核查快照

2026-11-01 按所有者要求只读检查实际 Vercel 控制台：

| 项目 | 核查结果 |
| --- | --- |
| 归属 / 套餐 | `laugh0608's projects` / Hobby |
| 项目名 / ID | `radishx` / `prj_RpGTaPN1vt9kKQ5R1yE3fpDHwvN7` |
| Git 连接 / 生产分支 | `laugh0608/RadishX` / `master`；自动分配生产域名开启 |
| 当前生产部署 | 控制台显示提交 `9a0fbee`、Ready；不等于域名端到端验收通过 |
| 构建 | Framework 为 Vite；Build / Output / Install 未启用 override，Output 默认 `dist`；Root Directory 为空；Node.js `24.x` |
| 环境变量 / Hook | Production 的 Project 变量列表为空；Shared 与其他环境未完整核验；没有 Deploy Hooks |
| 生产域名 | `radishx.com`、`radishx.vercel.app` |
| 兼容跳转 | `www.radishx.com`、`radish.icu`、`www.radish.icu` 均显示 307 → `radishx.com` |
| 域名提示 | 四个自定义域名显示 Proxy Detected；`radishx.vercel.app` 为 Valid Configuration |

从本机对主域、`/forge` 和带路径 / 查询参数的 `www` 地址执行 HEAD 探测均返回 Cloudflare 403；本轮无法验证实际路径保留、页面访问或代理源站链路，不能据此断言所有访客都无法访问。迁移验收前应取得可用的现网基线，避免将已有访问问题误归因于迁移。

### 套餐与归属选择

Vercel 官方说明存在口径差异：[Git 部署说明](https://vercel.com/docs/git#using-hobby-teams)明确禁止 Hobby 部署组织私有仓库，并提出公开仓库或 Pro 的选择；[Limits](https://vercel.com/docs/limits#connecting-a-project-to-a-git-repository)仍笼统写 Hobby 不支持组织仓库。因而对本仓库的公开组织连接资格，应以实际账户控制台或 Vercel 支持确认为准，不能直接保证 Hobby 可用。[Hobby 说明](https://vercel.com/docs/plans/hobby)限定个人非商业用途；若官网用于公司业务或需要多人管理部署，优先评估 Pro。此处没有购买、升级套餐或改变部署方式。

- 单人维护、个人非商业展示：优先评估只迁 GitHub 仓库、保留现有 Vercel 项目及归属。必须先解决公开组织仓库的连接资格，不能先断开现有 Git 再试。
- 商业用途或团队管理：采用 Pro。若不要求个人与组织资源隔离，可升级现有 scope；若要求组织独立计费、权限和资产管理，建立组织 Vercel 团队并转移现有项目。GitHub 组织与 Vercel 团队是两个独立对象。
- [Pro 当前价格](https://vercel.com/docs/plans/pro-plan)：平台费 $20/月，含一个部署席位及 $20 使用额度；额外部署席位 $20/人/月，用量和附加服务可能另计。新团队、付费与套餐变更均未执行。

### 如需跨 Vercel 团队转移

使用原项目的 Transfer 流程，保留项目名，避免重新建站及人工搬域名。官方说明转移可在不中断访问的情况下完成，通常为 10 秒至 10 分钟；转移期间不能创建部署或修改项目设置。需具备来源团队 owner 与目标团队 member 权限，并预先确认目标套餐和支付条件。部署、项目配置、Git 连接及域名会随转移处理；集成、部分日志和监控数据不随迁移，不能假设全部资产原样保留。以实际转移预览清单为准，见 [项目转移说明](https://vercel.com/docs/projects/transferring-projects)。

域名核对必须覆盖上述主域、三个兼容跳转和默认域名；Vercel 中的域名归属转移不等于域名注册商或 Cloudflare 账户迁移。主域与子域的委派规则不同，迁移前检查 `hub.radishx.com`、`ink.radishx.com` 等独立服务是否存在关联，保持其 DNS 和服务配置。当前没有核验 Cloudflare 账户、DNS 记录、Shared 变量、其他集成和目标 Vercel 团队，因此本轮尚不构成完整的转移执行清单。

若决定同时迁 GitHub 和 Vercel，建议先准备目标团队、套餐和 App 权限，记录部署与域名基线；先转移原 Vercel 项目并验证，再转 GitHub 仓库并核对 Git 连接。两个阶段分别验收。若仅迁 GitHub，沿用下面步骤。失败时优先保留现有生产部署并恢复自动部署连接；生产版本回退不能替代仓库归属、团队权限或域名问题的修复。

### GitHub 迁移执行顺序

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
