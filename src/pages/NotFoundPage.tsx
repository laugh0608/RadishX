import { RouteLink } from "../components/ui/RouteLink";

export function NotFoundPage() {
  return (
    <section className="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1>页面不存在</h1>
        <p>RadishX 当前开放首页、五个项目介绍页、Mascot 和 About。</p>
        <RouteLink className="button button--primary" to="/">
          回到首页
        </RouteLink>
      </div>
    </section>
  );
}
