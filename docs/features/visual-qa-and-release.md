# 视觉 QA 与发布检查

状态：持续执行，craft Phase 5 本地三态终验、9 路由 HTTP smoke 与既有线上发布检查已完成
最后更新：2026-07-13

## 目标

确保 RadishX 官网在本地和线上发布后保持桌面、移动端、metadata、路由 fallback、SEO 辅助文件、公开图片资源、语义结构和键盘访问可用。

## 背景

当前已经完成多轮本地响应式、可访问性和生产质量检查；线上 HTTP 状态、根域跳转、`sitemap.xml`、`robots.txt`、关键路由、公开图片资源和线上桌面 / 移动端截图级视觉 smoke 已验证。

已新增可复用 HTTP smoke 脚本，用于在本地或未来线上目标上检查路由 HTML、SEO 文件、公开图片资源和可选 `www` 跳转；该脚本不替代 Browser / Chrome 的截图级视觉检查。

2026-06-17 用户明确要求使用 Chrome 插件后，已补跑本地 `/mascot` 桌面与移动端 smoke，用于收束 Gallery / Usage 二轮实现后的本地浏览器验证；这不触发发布，也不替代未来线上截图级 smoke。

2026-06-17 继续按“不发布，先稳定本地质量基线”的节奏复跑本地构建、静态输出检查和本地 HTTP smoke；这只确认当前本地可发布状态，不触发推送、部署或线上检查。

本轮按“跳过发布，继续本地开发”的节奏，只推进本地站点级质量与可访问性整理，不触发推送、部署或线上 smoke。

2026-06-17 进入线上发布准备检查后，已补跑 `https://radishx.com` 与 `https://www.radishx.com` 的 HTTP smoke；该轮只验证线上状态层、路径保留、SEO 文件和公开图片资源，不触发推送、部署或页面改动。Browser 插件已能读取线上首页和 Mascot 页标题，并完成默认视口截图 / DOM 抽查；移动视口设置和跨路由批量截图在 Browser 控制层出现超时，线上截图级 smoke 仍不视为完成。

2026-06-18 已改用 Playwright 加本机 Google Chrome 完成线上截图级 smoke，覆盖 `1440x900` 桌面和 `390x844` 移动视口下 8 个关键路由。检查中对 lazy 图片做逐图滚动和解码等待，避免 full-page 截图过早截到空白 Gallery。截图与汇总输出保存在本地 `output/playwright/online-visual-smoke-2026-06-18/`，该目录作为 QA artifact 不提交。

2026-06-18 Mascot 首批单张表情 Web 文件生成并接入 `/mascot` 后，已完成本地构建、静态输出检查、本地 HTTP smoke、`sips` 尺寸检查、Playwright 桌面 / 移动端 smoke 和 Pencil 桌面 / 移动 v1.1 设计源同步。检查确认 10 张单张表情均为 `256x256`，`/mascot` 在 `1440x900` 与 `390x844` 下无横向溢出、无 broken image、无 console / page error，单张表情候选区没有下载按钮。

## 范围

- 本地构建和静态资源输出。
- 桌面与 390px 移动端视觉 smoke。
- `radishx.com` 与 `www.radishx.com` 跳转和路径保留。
- 站内路由与未知路径 `index.html` fallback。
- `sitemap.xml`、`robots.txt`、canonical、Open Graph 和 Twitter Card。
- 图片资源访问、加载和裁切。
- 页面 heading 层级、主内容跳转、导航语义、重复链接可访问名称和键盘焦点。

## 不做

- 不在本目标中改变页面视觉方向。
- 不配置五个未来项目子域名为当前官网 Vercel 路由。
- 不把线上 smoke 结果替代本地构建验证。
- 不引入新素材、新依赖或下载入口。

## 基础检查

