# 素材治理

本文记录 RadishX 官网素材归档和使用规则。

## 素材目录

- `assets/avatars/`：虚拟形象候选素材。
- `assets/social/`：社交媒体素材。

虚拟形象“萝小白”素材已按用途整理：

- `origin/`：原始形象。
- `child/`：可爱Q版安全候选素材。
- `mature/`：虚拟形象完全体。
- `seasonal/`：节日和运营素材。

社交媒体素材：

- `assets/social/wechat-official-account-qr.png`：微信公众号“大白萝卜的坑”二维码。
- `public/images/social/radishx-og-image.png`：RadishX 官网 1200x630 分享预览图，基于已确认完全体设定图和官网视觉 token 生成。

项目详情页素材：

- `public/images/projects/radish/`：Radish 详情页已审核 Web 图。
- `public/images/projects/catalyst/`：RadishCatalyst 详情页已审核 Web 图。
- `public/images/projects/flow/`：RadishFlow 详情页已审核 Web 图。
- RadishMind 当前没有可进入 `public/images/projects/` 的项目自有公开视觉素材。

## 使用审核

以下情况必须先确认具体素材：

- 首页首屏主视觉。
- 四个项目详情页主图。
- Mascot 页首屏主图。
- 任何对外发布或可下载的图片。
- 对原图进行裁切、压缩、抠图、重采样或格式转换。

## 可爱Q版安全口径

可爱Q版素材必须完整外装、非性感化、无内衣展示、无身体拆解、无泳装或睡衣语义。

当前可爱Q版官网优先候选：

- `assets/avatars/child/radish-child-safe-design-sheet-v1.png`

不再推荐用于官网公开页面：

- `assets/avatars/child/radish-child-design-sheet.png`

## 使用建议

- 长期主视觉优先使用可爱Q版和虚拟形象完全体的设定图或站姿图。
- `seasonal/` 只用于节日活动、运营 Banner 或彩蛋。
- 表情包素材适合用于 Mascot 页 Gallery，不适合做首页首屏。
- 公众号二维码适合放在 About 页，不建议放在首页首屏。

## 首批素材审核清单

当前审核目标是确认哪些素材可以进入官网第一版实现。状态为“已确认”的条目可以生成 Web 版本进入 `public/images/` 并用于正式页面实现。

