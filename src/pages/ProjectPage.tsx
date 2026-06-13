import { MediaFrame } from "../components/ui/MediaFrame";
import { RouteLink } from "../components/ui/RouteLink";
import { SectionHeader } from "../components/ui/SectionHeader";
import { StatusChip } from "../components/ui/StatusChip";
import type { ProjectRouteId } from "../app/routes";
import { projectById, projects } from "../data/projects";

type ProjectPageProps = {
  projectId: ProjectRouteId;
};

export function ProjectPage({ projectId }: ProjectPageProps) {
  const project = projectById[projectId];
  const siblings = projects.filter((item) => item.id !== projectId);

  return (
    <>
      <section className={`project-hero project-hero--${project.tone}`}>
        <div className="project-hero__inner">
          <div className="project-hero__copy">
            <p className="eyebrow">{project.futureDomain}</p>
            <h1>{project.name}</h1>
            <p>{project.tagline}</p>
            <div className="project-hero__chips">
              <StatusChip tone="brand">{project.status}</StatusChip>
              {project.chips.map((chip) => (
                <StatusChip key={chip}>{chip}</StatusChip>
              ))}
            </div>
            <div className="project-hero__actions">
              <a className="button button--primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span className="button button--disabled" aria-disabled="true">
                访问项目 · Coming Soon
              </span>
            </div>
          </div>
          <MediaFrame project={project} />
        </div>
      </section>
      <section className="section section--surface">
        <div className="section__inner project-detail-grid">
          <article className="detail-panel detail-panel--wide">
            <p className="eyebrow">Role</p>
            <h2>{project.role}</h2>
            <p>{project.summary}</p>
          </article>
          <article className="detail-panel">
            <p className="eyebrow">Stage</p>
            <h2>{project.stage}</h2>
            <p>第一版官网先展示稳定公开信息，不暴露尚未上线的访问入口。</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Capabilities"
            title="当前展示重点"
            description="详情页模板优先让定位、状态、GitHub、未来域名和项目关系保持可扫读。"
          />
          <div className="split-list">
            <div>
              <h3>关键能力</h3>
              <ul className="check-list">
                {project.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>状态信息</h3>
              <ul className="check-list">
                {project.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--muted">
        <div className="section__inner">
          <SectionHeader eyebrow="Matrix" title="回到 RadishX 项目矩阵" />
          <div className="related-projects">
            {siblings.map((sibling) => (
              <RouteLink key={sibling.id} className={`related-project related-project--${sibling.tone}`} to={sibling.path}>
                <strong>{sibling.name}</strong>
                <span>{sibling.tagline}</span>
              </RouteLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
