import type { ProjectRouteId } from "../app/routes";

export type ProjectTone = ProjectRouteId;

export type ProjectLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
  note?: string;
};

export type ProjectMark = {
  monogram: string;
  wordmark: string;
  label: string;
  note: string;
};

export type ProjectVisual = {
  src: string;
  alt: string;
  label: string;
  title: string;
  note: string;
  width: number;
  height: number;
  ratio: "square" | "wide";
};

export type ProjectDiagramNode = {
  label: string;
  value: string;
};

export type ProjectDiagramLane = {
  label: string;
  value: string;
};

export type ProjectDiagram = {
  label: string;
  title: string;
  note: string;
  coreLabel: string;
  coreTitle: string;
  nodes: ProjectDiagramNode[];
  lanes?: ProjectDiagramLane[];
};

export type ProjectAssetReview = {
  source: string;
  boundary: string;
  nextNeed: string;
};

export type ProjectDocumentation = {
  label: string;
  href: string;
  description: string;
  boundary: string;
};

export type Project = {
  id: ProjectRouteId;
  tone: ProjectTone;
  name: string;
  shortName: string;
  path: string;
  futureDomain?: string;
  githubUrl: string;
  mark: ProjectMark;
  tagline: string;
  summary: string;
  orbitLabel: string;
  role: string;
  stage: string;
  status: string;
  chips: string[];
  capabilities: string[];
  signals: string[];
  links: ProjectLink[];
  visual?: ProjectVisual;
  diagram?: ProjectDiagram;
  assetReview: ProjectAssetReview;
  documentation: ProjectDocumentation[];
};