| 用途 | 候选素材 | 建议状态 | 说明 |
| --- | --- | --- | --- |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-safe-design-sheet-v1.png` | 已确认 | 可爱Q版安全设定图，适合用于 Mascot 页设定展示和首页辅助视觉。Web 版本：`public/images/mascot/radish-child-safe-design-sheet-v1-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress.png` | 待确认 | 可爱Q版站姿，适合轻量主视觉或形态卡片。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress-tall.png` | 待确认 | 可爱Q版站姿高分辨率版本，适合需要更完整裁切的区域。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-design-sheet.png` | 已确认 | 虚拟形象完全体设定图，适合 Mascot 页主视觉。Web 版本：`public/images/mascot/radish-mature-design-sheet-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-standing-white-dress.png` | 待确认 | 虚拟形象完全体站姿，适合首页视觉区域或形态卡片。 |
| Mascot 原始形象 | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 适合用作原始形象图标、小印章或形态起点。Web 版本：`public/images/mascot/radish-origin-icon-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-outfit-variants.png` | 已确认 | 适合服装变体展示，不建议做首页首屏。Web 版本：`public/images/mascot/radish-child-outfit-variants-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-expression-sheet-grid.png` | 待确认 | 适合表情 Gallery，后续如需精细展示可再拆分单张。 |
| Mascot Gallery | `assets/avatars/child/radish-child-sticker-sheet-wide-01.png` 至 `04.png` | 待确认 | 适合表情包横图 Gallery，不建议做长期主视觉。 |
| Mascot Gallery | `assets/avatars/mature/radish-mature-sticker-sheet-wide.png` | 已确认 | 适合虚拟形象完全体表情 Gallery。Web 版本：`public/images/mascot/radish-mature-sticker-sheet-wide-web.jpg`。 |
| 参考素材 | `assets/avatars/mature/radish-mature-cosplay-board.png` | 暂不建议正式使用 | 三次元风格参考图，和当前官网长期视觉口径不完全一致。 |
| 活动 / 彩蛋 | `assets/avatars/seasonal/*` | 暂不进入第一版长期页面 | 只建议用于节日活动 Banner、彩蛋或运营内容。 |
| 站点图标 / Logo | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 已转换为 `public/favicon.ico`，第一版可作为站点图标和项目详情页临时 Logo。 |
| About 二维码 | `assets/social/wechat-official-account-qr.png` | 已确认 | 适合 About 页联系方式区域，不放首页首屏。Web 版本：`public/images/social/wechat-official-account-qr-web.png`。 |
| 社交分享图 | `public/images/social/radishx-og-image.png` | 已确认 | 1200x630 PNG，用于 Open Graph 与 Twitter `summary_large_image`。 |

## 项目详情页素材审核

审核日期：2026-06-14。审核范围只读检查四个兄弟项目仓库中的 Logo、截图、视频和代表性视觉素材，不读取或修改 `.pen` 文件，不迁入兄弟项目代码。

| 项目 | 候选素材 | 推荐用途 | 风险与限制 | 结论 |
| --- | --- | --- | --- | --- |
| Radish | `/Users/luobo/Code/Radish/Docs/images/RadishAcg-1024.png` | 详情页主媒体区项目代表图。 | README 已使用该图作为“萝卜娘”视觉，适合代表 Radish 气质；未发现可直接公开的当前产品截图或视频。`DataBases/TestOutput`、测试上传文件、第三方 UI 参考图和默认商品图不进入官网。 | 已生成 `public/images/projects/radish/radish-acg-web.jpg` 并接入 `/radish`。 |
| RadishCatalyst | `/Users/luobo/Code/RadishCatalyst/assets/concept-art/2026-04-25-visual-direction-rpg-exploration.png` | 详情页主媒体区概念视觉。 | 属于项目源资产目录的概念图，只能标注为 `Concept visual`；不作为实机截图、试玩状态或上线承诺。`client/icon.svg` 是 Godot 默认图标，不作为项目 Logo。 | 已生成 `public/images/projects/catalyst/radishcatalyst-rpg-exploration-concept-web.jpg` 并接入 `/catalyst`。 |
| RadishFlow | `/Users/luobo/Code/RadishFlow/docs/architecture/assets/studio-ui/baseline/radishflow-workbench-concept.png` | 详情页主媒体区 UI baseline。 | 兄弟仓库 README 已声明 2026-06-12 起停止公开维护，因此只能作为历史 UI 方向展示，不代表继续公开迭代、产品化、下载或交付承诺。`adapters/reference/`、Aspen/HYSYS/DWSIM/COFE 等参考截图均不进入官网。 | 已生成 `public/images/projects/flow/radishflow-workbench-concept-web.jpg`，接入 `/flow`，并将页面状态收敛为 `Archived`。 |
| RadishMind | 无项目自有 Logo、截图、视频或代表性公开视觉。 | 暂不接入正式图。 | 当前发现的 `docs/assets/ui-design-reference/` 均为 AFFINE、CodexApp、1Panel、GitHub、Cloudflare、Discourse 等外部产品参考截图，只能用于内部灵感，不可作为官网项目图。 | 保留图形化候选媒体框；后续需要补 RadishMind 自有 Logo、Console 截图或协议/评测可视化图。 |

当前缺口：

- 首页首屏继续以 Radish Orbit 项目星图为主，已确认可爱Q版安全设定图作为首页 Mascot 辅助视觉。
- Radish、RadishCatalyst、RadishFlow 详情页已接入审核后的代表性图片；这些图片不提供下载入口，也不声明可自由复用。
- RadishMind 详情页仍使用图形化候选媒体框，等待项目自有 Logo、截图或代表性可视化素材。
- 四个项目都未发现可直接公开的视频素材；后续如需接入视频，必须单独审核来源、字幕/水印、压缩方案和移动端加载策略。
- 四个项目仍缺独立稳定 Logo；后续如果项目有独立 Logo，再按项目替换当前 favicon / 视觉图口径。
- Mascot 页首批主图、Gallery 图片和微信公众号二维码已生成 Web 版本并进入 `public/images/`；后续新增素材仍需继续审核，且不要覆盖原始素材。
- 分享预览图已使用完全体设定图生成第一版，后续如果首页首屏主视觉确认，可再替换为更贴近首屏的版本。

## 文件命名

- 使用英文语义化文件名。
- 图片文件名小写，使用短横线分隔。
- 不再使用原始哈希名作为长期文件名。
- 若同一素材生成 Web 优化版本，使用后缀区分，例如 `-web`、`-thumb`、`-mobile`。

## 版权口径

当前仓库采用 source-available 口径，详见仓库根目录 `LICENSE`。

该许可证适用于本仓库原创代码、文档、项目介绍内容和原创视觉素材。第三方组件、依赖、字体、图标或外部素材仍遵循其各自许可证。

默认约束：

- 不提供素材下载入口。
- 不声明素材可自由复用。
- 不把素材上传到第三方素材库。
- 不引入来源不明的外部图片。
