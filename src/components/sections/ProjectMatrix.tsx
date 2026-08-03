import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { HomeProjectVisual } from "./HomeProjectVisual";

function projectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProjectMatrix() {
  return (
    <section className="home-projects" id="projects" aria-labelledby="home-projects-title">
      <div className="home-projects__inner">
        <header className="home-section-title">
          <p className="home-kicker">Projects</p>
          <h2 id="home-projects-title">Radish 生态</h2>
        </header>

        <div className="home-project-grid">
          {projects.map((project, index) => (
            <article key={project.id} className={`home-project-card home-project-card--${project.tone}`}>
              <RouteLink to={project.path} aria-label={`查看 ${project.name} 项目页`}>
                <div className="home-project-card__meta">
                  <span>{projectNumber(index)}</span>
                  <span>{project.status}</span>
                </div>
                <HomeProjectVisual context="card" project={project} />
                <div className="home-project-card__identity">
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.futureDomain}</span>
                  </div>
                  <span className="home-project-card__arrow" aria-hidden="true">↗</span>
                </div>
              </RouteLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
