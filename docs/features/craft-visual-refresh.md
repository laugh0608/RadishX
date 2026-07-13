# craft 视觉基线落地（v1.2 → React 实现）

状态：已完成（Phase 0–5 全部落地并通过本地终验）
最后更新：2026-07-13

## 背景

设计源 `docs/design/sources/radishx-site-v0.pen` 已切换到 v1.2「craft」单基线（去框、留白、柔投影分层、段控主题切换、单列全宽交替 band、强调色克制），并已删除全部 v1 / v1.1 旧画板。目标启动时 React 实现（`src/`）仍是旧的「描边卡片仪表盘」视觉，现已完成 Phase 0–5 并通过全站本地终验。

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

## 进度记录

### 2026-07-12 Phase 1 + Phase 2 落地

Phase 1（CSS craft 基础层，`src/styles`）：

- `tokens.css` 新增 `--rx-shadow-panel` / `--rx-shadow-popover`（复用 family-ui `--rd-shadow-*`，亮 / 暗自适应）与 `--rx-radius-craft`（16）。
- `utilities.css` 给各 project tone 加语义变量 `--rx-tone`（jade / earth / ink / purple / grayjade），供 craft 色点消费。
- `global.css`：移除背景网格纹理（`body::before`）降噪；header 导航去容器边框改无框文字、active / hover 用 `text-primary`（删除暗色 nav pill 覆盖）；`.button--secondary` 改无框柔投影软按钮；共享卡片组（info-tile / document-card / repo-card / related-project / detail-panel / contact-panel / qr-panel / mascot-form）与 `.info-rail__item` 由描边改无框柔投影；`.mascot-sigil` 去框加柔投影。
- 主题切换控件由单图标循环改为三段段控（`ThemeToggle.tsx` 重写为 system / light / dark 直选，新增 `.theme-seg` 样式，active 段浮起）。

Phase 2（首页，`src/components/sections` + `global.css`）：

- hero orbit：容器、mascot 锚点、5 个 project 节点全部去描边改柔投影漂浮，节点用 `--rx-tone` 彩色点标识，圆角加大。
- project band：去描边、加大圆角与留白、柔投影漂浮；`.project-band__domain` 去上下描边。

验证：

- `npm run build`（tsc --noEmit + vite build）通过。
- 本机 Chrome headless + `vite preview` 截图：首页浅色桌面、深色桌面、浅色移动均为通透 craft，orbit 无框漂浮 + 彩色点、段控主题切换、软按钮、纸面无网格噪音，与 v1.2 设计源一致。
- 抽查 `/flow`、`/about`：全局基础层顺带把详情 / 关于页卡片、按钮、header 一并 craft 化，未破坏布局。

### 2026-07-13 Phase 3 五项目详情页落地

- 为五种 `.project-hero--*` tone 建立 `--rx-tone`，统一驱动 Hero 元信息圆点、项目柔光和媒体框强调。
- Hero 状态 chip 与三项 facts 从描边胶囊 / 小卡收敛为点状 mono meta；临时项目标识 glyph 改无框柔投影。
- 详情页主媒体外框改大圆角无框浮层，真实图片去内描边；审核 note / review 仅保留弱分隔，不再形成卡中卡。
- Page flow 从上下描边条改为无框柔投影浮层，四个导览入口去描边并保留 hover / focus 反馈。
- 主题段控触控目标从 `40×38` 补齐为 `44×44`，满足移动端触控建议。
- `npm run build` 与 `git diff --check` 通过；Playwright 覆盖五条详情路由的 `1440×900`、`390×844`，均无横向溢出、broken image 或 console error，每页保留 3 项 Hero facts 和 4 个 Page flow 入口。
- 截图抽查 `/flow` 跟随系统桌面、`/flow` 深色桌面、`/lex` 深色移动与 `/mind` 浅色移动，确认真实截图、代码内视觉、暗色和移动布局均保持 craft 层次。

### 2026-07-13 Phase 4 Mascot / About 落地

- Mascot Hero 主视觉、三形态、Gallery、首批单张表情与 Usage 卡片去除页面特有描边，统一为 craft 大圆角、纸面层次和柔投影。
- 三形态审核状态、Gallery / 表情候选状态与 Hero 摘要从描边 chip 收敛为带语义色点的 mono meta；审核说明保留弱分隔，不形成卡中卡。
- About Hero 摘要、微信公众号状态与 GitHub 仓库状态改为点状 meta；联系方式动作、二维码、仓库与域名卡片去除厚重描边，保持入口可点击性和信息边界。
- 本阶段只修改 `src/styles/global.css`，未改 JSX、数据、路由、文案、素材、域名或部署边界。
- `npm run build` 与 `git diff --check` 通过；Playwright 覆盖 `/mascot`、`/about` 的 `1440×900`、`390×844` 及亮 / 暗主题，无横向溢出、broken image、console error 或小于 `44px` 的交互目标。
- Mascot 结构保持 3 个形态、7 个 Gallery 预览、10 个单张表情候选、4 个 Usage 分组，22 张图片全部解码；About 保持 4 个联系方式、6 个仓库入口和 7 个域名入口。

### 2026-07-13 Phase 5 全站终验

- Playwright 覆盖首页、五个项目页、Mascot、About 与 404 共 9 条路径，在 `1440×900`、`390×844` 和跟随系统 / 亮色 / 深色三态下完成 54 个组合检查。
- 所有组合均保持单一 H1、`main#main-content`、skip link、导航语义、正确 robots / canonical 口径；无横向溢出、broken image、console error 或小于 `44px` 的交互目标。
- 截图人工抽查首页、Radish / Catalyst / Flow / Mind / Lex、Mascot、About 和 404；修复移动端导航与主题段控同排造成的视觉拥挤，改为“品牌 + 主题”首行与完整导航次行，并在 `320px` 补测无导航溢出。
- HTTP smoke 补齐 `/lex` 路由与 sitemap canonical 检查，关键路由计数从 8 更新为 9；28 个公开图片资源全部通过。
- `npm run check:local-release`、`npm run check:http-smoke -- --base-url http://127.0.0.1:4500`、`npm run build` 与 `git diff --check` 通过。
- QA artifact：`output/playwright/craft-phase5-2026-07-13/`，仅本地留存，不提交。

目标完成后进入维护期；后续只有页面、素材或部署发生变化时，才按本文件口径复跑受影响页面与发布检查。
