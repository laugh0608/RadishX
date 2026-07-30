# 09 各项目接入映射与待收敛清单

本章登记各项目现有 token / 规范与 family-ui 的对应关系、值差异与接入状态。各项目执行迁移时以 [10-migration-playbook.md](10-migration-playbook.md) 为操作手册，完成后回写本章。

## 1. 接入状态

| 项目 | Profile | 现有规范 | 接入状态 |
| --- | --- | --- | --- |
| RadishX 官网 | Brand | `docs/design/visual-guidelines.md` + `ui-addendum.md`（`--rx-*`） | 已完整接入：token 别名 + 硬编码颜色收敛 + 差异附录（2026-07-11） |
| Radish | Brand（公开 Web）+ Workbench（私域 / Console / Flutter 移动原生变体） | `Docs/frontend/ui-addendum.md` + `visual-theme-spec.md`（`--rd-*` / L2 别名） | 接入中：A / B 治理与 Token 基线已完成（2026-07-30），Pencil / 组件 / 页面族待推进 |
| RadishMind | Workbench | `docs/radishmind-ui-design-spec.md`（`--rm-*`） | 待迁移 |
| RadishFlow | Workbench | `studio-visual-system.md`（`studio-*`） | 已归档项目；规范适用，迁移不设时限 |
| RadishCatalyst | Game + Workbench（Wiki / 工具） | `docs/product/visual-and-ui-direction.md` | 游戏面自治；Wiki / 工具启动时按本规范 |
| RadishLex | Workbench（管理端）+ 候选窗特例 | 无 | 绿地项目，直接按本规范建 token 层 |

## 2. Token 映射表（L2 别名 → L1）

### Radish `--theme-*` → `--rd-*`

| 现有 | family-ui | 值差异 |
| --- | --- | --- |
| `--theme-bg-app` `#f4efe6` | `--rd-bg-app` | 无 |
| `--theme-bg-surface` `#fbf7f0` | `--rd-bg-surface` | 无 |
| `--theme-bg-muted` `#efe7db` | `--rd-bg-muted` | 无 |
| `--theme-text-primary` `#2f2a25` | `--rd-text-primary` | 无 |
| `--theme-text-secondary` `#6a5c4f` | `--rd-text-secondary` | 无 |
| `--theme-border-soft` `#d9cbb9` | `--rd-border-soft` | 实色 → 半透明，视觉近似 |
| `--theme-brand-primary` `#b24057` | `--rd-brand-primary` | 无 |
| `--theme-brand-soft` `#ecd3db` | `--rd-brand-soft` | 实色 → 半透明 |
| `--theme-accent-jade` `#4f9c83` | `--rd-accent-jade` | 无 |
| `--theme-accent-ink` `#435c74` | `--rd-accent-ink` | 无 |
| `--theme-accent-earth` `#886349` | `--rd-accent-earth` | 无 |
| `--theme-pattern-line` `rgba(122,92,64,0.18)` | `--rd-pattern-line` | 0.18 → 0.14 |
| `--theme-font-serif` | `--rd-font-serif` | 无 |

### Radish `--console-*` → `--rd-*`（Workbench 覆盖）

| 现有 | family-ui | 值差异 |
| --- | --- | --- |
| `--console-bg-app` `#f5f1ea` | `--rd-bg-app`(wb) `#f7f4ee` | 微调统一 |
| `--console-bg-surface` `#fffdf8` | `--rd-bg-surface`(wb) | 无 |
| `--console-bg-muted` `#f0ebe3` | `--rd-bg-muted`(wb) `#f3eee5` | 微调统一 |
| `--console-text-primary` `#25221f` | `--rd-text-primary` `#2f2a25` | 统一为家族值 |
| `--console-brand-primary` `#314b63` | `--rd-action-primary` `#435c74` | **语义修正**：console 的"蓝主色"本质是操作色 |
| `--console-success` `#2f806c` | `--rd-state-success` `#4f9c83` | 统一为家族值 |
| `--console-danger` `#a7374d` | `--rd-state-danger` `#c3564d` | 统一为家族值 |
| `--console-warning-*`（基于 `#faad14`） | `--rd-state-warning` `#b5826d` | **收敛**：废弃 AntD 黄 |
| `--console-radius-panel` `12px` | `--rd-radius-md` | 无 |
| `--console-radius-control` `8px` | `--rd-radius-sm` | 无 |

