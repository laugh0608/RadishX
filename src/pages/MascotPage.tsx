import { SectionHeader } from "../components/ui/SectionHeader";
import { mascotForms, mascotGalleryNotes, mascotName } from "../data/mascot";

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
          </div>
          <div className="mascot-hero__mark" aria-label="萝小白临时图标">
            <img src="/favicon.ico" width="92" height="92" alt="萝小白原始形象临时图标" />
            <span>萝小白</span>
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
                  <span>{index + 1}</span>
                </div>
                <div>
                  <p className="eyebrow">{form.role}</p>
                  <h3>{form.name}</h3>
                  <p>{form.description}</p>
                  <strong>{form.assetStatus}</strong>
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
            {mascotGalleryNotes.map((note) => (
              <article key={note} className="info-tile">
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
