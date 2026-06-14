import type { Project } from "../../data/projects";
import { StatusChip } from "./StatusChip";

type MediaFrameProps = {
  project: Project;
  compact?: boolean;
  showVisual?: boolean;
};

export function MediaFrame({ project, compact = false, showVisual = false }: MediaFrameProps) {
  const visual = showVisual && project.visual ? project.visual : undefined;

  return (
    <div
      className={`media-frame media-frame--${project.tone} ${compact ? "media-frame--compact" : ""} ${
        visual ? "media-frame--visual" : ""
      }`}
    >
      <div className="media-frame__topline">
        <span>{project.futureDomain}</span>
        <StatusChip tone={visual ? "brand" : "warning"}>{visual ? visual.label : "Coming Soon"}</StatusChip>
      </div>
      {visual ? (
        <figure className={`media-frame__visual media-frame__visual--${visual.ratio}`}>
          <img src={visual.src} width={visual.width} height={visual.height} alt={visual.alt} loading="lazy" decoding="async" />
          <figcaption>{visual.title}</figcaption>
        </figure>
      ) : (
        <div className="media-frame__orbit" aria-hidden="true">
          <span className="media-frame__ring media-frame__ring--outer" />
          <span className="media-frame__ring media-frame__ring--inner" />
          <span className="media-frame__node media-frame__node--a" />
          <span className="media-frame__node media-frame__node--b" />
          <span className="media-frame__node media-frame__node--c" />
          <span className="media-frame__logo">
            <img src="/favicon.ico" width="48" height="48" alt="" />
          </span>
        </div>
      )}
      <div className="media-frame__body">
        <div>
          <p>{project.shortName}</p>
          <strong>{project.stage}</strong>
        </div>
        <span>{project.orbitLabel}</span>
      </div>
      <div className="media-frame__note">
        <span>{visual ? "Reviewed asset" : "Visual placeholder"}</span>
        <strong>{visual ? visual.note : "第一版暂不展示真实截图或视频"}</strong>
      </div>
    </div>
  );
}
