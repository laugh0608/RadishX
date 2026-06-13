import { projects } from "./projects";

export const githubOrganizationUrl = "https://github.com/laugh0608";
export const radishXRepositoryUrl = "https://github.com/laugh0608/RadishX";

export const mainNavigation = [
  { label: "Projects", href: "/#projects" },
  { label: "Mascot", href: "/mascot" },
  { label: "About", href: "/about" },
  { label: "GitHub", href: radishXRepositoryUrl, isExternal: true },
];

export const projectNavigation = projects.map((project) => ({
  label: project.name,
  href: project.path,
}));
