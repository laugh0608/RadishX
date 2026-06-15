import { homeVisualAssetSlots } from "../../data/homeVisuals";
import { projects } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { StatusChip } from "../ui/StatusChip";

export function HeroOrbit() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <div className="hero-section__copy">
          <p className="eyebrow">radishx.com</p>
          <h1>Radish 系列项目矩阵</h1>
          <p>
            一个温润、克制、带一点游戏感的统一入口，连接内容社区、异星工业游戏、流程模拟软件与智能工具实验。
          </p>
          <div className="hero-section__actions">
            <RouteLink className="button button--primary" to="/#projects">
              查看项目
            </RouteLink>
            <RouteLink className="button button--secondary" to="/mascot">
              认识萝小白
            </RouteLink>
          </div>
          <div className="hero-section__chips" aria-label="站点状态">
            <StatusChip tone="brand">Source Available</StatusChip>
            <StatusChip tone="ink">Vite + React + TypeScript</StatusChip>
            <StatusChip tone="warning">Vercel Ready</StatusChip>
          </div>
        </div>
        <div className="orbit-visual" aria-label="RadishX 项目星图">
          <div className="orbit-visual__map">
            <figure className="orbit-visual__mascot-anchor">
              <img
                src="/images/mascot/radish-child-standing-white-dress-tall-web.jpg"
                width="1254"
                height="1254"
                alt="萝小白可爱Q版站姿图"
                loading="eager"
                decoding="async"
              />
              <figcaption>
                <span>RadishX Visual Anchor</span>
                <strong>萝小白 · 可爱Q版站姿</strong>
              </figcaption>
            </figure>
            {projects.map((project, index) => (
              <RouteLink
                key={project.id}
                className={`orbit-visual__project orbit-visual__project--${project.tone} orbit-visual__project--${index}`}
                to={project.path}
                aria-label={`查看 ${project.name} 项目页`}
              >
                <strong>{project.name}</strong>
                <span>{project.orbitLabel}</span>
              </RouteLink>
            ))}
          </div>
          <div className="orbit-visual__asset-rail" aria-label="首页素材接入状态">
            {homeVisualAssetSlots.map((slot) => (
              <article key={slot.label} className="orbit-visual__asset-slot">
                <div className="orbit-visual__asset-head">
                  <span>{slot.label}</span>
                  <StatusChip tone={slot.statusTone}>{slot.status}</StatusChip>
                </div>
                <div className="orbit-visual__asset-copy">
                  <strong>{slot.title}</strong>
                  <p>{slot.note}</p>
                </div>
                <dl className="orbit-visual__asset-checks" aria-label={`${slot.title} 状态检查项`}>
                  {slot.checkpoints.map((checkpoint) => (
                    <div key={checkpoint.label}>
                      <dt>{checkpoint.label}</dt>
                      <dd>{checkpoint.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
