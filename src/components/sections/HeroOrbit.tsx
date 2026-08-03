import { type KeyboardEvent, useRef, useState } from "react";

import type { ProjectRouteId } from "../../app/routes";
import { projectById, projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { HomeProjectVisual } from "./HomeProjectVisual";

function projectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function HeroOrbit() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectRouteId>("radish");
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeProject = projectById[activeProjectId];
  const activeIndex = projects.findIndex((project) => project.id === activeProjectId);

  const activateProject = (index: number, moveFocus = false) => {
    const normalizedIndex = (index + projects.length) % projects.length;
    setActiveProjectId(projects[normalizedIndex].id);

    if (moveFocus) {
      window.requestAnimationFrame(() => {
        const buttons = tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role='tab']");
        buttons?.[normalizedIndex]?.focus();
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
      activateProject(projects.length - 1, true);
    }
  };

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-kicker">radishx.com</p>
          <h1 id="home-hero-title">
            Radish
            <span>项目矩阵</span>
          </h1>
          <div className="home-hero__actions">
            <RouteLink className="button button--primary" to="/#projects">
              浏览项目
              <span aria-hidden="true">↓</span>
            </RouteLink>
            <RouteLink className="button button--secondary" to="/mascot">
              认识萝小白
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </div>
          <p className="home-hero__meta">RADISHX / 05 PROJECTS / SOURCE AVAILABLE</p>
        </div>

        <article className={`home-project-stage home-project-stage--${activeProject.tone}`}>
          <header className="home-project-stage__header">
            <div>
              <span>{projectNumber(activeIndex)} / {String(projects.length).padStart(2, "0")}</span>
              <p>{activeProject.status}</p>
            </div>
            <RouteLink to={activeProject.path} aria-label={`查看 ${activeProject.name} 项目页`}>
              查看项目
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </header>

          <div
            key={activeProject.id}
            className="home-project-stage__panel"
            id="home-project-stage-panel"
            role="tabpanel"
            aria-labelledby={`home-project-tab-${activeProject.id}`}
          >
            <div className="home-project-stage__identity">
              <p>{activeProject.orbitLabel}</p>
              <h2>{activeProject.name}</h2>
            </div>
            <HomeProjectVisual context="stage" project={activeProject} />
          </div>

          <div className="home-project-stage__tabs" ref={tabsRef} role="tablist" aria-label="切换首页项目舞台">
            {projects.map((project, index) => {
              const isActive = project.id === activeProject.id;

              return (
                <button
                  key={project.id}
                  id={`home-project-tab-${project.id}`}
                  type="button"
                  role="tab"
                  aria-controls="home-project-stage-panel"
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
