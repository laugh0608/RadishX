# craft 视觉基线落地（v1.2 → React 实现）

状态：进行中（Phase 0 文档先行）
最后更新：2026-07-12

## 背景

设计源 `docs/design/sources/radishx-site-v0.pen` 已切换到 v1.2「craft」单基线（去框、留白、柔投影分层、段控主题切换、单列全宽交替 band、强调色克制），并已删除全部 v1 / v1.1 旧画板。但当前 React 实现（`src/`）仍是旧的「描边卡片仪表盘」视觉——访客看到的与设计源分叉。

按 Pencil-first 原则（设计定稿后进入实现）与 `docs` 冲突处理口径（以较新的一方统一修正），本目标把 v1.2 craft 落到 `src/` 实际页面，消除设计源与实现的分叉。

## 目标

把官网视觉从「描边卡片仪表盘」迁移到 v1.2 craft 手感，PC / 移动 / 暗色三态一致，零功能、文案、路由回归。

## 范围

- CSS craft 基础层：柔投影 token、去框 / elevation 语义类、留白节奏刻度、三段主题段控组件。
- 首页：hero orbit 无框漂浮、单列全宽交替 band、克制强调、Mascot 入口。
- 五个项目详情页（Radish / RadishCatalyst / RadishFlow / RadishMind / RadishLex）。
- Mascot 页、About 页。
- 三态（亮 / 暗 / 跟随系统）与响应式全覆盖。

## 不做

- 不改信息架构、路由、页面文案口径、素材边界。
- 不引入新素材、新依赖、新字体。
- 不改 family-ui `--rd-*` token 语义；craft 表现 token 只在站点层（`--rx-*` / 站点样式）新增。
- 不把代码内临时项目标识升级为正式 Logo。

## 分阶段

- Phase 0：文档先行——本文件 + `visual-guidelines.md` craft 口径 + planning 索引。
- Phase 1：CSS craft 基础层（柔投影 / 去框 / 留白刻度 / 段控组件），不改页面结构，零可见回归。
- Phase 2：首页（旗舰）迁移 + 三态 / 响应式验证。
- Phase 3：五个项目详情页迁移。
- Phase 4：Mascot 页 + About 页迁移。
- Phase 5：全站视觉 QA，逐页对照 v1.2 设计源。

## 验证

每阶段至少覆盖：

```bash
npm run build
```

并叠加类型检查、Lint、桌面视口 smoke、移动视口 smoke、暗色三态 smoke，关键页面截图逐页对照 v1.2 设计源。

## 完成标准

- 首页、五个项目详情页、Mascot 页、About 页在亮 / 暗 / 跟随三态下与 v1.2 设计源一致，无描边卡片残留。
- PC 与移动端均为一等目标，无溢出、遮挡、重叠。
- 零功能、文案、路由、素材边界回归。
- `docs/features/*`、`visual-guidelines.md`、`planning/current.md` 与当周 devlog 同步。

## 后续事项

- 每完成一个可验收阶段，回写本文件状态并同步 devlog。
- 若实现过程中发现 v1.2 设计源本身需微调，回到 Pencil 先改设计源再落实现，保持 Pencil-first。
