export type ProjectRouteId = "radish" | "catalyst" | "flow" | "mind" | "lex";

export type AppRoute =
  | {
      kind: "home";
      path: "/";
      title: string;
      description: string;
    }
  | {
      kind: "project";
      path: string;
      projectId: ProjectRouteId;
      title: string;
      description: string;
    }
  | {
      kind: "mascot" | "about";
      path: string;
      title: string;
      description: string;
    }
  | {
      kind: "not-found";
      path: string;
      title: string;
      description: string;
    };

export const appRoutes: AppRoute[] = [
  {
    kind: "home",
    path: "/",
    title: "RadishX - Radish 系列项目矩阵",
    description: "RadishX 是 Radish 系列项目的官网与统一入口，展示内容社区、游戏、流程模拟、智能工具、中文输入和虚拟形象萝小白。",
  },
  {
    kind: "project",
    path: "/radish",
    projectId: "radish",
    title: "Radish - RadishX",
    description: "Radish 是 RadishX 的内容社区与 WebOS 风格工作台，承载公开内容、项目入口和长期社区方向。",
  },
  {
    kind: "project",
    path: "/catalyst",
    projectId: "catalyst",
    title: "RadishCatalyst - RadishX",
    description: "RadishCatalyst 是 RadishX 的异星工业科幻 ARPG 方向，聚焦角色探索、基地叙事和游戏化表达。",
  },
  {
    kind: "project",
    path: "/flow",
    projectId: "flow",
    title: "RadishFlow - RadishX",
    description: "RadishFlow 是 RadishX 的稳态流程模拟软件方向，强调 Rust UI、工程可信感和流程画布。",
  },
  {
    kind: "project",
    path: "/mind",
    projectId: "mind",
    title: "RadishMind - RadishX",
    description: "RadishMind 是 RadishX 的外部智能层与模型实验入口，聚焦协议、评测、工具编排和可审计能力。",
  },
  {
    kind: "project",
    path: "/lex",
    projectId: "lex",
    title: "RadishLex - RadishX",
    description: "RadishLex 是 RadishX 的本地优先中文输入系统方向，聚焦离线输入、可解释学习和端到端加密同步。",
  },
  {
    kind: "mascot",
    path: "/mascot",
    title: "萝小白 - RadishX",
    description: "萝小白是 RadishX 的虚拟形象，当前页面展示原始形象、可爱Q版和虚拟形象完全体三种形态与素材口径。",
  },
  {
    kind: "about",
    path: "/about",
    title: "About - RadishX",
    description: "了解 RadishX 的组织说明、联系方式、GitHub 仓库入口、微信公众号二维码和 radishx.com 部署边界。",
  },
];

export const notFoundRoute = (path: string): AppRoute => ({
  kind: "not-found",
  path,
  title: "页面不存在 - RadishX",
  description: "该页面不存在。RadishX 当前开放首页、五个项目介绍页、Mascot 和 About。",
});

export function resolveRoute(pathname: string): AppRoute {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return appRoutes.find((route) => route.path === normalizedPath) ?? notFoundRoute(normalizedPath);
}
