import { mainNavigation } from "../../data/navigation";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";

type SiteHeaderProps = {
  currentPath: string;
};

function isActive(currentPath: string, href: string) {
  const path = href.split("#")[0];

  if (href === "/#projects") {
    return projects.some((project) => project.path === currentPath);
  }

  return path === currentPath;
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <RouteLink className="site-header__brand" to="/" aria-label="RadishX 首页">
        <img src="/favicon.ico" width="32" height="32" alt="" />
        <span>RadishX</span>
      </RouteLink>
      <nav className="site-header__nav" aria-label="主导航">
        {mainNavigation.map((item) =>
          item.isExternal ? (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ) : (
            <RouteLink
              key={item.label}
              to={item.href}
              aria-current={isActive(currentPath, item.href) ? "page" : undefined}
            >
              {item.label}
            </RouteLink>
          ),
        )}
      </nav>
    </header>
  );
}
