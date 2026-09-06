# Radish 产品矩阵同步与扩展规划

状态：本地产品文档核验完成；官网内容更新与新增项目页面尚未实施
最后更新：2026-09-06

## 目标与范围

根据 Radish 系列最新产品文档，更新官网的内容维护顺位与矩阵扩展方案。当前官网仍展示五个项目；本次只更新 RadishX 规划，不修改页面、项目数据、路由、素材、域名或兄弟仓库。

本次识别到十个兄弟仓库：现有五项目，新增 RadishAxiom、RadishLink、RadishMemory、RadishNexus 四个独立项目，以及 RadishAxiomChecker 配套仓库。新增仓库不等于新增独立产品，也不等于已经适合开放体验。

## 核验依据

核验日期为 2026-09-06。只读检查本机兄弟仓库 `dev` 分支的 README、当前状态与必要产品专题；以下链接按本地提交锁定，便于追溯，不表示已验证该提交在远端公开可读。未拉取远端、运行产品或核验生产站点。

| 仓库 | 本地提交 | 定位与状态依据 |
| --- | --- | --- |
| Radish | `2af51948` | [定位](https://github.com/laugh0608/Radish/blob/2af519483f1cd3f8fc9e4d31ddbae540382aa781/README.md) · [状态](https://github.com/laugh0608/Radish/blob/2af519483f1cd3f8fc9e4d31ddbae540382aa781/Docs/planning/current.md) |
| RadishCatalyst | `2486fa65` | [定位](https://github.com/laugh0608/RadishCatalyst/blob/2486fa65b9b0229e5dc721ac29557db655ffc74c/docs/product/production-centered-direction.md) · [状态](https://github.com/laugh0608/RadishCatalyst/blob/2486fa65b9b0229e5dc721ac29557db655ffc74c/docs/planning/current.md) |
| RadishFlow | `cf287e88` | [定位](https://github.com/laugh0608/RadishFlow/blob/cf287e889dc8b43bb718803037d44629d7871408/README.md) · [状态](https://github.com/laugh0608/RadishFlow/blob/cf287e889dc8b43bb718803037d44629d7871408/docs/status/current.md) |
| RadishLex | `c35f935d` | [定位](https://github.com/laugh0608/RadishLex/blob/c35f935d3e6d4ae5335c5689198a36febe71390b/README.md) · [状态](https://github.com/laugh0608/RadishLex/blob/c35f935d3e6d4ae5335c5689198a36febe71390b/docs/status/current.md) |
| RadishMind | `4b43aa87` | [定位](https://github.com/laugh0608/RadishMind/blob/4b43aa8784ffc7a0fdcdfc2f4670a6dd586d3d18/docs/radishmind-product-scope.md) · [状态](https://github.com/laugh0608/RadishMind/blob/4b43aa8784ffc7a0fdcdfc2f4670a6dd586d3d18/docs/radishmind-current-focus.md) |
| RadishAxiom | `2f50ec34` | [定位](https://github.com/laugh0608/RadishAxiom/blob/2f50ec34b65ca24ed324fdc0079561a17b1772e1/README.md) · [状态](https://github.com/laugh0608/RadishAxiom/blob/2f50ec34b65ca24ed324fdc0079561a17b1772e1/docs/status/current.md) |
| RadishAxiomChecker | `a2602303` | [定位](https://github.com/laugh0608/RadishAxiomChecker/blob/a2602303f4753617e6db22dea0482e0349eadf17/README.md) · [状态](https://github.com/laugh0608/RadishAxiomChecker/blob/a2602303f4753617e6db22dea0482e0349eadf17/docs/status/current.md) |
| RadishLink | `a62259c3` | [定位](https://github.com/laugh0608/RadishLink/blob/a62259c36f7bd555362264e1df6a7177a9991b78/README.md) · [状态](https://github.com/laugh0608/RadishLink/blob/a62259c36f7bd555362264e1df6a7177a9991b78/docs/status/current.md) |
| RadishMemory | `53964765` | [定位](https://github.com/laugh0608/RadishMemory/blob/539647656f0fd40e8a072cd8569ed41947073b72/README.md) · [状态](https://github.com/laugh0608/RadishMemory/blob/539647656f0fd40e8a072cd8569ed41947073b72/docs/status/current.md) |
| RadishNexus | `9349e492` | [定位](https://github.com/laugh0608/RadishNexus/blob/9349e4921f1147d35b53c09968b2ffe94efd9996/README.md) · [状态](https://github.com/laugh0608/RadishNexus/blob/9349e4921f1147d35b53c09968b2ffe94efd9996/docs/status/current.md) |

Catalyst 工作区另有未提交的当前规划和俯视角 3D 对照探索文件。本表冻结其已提交方向：化工生产经营核心、小型工厂视觉与局部体积验证。未提交内容仅提示后续复核，不写成正式改用 3D、Web 迁移或素材获准发布。

本次除 Catalyst 外，读取时其余九个兄弟仓库工作区干净。以上均是来源文档声明的能力与验收事实，不是 RadishX 本轮重新执行的产品验收。

## 现有五项目需要同步的内容

| 项目 | 官网当前偏差 | 最新定位与可采用摘要 | 公开边界与下一动作 |
| --- | --- | --- | --- |
| Radish | 仍以 WebOS 工作台为主，阶段写“规划与工程迭代中”，访问状态为 Coming Soon | 面向小规模兴趣与创作者群体的现代社区；Web-first，Flutter Native 为次级原生产品线；正式 Web 已发布，进入长期维护与功能完善 | WebOS 仅历史兼容，Tauri 已弃用。来源记录最近正式版本为 `v26.8.1-release`（2026-08-15），`26.8.2` 仍是未发布候选；各 Native 平台分别验收，不能统称原生端已发布。先更新定位与阶段，访问按钮须另核实际公开 URL |
| RadishCatalyst | 仍固定为“异星工业科幻 ARPG”“概念与原型筹备” | 以异星化工生产经营为核心的工业科幻游戏；已有第一可玩切片和工厂交互基线，当前验证小型工厂视觉与空间体积 | 探索服务生产，战斗体量未定；不能声称正式切换 3D、Web 或完整 ARPG。试玩分发、打包与发布未开放；官网既有概念图需复核是否仍适合新定位 |
| RadishFlow | Archived 主状态正确，但部分统一模板仍暗示 Coming Soon | 已停止公开业务功能维护的稳态流程模拟历史项目 | 2026-06-12 停更边界持续有效，近期提交只维护外围基础设施；不以新提交推断恢复，不增加演示、下载或推广承诺 |
| RadishMind | 仍为 Planning / “方向确认与接口规划”，偏抽象协议实验 | AI 工具、工作流、模型网关和 Copilot 集成平台；内部开发者预览，已有应用受控运行、结果审查与回归验证的开发测试态能力 | 当前邀请链仍有后续实施；真实 Provider、真实 Radish OIDC、团队试用和生产交付未完成，不能写成生产 AI 服务或全自治 Agent |
| RadishLex | 仍停留在 M1 macOS 离线输入 | 本地优先的中文输入系统；macOS build 38 已有单版本产品验收，当前推进 M5 Linux Fcitx5 输入与安装维护验收 | macOS / Linux 都未公开发布；Linux 连续维护链仍未闭合，真实用户同步关闭。隐私与同步写成目标和具体已验收范围，不扩大为所有底层存储零学习或同步已可用 |

本表是待进入页面编辑的事实摘要。实施应覆盖 `src/data/projects.ts`、路由 metadata、首页舞台 / 项目卡片与 About 派生信息，避免只改一个状态标签。公开文案应压缩为用途、成熟度与可用动作，不把平台门禁和批次编号搬到首页。

## 新增项目的官网候选定位

| 项目 | 建议短定位 | 当前成熟度 | 暂不承诺 |
| --- | --- | --- | --- |
| RadishAxiom | 面向 AI Agent 的验证优先语言与可信语义层 | 设计到受控实现；已有首域语义、IR / Evidence 和 runtime 基础组件 | 没有完整面向用户的编译运行入口；完整 `raxc`、产品隔离 runtime 和 Agent 收益未验收 |
| RadishAxiomChecker | Axiom 独立语义与证据检查器 | 独立 Go 仓库，已有受限 profile 离线复核及 CLI | 独立 kernel / certificate 证明能力为空；Evidence 被接受、进程 exit 0 都不等于程序被证明正确，也不代表产品隔离完成 |
| RadishLink | 离线自组网通信设备与协议探索 | D0 产品定义、法规预检与三节点 POC 准备；已有合成 harness | 尚无产品 E2EE 闭环、实体 Linux 台架、HaLow 距离或媒体实测；不填通信距离、续航或上市时间 |
| RadishMemory | 用户拥有、模型无关的个人长期记忆与上下文系统 | 受约束的本地文本 / Markdown 资料库原型；portable crypto 已实现 | 加密尚未接入产品数据流，当前仍有明文存储；不宣称整库加密、模型问答、零知识同步或日常资料库完整可用 |
| RadishNexus | 面向研发团队、自部署优先的沟通协作与交付枢纽 | M0.5 / M1 纵向原型；已有 Go / PostgreSQL / React 业务切片 | 尚无普通成员独立持续使用的完整 Golden Path；完整 Document、真实交付链与团队使用仍待完成 |

## 矩阵组织建议（待页面方案确认）

- 主矩阵按独立产品组织：现有五项加四个新增项目，形成九项候选集合；Flow 可放历史项目区域，保持可检索与清楚停更说明。
- Checker 优先作为 Axiom 详情中的配套工具 / 独立仓库入口，不自动增为与九个产品并列的第十张主卡片；独立仓库、发布链与信任边界仍需说明。
- 各项目按用途区分：Radish 是兴趣社区，Nexus 是团队协作交付；Mind 是受控 AI 运行平台，Memory 是个人记忆真相与上下文；Axiom / Checker 是语义与证据工具，Link 是离线通信，Lex 是输入系统。用途分组是导航建议，不宣称存在已上线统一平台。
- 首页五项目 tab 与不对称布局不直接扩大为九或十项同构卡片。先确认信息优先级、分组、桌面 / 移动导航和代表视觉，再决定新增路由、顺序及数量标识。
- 原有 `05 PROJECTS`、六仓库统计、导航、页脚、sitemap、metadata 与验证清单应在矩阵实施时一起调整；当前五项代码和根入口描述保持实际现状。

## 关系、许可与域名

- 兄弟项目独立运行；不因同属 Radish 系列而宣称统一登录、共享数据库、自动业务写回或已完成集成。
- Memory 的 Mind Gateway 接入为后续可关闭选项，本地能力不依赖 Mind；Nexus 不与 Radish 社区合并，Link 不用作 Nexus 的旧名称。
- Mind 来源保留 Flow 集成候选，但 Flow 自身仍明确停止业务维护。官网采用双方均成立的边界：只描述潜在方向，不把它排为当前可用集成或恢复开发计划。
- 不把整个家族统一标为同一种许可证：Axiom README 明确 Apache-2.0，其他项目有各自授权边界；公开源码、免费评估、自部署目标与产品可分发分别判断。正式新增入口前逐仓核验许可说明，本文不授予新权利。
- 现有五个规划子域不变；来源中 `axiom.radishx.com` 为规划子域，`nexus.radishx.com` 为未冻结候选。其余新增项目不推导子域名，Checker 也不自动配置独立域名。
- 本轮没有验证 `hub.radishx.com` 是否为 Radish 当前正式访问地址；正式 Web 已发布不能直接作为启用该按钮的依据。
- 新项目路由、域名和公开入口需在对应页面与部署目标中明确，不追加到当前 Vercel rewrite。

## 素材准备与进入实施的顺序

1. **现有五项目事实更新**：优先 Radish / Catalyst 定位、Mind / Lex 成熟度，再统一 Flow 停更与按钮状态。形成可审阅短文案并核对实际可用链接；不依赖新 Logo 才能开始。
2. **公开入口核验**：核对可读仓库 / 文档、正式发布页与实际站点。来源中的本地开发 URL、预览命令、未提交草稿不作为官网体验入口。
3. **新增矩阵方案**：确认九项候选、Flow 历史位置、Checker 配套关系与双端信息结构，再维护页面目标和 Pencil；此阶段不自动批准新页面实现。
4. **素材准入**：对 Radish Web / Native、Lex 本地 Manager / 候选窗、Mind 工作区、Nexus 业务切片和 Memory 本地宿主评估受控截图候选；对 Axiom / Checker 优先考虑来源明确的代码内流程与证据示意，对 Link 优先使用准确文字。此处只列候选类型，不表示已找到或获准使用具体文件。
5. **设计、实现与验证**：选定范围后执行双端设计、数据 / 页面 / sitemap 联动与质量检查；沿用 [官网质量收口](site-quality-and-public-content.md)，发布单独处理。

Catalyst 近期视觉样板与目标图尚在探索，不替换官网已有概念图、不批量拷贝素材。Flow 不新增宣传素材。所有素材继续按 [素材准入准备](project-visual-asset-readiness.md) 和 [素材治理](../assets/materials.md) 执行。

## 本轮完成标准

- 记录十个本地来源的定位、成熟度、提交和未核验边界。
- 明确现有五项目需要更新什么、新增项目如何评估，以及 Checker 与 Axiom 的关系。
- 更新当前规划、目标索引、内容与素材准备入口，保持实际页面和后续方案区分。
- 文档链接、格式与差异检查通过，不修改兄弟仓库，不把本地证据提升为线上可用、产品发布或素材授权。
