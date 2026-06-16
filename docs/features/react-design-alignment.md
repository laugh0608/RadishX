# React 与设计源对照校准

状态：已完成
最后更新：2026-06-16

## 目标

基于 `docs/design/sources/radishx-site-v0.pen` 中新增的 v1.1 精确实现稿，对照当前 React 官网实现，修正低风险的结构、间距、文案口径和响应式细节，让设计源与实际页面继续收敛。

## 背景

Pencil 设计源已新增首页桌面、首页移动、项目详情模板 Flow 示例、Mascot 页和 About 页 v1.1 画板。下一步应先用本地浏览器检查 React 页面与 v1.1 设计稿的主要差异，再决定是否需要小步修正实现。

## 范围

- `/` 首页桌面与 390px 移动端。
- `/flow` 项目详情页模板样例桌面与 390px 移动端。
- `/mascot` Mascot 页桌面与 390px 移动端。
- `/about` About 页桌面与 390px 移动端。
- 低风险 CSS、JSX 结构和文案口径调整。
- 必要的目标文档、规划和开发日志同步。

## 不做

- 不推送、不部署、不跑线上 smoke。
- 不引入新素材、新依赖或第三方服务。
- 不修改域名、Vercel、DNS 或 GitHub 远程配置。
- 不接入 seasonal 活动图。
- 不启动 Mascot 单张拆分、缩略图或下载入口。
- 不把临时项目标识描述为正式 Logo。

## 设计要求

- React 页面应优先遵循 v1.1 画板中的当前实现口径，但不为了像素级一致牺牲响应式和可读性。
- 首页继续保持 Radish Orbit、项目 band、素材边界和 Mascot 入口清楚。
- 项目详情页继续保证 Hero、Page flow、Public Surface、Documentation、Capabilities、Matrix 的扫读顺序。
- Mascot 页继续保证三形态、Gallery 整图预览和 Usage 规则可读，不开放下载。
- About 页继续保证联系方式、微信公众号二维码、仓库入口和域名边界可扫读。
- 390px 移动端不得出现横向滚动、文字遮挡、按钮挤压或图片变形。

## 开发任务

1. 已启动本地 Vite 服务。
2. 已用浏览器检查 `/`、`/flow`、`/mascot`、`/about` 的 `1440x900` 和 `390x844` 视口。
3. 已记录并处理本轮低风险实现差异。
4. 已执行 `npm run build`、`git diff --check` 和必要浏览器 smoke。
5. 已更新本文件、`docs/planning/current.md` 和本周开发日志。

## 本轮实现记录

- 首页项目 band 从抽象媒体框切换为与项目详情页一致的媒体口径：Radish、RadishCatalyst、RadishFlow 使用已审核代表图，RadishMind 使用代码内 `Evaluation loop` 自有视觉。
- 项目详情页 Hero 主媒体、Mascot Hero 主视觉和 About 微信二维码改为 `loading="eager"`、`decoding="async"`，并对首屏关键媒体使用 `fetchPriority="high"`。
- 首页项目 band 媒体使用 eager 加载但保持普通优先级，避免移动端滚动时项目代表图长时间不解码。
- 首页 RadishMind 紧凑媒体框在 390px 移动端压缩 `Evaluation loop`：隐藏 lanes、节点改两列、长说明限行，降低单个 band 的纵向压力。
- Mascot Gallery 和下方贴纸图继续使用 lazy，不改变下载关闭和整图预览边界。

## 对照结论

- 必须修正：首页项目 band 仍使用抽象媒体框，未对齐 v1.1 设计源和项目详情页代表视觉口径；已修正。
- 必须修正：项目详情页主媒体、Mascot Hero 和 About 二维码在本地浏览器中首屏解码不稳定；已通过加载优先级修正。
- 可后置：项目详情模板、Mascot 页和 About 页如果需要更细的移动设计表达，后续再新增独立移动版 Pencil 画板。
- 设计源需保持：本轮没有发现需要回改 v1.1 设计源的阻断问题。

## 验证

- `npm run build`
- `git diff --check`
- Browser 检查 `/`、`/flow`、`/mascot`、`/about` 在 `1440x900` 与 `390x844` 下无横向溢出。
- 检查关键图片加载、主要 section 可读、console 无 error。
- Browser 滚动检查 `/`、`/flow`、`/mascot`、`/about` 桌面端图片均完成加载，无横向溢出。
- Browser 检查移动端 `/` 项目 band 媒体、`/flow` 主媒体、`/mascot` 主视觉和 `/about` 二维码加载完成，无横向溢出。

## 完成标准

- 已形成清楚的对照结论。
- 低风险实现差异已修正或明确后置原因。
- 文档和开发日志同步记录本轮结果。
- 未改变部署、素材准入和项目业务边界。

## 后续事项

- 如项目详情页、Mascot 页或 About 页需要独立移动版设计稿，再回到 Pencil 新增移动画板。
- 如发现需要大幅重排的差异，另开目标，不混入本轮。
