import type { ProjectRouteId } from "../app/routes";

export type ProjectTone = "radish" | "catalyst" | "flow" | "mind";

export type ProjectLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
  note?: string;
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
    stage: "核心架构推进中",
    status: "Preview",
    chips: ["Rust", "Process Simulation", "CAPE-OPEN"],
    capabilities: ["稳态流程模拟", "Rust UI 主界面", ".NET / COM 适配边界"],
    signals: ["首版不展示真实截图", "未来独立域名为 flow.radishx.com", "官网详情页先保留状态和技术边界"],
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
        note: "Coming Soon",
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
