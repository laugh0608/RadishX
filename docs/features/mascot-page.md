# Mascot 虚拟形象页

状态：Gallery / Usage 实现、设计源同步、Chrome smoke、单张拆分准备清单与首批人工框选复核准备已完成
最后更新：2026-06-18

## 目标

让 `/mascot` 成为“萝小白”三种形态、公开素材状态和使用边界的稳定展示页。

## 背景

Mascot 页已接入首批确认图片，包含原始形象、可爱Q版安全设定图、可爱Q版站姿图、虚拟形象完全体设定图、完全体站姿图、服装变体、表情格和贴纸横图 Gallery。页面暂不提供下载入口，也不声明素材可自由复用。

2026-06-17 继续按页面质量推进，只优化现有 Gallery 的信息层级和 Usage 说明。此轮不新增图片、不替换素材、不拆分单张贴纸、不生成缩略图、不开放下载、不接入 seasonal 活动图。

2026-06-17 追加 Mascot 单张表情拆分准备清单，只建立审核字段、首批候选和命名 / 授权 / 撤回口径；仍不实际切图，不生成单张 Web 文件或缩略图，不开放下载入口，不新增 seasonal 实现。

2026-06-18 追加首批单张表情人工框选复核准备：只确认源图规格、候选格位、计划整格裁切框、保留要素和授权边界；仍不实际切图，不生成单张 Web 文件或缩略图，不开放下载入口。

## 范围

- `/mascot` 页面 Hero、三形态卡片、Gallery 和使用规则。
- `src/data/mascot.ts` 中三形态和 Gallery 元数据。
- `public/images/mascot/` 中已审核 Web 图。
- `docs/assets/materials.md` 中 Mascot 素材审核清单。

## 不做

- 不公开未审核表情拆分图、节日图或旧可爱Q版设定图。
- 不提供素材下载入口。
- 不声明素材可自由复用。
- 不把节日或运营图作为长期默认主视觉。

## 当前实现

- 原始形象用于图标、小印章和形态起点。
- 可爱Q版站姿图用于首页中心视觉锚点、首页 Mascot 辅助视觉和 Mascot 页形态展示。
- 虚拟形象完全体站姿图用于 Mascot 页主视觉和完全体形态展示。
- 服装变体和完全体表情包进入 Gallery。
- 可爱Q版表情格和 4 张贴纸横图已作为整图预览进入 Gallery，不拆分单张贴纸。
- Gallery 已展示每张公开图的当前状态、使用边界和后续处理，降低误解为下载素材包的风险。
- Usage 说明已按公开展示、安全口径、授权 / 下载和活动图边界分组。
- Pencil 桌面与独立移动 v1.1 画板已同步 Gallery 状态 / 边界 / 后续处理和 Usage 四组边界，继续不新增素材、不拆分贴纸、不开放下载。
- 已使用 Chrome 插件补跑本地 `/mascot` 桌面与 `390x844` 移动端视觉 smoke，Gallery facts、Usage 分组、图片加载、横向溢出、触控目标和 console error 均未发现阻断问题。
- 单张拆分、缩略图命名和下载政策已完成当前阶段评估，结论为继续保持整图预览和下载关闭。
- 已建立单张表情拆分准备清单：首批只从 `assets/avatars/child/radish-child-expression-sheet-grid.png` 选取低风险基础情绪候选；4 张贴纸横图因版式、文字方向和间距不一致，先列为二批复核来源。
- 已完成首批 10 个表情格的人工框选复核准备：源图为 `1024x1536`、4 列 6 行，首批候选采用原图整格 `256x256` 计划框，优先保留圆角边框、角色主体、表情符号和中文标签。
- `assets/avatars/seasonal/` 下 6 张节日活动图已完成评估，当前均不进入长期 Gallery、默认主视觉或公开资源目录。
- 三形态卡片展示当前用途、审核状态、使用边界和后续素材需求。

## 设计要求

- 三种形态应完整展示主体，避免裁切脸、手、服装主体或关键设定。
- Gallery 适合轻量网格，不做下载站。
- 移动端下图片、说明和状态信息必须连续可读，不能让长素材路径撑开页面。
- 安全口径必须清楚表达：可爱Q版公开素材需要完整外装、非性感化、无身体拆解。
- Gallery 卡片需要直接展示公开状态、使用边界和后续处理，不让访问者误解为可下载素材包。
- Usage 说明应按展示、安全、授权 / 下载和活动图边界分组，便于扫读。

## 开发任务

