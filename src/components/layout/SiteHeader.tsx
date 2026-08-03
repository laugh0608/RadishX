import { useEffect, useRef, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentHash, currentPath]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  const navigation = (label: string, closeAfterNavigate = false) => (
    <nav className="site-header__nav" aria-label={label}>
      {mainNavigation.map((item) =>
        item.isExternal ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RadishX GitHub 仓库"
            onClick={() => closeAfterNavigate && setMenuOpen(false)}
          >
            {item.label}
          </a>
        ) : (
          <RouteLink
            key={item.label}
            to={item.href}
            aria-current={isActive(currentPath, currentHash, item.href) ? "page" : undefined}
            onClick={() => closeAfterNavigate && setMenuOpen(false)}
          >
            {item.label}
          </RouteLink>
        ),
      )}
    </nav>
  );

  return (
    <header className="site-header" ref={headerRef}>
      <RouteLink className="site-header__brand" to="/" aria-label="RadishX 首页">
        <img src="/favicon.ico" width="32" height="32" alt="" />
        <span>RadishX</span>
      </RouteLink>

      <div className="site-header__actions site-header__desktop-actions">
        {navigation("主导航")}
        <ThemeToggle preference={themePreference} onChange={onThemeChange} />
      </div>

      <div className="site-header__mobile-controls">
        <button
          className="site-header__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-header-mobile-panel"
          aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
        <div
          className="site-header__mobile-panel"
          id="site-header-mobile-panel"
          hidden={!menuOpen}
        >
          {navigation("移动主导航", true)}
          <div className="site-header__mobile-theme">
            <span>Theme</span>
            <ThemeToggle preference={themePreference} onChange={onThemeChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
