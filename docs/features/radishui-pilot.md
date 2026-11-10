# RadishUI 组件消费与有限试点

状态：11 月 8 日临时消费已完成；11 月 10 日有限试点收口方案已确认，正式产品实施与采用验收待开始，未发布
最后更新：2026-11-10
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
