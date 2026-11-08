# RadishUI 消费试点

状态：已完成（本地试点，2026-11-08 所有者确认视觉；未合并 / 部署）
最后更新：2026-11-08
主要归属：品牌视觉与素材（家族 UI 参考规范）
协同：页面与交互（About 联系区）、质量与发布（构建与浏览器检查）

## 目标

验证 RadishUI 的 React 组件与 token 能否在 RadishX 真实站点、真实构建链路中消费。首轮只选 About 页一个入口区，用共享 `Button` 打开共享 `Dialog`，记录版本、token 桥接、例外、验证和回滚。

## 背景

- RadishUI 第一版视觉基准已于 2026-11-07 登记；P2 需要真实产品消费证据。
- 所有者于 2026-11-08 选定 RadishX 作为首个试点产品，并选定 About 页 RadishUI 入口卡。
- RadishX 已有一份 family-ui v26.7.3 的 `--rd-*` token 副本和 `data-rd-theme` 暗色机制；RadishUI 组件直接消费 `--rd-*`，因此需要在站点现有 token 层上做桥接，而不是全量替换。

## 范围

- `src/main.tsx`：引入 RadishUI tokens、组件样式；调整顺序，使旧 family-ui 副本覆盖同名变量。
- `src/pages/AboutPage.tsx`：把现有“访问 RadishUI”入口改为入口卡，使用共享 `Button` 打开共享 `Dialog`；Dialog 内保留真实 `ui.radishx.com` 链接。
- `src/styles/about-v2.css`：入口卡的布局与响应式。
- `vendor/radish-ui/`：固定 tarball。
- `package.json` / `package-lock.json`：新增 `@radish-ui/react`、`@radish-ui/tokens` 及其依赖。
- 本文件、功能索引、当前规划、本周日志。

## 不做

- 不把 RadishX 全量切换到 RadishUI token，不改 `family-ui-tokens.css` 的存量值。
- 不改全局外壳、路由、其他页面、Mascot、项目详情或内容数据。
- 不引入 Input / Select / Toast / Tabs 等其他组件；本轮只 Button + Dialog。
- 不推送、不部署、不改 Vercel / DNS；不合并到 `master`。
- 不把试点包装成正式发布或全部页面采用。

## 依赖与版本

| 包 | 来源 | 版本 | sha256 |
| --- | --- | --- | --- |
| `@radish-ui/react` | `vendor/radish-ui/radish-ui-react-0.1.0.tgz` | 0.1.0 | `db73fdb8c6ad23f4d390b5adaee6fb8872ac6ce25bde06d898b86ddbfd87be44` |
| `@radish-ui/tokens` | `vendor/radish-ui/radish-ui-tokens-0.1.0.tgz` | 0.1.0 | `b929890d1349acc05254805a8cd7cc299bc8606213735e275e496074cbc10276` |

- RadishUI 源提交：`dev` @ `a13b68d`（tokens 打包修复）。
- tarball 以 `file:` 依赖固定；不使用浮动 latest，不直接指向兄弟仓库目录。
- 共享包依赖 `radix-ui@1.8.1`（55 个 `@radix-ui/*` 子包）与 `lucide-react@1.68.0`；试点的安装面较大，是否长期接受待后续评估。
- 例外：`@radish-ui/react` 仍是 TS 源码直发，没有 `dist` / `.d.ts`；依赖 RadishX 的 Vite + TS `Bundler` 转译。

## Token 桥接

`src/main.tsx` 顺序：

1. `@radish-ui/tokens/tokens.css`
2. `./styles/family-ui-tokens.css`（旧副本，覆盖同名 `--rd-*`，保留站点暖色）
3. `./styles/tokens.css`（`--rx-*` 映射）
4. `./styles/global.css` 与页面样式
5. `@radish-ui/react/styles.css`（共享组件样式）

原则：只补齐 RadishUI 组件需要而旧副本缺少的结构变量（control height、font-size、radius、shadow、text-action、bg-selected、overlay 等）；不改写旧副本的存量值；不宣称 RadishX 已采用 RadishUI token 版本。验证首页、项目页、Mascot 与 About 其余区域视觉不变。

## 设计要求

