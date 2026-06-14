import type { ProjectRouteId } from "../app/routes";

export type ProjectTone = "radish" | "catalyst" | "flow" | "mind";

export type ProjectLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
  note?: string;
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

export type ProjectDiagram = {
  label: string;
  title: string;
  note: string;
  coreLabel: string;
  coreTitle: string;
  nodes: ProjectDiagramNode[];
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
  futureDomain: string;
  githubUrl: string;
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
    tagline: "内容社区与 WebOS 风格工作台",
    summary:
      "Radish 是系列项目的内容核心，承载社区、内容发布、个人工作台和后续生态聚合能力。",
    orbitLabel: "社区与内容入口",
    role: "Radish 体系的内容与用户入口",
    stage: "规划与工程迭代中",
    status: "Source Available",
    chips: ["Community", "WebOS", "Content Hub"],
    capabilities: ["现代化内容社区", "WebOS 风格工作台", "用户与项目聚合入口"],
    signals: ["面向公开内容与社区运营", "未来独立域名为 hub.radishx.com", "首版官网展示 GitHub 入口"],
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
    tagline: "异星工业科幻 ARPG",
    summary:
      "RadishCatalyst 面向游戏表达，探索异星化工基地、角色成长、战斗和协作联机的长期方向。",
    orbitLabel: "游戏与世界观",
    role: "RadishX 的叙事、角色和游戏化表达",
    stage: "概念与原型筹备",
    status: "Coming Soon",
    chips: ["ARPG", "Industrial Sci-fi", "Worldbuilding"],
    capabilities: ["异星基地探索", "人物成长与战斗", "后续协作联机方向"],
    signals: ["第一版官网展示项目定位", "未来独立域名为 forge.radishx.com", "真实游戏画面后续替换"],
    visual: {
      src: "/images/projects/catalyst/radishcatalyst-rpg-exploration-concept-web.jpg",
      alt: "RadishCatalyst 异星化工基地探索概念图",
      label: "Concept visual",
      title: "异星基地概念视觉",
      note: "来自 RadishCatalyst 源资产目录，按概念图使用，不作为实机画面或上线状态承诺。",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
    assetReview: {
      source: "RadishCatalyst 源资产概念图",
      boundary: "只按概念视觉展示，不是 gameplay、实机截图或上线承诺。",
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
    tagline: "稳态流程模拟软件",
    summary:
      "RadishFlow 以 Rust 为核心，Rust UI 作为主界面，并通过 .NET 适配 CAPE-OPEN / COM。",
    orbitLabel: "工程与流程画布",
    role: "RadishX 中最强调工程可信感的桌面工具",
    stage: "公开维护已暂停",
    status: "Archived",
    chips: ["Rust", "Process Simulation", "CAPE-OPEN"],
    capabilities: ["稳态流程模拟", "Rust UI 主界面", ".NET / COM 适配边界"],
    signals: ["展示历史 UI 视觉基线", "未来独立域名为 flow.radishx.com", "官网详情页保留合规和维护边界"],
    visual: {
      src: "/images/projects/flow/radishflow-workbench-concept-web.jpg",
      alt: "RadishFlow Studio 工作台视觉基线图",
      label: "UI baseline",
      title: "Studio 工作台视觉基线",
      note: "来自 RadishFlow 自身 baseline 目录，仅作为历史 UI 方向展示，不代表继续公开维护或产品化承诺。",
      width: 1600,
      height: 900,
      ratio: "wide",
    },
    assetReview: {
      source: "RadishFlow Studio UI baseline",
      boundary: "只展示历史 UI 方向；项目公开维护已暂停，不表达下载、演示或继续交付。",
      nextNeed: "如未来恢复公开维护，再重新审核当前截图、版本状态和发布口径。",
    },
    documentation: [
      {
        label: "Docs index",
        href: "https://github.com/laugh0608/RadishFlow/tree/dev/docs",
        description: "历史文档入口，覆盖 Studio guide、reference、architecture、status 和 MVP 文档。",
        boundary: "项目已停止公开维护；该入口只作为历史代码与个人学习记录索引。",
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
        note: "Paused",
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
    tagline: "外部智能层与模型实验",
    summary:
      "RadishMind 负责协议、评测、工具编排和模型实验，是 Radish 体系的智能能力外接层。",
    orbitLabel: "智能与工具编排",
    role: "RadishX 的智能协议、评测和实验入口",
    stage: "方向确认与接口规划",
    status: "Planning",
    chips: ["AI Protocol", "Evaluation", "Tooling"],
    capabilities: ["模型实验记录", "工具编排", "审计与评测口径"],
    signals: ["强调可审计与可复用", "未来独立域名为 mind.radishx.com", "首版官网只展示稳定公开信息"],
    diagram: {
      label: "Protocol map",
      title: "协议与评测视觉",
      note: "基于当前公开定位生成的代码内视觉，不引入外部产品参考截图，也不声明已有正式产品 UI。",
      coreLabel: "RadishMind",
      coreTitle: "External Intelligence Layer",
      nodes: [
        {
          label: "Protocol",
          value: "上下文与工具契约",
        },
        {
          label: "Evaluation",
          value: "样本、基线与失败分类",
        },
        {
          label: "Tooling",
          value: "工具编排与运行边界",
        },
        {
          label: "Audit",
          value: "证据链与可复用记录",
        },
      ],
    },
    assetReview: {
      source: "RadishX 代码内协议图",
      boundary: "表达公开定位，不是 RadishMind Console 或正式产品 UI 截图。",
      nextNeed: "后续补项目自有 Logo、Console 截图或真实协议 / 评测可视化图。",
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
];

export const projectById = Object.fromEntries(projects.map((project) => [project.id, project])) as Record<
  ProjectRouteId,
  Project
>;