- 本轮先优化 Gallery 信息层级和 Usage 说明：补充每张 Gallery 图的公开状态、使用边界和后续处理；把 Usage 从散列规则整理成分组说明。
- 本轮保留现有 7 张 Gallery 整图预览，不新增、删除或替换公开图片资源。
- 本轮继续不改 `public/images/` 和 `assets/`，不拆分单张贴纸，不生成缩略图，不开放下载。
- 本轮已更新 `src/data/mascot.ts`、`src/pages/MascotPage.tsx` 和 `src/styles/global.css`，只调整页面信息结构和样式。
- 后续如替换其他站姿、活动图或 Gallery 图片，先更新素材审核清单再生成 Web 版本。
- 表情包单张拆分继续后置；如需单张展示，先做清单、命名规则、授权边界和下载口径，再生成 Web 版本。
- 本轮已完成单张拆分准备清单；后续进入裁切前，还需逐格确认主体完整、文字可读、安全口径、授权来源和撤回策略。
- 2026-06-18 已完成首批 10 个候选的计划框选复核准备，全部继续保持 `candidate-only`；下一步是授权来源和允许 / 禁止使用场景确认，而不是直接生成文件。
- 节日图继续只作为活动 Banner、彩蛋或运营内容候选；如进入正式页面，需单独确认活动窗口、页面位置和文案。
- 如未来开放下载，需要先补版权、授权和文件包边界。

## 拆分准备与下载评估

2026-06-15 评估结论：

- 当前 1 张可爱Q版表情格和 4 张贴纸横图只保留整图预览，不进入单张拆分。
- 单张拆分会把素材从页面预览升级为可独立传播文件，风险从页面展示扩展到二次传播、授权、撤回和版本管理。
- 贴纸横图之间版式、边距、文字标注和网格密度不完全一致，不能直接做无审核批量裁切；每一格都需要确认主体完整、文字可读、背景策略和安全口径。
- 缩略图不是独立决策项；只有单张素材进入页面或文件包时才生成 `-thumb` 版本。

未来如果启动单张展示，先按以下顺序推进：

1. 建立拆分清单，至少记录 `id`、`source_sheet`、`source_cell`、`label`、`emotion`、`public_status`、`web_path`、`thumb_path` 和 `usage_boundary`。
2. 单张 Web 文件使用稳定英文 slug，例如 `radish-child-expression-<slug>-web.jpg` 或 `radish-child-sticker-wide-<sheet>-<nn>-<slug>-web.jpg`。
3. 缩略图仅服务页面性能和网格浏览，命名为对应单张文件的 `-thumb` 版本，不作为额外授权素材。
4. 下载入口继续关闭；只有确认版权、授权范围、允许 / 禁止使用场景、文件包内容、归属说明和撤回策略后，才重新评估下载。

2026-06-17 准备清单：

- 清单只记录未来裁切所需审核信息，不代表单张文件已经生成。
- 首批候选优先来自 `radish-child-expression-sheet-grid.png`，原因是 24 个格子边框、标签和主体比例较统一，适合人工逐格复核。
- `radish-child-sticker-sheet-wide-01.png` 至 `04.png` 继续作为二批复核来源；这些横图存在纵排文字、自由排版、局部出血和密度差异，不能直接批量裁切。
- 所有计划路径均为占位口径；生成文件前必须再次确认版权、授权和页面用途。

2026-06-18 人工框选复核准备：

- 源图规格：`assets/avatars/child/radish-child-expression-sheet-grid.png` 为 `1024x1536` PNG；公开整图预览 `public/images/mascot/radish-child-expression-sheet-grid-web.jpg` 为 `933x1400` JPG。
- 首批候选均来自原图 4 列 6 行表情格；计划裁切框使用原始 PNG 坐标，初始框为整格 `256x256`，用于保留圆角边框、角色主体、表情符号和中文标签。
- 本轮只确认计划框选和风险，不生成单张文件，不生成缩略图，不写入 `public/images/mascot/expressions/`。
- 如果后续要生成无标签头像、透明底角色、去边框表情或更紧凑缩略图，必须另起一轮裁切策略和安全复核；不能复用本轮整格框选结论。
- 授权边界仍为 `candidate-only`：只允许继续作为 RadishX 官网内部展示候选记录，不开放对外二次使用、下载、社交贴纸包、商用复用或再分发。

首批计划框选：

