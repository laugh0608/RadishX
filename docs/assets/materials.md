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
- RadishMind 当前没有可进入 `public/images/projects/` 的项目自有公开图片素材，详情页使用代码内生成的 `Evaluation loop` 协议 / 评测视觉。
- 四个项目当前没有独立稳定 Logo；官网使用代码内文字 / CSS 临时项目标识，不进入 `public/images/`，不声明为正式 Logo。

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
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-safe-design-sheet-v1.png` | 已确认 | 可爱Q版安全设定图，适合用于 Mascot 页设定展示和可爱Q版审核口径说明。Web 版本：`public/images/mascot/radish-child-safe-design-sheet-v1-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress.png` | 已确认 | 可爱Q版站姿，适合轻量主视觉或形态卡片。Web 版本：`public/images/mascot/radish-child-standing-white-dress-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress-tall.png` | 已确认 | 可爱Q版站姿高分辨率版本，已用于首页首屏中心视觉锚点和首页 Mascot 入口。Web 版本：`public/images/mascot/radish-child-standing-white-dress-tall-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-design-sheet.png` | 已确认 | 虚拟形象完全体设定图，适合品牌设定展示和 Open Graph 首版分享预览来源。Web 版本：`public/images/mascot/radish-mature-design-sheet-web.jpg`。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-standing-white-dress.png` | 已确认 | 虚拟形象完全体站姿，已用于 Mascot 页主视觉和完全体形态卡片。Web 版本：`public/images/mascot/radish-mature-standing-white-dress-web.jpg`。 |
| Mascot 原始形象 | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 适合用作原始形象图标、小印章或形态起点。Web 版本：`public/images/mascot/radish-origin-icon-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-outfit-variants.png` | 已确认 | 适合服装变体展示，不建议做首页首屏。Web 版本：`public/images/mascot/radish-child-outfit-variants-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-expression-sheet-grid.png` | 已确认 | 适合表情 Gallery，当前只作为整图预览接入，不拆分单张，不提供下载入口。Web 版本：`public/images/mascot/radish-child-expression-sheet-grid-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-sticker-sheet-wide-01.png` 至 `04.png` | 已确认 | 适合表情包横图 Gallery，当前只作为整图预览接入，不拆分单张，不提供下载入口。Web 版本：`public/images/mascot/radish-child-sticker-sheet-wide-01-web.jpg` 至 `04-web.jpg`。 |
| Mascot Gallery | `assets/avatars/mature/radish-mature-sticker-sheet-wide.png` | 已确认 | 适合虚拟形象完全体表情 Gallery。Web 版本：`public/images/mascot/radish-mature-sticker-sheet-wide-web.jpg`。 |
| 参考素材 | `assets/avatars/mature/radish-mature-cosplay-board.png` | 暂不建议正式使用 | 三次元风格参考图，和当前官网长期视觉口径不完全一致。 |
| 活动 / 彩蛋 | `assets/avatars/seasonal/*` | 暂不进入第一版长期页面 | 只建议用于节日活动 Banner、彩蛋或运营内容。 |
| 站点图标 / Logo | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 已转换为 `public/favicon.ico`，第一版只作为站点图标和 RadishX 小尺寸识别，不作为四个项目的临时 Logo。 |
| About 二维码 | `assets/social/wechat-official-account-qr.png` | 已确认 | 适合 About 页联系方式区域，不放首页首屏。Web 版本：`public/images/social/wechat-official-account-qr-web.png`。 |
| 社交分享图 | `public/images/social/radishx-og-image.png` | 已确认 | 1200x630 PNG，用于 Open Graph 与 Twitter `summary_large_image`。 |

## 项目详情页素材审核

审核日期：2026-06-14。审核范围只读检查四个兄弟项目仓库中的 Logo、截图、视频和代表性视觉素材，不读取或修改 `.pen` 文件，不迁入兄弟项目代码。

2026-06-15 二轮复核：只读检查四个兄弟项目仓库中已存在和未提交的图片、图标、视频候选；兄弟项目当前虽有开发中文档 / 代码改动，但未发现新增或修改的媒体文件。未发现 `.mp4`、`.mov`、`.webm`、`.m4v` 或 `.avi` 视频素材，因此本轮不接入新视频、不生成新 Web 图片，也不替换当前代码内临时项目标识。

项目详情页当前已在主媒体区展示 `Asset source`、`Usage boundary` 和 `Next material need` 三项说明，用于区分代表图、概念视觉、历史 UI baseline 和代码内协议图的公开边界。

