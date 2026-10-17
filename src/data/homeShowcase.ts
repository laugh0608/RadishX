import type { ProjectRouteId } from "../app/routes";

export type HomeCategoryId = "community" | "tools" | "games" | "explorations";

export type HomeCollectionTier = "large" | "strong" | "medium" | "compact";

export type HomeCollectionSpan = 3 | 5 | 7;

export type HomePanelTone = "jade" | "cream" | "image" | "ink" | "blue" | "sand" | "mint" | "paper";

export type HomeFeaturedProject = {
  id: ProjectRouteId;
  category: string;
  line: string;
  cta: string;
};

export type HomeCollectionItem = {
  id: ProjectRouteId;
  category: HomeCategoryId;
  tier: HomeCollectionTier;
  span: HomeCollectionSpan;
  tone: HomePanelTone;
  displayCategory?: string;
};

export const homeCategories: { id: HomeCategoryId; label: string; note: string }[] = [
  { id: "community", label: "Community", note: "社区与创作" },
  { id: "tools", label: "Tools", note: "工具与工作流" },
  { id: "games", label: "Games", note: "游戏与世界观" },
  { id: "explorations", label: "Explorations", note: "研究与基础设施" },
];

export const featuredProjects: HomeFeaturedProject[] = [
  {
    id: "radish",
    category: "Community",
    line: "兴趣相聚，内容生长。",
    cta: "了解 Radish",
  },
  {
    id: "ink",
    category: "Creation",
    line: "专注写作，轻松排版。",
    cta: "了解 Ink",
  },
  {
    id: "flow",
    category: "Engineering",
    line: "稳态流程，从画布开始。",
    cta: "了解 Flow",
  },
  {
    id: "lex",
    category: "Input",
    line: "字里有序，输入由你。",
    cta: "了解 Lex",
  },
];

export const homeCollection: HomeCollectionItem[] = [
  { id: "radish", category: "community", tier: "large", span: 7, tone: "jade" },
  { id: "ink", category: "community", tier: "large", span: 5, tone: "cream", displayCategory: "Creation" },
  { id: "catalyst", category: "games", tier: "strong", span: 7, tone: "image" },
  { id: "mind", category: "tools", tier: "strong", span: 5, tone: "ink" },
  { id: "lex", category: "tools", tier: "medium", span: 5, tone: "mint" },
  { id: "axiom", category: "tools", tier: "medium", span: 7, tone: "blue" },
  { id: "memory", category: "tools", tier: "medium", span: 5, tone: "sand" },
  { id: "nexus", category: "tools", tier: "medium", span: 7, tone: "paper" },
  { id: "flow", category: "explorations", tier: "compact", span: 3, tone: "blue" },
  { id: "link", category: "explorations", tier: "compact", span: 3, tone: "sand" },
  { id: "ledger", category: "explorations", tier: "compact", span: 3, tone: "jade" },
  { id: "root", category: "explorations", tier: "compact", span: 3, tone: "ink" },
];

export function getHomeCategory(id: HomeCategoryId) {
  return homeCategories.find((category) => category.id === id) ?? homeCategories[0];
}

export function getHomeCollectionItem(id: ProjectRouteId) {
  return homeCollection.find((item) => item.id === id);
}
