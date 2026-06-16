import { SectionHeader } from "../components/ui/SectionHeader";
import { StatusChip } from "../components/ui/StatusChip";
import { mascotForms, mascotGalleryItems, mascotGalleryNotes, mascotHeroImage, mascotHeroReview, mascotName } from "../data/mascot";

const mascotRules = [
  "可爱Q版公开素材必须完整外装、非性感化、无内衣展示、无身体拆解。",
  "已确认素材使用 public/images 下的 Web 版本，原图保留在 assets 中。",
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
          <div className="mascot-hero__mark" aria-label="萝小白主视觉">
            <img
              className="mascot-hero__image"
              src={mascotHeroImage.src}
              width={mascotHeroImage.width}
              height={mascotHeroImage.height}
              alt={mascotHeroImage.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div>
              <strong>萝小白</strong>
              <span>虚拟形象完全体站姿图已确认</span>
            </div>
            <dl className="mascot-hero__review" aria-label="萝小白主视觉审核摘要">
              {mascotHeroReview.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Forms"
            title="三种形态"
            description="原始形象、可爱Q版站姿图和虚拟形象完全体站姿图已确认接入公开页面。"
          />
          <div className="mascot-form-grid">
            {mascotForms.map((form) => (
              <article key={form.name} className="mascot-form">
                <div className="mascot-form__media">
                  <img src={form.image.src} width={form.image.width} height={form.image.height} alt={form.image.alt} loading="lazy" />
                </div>
                <div className="mascot-form__content">
                  <p className="eyebrow">{form.role}</p>
                  <div className="mascot-form__heading">
                    <h3>{form.name}</h3>
                    <StatusChip tone="success">{form.assetCue}</StatusChip>
                  </div>
                  <p>{form.description}</p>
                  <div className="mascot-form__status">
                    <span>Asset status</span>
                    <strong>{form.assetStatus}</strong>
                  </div>
                  <dl className="mascot-form__review" aria-label={`${form.name} 素材审核说明`}>
                    <div>
                      <dt>Current use</dt>
                      <dd>{form.review.currentUse}</dd>
                    </div>
                    <div>
                      <dt>Audit status</dt>
                      <dd>{form.review.auditStatus}</dd>
                    </div>
                    <div>
                      <dt>Usage boundary</dt>
                      <dd>{form.review.usageBoundary}</dd>
                    </div>
                    <div>
                      <dt>Next material need</dt>
                      <dd>{form.review.nextNeed}</dd>
                    </div>
                  </dl>
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
            title="表情与贴纸先做整图预览"
            description="服装变体、表情格和贴纸横图作为公开 Gallery 预览接入；第一版不拆分单张贴纸，不提供素材下载入口。"
          />
          <div className="mascot-gallery-grid">
            {mascotGalleryItems.map((item) => (
              <article key={item.title} className={`gallery-card gallery-card--${item.image.height > item.image.width ? "portrait" : "wide"}`}>
                <img src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} loading="lazy" />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
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
            description="萝小白是长期品牌资产，第一版页面已接入首批确认图片和站姿图，后续继续审核表情拆分、节日素材和下载口径。"
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
