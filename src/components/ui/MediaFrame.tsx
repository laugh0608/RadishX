import type { Project } from "../../data/projects";
import { StatusChip } from "./StatusChip";

type MediaFrameProps = {
  project: Project;
  compact?: boolean;
};

export function MediaFrame({ project, compact = false }: MediaFrameProps) {
  return (
    <div className={`media-frame media-frame--${project.tone} ${compact ? "media-frame--compact" : ""}`}>
      <div className="media-frame__topline">
        <span>{project.futureDomain}</span>
        <StatusChip tone="warning">Coming Soon</StatusChip>
      </div>
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
      <div className="media-frame__body">
        <div>
          <p>{project.shortName}</p>
          <strong>{project.stage}</strong>
        </div>
        <span>{project.orbitLabel}</span>
      </div>
      <div className="media-frame__note">
        <span>Visual placeholder</span>
        <strong>第一版暂不展示真实截图或视频</strong>
      </div>
    </div>
  );
}
