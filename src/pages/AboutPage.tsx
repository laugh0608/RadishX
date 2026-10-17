import { contacts, domainSurfaces, officialAccount, repositories } from "../data/contacts";
import { radishXRepositoryUrl } from "../data/navigation";
import { projects } from "../data/projects";

function indexNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function AboutPage() {
  const emailContact = contacts.find((contact) => contact.label === "Email");
  const webEntryCount = projects.filter((project) => project.domain).length;

  return (
    <div className="about2-page">
      <section className="about2-hero">
        <div className="about2-hero__inner">
          <div className="about2-hero__copy">
            <p className="eyebrow">About / RadishX</p>
            <h1>关于 RadishX</h1>
            <p className="about2-hero__statement">把好奇心，做成作品。</p>
            <p className="about2-hero__intro">
              RadishX 是 Radish 系列项目的官网与统一入口。这里介绍这些项目正在做什么，也收束萝小白、联系方式与公开入口。
            </p>
            <div className="about2-hero__actions">
              <a
                className="button button--primary"
                href={radishXRepositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="打开 RadishX GitHub 仓库"
              >
                访问 GitHub
                <span aria-hidden="true">↗</span>
              </a>
              {emailContact ? (
                <a className="button button--secondary" href={emailContact.href}>
                  写信联系
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>

          <aside className="about2-index" aria-label="RadishX 公开信息索引">
            <div className="about2-index__head">
              <span>RadishX / Index</span>
              <span>2026</span>
            </div>
            <span className="about2-index__glyph" aria-hidden="true">
              X
            </span>
            <dl className="about2-index__facts">
              <div>
                <dt>项目</dt>
                <dd>{indexNumber(projects.length)}</dd>
              </div>
              <div>
                <dt>仓库</dt>
                <dd>{indexNumber(repositories.length)}</dd>
              </div>
              <div>
                <dt>Web 入口</dt>
                <dd>{indexNumber(webEntryCount)}</dd>
              </div>
              <div>
                <dt>公众号</dt>
                <dd>01</dd>
              </div>
            </dl>
            <p className="about2-index__foot">radishx.com / SOURCE AVAILABLE</p>
          </aside>
        </div>
      </section>

      <section className="about2-section about2-contact" id="contact">
        <div className="about2-section__inner about2-contact__inner">
          <div className="about2-intro">
            <p className="eyebrow">Contact</p>
            <h2>保持联系</h2>
            <p>项目合作、素材授权或只是想聊聊，都可以从这里开始。</p>
            <figure className="about2-qr">
              <div className="about2-qr__frame">
                <img
                  className="about2-qr__image"
                  src={officialAccount.asset}
                  width="512"
                  height="509"
                  alt={`${officialAccount.name}微信公众号二维码`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <figcaption className="about2-qr__copy">
                <p className="eyebrow">WeChat</p>
                <h3>{officialAccount.name}</h3>
                <p>扫码关注公众号，{officialAccount.summary}</p>
              </figcaption>
            </figure>
          </div>

          <div className="about2-contact-list">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                className="about2-contact-item"
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={`${contact.action}：${contact.value}`}
              >
                <span className="about2-contact-item__index">{indexNumber(index + 1)}</span>
                <span className="about2-contact-item__body">
                  <span className="about2-contact-item__label">
                    {contact.label} · {contact.intent}
                  </span>
                  <strong>{contact.value}</strong>
                  <span className="about2-contact-item__note">{contact.note}</span>
                </span>
                <span className="about2-contact-item__action">
                  {contact.action}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about2-section about2-repos" id="repositories">
        <div className="about2-section__inner">
          <header className="about2-section__head">
            <div>
              <p className="eyebrow">Repositories</p>
              <h2>源码与文档</h2>
            </div>
            <div className="about2-section__meta">
              <span>{repositories.length} 个公开仓库</span>
              <span>GitHub / laugh0608</span>
            </div>
          </header>
          <p className="about2-section__lead">
            从官网到十二个项目，源码与文档都放在 GitHub；Radish 和 RadishInk 另有独立 Web 入口。
          </p>
          <div className="about2-repo-grid">
            {repositories.map((repo, index) => (
              <a
                key={repo.name}
                className="about2-repo"
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`打开 ${repo.name} GitHub 仓库：${repo.ownerRepo}`}
              >
                <span className="about2-repo__index">{indexNumber(index + 1)}</span>
                <span className="about2-repo__body">
                  <span className="about2-repo__head">
                    <strong>{repo.name}</strong>
                    <span className="about2-repo__status">{repo.status}</span>
                  </span>
                  <span className="about2-repo__meta">{repo.ownerRepo}</span>
                  <span className="about2-repo__desc">{repo.description}</span>
                </span>
                <span className="about2-repo__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about2-section about2-domains" id="domains">
        <div className="about2-section__inner">
          <header className="about2-section__head">
            <div>
              <p className="eyebrow">Domains</p>
              <h2>域名边界</h2>
            </div>
            <div className="about2-section__meta">
              <span>{domainSurfaces.length} 个入口</span>
              <span>radishx.com</span>
            </div>
          </header>
          <p className="about2-section__lead">
            {"radishx.com 是官网主域；www.radishx.com 保留兼容访问；Radish 与 RadishInk 各有独立 "}
            <span className="nowrap">Web 入口</span>
            {"，其他项目只提供源码与文档入口。"}
          </p>
          <div className="about2-domain-grid">
            {domainSurfaces.map((surface) => (
              <article key={surface.domain} className="about2-domain-card">
                <span className="about2-domain-card__label">{surface.label}</span>
                <strong>{surface.domain}</strong>
                <span className="about2-domain-card__status">{surface.status}</span>
                <p>{surface.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
