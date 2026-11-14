import { projects } from "./projects";

export const githubOrganizationUrl = "https://github.com/RadishIntelligence";
export const radishXRepositoryUrl = "https://github.com/RadishIntelligence/RadishX";
export const radishUISiteUrl = "https://ui.radishx.com/";
export const radishUIRepositoryUrl = "https://github.com/RadishIntelligence/RadishUI";

export const mainNavigation = [
  { label: "Projects", href: "/#collection" },
  { label: "Mascot", href: "/mascot" },
  { label: "About", href: "/about" },
  { label: "GitHub", href: radishXRepositoryUrl, isExternal: true },
];

export const projectNavigation = projects.map((project) => ({
  label: project.name,
  href: project.path,
}));
