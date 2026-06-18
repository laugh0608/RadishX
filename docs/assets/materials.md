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
| Mascot Gallery | `assets/avatars/child/radish-child-expression-sheet-grid.png` | 已确认 | 适合表情 Gallery，整图预览继续保留来源与审核边界。Web 版本：`public/images/mascot/radish-child-expression-sheet-grid-web.jpg`。 |
| Mascot 单张表情候选 | `assets/avatars/child/radish-child-expression-sheet-grid.png` | 已确认 | 首批 10 张基础表情已按原图整格 `256x256` 生成 Web 展示图，只用于 `/mascot` 官网内部候选预览，不提供下载入口。Web 版本：`public/images/mascot/expressions/radish-child-expression-*-web.jpg`。 |
| Mascot Gallery | `assets/avatars/child/radish-child-sticker-sheet-wide-01.png` 至 `04.png` | 已确认 | 适合表情包横图 Gallery，当前只作为整图预览接入，不拆分单张，不提供下载入口。Web 版本：`public/images/mascot/radish-child-sticker-sheet-wide-01-web.jpg` 至 `04-web.jpg`。 |
| Mascot Gallery | `assets/avatars/mature/radish-mature-sticker-sheet-wide.png` | 已确认 | 适合虚拟形象完全体表情 Gallery。Web 版本：`public/images/mascot/radish-mature-sticker-sheet-wide-web.jpg`。 |
| 参考素材 | `assets/avatars/mature/radish-mature-cosplay-board.png` | 暂不建议正式使用 | 三次元风格参考图，和当前官网长期视觉口径不完全一致。 |
| 活动 / 彩蛋 | `assets/avatars/seasonal/*` | 暂不进入当前实现 | 已完成 6 张 seasonal 图评估；全部只作为短期活动 Banner、节日彩蛋或运营内容候选，不进入长期 Gallery、默认主视觉或 `public/images/`。 |
| 站点图标 / Logo | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 已转换为 `public/favicon.ico`，第一版只作为站点图标和 RadishX 小尺寸识别，不作为四个项目的临时 Logo。 |
| About 二维码 | `assets/social/wechat-official-account-qr.png` | 已确认 | 适合 About 页联系方式区域，不放首页首屏。Web 版本：`public/images/social/wechat-official-account-qr-web.png`。 |
| 社交分享图 | `public/images/social/radishx-og-image.png` | 已确认 | 1200x630 PNG，用于 Open Graph 与 Twitter `summary_large_image`。 |

## 项目详情页素材审核

审核日期：2026-06-14。审核范围只读检查四个兄弟项目仓库中的 Logo、截图、视频和代表性视觉素材，不读取或修改 `.pen` 文件，不迁入兄弟项目代码。

2026-06-15 二轮复核：只读检查四个兄弟项目仓库中已存在和未提交的图片、图标、视频候选；兄弟项目当前虽有开发中文档 / 代码改动，但未发现新增或修改的媒体文件。未发现 `.mp4`、`.mov`、`.webm`、`.m4v` 或 `.avi` 视频素材，因此本轮不接入新视频、不生成新 Web 图片，也不替换当前代码内临时项目标识。

项目详情页当前已在主媒体区展示 `Asset source`、`Usage boundary` 和 `Next material need` 三项说明，用于区分代表图、概念视觉、历史 UI baseline 和代码内协议图的公开边界。

2026-06-17 已新增四项目视觉素材准入准备文档：[project-visual-asset-readiness.md](../features/project-visual-asset-readiness.md)。后续独立 Logo、真实截图、视频、key visual、RadishMind 自有可视化图或其他项目视觉候选出现时，先按该文档补齐 `asset_type`、`source_path`、`public_status`、`usage_boundary`、`replacement_scope`、`web_output`、`fallback` 和 `license_note`，再判断是否生成 Web 版本进入 `public/images/projects/`。

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
- 四项目视觉素材准入清单已建立；当前没有新的正式候选来源时，不主动迁入兄弟项目素材，不替换代码内临时项目标识。
- 当前首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片已使用代码内临时项目标识；这些标识只用于官网信息识别，不作为项目正式 Logo 或素材下载内容。
- Mascot 页首批主图、站姿图和 Gallery 图片已生成 Web 版本并进入 `public/images/`；页面三形态区已展示当前用途、审核状态、使用边界和后续素材需求。后续新增素材仍需继续审核，且不要覆盖原始素材。
- 可爱Q版表情格和 4 张贴纸横图已进入 Mascot Gallery 整图预览；首批 10 张可爱Q版单张表情已生成 Web 展示图并进入 `/mascot` 候选预览区；不提供下载入口、不声明可自由复用。
- `seasonal/` 下 6 张节日图已完成评估；全部继续只作为活动 Banner、彩蛋或运营内容候选，不进入长期 Gallery、默认主视觉或当前实现；使用前需单独确认具体活动窗口、页面位置、文案和授权。
- 分享预览图已使用完全体设定图生成第一版；2026-06-15 本地评估结论为暂不替换，因为当前图包含 RadishX 标题、项目矩阵信息和横向 Mascot 视觉，更适合作为 `1200x630` 社交预览。

