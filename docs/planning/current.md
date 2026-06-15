# 当前规划

最后更新：2026-06-15

## 当前阶段

RadishX 当前处于 React 官网首版实现后的页面完善与公开素材治理阶段。

当前站点已具备：

- Vite + React + TypeScript 静态官网骨架。
- `/`、四个项目详情页、`/mascot`、`/about` 和 404 页面。
- `radishx.com` canonical 域名、`www.radishx.com` 兼容跳转、Vercel History API fallback。
- 基础 metadata、Open Graph / Twitter Card、`sitemap.xml` 和 `robots.txt`。
- 首批已审核 Mascot / About 素材和项目详情页代表视觉。
- 首页首屏已在 Radish Orbit 项目星图中接入已审核可爱Q版站姿图作为中心视觉锚点。
- 桌面与 390px 移动端的多轮响应式、可访问性和生产质量检查记录。

下一阶段不再把所有后续事项堆在本文件中推进，而是按页面、功能或开发目标拆分为独立设计与开发文档。

## 执行口径

- `docs/planning/current.md` 只记录当前阶段、活跃目标、执行顺序和跨目标风险。
- 具体页面、功能或素材治理工作写入 `docs/features/*.md`。
- `docs/devlogs/` 记录已经完成的结果、关键决策、验证和遗留风险，不承载展开式任务清单。
- 开始开发一个新目标前，先阅读或补齐对应 `docs/features/*.md`，再进入设计稿、代码或素材实现。
- 如果目标涉及重大页面结构、视觉方向、素材版权、域名或部署边界，同时同步 `README.md`、`AGENTS.md`、`CLAUDE.md` 和相关 `docs/` 入口。

## 目标文档索引

| 目标 | 文档 | 当前状态 |
| --- | --- | --- |
| 首页首屏与主视觉 | [home-hero-visual.md](../features/home-hero-visual.md) | 站姿中心视觉锚点已接入，OG 已评估暂不替换 |
| 四个项目详情页 | [project-detail-pages.md](../features/project-detail-pages.md) | 首版已实现，已补代码内临时项目标识 |
| Mascot 虚拟形象页 | [mascot-page.md](../features/mascot-page.md) | 站姿图已接入，后续补表情拆分和下载口径 |
| About 联系区 | [about-contact-surface.md](../features/about-contact-surface.md) | 首轮精细化已完成 |
| 素材治理 | [asset-governance.md](../features/asset-governance.md) | 持续执行 |
| 视觉 QA 与发布检查 | [visual-qa-and-release.md](../features/visual-qa-and-release.md) | 持续执行，线上截图级 smoke 待补 |

## 当前活跃目标

当前已完成：

1. `/about` 页面联系方式、微信公众号二维码、GitHub 仓库入口和域名边界已完成首轮精细化。
2. PC 与 390px 移动端已检查，长邮箱、链接、二维码说明、按钮、仓库卡片和域名卡片未发现横向溢出。
3. 四个项目详情页已补公开文档入口，链接对应仓库 `dev` 分支中的 README / docs / wiki / status / contracts 等稳定入口，并保留 RadishFlow archived 口径。
4. 首页首屏已把已审核可爱Q版站姿图接入 Radish Orbit 中心视觉锚点，四个项目节点和素材状态槽在桌面与 390px 移动端已复查，无横向溢出或节点相交。
5. Open Graph 分享预览图已完成本地评估，现有 `1200x630` 横图继续保留，本轮不生成新候选图。
6. RadishMind 详情页已补强代码内 `Evaluation loop` 自有视觉，继续不接入外部参考截图或未审核图片。
7. 四个项目已补代码内临时标识，覆盖首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片；这些标识不是正式 Logo。
8. 目标文档、本文件和本周开发日志已同步记录。

下一步建议推进：

1. 根据素材治理文档继续评估独立 Logo、真实截图和公开视频素材；没有确认素材前不接入正式页面。
2. 继续评估 Mascot 表情拆分、节日图和下载口径；没有确认边界前不提供下载入口。
3. 本地开发阶段继续以本地真实 smoke 为准；暂不推送、部署或补跑线上 smoke。

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

- 四个项目后续是否补独立稳定 Logo，用于替换当前代码内临时标识。
- 四个项目详情页后续是否需要真实截图或视频素材。
- RadishMind 后续是否补项目自有 Logo、Console 截图或真实图片素材，用于替换当前代码内评测回路图。
- “萝小白”后续表情拆分、活动图和下载口径。
- 项目详情模板、Mascot 页和 About 页是否在 React 实现前补独立移动版设计稿。

## 后续顺序

1. 根据素材治理文档继续评估独立 Logo、真实截图和公开视频素材。
2. 继续评估 Mascot 表情拆分、节日图和下载口径；确认前不提供下载入口。
3. 后续只有首页视觉再次明显变化或社交预览目标变化时，再评估 Open Graph 分享预览图。
