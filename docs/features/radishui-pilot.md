# RadishUI 组件消费与有限试点

状态：11 月 8 日临时消费已完成；11 月 11 日产品实施与技术验收完成（本地分支）；11 月 12 日所有者确认有限采用，生产发布待授权
最后更新：2026-11-12
主要归属：品牌视觉与素材（家族 UI 参考规范）
协同：页面与交互（About 联系区）、质量与发布（构建与浏览器检查）

<a id="formal-pilot-closeout"></a>

## 2026-11-10 有限试点收口计划

方案已获所有者确认，产品实现尚未开始。本次只更新两库文档，不包含安装、服务启动、切换 / 新建分支、推送、部署或合并授权。下文 11 月 8 日源码范围、产物哈希、验证和回滚说明保留为临时消费历史，不能直接用于新版试点登记。

### 已有基础与分工

- RadishUI 已有获确认的运行基线；本仓 `feature/radishui-about-entry` / `c6a3274` 仍是旧的全局样式与组件接入。
- RadishUI 11 月 9 日以源提交 `83e4f0f` 和 RadishX 主线 `c0f57ae` 在临时副本验证延迟加载、失败保留直达链接、卡片外壳与焦点交接，并演练回滚。证据由 RadishUI `docs/devlogs/2026-W46.md` 维护；未完成产品仓干净安装和 320px / 200% 检查。
- 本文拥有产品接入范围、站点品牌适配与验收；RadishUI 的 F-02.6 拥有共享包输入、组件合同与采用结论。两边引用同批源码、产物和证据，不分别维护两套接入清单。

### 一次有限实施与验收

1. 实施前重新核对两仓基线，决定旧分支复用或新建；固定候选的完整 RadishUI 源提交、两份 tarball SHA-256 和 lockfile integrity。相同 `26.11.1` 版本号不等于同一产物，不能沿用旧哈希冒充新候选。
2. 产品范围只含 `/about` 入口卡及其必要依赖、样式桥接和加载外壳。采用临时副本已验证的修正版：延迟加载共享 Button / Dialog 和组件样式，加载中与失败保留可聚焦的直达链接；成功替换当前已聚焦链接时交接到共享按钮，其他焦点不受影响，卡片布局稳定。
3. 在获安装与服务授权后，完成干净安装、锁文件核对、构建 / 类型检查，以及 1440 / 390 / 320px 和 200% 文字缩放的适用组合、明暗、加载中 / JS 与 CSS 失败、Dialog 初始焦点 / Tab / Escape / 回焦。确认其他页直入不加载入口 chunk，About 返回其他页后驻留样式无回归，并对 Safari / Firefox 做相关定向复验。
4. 同批实际执行回滚，恢复所选官网基线的源码、清单与锁文件并验证构建和 About 直达入口；记录差异和恢复结果。回滚不以删除历史分支或未经核对地手删依赖目录作为完成证明。
5. 汇总版本、桥接例外、安装与首包成本、交互结果、未验证面和回滚证据，由所有者确认视觉与采用决定。只对新失败或尚缺证据补验，不反复创建同范围临时原型。

### 出口与扩展条件

技术消费通过、视觉确认和产品采用收益分别记录。与原直达链接比较，说明 Dialog 提供了什么必要信息、是否增加访问步骤，以及共享交互带来的维护收益是否值得依赖和适配成本；不以“组件能运行”代替收益结论。

允许结论为“技术验证成立，当前产品收益有限，保留临时证据并暂不正式采用”。只有选定范围通过验收且所有者确认继续采用，RadishUI 才登记该范围的 F-02.6 采用；不代表整个 P2、全家族或所有平台完成。以后扩展先选择一个具有真实交互需求的产品场景，单独确定范围。

本站保留 `--rx-*`、现有暖色 token 与 Brand 规则，不自动迁移 family-ui 资料、其他页面或全局 token。Flutter、正式包发行、完整组件目录及所有辅助技术 / 真机矩阵不是本次前置；未覆盖面如实保留，发现影响本次关键路径的缺陷需处理。官网可独立形成不含试点的候选，不因本试点等待而停滞。

### 2026-11-11 正式试点实施与验收

在所有者授权范围内，沿用 `feature/radishui-about-entry`，从 `master` / `c0f57ae` 与 RadishUI `dev` / `83e4f0f` 实施。实现提交 `0ad9190` 仅改 `/about` 入口卡、延迟加载外壳、组件样式引入位置、两份 vendored tarball 与 lockfile integrity；未改其他页面、全局 token、路由或 `--rx-*`。产品分支仍是本地分支，未推送、未部署、未合并。

**共享包输入**

