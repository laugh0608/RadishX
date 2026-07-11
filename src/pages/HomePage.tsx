import { HeroOrbit } from "../components/sections/HeroOrbit";
import { ProjectMatrix } from "../components/sections/ProjectMatrix";
import { InfoRail } from "../components/ui/InfoRail";
import { RouteLink } from "../components/ui/RouteLink";
import { SectionHeader } from "../components/ui/SectionHeader";
import { radishXRepositoryUrl } from "../data/navigation";
import { projects } from "../data/projects";

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
  {
    title: "输入入口",
    body: "RadishLex 把中文输入、个人词库和学习留在本地，强调隐私优先、可解释和可删除。",
  },
];

const homeSignals = [
  {
    label: "Site",
    value: "radishx.com",
    note: "Vercel 静态官网",
  },
  {
    label: "Repository",
    value: "laugh0608/RadishX",
    href: radishXRepositoryUrl,
    note: "Source Available",
  },
  {
    label: "Matrix",
    value: projects.map((project) => project.futureDomain).join(" / "),
    note: "未来独立项目域名，不作为官网 rewrite",
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
            description="五个项目的业务功能、未来独立站点和部署都保持边界清晰，官网只展示稳定公开信息。"
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
      <section className="section section--surface" id="signals">
        <div className="section__inner">
          <div className="signal-band">
            <div>
              <p className="eyebrow">Open Signals</p>
              <h2>公开入口保持清楚，未来项目边界保持独立</h2>
              <p>
                官网负责说明项目矩阵和稳定链接；五个项目的真实业务、下载页、演示站和独立部署在各自成熟后再开放。
              </p>
            </div>
            <InfoRail items={homeSignals} />
          </div>
        </div>
      </section>
      <section className="section section--mascot" id="mascot-entry">
        <div className="section__inner mascot-teaser">
          <div>
            <p className="eyebrow">Mascot</p>
            <h2>萝小白是 RadishX 的长期品牌记忆点</h2>
            <p>
              第一版保留原始形象、可爱Q版和虚拟形象完全体三条线索，首批主图、站姿图和 Gallery 素材已进入公开资源目录。
            </p>
            <RouteLink className="button button--primary" to="/mascot">
              查看萝小白
            </RouteLink>
          </div>
          <div className="mascot-sigil">
            <img
              src="/images/mascot/radish-child-standing-white-dress-tall-web.jpg"
              width="1254"
              height="1254"
              alt="萝小白可爱Q版站姿图"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
