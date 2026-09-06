# 设计源精确化

状态：已切换到 v1.2「craft」单基线（10 张画板）；v1 / v1.1 / v1.1 暗色旧画板已从设计源画布删除，保留在 git 历史
最后更新：2026-09-06

## 后续目标与适用范围

本文件归档 `radishx-site-v0.pen` 的 craft 设计收敛过程，包含历史方案与阶段替代记录。当前灰玉首页采用独立 `radishx-site-v1.pen`，见 [灰玉品牌目标](grayjade-brand-refresh.md)；后续维护按受影响页面选择设计源，不因文末历史事项而回到 v0 重绘当前首页。

## 目标

把 `docs/design/sources/radishx-site-v0.pen` 从早期候选 / 占位设计源推进为当前 v1.2 craft 单基线，减少设计源与实现继续分叉。

## 背景

当前 React 官网已经完成首版实现、本地响应式检查、可访问性整理和实现口径对齐检查。Pencil 设计源中已有 5 个 v1 画板，覆盖首页桌面、首页移动、项目详情模板、Mascot 页和 About 页；这些画板结构稳定，但仍保留早期候选素材、占位块和旧文案口径。

2026-06-16 已在 5 个 v1 画板底部追加实现口径同步说明。本目标继续推进后，已新增 v1.1 精确实现稿，不直接覆盖原 v1 画板。

2026-06-17 Mascot 页完成 Gallery 信息层级与 Usage 说明二轮实现后，已继续同步桌面和独立移动 v1.1 画板，避免 Pencil 设计源停留在旧 Gallery notes 和三条 Usage 规则口径。

2026-06-18 Mascot 页新增首批 10 张单张表情候选预览区后，已继续同步桌面和独立移动 v1.1 画板；单张表情候选区位于 Gallery 与 Usage 之间，继续表达官网内部展示候选和下载关闭口径。

2026-07-12 官网完成 family-ui v26.7.2 接入（`--rx-*` 作为 `--rd-*` 别名、暗色三态、RadishLex 第五项目）后，设计源相对实现再次滞后（仍是四项目、orbit 四点、无 RadishLex、无暗色画板、Catalyst 为旧图、header 无主题入口）。本轮按 Pencil-first 原则把上述实现进展同步回设计源，恢复设计源—实现一致。

## 范围

- 新增首页桌面 v1.1 画板。
- 新增首页移动 v1.1 画板。
- 新增项目详情模板 v1.1 画板。
- 新增 Mascot 页 v1.1 画板。
- 新增 About 页 v1.1 画板。
- 新增项目详情模板、Mascot 页和 About 页的独立 `390px` 移动版 v1.1 画板。
- 同步 Mascot 页桌面与独立移动 v1.1 画板中的 Gallery 状态 / 边界 / 后续处理，以及 Usage 四组边界。
- 同步 Mascot 页桌面与独立移动 v1.1 画板中的首批单张表情候选预览区。
- 使用已审核公开素材或代码内视觉语义，不引入新素材。

## 不做

- 不修改 React 代码。
- 不推送、不部署、不补跑线上 smoke。
- 不接入新的 seasonal 活动图。
- 不开放 Mascot 缩略图、下载入口、素材包或外部分发口径。
- 不把代码内临时项目标识描述为正式 Logo。
- 不删除原 v1 画板。（v1.1 阶段约束；已被 2026-07-12 v1.2 基线切换覆盖。）

## 设计要求

- v1.1 画板应反映当前 React 页面结构和素材治理口径，而不是继续保留未审核候选图占位。
- 首页应体现 Radish Orbit 中心站姿图、五项目节点、素材状态槽、项目 band、生态说明、公开入口和 Mascot 入口。
- 项目详情模板应体现 Hero、Page flow、Public Surface、Documentation、Capabilities、Matrix 和素材审核说明。
- Mascot 页应体现完全体站姿主视觉、三形态、Gallery 整图预览、首批单张表情候选预览区和下载关闭口径。
- About 页应体现联系方式、微信公众号二维码、五个仓库入口和六个域名边界。
- 移动稿以 `390 x 844` 为基准，优先保证连续浏览、换行和触控目标。

