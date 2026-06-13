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

当前审核目标是确认哪些素材可以进入官网第一版实现。状态为“待确认”的条目需要人工确认后才能进入 `public/images/` 或正式页面实现。

| 用途 | 候选素材 | 建议状态 | 说明 |
| --- | --- | --- | --- |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-safe-design-sheet-v1.png` | 待确认 | 可爱Q版安全设定图，适合用于 Mascot 页主视觉或首页辅助视觉。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress.png` | 待确认 | 可爱Q版站姿，适合轻量主视觉或形态卡片。 |
| 首页 / Mascot 主视觉 | `assets/avatars/child/radish-child-standing-white-dress-tall.png` | 待确认 | 可爱Q版站姿高分辨率版本，适合需要更完整裁切的区域。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-design-sheet.png` | 待确认 | 虚拟形象完全体设定图，适合品牌主视觉或 Mascot 页首屏。 |
| 首页 / Mascot 主视觉 | `assets/avatars/mature/radish-mature-standing-white-dress.png` | 待确认 | 虚拟形象完全体站姿，适合首页视觉区域或形态卡片。 |
| Mascot 原始形象 | `assets/avatars/origin/radish-origin-icon.jpg` | 待确认 | 适合用作原始形象图标、小印章或形态起点。 |
| Mascot Gallery | `assets/avatars/child/radish-child-outfit-variants.png` | 待确认 | 适合服装变体展示，不建议做首页首屏。 |
| Mascot Gallery | `assets/avatars/child/radish-child-expression-sheet-grid.png` | 待确认 | 适合表情 Gallery，后续如需精细展示可再拆分单张。 |
| Mascot Gallery | `assets/avatars/child/radish-child-sticker-sheet-wide-01.png` 至 `04.png` | 待确认 | 适合表情包横图 Gallery，不建议做长期主视觉。 |
| Mascot Gallery | `assets/avatars/mature/radish-mature-sticker-sheet-wide.png` | 待确认 | 适合虚拟形象完全体表情 Gallery。 |
| 参考素材 | `assets/avatars/mature/radish-mature-cosplay-board.png` | 暂不建议正式使用 | 三次元风格参考图，和当前官网长期视觉口径不完全一致。 |
| 活动 / 彩蛋 | `assets/avatars/seasonal/*` | 暂不进入第一版长期页面 | 只建议用于节日活动 Banner、彩蛋或运营内容。 |
| 站点图标 / Logo | `assets/avatars/origin/radish-origin-icon.jpg` | 已确认 | 已转换为 `public/favicon.ico`，第一版可作为站点图标和项目详情页临时 Logo。 |
| About 二维码 | `assets/social/wechat-official-account-qr.png` | 待确认 | 适合 About 页联系方式区域，不放首页首屏。 |

当前缺口：

- 首页首屏最终主视觉仍需从可爱Q版、虚拟形象完全体或项目矩阵合成视觉中确认。
- 四个项目详情页第一版暂不放真实截图和视频素材，主视觉区域使用设计稿中的候选媒体框、图形化占位和项目状态信息。
- 四个项目详情页第一版暂用萝小白原始形象作为临时 Logo；后续如果项目有独立 Logo，再按项目替换。
- 若确认具体选图，后续实现阶段再生成 Web 优化版本；不要覆盖原始素材。

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
