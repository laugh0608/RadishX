import { projects } from "../data/projects";

export type ProjectRouteId = "radish" | "catalyst" | "flow" | "mind" | "lex" | "axiom" | "link" | "memory" | "nexus" | "ink" | "ledger" | "root";

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
    description: "RadishX 是 Radish 系列项目的官网与统一入口，展示十二个产品，涵盖社区、游戏、流程模拟、AI、输入、语言验证、离线通信、个人记忆、团队协作、写作排版、个人记账与实验操作系统，以及虚拟形象萝小白。",
  },
  ...projects.map((project): AppRoute => ({
    kind: "project",
    path: project.path,
    projectId: project.id,
    title: `${project.name} - RadishX`,
    description: project.summary,
  })),
  {
    kind: "mascot",
    path: "/mascot",
    title: "萝小白 - RadishX",
    description: "萝小白是 RadishX 的虚拟形象，页面展示原始形象、可爱Q版和虚拟形象完全体三种形态、表情与服装 Gallery，以及公开使用边界。",
  },
  {
    kind: "about",
    path: "/about",
    title: "About - RadishX",
    description: "了解 RadishX、联系方式、GitHub 仓库入口、微信公众号二维码和 radishx.com 域名边界。",
  },
];

export const notFoundRoute = (path: string): AppRoute => ({
  kind: "not-found",
  path,
  title: "页面不存在 - RadishX",
  description: "该页面不存在。RadishX 当前开放首页、十二个产品介绍页、Mascot 和 About。",
});

export function resolveRoute(pathname: string): AppRoute {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return appRoutes.find((route) => route.path === normalizedPath) ?? notFoundRoute(normalizedPath);
}