| 包 | 产物 | 大小 | SHA-256 | integrity |
| --- | --- | --- | --- | --- |
| `@radish-ui/react` | `radish-ui-react-26.11.1.tgz` | 13,175 B | `7014e222…` | `sha512-LuCLexx…` |
| `@radish-ui/tokens` | `radish-ui-tokens-26.11.1.tgz` | 1,747 B | `9c43c48f…` | `sha512-atGi5pu…` |

- 两份产物由 `83e4f0f` 的包源码产出；15 个文件逐个与源提交比对一致，且与 11 月 9 日演练产物和原型 lockfile integrity 相同。
- 旧 `984b471` 的 `e75c0f30…` / `9be3e763…` 只对应旧产物，不再用于本试点；相同 `26.11.1` 版本号不代替产物身份。
- 相对 `master`，lockfile 新增 76 条包记录（`radix-ui@1.8.1` 55 个子包、`lucide-react@1.68.0` 与浮层依赖），无删除。`npm ci` 干净安装 101 包，12 秒；随后 `npm run build` 与 `npm run type-check` 通过。

**首包与延迟加载**

- 干净安装后的构建产物与 11 月 9 日修正版原型哈希一致：`index-mHNdmuLs.js`、`index-C-EbYos9.css`、`RadishUIEntry-CMar8FRf.js`、`RadishUIEntry-uvlsmmbV.css`。
- HTML 直引 JS / CSS 的 gzip（level 6、mtime 0）合计 96,194 字节；同一 worktree 内 `master` / `c0f57ae` 的同口径为 94,380 字节，首包增加 1,814 字节。
- 入口 chunk 为 JS 15,474 + CSS 4,125 gzip 字节，只在 `/about` 请求；布局外壳保留 46px 动作区，加载前后卡片高度不变。

**浏览器验收**

