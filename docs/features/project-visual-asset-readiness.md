# 项目视觉素材准入准备

状态：已建立准入清单，等待四项目开发成熟和新的正式候选素材
最后更新：2026-06-18

## 目标

为 Radish、RadishCatalyst、RadishFlow 和 RadishMind 后续替换临时项目标识、接入真实截图或视频建立明确准入标准，避免新素材出现时临时判断、临时迁移或误用外部参考图。

## 背景

四个项目详情页已经完成首版实现，并接入当前可公开展示的代表图或代码内视觉。二轮只读复核后，四个项目仍未发现独立稳定 Logo、真实产品截图或可公开视频素材；RadishMind 当前继续使用代码内 `Evaluation loop`，不接入外部产品参考截图。

当前官网使用 RadishX 统一风格代码内临时项目标识。这些标识只用于站内信息识别，不进入 `public/images/`，也不声明为项目正式 Logo。

2026-06-18 明确阶段口径：RadishX 官网功能开发暂时收住，项目页和首页项目区的下一轮开发等待 Radish、RadishCatalyst、RadishFlow 和 RadishMind 各自开发到更适合公开展示的阶段，并补齐正式 Logo、真实截图、公开视频、稳定 Demo、文档站、下载页或项目自有可视化素材后再启动。

## 范围

- 四个项目独立稳定 Logo 的准入条件。
- Radish、RadishCatalyst 和 RadishMind 后续真实截图或项目自有可视化图的审核条件。
- RadishCatalyst trailer / gameplay 视频的审核条件。
- RadishFlow archived 状态下的历史 UI 使用边界。
- 首页项目 band、项目详情页 Hero、Public Surface 和矩阵回流卡片的替换范围。
- `docs/assets/materials.md` 与 `docs/features/project-detail-pages.md` 中的素材口径。

## 不做

- 不生成新 Logo。
- 不迁入兄弟项目代码或整包资源。
- 不读取或修改兄弟项目 `.pen` 文件。
- 不把外部产品参考截图、Godot 默认图标、客户端默认头像或历史内部截图上调为正式项目素材。
- 不接入视频、不压缩视频、不生成降级图。
- 不推送、不部署。

## 准入字段

每个新候选素材进入官网前，至少记录以下字段：

| 字段 | 要求 |
| --- | --- |
| `project` | 对应 Radish、RadishCatalyst、RadishFlow 或 RadishMind。 |
| `asset_type` | `logo`、`screenshot`、`video`、`key_visual` 或 `diagram`。 |
| `source_path` | 原始候选路径或来源说明；兄弟仓库素材只读引用，不直接迁入代码。 |
| `source_owner` | 素材所属项目或创建来源。 |
| `public_status` | `approved`、`candidate`、`internal_only`、`rejected`。 |
| `usage_boundary` | 官网可展示范围、不能表达的含义和是否允许二次裁切。 |
| `replacement_scope` | 替换首页项目 band、项目页 Hero、Public Surface、矩阵回流卡片或 Open Graph 的具体范围。 |
| `web_output` | 通过审核后生成的 `public/images/projects/...` Web 文件路径；未审核时留空。 |
| `fallback` | 移动端、加载失败、视频不可播放或素材下线时的降级策略。 |
| `license_note` | 授权、版权、字体、外部素材或生成来源备注。 |

## 当前项目清单