## Mascot 表情拆分与下载评估

评估日期：2026-06-15。准备清单更新：2026-06-17。人工框选复核准备：2026-06-18。首批 Web 文件生成与页面接入：2026-06-18。

当前结论：

- 可爱Q版表情格和 4 张贴纸横图继续作为 Mascot Gallery 整图预览；首批 10 张基础表情已额外生成单张 Web 展示图，用于 `/mascot` 官网内部候选预览。
- 单张展示文件会形成可独立传播的衍生素材，因此只按官网内部展示候选接入；下载、素材包、社交贴纸包、商用复用和外部分发仍未开放。
- 当前横图版式、边距、文字标注和网格密度不完全一致，不做无审核批量裁切。
- 缩略图仅在页面性能或网格浏览真实需要时生成；本轮不生成缩略图。
- 下载入口继续关闭，不提供 ZIP、单图下载、素材 API 或“自由使用”声明。

2026-06-17 已建立准备清单，但没有生成任何单张 Web 文件或缩略图。清单至少记录 `id`、`source_sheet`、`source_cell`、`label`、`emotion`、`slug`、`public_status`、`usage_scenario`、`usage_boundary`、`license_scope`、`withdrawal_policy`、`planned_web_path`、`planned_thumb_path`、`download_policy` 和 `review_note`。

首批候选只从 `assets/avatars/child/radish-child-expression-sheet-grid.png` 中选取，原因是该表情格边框、标签和主体比例较统一，适合后续人工逐格复核。`assets/avatars/child/radish-child-sticker-sheet-wide-01.png` 至 `04.png` 先列为二批复核来源，进入单张前需额外确认文字方向、边缘留白、社交语境和授权。

2026-06-18 已完成首批候选的人工框选复核准备：源图为 `1024x1536` PNG，按 4 列 6 行记录原图整格 `256x256` 计划裁切框，用于保留圆角边框、角色主体、表情符号和中文标签。

2026-06-18 在项目所有者允许后，使用上述整格框生成首批 10 张 `256x256` JPEG Web 展示图，路径为 `public/images/mascot/expressions/radish-child-expression-*-web.jpg`，并接入 `/mascot` 单张候选预览区。当前状态为 `internal-preview`：只代表官网内部展示候选，不提供下载、素材包、社交贴纸包、商用复用或外部分发授权。

