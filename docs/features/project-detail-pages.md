# 四个项目详情页

状态：首版已实现，已补公开文档入口
最后更新：2026-06-14

## 目标

让 Radish、RadishCatalyst、RadishFlow、RadishMind 四个项目详情页稳定说明项目定位、公开状态、GitHub 入口、未来域名和素材边界。

## 背景

四个项目详情页已完成独立素材只读审核，并在不修改兄弟项目的前提下接入低风险 Web 图或代码内视觉。页面需要持续避免把概念图、历史 UI baseline 或外部参考截图误表达为正式产品状态。

## 范围

- `/radish`
- `/catalyst`
- `/flow`
- `/mind`
- 项目数据层中的定位、状态、链接、未来域名、Public Surface 和主媒体元数据。
- `public/images/projects/` 中已审核 Web 图。

## 不做

- 不把兄弟项目代码或整包资源迁入 RadishX。
- 不读取或修改兄弟项目 `.pen` 文件。
- 不把外部产品参考截图用于官网正式页面。
- 不把概念图描述成实机截图。
- 不把 RadishFlow 历史 UI baseline 包装成继续公开维护或产品化承诺。

## 当前实现

- Radish：已接入 README 使用过的代表图 `radish-acg-web.jpg`。
- RadishCatalyst：已接入概念视觉 `radishcatalyst-rpg-exploration-concept-web.jpg`。
- RadishFlow：已接入历史 UI baseline `radishflow-workbench-concept-web.jpg`，页面状态为 `Archived`。
- RadishMind：未接入图片，使用代码内 `Protocol map` 表达协议、评测、工具编排和审计。
- 每页主媒体区展示 `Asset source`、`Usage boundary` 和 `Next material need`。
- 每页已补公开文档入口，只链接对应 GitHub 仓库 `dev` 分支中的 README / docs / wiki / status / contracts 等稳定入口，不复制文档正文。

## 设计要求

- 项目页比首页更克制，优先定位、状态、GitHub 和未来域名可读。
- 主媒体区应稳定占位，图片加载前后不造成布局跳动。
- 390px 移动端下 chip、按钮、长域名和说明文字必须换行，不允许横向滚动。
- 图像说明和素材治理文档口径保持一致。

## 开发任务

- 后续项目拥有稳定 Logo、真实截图或视频时，按项目单独审核并更新本文件。
- 如果接入视频，先确认来源、压缩策略、字幕 / 水印、移动端加载和降级图。
- RadishMind 后续优先补自有 Logo、Console 截图或真实可视化图。
- 已确认并接入公开文档入口：Radish 链接 `Docs/` 与快速开始，RadishCatalyst 链接 `docs/` 与 `wiki/`，RadishFlow 链接 `docs/` 与当前状态且保留 archived 口径，RadishMind 链接 `docs/` 与跨项目集成契约。

## 验证

- `npm run build`
- 桌面视口检查 `/radish`、`/catalyst`、`/flow`、`/mind`。
- 390px 移动端检查四个项目页。
- 检查图片实际加载、`alt` 合理、主媒体说明完整。
- 检查 GitHub 链接、公开文档入口、未来域名状态、禁用访问入口和矩阵回流入口。
- 本轮 Browser 检查 `/radish`、`/catalyst`、`/flow`、`/mind` 在 `1440x900` 与 `390x844` 下的 Documentation 卡片，确认每页 2 个文档入口、Public Surface 中 Docs 行、外链 `rel`、触控目标和横向溢出均符合预期。

## 完成标准

- 四个项目页在桌面和移动端无横向溢出。
- 每个项目的素材来源、使用边界和下一步需求清楚。
- 每个项目的公开文档入口与项目维护状态边界清楚。
- 新接入素材已记录到 `docs/assets/materials.md`，并生成 Web 优化版本。
- 没有未经审核图片进入正式页面。

## 后续事项

- 四个项目独立稳定 Logo。
- Radish / RadishCatalyst / RadishMind 的真实产品截图或可视化图。
- RadishCatalyst trailer 或 gameplay 视频素材审核。
- RadishFlow archived 页面长期口径复查。