## 开发任务

1. 已使用 Pencil MCP 确认 active editor 为 `docs/design/sources/radishx-site-v0.pen`。
2. 已在现有画板右侧新增 v1.1 画板，不覆盖 v1。
3. 已按页面逐屏重绘核心结构和当前实现口径。
4. 已补齐项目详情模板、Mascot 页和 About 页的独立 `390px` 移动版 v1.1 画板。
5. 已使用 Pencil `snapshot_layout` 检查布局问题。
6. 已抽查关键画板截图，确认无裁切、重叠或明显旧口径。
7. 已更新本文件、`docs/planning/current.md` 和本周开发日志。
8. 已同步 Mascot 桌面与独立移动 v1.1 画板的 Gallery / Usage 二轮实现口径。
9. 已同步 Mascot 桌面与独立移动 v1.1 画板的单张表情候选预览区，并复查布局。

## 本轮实现记录

- `Home Desktop v1.1 - React Accurate`：覆盖桌面首页 Header、Radish Orbit、素材状态槽、项目 band、生态说明和 Mascot 入口。
- `Home Mobile v1.1 - React Accurate`：覆盖 390px 单列首页结构、移动端 Radish Orbit、项目卡片、素材边界和页脚。
- `Project Detail Template v1.1 - Flow Example`：以 RadishFlow 为样例覆盖 Hero、Page flow、Role / Stage、Public Surface、Documentation、Capabilities、Matrix 和素材审核说明。
- `Mascot Page v1.1 - React Accurate`：覆盖完全体主视觉、三形态、7 张 Gallery 整图预览、Gallery notes 和 Usage 规则。
- `About Page v1.1 - React Accurate`：覆盖联系方式、微信公众号二维码、5 个 GitHub 仓库入口和 6 个域名 / 部署边界。
- `Project Detail Template Mobile v1.1 - Flow Example`：以 `390px` 移动端单列结构覆盖 `/flow` Hero、Page flow、Public Surface、Documentation、Capabilities、Matrix 和 archived / paused 边界。
- `Mascot Page Mobile v1.1 - React Accurate`：以 `390px` 移动端单列结构覆盖完全体站姿主视觉、三形态、7 张 Gallery 整图预览和不拆分 / 不下载 / 不接 seasonal 口径。
- `About Page Mobile v1.1 - React Accurate`：以 `390px` 移动端单列结构覆盖联系方式、微信公众号二维码、5 个 GitHub 仓库入口和 6 个域名 / 部署边界。
- 所有 v1.1 画板均使用已审核公开素材或代码内视觉语义；未引入新素材，未开放下载入口。
- 2026-06-17 已更新 `Mascot Page v1.1 - React Accurate`：Gallery 说明和卡片说明补齐公开状态、使用边界和后续处理；底部 Governance Summary 改为 Status、Boundary、Next 和 Seasonal 四项。
- 2026-06-17 已更新 `Mascot Page Mobile v1.1 - React Accurate`：Gallery 卡片说明补齐状态 / 边界摘要；Usage 从三条规则改为 Display、Safety、License 和 Seasonal 四组。
- 2026-06-18 已更新 `Mascot Page v1.1 - React Accurate`：在 Gallery 与 Usage 之间新增 `Expressions - Internal Preview` 区块，使用 5 列 x 2 行展示首批 10 张单张表情候选，标注来源格位、官网内部展示状态、中文标签、英文语义和轻量使用场景。
- 2026-06-18 已更新 `Mascot Page Mobile v1.1 - React Accurate`：在 Gallery 与 Usage 之间新增 `Mobile Expressions - Internal Preview` 区块，使用 2 列 x 5 行展示首批 10 张单张表情候选；移动画板高度调整为 `6160px` 以完整容纳新增区块、Usage 和页脚。
- 2026-07-12 family-ui / RadishLex / 暗色同步（见下）。

