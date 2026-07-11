# 参考图索引与版权口径

本页登记 `assets/design-references/ui/` 中的 16 张外部 UI 风格参考图：每张图学什么、明确不学什么、对应规范章节。

## 版权与使用边界

- 全部为**外部产品界面截图**（可识别来源已标注），仅用于家族内部风格学习。
- 禁止进入 `public/`、禁止用于官网或任何产品页面实现素材、禁止对外分发或再托管。
- 参考关系是「吸收原则」：吸收布局、密度、组件形态与状态表达方式；**不复制**其页面、图标、配色、品牌元素或文案。
- 本索引与 Radish `Docs/frontend/ui-design-inspiration.md`、RadishFlow `docs/architecture/ui-inspiration-reference.md`、RadishMind `docs/radishmind-ui-design-reference.md` 定位相同、互为补充；本份服务家族统一规范，其余三份为各项目历史灵感库。

## 索引

| 文件 | 来源 / 内容 | 主要学习点 | 明确不学 | 对应章节 |
| --- | --- | --- | --- | --- |
| `ui-ref-01-ecommerce-orders-table-kpi.png` | 电商客户列表 + KPI 卡 | KPI 卡结构（图标 + 标签 + 大数字 + 趋势小 chip）、表格行内下拉、软色状态 chip、pill 筛选器 | 纯灰白底色 | 02、06 |
| `ui-ref-02-orders-table-row-actions.png` | 同系订单表变体 | 行内操作图标按钮组、价格 chip、分页器形态 | 同上 | 06 |
| `ui-ref-03-hr-dashboard-sidebar-revenue.png` | BoardUI HR 仪表盘 | 侧栏导航（图标 + 文字 + 计数徽标）、人员卡、面积图的克制用色 | 高饱和蓝色整块 active 态（家族用柔底） | 06、07 |
| `ui-ref-04-kanban-task-detail-overlay.jpeg` | 任务看板 + 详情浮层 | 看板卡片信息层级、详情浮层的字段行结构、子任务嵌套、评论区 | 紫色 accent | 06 |
| `ui-ref-05-affine-settings-appearance.png` | AFFiNE 设置（中文） | 设置页左导航 + 右表单分区、浅色 / 深色 / 跟随系统三态、中文界面排版密度 | — | 02（暗色）、06、07 |
| `ui-ref-06-crm-workflows-list-toggles.png` | CloseCRM 工作流列表 | 列表页工具条（筛选 + 视图切换 + 搜索 + 导入）、行内 toggle、Active/Paused 状态语义 | 紫蓝 accent | 06 |
| `ui-ref-07-automation-dashboard-kpi-table.png` | FlowAI 仪表盘 | KPI 卡 + 主表格 + 模板卡三段式页面节奏、成功率数值分级着色 | — | 06、07 |
| `ui-ref-08-notification-panel-severity.png` | FlowAI 通知面板 | 通知抽屉：severity tab 计数、条目 = 图标 + 标题 + 摘要 + 时间 + 级别 chip | 荧光色 | 06 |
| `ui-ref-09-automation-dashboard-full.png` | FlowAI 仪表盘全景 | 整页布局比例：侧栏 / 主区 / 卡片间距节奏 | — | 07 |
| `ui-ref-10-availability-schedule-editor.png` | 日程可用性编辑器 | 极简行式表单、toggle + 多时段行 + 行内增删复制、发丝分隔线 | — | 06 |
| `ui-ref-11-incident-details-sidebar.jpeg` | 事故详情右栏 | 详情侧栏字段行（label 左、值右）、外部集成入口的克制形态 | — | 06 |
| `ui-ref-12-incident-timeline-updates.jpeg` | 事故页 + 时间线 | 状态迁移时间线（旧态删除线 → 新态）、Resolved/High 状态语义并置、tab 分段 | 橙色品牌 accent | 06 |
| `ui-ref-13-order-fulfillment-progress.jpeg` | Lynk 订单履约 | 多段进度条 + 当前步骤说明 + ETA、SKU 引用 chip、金额右对齐 | 蓝色 chip 配色 | 06 |
| `ui-ref-14-ats-candidates-table-stages.jpeg` | ATS 候选人管理 | 阶段漏斗 KPI 分组、表格列排序指示、来源图标 + 文本双通道表达 | 紫色主按钮 | 06 |
| `ui-ref-15-seo-dashboard-charts.jpeg` | SEO 站点仪表盘 | 等宽字标签风格、柱线混合图、条状分布（keyword bars）、表格数值密度 | 蓝橙图表色（家族用母板衍生） | 02、06 |
| `ui-ref-16-datasource-connection-wizard.jpeg` | 数据源连接向导 | 四步 stepper（编号 → 完成 √ + 连线）、选择卡网格、表单双列、成功状态条、radio 组 | 蓝色 accent | 06 |

## 跨图共性结论（家族吸收基线）

1. 近白浅底 + 白卡片 + 发丝边框 + 极柔阴影 → 家族转译为**纸色底 + 暖白卡片**（见 [02-color.md](02-color.md)）。
2. 状态一律用低饱和浅底 + 深字的胶囊 chip，颜色只表达语义 → 与家族「印色化状态色」纪律一致。
3. 单一 accent 小面积使用，品牌色不等于界面操作色 → 支撑 `brand` / `action` 拆分。
4. 密度有序：KPI 卡 → 主内容 → 明细的页面节奏；留白靠间距阶梯而不是装饰分隔。
5. 全部为桌面稿：**移动端规范不来自参考图**，以 [07-layout-platforms.md](07-layout-platforms.md) 为准。
