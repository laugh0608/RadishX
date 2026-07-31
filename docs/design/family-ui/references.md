# 参考图索引与版权口径

本页登记 [`reference-ui/`](reference-ui/) 中的 27 张外部 UI 风格参考图，并说明每张图值得学习的视觉关系、明确不学的表面特征以及对应规范章节。目录名中的 `reference` 明确这些截图只承担观察与灵感转译作用，不是实现素材库。

## 为什么参考 UI 很重要

文字规范与 token 只能描述规则，参考 UI 才能直观呈现空间比例、内容密度、视觉重量、留白节奏、浮层纵深和状态层级。设计重要页面时，应把本索引作为视觉理解材料，选择与当前界面类型相关的截图进行观察和拆解。

参考的目标是获得成熟的判断力，而不是获得可复制的答案。应借鉴其中有效的灵感和视觉效果，再依据自身内容、品牌、平台与交互重新组织；如果最终页面只是在参考图上替换颜色、Logo 或文案，就不属于合格的转译。

## 版权与使用边界

- 全部为**外部产品界面截图**（可识别来源已标注），仅用于内部视觉观察与原则提炼。
- 禁止进入 `public/`、禁止用于官网或任何产品页面实现素材、禁止对外分发或再托管。
- 参考关系是「观察 → 拆解 → 提炼 → 转译」：可吸收布局、密度、组件形态与状态表达方式；**不得复制**其页面、图标、配色、品牌元素、文案或独特交互组合。
- 截图本身不是模板、设计系统组件或可复用产品素材；不得通过裁切、描摹、换色或重排后用于对外界面。

## 索引

