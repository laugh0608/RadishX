import { HeroOrbit } from "../components/sections/HeroOrbit";
import { ProjectMatrix } from "../components/sections/ProjectMatrix";
import { RouteLink } from "../components/ui/RouteLink";

export function HomePage() {
  return (
    <div className="home-page">
      <HeroOrbit />
      <ProjectMatrix />
      <section className="home-mascot" id="mascot-entry" aria-labelledby="home-mascot-title">
        <div className="home-mascot__inner">
          <div className="home-mascot__copy">
            <p className="home-kicker">Mascot / RadishX</p>
            <h2 id="home-mascot-title">
              认识
              <span>萝小白</span>
            </h2>
            <RouteLink className="home-mascot__link" to="/mascot">
              进入角色档案
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </div>

          <div className="home-mascot__stage">
            <span className="home-mascot__word" aria-hidden="true">RADISH</span>
            <div className="home-mascot__rings" aria-hidden="true">
              <span />
              <span />
            </div>
            <img
              src="/images/mascot/radish-mature-standing-grayjade-v1-transparent.png"
              width="941"
              height="1672"
              alt="萝小白灰玉主题完全体站姿立绘"
              loading="lazy"
              decoding="async"
            />
            <div className="home-mascot__coordinates" aria-hidden="true">
              <span>RX / 01</span>
              <span>CHARACTER ARCHIVE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
