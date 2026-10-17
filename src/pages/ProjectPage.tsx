import type { ProjectRouteId } from "../app/routes";
import { ProjectHeroArt } from "../components/project/ProjectHeroArt";
import { RouteLink } from "../components/ui/RouteLink";
import { projectById, projects } from "../data/projects";

type ProjectPageProps = {
  projectId: ProjectRouteId;
};

type DetailAction = {
  label: string;
  href: string;
  primary?: boolean;
};

function externalHref(href: string) {
  return href.replace(/^https?:\/\//, "");
}

function ProjectName({ name }: { name: string }) {
  if (name.startsWith("Radish") && name.length > "Radish".length) {
    return (
      <>
        Radish
        <wbr />
        {name.slice("Radish".length)}
      </>
    );
  }

  return <>{name}</>;
}

export function ProjectPage({ projectId }: ProjectPageProps) {
  const project = projectById[projectId];
  const projectIndex = projects.findIndex((item) => item.id === projectId);
  const related = Array.from({ length: 4 }, (_, offset) => projects[(projectIndex + offset + 1) % projects.length]);
  const webLink = project.links.find((link) => link.href.includes("radishx.com"));
  const primaryLink = webLink ?? project.links[0];
  const docsLink = project.documentation[0];
  const secondaryLinks = project.links.filter((link) => link !== primaryLink);
  const actions: DetailAction[] = [];

  if (primaryLink) {
    actions.push({ label: primaryLink.label, href: primaryLink.href, primary: true });
  }
  if (docsLink) {
    actions.push({ label: "阅读文档", href: docsLink.href });
  }
  for (const link of secondaryLinks) {
    if (actions.length >= 3) {
      break;
    }
    actions.push({ label: link.label, href: link.href });
  }

  const exploreName = project.id === "radish" ? "Radish" : project.shortName;

  return (
    <div className="project2-page">
      <section className="project2-hero">
        <div className="project2-hero__inner">
          <div className="project2-hero__copy">
            <RouteLink className="project2-back" to="/#collection">
              <span aria-hidden="true">←</span>
              全部项目
            </RouteLink>
            <p className="project2-kicker">{project.orbitLabel}</p>
            <h1>
              <ProjectName name={project.name} />
            </h1>
            <p className="project2-hero__tagline">{project.tagline}</p>
            <p className="project2-hero__summary">{project.summary}</p>
            <ul className="project2-chips" aria-label={`${project.name} 标签`}>
              {project.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
            <div className="project2-actions">
              {actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  className={`project2-action ${action.primary ? "project2-action--primary" : "project2-action--secondary"}`}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} ${action.label}`}
                >
                  {action.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <dl className="project2-facts" aria-label={`${project.name} 公开信息摘要`}>
              <div>
                <dt>状态</dt>
                <dd>{project.status}</dd>
              </div>
              <div>
                <dt>阶段</dt>
                <dd>{project.stage}</dd>
              </div>
              <div>
                <dt>Web 入口</dt>
                <dd>{project.domain?.name ?? "暂无公开站点"}</dd>
              </div>
            </dl>
          </div>
          <ProjectHeroArt project={project} />
        </div>
      </section>

      <section className="project2-section project2-focus" id="focus">
        <div className="project2-section__inner">
          <div className="project2-section__intro">
            <p className="project2-kicker">Focus</p>
            <h2>{project.role}</h2>
          </div>
          <div className="project2-focus__list">
            {project.capabilities.map((capability, index) => (
              <article className="project2-focus__item" key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{capability}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project2-section project2-status" id="status">
        <div className="project2-section__inner">
          <div className="project2-section__intro">
            <p className="project2-kicker">Current state</p>
            <h2>{project.stage}</h2>
            <p className="project2-status__value">{project.status}</p>
          </div>
          <ul className="project2-signals">
            {project.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project2-section project2-explore" id="explore">
        <div className="project2-section__inner">
          <div className="project2-section__intro">
            <p className="project2-kicker">Explore</p>
            <h2>继续探索 {exploreName}。</h2>
          </div>
          <div className="project2-link-list">
            {project.documentation.map((document) => (
              <a
                key={document.href}
                className="project2-link"
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project2-link__label">{document.label}</span>
                <strong>{document.description}</strong>
                <span className="project2-link__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
            {project.links.map((link) => (
              <a
                key={`${link.label}-${link.href}`}
                className="project2-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="project2-link__label">{link.label}</span>
                <strong>{externalHref(link.href)}</strong>
                <span className="project2-link__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="project2-related">
        <div className="project2-section__inner">
          <header className="project2-related__head">
            <div>
              <p className="project2-kicker">Continue</p>
              <h2>继续浏览</h2>
            </div>
            <RouteLink className="project2-related__all" to="/#collection">
              全部十二个项目
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </header>
          <div className="project2-related__grid">
            {related.map((item) => (
              <RouteLink key={item.id} className="project2-related-card" to={item.path}>
                <span className="project2-related-card__meta">{item.orbitLabel}</span>
                <strong>{item.name}</strong>
                <span>{item.tagline}</span>
                <span className="project2-related-card__status">{item.status}</span>
              </RouteLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
