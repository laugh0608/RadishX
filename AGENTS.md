# RadishX 协作约定

本文件为 RadishX 仓库中的 AI 协作者与人工协作者提供统一协作规范。

## 称呼

- 对话开始或结束总结时，请称呼我为 `萝卜SAMA`。

## 语言规范

- 默认使用中文进行讨论、说明、提交总结和开发日志记录。
- 代码、命令、路径、配置键、类型名、接口名、URL 和外部产品名保留原文。
- 新增文档正文默认使用中文；文件名、目录名和稳定锚点优先使用英文。

## 项目定位

RadishX 是 Radish 系列项目的官网与统一入口，通过 GitHub 托管代码，并使用 Vercel 免费额度部署官网；当前主域为 `radishx.com`，`www.radishx.com` 作为兼容入口跳转到根域。

当前技术栈方向：

- Vite
- React
- TypeScript
- 静态多页面官网

页面范围：

- 首页
- 五个项目介绍页：Radish、RadishCatalyst、RadishFlow、RadishMind、RadishLex
- Mascot 虚拟形象页
- About 页面

## 文档真相源

`docs/` 是本仓库正式文档源。开始任务时按需读取：

1. `docs/planning/current.md`：当前阶段、范围和下一步。
2. `docs/features/README.md` 与对应 `docs/features/*.md`：页面、功能、素材治理和发布检查的设计与开发边界。
3. `docs/development/standards.md`：开发规范、响应式和验证要求。
4. `docs/design/visual-guidelines.md`：视觉方向、素材使用和页面气质。
5. `docs/design/family-ui/`：Radish 家族统一 UI / 视觉规范（family-ui），家族级视觉真相源。
6. `docs/deployment/vercel.md`：官网部署和域名边界。
7. `docs/assets/materials.md`：素材归档、审核和使用规则。

规则：

- 若 README、docs 和实现冲突，优先判断哪一方过期，再统一修正。
- 优先更新已有文档，不为一次性讨论创建大量散文档。
- `docs/planning/current.md` 只保留当前阶段、活跃目标、执行顺序和跨目标风险。
- 具体页面、功能、素材替换或发布检查目标写入 `docs/features/*.md`，避免把长任务清单堆在入口规划页。
- 关键入口文档保持简约，只描述当前事实、稳定入口和必要约束。
- 重大页面结构、视觉方向、域名策略、部署边界或协作规则变化，必须同步更新 `docs/`、`README.md`、`AGENTS.md` 和 `CLAUDE.md` 中对应内容。

## 协作流程

- 开始任务前，先检查工作区状态，并阅读与任务直接相关的文档。
- 若用户明确要求直接修改，且范围清晰、风险可控，则直接实施。
- 若用户没有明确要求直接修改，编写代码前应先说明方案。
- 若需求不明确，或改动会影响架构、部署、域名、视觉基线、素材版权或验证基线，则先说明判断并做必要澄清。
- 小规模、低风险、需求明确的文档、配置或素材整理类变更，可直接实施。
- 新增或重做页面、功能、素材替换、发布检查等可独立验收目标时，先创建或更新对应 `docs/features/*.md`，再进入实现。
- 新增功能或页面时，优先保证 PC 与移动端都可用，不把响应式适配放到最后补救。
- 每次完成可分割子步骤后，做匹配的必要验证。

## Agent 协同文件

- `AGENTS.md` 与 `CLAUDE.md` 应保持基本同步。
- 若某个协作文件更新了通用协作规则、执行边界、稳定入口引用或验证约定，另一个文件也应同步更新。
- 两个文件只允许保留与入口名称直接相关的表述差异，不应分叉实际协作规范。

## AI 执行边界

### 可直接执行

- 读取和修改仓库内代码、文档、配置和素材说明。
- `git status`、`git diff`、`git log` 等只读 Git 操作。
- 构建、类型检查、Lint、格式检查和静态验证。
- 明确的小规模提交操作。

### 需要先告知用户再执行

- 安装依赖，例如 `npm install`、`pnpm install`、`npm create`。
- 启动长期运行进程，例如 `npm run dev`。
- 创建 GitHub 远程仓库、推送远端分支、配置 Vercel 项目或修改 DNS。
- 引入新的外部图片、字体、依赖库或第三方服务。
- 批量压缩、裁切、重采样或覆盖原始素材。

### 默认不做

- 不跨工作区修改兄弟项目。
- 不把其他项目代码整包迁入当前仓库。
- 不执行破坏性 Git 操作。
- 不在未经审核的情况下把候选图片用于官网正式页面。

## 前端实现原则

- 设计和实现前先读取 `docs/design/visual-guidelines.md` 与 `docs/development/standards.md`，并以其中的视觉 token、Pencil-first 流程、响应式规则和验证口径为准。官网视觉的通用口径继承家族统一规范 `docs/design/family-ui/`（RadishX 属 Brand 展示面）。
- PC 和移动端都是一等目标，页面首版必须具备响应式布局。
- 参考 Apple 官网的节奏：强视觉、少文案、清晰层级、明确入口。
- 参考 Radish 的视觉规范：温润、克制、留白、纸感、印色感、低饱和、轻纹样。
- 可参考 MiMo Code 的现代东方页面节奏，例如居中首屏、命令条、横向图文 band 和水墨背景，但不复制其页面、图标、配色或文案。
- 新视觉设计稿先维护在 `docs/design/sources/radishx-site-v1.pen`；`radishx-site-v0.pen` 作为历史实现基线保留，确认后再进入 React 实现。
- 不复刻 Radish WebOS，也不照搬 Console 管理后台结构。
- 首页和项目页应使用真实项目、角色或截图资产，不使用空泛占位图。
- 页面文字必须在移动端和桌面端都不溢出、不遮挡、不互相重叠。
- 视觉装饰不能压过可读性；背景纹理和图形在移动端应进一步降低密度。
- 实现样式优先使用 `--rx-*` 语义 token，不在 JSX 中散落硬编码颜色和复杂样式值。
- 新增基础控件前先判断是否能用简单语义 HTML、CSS 和现有组件完成。

## 验证要求

项目初始化后，默认验证入口以 `package.json` scripts 为准。预期至少包含：

```bash
npm run build
```

有条件时还应覆盖：

- TypeScript 类型检查
- Lint
- PC 视图 smoke
- 移动视图 smoke
- 关键页面截图检查

涉及视觉、布局或响应式的改动，必须至少检查一个桌面视口和一个移动视口。

## 仓库结构

- `src/`：后续 Vite / React 源码。
- `public/`：后续公开静态资源。
- `assets/`：当前候选视觉素材、虚拟形象和社交媒体图片。
- `docs/`：开发规范、规划、部署、素材和日志文档。
- `dist/`：构建输出，不提交。

## Git 提交规范

- 使用简洁明确的 Conventional Commits 风格。
- 常用类型：`feat`、`fix`、`docs`、`refactor`、`test`、`chore`、`ci`、`build`、`perf`、`revert`。
- 优先把代码改动和文档改动按主题拆分。
- 不添加 AI 协作者署名。
- 提交前至少确认本次改动对应的必要验证已经执行。

## 开发日志

- 重要推进记录到 `docs/devlogs/YYYY-Www.md`。
- 周志记录包含：本周目标、完成情况、关键决策、验证记录、风险与未完成项、下周建议。
- 日期和周次使用 Asia/Shanghai（UTC+8）。
