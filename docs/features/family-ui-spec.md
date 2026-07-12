# Radish 家族统一 UI 规范专题

## 目标

在 RadishX 仓库建立服务整个 Radish 家族的统一 UI / 视觉设计规范（family-ui），作为家族级视觉真相源。未来各项目撤掉各自的通用 UI 专题，改为引用本规范并只保留项目差异附录。

## 背景

- 家族当前有五套 token 前缀并存：`--theme-*`（Radish client）、`--console-*`（Radish console）、`--rm-*`（RadishMind）、`studio-*`（RadishFlow）、`--rx-*`（RadishX 官网），且部分色值已实际分叉。
- Radish 主仓库 `Docs/frontend/visual-theme-spec.md` 与 `visual-color-reference.md` 提供了最成熟的视觉基线与人民币纸币色系配色母板。
- 项目所有者提供了 16 张现代工作台风格 UI 参考图（已入库 `assets/design-references/ui/`），作为家族 UI 结构与组件形态学参考。
- 合成方向：现代工作台骨架 × 纸墨印色气质；颜色以 Radish 配色母板为源。

## 范围

- `docs/design/family-ui/`：README、01-10 章、references.md、tokens/（tokens.json + tokens.css）。
- `assets/design-references/ui/`：16 张外部参考图（仅内部风格参考）。
- 入口文档同步：`docs/assets/materials.md`、`docs/design/visual-guidelines.md`、`docs/planning/current.md`、`docs/features/README.md`、`CLAUDE.md`、`AGENTS.md`、`README.md`、当周开发日志。

## 不做

- 不做具体页面或组件的代码实现与示例工程。
- 不修改兄弟项目仓库；各项目迁移由其自身按 `10-migration-playbook.md` 执行。
- 不把外部参考截图用于官网页面、`public/` 或任何对外发布。
- 本期不产出暗色模式全量 token 表（只给核心映射与原则，全表排期后续版本）。

## 设计要求

- 统一语义 token 前缀 `--rd-*`，双层结构：L0 原始母板 + L1 语义层；各项目现有前缀作为 L2 别名过渡。
- 品牌色与操作色拆分：`brand`（胭脂红识别）≠ `action`（工作面主操作，允许墨蓝系）。
- 定义三种表面 Profile：Brand 展示面 / Workbench 工作面 / Game 游戏面，共享 token 底座、应用强度不同。
- 合规三档：必须统一 / 强烈建议 / 项目自治；兄弟项目规范未来降级为「差异附录」而非全删。
- 必须覆盖：PC 与移动端、Web 与跨平台客户端（Tauri webview、egui、Flutter、Godot、输入法候选窗）。
- 强调通用性与差异性的边界，并为未来新增产品提供接入模板。

## 开发任务

1. 参考图复制入库并重命名（16 张）。
2. 撰写 `docs/design/family-ui/` 全部章节与 `references.md`。
3. 产出 `tokens/tokens.json`（机器可读）与 `tokens/tokens.css`（参考实现）。
4. 撰写 `09-adoption.md`（各项目映射与待收敛清单）与 `10-migration-playbook.md`（撤专题迁移说明书）。
5. 同步入口文档与素材治理文档。

## 验证

- `npm run build` 通过，确认官网构建不受影响。
- 章节间与 tokens 文件间色值、尺寸值一致性自查。
- 文档内部相对链接可达性检查。
- 参考图文件名、索引表与磁盘文件一一对应。

## 完成标准

- family-ui v26.7.1 全部章节与 tokens 文件入库，索引完整。
- 16 张参考图入库并在 `references.md` 与 `docs/assets/materials.md` 登记边界。
- 各入口文档同步完成，官网构建通过。

## 后续事项

- 暗色模式全量 token 表已随 v26.7.2 补全并由 RadishX 验证；后续做对比度全量量化核查。
- 各兄弟项目按迁移说明书逐个接入，并回写 `09-adoption.md` 登记状态。
- 新产品启动时按 `10-migration-playbook.md` 的接入模板执行。
