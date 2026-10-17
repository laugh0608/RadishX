import { getHomeCollectionItem } from "../../data/homeShowcase";
import type { Project } from "../../data/projects";
import { CollectionArt } from "../shared/ProjectArtwork";

type ProjectHeroArtProps = {
  project: Project;
};

function FallbackPanel({ project }: ProjectHeroArtProps) {
  const item = getHomeCollectionItem(project.id);

  return (
    <div className="project2-art project2-art--panel">
      <CollectionArt projectId={project.id} tier="large" tone={item?.tone ?? "paper"} />
    </div>
  );
}

function RadishHeroArt({ project }: ProjectHeroArtProps) {
  const visual = project.visual;

  if (!visual) {
    return <FallbackPanel project={project} />;
  }

  return (
    <div className="project2-art project2-art--radish">
      <span className="project2-art__orbit" aria-hidden="true" />
      <figure className="project2-art__paper">
        <img
          src={visual.src}
          width={visual.width}
          height={visual.height}
          alt={visual.alt}
          loading="eager"
          decoding="async"
        />
        <figcaption>{visual.title}</figcaption>
      </figure>
      <span className="project2-art__caption">GROW TOGETHER / COMMUNITY</span>
    </div>
  );
}

function CatalystHeroArt({ project }: ProjectHeroArtProps) {
  const visual = project.visual;

  if (!visual) {
    return <FallbackPanel project={project} />;
  }

  return (
    <div className="project2-art project2-art--catalyst">
      <img
        src={visual.src}
        width={visual.width}
        height={visual.height}
        alt={visual.alt}
        loading="eager"
        decoding="async"
      />
      <div className="project2-art__scrim" aria-hidden="true" />
      <span className="project2-art__caption">概念视觉 / CHEMICAL WORLD</span>
    </div>
  );
}

export function ProjectHeroArt({ project }: ProjectHeroArtProps) {
  if (project.id === "radish") {
    return <RadishHeroArt project={project} />;
  }

  if (project.id === "catalyst") {
    return <CatalystHeroArt project={project} />;
  }

  return <FallbackPanel project={project} />;
}
