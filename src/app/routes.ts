export type ProjectRouteId = "radish" | "catalyst" | "flow" | "mind";

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
    title: "RadishX",
    description: "Radish 系列项目矩阵官网与统一入口。",
  },
  {
    kind: "project",
    path: "/radish",
    projectId: "radish",
    title: "Radish - RadishX",
    description: "现代化内容社区与 WebOS 风格工作台。",
  },
  {
    kind: "project",
    path: "/catalyst",
    projectId: "catalyst",
    title: "RadishCatalyst - RadishX",
    description: "异星工业科幻 ARPG 与角色探索项目。",
  },
  {
    kind: "project",
    path: "/flow",
    projectId: "flow",
    title: "RadishFlow - RadishX",
    description: "以 Rust 为核心的稳态流程模拟软件。",
  },
  {
    kind: "project",
    path: "/mind",
    projectId: "mind",
    title: "RadishMind - RadishX",
    description: "Radish 体系下的外部智能层与模型实验入口。",
  },
  {
    kind: "mascot",
    path: "/mascot",
    title: "萝小白 - RadishX",
    description: "RadishX 虚拟形象萝小白的三种形态与素材方向。",
  },
  {
    kind: "about",
    path: "/about",
    title: "About - RadishX",
    description: "RadishX 组织说明、联系方式和 GitHub 仓库入口。",
  },
];

export const notFoundRoute = (path: string): AppRoute => ({
  kind: "not-found",
  path,
  title: "Not Found - RadishX",
  description: "页面不存在。",
});

export function resolveRoute(pathname: string): AppRoute {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return appRoutes.find((route) => route.path === normalizedPath) ?? notFoundRoute(normalizedPath);
}
