import type { Project } from "../../data/projects";
import { MediaFrame } from "../ui/MediaFrame";
import { ProjectMark } from "../ui/ProjectMark";
import { RouteLink } from "../ui/RouteLink";
import { StatusChip } from "../ui/StatusChip";

type ProjectBandProps = {
  project: Project;
  index: number;
};

export function ProjectBand({ project, index }: ProjectBandProps) {
  return (
    <article className={`project-band project-band--${project.tone} ${index % 2 ? "project-band--reverse" : ""}`}>
      <div className="project-band__copy">
        <ProjectMark project={project} />
        <div className="project-band__chips">
          <StatusChip tone={project.tone === "radish" ? "success" : project.tone === "flow" ? "ink" : "warning"}>
            {project.status}
          </StatusChip>
          {project.chips.slice(0, 2).map((chip) => (
            <StatusChip key={chip}>{chip}</StatusChip>
          ))}
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project-band__domain" aria-label={`${project.name} 公开入口`}>
          <span>{project.futureDomain}</span>
          <strong>{project.role}</strong>
        </div>
        <ul className="project-band__signals">
          {project.signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
        <div className="project-band__actions">
          <RouteLink className="button button--primary" to={project.path}>
            查看详情
          </RouteLink>
          <a className="button button--secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <MediaFrame project={project} compact />
    </article>
  );
}
