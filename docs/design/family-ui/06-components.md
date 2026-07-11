# 06 组件形态学

本章是形态学规范：定义结构、用色、行为与禁止事项，不提供代码。各技术栈按 [07-layout-platforms.md](07-layout-platforms.md) 的平台映射实现。参考图出处标注为 `ref-XX`（见 [references.md](references.md)）。

## 按钮

- 层级：primary（`--rd-action-primary` 实底 + `--rd-text-on-accent`）、secondary（`--rd-border-strong` 描边或 `--rd-action-soft` 柔底）、danger（`--rd-state-danger` 实底，仅确认破坏性动作）、ghost（无底，工具条内）。
- Brand 面 primary 可用 `--rd-brand-primary` 或 `--rd-bg-ink`。
- 尺寸：高 32 / 36 / 40px；圆角 `--rd-radius-sm`；图标 + 短动词文案。
- 同一行超过 5 个按钮时分组、折叠或进菜单（Flow 先例）。
- 禁用态必须可发现，并用 tooltip、相邻短文案或状态区说明原因。
- 禁止：塑料高光、夸张渐变、把灰 pill 当所有按钮默认形态。

## 输入与表单

- 字段结构固定：label + input + （unit）+ hint / validation（ref-16）。
- 输入底 `--rd-bg-surface` 或纯白，描边 `--rd-border-strong`，聚焦切换为 `--rd-focus-ring`；圆角 `--rd-radius-xs`～`sm`。
- 错误信息定位到字段，说明原因与下一步，不吞掉无效输入原因（Flow 先例）。
- 数值字段单位紧贴数值；表单内部禁止纹样底图。
- 行式编辑器形态（ref-10）：toggle + 多行时段 + 行内增删复制，用发丝分隔线不用卡片包裹。

## 状态 chip / 标签

- 形态：胶囊（`--rd-radius-pill`），柔化底 + 对应状态深字，高 20–24px，文案 1–3 词（ref-01/08/12）。
- 颜色只来自五个状态语义（[02-color.md](02-color.md)）；同一行 chip ≤ 5 个。
- 扩展语义组合：`BLOCKED` = danger 柔底 + 锁图标；`STALE` = warning 柔底 + 时钟；`READ ONLY` = neutral 柔底。状态词表项目自定（如 Mind 的 READY/STALE/BLOCKED、RadishX 的 Coming Soon），色彩语义全家族一致。
- chip 不承载长解释；不因位置不同重新定义含义。

## 表格

- 表头：`--rd-bg-muted` 浅底 + `--rd-text-secondary`，可排序列带方向指示（ref-14）。
- 行：hover 用 `--rd-bg-muted`，选中用 `--rd-action-soft`；行高 compact 40px / comfortable 52px。
- 对齐：数值右对齐 + tabular-nums，文本左对齐，状态列用 chip。
- 行内操作：图标按钮组（ref-02）或行尾 `…` 菜单；批量选择用首列 checkbox（ref-01）。
- 工具条：筛选 pill + 视图切换 + 搜索在表格上方一行（ref-06）。
- 空表格必须有空态说明；表格不承载长段解释。

## KPI 统计卡

- 结构：图标 + 标签（caption）→ 大数字（metric）→ 趋势 chip（↑↓ + 百分比，success / danger 柔底）（ref-01/07/15）。
- 一行 3–4 张，卡底 `--rd-bg-surface` + `--rd-border-soft`，不用重阴影。
- 趋势色只表达好坏语义；无变化用 neutral。

## 侧栏导航

- 宽度 220–280px；条目 = 图标 + 文案 +（计数徽标）；分组标题用 caption + `--rd-text-muted`（ref-03/06）。
- active 态：`--rd-action-soft` 柔底 + `--rd-text-primary` 加重（不用高饱和整块反色，此处明确不学 ref-03 的蓝色实底）。
- 底部固定区放账户 / 设置 / 边界提示（Mind 先例：read-only 边界放侧栏底部）。
- 可折叠为纯图标窄栏；移动端转为抽屉或底部导航（见 07 章）。

## 顶栏

- 结构：产品身份 + 主导航 / 面包屑 + 全局搜索 + 状态区 + 账户（ref-07/09）。
- 状态 chip 常驻数量 3–5 个封顶（Flow 先例）。
- Brand 面顶栏可半透明纸色，不做强玻璃拟态。

## Tab / 分段控件

- 下划线式（页面级）或胶囊分段式（面板级，ref-12）；可带计数（ref-08）。
- 选中态用文字加重 + `--rd-action-primary` 指示，不整块换色。

## Stepper 分步向导

- 结构：编号圆点 + 标题 + 连线；完成态 √ + `--rd-action-primary`，当前态实底，未来态 `--rd-border-strong` 描边（ref-16）。
- 每步底部固定 Back / 当前进度 / Continue；最后一步 Finish 带确认语义。

## 通知 / Toast / 时间线

- 通知条目：severity 图标 + 标题 + 摘要（≤ 2 行）+ 时间 + 级别 chip（ref-08）。
- 通知面板顶部按 severity 分 tab 并计数；提供「全部已读」。
- toast 用 `--rd-shadow-popover`，自动消失时长 ≥ 4s，危险操作结果不自动消失。
- 状态迁移时间线：旧态删除线 → 新态（ref-12），操作者 + 时间戳必须可见（审计感，Mind 先例）。

## 进度与流程指示

- 多段进度条：分段 + 当前步骤说明 + 预计时间（ref-13）；完成段用 success，当前段用 action。
- 不确定进度用骨架屏或轻脉冲，不用全屏 spinner 遮挡。

## 浮层（弹窗 / 抽屉 / 气泡）

- 弹窗：标题 + 关闭 + 主体 + 动作区右对齐；圆角 `--rd-radius-md`，阴影 popover 档（ref-04）。
- 内部已有完整卡片时外壳弱化边框，禁止双层大白框（Radish 先例）。
- 高频创作 / 编辑浮层压缩 header / body 留白，让编辑主体占第一屏（Radish 先例）。
- 危险动作弹窗必须写明动作结果（删除什么、覆盖什么）。
- 详情侧栏（抽屉）：字段行 = label 左 + 值右，分组间用发丝线（ref-11）。

## 卡片

- 底 `--rd-bg-surface` + `--rd-border-soft` + `--rd-shadow-panel`（或无阴影）；圆角按 Profile 档。
- 卡片用于独立信息对象，不嵌套卡片；信息层级靠留白与排版，不靠大面积重色块。

## 状态条（页面级）

- Workbench 页面顶部提供：总体状态（ready / loading / stale / failed / blocked）+ 数据来源 + last refresh + retry 入口（Mind 先例，家族推广为通用形态）。
- 失败态保留 last good 快照并明确标记，不清空已有可读数据。

## 空态 / 加载 / 错误

- 空态必须说明原因 + 下一步动作入口，不出现无解释空白页（Radish `WebStateSlot` 先例）。
- 加载用骨架屏保布局；错误说明失败类别与重试入口，不升级恐慌语气。
- Brand 面与轻量场景空态可用 Mascot 线稿或表情候选（边界见 [08-brand-assets.md](08-brand-assets.md)）。

## 命令 / 信息条

- 等宽字展示域名、仓库路径、命令，附复制按钮（RadishX 先例）；是信息展示辅助，不替代主导航。
