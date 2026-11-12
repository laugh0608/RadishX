# 当前规划

最后更新：2026-11-12（About 有限采用登记与密度修订）

## 当前阶段

2026-10-17 的 R2.2 首页、十二项目详情、About、Mascot 与共享层已完成 React-first 实现和双端复核，所有者确认四页截图；Mascot 首批 10 张表情重裁已复核。页面和共享层详细结果见[整合目标](../features/site-design-refinement.md)，原阶段摘要与测量快照保留在[本周日志](../devlogs/2026-W44.md)。

## 实现、验收与发布状态

- React 与本地验证：指定 R2.2 页面批次已通过；不代表所有历史质量问题均已处理，细项见[质量目标](../features/site-quality-and-public-content.md#待处理问题)。
- Pencil：R2.2 设计源仍待回填，v1 保留灰玉基准与 R2.1 评审稿，v0 是 craft 历史基线；分工见[视觉规范](../design/visual-guidelines.md)与[UI 差异附录](../design/ui-addendum.md)。
- 线上：本批未核验当前部署、远端版本或域名跳转，不能认定已包含 R2.2；历史 smoke 只证明对应候选。
- RadishUI 有限试点：2026-11-11 在 `feature/radishui-about-entry` 本地完成实施与技术验收（Chrome 231 / Safari 9 / Firefox 9，干净安装与实际回滚）；2026-11-12 所有者确认有限采用。分支未推送、未部署、未合并，生产发布待授权。范围与边界见[有限试点](../features/radishui-pilot.md#2026-11-12-采用登记与发布状态)。
- About 密度：2026-11-11 所有者确认后完成页面尺度修订（主标题上限 96→80、区块 64→48、区块留白 96→64、索引卡 460→380、仓库行 96→76）；Chrome 1440 / 390 明暗、Safari 1440、Firefox 1440 / 390 抽查通过。当前只在本地试点分支，未推送、未合并。详见 [About 专题](../features/about-contact-surface.md#2026-11-11-密度修订)。

## 当前活跃目标

第一顺位调整为[官网质量与对外表达收口](../features/site-quality-and-public-content.md)：先校准内容与问题现状，再修复本批必要问题，最后在候选与授权明确后核验线上。R2.2 首页、详情页、About、Mascot 与共享层已完成 React-first 实现、双端复核，并由所有者于 2026-10-17 确认四页截图；单张表情裁切已修复。[整体设计与美化](../features/site-design-refinement.md)继续负责历史基线与设计源回填；Pencil 回填不再作为本批质量修正或发布核验的前置条件。四张 R2.1 主画板与一张交互说明保留为历史评审稿，不再直接代表当前十三项目页面。

2026-11-01 按所有者要求同步为十三产品，新增 RadishForge；组织展示统一为「萝卜智能 · Radish Intelligence」，官网名保持 RadishX，组织入口指向 `RadishIntelligence`。Root、Memory、Ink 等状态按本地文档纠正；Checker 仍为配套仓库。只有 Radish 与 Ink 保留已确认的独立 Web 入口。范围、来源与本轮验证见[产品矩阵同步](../features/product-matrix-refresh.md#2026-11-01-组织品牌与十三产品同步)。组织迁移完成[评估](../deployment/vercel.md#2026-11-01-迁入组织评估未执行)后，所有者明确决定不迁移：保留 `laugh0608/RadishX` 及现有 Vercel 归属，迁移不再作为待办。四个展示仓库已按授权分别提交推送；未修改 Vercel 配置或 DNS。控制台显示 `9a0fbee` 为 Ready 生产部署，域名端到端访问仍未验收。

2026-11-02 按所有者确认同步 RadishUI：公开入口为 `https://ui.radishx.com/`，作为共享基础设施进入 About 与页脚，不增加独立产品数量或官网路由。About 更新为 16 个仓库、5 项域名、3 个独立 Web 入口；组织 Profile 补充设计系统入口，个人主页与个人 GitHub Profile 本轮不改。范围、来源与验证见[最新批次](../features/product-matrix-refresh.md#2026-11-02-radishui-共享基础设施入口)和 [W45 日志](../devlogs/2026-W45.md)。

2026-11-08 按所有者确认开展 RadishUI 临时消费测试（不计入正式产品试点）：在 About 页用共享 `Button` + `Dialog` 做入口卡，验证 tarball 消费与旧 family-ui token 层的桥接；本地实现与限定浏览器检查已完成，所有者已确认视觉；依赖版本已同步 RadishUI 26.11.1，分支仅在本机，未推送、未部署、未合并 `master`。该测试不进入正式发布，也不计入 RadishUI F-02.6 产品采用。范围、依赖、例外、结果与回滚见[RadishUI 临时消费测试](../features/radishui-pilot.md)。

2026-11-10 所有者确认两库规划收口。本轮只修改文档；正式试点实施、安装、服务与远端操作尚未开始。RadishUI 自身已获确认的运行基线、RadishX 11 月 8 日临时消费、11 月 9 日临时副本延迟加载原型分别记录；后两者不计正式采用。产品侧范围和验收见[有限试点计划](../features/radishui-pilot.md#formal-pilot-closeout)。

当前阅读链：[整体规划](overview.md) → [质量主线](../features/README.md#quality) → [有限收口批次](../features/site-quality-and-public-content.md#finite-closeout)；页面与设计源工作继续由[整合目标](../features/site-design-refinement.md#后续批次)维护。

后续顺序：

1. 校准内容与 Q01–Q09 现状，明确本批仍存在的问题、被替代项和后置项；本轮源码核对已更新清单，浏览器与公开入口核验仍待执行。
2. 按质量专题完成必要修正及定向双端验证；不因旧清单重复修复已不存在的实现，也不将局部源码核对写成全站通过。
3. 确定发布候选与范围，获对应授权后核验线上版本、正式路由、资源和 `www` 跳转；保留 GitHub / Vercel 现有归属，不重启组织迁移。
4. About 有限采用已登记（本地）；发布需单独授权，未发布前不宣称生产采用。发布后再选择一个有真实交互需求的产品场景；不把试点带入无关候选。
5. Pencil 回填与 SEO 静态输出各自限定范围后推进；不自动扩为全站重设计、token 迁移或框架迁移。

本轮已完成 R2.2 四条页面线与共享层的 React 实现，且四页双端截图已获所有者确认；这不等同于 Pencil 设计源已更新，也不代表线上版本已核验。后续如果调整精选、分类、展陈层级、信息密度或页面素材，仍以所有者确认为准。

## 内容维护与功能扩展

内容维护不依赖新增功能条件：发现定位、维护状态、文档地址、可用入口或公开说明可能过期时，可以进入核验与文案整理。核验需记录来源和日期，不从旧官网状态推断兄弟项目今天仍处于同一阶段。

新增页面、素材入口或功能扩展至少需要以下依据之一：

- 某项目有新的正式公开成果，需要官网同步介绍或入口。
- 正式 Logo、真实截图、公开视频、Demo、文档站或下载页已具备明确来源与授权。
- 域名、发布计划或素材授权发生变化，需要官网同步。
- 明确的品牌表达或信息架构需求，已确认目标和影响范围。

进入实现前维护对应 `docs/features/*.md`；素材按准入清单审核，较大视觉调整按 Pencil 流程推进。公开状态核验方式见 [收口目标](../features/site-quality-and-public-content.md)。

## 当前不推进

- 不重做整个品牌；R2.2 已覆盖首页、详情页、About 与 Mascot，Pencil 回填与完整暗色精确稿后续展开。
- 不将静态 HTML 输出评估当作新框架、服务端业务或部署改动的执行授权。
- 不迁入兄弟项目代码或未审核素材，不把临时项目标识声明为正式 Logo。
- 不开放 Mascot 下载、素材包、社交贴纸包或外部分发；不无依据生成缩略图。
- 不启动 seasonal 页面、活动 Banner 或节日彩蛋。
- 不引入后台、数据库、登录、CMS 或统计服务。
- 不修改项目独立子域为本官网路由 / rewrite，不自行推送或部署。
- 不为未部署项目登记或展示暂定域名、禁用访问按钮或“即将上线”暗示。

## 跨目标风险与待决事项

- R2.2 四个页面线均为 React-first；Pencil 设计源尚未回填，当前线上版本未核验。本地构建通过不能代替发布证据。
- 十三产品已于 2026-11-01 只读核对本地 README 与当前状态；这些文档中的指定环境证据不等于本轮产品验收。生产可用性尚未验收；Vercel 控制台的提交与状态快照见[部署核查](../deployment/vercel.md#控制台核查快照)。
- 首批 10 张单张表情 Web 图的裁切偏移已于 2026-10-17 修复：按源表情格实际卡片边界重裁为 256×256，逐张复核无相邻行标签；原图未改，旧公开图备份在 `output/expression-crop-2026-10-17/backup/`。
- SEO 静态输出、未知路径响应和验证入口仍处于方案准备，不预设工具或依赖。
- R2.2 全站标题保留 `-0.02em` 展示字距与含 `vw` 的 `clamp()`；后续按桌面、移动及文字缩放证据处理，不继续扩大负字距。
- 新 Logo、截图、视频、下载授权与 seasonal 目标仍待正式材料；没有材料时采用文字定位与临时标识，既有概念图继续保留边界说明。

## 专题入口

- [官网整体规划](overview.md)：长期目标、四条能力主线与阶段出口。
- [功能与目标索引](../features/README.md)：页面目标、已完成基线和素材准备。
- [开发规范](../development/standards.md)：工程结构、内容维护和验证能力边界。
- [素材治理](../assets/materials.md)：来源、公开展示、授权与撤回。
- [Vercel 与域名](../deployment/vercel.md)：canonical、兼容入口、项目独立子域及部署记录要求。
- [开发日志](../devlogs/README.md)：已完成工作、日期化验证和剩余限制。

官网继续只承担 Radish 系列项目展示与公共入口。`radishx.com` 为 canonical，`www.radishx.com` 为兼容入口；Radish 与 RadishInk 提供独立产品 Web 入口，RadishUI 另有 `ui.radishx.com` 设计系统工程预览，其他项目不登记或展示暂定子域，`x.radishx.com` 继续保留给 Labs、实验入口或统一跳转用途，本轮不启用。
