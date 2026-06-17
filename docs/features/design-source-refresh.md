# 设计源精确化

状态：已完成，桌面与独立移动 v1.1 画板已补齐，Mascot Gallery / Usage 已同步到最新实现口径
最后更新：2026-06-17

## 目标

把 `docs/design/sources/radishx-site-v0.pen` 从早期 v1 候选 / 占位设计源推进为更贴近当前 React 官网实现的 v1.1 设计稿，减少设计源与实现继续分叉。

## 背景

当前 React 官网已经完成首版实现、本地响应式检查、可访问性整理和实现口径对齐检查。Pencil 设计源中已有 5 个 v1 画板，覆盖首页桌面、首页移动、项目详情模板、Mascot 页和 About 页；这些画板结构稳定，但仍保留早期候选素材、占位块和旧文案口径。

2026-06-16 已在 5 个 v1 画板底部追加实现口径同步说明。本目标继续推进后，已新增 v1.1 精确实现稿，不直接覆盖原 v1 画板。

2026-06-17 Mascot 页完成 Gallery 信息层级与 Usage 说明二轮实现后，已继续同步桌面和独立移动 v1.1 画板，避免 Pencil 设计源停留在旧 Gallery notes 和三条 Usage 规则口径。

## 范围

- 新增首页桌面 v1.1 画板。
- 新增首页移动 v1.1 画板。
- 新增项目详情模板 v1.1 画板。
- 新增 Mascot 页 v1.1 画板。
- 新增 About 页 v1.1 画板。
- 新增项目详情模板、Mascot 页和 About 页的独立 `390px` 移动版 v1.1 画板。
- 同步 Mascot 页桌面与独立移动 v1.1 画板中的 Gallery 状态 / 边界 / 后续处理，以及 Usage 四组边界。
- 使用已审核公开素材或代码内视觉语义，不引入新素材。

## 不做

- 不修改 React 代码。
- 不推送、不部署、不补跑线上 smoke。
- 不接入新的 seasonal 活动图。
- 不启动 Mascot 单张拆分、缩略图或下载入口。
- 不把代码内临时项目标识描述为正式 Logo。
- 不删除原 v1 画板。

## 设计要求

- v1.1 画板应反映当前 React 页面结构和素材治理口径，而不是继续保留未审核候选图占位。
- 首页应体现 Radish Orbit 中心站姿图、四项目节点、素材状态槽、项目 band、生态说明、公开入口和 Mascot 入口。
- 项目详情模板应体现 Hero、Page flow、Public Surface、Documentation、Capabilities、Matrix 和素材审核说明。
- Mascot 页应体现完全体站姿主视觉、三形态、Gallery 整图预览和下载关闭口径。
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

## 完成标准

- v1.1 画板覆盖首页桌面、首页移动、项目详情模板、Mascot 页、About 页，以及项目详情模板、Mascot 页和 About 页的独立 `390px` 移动版。
- 新画板明确表达当前实现中的已审核素材、临时项目标识、公开文档入口和素材边界。
- 原 v1 画板保留，作为早期设计记录。
- 文档和开发日志同步记录。

## 后续事项

- 如 React 页面后续大幅调整，再回到 v1.1 设计源同步桌面与移动端结构。
- 如新增正式 Logo、真实截图、视频或 seasonal 活动，再单独更新对应目标文档和设计源。
- 项目详情模板、Mascot 页和 About 页的独立移动版已补齐；后续若页面继续改版，再以这些移动稿作为对照基线。
