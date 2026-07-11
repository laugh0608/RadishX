# RadishX 官网 UI 差异附录

- 遵循：RadishX family-ui `2026-07-11`（`docs/design/family-ui/`）
- Profile：Brand 展示面
- 主 accent：全色系编排（官网做家族陈列）；遵守同屏 ≤ 2 组强色

本附录是 family-ui [10-migration-playbook.md](family-ui/10-migration-playbook.md) §4 定义的标准差异附录，RadishX 作为家族首个完整接入样例。站点页面视觉指南（页面节奏、素材边界）见 [visual-guidelines.md](visual-guidelines.md)。

## Token 实现

- token 文件位置：`src/styles/family-ui-tokens.css`（从 `docs/design/family-ui/tokens/tokens.css` 复制的 `--rd-*` 上游）。
- 技术栈映射方式：CSS 直用；引入顺序 `family-ui-tokens.css → tokens.css → global.css → utilities.css`（见 `src/main.tsx`）。
- L2 别名层：`src/styles/tokens.css`，站点 `--rx-*` 全部为 `var(--rd-*)` 的别名。
- 组件、`global.css`、`utilities.css` 只消费 `--rx-*`；硬编码颜色已收敛为 `color-mix(in srgb, var(--rx-*) N%, transparent)`，仅保留中性白/黑（node 高光、mask 遮罩）。

## 站点特有 token（不上升 family-ui）

| Token | 用途 |
| --- | --- |
| `--rx-font-body` / `--rx-font-heading` | Brand 面品牌字体（Inter / Geist） |
| `--rx-space-page-x` / `--rx-content-max` | 页面边距与内容宽度 |
| `--rx-shadow-color` | 阴影暖棕分量 `91, 66, 44`（供 `rgba()` 叠加） |
| `--rx-state-success-strong` / `--rx-state-warning-strong` | 状态 chip 深字（family-ui 暂未定义，后续可提请上升） |

## 领域自治组件

| 组件 | 位置 | 说明 |
| --- | --- | --- |
| Radish Orbit 星图 | `HeroOrbit.tsx` + `global.css` | 首页五项目环绕主视觉，Brand 面专属；桌面 5 点环绕、移动流式堆叠 |
| 代码内项目视觉 | `MediaFrame.tsx` + `global.css` | 无正式素材时的临时项目视觉（`.mind-diagram`），装饰色随 `--rx-media-accent`（mind 紫 / lex 灰玉） |
| Mascot 展示组件 | `MascotPage.tsx` 等 | 萝小白三形态与 Gallery，遵守 `docs/assets/materials.md` 素材审核边界 |

## 与 family-ui 的已知偏离

| 条款 | 偏离内容 | 理由 | 计划 |
| --- | --- | --- | --- |
| 03 字体 | Brand 面正文用 Inter / Geist 而非纯系统栈 | 官网品牌表达 | 保留；family-ui 允许 Brand 面品牌字体 |
| 状态 chip 深字 | 用站点 `--rx-state-*-strong` | family-ui 未定义状态深字变体 | 后续提请上升 family-ui |
| focus 环 | 用品牌红而非 family-ui 墨蓝 focus-ring | Brand 面品牌一致性 | 保留 |

## 维护规则

- 通用条款变更走 family-ui，不在本附录扩写。
- family-ui 非破坏性更新后择机跟进，更新上方遵循版本日期；破坏性更新按其迁移窗口执行。
- 本项目视觉收敛已完成（硬编码 → token）；后续新增样式只消费 `--rx-*`，不再引入硬编码颜色。
