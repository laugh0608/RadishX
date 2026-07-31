# Radish 家族统一 UI 规范专题

## 目标

在 `docs/design/family-ui/` 维护一套跨产品可理解、可选用的通用 UI / 视觉参考：包含设计原则、语义 token、组件形态、布局与平台原则、质量自检以及 UI 参考素材。

family-ui 不承担项目治理职责。具体产品采用什么色系、如何实现、是否升级以及推进到什么阶段，由各自决定并在各自上下文中维护。

## 当前状态

- 当前版本：`v26.7.3`（2026-07-31，breaking）。
- 默认品牌参考色由胭脂调整为灰玉，操作色继续使用墨蓝；新增 `text-on-brand` 解决暗色亮品牌底的前景对比。
- 已移除具体项目配色分工、token 映射、接入状态、迁移步骤和升级窗口。
- `09-adoption.md` 已改为通用视觉质量自检，`10-migration-playbook.md` 已改为规范扩展与版本兼容原则；为保持历史链接稳定暂不改文件名。
- 27 张参考 UI 已集中迁入 `docs/design/family-ui/reference-ui/`，并在 `references.md` 中建立可点击索引。

## 范围

- `docs/design/family-ui/README.md` 与 01–10 章。
- `docs/design/family-ui/references.md` 与 `docs/design/family-ui/reference-ui/`。
- `docs/design/family-ui/tokens/tokens.json` 与 `tokens.css`。
- 与规范入口、设计源和素材路径直接相关的 RadishX 文档。

## 不做

- 不替任何具体项目分配品牌色、辅助色或 Profile。
- 不规定其他项目如何复制、引用、实现或升级 family-ui。
- 不登记其他项目的跟进进度、迁移窗口或待办。
- 不把外部参考截图用于官网、`public/`、产品页面或对外发布。
- 本轮不修改 RadishX React 页面；灰玉方向先通过独立 Pencil 设计页评审。

## 设计要求

- UI 参考是理解布局比例、密度、组件形态、状态表达和视觉效果的重要依据。
- 参考过程遵循「观察 → 拆解 → 提炼 → 转译」，不得照抄页面、品牌、图标、配色、文案或独特交互组合。
- 配色母板是候选集合，不绑定具体项目；语义 token 是参考实现，不是跨仓库推进命令。
- 文档、`tokens.json` 与 `tokens.css` 在同一版本内保持一致。
- 浅色、暗色、桌面和移动端都必须考虑可读性与语义稳定。

## 本轮任务

1. 将原素材区中的 UI 参考截图整体迁入 `docs/design/family-ui/reference-ui/`。
2. 更新 `references.md` 和所有入口文档中的素材路径。
3. 重写 family-ui 的治理边界，移除项目级配色、接入方式和进度跟踪。
4. 将默认品牌参考色切换为灰玉，补充 `text-on-brand` 语义并同步三份 token 真相源。
5. 运行引用、token 一致性、图片索引和 Markdown 检查。

## 验证

- family-ui 正文不再包含具体项目接入状态或配色分工。
- `references.md` 中 27 个图片链接与磁盘文件一一对应。
- 当前规范、入口与目标文档不再引用迁移前目录，历史开发日志除外。
- `02-color.md`、`tokens.json` 与 `tokens.css` 的品牌色和 `text-on-brand` 一致。
- `git diff --check` 通过。

## 完成标准

- family-ui 只保留通用规范、参考资料、质量自检与版本兼容原则。
- 参考 UI 与规范放在同一目录树内，索引可直接访问。
- 灰玉品牌参考在亮暗主题下均有可读的品牌前景色。
- RadishX 的页面实现保持不变，等待独立设计页确认后再决定是否迁移。