- Chrome 157.0.8103.40：231 / 231。12 组布局为 1440×900、390×844、320×568 与 32px 基础字号 × 明暗，均无横向溢出；共享按钮 46px；Dialog 初始焦点、Tab 循环、Escape 关闭并回焦、滚动锁；延迟 1.8 秒时直达链接可聚焦，加载后焦点交接；JS 中断与 CSS 500 均保留可聚焦直达链接并记录预期控制台错误，无 pageerror；首页、Mascot、项目页直入不请求入口 chunk；从 About 返回首页后入口 CSS 驻留，正文 / 页头 / 卡片颜色与直入一致。
- Safari 27.0.1：9 / 9。1440 交互、焦点与回焦；390 延迟回退与焦点交接（页脚位移 0）；1440 暗色。Safari 窗口内容宽实测 1456px，390 由同源 iframe 固定。
- Firefox 159.0.1（headless）：9 / 9。三组同上；`document.hasFocus()` 为 false 属 headless 环境，activeElement、键盘与指针路径仍通过。
- 证据、脚本、截图与结果 JSON 在 RadishUI 忽略目录 `output/p2-consumer/2026-11-11-formal-pilot/`（35 张截图）；事实摘要见 [W46 记录](../devlogs/2026-W46.md#about-有限试点实施与验收)。

**回滚**

- 在 `/tmp` 以 `git worktree` 检出 `c0f57ae`，`npm ci` 24 包、`npm run build` 通过；预览后 `/about` 保留可聚焦直达链接，无 `.rd-button`、入口卡或入口 chunk 请求，1440 明暗与 390 无横向溢出（Chrome 3 组）。
- 验证后移除 worktree 与临时目录，分支、源码和 lockfile 未回退或删除；回滚不以删除历史分支或手删依赖目录作为证明。

**结论与未覆盖**

- 技术消费成立：版本、产物身份、干净安装、构建、交互、失败与回滚均有证据。视觉确认与采用收益由所有者分别判断；按出口可与原直达链接比较信息价值、访问步骤、维护收益和依赖成本，允许结论为暂不正式采用。
- 未覆盖：真实输入法、屏幕阅读器 / 辅助技术、实体设备、Windows / NVDA；200% 以 32px 基础字号模拟，不等同浏览器整页缩放；Firefox 使用 headless 窗口；Safari 1440 场景的窗口内容宽为 1456px。
- 本试点不代表 P2、全家族、React 18、Flutter 或正式发行完成；产品分支不推送、不部署、不合并。

### 2026-11-12 采用登记与发布状态

所有者于 2026-11-12 确认采用本次有限范围；RadishUI 侧已在 F-02.6 登记。本仓记录产品状态与发布边界。

- **采用范围**：`/about` 入口卡、共享 `Button` + `Dialog`、延迟加载外壳与直达链接回退；产品实现提交 `0ad9190`，同一分支包含已确认的 About 密度修订 `c92692e`。共享包固定为 RadishUI `83e4f0f` 的两份 `26.11.1` tarball。
- **未发布**：`feature/radishui-about-entry` 仍只在本地，未推送、未部署、未合并 `master`。采用决定不等于发布授权；推送分支、创建 PR、合并、部署与线上核验需分别确认，发布前不宣称生产已采用。
- **发布路径（待执行）**：确定沿用现有分支或从 `master` 新建发布分支；推送并创建 PR；审阅后合并 `master`；按托管流程部署并核验 `/about`、首包、入口 chunk 与回滚。发布后把线上提交、URL 与检查结果补到本文件。
- **回滚**：恢复直达入口、移除 vendored tarball 与桥接，已验证的回滚基线为 `master` / `c0f57ae`；线上回滚以 revert 合并提交为准，不删除共享历史。
- **范围边界**：只覆盖 About 入口卡与必要依赖；不扩展到其他页面、全站 token、family-ui 资料、React 18、Flutter 或正式发行。密度修订是产品视觉修订，不是 RadishUI 组件采用。

## 目标（11 月 8 日临时消费）

验证 RadishUI 的 React 组件与 token 能否在 RadishX 真实站点、真实构建链路中消费。首轮只选 About 页一个入口区，用共享 `Button` 打开共享 `Dialog`，记录版本、token 桥接、例外、验证和回滚。本测试不进入 RadishX 正式发布，也不计入 RadishUI F-02.6 产品采用。

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
| `@radish-ui/react` | `vendor/radish-ui/radish-ui-react-26.11.1.tgz` | 26.11.1 | `e75c0f30da0cde6bb07a5511a79382008fc2527dcb00d09d10ba890628f62f3f` |
| `@radish-ui/tokens` | `vendor/radish-ui/radish-ui-tokens-26.11.1.tgz` | 26.11.1 | `9be3e7635670872c12c2838b125d7ca56bc24229d4cef364a664a85c621dc14f` |

- RadishUI 源提交：`dev` @ `984b471`（家族日历版本 26.11.1 对齐；包含 tokens 打包修复）。
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

- 分支：`feature/radishui-about-entry`；依赖通过两个 vendored tarball（26.11.1）固定，`package-lock.json` 新增 76 个包（`radix-ui@1.8.1`、`lucide-react@1.68.0` 及 Radix 子包）。
- 安装后 `npm audit` 有 4 个 high，均为安装前已存在的 `vite@8.0.16`、`postcss@8.5.15`、`nanoid@3.3.12`、`source-map-js@1.2.1`；未执行 `npm audit fix`，不归因于 RadishUI 试点。
- `npm run build`、`npm run type-check`、`npm run check:agent-guides`、`git diff --check` 通过。
- 浏览器 28/28 通过：`/about` 入口卡、共享 Button 打开 Dialog、标题 / 说明 / 外链、初始焦点在 Dialog 内、Tab 不离开 Dialog、Escape 关闭并回焦、390 / 1440 无横向溢出、明暗 token；`/`、`/mascot`、`/mind` 无横向溢出且旧暖色 token 值保留（`--rd-bg-app: #f4efe6`、`--rd-text-primary: #2f2a25`）；新增结构 token `--rd-control-height: 40px`；Dialog overlay z-index 70 覆盖 header z-index 20，打开时 `body` 滚动锁定。
- 视觉：入口卡延续 domains 区白卡；共享 Button 高 40px，比站点 `.button` 的 46px 略小，边框使用新 `--rd-border-control`、色调略冷；作为试点差异保留，所有者已确认接受。
- 截图在忽略目录 `output/playwright/radishui-pilot/`。
- 未覆盖：推送 / 部署 / 合并 `master`、Safari / Firefox、屏幕阅读器、全站暗色矩阵、真实用户验收；回滚步骤已记录，未实际执行（避免重建依赖树）。

## 完成标准

以下为 11 月 8 日临时测试的完成标准，正式试点以[本次出口](#formal-pilot-closeout)为准，不由旧视觉确认或旧构建结果代签。

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

当前采用出口和扩展条件统一见[有限试点收口计划](#formal-pilot-closeout)。以下包工程问题保留评估依据，不自动变成本次接入的前置改造：

- 评估 55 个 Radix 子包的安装面是否可接受；必要时拆分共享包依赖或子路径导出。
- 评估 RadishUI React 包的 `dist` / 类型导出。
- 采用收益明确后，再选择一个真实产品交互场景；不预先承诺 Nexus / Mind 的整页迁移。
