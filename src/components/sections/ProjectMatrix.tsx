import { projects } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectBand } from "./ProjectBand";

export function ProjectMatrix() {
  return (
    <section className="section section--surface" id="projects">
      <div className="section__inner">
        <SectionHeader
          eyebrow="Projects"
          title="五个方向，一组连续的 Radish 生态"
          description="首页按大幅 band 展示项目关系，项目详情页再承接状态、入口和后续独立域名。"
        />
        <div className="project-matrix">
          {projects.map((project, index) => (
            <ProjectBand key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
