import { radishUISiteUrl, radishXRepositoryUrl } from "../../data/navigation";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";

type SiteFooterProps = {
  compact?: boolean;
};

export function SiteFooter({ compact = false }: SiteFooterProps) {
  return (
    <footer className={`site-footer ${compact ? "site-footer--compact" : ""}`}>
      <div>
        <RouteLink className="site-footer__brand" to="/" aria-label="RadishX 首页">
          RadishX
        </RouteLink>
        <p>
          {compact ? "萝卜智能 · Radish Intelligence" : "萝卜智能 · Radish Intelligence 的官网与项目入口。"}
        </p>
      </div>
      <nav className="site-footer__links" aria-label="页脚链接">
        {compact ? (
          <>
            <RouteLink to="/#collection">全部项目</RouteLink>
            <RouteLink to="/mascot">萝小白</RouteLink>
            <RouteLink to="/about">About</RouteLink>
            <a href={radishXRepositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="RadishX GitHub 仓库">
              GitHub
            </a>
          </>
        ) : (
          <>
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
          </>
        )}
        <a href={radishUISiteUrl} target="_blank" rel="noopener noreferrer" aria-label="访问 RadishUI 家族设计系统">
          RadishUI
        </a>
      </nav>
    </footer>
  );
}