export const projects: Project[] = [
  {
    id: "radish",
    tone: "radish",
    name: "Radish",
    shortName: "Hub",
    path: "/radish",
    futureDomain: "hub.radishx.com",
    githubUrl: "https://github.com/laugh0608/Radish",
    mark: {
      monogram: "R",
      wordmark: "Radish",
      label: "Temporary mark",
      note: "RadishX 统一风格代码内标识，不是 Radish 正式 Logo。",
    },
    tagline: "面向兴趣与创作者群体的现代社区",
    summary: "Radish 以帖子、评论和问答承载创作与讨论，以聊天、关注和通知连接兴趣群体，并通过 Docs 沉淀知识。",
    orbitLabel: "社区与内容入口",
    role: "Radish 家族的内容社区",
    stage: "Web 已发布，Flutter Native 按平台建设",
    status: "Web Released",
    chips: ["Community", "Web-first", "Flutter Native"],
    capabilities: ["帖子、评论与问答", "聊天、关注与通知", "可长期阅读的社区文档"],
    signals: ["正式 Web 已发布并持续维护", "原生端按平台分别验收", "官网暂保留仓库入口，访问地址待核验"],
    visual: {
      src: "/images/projects/radish/radish-acg-web.jpg",
      alt: "Radish README 中使用的萝卜娘角色视觉",
      label: "Reviewed visual",
      title: "Radish 角色视觉",
      note: "来自 Radish README，适合第一版详情页作为项目代表图；不作为可下载素材开放。",
      width: 1024,
      height: 1024,
      ratio: "square",
    },
    assetReview: {
      source: "Radish README 角色视觉",
      boundary: "代表项目气质，不是当前产品 UI 截图。",
      nextNeed: "后续补独立 Logo、稳定产品截图或公开视频素材。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/Radish/tree/dev/Docs",
        description: "固定项目文档入口，覆盖架构、指南、规划、记录和开发日志。",
        boundary: "链接到仓库文档源，不复制文档内容，也不替代 Radish 应用内文档系统。",
      },
      {
        label: "Getting started",
        href: "https://github.com/laugh0608/Radish/blob/dev/Docs/guide/getting-started.md",
        description: "本地启动、服务入口和上手路径说明。",
        boundary: "仅作为开发者阅读入口，不代表 RadishX 官网提供 Radish 业务功能。",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/Radish",
        isExternal: true,
      },
      {
        label: "访问项目",
        href: "https://hub.radishx.com",
        isExternal: true,
        isDisabled: true,
        note: "Coming Soon",
      },
    ],
  },
  {
    id: "catalyst",
    tone: "catalyst",
    name: "RadishCatalyst",
    shortName: "Catalyst",
    path: "/catalyst",
    futureDomain: "forge.radishx.com",
    githubUrl: "https://github.com/laugh0608/RadishCatalyst",
    mark: {
      monogram: "C",
      wordmark: "Catalyst",
      label: "Temporary mark",
      note: "RadishX 统一风格代码内标识，不是 RadishCatalyst 正式 Logo。",
    },
    tagline: "异星化工生产经营游戏",
    summary: "RadishCatalyst 以异星化工生产经营为核心，让探索中的发现逐步转化为可复现、可扩展的工业生产能力。",
    orbitLabel: "游戏与世界观",
    role: "探索与生产相互推动的工业科幻游戏",
    stage: "三维基础工厂已完成开发机交付，持续迭代",
    status: "In Development",
    chips: ["Factory", "Industrial Sci-fi", "Exploration"],
    capabilities: ["三维基础工厂建造与生产", "探索发现与配方试制", "电力网络与生产统计建设"],
    signals: ["基础工厂已完成开发机验收", "完整发现循环与统计界面继续完善", "Windows / 目标硬件验收与公开分发待完成"],
    visual: {
      src: "/images/projects/catalyst/radishcatalyst-demo-first-screen-web.jpg",
      alt: "RadishCatalyst 异星工业基地 demo 首屏概念图，含资源 HUD、基地建筑群、物品栏和小地图",
      label: "Demo concept",
      title: "异星基地 Demo 首屏",
      note: "来自 RadishCatalyst 源资产的 demo 首屏宽幅参考图，展示异星工业基地与 HUD 方向；按概念图使用，不作为实机 gameplay 或上线状态承诺。",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
    assetReview: {
      source: "RadishCatalyst 源资产 demo 首屏宽幅参考图",
      boundary: "按 demo 概念视觉展示，不是实机 gameplay、试玩状态或上线承诺。",
      nextNeed: "后续补真实 gameplay、trailer、独立 Logo 或正式 key visual。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishCatalyst/tree/dev/docs",
        description: "项目文档总入口，覆盖产品定义、设计、架构、规划和参考资料。",
        boundary: "开发者文档入口，不等同于可游玩版本、下载页或上线承诺。",
      },
      {
        label: "Player wiki source",
        href: "https://github.com/laugh0608/RadishCatalyst/tree/dev/wiki",
        description: "未来面向玩家的 Wiki 源内容目录。",
        boundary: "当前作为源内容预览，不声明正式玩家站点已上线。",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishCatalyst",
        isExternal: true,
      },
      {
        label: "访问项目",
        href: "https://forge.radishx.com",
        isExternal: true,
        isDisabled: true,
        note: "Coming Soon",
      },
    ],
  },
  {
    id: "flow",
    tone: "flow",
    name: "RadishFlow",
    shortName: "Flow",
    path: "/flow",
    futureDomain: "flow.radishx.com",
    githubUrl: "https://github.com/laugh0608/RadishFlow",
    mark: {
      monogram: "F",
      wordmark: "Flow",
      label: "Temporary mark",
      note: "RadishX 统一风格代码内标识，不是 RadishFlow 正式 Logo。",
    },
    tagline: "可扩展的流程模拟平台",
    summary: "RadishFlow 以 Rust 计算核心和桌面 UI 从稳态流程起步，通过 .NET 适配 CAPE-OPEN / COM，逐步扩展工程建模与求解能力。",
    orbitLabel: "工程与流程画布",
    role: "Radish 家族的流程模拟与工程建模工具",
    stage: "已恢复开发，完善基础建模与使用闭环",
    status: "In Development",
    chips: ["Rust", "Process Simulation", "CAPE-OPEN"],
    capabilities: ["稳态流程模拟", "Rust UI 主界面", ".NET / COM 适配边界"],
    signals: ["2026-09-12 起恢复正常开发", "已有稳态 MVP 与小流程建模基线", "当前模型采用简化假设，尚未正式发布"],
    visual: {
      src: "/images/projects/flow/radishflow-workbench-concept-web.jpg",
      alt: "RadishFlow Studio 工作台视觉基线图",
      label: "UI baseline",
      title: "Studio 工作台视觉基线",
      note: "来自 RadishFlow 自身 baseline 目录，仅作为历史 UI 方向展示，不代表当前版本截图或已发布产品。",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
    assetReview: {
      source: "RadishFlow Studio UI baseline",
      boundary: "只展示历史 UI 方向，不作为当前 Studio 截图或发布证明。",
      nextNeed: "后续补当前 Studio 截图，并核对版本状态和发布口径。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishFlow/tree/dev/docs",
        description: "项目文档入口，覆盖 Studio、架构、当前状态与 MVP 范围。",
        boundary: "项目已恢复开发；文档中的目标能力不等于现有产品已实现。",
      },
      {
        label: "Current status",
        href: "https://github.com/laugh0608/RadishFlow/blob/dev/docs/status/current.md",
        description: "当前阶段、维护边界和验证基线说明。",
        boundary: "不构成继续公开开发、发布、支持或交付承诺。",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishFlow",
        isExternal: true,
      },
      {
        label: "访问项目",
        href: "https://flow.radishx.com",
        isExternal: true,
        isDisabled: true,
        note: "尚未发布",
      },
    ],
  },
  {
    id: "mind",
    tone: "mind",
    name: "RadishMind",
    shortName: "Mind",
    path: "/mind",
    futureDomain: "mind.radishx.com",
    githubUrl: "https://github.com/laugh0608/RadishMind",
    mark: {
      monogram: "M",
      wordmark: "Mind",
      label: "Temporary mark",
      note: "RadishX 统一风格代码内标识，不是 RadishMind 正式 Logo。",
    },
    tagline: "AI 应用、工作流与模型集成平台",
    summary: "RadishMind 面向内部开发者提供可复用 AI 应用、工作流与模型集成，围绕受控运行、结果审查和回归验证组织工作。",
    orbitLabel: "智能与工具编排",
    role: "Radish 家族的 AI 工具与应用集成平台",
    stage: "内部开发者预览，持续完善产品流程",
    status: "Developer Preview",
    chips: ["AI Protocol", "Evaluation", "Tooling"],
    capabilities: ["AI 应用与工作流编排", "受控运行与结果审查", "应用回归验证与模型接入规划"],
    signals: ["应用与邀请链已有开发测试态闭环", "中英双语产品界面分阶段建设", "真实模型试用暂缓，生产交付尚未完成"],
    diagram: {
      label: "Evaluation loop",
      title: "协议评测回路",
      note: "基于当前公开定位生成的代码内自有视觉，不引入外部产品参考截图，也不声明已有正式产品 UI。",
      coreLabel: "RadishMind",
      coreTitle: "Contracts + Evaluation",
      nodes: [
        {
          label: "Context",
          value: "任务范围与会话约束",
        },
        {
          label: "Tooling",
          value: "工具调用与运行边界",
        },
        {
          label: "Scoring",
          value: "样本、基线与失败分类",
        },
        {
          label: "Trace",
          value: "证据链与复用记录",
        },
      ],
      lanes: [
        {
          label: "Input",
          value: "Context packages",
        },
        {
          label: "Run",
          value: "Tool orchestration",
        },
        {
          label: "Record",
          value: "Auditable outputs",
        },
      ],
    },
    assetReview: {
      source: "RadishX 代码内评测回路图",
      boundary: "表达公开定位，不是 RadishMind Console、正式产品 UI 或运行截图。",
      nextNeed: "后续补项目自有 Logo、真实 Console 截图或协议 / 评测可视化图。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishMind/tree/dev/docs",
        description: "正式文档入口，覆盖项目指南、当前焦点、产品范围、战略、能力矩阵和路线图。",
        boundary: "文档说明产品与工程边界，不代表 RadishX 官网提供模型服务或 Console。",
      },
      {
        label: "Integration contracts",
        href: "https://github.com/laugh0608/RadishMind/blob/dev/docs/radishmind-integration-contracts.md",
        description: "跨项目集成契约入口，用于说明 Radish 体系内的协议和边界。",
        boundary: "只链接契约文档，不暴露真实 API key、生产环境或后端服务。",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishMind",
        isExternal: true,
      },
      {
        label: "访问项目",
        href: "https://mind.radishx.com",
        isExternal: true,
        isDisabled: true,
        note: "Coming Soon",
      },
    ],
  },
  {
    id: "lex",
    tone: "lex",
    name: "RadishLex",
    shortName: "Lex",
    path: "/lex",
    futureDomain: "lex.radishx.com",
    githubUrl: "https://github.com/laugh0608/RadishLex",
    mark: {
      monogram: "L",
      wordmark: "Lex",
      label: "Temporary mark",
      note: "RadishX 统一风格代码内标识，不是 RadishLex 正式 Logo。",
    },
    tagline: "本地优先的源代码可见中文输入系统",
    summary:
      "RadishLex（萝卜词核）以 Rust 输入核心、Go 自部署同步后端和 Flutter 管理端，构建本地优先、可解释、可删除的中文输入法，把输入习惯留在用户自己手里。",
    orbitLabel: "输入与个人词库",
    role: "RadishX 体系的本地输入与个人化入口",
    stage: "macOS 已有单版本验收，Linux 输入与安装维护推进中",
    status: "In Development",
    chips: ["Rust Core", "Local-first", "Chinese IME"],
    capabilities: ["本地优先的离线输入", "可解释、可删除的个人化学习", "自部署加密同步规划"],
    signals: ["macOS 已完成限定版本产品验收", "Linux Fcitx5 输入与安装维护持续建设", "macOS / Linux 均未公开发布，真实用户同步关闭"],
    diagram: {
      label: "Input pipeline",
      title: "本地输入链路",
      note: "基于当前公开定位生成的代码内自有视觉，不引入平台候选窗或 manager 截图，也不声明已有正式产品 UI。",
      coreLabel: "RadishLex",
      coreTitle: "Rust Core + UserDB",
      nodes: [
        { label: "Compose", value: "拼音切分与候选生成" },
        { label: "Rank", value: "候选重排与个人偏好" },
        { label: "Learn", value: "可解释可删除学习" },
        { label: "Sync", value: "加密同步规划" },
      ],
      lanes: [
        { label: "Local", value: "离线输入热路径" },
        { label: "UserDB", value: "本地词库与学习" },
        { label: "Encrypted", value: "密文同步目标" },
      ],
    },
    assetReview: {
      source: "RadishX 代码内输入链路图",
      boundary: "表达公开定位，不是平台候选窗、manager 界面或真实输入截图。",
      nextNeed: "后续补项目自有 Logo、真实候选窗截图或 manager 可视化图。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishLex/tree/dev/docs",
        description: "项目文档总入口，覆盖技术方案、路线图、隐私同步、引擎边界和平台策略。",
        boundary: "开发者文档入口，不代表 RadishX 官网提供输入法下载或安装。",
      },
      {
        label: "Technical plan",
        href: "https://github.com/laugh0608/RadishLex/blob/dev/docs/technical-plan.md",
        description: "稳定架构、职责边界、输入链和平台策略说明。",
        boundary: "只说明工程方向，不构成发布、下载或安装承诺。",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishLex",
        isExternal: true,
      },
      {
        label: "访问项目",
        href: "https://lex.radishx.com",
        isExternal: true,
        isDisabled: true,
        note: "Coming Soon",
      },
    ],
  },
  {
    id: "axiom",
    tone: "axiom",
    name: "RadishAxiom",
    shortName: "Axiom",
    path: "/axiom",
    githubUrl: "https://github.com/laugh0608/RadishAxiom",
    mark: {
      monogram: "A",
      wordmark: "Axiom",
      label: "Temporary mark",
      note: "RadishX 代码内临时标识，不是 RadishAxiom 正式 Logo。"
    },
    tagline: "面向 AI Agent 的验证优先语言与可信语义层",
    summary: "RadishAxiom 将约束、类型、效果和验证义务放在语言核心，输出可独立复核的证据；RadishAxiomChecker 是同一产品的配套检查器。",
    orbitLabel: "语言与证据验证",
    role: "面向 AI Agent 的验证优先语言与可信语义层",
    stage: "设计到受控实现，完整编译运行入口尚未开放",
    status: "In Development",
    chips: [
      "Constraints",
      "Semantics",
      "Evidence"
    ],
    capabilities: [
      "显式约束与类型语义",
      "IR 与可复核 Evidence",
      "配套独立 Go Checker"
    ],
    signals: [
      "已有受限语义与证据复核组件",
      "Checker 与主仓分仓维护，作为同一产品展示",
      "完整编译管线与产品运行隔离尚未验收"
    ],
    assetReview: {
      source: "项目文字定位与代码内临时标识",
      boundary: "不代表产品截图、正式 Logo 或已发布能力。",
      nextNeed: "后续审核项目自有 Logo 与真实产品素材。"
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishAxiom/tree/dev/docs",
        description: "项目定位、设计与开发文档。",
        boundary: "文档目标与当前已实现能力分别说明。"
      },
      {
        label: "Current status",
        href: "https://github.com/laugh0608/RadishAxiom/blob/dev/docs/status/current.md",
        description: "当前阶段、能力与后续计划。",
        boundary: "以项目限定范围为准，不等于已公开发布。"
      },
      {
        label: "Axiom Checker",
        href: "https://github.com/laugh0608/RadishAxiomChecker/blob/dev/docs/status/current.md",
        description: "配套独立语义与证据检查器。",
        boundary: "接受 Evidence 不等于程序被证明正确；Checker 不单列为产品。"
      }
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishAxiom",
        isExternal: true
      },
      {
        label: "Axiom Checker 仓库",
        href: "https://github.com/laugh0608/RadishAxiomChecker",
        isExternal: true
      }
    ]
  },
  {
    id: "link",
    tone: "link",
    name: "RadishLink",
    shortName: "Link",
    path: "/link",
    githubUrl: "https://github.com/laugh0608/RadishLink",
    mark: {
      monogram: "L",
      wordmark: "Link",
      label: "Temporary mark",
      note: "RadishX 代码内临时标识，不是 RadishLink 正式 Logo。"
    },
    tagline: "离线自组网通信设备与协议",
    summary: "RadishLink 面向无互联网或蜂窝网络不可用的场景，探索可独立使用、可按策略中继的随身通信设备，让熟人小队保持联系。",
    orbitLabel: "离线通信与自组网",
    role: "离线自组网通信设备与协议",
    stage: "产品定义与三节点原型准备",
    status: "Research",
    chips: [
      "Offline",
      "Mesh",
      "Communication"
    ],
    capabilities: [
      "独立通信终端与中继方向",
      "文字与按键通话首期目标",
      "近距手机接入与长距链路探索"
    ],
    signals: [
      "已有离线合成验证工具",
      "实体台架与产品加密闭环尚未验证",
      "不承诺通信距离、续航或上市时间"
    ],
    assetReview: {
      source: "项目文字定位与代码内临时标识",
      boundary: "不代表产品截图、正式 Logo 或已发布能力。",
      nextNeed: "后续审核项目自有 Logo 与真实产品素材。"
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishLink/tree/dev/docs",
        description: "项目定位、设计与开发文档。",
        boundary: "文档目标与当前已实现能力分别说明。"
      },
      {
        label: "Current status",
        href: "https://github.com/laugh0608/RadishLink/blob/dev/docs/status/current.md",
        description: "当前阶段、能力与后续计划。",
        boundary: "以项目限定范围为准，不等于已公开发布。"
      }
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishLink",
        isExternal: true
      }
    ]
  },
  {
    id: "memory",
    tone: "memory",
    name: "RadishMemory",
    shortName: "Memory",
    path: "/memory",
    githubUrl: "https://github.com/laugh0608/RadishMemory",
    mark: {
      monogram: "M",
      wordmark: "Memory",
      label: "Temporary mark",
      note: "RadishX 代码内临时标识，不是 RadishMemory 正式 Logo。"
    },
    tagline: "用户拥有的个人长期记忆与上下文系统",
    summary: "RadishMemory 以本地优先、模型无关的方式管理个人资料，将持续变化的来源整理为任务所需的可靠、可追溯上下文。",
    orbitLabel: "个人记忆与上下文",
    role: "用户拥有的个人长期记忆与上下文系统",
    stage: "本地文本资料库原型，加密存储接入中",
    status: "Prototype",
    chips: [
      "Local-first",
      "Memory",
      "Context"
    ],
    capabilities: [
      "文本与 Markdown 导入和检索原型",
      "来源版本与本地删除记录",
      "可追溯上下文与记忆治理方向"
    ],
    signals: [
      "已有合成本地宿主验收",
      "产品数据流尚未接入加密存储",
      "完整模型问答、多端同步与日常资料库仍待建设"
    ],
    assetReview: {
      source: "项目文字定位与代码内临时标识",
      boundary: "不代表产品截图、正式 Logo 或已发布能力。",
      nextNeed: "后续审核项目自有 Logo 与真实产品素材。"
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishMemory/tree/dev/docs",
        description: "项目定位、设计与开发文档。",
        boundary: "文档目标与当前已实现能力分别说明。"
      },
      {
        label: "Current status",
        href: "https://github.com/laugh0608/RadishMemory/blob/dev/docs/status/current.md",
        description: "当前阶段、能力与后续计划。",
        boundary: "以项目限定范围为准，不等于已公开发布。"
      }
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishMemory",
        isExternal: true
      }
    ]
  },
  {
    id: "nexus",
    tone: "nexus",
    name: "RadishNexus",
    shortName: "Nexus",
    path: "/nexus",
    githubUrl: "https://github.com/laugh0608/RadishNexus",
    mark: {
      monogram: "N",
      wordmark: "Nexus",
      label: "Temporary mark",
      note: "RadishX 代码内临时标识，不是 RadishNexus 正式 Logo。"
    },
    tagline: "研发团队的沟通、协作与交付枢纽",
    summary: "RadishNexus 面向研发团队，将讨论、决策、工单、文档和交付上下文放进同一工作空间，以自部署为优先方向。",
    orbitLabel: "团队协作与交付",
    role: "研发团队的沟通、协作与交付枢纽",
    stage: "Web 纵向原型，完善团队使用闭环",
    status: "Prototype",
    chips: [
      "Teams",
      "Decisions",
      "Delivery"
    ],
    capabilities: [
      "团队项目与频道浏览",
      "讨论到决策和工单的局部闭环",
      "基础 Markdown 文档与版本恢复"
    ],
    signals: [
      "Go 服务与 React Web 已接通首批业务切片",
      "基础 Markdown 文档已接通，完整成员治理待补齐",
      "真实交付集成与团队持续使用尚未验收"
    ],
    assetReview: {
      source: "项目文字定位与代码内临时标识",
      boundary: "不代表产品截图、正式 Logo 或已发布能力。",
      nextNeed: "后续审核项目自有 Logo 与真实产品素材。"
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishNexus/tree/dev/docs",
        description: "项目定位、设计与开发文档。",
        boundary: "文档目标与当前已实现能力分别说明。"
      },
      {
        label: "Current status",
        href: "https://github.com/laugh0608/RadishNexus/blob/dev/docs/status/current.md",
        description: "当前阶段、能力与后续计划。",
        boundary: "以项目限定范围为准，不等于已公开发布。"
      }
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/laugh0608/RadishNexus",
        isExternal: true
      }
    ]
  },
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project])) as Record<
  ProjectRouteId,
  Project
>;
