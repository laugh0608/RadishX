import type { ProjectRouteId } from "../../app/routes";
import type { HomeCollectionTier, HomePanelTone } from "../../data/homeShowcase";
import { projectById } from "../../data/projects";

type ArtProps = {
  projectId: ProjectRouteId;
};

type CollectionArtProps = ArtProps & {
  tier: HomeCollectionTier;
  tone: HomePanelTone;
};

function collectionArtClass(projectId: ProjectRouteId, tone: HomePanelTone, extra = "") {
  return `home2-collection-art home2-collection-art--${projectId} home2-collection-art--tone-${tone}${
    extra ? ` ${extra}` : ""
  }`;
}

function RadishFeaturedArt() {
  const visual = projectById.radish.visual;

  if (!visual) {
    return null;
  }

  return (
    <div className="home2-featured-art home2-featured-art--radish" aria-hidden="true">
      <span className="home2-featured-art__halo" />
      <figure className="home2-paper home2-paper--portrait">
        <img
          src={visual.src}
          width={visual.width}
          height={visual.height}
          alt={visual.alt}
          loading="eager"
          decoding="async"
        />
        <figcaption>RADISH / CHARACTER</figcaption>
      </figure>
    </div>
  );
}

function InkFeaturedArt() {
  return (
    <div className="home2-featured-art home2-featured-art--ink" aria-hidden="true">
      <div className="home2-paper home2-paper--editor">
        <span className="home2-editor__bar">ink.radishx.com</span>
        <strong className="home2-editor__glyph">写</strong>
        <div className="home2-editor__lines">
          <span />
          <span />
          <span />
        </div>
        <p>专注写作，轻松排版。</p>
        <small>MARKDOWN / WECHAT</small>
      </div>
    </div>
  );
}

function FlowFeaturedArt() {
  return (
    <div className="home2-featured-art home2-featured-art--flow" aria-hidden="true">
      <div className="home2-paper home2-paper--blueprint">
        <span className="home2-blueprint__label">STEADY STATE</span>
        <svg viewBox="0 0 360 220" role="presentation">
          <path className="home2-blueprint__pipe" d="M20 112H92M156 112H214M278 112H340" />
          <circle className="home2-blueprint__unit" cx="124" cy="112" r="32" />
          <rect className="home2-blueprint__unit" x="214" y="58" width="64" height="108" rx="32" />
          <path className="home2-blueprint__level" d="M224 136H268" />
          <path className="home2-blueprint__pipe home2-blueprint__pipe--soft" d="M246 166V194H314" />
          <text x="94" y="82">FEED</text>
          <text x="218" y="44">V-101</text>
          <text x="286" y="188">PRODUCT</text>
        </svg>
        <div className="home2-blueprint__foot">
          <span>350.0 K</span>
          <span>5.43 MW</span>
        </div>
        <small>PROCESS / RUST</small>
      </div>
    </div>
  );
}

function LexFeaturedArt() {
  return (
    <div className="home2-featured-art home2-featured-art--lex" aria-hidden="true">
      <div className="home2-paper home2-paper--ime">
        <span className="home2-ime__compose">luó bo cí hé</span>
        <strong className="home2-ime__glyph">萝卜词核</strong>
        <div className="home2-ime__candidates">
          <span>
            <b>1</b> 萝卜
          </span>
          <span>
            <b>2</b> 罗博
          </span>
          <span>
            <b>3</b> 萝北
          </span>
        </div>
        <small>LOCAL-FIRST / IME</small>
      </div>
    </div>
  );
}

export function FeaturedArt({ projectId }: ArtProps) {
  if (projectId === "radish") {
    return <RadishFeaturedArt />;
  }

  if (projectId === "ink") {
    return <InkFeaturedArt />;
  }

  if (projectId === "flow") {
    return <FlowFeaturedArt />;
  }

  if (projectId === "lex") {
    return <LexFeaturedArt />;
  }

  return null;
}

function CollectionFlowArt() {
  return (
    <div className="home2-collection-art__flow" aria-hidden="true">
      <svg viewBox="0 0 240 120" role="presentation">
        <path className="home2-collection-art__pipe" d="M12 60H76M112 60H152M190 60H228" />
        <circle className="home2-collection-art__unit" cx="94" cy="60" r="18" />
        <rect className="home2-collection-art__unit" x="152" y="32" width="38" height="56" rx="19" />
        <path className="home2-collection-art__pipe home2-collection-art__pipe--soft" d="M171 88V108H214" />
      </svg>
    </div>
  );
}

export function CollectionArt({ projectId, tier, tone }: CollectionArtProps) {
  if (projectId === "radish") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <span className="home2-collection-art__glyph">共</span>
        <p>
          在共同兴趣里，
          <br />
          发现彼此。
        </p>
        <small>A PLACE FOR SHARED INTERESTS</small>
      </div>
    );
  }

  if (projectId === "ink") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <span className="home2-collection-art__glyph">写</span>
        <p>
          专注写作，
          <br />
          轻松排版。
        </p>
        <small>MARKDOWN / WECHAT</small>
      </div>
    );
  }

  if (projectId === "catalyst") {
    const visual = projectById.catalyst.visual;

    return (
      <div className={collectionArtClass(projectId, tone, "home2-collection-art--image")}>
        {visual ? (
          <img
            src={visual.src}
            width={visual.width}
            height={visual.height}
            alt={visual.alt}
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <span className="home2-collection-art__image-label">概念视觉 / CHEMICAL WORLD</span>
      </div>
    );
  }

  if (projectId === "mind") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <strong>Mind</strong>
        <p>
          工具 → 工作流
          <br />
          结果 → 审查
        </p>
        <small>AI / WORKFLOWS</small>
      </div>
    );
  }

  if (projectId === "lex") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <span className="home2-collection-art__glyph">字</span>
        <p className="home2-collection-art__mono">luó bo → 1 萝卜 2 罗博</p>
        <small>LOCAL-FIRST / IME</small>
      </div>
    );
  }

  if (projectId === "axiom") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <strong>
          VERIFY
          <br />
          FIRST.
        </strong>
        <p>语义 / 证据 / 独立复核</p>
        <small>AI AGENT LANGUAGE</small>
      </div>
    );
  }

  if (projectId === "memory") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <strong>
          属于你的，
          <br />
          长期上下文。
        </strong>
        <small>PERSONAL / PORTABLE / CONTEXT</small>
      </div>
    );
  }

  if (projectId === "nexus") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <strong>
          讨论 → 决策
          <br />
          → 任务
        </strong>
        <small>TEAM / COLLABORATION</small>
      </div>
    );
  }

  if (projectId === "flow") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <CollectionFlowArt />
        <small>STEADY STATE / PROCESS</small>
      </div>
    );
  }

  if (projectId === "link") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <strong>OFFLINE.</strong>
        <p>网络之外，连接仍在探索。</p>
        <small>MESH / COMMUNICATION</small>
      </div>
    );
  }

  if (projectId === "ledger") {
    return (
      <div className={collectionArtClass(projectId, tone)} aria-hidden="true">
        <span className="home2-collection-art__glyph">账</span>
        <p>
          本地优先
          <br />
          端到端加密
        </p>
        <small>PERSONAL / LEDGER</small>
      </div>
    );
  }

  if (projectId === "root") {
    return (
      <div className={collectionArtClass(projectId, tone, `home2-collection-art--${tier}`)} aria-hidden="true">
        <span className="home2-root__line">root@radish:~$ status</span>
        <strong>ROOT.</strong>
        <p>看见状态，理解操作。</p>
        <small>SYSTEM / INTERPRETABLE</small>
      </div>
    );
  }

  return null;
}
