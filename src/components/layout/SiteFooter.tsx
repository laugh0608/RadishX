import { radishXRepositoryUrl } from "../../data/navigation";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <RouteLink className="site-footer__brand" to="/" aria-label="RadishX 首页">
          RadishX
        </RouteLink>
        <p>Radish 系列项目官网与统一入口，部署目标为 radishx.com。</p>
      </div>
      <nav className="site-footer__links" aria-label="页脚链接">
        {projects.map((project) => (
          <RouteLink key={project.id} to={project.path} aria-label={`${project.name} 项目页`}>
            {project.shortName}
          </RouteLink>
        ))}
        <RouteLink to="/mascot">萝小白</RouteLink>
        <RouteLink to="/about">About</RouteLink>
        <a href={radishXRepositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="RadishX GitHub 仓库">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
