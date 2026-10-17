import { RouteLink } from "../ui/RouteLink";

export function HomeMascot() {
  return (
    <section className="home2-mascot" aria-labelledby="home2-mascot-title">
      <div className="home2-mascot__inner">
        <div className="home2-mascot__copy">
          <p className="home2-kicker home2-kicker--light">Mascot / 01</p>
          <h2 id="home2-mascot-title">萝小白</h2>
          <p className="home2-mascot__roman" aria-hidden="true">
            LUO
            <br />
            XIAO
            <br />
            BAI
          </p>
          <p className="home2-mascot__intro">
            RadishX 的虚拟形象。她不是某个产品功能，而是这一系列项目共同的性格与入口。
          </p>
          <RouteLink className="home2-button home2-button--light" to="/mascot">
            认识她
            <span aria-hidden="true">↗</span>
          </RouteLink>
        </div>
        <div className="home2-mascot__stage">
          <span className="home2-mascot__word" aria-hidden="true">
            RADISH
          </span>
          <div className="home2-mascot__rings" aria-hidden="true">
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
          <div className="home2-mascot__coordinates" aria-hidden="true">
            <span>RADISHX / CHARACTER / 2026</span>
            <span>RX / 01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
