import { useEffect, useMemo, useRef, useState } from "react";

import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { MascotPage } from "../pages/MascotPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectPage } from "../pages/ProjectPage";
import { applyRouteMetadata } from "./metadata";
import { resolveRoute } from "./routes";

function getLocationSnapshot() {
  return {
    hash: window.location.hash,
    pathname: window.location.pathname,
  };
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getHashTarget(hash: string) {
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

export function App() {
  const [location, setLocation] = useState(getLocationSnapshot);
  const mainRef = useRef<HTMLElement>(null);
  const previousPathRef = useRef(location.pathname);
  const route = useMemo(() => resolveRoute(location.pathname), [location.pathname]);

  useEffect(() => {
    const syncLocation = () => setLocation(getLocationSnapshot());

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("radishx:navigate", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("radishx:navigate", syncLocation);
    };
  }, []);

  useEffect(() => {
    applyRouteMetadata(route);
    const pathChanged = previousPathRef.current !== location.pathname;
    previousPathRef.current = location.pathname;
    const behavior = prefersReducedMotion() ? "auto" : "smooth";

    if (location.hash) {
      const target = getHashTarget(location.hash);
      if (target) {
        const frameId = window.requestAnimationFrame(() => {
          target.scrollIntoView({ behavior, block: "start" });
        });
        return () => window.cancelAnimationFrame(frameId);
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    if (pathChanged) {
      mainRef.current?.focus({ preventScroll: true });
    }
  }, [location.hash, location.pathname, route]);

  let page;

  if (route.kind === "home") {
    page = <HomePage />;
  } else if (route.kind === "project") {
    page = <ProjectPage projectId={route.projectId} />;
  } else if (route.kind === "mascot") {
    page = <MascotPage />;
  } else if (route.kind === "about") {
    page = <AboutPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        跳到正文
      </a>
      <SiteHeader currentHash={location.hash} currentPath={route.path} />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {page}
      </main>
      <SiteFooter />
    </div>
  );
}
