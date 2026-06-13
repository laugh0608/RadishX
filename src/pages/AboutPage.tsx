import { SectionHeader } from "../components/ui/SectionHeader";
import { contacts, officialAccount, repositories } from "../data/contacts";
import { projects } from "../data/projects";

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
        </div>
      </section>
      <section className="section section--surface">
        <div className="section__inner about-grid">
          <article className="contact-panel">
            <SectionHeader eyebrow="Contact" title="联系方式" />
            <div className="contact-list">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  className="contact-list__item"
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ))}
            </div>
          </article>
          <article className="qr-panel">
            <p className="eyebrow">WeChat</p>
            <h2>微信公众号</h2>
            <div className="qr-panel__body">
              <div className="qr-placeholder" aria-label="微信公众号二维码素材待确认">
                <span>QR</span>
                <small>待确认</small>
              </div>
              <div className="qr-panel__copy">
                <strong>{officialAccount.name}</strong>
                <p>{officialAccount.status}</p>
                <code>{officialAccount.asset}</code>
              </div>
            </div>
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
                <span className="repo-card__meta">GitHub Repository</span>
                <strong>{repo.name}</strong>
                <span>{repo.description}</span>
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
            <article className="domain-card domain-card--root">
              <span>Current Site</span>
              <strong>radishx.com</strong>
              <small>当前 Vercel 官网项目</small>
              <p>RadishX 官网首页、项目介绍页、Mascot 和 About。</p>
            </article>
            {projects.map((project) => (
              <article key={project.id} className={`domain-card domain-card--${project.tone}`}>
                <span>{project.name}</span>
                <strong>{project.futureDomain}</strong>
                <small>未来独立访问域名</small>
                <p>未来独立访问域名，当前不配置为本官网 Vercel rewrite。</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
