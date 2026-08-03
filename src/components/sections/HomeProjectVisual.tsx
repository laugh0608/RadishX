import type { Project } from "../../data/projects";

type HomeProjectVisualProps = {
  context: "card" | "stage";
  project: Project;
};

function RadishVisual({ context, project }: HomeProjectVisualProps) {
  if (!project.visual) {
    return null;
  }

  return (
    <div className="home-radish-visual">
      <div className="home-radish-visual__orbit" aria-hidden="true" />
      <div className="home-radish-visual__feed">
        <span>NEW POST · 028</span>
        <strong>新的内容正在生长</strong>
        <small>社区 · 创作 · 工作台</small>
      </div>
      <figure className="home-radish-visual__portrait">
        <img
          src={project.visual.src}
          width={project.visual.width}
          height={project.visual.height}
          alt={project.visual.alt}
          loading={context === "stage" ? "eager" : "lazy"}
          decoding="async"
        />
      </figure>
      <div className="home-radish-visual__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function CatalystVisual({ context, project }: HomeProjectVisualProps) {
  if (!project.visual) {
    return null;
  }

  return (
    <div className="home-catalyst-visual">
      <img
        src={project.visual.src}
        width={project.visual.width}
        height={project.visual.height}
        alt={project.visual.alt}
        loading={context === "stage" ? "eager" : "lazy"}
        decoding="async"
      />
      <div className="home-catalyst-visual__scan" aria-hidden="true" />
      <div className="home-catalyst-visual__hud" aria-hidden="true">
        <span>SECTOR C-07</span>
        <strong>FORGE ONLINE</strong>
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="home-flow-visual">
      <div className="home-flow-visual__header" aria-hidden="true">
        <span>STEADY STATE</span>
        <span>350.0 K</span>
      </div>
      <svg viewBox="0 0 720 300" role="img" aria-label="RadishFlow 流程蓝图示意">
        <path className="home-flow-visual__pipe" d="M48 154H176M266 154H376M472 154H672" />
        <path className="home-flow-visual__pipe home-flow-visual__pipe--soft" d="M424 216V258H612" />
        <circle className="home-flow-visual__unit" cx="220" cy="154" r="44" />
        <path className="home-flow-visual__coil" d="M188 154c12-30 22 30 34 0s22 30 34 0" />
        <rect className="home-flow-visual__unit" x="376" y="78" width="96" height="152" rx="48" />
        <path className="home-flow-visual__level" d="M388 178H460" />
        <circle className="home-flow-visual__valve" cx="612" cy="258" r="16" />
        <path className="home-flow-visual__valve-mark" d="m601 247 22 22m0-22-22 22" />
        <text x="188" y="94">H-101</text>
        <text x="392" y="56">V-101</text>
        <text x="534" y="136">VAPOR</text>
        <text x="520" y="246">LIQUID</text>
      </svg>
      <div className="home-flow-visual__footer" aria-hidden="true">
        <span>Feed 300.0 K</span>
        <span>Duty 5.43 MW</span>
        <span>Outlet 348.6 K</span>
      </div>
    </div>
  );
}

function MindVisual() {
  return (
    <div className="home-mind-visual">
      <svg viewBox="0 0 640 360" aria-hidden="true">
        <path d="M320 180 124 92M320 180l198-96M320 180 142 284M320 180l194 110" />
        <path className="home-mind-visual__secondary-line" d="M124 92 142 284M518 84l-4 206" />
        <circle cx="320" cy="180" r="74" />
        <circle cx="124" cy="92" r="36" />
        <circle cx="518" cy="84" r="36" />
        <circle cx="142" cy="284" r="36" />
        <circle cx="514" cy="290" r="36" />
      </svg>
      <div className="home-mind-visual__core">
        <span>RadishMind</span>
        <strong>TRACE</strong>
      </div>
      <span className="home-mind-visual__node home-mind-visual__node--context">Context</span>
      <span className="home-mind-visual__node home-mind-visual__node--tooling">Tooling</span>
      <span className="home-mind-visual__node home-mind-visual__node--scoring">Scoring</span>
      <span className="home-mind-visual__node home-mind-visual__node--trace">Audit</span>
    </div>
  );
}

function LexVisual() {
  return (
    <div className="home-lex-visual">
      <div className="home-lex-visual__glyph" aria-hidden="true">萝</div>
      <div className="home-lex-visual__compose">
        <span>luó bo cí hé</span>
        <strong>萝卜词核</strong>
        <div className="home-lex-visual__candidates" aria-label="中文输入候选示意">
          <span><b>1</b> 萝卜</span>
          <span><b>2</b> 罗博</span>
          <span><b>3</b> 萝北</span>
        </div>
      </div>
      <div className="home-lex-visual__path" aria-hidden="true">
        <span>COMPOSE</span>
        <i />
        <span>RANK</span>
        <i />
        <span>LEARN</span>
      </div>
    </div>
  );
}

export function HomeProjectVisual({ context, project }: HomeProjectVisualProps) {
  const className = `home-project-visual home-project-visual--${context} home-project-visual--${project.tone}`;

  return (
    <div className={className}>
      {project.id === "radish" ? <RadishVisual context={context} project={project} /> : null}
      {project.id === "catalyst" ? <CatalystVisual context={context} project={project} /> : null}
      {project.id === "flow" ? <FlowVisual /> : null}
      {project.id === "mind" ? <MindVisual /> : null}
      {project.id === "lex" ? <LexVisual /> : null}
    </div>
  );
}