| 项目 | 候选素材 | 推荐用途 | 风险与限制 | 结论 |
| --- | --- | --- | --- | --- |
| Radish | `/Users/luobo/Code/Radish/Docs/images/RadishAcg-1024.png` | 详情页主媒体区项目代表图。 | README 已使用该图作为“萝卜娘”视觉，适合代表 Radish 气质；未发现可直接公开的当前产品截图或视频。`DataBases/TestOutput`、测试上传文件、第三方 UI 参考图和默认商品图不进入官网。 | 已生成 `public/images/projects/radish/radish-acg-web.jpg` 并接入 `/radish`。 |
| RadishCatalyst | `/Users/luobo/Code/RadishCatalyst/assets/concept-art/2026-04-25-visual-direction-rpg-exploration.png` | 详情页主媒体区概念视觉。 | 属于项目源资产目录的概念图，只能标注为 `Concept visual`；不作为实机截图、试玩状态或上线承诺。`client/icon.svg` 是 Godot 默认图标，不作为项目 Logo。 | 已生成 `public/images/projects/catalyst/radishcatalyst-rpg-exploration-concept-web.jpg` 并接入 `/catalyst`。 |
| RadishFlow | `/Users/luobo/Code/RadishFlow/docs/architecture/assets/studio-ui/baseline/radishflow-workbench-concept.png` | 详情页主媒体区 UI baseline。 | 兄弟仓库 README 已声明 2026-06-12 起停止公开维护，因此只能作为历史 UI 方向展示，不代表继续公开迭代、产品化、下载或交付承诺。`adapters/reference/`、Aspen/HYSYS/DWSIM/COFE 等参考截图均不进入官网。 | 已生成 `public/images/projects/flow/radishflow-workbench-concept-web.jpg`，接入 `/flow`，并将页面状态收敛为 `Archived`。 |
| RadishMind | 无项目自有 Logo、截图、视频或代表性公开图片素材。 | 暂不接入 `public/images` 图片；详情页使用代码内生成的 `Evaluation loop` 协议 / 评测视觉。 | 当前发现的 `docs/assets/ui-design-reference/` 均为 AFFINE、CodexApp、1Panel、GitHub、Cloudflare、Discourse 等外部产品参考截图，只能用于内部灵感，不可作为官网项目图。代码内视觉只表达公开定位，不声明已有正式产品 UI。 | 已补强代码内 `Evaluation loop`，后续若补自有 Logo、Console 截图或真实可视化图，再按图片素材重新审核。 |

二轮复核结论：

- Radish：`README.md` 仍使用 `Docs/images/RadishAcg-256.png` 作为“萝卜娘”公开代表图；`Clients/radish-tauri/icons/icon.png`、`DataBases/Uploads/DefaultIco/bailuobo.ico` 和默认头像属于客户端 / 运行时默认资源或既有代表形象，不是四项目独立稳定 Logo；未发现可公开为当前产品截图的视频或页面截图素材。
- RadishCatalyst：`client/icon.svg` 为 Godot 默认图标，不作为项目 Logo；`assets/concept-art/` 下新增可见候选仍属于概念图、HUD 参考或生产基地参考，不作为实机截图、试玩状态或 trailer。
- RadishFlow：README 已明确 2026-06-12 起停止公开维护；`radishflow-current-workbench-20260516.png` 和相关 workbench / dashboard 图片只能作为历史 UI 或内部参考，不上调为当前产品截图，也不新增推广素材。
- RadishMind：`docs/assets/ui-design-reference/` 仍是外部产品参考截图；`radishmind-ui-design-spec.md` 明确当前产品 UI 是本地 / 只读边界，不声明正式 production console 已完成，因此不接入外部参考图或当前开发截图作为官网正式项目图。

当前缺口：

- 首页首屏继续以 Radish Orbit 项目星图为主，已确认可爱Q版站姿高分辨率版本作为首页中心视觉锚点和 Mascot 辅助视觉；本轮不替换 Open Graph 分享预览图。
- Radish、RadishCatalyst、RadishFlow 详情页已接入审核后的代表性图片；这些图片不提供下载入口，也不声明可自由复用。
- RadishMind 详情页已使用代码内 `Evaluation loop` 替代通用占位；仍等待项目自有 Logo、截图或代表性图片素材。
- 四个项目都未发现可直接公开的视频素材；后续如需接入视频，必须单独审核来源、字幕/水印、压缩方案和移动端加载策略。
- 四个项目仍缺独立稳定 Logo；后续如果项目有独立 Logo，再按项目替换当前代码内临时项目标识。
- 当前首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片已使用代码内临时项目标识；这些标识只用于官网信息识别，不作为项目正式 Logo 或素材下载内容。
- Mascot 页首批主图、站姿图和 Gallery 图片已生成 Web 版本并进入 `public/images/`；页面三形态区已展示当前用途、审核状态、使用边界和后续素材需求。后续新增素材仍需继续审核，且不要覆盖原始素材。
- 可爱Q版表情格和 4 张贴纸横图已进入 Mascot Gallery 整图预览；当前不拆分单张贴纸、不提供下载入口、不声明可自由复用。
- `seasonal/` 下节日图继续只作为活动 Banner、彩蛋或运营内容候选，不进入长期 Gallery 或默认主视觉；使用前需单独确认具体活动窗口、页面位置和文案。
- 分享预览图已使用完全体设定图生成第一版；2026-06-15 本地评估结论为暂不替换，因为当前图包含 RadishX 标题、项目矩阵信息和横向 Mascot 视觉，更适合作为 `1200x630` 社交预览。

## Mascot 表情拆分与下载评估

评估日期：2026-06-15。

当前结论：

- 可爱Q版表情格和 4 张贴纸横图继续只作为 Mascot Gallery 整图预览，不拆分单张贴纸。
- 单张拆分会形成可独立传播的衍生素材，必须先确认授权范围、使用场景、撤回策略和文件包边界。
- 当前横图版式、边距、文字标注和网格密度不完全一致，不做无审核批量裁切。
- 缩略图仅在未来单张展示或文件包真实需要时生成，不提前为整图 Gallery 生成。
- 下载入口继续关闭，不提供 ZIP、单图下载、素材 API 或“自由使用”声明。

未来如启动单张拆分，先建清单再生成文件。清单至少记录 `id`、`source_sheet`、`source_cell`、`label`、`emotion`、`public_status`、`web_path`、`thumb_path` 和 `usage_boundary`。命名使用稳定英文 slug，例如 `radish-child-expression-<slug>-web.jpg`、`radish-child-sticker-wide-<sheet>-<nn>-<slug>-web.jpg` 和对应 `-thumb` 版本。

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
