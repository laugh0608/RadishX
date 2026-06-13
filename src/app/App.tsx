import { useEffect, useMemo, useState } from "react";

import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { MascotPage } from "../pages/MascotPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProjectPage } from "../pages/ProjectPage";
import { resolveRoute } from "./routes";

function getLocationSnapshot() {
  return {
    hash: window.location.hash,
    pathname: window.location.pathname,
  };
}

function updateMetaDescription(description: string) {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (meta) {
    meta.content = description;
  }
}

export function App() {
  const [location, setLocation] = useState(getLocationSnapshot);
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
    document.title = route.title;
    updateMetaDescription(route.description);

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, route]);

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
      <SiteHeader currentPath={route.path} />
      <main>{page}</main>
      <SiteFooter />
    </div>
  );
}
