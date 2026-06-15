import type { Project } from "../../data/projects";
import { StatusChip } from "./StatusChip";

type MediaFrameProps = {
  project: Project;
  compact?: boolean;
  showVisual?: boolean;
};

export function MediaFrame({ project, compact = false, showVisual = false }: MediaFrameProps) {
  const visual = showVisual && project.visual ? project.visual : undefined;
  const diagram = showVisual && !visual && project.diagram ? project.diagram : undefined;

  return (
    <div
      className={`media-frame media-frame--${project.tone} ${compact ? "media-frame--compact" : ""} ${
        visual ? "media-frame--visual" : ""
      } ${diagram ? "media-frame--visual media-frame--diagram" : ""}`}
    >
      <div className="media-frame__topline">
        <span>{project.futureDomain}</span>
        <StatusChip tone={visual || diagram ? "brand" : "warning"}>{visual ? visual.label : diagram ? diagram.label : "Coming Soon"}</StatusChip>
      </div>
      {visual ? (
        <figure className={`media-frame__visual media-frame__visual--${visual.ratio}`}>
          <img src={visual.src} width={visual.width} height={visual.height} alt={visual.alt} loading="lazy" decoding="async" />
          <figcaption>{visual.title}</figcaption>
        </figure>
      ) : diagram ? (
        <figure className="media-frame__diagram-figure" aria-label={`${project.name} ${diagram.title}`}>
          <div className="mind-diagram" aria-hidden="true">
            <div className="mind-diagram__core">
              <span>{diagram.coreLabel}</span>
              <strong>{diagram.coreTitle}</strong>
            </div>
            <div className="mind-diagram__nodes">
              {diagram.nodes.map((node) => (
                <div className="mind-diagram__node" key={node.label}>
                  <span>{node.label}</span>
                  <strong>{node.value}</strong>
                </div>
              ))}
            </div>
            {diagram.lanes ? (
              <div className="mind-diagram__lanes">
                {diagram.lanes.map((lane) => (
                  <div className="mind-diagram__lane" key={lane.label}>
                    <span>{lane.label}</span>
                    <strong>{lane.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <figcaption>{diagram.title}</figcaption>
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
        <span>{visual ? "Reviewed asset" : diagram ? "Code-native visual" : "Visual placeholder"}</span>
        <strong>{visual ? visual.note : diagram ? diagram.note : "第一版暂不展示真实截图或视频"}</strong>
      </div>
      {showVisual ? (
        <dl className="media-frame__review" aria-label={`${project.name} 素材审核说明`}>
          <div>
            <dt>Asset source</dt>
            <dd>{project.assetReview.source}</dd>
          </div>
          <div>
            <dt>Usage boundary</dt>
            <dd>{project.assetReview.boundary}</dd>
          </div>
          <div>
            <dt>Next material need</dt>
            <dd>{project.assetReview.nextNeed}</dd>
          </div>
        </dl>
      ) : null}
    </div>
  );
}