| 项目 | 当前公开视觉 | 缺口 | 准入结论 |
| --- | --- | --- | --- |
| Radish | 已审核代表图 `radish-acg-web.jpg`；代码内临时项目标识。 | 独立稳定 Logo、当前产品截图、公开视频。 | 新 Logo 或截图出现前不替换；如候选来自客户端图标或默认头像，仍需确认是否为项目级正式 Logo。 |
| RadishCatalyst | 已审核概念视觉 `radishcatalyst-rpg-exploration-concept-web.jpg`；代码内临时项目标识。 | 独立稳定 Logo、真实 gameplay、trailer 或正式 key visual。 | `client/icon.svg` 仍按 Godot 默认图标处理；概念 HUD 或参考图不作为实机截图。 |
| RadishFlow | 已审核历史 UI baseline `radishflow-workbench-concept-web.jpg`；页面状态为 `Archived`。 | 如需继续展示，只能补 archived 说明或历史资料，不上调为活跃产品素材。 | 新图即使来自项目仓库，也必须保留 archived 边界，不表达继续公开维护或交付承诺。 |
| RadishMind | 代码内 `Evaluation loop` 协议 / 评测视觉。 | 项目自有 Logo、真实 Console 截图、协议 / 评测可视化图。 | 外部产品参考截图继续禁止进入官网；自有截图需先确认是否可公开、是否含敏感数据和是否代表当前产品状态。 |

## 接入顺序

1. 发现候选素材后，先在 `docs/assets/materials.md` 追加审核记录，不直接放入 `public/images/`。
2. 判断素材类型和公开状态，确认是否可用于官网正式页面。
3. 明确替换范围：只替换单页主媒体，还是同步首页项目 band、Hero、Public Surface 和矩阵回流卡片。
4. 需要 Web 版本时，再从原图生成 `public/images/projects/<project>/...`，保留原始素材路径不覆盖。
5. 更新 `src/data/projects.ts` 中 `visual`、`assetReview` 或 `mark` 相关字段，并同步目标文档。
6. 涉及视觉或响应式变化时，执行构建、空白检查、桌面和 390px 移动端检查；视频还需检查降级图和移动端加载策略。

## 恢复官网开发条件

四项目相关页面重新进入功能开发前，应至少满足以下条件之一：

- 某个项目已经形成新的公开阶段成果，需要官网更新定位、状态、公开入口或页面结构。
- 出现独立稳定 Logo，且明确可替换当前代码内临时项目标识。
- 出现真实产品截图、项目自有可视化图、公开视频、稳定 Demo、文档站或下载页。
- 项目域名、部署策略、公开维护状态、下载授权或发布计划发生变化。
- RadishMind 有自有 Console、协议 / 评测可视化图或其他可公开智能层素材。

恢复开发时不能直接改页面。先补齐本页准入字段和 `docs/assets/materials.md` 素材记录，再确定替换范围、设计源同步范围和验证范围。

## 视频准入

视频候选进入页面前必须额外确认：

- 来源是否为项目自有公开视频或可公开演示片段。
- 是否包含个人信息、内部路径、测试账号、未发布功能或第三方敏感内容。
- 是否需要字幕、水印、首帧海报图和移动端降级图。
- 压缩格式、时长、自动播放策略、静音策略和用户流量成本。
- 不支持视频播放时的静态替代视觉。

当前四个项目没有可接入官网正式页面的视频素材。

## 验证

- 纯文档准入准备执行 `git diff --check`。
- 新增或替换图片时执行 `npm run build`、`git diff --check`，并检查新增公开资源返回 `200`。
- 涉及页面视觉变化时检查桌面与 `390px` 移动端。
- 视频接入时额外检查海报图、降级图、移动端加载、字幕 / 水印和播放控件。

## 完成标准

- 四个项目的 Logo、截图、视频和自有视觉准入条件清楚。
- 当前缺口和不接入结论清楚，不把临时标识误写为正式 Logo。
- 后续出现候选素材时，有明确字段可补充到素材治理文档。
- 页面替换范围和验证要求清楚。

## 后续事项

- 等待四个项目自身开发成熟，并出现新的独立 Logo、真实截图、公开视频、稳定 Demo、文档站、下载页或 RadishMind 自有可视化素材后，再按本清单进入审核。
- 若 RadishFlow 只保留 archived 展示，后续优先复查页面措辞和历史 UI 使用边界，而不是新增宣传素材。
- 若四项目正式 Logo 同时出现，优先统一替换代码内临时项目标识，并同步设计源。
