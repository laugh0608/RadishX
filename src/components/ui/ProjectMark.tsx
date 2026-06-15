import type { Project } from "../../data/projects";

type ProjectMarkProps = {
  project: Project;
  size?: "compact" | "default" | "hero";
  showNote?: boolean;
};

export function ProjectMark({ project, size = "default", showNote = false }: ProjectMarkProps) {
  return (
    <div className={`project-mark project-mark--${project.tone} project-mark--${size}`} aria-label={`${project.name} ${project.mark.label}: ${project.mark.note}`}>
      <span className="project-mark__glyph" aria-hidden="true">
        {project.mark.monogram}
      </span>
      <span className="project-mark__body">
        <strong>{project.mark.wordmark}</strong>
        <span>{showNote ? project.mark.note : project.mark.label}</span>
      </span>
    </div>
  );
}