- 入口卡延续 About domains 区的暖色卡片语言，不另起一套视觉。
- 共享 Button 作为入口动作，打开 Dialog；Dialog 标题、说明、正文与真实外链完整。
- Dialog 关闭按钮、Escape、初始焦点与焦点恢复按共享组件合同。
- 390px 与 1440px 均不横向溢出；入口卡在窄屏堆叠。
- 明暗主题下入口卡、Button、Dialog 可读；站点已有 `data-rd-theme`。

## 开发任务

1. 建 `feature/radishui-about-entry`，固定 tarball 到 `vendor/radish-ui/`。
2. 安装依赖，更新 `package.json` / lockfile。
3. 调整 `main.tsx` 样式顺序，接入共享组件样式。
4. About 页入口卡 + Dialog；补 `about-v2.css`。
5. 构建、类型检查、浏览器检查、其它页面视觉回归。
6. 更新本文件、功能索引、当前规划、本周日志。

## 验证

- `npm run build`（含 `tsc --noEmit`）通过。
- `npm run type-check` 通过。
- 浏览器：`/about` 1440×900 / 390×844，明暗；Button 打开 Dialog、标题、说明、正文、外链可见，Escape 关闭，焦点回到 Button，Tab 顺序合理，无横向溢出，无 pageerror。
- 其它页面（`/`、项目页、`/mascot`）在 1440 / 390 下无新增横向溢出或明显视觉回归。
- `git diff --check` 通过。
- 实际结果写入本周日志；未执行的项明确标注。

## 本轮结果（2026-11-08）

- 分支：`feature/radishui-about-entry`；依赖通过两个 vendored tarball 固定，`package-lock.json` 新增 76 个包（`radix-ui@1.8.1`、`lucide-react@1.68.0` 及 Radix 子包）。
- 安装后 `npm audit` 有 4 个 high，均为安装前已存在的 `vite@8.0.16`、`postcss@8.5.15`、`nanoid@3.3.12`、`source-map-js@1.2.1`；未执行 `npm audit fix`，不归因于 RadishUI 试点。
- `npm run build`、`npm run type-check`、`npm run check:agent-guides`、`git diff --check` 通过。
- 浏览器 28/28 通过：`/about` 入口卡、共享 Button 打开 Dialog、标题 / 说明 / 外链、初始焦点在 Dialog 内、Tab 不离开 Dialog、Escape 关闭并回焦、390 / 1440 无横向溢出、明暗 token；`/`、`/mascot`、`/mind` 无横向溢出且旧暖色 token 值保留（`--rd-bg-app: #f4efe6`、`--rd-text-primary: #2f2a25`）；新增结构 token `--rd-control-height: 40px`；Dialog overlay z-index 70 覆盖 header z-index 20，打开时 `body` 滚动锁定。
- 视觉：入口卡延续 domains 区白卡；共享 Button 高 40px，比站点 `.button` 的 46px 略小，边框使用新 `--rd-border-control`、色调略冷；作为试点差异保留，所有者已确认接受。
- 截图在忽略目录 `output/playwright/radishui-pilot/`。
- 未覆盖：推送 / 部署 / 合并 `master`、Safari / Firefox、屏幕阅读器、全站暗色矩阵、真实用户验收；回滚步骤已记录，未实际执行（避免重建依赖树）。

## 完成标准

- About 入口卡在真实构建中可用，共享 Button + Dialog 交互与键盘 / 焦点通过。
- 站点现有暖色 token 与页面视觉未被全量替换；只新增共享组件所需结构变量。
- 采用版本、tarball sha256、RadishUI 源提交、依赖例外与回滚方式记录完整。
- 所有者已确认视觉与范围；未推送、未部署、未合并 `master`。

## 回滚

- 删除或关闭分支 `feature/radishui-about-entry`。
- 移除 `vendor/radish-ui/` 两个 tarball。
- 还原 `package.json` / `package-lock.json`，删除 `node_modules/@radish-ui` 与新增 Radix / lucide 依赖。
- 还原 `src/main.tsx` 引入顺序、`AboutPage.tsx` 入口卡与 `about-v2.css` 新增规则。
- 回滚后跑 `npm run build` 与 `/about` 浏览器检查。

## 后续

- 评估 55 个 Radix 子包的安装面是否可接受；必要时拆分共享包依赖或子路径导出。
- 评估 RadishUI React 包的 `dist` / 类型导出。
- 通过后再考虑 Nexus / Mind 的工作台页面采用。