### 2026-07-12 family-ui 双主题 + RadishLex + 暗色同步

- 变量层：`.pen` 的 `--rx-*` 色 token 从单套亮色扩为 `light / dark` 双主题值（axis `mode`），并新增 `rx-accent-grayjade`；未改动的 v1 / v1.1 亮色画板默认解析 light，视觉不变。
- `Home Desktop v1.1 - React Accurate`：orbit 四点重排为五点（顶部居中 Radish + 上排 Catalyst / Flow + 下排 Mind / Lex + 中心站姿），hero 文案补第五方向，矩阵标题「四个 → 五个」，新增 RadishLex 全宽 band（Input pipeline 代码内视觉），Catalyst band 主图换为 demo 首屏图；header 补主题切换入口。
- `Home Mobile v1.1 - React Accurate`：新增 RadishLex 卡与 orbit 第五点，纠正早期滞后口径（Catalyst 定位 / 域名 / 状态、Radish 域名 / 状态、Flow 状态、orbit 节点 meta），标题「四 → 五」，header 补主题入口。
- 新增 `Home Desktop v1.1 - Dark` 与 `Home Mobile v1.1 - Dark`：根 frame `theme:{mode:"dark"}` 令全部 `$rx-*` 走暗色值；primary 按钮暗色底色改 `brand-primary` + 浅字，镜像实现避免深底深字。
- `Project Detail Template v1.1 - Flow Example`：矩阵回链补 RadishLex 关联卡；header 补主题入口。
- `About Page v1.1 - React Accurate`：仓库区补 RadishLex 卡（6 张），域名区补 `lex.radishx.com` 并将「四个项目」描述改「五个」；header 补主题入口；画板高度 3120 → 3180 消除 footer 裁切。
- 原 v1 画板与 Mascot / 详情 / About 独立移动稿的精简 condensed header 保留不动；主题入口以首页与桌面 site header 作为示范。

### 2026-07-12 v1.2「craft」视觉精修方向

对照家族 UI 参考图（现代工作台 craft：通透、去框、留白、柔投影分层、克制强调）重做一套 v1.2 craft 画板，与 v1 / v1.1 并存，不覆盖旧稿。核心 craft 规则：

- 去框：容器改无描边 + 柔投影漂浮 + 大圆角（12–20）；仅浮层 / 卡片用 shadow。
- 留白：section padding 拉到 88 / hero 92，内容呼吸；一屏一个强焦点。
- 强调色收敛：品牌玫红只留 eyebrow 小点 + 主 CTA；项目色只作小色点；chip 收敛为点分隔 meta 行。
- 段控主题切换：三段（system / light / dark），active 段浮起，镜像 `ThemeToggle`。
- 项目改单列全宽交替 band（顺带对齐真实实现结构）；Mind / Lex 用 craft 链路 chips。
- primary 按钮亮色近黑 pill、暗色转 `brand-primary` + 浅字。

已产出 v1.2 画板：`Home Desktop / Mobile v1.2 - Craft`、`Project Detail v1.2 - Craft`、`Project Detail Mobile v1.2 - Craft`、`Mascot Page v1.2 - Craft`、`Mascot Mobile v1.2 - Craft`、`About Page v1.2 - Craft`、`About Mobile v1.2 - Craft`、`Home Desktop / Mobile v1.2 - Dark`（共 10 张）。

`About Mobile v1.2 - Craft` 首次构建曾触发可复现的 Pencil MCP 会话引擎 glitch（首个子级幽灵 50px 偏移 + 截图空白，连硬编码色块都不渲染；三次重建、换位、内联 header 均复现，但 batch_get 确认存储数据正确）。新会话重建后 glitch 消失，`snapshot_layout` 堆叠正常、截图正常，已补齐。