- `npm run build`
- `npm run check:local-release`
- `npm run check:http-smoke -- --base-url http://127.0.0.1:4500`
- `git diff --check`
- 必要时检查 `dist/` 是否包含 `sitemap.xml`、`robots.txt` 和公开图片资源。
- 视觉改动后检查至少一个桌面视口和一个 390px 移动端视口。
- 可访问性整理后检查 skip link、`main` 聚焦、导航 / 页脚语义、重复链接名称、heading 序列、横向溢出和 console error。

## 本地检查记录

2026-07-13 已完成 craft Phase 5 全站本地终验：

- Playwright 覆盖 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/lex`、`/mascot`、`/about` 和 `/abc-test` 共 9 条路径。
- 覆盖 `1440x900` 桌面、`390x844` 移动和跟随系统 / 亮色 / 深色三态，共 54 个路由 / 视口 / 主题组合。
- 所有组合均为单一 H1，保留 `main#main-content`、skip link、顶部 / 页脚导航语义与正确 robots / canonical；无横向溢出、broken image、console error 或小于 `44px` 的交互目标。
- Mascot 的 22 张图片在各组合滚动后均完成解码；其他页面图片也全部完成解码。
- 人工截图抽查发现移动端导航与主题段控同排时过于拥挤，已调整为品牌与主题同处首行、完整导航独占次行；`390px` 与补充 `320px` 检查均无导航滚动或页面溢出。
- `scripts/check-http-smoke.mjs` 补齐 `/lex` HTML 与 sitemap canonical 检查；本地 HTTP smoke 通过 9 条关键路由和 28 个公开图片资源。
- `npm run check:local-release` 通过，确认 28 个公开图片和 2 个 Vite asset；`npm run build`、`git diff --check` 同步通过。
- QA artifact 保存在 `output/playwright/craft-phase5-2026-07-13/`，不提交；本轮不推送、不部署，因此不重复线上截图级 smoke。

2026-06-16 已完成一轮本地发布前复查：

- 新增 `npm run check:local-release`，用于复用本地发布前静态输出检查；该命令会先执行生产构建，再检查 `dist/` 入口文件、SEO 文件、Vite asset 和公开图片资源。
- 执行 `npm run check:local-release` 通过，确认 18 个公开图片文件和 2 个 Vite asset 文件已输出。
- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 检查 `dist/` 输出，包含 `index.html`、`favicon.ico`、`robots.txt`、`sitemap.xml`、构建后的 CSS / JS、3 张项目代表图、13 张 Mascot 图和 2 张社交 / 联系图片。
- 使用 Browser 检查 `1440x900` 桌面视口下的 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test`；页面标题、H1、路由 fallback、导航 active 状态、横向滚动、主内容和 skip link 均正常，console error 为空。
- 使用 Browser 检查 `390x844` 移动视口下的同一组路由；未发现横向溢出、低于 `44px` 的可点击目标、关键文案遮挡或按钮明显错位。
- 使用 Browser 检查 8 个路由的 metadata、canonical、Open Graph、Twitter Card 和 robots 口径；正常页面为 `index, follow`，未知路径为 `noindex, nofollow`。
- 使用 Browser 直接打开 `sitemap.xml` 和 `robots.txt`，确认本地可访问且内容类型正确。
- 使用 Browser 直接打开 `public/images` 中 18 个公开图片路径，均可解码并返回有效原始尺寸。
- 本轮 Browser 后台滚动动作未改变页面 `scrollY`，因此未把 Gallery lazy 图片的页面内滚动触发作为本轮结论；资源解码和页面结构已完成复查，后续如需截图级或滚动级视觉结论，可换可滚动的浏览器会话复跑。
- 执行 `git diff --check` 通过。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

2026-06-16 已完成一轮本地 HTTP smoke 准备：

- 新增 `npm run check:http-smoke`，用于对指定 `--base-url` 做站内路由 HTML、`robots.txt`、`sitemap.xml` 和公开图片 HTTP 检查。
- 该命令默认检查 `http://127.0.0.1:4500`，可通过 `--base-url` 或 `SITE_BASE_URL` 指定目标；进入发布阶段后可增加 `--www-url` 或 `SITE_WWW_URL` 检查 `www` 到 canonical 根域的路径保留跳转。
- 执行 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 通过，确认 8 个路由和 18 个公开图片资源可访问。
- 本地沙箱内本机 HTTP 请求受限时，该命令需要按权限规则在沙箱外复跑；这不改变脚本的检查范围。
- 执行 `git diff --check` 通过。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

