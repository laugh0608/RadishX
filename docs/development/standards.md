# 开发规范

本文定义 RadishX 官网项目的开发流程、工程结构、响应式要求和验证口径。

## 当前技术栈

- Vite
- React
- TypeScript
- 普通 CSS 或 CSS Modules，第一版优先普通 CSS + 语义 token
- 静态站点，部署到 Vercel

默认使用 `npm`。除非后续明确切换，不引入 `pnpm`、`yarn` 或额外 monorepo 工具。

本地开发服务器默认使用 Vite 配置中的 `127.0.0.1:4500`，启动命令为：

```bash
npm run dev
```

## 开发顺序

当前阶段采用“目标文档 -> 设计确认 -> React 实现 -> 验证 -> 日志”的节奏：

1. 先读取 `docs/planning/current.md`，确认当前活跃目标和执行顺序。
2. 再读取或创建对应 `docs/features/*.md`，明确目标、范围、不做项、设计要求、开发任务和完成标准。
3. 涉及页面结构、视觉方向或素材替换时，按需更新 `docs/design/sources/radishx-site-v0.pen`；`.pen` 文件只能通过 Pencil 读写。
4. 用户审核页面结构、视觉方向和候选素材后，再进入 React 实现。
5. 按目标文档拆分实现任务，不把多个无关页面目标混在一次改动里。
6. 运行构建、类型检查和桌面 / 移动端视觉 smoke。
7. 完成后更新目标文档状态、`docs/planning/current.md` 和当周开发日志。

未完成目标边界或设计确认前，不直接开始大面积页面实现。

## 仓库规则

- 文本文件默认使用 UTF-8、LF 和文件末尾换行。
- Markdown 正文可以保留行尾空格，用于兼容 Markdown 换行。
- 新增文件名优先英文、短横线或小写目录。
- 不提交 `node_modules/`、`dist/`、`.vercel/`、`.env`。
- 候选素材保留在 `assets/`，正式页面使用前必须确认选图。
- `.pen` 设计文件放在 `docs/design/sources/`，只能通过 Pencil 读写。
- 不把兄弟项目代码整包迁入当前仓库。

## 预期项目结构

项目初始化后建议结构：

```text
src/
  app/
    App.tsx
    routes.ts
  components/
    layout/
    sections/
    ui/
  data/
    projects.ts
    contacts.ts
    navigation.ts
  pages/
    HomePage.tsx
    ProjectPage.tsx
    MascotPage.tsx
    AboutPage.tsx
  styles/
    tokens.css
    global.css
    utilities.css
public/
  images/
```

规则：

- `src/data/` 存放项目介绍、链接、域名、联系方式和仓库信息。
- `pages/` 存放页面级组件，不能把全部页面塞进单个文件。
- `components/sections/` 存放首页和详情页可复用 section。
- `components/ui/` 只放真正复用的基础 UI，不提前建设大而全组件库。
- `public/images/` 只放已审核并确定公开使用的 Web 资源。

## React 规则

- 组件命名表达真实用途，避免空泛的 `Manager`、`Helper`、`Wrapper`。
- 静态官网不提前引入状态管理库。
- 不提前引入 UI 组件库。
- 只有真实减少复杂度时才引入第三方依赖。
- 页面内容优先来自结构化数据，而不是在 JSX 中散落重复文案。
- 外链统一通过数据层维护，避免多个页面手写不同 URL。
- 对 `mailto:`、GitHub、个人主页和未来项目域名做明确外链处理。

## 路由规则

目标路径：

- `/`
- `/radish`
- `/catalyst`
- `/flow`
- `/mind`
- `/lex`
- `/mascot`
- `/about`

第一版可以使用轻量路由表实现静态页面切换；若引入 `react-router-dom`，必须同步确认依赖和 Vercel fallback 配置。

如果使用浏览器历史路由，Vercel 需要把站内路径回退到 `index.html`，但不能把未来项目域名配置为本官网 rewrite。

禁止：

- 不把 `hub.radishx.com`、`forge.radishx.com`、`flow.radishx.com`、`mind.radishx.com`、`lex.radishx.com` 配成本官网 Vercel 路由。
- 不在官网里实现五个项目的实际业务功能。

## 样式规则