设计源已切换到 v1.2 单基线：确认 v1.2 craft 方向后，已删除全部 v1 / v1.1 / v1.1 暗色旧画板（15 张），画布仅保留 10 张 v1.2 craft 画板，两行排布（亮色 8 张 + 暗色 2 张）。v1 / v1.1 作为历史记录保留在 git 历史，不在当前设计源画布中。

## 验证

- Pencil `snapshot_layout` 检查 `Home Desktop v1.1 - React Accurate` 无布局问题。
- Pencil `snapshot_layout` 检查 `Home Mobile v1.1 - React Accurate` 无布局问题。
- Pencil `snapshot_layout` 检查 `Project Detail Template v1.1 - Flow Example` 无布局问题。
- Pencil `snapshot_layout` 检查 `Mascot Page v1.1 - React Accurate` 无布局问题。
- Pencil `snapshot_layout` 检查 `About Page v1.1 - React Accurate` 无布局问题。
- Pencil `snapshot_layout` 检查 `Project Detail Template Mobile v1.1 - Flow Example` 无布局问题。
- Pencil `snapshot_layout` 检查 `Mascot Page Mobile v1.1 - React Accurate` 无布局问题。
- Pencil `snapshot_layout` 检查 `About Page Mobile v1.1 - React Accurate` 无布局问题。
- 已抽查首页桌面、首页移动、项目详情模板、Mascot 页和 About 页截图。
- `git diff --check` 通过。
- 2026-06-17 Pencil `snapshot_layout` 复查 `Mascot Page v1.1 - React Accurate` 无布局问题。
- 2026-06-17 Pencil `snapshot_layout` 复查 `Mascot Page Mobile v1.1 - React Accurate` 无布局问题；移动画板高度调整为 `4500px` 以完整容纳四组 Usage 边界和页脚。
- 2026-06-18 Pencil `snapshot_layout` 复查 `Mascot Page v1.1 - React Accurate` 无布局问题；新增桌面单张表情候选区后，画板高度调整为 `4320px`。
- 2026-06-18 Pencil `snapshot_layout` 复查 `Mascot Page Mobile v1.1 - React Accurate` 无布局问题；新增移动单张表情候选区后，画板高度调整为 `6160px`。
- 2026-06-18 已抽查 Mascot 桌面与移动 v1.1 画板截图，未发现新增候选区裁切、重叠或下载入口误导。
- 2026-07-12 Pencil `snapshot_layout` 全文档 `problemsOnly` 通过（无裁切 / 重叠）；抽查首页桌面 / 移动 hero + 矩阵、暗色桌面 / 移动母板、详情页矩阵回链、About 仓库 + 域名、桌面 header 截图，五点 orbit、五 band、六仓库、`lex.radishx.com`、主题入口均正常；About 板高度抬升后 footer 完整。

## 完成标准

- v1.1 画板覆盖首页桌面、首页移动、项目详情模板、Mascot 页、About 页，以及项目详情模板、Mascot 页和 About 页的独立 `390px` 移动版。
- 新画板明确表达当前实现中的已审核素材、临时项目标识、公开文档入口和素材边界。
- 原 v1 画板保留，作为早期设计记录。（已被 2026-07-12 v1.2 阶段覆盖：确认 v1.2 craft 基线后，v1 / v1.1 旧画板已从画布删除，仅留存于 git 历史。）
- 文档和开发日志同步记录。

## 后续事项

- 如 React 页面后续大幅调整，再回到 v1.2 craft 设计源同步桌面与移动端结构。
- 如新增正式 Logo、真实截图、视频或 seasonal 活动，再单独更新对应目标文档和设计源。
- 项目详情模板、Mascot 页和 About 页的独立移动版已补齐；后续若页面继续改版，再以这些移动稿作为对照基线。
