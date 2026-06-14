import { SectionHeader } from "../components/ui/SectionHeader";
import { contacts, domainSurfaces, officialAccount, repositories } from "../data/contacts";

export function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__inner">
          <p className="eyebrow">About</p>
          <h1>RadishX 是 Radish 系列项目的官网与统一入口</h1>
          <p>
            当前官网只负责展示项目矩阵、公开链接、虚拟形象和联系方式，不承载登录、后台、数据库或服务端 API。
          </p>
          <div className="about-hero__signals" aria-label="About 页面公开信息摘要">
            <span>radishx.com</span>
            <span>5 GitHub repositories</span>
            <span>WeChat QR reviewed</span>
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="section__inner about-grid">
          <article className="contact-panel">
            <SectionHeader
              eyebrow="Contact"
              title="联系方式"
              description="保留稳定入口，优先让访问者判断该用哪一种方式联系或追踪项目。"
            />
            <div className="contact-list">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="contact-list__item"
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`${contact.action}：${contact.value}`}
                >
                  <span className="contact-list__label">{contact.label}</span>
                  <span className="contact-list__content">
                    <strong>{contact.value}</strong>
                    <span>{contact.note}</span>
                  </span>
                  <span className="contact-list__action">{contact.action}</span>
                </a>
              ))}
            </div>
          </article>
          <article className="qr-panel">
            <p className="eyebrow">WeChat</p>
            <h2>微信公众号</h2>
            <figure className="qr-panel__body">
              <div className="qr-panel__frame">
                <img
                  className="qr-image"
                  src={officialAccount.asset}
                  width="512"
                  height="509"
                  alt={`${officialAccount.name}微信公众号二维码`}
                  loading="lazy"
                />
              </div>
              <figcaption className="qr-panel__copy">
                <strong>{officialAccount.name}</strong>
                <p>{officialAccount.summary}</p>
                <dl className="qr-panel__facts">
                  <div>
                    <dt>Asset</dt>
                    <dd>{officialAccount.assetLabel}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{officialAccount.status}</dd>
                  </div>
                  <div>
                    <dt>Boundary</dt>
                    <dd>{officialAccount.boundary}</dd>
                  </div>
                </dl>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Repositories"
            title="GitHub 仓库入口"
            description="第一版官网优先展示稳定 GitHub 链接，演示站、下载页和项目独立站等上线后再补。"
          />
          <div className="repo-grid">
            {repositories.map((repo) => (
              <a key={repo.name} className="repo-card" href={repo.href} target="_blank" rel="noopener noreferrer">
                <span className="repo-card__head">
                  <span className="repo-card__meta">{repo.ownerRepo}</span>
                  <span className="repo-card__status">{repo.status}</span>
                </span>
                <strong>{repo.name}</strong>
                <p>{repo.description}</p>
                <dl className="repo-card__facts">
                  <div>
                    <dt>Role</dt>
                    <dd>{repo.role}</dd>
                  </div>
                  <div>
                    <dt>Surface</dt>
                    <dd>{repo.surface}</dd>
                  </div>
                </dl>
                <span className="repo-card__action">Open GitHub</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--muted" id="deployment">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Deployment"
            title="域名和部署边界"
            description="当前只有 radishx.com 是本官网项目；四个项目域名是未来独立部署后的访问入口。"
          />
          <div className="domain-grid">
            {domainSurfaces.map((surface) => (
              <article key={surface.domain} className="domain-card">
                <span>{surface.label}</span>
                <strong>{surface.domain}</strong>
                <small>{surface.status}</small>
                <p>{surface.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