| 文件 | 来源 / 内容 | 主要学习点 | 明确不学 | 对应章节 |
| --- | --- | --- | --- | --- |
| [`ui-ref-01-ecommerce-orders-table-kpi.png`](reference-ui/ui-ref-01-ecommerce-orders-table-kpi.png) | 电商客户列表 + KPI 卡 | KPI 卡结构（图标 + 标签 + 大数字 + 趋势小 chip）、表格行内下拉、软色状态 chip、pill 筛选器 | 纯灰白底色 | 02、06 |
| [`ui-ref-02-orders-table-row-actions.png`](reference-ui/ui-ref-02-orders-table-row-actions.png) | 同系订单表变体 | 行内操作图标按钮组、价格 chip、分页器形态 | 同上 | 06 |
| [`ui-ref-03-hr-dashboard-sidebar-revenue.png`](reference-ui/ui-ref-03-hr-dashboard-sidebar-revenue.png) | BoardUI HR 仪表盘 | 侧栏导航（图标 + 文字 + 计数徽标）、人员卡、面积图的克制用色 | 高饱和蓝色整块 active 态（规范用柔底） | 06、07 |
| [`ui-ref-04-kanban-task-detail-overlay.jpeg`](reference-ui/ui-ref-04-kanban-task-detail-overlay.jpeg) | 任务看板 + 详情浮层 | 看板卡片信息层级、详情浮层的字段行结构、子任务嵌套、评论区 | 紫色 accent | 06 |
| [`ui-ref-05-affine-settings-appearance.png`](reference-ui/ui-ref-05-affine-settings-appearance.png) | AFFiNE 设置（中文） | 设置页左导航 + 右表单分区、浅色 / 深色 / 跟随系统三态、中文界面排版密度 | — | 02（暗色）、06、07 |
| [`ui-ref-06-crm-workflows-list-toggles.png`](reference-ui/ui-ref-06-crm-workflows-list-toggles.png) | CloseCRM 工作流列表 | 列表页工具条（筛选 + 视图切换 + 搜索 + 导入）、行内 toggle、Active/Paused 状态语义 | 紫蓝 accent | 06 |
| [`ui-ref-07-automation-dashboard-kpi-table.png`](reference-ui/ui-ref-07-automation-dashboard-kpi-table.png) | FlowAI 仪表盘 | KPI 卡 + 主表格 + 模板卡三段式页面节奏、成功率数值分级着色 | — | 06、07 |
| [`ui-ref-08-notification-panel-severity.png`](reference-ui/ui-ref-08-notification-panel-severity.png) | FlowAI 通知面板 | 通知抽屉：severity tab 计数、条目 = 图标 + 标题 + 摘要 + 时间 + 级别 chip | 荧光色 | 06 |
| [`ui-ref-09-automation-dashboard-full.png`](reference-ui/ui-ref-09-automation-dashboard-full.png) | FlowAI 仪表盘全景 | 整页布局比例：侧栏 / 主区 / 卡片间距节奏 | — | 07 |
| [`ui-ref-10-availability-schedule-editor.png`](reference-ui/ui-ref-10-availability-schedule-editor.png) | 日程可用性编辑器 | 极简行式表单、toggle + 多时段行 + 行内增删复制、发丝分隔线 | — | 06 |
| [`ui-ref-11-incident-details-sidebar.jpeg`](reference-ui/ui-ref-11-incident-details-sidebar.jpeg) | 事故详情右栏 | 详情侧栏字段行（label 左、值右）、外部集成入口的克制形态 | — | 06 |
| [`ui-ref-12-incident-timeline-updates.jpeg`](reference-ui/ui-ref-12-incident-timeline-updates.jpeg) | 事故页 + 时间线 | 状态迁移时间线（旧态删除线 → 新态）、Resolved/High 状态语义并置、tab 分段 | 橙色品牌 accent | 06 |
| [`ui-ref-13-order-fulfillment-progress.jpeg`](reference-ui/ui-ref-13-order-fulfillment-progress.jpeg) | Lynk 订单履约 | 多段进度条 + 当前步骤说明 + ETA、SKU 引用 chip、金额右对齐 | 蓝色 chip 配色 | 06 |
| [`ui-ref-14-ats-candidates-table-stages.jpeg`](reference-ui/ui-ref-14-ats-candidates-table-stages.jpeg) | ATS 候选人管理 | 阶段漏斗 KPI 分组、表格列排序指示、来源图标 + 文本双通道表达 | 紫色主按钮 | 06 |
| [`ui-ref-15-seo-dashboard-charts.jpeg`](reference-ui/ui-ref-15-seo-dashboard-charts.jpeg) | SEO 站点仪表盘 | 等宽字标签风格、柱线混合图、条状分布（keyword bars）、表格数值密度 | 蓝橙图表色（应按自身母板转译） | 02、06 |
| [`ui-ref-16-datasource-connection-wizard.jpeg`](reference-ui/ui-ref-16-datasource-connection-wizard.jpeg) | 数据源连接向导 | 四步 stepper（编号 → 完成 √ + 连线）、选择卡网格、表单双列、成功状态条、radio 组 | 蓝色 accent | 06 |
| [`ui-ref-17-hr-dashboard-attendance-heatmap.jpeg`](reference-ui/ui-ref-17-hr-dashboard-attendance-heatmap.jpeg) | Wiko HR 管理仪表盘 | employee manager 侧栏分组、出勤热力图（小时 × 星期）、设备占比条、KPI + 出勤表格三段 | 青绿整块高饱和 | 06、07 |
| [`ui-ref-18-legal-calendar-workspace.jpeg`](reference-ui/ui-ref-18-legal-calendar-workspace.jpeg) | 律所 claim 工作台 Calendar | 侧栏功能 + Clients 分组、大字页面标题 + 计数徽章、Day/Week/Month 分段、日历网格 | 紫色 accent | 06、07 |
| [`ui-ref-19-docs-account-space-switcher.jpeg`](reference-ui/ui-ref-19-docs-account-space-switcher.jpeg) | 文档应用账户菜单 | 账户下拉（头像 + 状态 + 快捷编号）、space 切换子菜单、Appearance / Settings 分组 | 彩虹渐变头像 | 06 |
| [`ui-ref-20-dark-analytics-dashboard.jpeg`](reference-ui/ui-ref-20-dark-analytics-dashboard.jpeg) | NuxtLabs 深色分析仪表盘 | **深色主题**：KPI 卡趋势 chip、点阵世界地图、双色柱状图、深底表格；暗色下卡片 / 边框 / 前景层次 | — | 02（暗色）、06、07 |
| [`ui-ref-21-email-client-reading.jpeg`](reference-ui/ui-ref-21-email-client-reading.jpeg) | 邮件客户端阅读态 | 三栏（文件夹侧栏 + 邮件列表 + 阅读区）、附件卡、存储用量条、日期分组 | — | 06、07 |
| [`ui-ref-22-community-new-post-composer.png`](reference-ui/ui-ref-22-community-new-post-composer.png) | 社区发帖器 | 帖子类型分段（Idea/Question/Voice/Visual/Ama）、标题 + 正文 + 标签输入 + 添加、右侧 Active 线索栏 | 深色主按钮 | 06 |
| [`ui-ref-23-community-feed-toast.png`](reference-ui/ui-ref-23-community-feed-toast.png) | 社区内容流 + 成功提示 | 帖子卡片（类型 chip + 标题 + 摘要 + 标签 + 投票 + 反应）、右下成功 toast、Active Now 侧栏 | — | 06、08 |
| [`ui-ref-24-alerts-notifications-ops.jpeg`](reference-ui/ui-ref-24-alerts-notifications-ops.jpeg) | 告警运营台 | Quick Stats（Critical/Active/New/Unack）、Recent Alerts 表（头像 + 来源 + severity）、Alert Activity 双线图、自动刷新提示 | 紫底展示背景 | 06 |
| [`ui-ref-25-project-share-invite-settings.jpeg`](reference-ui/ui-ref-25-project-share-invite-settings.jpeg) | 项目协作设置 | 账户卡（含 Dark Mode 开关）、上传进度、Invite 权限下拉（can view）、Reset Password 表单、标签 max 提示 | — | 05（暗色开关）、06 |
| [`ui-ref-26-email-inbox-tabs-attachments.jpeg`](reference-ui/ui-ref-26-email-inbox-tabs-attachments.jpeg) | 邮件收件箱（tab + 附件） | 图标窄侧栏、Inbox/Sent/Drafts/Archive/Spam tab 行、列表勾选、Office 附件卡、认证徽标 | — | 06 |
| [`ui-ref-27-support-inbox-chat-agents.jpeg`](reference-ui/ui-ref-27-support-inbox-chat-agents.jpeg) | 客服协作 Inbox | 会话侧栏（Your inbox/Mentions 计数 + AI Agents 分组 + Team discussion 语音状态）、聊天气泡（深 / 浅双向）、纸纹背景 | — | 06、07 |