| id | 来源格位 | 标签 | emotion | slug | 当前状态 | Web 路径 | 使用场景 | 审核备注 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `rx-expression-001` | `R1C1` | 开心 | `happy` | `happy` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-happy-web.jpg` | Mascot 页面基础情绪候选。 | 保留双手、表情符号和中文标签。 |
| `rx-expression-002` | `R1C2` | 生气 | `angry` | `angry` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-angry-web.jpg` | 状态反馈或轻量情绪说明候选。 | 保留头顶怒气符号和手臂姿态。 |
| `rx-expression-003` | `R1C3` | 震惊 | `surprised` | `surprised` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-surprised-web.jpg` | 异常、惊讶或提示类轻量插图候选。 | 保留双手、眼睛和惊叹符号。 |
| `rx-expression-004` | `R2C3` | 得意 | `proud` | `proud` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-proud-web.jpg` | 完成、亮点或正向反馈候选。 | 保留眨眼、手势和星形符号。 |
| `rx-expression-005` | `R2C4` | 期待 | `expectant` | `expectant` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-expectant-web.jpg` | 待办、预告或轻量引导候选。 | 不写成上线承诺。 |
| `rx-expression-006` | `R3C2` | 疑问 | `question` | `question` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-question-web.jpg` | FAQ、待确认事项或说明提示候选。 | 保留右上问号和手势。 |
| `rx-expression-007` | `R3C3` | 无语 | `speechless` | `speechless` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-speechless-web.jpg` | 轻量空状态或非阻断提示候选。 | 不用于嘲讽用户或错误归因。 |
| `rx-expression-008` | `R5C2` | OK | `ok` | `ok` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-ok-web.jpg` | 完成状态或确认反馈候选。 | 不作为独立授权图标。 |
| `rx-expression-009` | `R5C3` | 加油 | `cheer` | `cheer` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-cheer-web.jpg` | 项目进展或开发日志辅助视觉候选。 | 不用于商业承诺或进度承诺。 |
| `rx-expression-010` | `R6C4` | 再见 | `goodbye` | `goodbye` | `internal-preview` | `public/images/mascot/expressions/radish-child-expression-goodbye-web.jpg` | 页尾彩蛋、404 辅助或结束状态候选。 | 不作为可下载贴纸。 |

计划框选坐标使用原始 PNG 坐标：

| id | 计划裁切框 | 保留要素 | 复核结论 |
| --- | --- | --- | --- |
| `rx-expression-001` | `x=0,y=0,w=256,h=256` | 双手、黄色强调线、中文标签。 | 可进入授权确认；不建议收紧到只剩脸部。 |
| `rx-expression-002` | `x=256,y=0,w=256,h=256` | 怒气符号、两侧蒸汽、抱臂姿态、中文标签。 | 可进入授权确认；必须保留蒸汽符号。 |
| `rx-expression-003` | `x=512,y=0,w=256,h=256` | 左侧爆点、双手、张口表情、中文标签。 | 可进入授权确认；避免裁掉左侧符号。 |
| `rx-expression-004` | `x=512,y=256,w=256,h=256` | 星形符号、眨眼、手势、中文标签。 | 可进入授权确认；低风险优先候选。 |
| `rx-expression-005` | `x=768,y=256,w=256,h=256` | 两侧星形符号、合手姿态、中文标签。 | 可进入授权确认；不写成上线承诺。 |
| `rx-expression-006` | `x=256,y=512,w=256,h=256` | 右上问号、思考姿态、中文标签。 | 可进入授权确认；避免裁掉问号。 |
| `rx-expression-007` | `x=512,y=512,w=256,h=256` | 省略号、脸部表情、中文标签。 | 可进入授权确认；不用于嘲讽用户。 |
| `rx-expression-008` | `x=256,y=1024,w=256,h=256` | `OK` 字样、手势、眨眼表情、中文标签。 | 可进入授权确认；不作为独立授权图标。 |
| `rx-expression-009` | `x=512,y=1024,w=256,h=256` | 强调线、举拳姿态、中文标签。 | 可进入授权确认；不用于商业承诺或进度承诺。 |
| `rx-expression-010` | `x=768,y=1280,w=256,h=256` | 红色强调线、挥手、完整外装、中文标签。 | 可进入授权确认；适合页尾或 404 辅助候选。 |

命名规则：

- 表情格单张文件使用 `radish-child-expression-<slug>-web.jpg`。
- 表情格缩略图使用 `radish-child-expression-<slug>-thumb.jpg`。
- 贴纸横图如未来进入单张，使用 `radish-child-sticker-wide-<sheet>-<nn>-<slug>-web.jpg` 和对应 `-thumb` 版本。
- `<slug>` 只能来自审核清单；如语义冲突，先更新清单再生成文件。

授权、使用和撤回口径：

- 授权来源记录为 RadishX 仓库内原创候选素材，沿用仓库 `LICENSE` 的 source-available 口径；仓库公开展示不等于授予素材复用、改作、下载、商用或再分发权利。
- 当前授权边界只支持 RadishX 官网内部展示候选；对外二次使用、社交贴纸包、商用复用、下载和再分发均未开放。
- 当前使用场景只限官网内部轻量插图、状态反馈、FAQ、开发日志辅助视觉、404 辅助或 Mascot 页彩蛋候选，不作为独立品牌 Logo、项目图标或素材包。
- 如果候选未通过安全、授权、文字或裁切复核，直接从清单移除，不生成公开文件。
- 如果已生成的单张 Web 文件后续需要撤回，必须同步删除公开文件、数据引用、页面入口、文档清单和下载说明；如已发布到线上，需要在下一次发布中撤下对应资源。
- 下载入口继续关闭，公开页面不能写成“可下载”、“自由使用”、“素材包”或“贴纸包”。

2026-06-18 授权与页面接入范围确认：

| 范围 | 当前结论 |
| --- | --- |
| 授权来源 | 记录为 RadishX 仓库内原创候选素材，项目所有者已允许首批 Web 展示文件生成和 `/mascot` 候选预览接入。 |
| 允许页面位置 | `/mascot` 单张表情预览区候选、404 辅助视觉、FAQ / 状态反馈、开发日志辅助视觉。 |
| 禁止页面位置 | 首页首屏主视觉、四项目 Logo、项目图标、下载区、素材包入口、社交贴纸包入口、商业宣传授权页。 |
| 文件生成边界 | 已生成 10 张 `public/images/mascot/expressions/*-web.jpg`；缩略图只在页面性能或网格浏览真实需要时生成。 |
| 页面文案边界 | 只能写“展示候选”“官网内部展示”“待审核”，不能写“免费下载”“自由使用”“贴纸包”“素材 API”。 |
| 撤回策略 | 撤回时同步移除公开文件、数据引用、页面入口、文档清单和任何下载 / 复用暗示；线上已发布时随下一次发布撤下。 |

## Mascot seasonal 活动图评估

评估日期：2026-06-15。检查范围：`assets/avatars/seasonal/*`。

当前总原则：

- Seasonal 图带有固定年份、节日祝福、活动氛围或场景叙事，只能用于短期活动，不进入 Mascot 长期 Gallery 或默认主视觉。
- 当前不生成 Web 版本，不移动到 `public/images/`，不开放下载，也不声明可自由复用。
- 后续如果选择某张图进入活动实现，需先确认活动窗口、页面位置、文案、授权来源、撤下策略和移动端裁切方案。

| 文件 | 规格 | 分类 | 活动窗口 | 页面位置 | 文案边界 | 版权 / 授权风险 | 当前结论 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `assets/avatars/seasonal/radish-seasonal-horse-year-gate.png` | `1024x1024` PNG | 活动 Banner | 2026 马年新春，建议 2026-02-03 至 2026-03-03；当前已过窗口。 | 未来可作为首页临时活动 band 或 `/mascot` 顶部活动条。 | 只表达新春祝福，不作为全年主视觉，不承诺项目发布。 | 需确认生成来源、公开传播授权和固定年号 / 祝福文案使用边界。 | 不进入当前实现。 |
| `assets/avatars/seasonal/radish-seasonal-horse-year-scene.png` | `1024x1024` PNG | 活动 Banner | 2026 马年新春，建议 2026-02-03 至 2026-03-03；当前已过窗口。 | 未来可作为新春活动页首图或运营文章配图。 | 只表达马年祝福，不进入长期 Gallery。 | 画面信息密度较高，若用于移动端需要单独裁切检查；授权来源仍需补齐。 | 不进入当前实现。 |
| `assets/avatars/seasonal/radish-seasonal-horse-year-poster-red.png` | `848x1264` PNG | 活动 Banner / 运营海报 | 2026 马年新春，建议 2026-02-03 至 2026-03-03；当前已过窗口。 | 更适合竖版社交海报、活动公告图，不适合桌面默认 Hero。 | 只表达 `Radish社区` 新春贺图，不替代官网常驻品牌视觉。 | 红金强节庆风格与官网低饱和基线有偏差；需确认文字、生成来源和公开运营授权。 | 不进入当前实现。 |
| `assets/avatars/seasonal/radish-seasonal-new-year-2025-to-2026.png` | `1024x1024` PNG | 运营内容候选 | 跨年窗口建议 2025-12-26 至 2026-01-07；当前已过窗口。 | 适合社交媒体或一次性跨年运营内容；如进官网，只能作为活动归档。 | `2025→2026` 只能作为跨年文案，不可在 2026-06-15 后作为活跃活动。 | 需确认生成来源、字体 / 文案授权和公开二次传播边界。 | 不进入当前实现。 |
| `assets/avatars/seasonal/radish-seasonal-new-year-2026-lantern.png` | `1024x1024` PNG | 节日彩蛋 | 元旦窗口建议 2025-12-31 至 2026-01-07；当前已过窗口。 | 未来可作为 `/mascot` 顶部轻量彩蛋、短期 toast 或局部装饰。 | 只表达元旦问候，不替换三形态主图。 | 固定 `2026年`、灯笼和烟花语义强，过期后需要撤下；授权来源需补齐。 | 不进入当前实现。 |
| `assets/avatars/seasonal/radish-seasonal-sakura-goodbye-2025.png` | `1024x1024` PNG | 运营内容候选 | 以当前 `告别2025` 文案只适合 2025-12-15 至 2025-12-31；当前已过窗口。 | 更适合年末回顾、社交图或一次性文章配图。 | 不作为春季常驻活动图；若想改作樱花季，需要重新生成或替换文案。 | 校园 / 樱花场景和固定年份文本限制复用；需确认生成来源和公开传播授权。 | 不进入当前实现。 |

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
