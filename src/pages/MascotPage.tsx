import { StatusChip } from "../components/ui/StatusChip";
import { RouteLink } from "../components/ui/RouteLink";
import {
  mascotExpressionItems,
  mascotForms,
  mascotGalleryItems,
  mascotGalleryNotes,
  mascotHeroCaption,
  mascotHeroImage,
  mascotName,
  mascotUsageGroups,
} from "../data/mascot";

function indexNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function MascotPage() {
  return (
    <div className="mascot2-page">
      <section className="mascot2-hero">
        <div className="mascot2-hero__inner">
          <div className="mascot2-hero__copy">
            <p className="eyebrow">Mascot / 萝小白</p>
            <h1>{mascotName}</h1>
            <p className="mascot2-hero__statement">三种形态，一个角色。</p>
            <p className="mascot2-hero__intro">
              萝小白是 RadishX 的虚拟形象。原始形象、可爱Q版与虚拟形象完全体，分别承担标识、亲和表达与品牌主视觉。
            </p>
            <ul className="mascot2-hero__forms" aria-label="萝小白三种形态">
              {mascotForms.map((form) => (
                <li key={form.name}>{form.name}</li>
              ))}
            </ul>
            <p className="mascot2-hero__note">公开展示，不提供素材下载。</p>
          </div>

          <figure className="mascot2-hero__stage">
            <span className="mascot2-hero__rings" aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="mascot2-hero__word" aria-hidden="true">
              RADISH
            </span>
            <img
              className="mascot2-hero__image"
              src={mascotHeroImage.src}
              width={mascotHeroImage.width}
              height={mascotHeroImage.height}
              alt={mascotHeroImage.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <figcaption className="mascot2-hero__caption">{mascotHeroCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="mascot2-section mascot2-section--surface" id="forms">
        <div className="mascot2-section__inner">
          <header className="mascot2-section__head">
            <div>
              <p className="eyebrow">Forms</p>
              <h2>三种形态</h2>
            </div>
            <div className="mascot2-section__meta">
              <span>01 — 03</span>
              <span>Origin / Child / Mature</span>
            </div>
          </header>
          <p className="mascot2-section__lead">从原始标识到长期主视觉，三种形态各自承担不同的表达任务。</p>
          <div className="mascot2-form-grid">
            {mascotForms.map((form, index) => (
              <article key={form.name} className="mascot2-form">
                <figure className="mascot2-form__media">
                  <img
                    src={form.image.src}
                    width={form.image.width}
                    height={form.image.height}
                    alt={form.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="mascot2-form__body">
                  <span className="mascot2-form__index">
                    {indexNumber(index + 1)} / {form.code}
                  </span>
                  <h3>{form.name}</h3>
                  <p className="mascot2-form__role">{form.role}</p>
                  <p className="mascot2-form__description">{form.description}</p>
                  <ul className="mascot2-form__notes">
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

      <section className="mascot2-section" id="gallery">
        <div className="mascot2-section__inner">
          <header className="mascot2-section__head">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2>表情与服装</h2>
            </div>
            <div className="mascot2-section__meta">
              <span>{indexNumber(mascotGalleryItems.length)} 张展示</span>
              <span>Outfits / Expressions / Stickers</span>
            </div>
          </header>
          <p className="mascot2-section__lead">服装变体、表情格与贴纸横图以整图展示；表情格与贴纸暂不拆分单张。</p>
          <div className="mascot2-gallery">
            {mascotGalleryItems.map((item) => (
              <article key={item.title} className="mascot2-gallery-card">
                <figure className="mascot2-gallery-card__media">
                  <img
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className="mascot2-gallery-card__body">
                  <div className="mascot2-gallery-card__meta">
                    <span>{item.category}</span>
                    <span>{item.publicStatus}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="mascot2-gallery-card__boundary">{item.boundary}</p>
                </div>
              </article>
            ))}
            <aside className="mascot2-gallery-note">
              <p className="eyebrow">Note</p>
              <strong>
                只展示，
                <br />
                不提供下载。
              </strong>
              <p>所有图片仅用于 RadishX 站内展示，不表示可以自由复用。</p>
            </aside>
          </div>
          <ul className="mascot2-gallery-notes">
            {mascotGalleryNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mascot2-section mascot2-section--surface" id="expressions">
        <div className="mascot2-section__inner">
          <header className="mascot2-section__head">
            <div>
              <p className="eyebrow">Expressions</p>
              <h2>十张表情</h2>
            </div>
            <div className="mascot2-section__meta">
              <span>{indexNumber(mascotExpressionItems.length)} 张候选</span>
              <span>Happy / Angry / Surprised / Proud / …</span>
            </div>
          </header>
          <p className="mascot2-section__lead">十张基础表情，作为站内展示候选；不提供下载、素材包或外部分发。</p>
          <div className="mascot2-expression-grid">
            {mascotExpressionItems.map((item) => (
              <article key={item.id} className="mascot2-expression">
                <img
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="mascot2-expression__meta">
                  <span>{item.emotion}</span>
                  <StatusChip tone="brand">展示候选</StatusChip>
                </div>
                <h3>{item.label}</h3>
                <p>{item.usage}</p>
                <p className="mascot2-expression__boundary">{item.boundary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mascot2-usage" id="usage">
        <div className="mascot2-section__inner">
          <header className="mascot2-section__head mascot2-usage__head">
            <div>
              <p className="eyebrow">Usage</p>
              <h2>使用边界</h2>
            </div>
            <div className="mascot2-section__meta">
              <span>04 Boundaries</span>
              <span>Display / Safety / Use / Seasonal</span>
            </div>
          </header>
          <p className="mascot2-section__lead">萝小白是 RadishX 的长期品牌资产。以下四条边界适用于当前所有公开图片。</p>
          <div className="mascot2-usage__grid">
            {mascotUsageGroups.map((group) => (
              <article key={group.label} className="mascot2-usage__card">
                <span className="mascot2-usage__label">{group.label}</span>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.rules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mascot2-usage__contact">
            如需使用或合作，请联系 RadishX。
            <RouteLink className="mascot2-usage__contact-link" to="/about">
              前往 About
              <span aria-hidden="true">↗</span>
            </RouteLink>
          </p>
        </div>
      </section>
    </div>
  );
}
