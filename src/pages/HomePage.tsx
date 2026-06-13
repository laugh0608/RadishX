import { HeroOrbit } from "../components/sections/HeroOrbit";
import { ProjectMatrix } from "../components/sections/ProjectMatrix";
import { RouteLink } from "../components/ui/RouteLink";
import { SectionHeader } from "../components/ui/SectionHeader";

const ecosystemItems = [
  {
    title: "内容入口",
    body: "Radish 承载社区、发布和工作台，把长期内容留在一个可维护的位置。",
  },
  {
    title: "世界表达",
    body: "RadishCatalyst 把角色、基地和工业科幻叙事沉淀成更具记忆点的游戏方向。",
  },
  {
    title: "工程工具",
    body: "RadishFlow 保留流程模拟、画布和工程软件的可信感，不把官网做成后台。",
  },
  {
    title: "智能外接",
    body: "RadishMind 负责协议、评测、工具编排和模型实验，强调可审计和可复用。",
  },
];

export function HomePage() {
  return (
    <>
      <HeroOrbit />
      <ProjectMatrix />
      <section className="section section--muted">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Ecosystem"
            title="RadishX 只做官网和入口"
            description="四个项目的业务功能、未来独立站点和部署都保持边界清晰，官网只展示稳定公开信息。"
          />
          <div className="ecosystem-grid">
            {ecosystemItems.map((item) => (
              <article key={item.title} className="info-tile">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--mascot">
        <div className="section__inner mascot-teaser">
          <div>
            <p className="eyebrow">Mascot</p>
            <h2>萝小白是 RadishX 的长期品牌记忆点</h2>
            <p>
              第一版保留原始形象、可爱Q版和虚拟形象完全体三条线索。正式主图和 Gallery 素材会在审核后进入公开资源目录。
            </p>
            <RouteLink className="button button--primary" to="/mascot">
              查看萝小白
            </RouteLink>
          </div>
          <div className="mascot-sigil" aria-hidden="true">
            <span>萝</span>
            <img src="/favicon.ico" width="80" height="80" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