2026-06-17 已通过 Chrome 插件补跑本地 `/mascot` smoke：

- 使用临时本地 Vite 服务 `http://127.0.0.1:4500/mascot`。
- `1440x900` 桌面视口：页面标题为 `萝小白 - RadishX`，H1 为 `萝小白`；`scrollWidth` 与 `clientWidth` 均为 `1440`；7 张 Gallery 卡片、7 个状态标签、14 条 Boundary / Next facts、4 个 Gallery notes 和 4 个 Usage 分组均渲染；11 张页面图片滚动后全部完成解码；无横向溢出，console error 为空。
- `390x844` 移动视口：`scrollWidth` 与 `clientWidth` 均为 `390`；7 张 Gallery 卡片、14 条 Boundary / Next facts 和 Display / Safety / License / Seasonal 四个 Usage 分组均渲染；11 张页面图片滚动后全部完成解码；无横向溢出，无小于 `44px` 的可点击目标，console error 为空。
- 已做桌面 Gallery 与移动 Usage 视口截图抽查，未发现文字遮挡、卡片错位或下载入口误导。
- 本轮不改页面代码、不新增素材、不推送、不部署。

2026-06-17 已完成一轮本地质量基线收束：

- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 执行 `npm run check:local-release` 通过；脚本复跑生产构建，并确认 18 个公开图片文件和 2 个 Vite asset 文件已输出。
- 临时启动 `http://127.0.0.1:4500/` 后，执行 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 通过，确认 8 个关键路由和 18 个公开图片资源可访问。
- 本轮不改 React 代码、不新增素材、不推送、不部署；线上 HTTP、根域跳转、路径保留和截图级 smoke 仍留到发布阶段。

2026-06-18 已完成 Mascot 单张表情接入后的本地检查：

- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 执行 `npm run check:local-release` 通过；脚本复跑生产构建，并确认 28 个公开图片文件和 2 个 Vite asset 文件已输出。
- 临时启动 `http://127.0.0.1:4500/` 后，执行 `npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 通过，确认 8 个关键路由和 28 个公开图片资源可访问。
- 使用 `sips` 检查 `public/images/mascot/expressions/*.jpg`，10 张单张表情 Web 图均为 `256x256`。
- 使用 Playwright + 本机 Google Chrome 检查 `/mascot`：`1440x900` 桌面与 `390x844` 移动视口均返回 `200`，单张表情卡片 `10/10`、单张表情图片 `10/10`，Gallery 卡片 `7`、Usage 卡片 `4`；所有单张表情图完成解码，natural size 均为 `256x256`。
- 两个视口 `scrollWidth` 与 `clientWidth` 一致，desktop 为 `1440/1440`，mobile 为 `390/390`；broken image、console error、page error、单张候选区链接 / 按钮和横向溢出元素均为 `0`。
- 截图与报告保存在本地 `output/playwright/mascot-expression-smoke-2026-06-18/`，作为 QA artifact 不提交。
- 本轮不推送、不部署；Pencil 桌面 / 移动 v1.1 设计源已同步并通过 `snapshot_layout`。

2026-06-15 已完成一轮本地发布检查：

- 执行 `npm run build` 通过，确认 TypeScript 与 Vite 生产构建正常。
- 执行 `git diff --check` 通过，确认当前文档与代码改动无空白问题。
- 使用 Browser 检查 `1440x900` 桌面视口下的 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test`；页面标题、H1、路由 fallback 和横向滚动检查正常，console error 为空。
- 使用 Browser 检查 `390x844` 移动视口下的同一组路由；未发现横向溢出、导航挤压、关键文案遮挡或按钮明显错位。
- 抽查桌面首页、移动首页、移动 Mascot、移动 About 和移动 404 首屏截图，未发现视觉阻断问题。
- 在移动端滚动检查 `/mascot` Gallery，12 张页面图片滚入视口后均完成加载，console error 为空。
- 检查 `dist/` 输出，包含 `index.html`、`favicon.ico`、`robots.txt`、`sitemap.xml`、构建后的 CSS / JS，以及项目、Mascot、社交图片资源。
- 本轮不推送、不部署，不补跑线上截图级 smoke。

## 本地可访问性整理记录

2026-06-15 已完成一轮站点级语义与可访问性整理：

- 保留现有 skip link、`main#main-content` 和路径切换后的主内容聚焦机制。
- 将页脚链接容器从普通 `div` 升级为 `nav`，并保留 `aria-label="页脚链接"`。
- 为首页项目 band 中重复出现的“查看详情”和“GitHub”链接补充项目上下文可访问名称。
- 为首页星图项目入口、顶部 / 页脚 GitHub 入口、项目页 Hero 操作和 `InfoRail` 外链补充更明确的可访问名称。
- 使用 Browser 检查 `/`、`/radish`、`/mascot`、`/about` 和 `/abc-test` 在 `1440x900` 与 `390x844` 下的语义结构；确认每页 1 个 `h1`、存在 skip link 与 `main#main-content`、顶部和页脚导航语义正常、图片均有 `alt`、重复链接已具备具体可访问名称、无横向溢出，console 无 error。
- 本轮不改视觉方向、不接入新素材、不修改部署配置。

## 设计源与实现口径对齐记录

2026-06-16 按“跳过发布，继续本地开发”的节奏完成一轮对齐检查：

- 对照 `docs/design/visual-guidelines.md`、`docs/development/standards.md`、当前目标文档和 React 实现，复查首页、五个项目页、Mascot 页、About 页的页面节奏、移动端结构、说明文案和素材边界。
- 首页继续符合“首屏品牌与项目矩阵 -> 项目 band -> 生态关系 -> 公开入口 -> Mascot 入口”的节奏；Radish Orbit 使用已审核可爱Q版站姿图作为中心视觉锚点，未接入新的未审核主视觉。
- 五个项目详情页继续使用克制的信息结构，保留 Hero 下方站内导览、公开文档入口、未来域名、禁用访问入口、素材审核说明和代码内临时项目标识；未把临时标识描述为正式 Logo。
- Mascot 页继续保留三形态、Gallery 整图预览和使用边界；表情、贴纸、seasonal 图和下载入口仍按素材治理文档后置，不进入本轮实现。
- About 页继续保持联系方式、微信公众号二维码、GitHub 仓库入口和域名边界的收束结构；微信公众号二维码未进入首页首屏。
- 样式层继续以 `--rx-*` token 为主，未在 JSX 中扩散硬编码复杂样式；移动端已降低背景密度，主要按钮和站内导览触控高度不低于 `44px`。
- 初次尝试读取 Pencil 设计源时，Pencil 应用连接不可用；后续用户启动 Pencil 后，确认 active editor 为 `docs/design/sources/radishx-site-v0.pen`。
- 通过 Pencil 检查 5 个顶层画板：`Home Desktop v1 - Radish Orbit`、`Home Mobile v1 - Radish Orbit`、`Project Detail Template v1 - Flow Example`、`Mascot Page v1` 和 `About Page v1`；Pencil 报告无布局问题。
- 设计源当前结构稳定，但视觉内容仍偏 v1 早期设计：首页、项目模板和 Mascot 页仍存在候选 / 占位表达，尚未逐屏重绘为当前 React 实现。
- 已通过 Pencil 在 5 个画板底部追加 `2026-06-16 实现口径同步` 说明 band，记录当前 React 实现、素材边界和后续重绘注意事项；同步后再次检查无布局问题。
- 使用 Browser 检查 `/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test` 在 `1440x900` 与 `390x844` 下的标题、H1、导航 active 状态、横向滚动、触控目标和 console error；未发现阻断问题。
- 对首页和 `/mascot` 追加滚动加载复查；Mascot 页 12 张图片滚入视口后均完成加载，首页重复使用的可爱Q版站姿图具备有效原始尺寸，无图片资源 404 或页面 error。
- 2026-06-18 使用 Pencil 同步 `Mascot Page v1.1 - React Accurate` 与 `Mascot Page Mobile v1.1 - React Accurate` 的单张表情候选预览区；桌面为 5 列 x 2 行，移动为 2 列 x 5 行，均保留“官网内部展示”状态和下载关闭口径。
- 2026-06-18 Pencil `snapshot_layout` 复查两张 Mascot v1.1 画板均无布局问题，并已截图抽查新增候选区，未发现裁切、重叠或下载入口误导。

## 线上检查

2026-06-17 已完成线上 HTTP smoke：

- 执行 `npm run check:http-smoke -- --base-url https://radishx.com --www-url https://www.radishx.com` 通过。
- 确认 `https://radishx.com` 下 8 个关键路由 HTML 可访问。
- 确认 18 个公开图片资源可访问。
- 确认 `https://www.radishx.com` 跳转到 canonical 根域入口，并纳入路径保留检查。
- 本轮不推送、不部署、不改页面代码。

2026-06-17 已使用 Browser 插件做线上默认视口抽查：

- `https://radishx.com/` 标题为 `RadishX - Radish 系列项目矩阵`，默认视口截图可见首页 Hero、Radish Orbit、中心 Mascot 视觉和顶部导航；未发现首屏视觉阻断。
- `https://radishx.com/flow` 标题为 `RadishFlow - RadishX`，默认视口截图可见项目 Hero、archived 状态、历史 UI baseline、未来域名和仓库入口；未发现首屏视觉阻断。
- `https://radishx.com/mascot` 标题为 `萝小白 - RadishX`，默认视口截图可见 Mascot Hero、主视觉图和顶部导航 active 状态；DOM 指标显示 `scrollWidth` 与 `clientWidth` 均为 `1280`，无横向溢出，12 张页面图片中 9 张首屏或已加载图片完成解码，broken image 为空，页面相关 console error 为空。
- `https://radishx.com/about` 标题为 `About - RadishX`，默认视口截图可见 About Hero、公开边界说明、状态标签和顶部导航 active 状态；未发现首屏视觉阻断。
- `https://radishx.com/abc-test` 标题为 `页面不存在 - RadishX`，默认视口截图可见 404 fallback、回到首页入口和页脚导航；fallback 视觉正常。
- Browser 插件在 `tab.goto()` 跨路由导航偶发等待较长，`390x844` 视口下 `Page.captureScreenshot` 对完整截图和小范围 clip 均出现控制层超时；当前只能把本轮记录为“线上 HTTP smoke 已完成、默认视口代表路由截图抽查已完成、移动截图级 smoke 待补”。
- 期间出现的 `ab.chatgpt.com` Statsig 请求超时来自 Codex / Browser 插件环境，不是 `radishx.com` 页面错误。

2026-06-17 已按用户要求尝试 Chrome 插件补测线上移动截图：

- Chrome extension 轻量通信正常，可列出当前 Chrome tab，并能对 `https://radishx.com/` 执行默认视口截图；截图可见首页 Hero、Radish Orbit、中心 Mascot 视觉和顶部导航。
- 尝试通过 Chrome tab CDP 执行 `Emulation.setDeviceMetricsOverride` 设置 `390x844` 移动指标时出现控制层超时；随后轻量 `Runtime.evaluate` 和 Chrome Playwright `evaluate` 读取宽度也超时。
- 尝试通过 Chrome 快捷键打开 DevTools 设备模式后再次截图，页面仍保持桌面布局，未进入可确认的移动 viewport。
- 本轮已关闭 Chrome 测试会话；Chrome 插件仍未完成线上 `390x844` 移动截图级 smoke。

2026-06-17 用户手动在 Chrome 中打开移动端视图后，继续补测线上首页：

- Chrome extension 能认领用户已打开的 `https://radishx.com/` 标签页，并读取标题和 URL。
- 首页移动视图 DOM 指标读取成功：`innerWidth`、`clientWidth` 和 `scrollWidth` 均为 `321`，`devicePixelRatio` 为 `2`，H1 为 `Radish 系列项目矩阵`，6 张页面图片中 5 张已完成解码，broken image 为空，页面 error console 为空。
- `tab.screenshot()`、CDP `Page.getLayoutMetrics`、CDP `Page.captureScreenshot`、`dom_cua.get_visible_dom()` 和 `domSnapshot()` 在该 Chrome 手动移动视图下仍出现控制层超时。
- 尝试在同一移动视图中批量补查关键路由时，长循环在工具层超时，重连后标签页停在 `/flow`；随后 `/flow` 的轻量指标和 console 读取也开始超时。
- 本轮结论只记录为“Chrome 手动移动视图已确认线上首页移动 DOM 指标无横向溢出、无 broken image、无页面 error”，不能替代线上移动截图级 smoke。

2026-06-18 已使用 Playwright + 本机 Google Chrome 完成线上截图级 smoke：

- 覆盖路由：`/`、`/radish`、`/catalyst`、`/flow`、`/mind`、`/mascot`、`/about` 和 `/abc-test`。
- 覆盖视口：`1440x900` 桌面与 `390x844` 移动端。
- 16 个路由 / 视口组合均返回 `200`，未知路径正常落到 404 fallback 页面。
- 所有组合 `scrollWidth` 与 `clientWidth` 一致；桌面为 `1440`，移动端为 `390`，未发现横向溢出。
- 所有页面图片均完成解码：桌面首页 `6/6`、桌面 Mascot `12/12`、移动首页 `6/6`、移动 Mascot `12/12`，其余路由图片也均为全量解码。
- broken image、console error、page error 和小于 `44px` 的主链接触控目标均为 `0`。
- 人工抽查桌面首页、移动首页、桌面 Mascot 和移动 Mascot full-page 截图，未发现空白图、Gallery 错位、文字遮挡或下载入口误导。
- 本轮不推送、不部署、不改页面代码、不新增素材。

后续若页面、资源或部署发生变化，仍按以下重点复跑：

- HTTP 状态和 fallback 正常。
- `www.radishx.com` 跳转到根域并保留路径。
- 页面无横向滚动。
- 关键图片加载成功。
- metadata、canonical、Open Graph 和 noindex 口径符合预期。
- 页面 error console 为空或无项目相关错误。

可先使用 HTTP smoke 做状态层检查：

```bash
npm run check:http-smoke -- --base-url https://radishx.com --www-url https://www.radishx.com
```

该命令只覆盖 HTTP、SEO 文件和公开图片资源，不覆盖视觉截图、滚动加载和交互状态。

## 完成标准

- 本地构建通过。
- 桌面和 390px 移动端关键路由无视觉阻断问题。
- 线上 HTTP 和截图级 smoke 有明确记录。
- 发布相关风险写入本周开发日志。

## 后续事项

- 后续如需要把设计源升级为精确实现稿，再通过 Pencil 逐屏重绘首页、项目详情模板、Mascot 页和 About 页；当前只完成实现口径同步说明，不做大面积视觉重做。
- 后续如页面代码、公开图片资源、Vercel 部署或域名策略变化，复跑线上 HTTP smoke 和 Playwright 桌面 / 移动端截图级 smoke。
- 首页主视觉或 Open Graph 图替换后，复查分享预览。
- 五个项目有独立站上线后，重新评估域名区和 sitemap 边界。
