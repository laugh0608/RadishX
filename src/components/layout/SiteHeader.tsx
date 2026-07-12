import type { ThemePreference } from "../../app/theme";
import { mainNavigation } from "../../data/navigation";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { ThemeToggle } from "../ui/ThemeToggle";

type SiteHeaderProps = {
  currentHash: string;
  currentPath: string;
  themePreference: ThemePreference;
  onThemeChange: (next: ThemePreference) => void;
};

function isActive(currentPath: string, currentHash: string, href: string) {
  const path = href.split("#")[0];

  if (href === "/#projects") {
    return currentHash === "#projects" || projects.some((project) => project.path === currentPath);
  }

  return path === currentPath;
}

export function SiteHeader({ currentHash, currentPath, themePreference, onThemeChange }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <RouteLink className="site-header__brand" to="/" aria-label="RadishX 首页">
        <img src="/favicon.ico" width="32" height="32" alt="" />
        <span>RadishX</span>
      </RouteLink>
      <div className="site-header__actions">
        <nav className="site-header__nav" aria-label="主导航">
          {mainNavigation.map((item) =>
            item.isExternal ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label="RadishX GitHub 仓库">
                {item.label}
              </a>
            ) : (
              <RouteLink
                key={item.label}
                to={item.href}
                aria-current={isActive(currentPath, currentHash, item.href) ? "page" : undefined}
              >
                {item.label}
              </RouteLink>
            ),
          )}
        </nav>
        <ThemeToggle preference={themePreference} onChange={onThemeChange} />
      </div>
    </header>
  );
}
