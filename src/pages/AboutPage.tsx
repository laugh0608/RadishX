import { SectionHeader } from "../components/ui/SectionHeader";
import { contacts, officialAccount, repositories } from "../data/contacts";

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
                <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </a>
              ))}
            </div>
          </article>
          <article className="qr-panel">
            <p className="eyebrow">WeChat</p>
            <h2>{officialAccount.name}</h2>
            <div className="qr-placeholder" aria-label="微信公众号二维码素材待确认">
              <span>QR</span>
            </div>
            <p>{officialAccount.status}</p>
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
              <a key={repo.name} className="repo-card" href={repo.href} target="_blank" rel="noreferrer">
                <strong>{repo.name}</strong>
                <span>{repo.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
