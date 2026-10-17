import { getHomeCategory, homeCollection } from "../../data/homeShowcase";
import { projectById } from "../../data/projects";
import { RouteLink } from "../ui/RouteLink";
import { CollectionArt } from "../shared/ProjectArtwork";

export function HomeCollection() {
  return (
    <section className="home2-collection" id="collection" aria-labelledby="home2-collection-title">
      <span id="projects" className="home2-collection__anchor" aria-hidden="true" />
      <div className="home2-collection__inner">
        <header className="home2-collection__head">
          <div>
            <p className="home2-kicker">The collection</p>
            <h2 id="home2-collection-title">
              一片土壤，
              <br />
              不同的生长。
            </h2>
          </div>
          <div className="home2-collection__meta">
            <span>项目索引 / {String(homeCollection.length).padStart(2, "0")}</span>
            <p>按各自的节奏，持续探索。</p>
          </div>
        </header>

        <div className="home2-collection__grid">
          {homeCollection.map((item) => {
            const project = projectById[item.id];
            const category = getHomeCategory(item.category);

            return (
              <RouteLink
                key={project.id}
                className={`home2-collection-item home2-collection-item--${item.tier} home2-collection-item--span-${item.span} home2-collection-item--tone-${item.tone}`}
                to={project.path}
                aria-label={`查看 ${project.name} 项目页`}
              >
                <CollectionArt projectId={project.id} tier={item.tier} tone={item.tone} />
                <div className="home2-collection-item__body">
                  <div className="home2-collection-item__meta">
                    <span>{item.displayCategory ?? category.label}</span>
                    <span>{project.status}</span>
                  </div>
                  <div className="home2-collection-item__title">
                    <h3>{project.name}</h3>
                    <span className="home2-collection-item__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <p>{project.tagline}</p>
                </div>
              </RouteLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