## 跨图共性结论（通用转译基线）

1. 近白浅底 + 白卡片 + 发丝边框 + 极柔阴影 → 可转译为**纸色底 + 暖白卡片**（见 [02-color.md](02-color.md)）。
2. 状态一律用低饱和浅底 + 深字的胶囊 chip，颜色只表达语义 → 与「印色化状态色」纪律一致。
3. 单一 accent 小面积使用，品牌色不等于界面操作色 → 支撑 `brand` / `action` 拆分。
4. 密度有序：KPI 卡 → 主内容 → 明细的页面节奏；留白靠间距阶梯而不是装饰分隔。
5. 全部为桌面稿：**移动端规范不来自参考图**，以 [07-layout-platforms.md](07-layout-platforms.md) 为准。
6. 深色样例（ref-20/24）与暗色开关（ref-05/25）说明暗色应是完整主题：以「墨底 + 印色提亮 + 卡片暗表面 + 前景层次」转译，见 [02-color.md](02-color.md) 暗色全表。
7. 多栏工作台反复出现（邮件 ref-21/26、客服 ref-27、社区 ref-22/23）：侧栏导航 + 列表 + 详情三栏是 Workbench 面主力布局，与 [07-layout-platforms.md](07-layout-platforms.md) 的布局模式库一致。