| id | source_cell | label | slug | planned_crop_box_original_px | 保留要素 | 框选结论 |
| --- | --- | --- | --- | --- | --- | --- |
| `rx-expression-001` | `R1C1` | 开心 | `happy` | `x=0,y=0,w=256,h=256` | 双手、黄色强调线、中文标签。 | 可进入授权确认；后续不建议收紧到只剩脸部。 |
| `rx-expression-002` | `R1C2` | 生气 | `angry` | `x=256,y=0,w=256,h=256` | 头顶怒气符号、两侧蒸汽、抱臂姿态、中文标签。 | 可进入授权确认；后续必须保留蒸汽符号。 |
| `rx-expression-003` | `R1C3` | 震惊 | `surprised` | `x=512,y=0,w=256,h=256` | 左侧黄色爆点、双手、张口表情、中文标签。 | 可进入授权确认；后续避免裁掉左侧符号。 |
| `rx-expression-004` | `R2C3` | 得意 | `proud` | `x=512,y=256,w=256,h=256` | 左侧星形符号、眨眼、手势、中文标签。 | 可进入授权确认；低风险优先候选。 |
| `rx-expression-005` | `R2C4` | 期待 | `expectant` | `x=768,y=256,w=256,h=256` | 两侧星形符号、合手姿态、中文标签。 | 可进入授权确认；文案使用不得写成上线承诺。 |
| `rx-expression-006` | `R3C2` | 疑问 | `question` | `x=256,y=512,w=256,h=256` | 右上问号、抬手思考姿态、中文标签。 | 可进入授权确认；后续避免裁掉右上问号。 |
| `rx-expression-007` | `R3C3` | 无语 | `speechless` | `x=512,y=512,w=256,h=256` | 右上省略号、脸部表情、中文标签。 | 可进入授权确认；使用语境不得嘲讽用户。 |
| `rx-expression-008` | `R5C2` | OK | `ok` | `x=256,y=1024,w=256,h=256` | 右上 `OK` 字样、手势、眨眼表情、中文标签。 | 可进入授权确认；不作为独立授权图标。 |
| `rx-expression-009` | `R5C3` | 加油 | `cheer` | `x=512,y=1024,w=256,h=256` | 左上强调线、举拳姿态、中文标签。 | 可进入授权确认；不用于商业承诺或进度承诺。 |
| `rx-expression-010` | `R6C4` | 再见 | `goodbye` | `x=768,y=1280,w=256,h=256` | 左侧红色强调线、挥手、完整外装、中文标签。 | 可进入授权确认；适合页尾或 404 辅助候选。 |

审核字段：

| 字段 | 含义 | 当前要求 |
| --- | --- | --- |
| `id` | 清单内稳定编号 | 使用 `rx-expression-001` 这类递增编号，不随文件名变化。 |
| `source_sheet` | 原始来源图 | 记录 `assets/avatars/child/...` 原图路径，不指向 Web 预览图。 |
| `source_cell` | 来源格位 | 表情格使用 `R<row>C<col>`；横图在确认网格前使用 `manual-<nn>`。 |
| `label` | 图内中文标签 | 保留原图标签，不改写情绪含义。 |
| `emotion` | 英文情绪 / 动作用途 | 使用稳定英文词，服务 slug、alt 和后续数据层。 |
| `slug` | 文件名片段 | 小写英文短横线，不使用中文、空格或临时编号替代语义。 |
| `public_status` | 公开状态 | 当前统一为 `candidate-only`，表示只在清单中准备，未生成公开单张文件。 |
| `usage_scenario` | 使用场景 | 仅限未来官网页面内轻量表情展示候选，不作为素材包或社交贴纸包。 |
| `usage_boundary` | 使用边界 | 保持完整外装、非性感化、无身体拆解，不裁掉关键手势、脸部或图内文字。 |
| `license_scope` | 授权边界 | 当前只按 RadishX 官网展示候选记录；对外二次使用、下载和再分发未开放。 |
| `withdrawal_policy` | 撤回策略 | 未生成前从清单移除；未来若已生成，需要同步移除 Web 文件、数据引用和页面入口。 |
| `planned_web_path` | 计划单张 Web 路径 | 仅作为计划路径，格式为 `public/images/mascot/expressions/<filename>-web.jpg`。 |
| `planned_thumb_path` | 计划缩略图路径 | 仅在单张进入页面或文件包时生成，格式为对应单张文件的 `-thumb` 版本。 |
| `download_policy` | 下载口径 | 当前固定为 `closed`，不提供 ZIP、单图下载、素材 API 或自由复用声明。 |
| `review_note` | 复核备注 | 记录是否需要二次框选、文字修正、边缘留白或安全复核。 |

