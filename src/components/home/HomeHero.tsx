import { type KeyboardEvent, useRef, useState } from "react";

import type { ProjectRouteId } from "../../app/routes";
import { featuredProjects, homeCategories } from "../../data/homeShowcase";
import { projectById, projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { FeaturedArt } from "./HomeArt";

function projectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HomeHero() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectRouteId>(featuredProjects[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeIndex = featuredProjects.findIndex((project) => project.id === activeProjectId);
  const activeFeatured = featuredProjects[activeIndex];
  const activeProject = projectById[activeProjectId];

  const activateProject = (index: number, moveFocus = false) => {
    const normalizedIndex = (index + featuredProjects.length) % featuredProjects.length;
    setActiveProjectId(featuredProjects[normalizedIndex].id);

    if (moveFocus) {
      window.requestAnimationFrame(() => {
        const buttons = tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
        buttons?.[normalizedIndex]?.focus({ preventScroll: true });
      });
    }
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      activateProject(index + 1, true);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      activateProject(index - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      activateProject(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      activateProject(featuredProjects.length - 1, true);
    }
  };

  return (
    <section className="home2-hero" aria-labelledby="home2-title">
      <div className="home2-hero__inner">
        <div className="home2-hero__copy">
          <p className="home2-kicker">RadishX / Independent project collection</p>
          <h1 id="home2-title">RadishX</h1>
          <p className="home2-hero__statement">
            把好奇心，
            <br />
            做成作品。
          </p>
          <p className="home2-hero__intro">从中文输入到异星工厂，探索日常与想象力的更多可能。</p>
          <div className="home2-hero__actions">
            <RouteLink className="home2-button home2-button--primary" to="/#collection">
              浏览全部项目
              <span aria-hidden="true">↓</span>
            </RouteLink>
            <RouteLink className="home2-button home2-button--secondary" to="/mascot">
              认识萝小白
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </div>
          <ul className="home2-hero__categories" aria-label="项目分类">
            {homeCategories.map((category) => (
              <li key={category.id}>
                <span>{category.label}</span>
                <small>{category.note}</small>
              </li>
            ))}
          </ul>
          <p className="home2-hero__meta">RADISHX / {String(projects.length).padStart(2, "0")} PROJECTS / SOURCE AVAILABLE</p>
        </div>

        <article className={`home2-featured home2-featured--${activeProject.tone}`}>
          <header className="home2-featured__header">
            <span>精选 / {projectNumber(activeIndex)}</span>
            <span>{activeProject.status}</span>
          </header>

          <div
            key={activeProject.id}
            className="home2-featured__scene"
            id="home2-featured-panel"
            role="tabpanel"
            aria-labelledby={`home2-featured-tab-${activeProject.id}`}
          >
            <div className="home2-featured__intro">
              <span className="home2-featured__number">{projectNumber(activeIndex)}</span>
              <p className="home2-featured__category">{activeFeatured.category}</p>
              <h2>{activeProject.name}</h2>
              <p className="home2-featured__line">{activeFeatured.line}</p>
              <RouteLink
                className="home2-featured__cta"
                to={activeProject.path}
                aria-label={`查看 ${activeProject.name} 项目页`}
              >
                {activeFeatured.cta}
                <span aria-hidden="true">↗</span>
              </RouteLink>
            </div>
            <FeaturedArt projectId={activeProject.id} />
          </div>

          <div className="home2-featured__tabs" ref={tabsRef} role="tablist" aria-label="切换精选项目">
            {featuredProjects.map((featured, index) => {
              const project = projectById[featured.id];
              const isActive = project.id === activeProject.id;

              return (
                <button
                  key={project.id}
                  id={`home2-featured-tab-${project.id}`}
                  type="button"
                  role="tab"
                  aria-controls="home2-featured-panel"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => activateProject(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  <span>{projectNumber(index)}</span>
                  <strong>{project.shortName}</strong>
                </button>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
