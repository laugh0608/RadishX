import { radishXRepositoryUrl } from "../../data/navigation";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <RouteLink className="site-footer__brand" to="/">
          RadishX
        </RouteLink>
        <p>Radish 系列项目官网与统一入口，部署目标为 radishx.com。</p>
      </div>
      <div className="site-footer__links" aria-label="页脚链接">
        {projects.map((project) => (
          <RouteLink key={project.id} to={project.path}>
            {project.shortName}
          </RouteLink>
        ))}
        <RouteLink to="/mascot">萝小白</RouteLink>
        <RouteLink to="/about">About</RouteLink>
        <a href={radishXRepositoryUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
