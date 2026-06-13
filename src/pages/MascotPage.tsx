import { SectionHeader } from "../components/ui/SectionHeader";
import { mascotForms, mascotGalleryNotes, mascotName } from "../data/mascot";

const mascotRules = [
  "可爱Q版公开素材必须完整外装、非性感化、无内衣展示、无身体拆解。",
  "正式主图和 Gallery 素材进入 public/images 前需要确认具体选图。",
  "不提供素材下载入口，不声明素材可自由复用。",
];

export function MascotPage() {
  return (
    <>
      <section className="mascot-hero">
        <div className="mascot-hero__inner">
          <div className="mascot-hero__copy">
            <p className="eyebrow">Mascot</p>
            <h1>{mascotName}</h1>
            <p>
              RadishX 的虚拟形象，第一版保留原始形象、可爱Q版和虚拟形象完全体三种形态，并把素材审核状态清楚展示。
            </p>
            <div className="mascot-hero__badges" aria-label="萝小白三种形态">
              {mascotForms.map((form) => (
                <span key={form.name}>{form.name}</span>
              ))}
            </div>
          </div>
          <div className="mascot-hero__mark" aria-label="萝小白临时图标">
            <img src="/favicon.ico" width="92" height="92" alt="萝小白原始形象临时图标" />
            <div>
              <strong>萝小白</strong>
              <span>第一版临时 Logo / favicon 已确认</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Forms"
            title="三种形态"
            description="正式主图尚未全部确认，因此首版实现只使用已确认 favicon 和图形化展示，不提前公开候选大图。"
          />
          <div className="mascot-form-grid">
            {mascotForms.map((form, index) => (
              <article key={form.name} className="mascot-form">
                <div className="mascot-form__media" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{form.mediaLabel}</small>
                </div>
                <div className="mascot-form__content">
                  <p className="eyebrow">{form.role}</p>
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                  <div className="mascot-form__status">
                    <span>{form.assetCue}</span>
                    <strong>{form.assetStatus}</strong>
                  </div>
                  <ul className="mascot-form__notes">
                    {form.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Gallery"
            title="素材 Gallery 会在审核后扩展"
            description="候选素材仍留在 assets/avatars 中，第一版公开页面不提供素材下载入口。"
          />
          <div className="gallery-notes">
            {mascotGalleryNotes.map((note, index) => (
              <article key={note} className="info-tile">
                <span className="info-tile__index">{String(index + 1).padStart(2, "0")}</span>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--muted" id="usage">
        <div className="section__inner mascot-policy">
          <SectionHeader
            eyebrow="Usage"
            title="公开展示先守住素材口径"
            description="萝小白是长期品牌资产，第一版页面优先把边界说清楚，后续再逐步接入审核后的主图、表情和节日素材。"
          />
          <ul className="check-list">
            {mascotRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
