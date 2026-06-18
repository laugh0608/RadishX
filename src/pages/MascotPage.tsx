import { SectionHeader } from "../components/ui/SectionHeader";
import { StatusChip } from "../components/ui/StatusChip";
import {
  mascotForms,
  mascotExpressionItems,
  mascotGalleryItems,
  mascotGalleryNotes,
  mascotHeroImage,
  mascotHeroReview,
  mascotName,
  mascotUsageGroups,
} from "../data/mascot";

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
            description="服装变体、表情格和贴纸横图作为公开 Gallery 预览接入；每张图都明确当前状态、使用边界和后续处理。"
          />
          <div className="mascot-gallery-grid">
            {mascotGalleryItems.map((item) => (
              <article key={item.title} className={`gallery-card gallery-card--${item.image.height > item.image.width ? "portrait" : "wide"}`}>
                <img src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} loading="lazy" />
                <div>
                  <div className="gallery-card__meta">
                    <span>{item.category}</span>
                    <StatusChip tone="warning">{item.publicStatus}</StatusChip>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <dl className="gallery-card__facts" aria-label={`${item.title} 公开使用边界`}>
                    <div>
                      <dt>Boundary</dt>
                      <dd>{item.usageBoundary}</dd>
                    </div>
                    <div>
                      <dt>Next</dt>
                      <dd>{item.nextStep}</dd>
                    </div>
                  </dl>
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
      <section className="section section--surface">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Expressions"
            title="首批单张表情展示候选"
            description="10 张基础表情已生成 Web 展示图，只用于官网内部预览；下载、素材包和外部分发口径继续关闭。"
          />
          <div className="mascot-expression-grid" aria-label="萝小白首批单张表情展示候选">
            {mascotExpressionItems.map((item) => (
              <article key={item.id} className="mascot-expression-card">
                <img src={item.image.src} width={item.image.width} height={item.image.height} alt={item.image.alt} loading="lazy" />
                <div className="mascot-expression-card__body">
                  <div className="mascot-expression-card__meta">
                    <span>{item.sourceCell}</span>
                    <StatusChip tone="brand">官网内部展示</StatusChip>
                  </div>
                  <h3>{item.label}</h3>
                  <p>{item.emotion}</p>
                  <dl className="mascot-expression-card__facts" aria-label={`${item.label} 表情使用边界`}>
                    <div>
                      <dt>Use</dt>
                      <dd>{item.usage}</dd>
                    </div>
                    <div>
                      <dt>Boundary</dt>
                      <dd>{item.boundary}</dd>
                    </div>
                  </dl>
                </div>
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
            description="萝小白是长期品牌资产，当前页面只展示已审核素材；下载、拆分、活动图和复用声明继续按审核流程推进。"
          />
          <div className="mascot-usage-grid">
            {mascotUsageGroups.map((group) => (
              <article key={group.label} className="mascot-usage-card">
                <span>{group.label}</span>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul className="check-list">
                  {group.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