### RadishMind `--rm-*` → `--rd-*`

`--rm-bg-app/surface/muted` → 对应 `(wb)` 值；`--rm-text-*`、`--rd-border-soft` 同名对应；`--rm-brand-primary`（克制蓝）→ `--rd-action-primary`；`--rm-state-success/warning/danger` → 对应家族状态色；`--rm-state-blocked` → danger 柔底组合语义；侧栏灰绿底可保留为项目差异（映射到 `--rd-bg-muted` 或附录自定义）。

### RadishFlow `studio-*` → `--rd-*`

`studio-bg-*` / `studio-text-*` / `studio-border-*` → 同名语义；`studio-accent-primary`（克制蓝）→ `--rd-action-primary`；`studio-success/warning/error/info/draft` → success / warning / danger / info / neutral；`studio-canvas-grid` → `--rd-border-soft` 于 `--rd-bg-canvas` 上；`studio-canvas-unit/stream/port/attention` → 画布图元 token，**项目自治**，保留在差异附录。

### RadishX `--rx-*` → `--rd-*`

`--rx-*` 草案值与家族值同源，一一对应改前缀即可；`--rx-state-warning` `#b5826d`、`--rx-state-danger` `#c3564d` 即家族值来源。`--rx-content-max-width` 等内容宽度 token 为站点层 token，保留 `--rx-*` 前缀不上升为家族层。

Radish 当前产品顺位为 Web 优先、Flutter 次级；Tauri 暂时弃用，不进入 UI、CI、发布或验收门禁，未来只有桌面原生价值、目标用户和维护预算同时明确时再重新评估。

## 3. 待收敛清单

各项目迁移时逐项处理，处理后勾除：

| # | 项目 | 现状 | 目标 | 影响面 | 建议时机 |
| --- | --- | --- | --- | --- | --- |
| 7 | 全家族 | 五套 token 前缀并存 | L2 别名 → 逐步替换为 `--rd-*` | — | 各项目节奏自定 |
| 8 | 全家族 | 暗色全表已定义（v26.7.2），RadishX 已落地验证；Radish 已接入四主题语义基线 | 各项目按 02 章暗色表 + `[data-rd-theme="dark"]` 接入 | 全局 | Radish 页面族视觉验收待 C / D 批，其余项目按各自节奏 |

Radish 已于 `2026-07-30` 完成原清单 `#1-#6` 的基础映射：Console warning / danger / success、Client danger、全局 border 别名和 Console 主文本均已收口到 `--rd-*`；视觉代表页和硬编码颜色清理仍按 C / D 批逐页面族验收。

## 4. 合规检查清单

### 必须统一（迁移完成的验收线）

- [ ] 组件只消费 `--rd-*`（或其 L2 别名），无新增硬编码色值。
- [ ] 状态色语义与 02 章一致；danger 与品牌红已区分。
- [ ] 字体栈与衬线边界符合 03 章。
- [ ] 图标 + 颜色 + 文字双通道表达状态。
- [ ] Mascot 使用符合 08 章边界。
- [ ] 无 01 章避免方向清单中的元素。

### 强烈建议

- [ ] 间距 / 圆角 / 阴影取自 04 章阶梯。
- [ ] 组件形态与 06 章一致，偏离处在差异附录说明理由。
- [ ] 断点与响应式规则符合 07 章；窄屏为重排而非缩放。

### 项目自治（差异附录必须登记）

- [ ] 领域组件清单已列出（画布图元 / HUD / 候选窗等）。
- [ ] 项目 accent 分工与 02 章登记一致。