- 全局 token 放在 `src/styles/tokens.css`。
- 颜色、文本、背景、边框、阴影、圆角和间距优先使用 `--rx-*` 变量。
- 不在 JSX `style` 中扩散硬编码颜色、阴影和复杂布局值。
- Section 使用全宽分区或无框布局承载；卡片只用于项目入口、图库项目或明确的信息单元。
- 不做卡片套卡片。
- 不使用大面积单一色系堆叠，避免页面只剩绿色、米色、棕色、紫蓝或深色。
- 字体大小使用明确层级，不用 `vw` 直接缩放。
- 文字 `letter-spacing` 默认为 `0`，只在明确的品牌小标题中轻微增加。
- 图标优先使用文本、CSS 或后续确认的图标库；不为了少量图标提前引入大型图标包。

## 响应式规则

PC 和移动端都是一等目标。

默认视口检查：

- Mobile：`390 x 844`
- Tablet：`768 x 1024`
- Desktop：`1440 x 900`
- Wide：`1728 x 1117`

实现要求：

- 首页、项目页、Mascot 页和 About 页都必须在移动端可完整浏览。
- 导航在窄屏下需要折叠或重排，不能挤压正文。
- 首页项目矩阵在桌面端可做横向强视觉 band，移动端必须改为单列。
- 大图必须设置稳定比例或尺寸约束，避免加载后布局跳动。
- 标题、按钮、chip、卡片和二维码说明文字不能溢出容器。
- 移动端减少背景纹理、弱化复杂装饰，优先保证内容连续浏览。
- 触控目标建议不小于 `44px`。

## 素材规则

- 正式使用素材前必须从 `docs/assets/materials.md` 的候选清单中确认。
- 未审核图片可以出现在 Pencil 设计稿中，但必须标注候选状态。
- 不覆盖原始素材。
- 不批量裁切、压缩、重采样或转换格式，除非用户确认。
- 可爱Q版公开页面优先使用 `assets/avatars/child/radish-child-safe-design-sheet-v1.png`。
- 不再推荐的可爱Q版旧图不得进入公开页面设计稿或实现。
- 微信公众号二维码只放 About 或联系区域，不放首页首屏。

## 可访问性和基础质量

- 所有图片必须有 `alt`。
- 纯装饰图可使用空 `alt`，但不能承载关键信息。
- 外链按钮和普通按钮在视觉上要区分动作含义。
- 颜色不能作为唯一状态表达，状态 chip 需要有文字。
- 键盘焦点态必须可见。
- 保留 skip link 和 `main#main-content` 主内容焦点目标；站内换页后应把焦点转回正文。
- 重复出现的链接或按钮文案，例如“查看详情”“GitHub”，必须通过可访问名称带上项目或上下文，避免读屏器只读到一组泛化链接。
- `prefers-reduced-motion` 下应关闭或减弱非必要动画。
- 页面标题、描述和 Open Graph 信息在项目初始化后补齐。

## 验证规则

项目初始化后，默认至少执行：

```bash
npm run build
```

本地发布前复查可执行：

```bash
npm run check:local-release
```

该命令会先运行生产构建，再检查 `dist/` 中的入口文件、SEO 文件、Vite 产物和公开图片资源是否完整输出。

需要检查一个正在运行的 HTTP 目标时，可执行：

```bash
npm run check:http-smoke -- --base-url http://127.0.0.1:4500
```

该命令会检查指定站点的关键路由 HTML、`robots.txt`、`sitemap.xml` 和公开图片资源；进入发布阶段后可追加 `--www-url` 检查 `www` 到 canonical 根域的路径保留跳转。它不替代桌面 / 移动端 Browser 视觉 smoke。

线上截图级发布检查优先使用 Playwright + 本机 Google Chrome，覆盖 `1440 x 900` 桌面和 `390 x 844` 移动端关键路由。对 lazy 图片较多的页面，需要逐图滚入视口并等待图片完成解码后再截 full-page 图。截图和临时汇总文件放在 `output/playwright/`，作为本地 QA artifact，不提交到仓库。

建议脚本：

```bash
npm run type-check
npm run lint
npm run format
```

涉及 UI、布局或素材改动时，应使用真实浏览器检查桌面和移动端视图。完成前至少确认：

- 首页无明显错位。
- 导航可用。
- 五个项目页入口可访问。
- 项目详情页的 GitHub 链接和 Coming Soon 状态清楚。
- Mascot 页图片不变形、不遮挡正文。
- About 页二维码和联系方式可读。
- 移动端无横向滚动、文字溢出或按钮挤压。

## 提交规则

- 使用简洁明确的 Conventional Commits 风格。
- 优先把设计文档、前端初始化、页面实现、素材接入拆成不同主题提交。
- 不添加 AI 协作者署名。
- 提交前确认工作区没有误改兄弟项目。
- 若 `.pen` 文件被修改，提交前说明对应设计范围。