首批候选：

| id | source_sheet | source_cell | label | emotion | slug | public_status | usage_scenario | usage_boundary | planned_web_path | planned_thumb_path | review_note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `rx-expression-001` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R1C1` | 开心 | happy | `happy` | `candidate-only` | 未来 Mascot 页面单张表情基础情绪候选。 | 保留双手、表情符号和中文标签；不作为下载素材。 | `public/images/mascot/expressions/radish-child-expression-happy-web.jpg` | `public/images/mascot/expressions/radish-child-expression-happy-thumb.jpg` | 低风险，优先人工框选。 |
| `rx-expression-002` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R1C2` | 生气 | angry | `angry` | `candidate-only` | 未来用于状态反馈或轻量情绪说明。 | 保留头顶怒气符号和手臂姿态；不做攻击性语境延展。 | `public/images/mascot/expressions/radish-child-expression-angry-web.jpg` | `public/images/mascot/expressions/radish-child-expression-angry-thumb.jpg` | 需确认边缘蒸汽符号完整。 |
| `rx-expression-003` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R1C3` | 震惊 | surprised | `surprised` | `candidate-only` | 未来用于异常、惊讶或提示类轻量插图。 | 保留双手、眼睛和惊叹符号；不裁掉上方符号。 | `public/images/mascot/expressions/radish-child-expression-surprised-web.jpg` | `public/images/mascot/expressions/radish-child-expression-surprised-thumb.jpg` | 需确认脸部和符号留白。 |
| `rx-expression-004` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R2C3` | 得意 | proud | `proud` | `candidate-only` | 未来用于完成、亮点或正向反馈。 | 保留眨眼、手势和星形符号；不替代正式品牌 Logo。 | `public/images/mascot/expressions/radish-child-expression-proud-web.jpg` | `public/images/mascot/expressions/radish-child-expression-proud-thumb.jpg` | 低风险，优先人工框选。 |
| `rx-expression-005` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R2C4` | 期待 | expectant | `expectant` | `candidate-only` | 未来用于待办、预告或轻量引导。 | 保留双手和星形符号；不写成上线承诺。 | `public/images/mascot/expressions/radish-child-expression-expectant-web.jpg` | `public/images/mascot/expressions/radish-child-expression-expectant-thumb.jpg` | 需确认文字底部完整。 |
| `rx-expression-006` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R3C2` | 疑问 | question | `question` | `candidate-only` | 未来用于 FAQ、待确认事项或说明提示。 | 保留问号符号和手势；不脱离上下文暗示错误。 | `public/images/mascot/expressions/radish-child-expression-question-web.jpg` | `public/images/mascot/expressions/radish-child-expression-question-thumb.jpg` | 需确认右上问号完整。 |
| `rx-expression-007` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R3C3` | 无语 | speechless | `speechless` | `candidate-only` | 未来用于轻量空状态或非阻断提示。 | 保留省略号，不用于嘲讽用户或错误归因。 | `public/images/mascot/expressions/radish-child-expression-speechless-web.jpg` | `public/images/mascot/expressions/radish-child-expression-speechless-thumb.jpg` | 需确认省略号和表情留白。 |
| `rx-expression-008` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R5C2` | OK | ok | `ok` | `candidate-only` | 未来用于完成状态、确认或轻量成功反馈。 | 保留手势和 `OK` 字样；不作为独立授权图标。 | `public/images/mascot/expressions/radish-child-expression-ok-web.jpg` | `public/images/mascot/expressions/radish-child-expression-ok-thumb.jpg` | 低风险，优先人工框选。 |
| `rx-expression-009` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R5C3` | 加油 | cheer | `cheer` | `candidate-only` | 未来用于项目进展、开发日志或鼓励类提示。 | 保留举拳和强调线；不用于商业承诺或进度承诺。 | `public/images/mascot/expressions/radish-child-expression-cheer-web.jpg` | `public/images/mascot/expressions/radish-child-expression-cheer-thumb.jpg` | 需确认上方强调线完整。 |
| `rx-expression-010` | `assets/avatars/child/radish-child-expression-sheet-grid.png` | `R6C4` | 再见 | goodbye | `goodbye` | `candidate-only` | 未来用于页尾彩蛋、404 辅助或结束状态。 | 保留挥手和红色强调线；不作为可下载贴纸。 | `public/images/mascot/expressions/radish-child-expression-goodbye-web.jpg` | `public/images/mascot/expressions/radish-child-expression-goodbye-thumb.jpg` | 需确认右侧手部和符号完整。 |

二批复核来源：

| source_sheet | 当前判断 | 进入单张前必须补齐 |
| --- | --- | --- |
| `assets/avatars/child/radish-child-sticker-sheet-wide-01.png` | 贴纸文字方向和间距混合，包含纵排短句和自由排版。 | 逐项人工框选、文字完整性、边缘留白和社交语境复核。 |
| `assets/avatars/child/radish-child-sticker-sheet-wide-02.png` | 贴纸数量较多且部分姿态带物件或更强语义。 | 使用场景分级、是否适合官网页面、是否需要去阴影或统一边距。 |
| `assets/avatars/child/radish-child-sticker-sheet-wide-03.png` | 网格较规整，但包含更明显的手写文案和单张贴纸语义。 | 逐格文字授权、手写文案可读性、是否进入官网而非贴纸包。 |
| `assets/avatars/child/radish-child-sticker-sheet-wide-04.png` | 以大字短句为主，部分内容偏社交聊天表情。 | 文案边界、使用场景、是否会被误解为可下载聊天贴纸。 |

命名规则：

- 表情格单张文件使用 `radish-child-expression-<slug>-web.jpg`。
- 表情格缩略图使用 `radish-child-expression-<slug>-thumb.jpg`。
- 贴纸横图未来如进入单张，使用 `radish-child-sticker-wide-<sheet>-<nn>-<slug>-web.jpg`，例如 `radish-child-sticker-wide-03-01-received-web.jpg`。
- `<slug>` 必须来自审核清单，不从中文标签自动音译；如语义冲突，先改清单再生成文件。
- 单张文件和缩略图只存放在未来确认的公开目录中，不覆盖 `assets/avatars/child/` 原图。

授权、使用场景和撤回策略：

- 当前授权边界只支持 RadishX 官网展示候选记录；未确认对外二次使用、商用复用、社交平台贴纸包或素材下载授权。
- 当前使用场景只考虑未来官网内部的轻量插图、状态反馈、FAQ 或开发日志辅助视觉，不作为独立品牌 Logo、项目图标或下载素材。
- 如果某个候选未通过安全、授权、文字或裁切复核，直接从清单移除，不生成公开文件。
- 如果未来已经生成单张 Web 文件后需要撤回，必须同步删除公开文件、数据引用、页面入口、文档清单和任何下载说明；如已经发布到线上，需要在下一次发布中撤下对应资源。
- 下载入口继续关闭。公开页面只能表达“展示中 / 候选中 / 待审核”，不能写成“可下载”、“自由使用”、“素材包”或“贴纸包”。

## Seasonal 活动图评估

2026-06-15 评估 `assets/avatars/seasonal/` 下 6 张图。结论：这些图都带有明确节日、年份或活动语义，只适合短期活动 Banner、节日彩蛋或运营内容候选；当前不进入长期 Gallery、默认主视觉、首页常驻视觉或 `public/images/`。

| 分类 | 候选素材 | 活动窗口 | 页面位置 | 文案边界 | 版权 / 授权风险 | 当前实现 |
| --- | --- | --- | --- | --- | --- | --- |
| 活动 Banner | `radish-seasonal-horse-year-gate.png`、`radish-seasonal-horse-year-scene.png`、`radish-seasonal-horse-year-poster-red.png` | 2026 马年新春短期活动，建议只覆盖 2026-02-03 至 2026-03-03；当前日期 2026-06-15 已过新春窗口。 | 未来可作为首页临时活动 band、`/mascot` 顶部活动条或社交运营海报，不作为常驻 Hero 或长期 Gallery。 | 只能表达“新春祝福 / 马年活动”，不写成全年主视觉、不承诺项目上线、不声明素材可复用或可下载。 | 需要补齐生成来源、授权范围和是否允许公开运营传播；图中固定年号、祝福语和 `Radish社区` 字样会限制复用。 | 不进入当前实现。 |
| 节日彩蛋 | `radish-seasonal-new-year-2026-lantern.png` | 2026 元旦短期彩蛋，建议只覆盖 2025-12-31 至 2026-01-07；当前已过窗口。 | 未来可作为 `/mascot` 顶部轻量彩蛋、节日 toast 或首页局部装饰，不作为默认主视觉。 | 只表达元旦问候，不延展为长期品牌设定，不替换三形态主图。 | 需要确认生成来源和公开使用授权；红灯笼、烟花和固定 `2026年` 文案具有强时效性。 | 不进入当前实现。 |
| 运营内容候选 | `radish-seasonal-new-year-2025-to-2026.png`、`radish-seasonal-sakura-goodbye-2025.png` | 跨年图只适合 2025-12-26 至 2026-01-07；樱花告别图以当前文案只适合 2025 年末回顾，窗口为 2025-12-15 至 2025-12-31。 | 更适合社交媒体、开发日志配图或一次性运营文章；如进官网，只能是活动归档或彩蛋入口。 | 不用于当前页面长期说明；`告别2025` 和 `2025→2026` 不能在 2026-06-15 后作为活跃活动文案。 | 需要确认生成来源、字体 / 文案授权和是否允许公开二次传播；校园 / 樱花场景与当前 Mascot 长期页面气质不完全一致。 | 不进入当前实现。 |

执行要求：

- 启动任何 seasonal 页面接入前，先明确活动目标、上线 / 下线时间、展示位置、替换文案和撤下策略。
- 只有活动目标确认后，才从原图生成 Web 版本进入 `public/images/mascot/seasonal/` 或对应活动目录。
- 未确认授权和活动窗口前，不把 seasonal 图放入长期 Gallery、不作为默认主视觉、不开放下载。

## 验证

- `npm run build`
- 桌面视口检查 `/mascot`。
- 390px 移动端检查 `/mascot`。
- 检查 Mascot 页面图片加载成功，并确认新增公开 Web 资源返回 `200`。
- 本轮检查新增 5 张表情 / 贴纸 Web 资源返回 `200`。
- 检查主视觉摘要、三形态说明和 Gallery 无横向 / 高度溢出。
- 本轮 Browser 检查 `/mascot` 在桌面视口与 `390x844` 下的 Gallery，确认 7 张 Gallery 图片滚动进入视口后均加载成功，无横向溢出，console 无 error。
- Seasonal 活动图本轮只做文档评估；未改页面代码或公开资源时执行 `git diff --check`，不要求浏览器 smoke。
- 2026-06-17 Gallery / Usage 二轮执行 `npm run build` 通过。
- 2026-06-17 Gallery / Usage 二轮执行 `git diff --check` 通过。
- 2026-06-17 Gallery / Usage 二轮执行 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 通过，确认 8 个路由和 18 个公开图片资源可访问。
- 2026-06-17 尝试使用 Browser 检查 `/mascot` 桌面与 `390x844` 移动视口时，Browser Use URL policy 拦截本地页面访问；本轮不使用替代浏览器规避该限制，桌面 / 移动截图级或 DOM 级视觉 smoke 待后续可用浏览器会话补跑。
- 2026-06-17 Pencil `snapshot_layout` 复查 `Mascot Page v1.1 - React Accurate` 和 `Mascot Page Mobile v1.1 - React Accurate` 均无布局问题。
- 2026-06-17 用户明确要求使用 Chrome 插件后，补跑本地 `/mascot` Chrome smoke：`1440x900` 桌面视口下 7 张 Gallery 卡片、7 个状态标签、14 条 Boundary / Next facts、4 个 Usage 分组、11 张页面图片、横向宽度和 console error 均正常；`390x844` 移动视口下同项检查正常，所有图片滚动后完成加载，无横向溢出、无小于 `44px` 的可点击目标，console error 为空。
- 2026-06-18 单张表情人工框选复核准备为纯文档治理变更，未改 React 代码、未新增公开资源、未生成单张 Web 文件或缩略图；执行 `git diff --check` 验证即可。

## 完成标准

- 三形态和 Gallery 在桌面与移动端稳定可读。
- 所有公开图片都已在素材治理文档记录来源和状态。
- 表情与贴纸素材只作为整图预览，不提供下载入口。
- 单张拆分评估结论已记录，未确认清单和授权前不生成单张文件。
- 首批 10 个候选的计划框选、保留要素和授权前置条件已记录；生成文件前仍需确认授权来源和页面接入范围。
- Seasonal 活动图只作为短期活动候选，未确认活动窗口、位置、文案和授权前不进入当前实现。
- 未审核图片没有进入正式页面。
- 使用边界和后续需求在页面与文档中保持一致。

## 后续事项

- 如果未来确认具体 seasonal 活动，先按本页评估表确认活动窗口、页面位置、文案边界和撤下策略，再生成 Web 版本。
- 如果未来确认启动单张展示，先基于本页计划框选确认授权来源和页面接入范围，再决定是否生成单张 Web 文件。
- 素材下载政策待版权、授权和文件包边界确认后再重新评估。
