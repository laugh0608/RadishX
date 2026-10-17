# 官网整体设计与美化

状态：R2.2 首页、详情页、About、Mascot 与共享层完成，所有者已确认四页双端截图；表情裁切与 Pencil 回填下一步
最后更新：2026-10-17

## 2026-10-17 R2.2 首页重构（React-first）

所有者确认按“精选展示、完整目录、跨页统一”继续推进，但不再等待新的 Pencil 探索；本轮以已确认的 R2.1 为视觉参考，直接在 React 中完成首页重构，Pencil 设计源后补。当前环境没有 Pencil 读写工具，因此本轮不修改 `.pen`，也不把 R2.1 的旧内容当作当前事实。

本轮范围仅首页。精选项目由所有者确认为 Radish、RadishInk、RadishFlow、RadishLex 四项；精选只表示编辑选择，不表示四项都已发布。其余八个项目仍进入完整目录，Axiom Checker 继续归入 Axiom，不单列。

首页信息架构：

- 首屏：RadishX 品牌字形、“把好奇心，做成作品。”、四项精选切换与“浏览全部项目”入口。
- 精选舞台：当前项目的编号、状态、定位、入口与领域视觉；不使用 12 项横向滚动索引。
- 项目目录：按 Community & Creation、Tools & Workflow、Games & Worlds、Explorations & Systems 分组，使用 2 个大型展面、2 个强视觉展面、4 个中型展面和 4 个紧凑条目，完整保留十二项。
- 收束：萝小白深灰玉舞台与本页紧凑页脚；About、Mascot 页面本轮不重构。

视觉与内容边界：

- 沿用纸色、灰玉、深墨与现有字体栈；不新增外部图片、字体或依赖。
- Radish 使用既有角色图，Catalyst 使用既有概念图；其余项目使用代码内排版 / 示意图，不冒充真实截图或正式 Logo。
- 公开页面移除 `Temporary mark`、`Reviewed asset`、`Asset source`、`Usage boundary` 等内部评审语言；项目页的治理字段已在同日详情页批次处理。
- Flow 当前为开发中，不再使用 R2.1 的“历史项目”表述。
- 不改变十二项的项目事实、部署入口或路由；只重构首页展陈。
- 不做自动轮播；精选切换保留键盘操作与 reduced-motion 支持。

验收：桌面 1440×900 与移动 390×844 下检查首页；十二项全部可见；四项精选切换、完整目录、Mascot 与紧凑页脚正常；无横向溢出、无浏览器错误；已部署入口仍只保留 Radish 与 RadishInk。

实现：新增 `HomeHero`、`HomeCollection`、`HomeMascot`、`HomeArt` 与 `homeShowcase` 展陈配置，样式写入 `home-v2.css`；删除不再使用的 `HeroOrbit`、`ProjectMatrix`、`HomeProjectVisual`、`ProjectBand` 与 `homeVisuals`。首页锚点改为 `#collection`，同时保留 `#projects` 兼容锚点；Header 的 Projects 入口在首页和项目页保持 active。精选切换使用原生 tab 语义，支持方向键、Home / End 与 reduced-motion。旧的 `home-v1.css` 在本轮暂留共享 Header 与历史选择器；已在同日 About / Mascot 批次迁出 Header 并删除。

验证：`npm run build` 通过；Chrome 在 1440×900 与 390×844 下检查首页，十二项目录、四项精选切换、Mascot、紧凑页脚和深色模式均正常；精选点击与方向键 / Home / End 切换正常，`#collection` 与兼容 `#projects` 均能滚动到项目目录且 Projects 保持 active；无横向溢出、无浏览器错误；页面高度约 3,984px / 6,640px，较旧首页的 5,641px / 8,764px 明显收敛。首页不再出现 `Temporary mark`、`Reviewed asset`、`Asset source` 等内部评审语言。Pencil 设计源尚未回填，R2.1 旧画板仍记录旧项目范围。

## 2026-10-17 R2.2 项目详情页模板（React-first）

所有者确认首页方向后进入详情页批次。本轮把旧 craft 详情模板替换为与首页一致的编辑式结构，覆盖全部十二个 `/项目` 路由；不修改 About、Mascot 与服务端边界。

详情页结构：

- Hero：返回“全部项目”、`orbitLabel`、项目名、短定位、摘要、能力标签、2–3 个主要动作与状态 / 阶段 / Web 入口摘要；右侧为项目领域展面。
- Focus：左侧定位标题，右侧 01–03 关键能力。
- Current state：当前阶段、状态与三条状态信号。
- Explore：项目文档、GitHub、已部署 Web 入口和配套仓库的文本链接列表。
- Continue：四个后续项目的紧凑入口与“全部十二个项目”返回入口。
- 页脚：与首页一致的紧凑页脚。

视觉与内容边界：

- Radish 使用既有角色图与深灰玉展面，Catalyst 使用既有概念图；其余项目复用首页代码内领域展面，不新增截图或 Logo。
- 删除 `MediaFrame`、`InfoRail`、`ProjectMark` 和旧 Page flow / Public Surface 结构；详情页不再展示 `Temporary mark`、`Reviewed asset`、`Asset source`、`Usage boundary` 等内部评审字段。
- 未部署项目只显示“暂无公开站点”，不展示计划域名或禁用访问按钮；已部署项目才出现 Web 入口动作与链接行。
- 长项目名使用 `<wbr>` 在 `Radish` 前缀后提供自然换行机会，避免 `RadishLedger` 被拆成无意义片段。
- 不改变项目事实、文档链接、路由、域名或部署配置；Axiom Checker 继续作为 Axiom 的配套仓库。

验证：`npm run type-check` 与 `npm run build` 通过；Chrome 在 1440×900 与 390×844 下覆盖全部十二个详情路由，另检查 Radish / Ink / Ledger / Root 的桌面、移动与深色截图。各页均有 3 项能力、3 条状态信号、3–5 个文档 / 仓库链接与 4 个后续项目；无旧详情块、无内部评审语言、无横向溢出、无浏览器错误。桌面详情页高度约 2,460–2,731px，移动约 3,812–3,994px，较旧模板明显收敛。截图在 `output/playwright/project-r2-2026-10-17/`。Pencil 源仍未回填。

## 2026-10-17 R2.2 About / Mascot 与共享层收口

所有者确认详情页之后继续处理 About、Mascot 与全站共享层。本轮把两页从 craft 卡片与审核字段改为与首页 / 详情页一致的编辑式结构，并清理旧样式职责。

About 结构：Hero（介绍、GitHub / Email 动作、12 项目 / 14 仓库 / 2 Web 入口 / 1 公众号索引）、Contact（4 个联系入口与公众号二维码）、Repositories（14 个公开仓库编号索引）、Domains（4 项域名边界）。公开文案删除 `No login / API surface`、`WeChat QR reviewed`、二维码审核状态、仓库 `Role / Surface`、`Current Vercel site`、`Redirect to root domain`、`已部署` 与“域名和部署边界”等内部实现语言。

Mascot 结构：深灰玉 Hero（三形态标签、透明完全体立绘、无下载说明）、三种形态、7 张 Gallery 与说明单元、10 张表情候选、四组使用边界。公开文案删除 `Asset status`、`Audit status`、`Usage boundary`、`Next material need`、来源格位、`public/images` / `assets/` 路径与 `Reviewed preview` / `Sheet preview only` 等评审字段；素材准入与撤回信息继续保留在治理文档。

共享层：Header 规则从 `home-v1.css` 迁入 `global.css`；删除 `home-v1.css`、`utilities.css`、`SectionHeader` 与全局旧首页 / 详情选择器；Footer 默认与紧凑变体、按钮、`eyebrow`、`status-chip` 与 h1–h3 层级统一收口。首页 / 详情页继续使用紧凑页脚，About / Mascot 使用默认页脚。

视觉与内容边界：不新增依赖、外部图片、字体或第三方服务；不修改十二个产品事实、路由、部署链接、DNS 或 Vercel；不修改 `.pen`。About / Mascot 使用既有已公开图片与代码内排版，不冒充新截图或正式 Logo。

验证：`npm run check:local-release`、`npm run check:http-smoke -- --base-url http://127.0.0.1:4500` 与 `npm run check:agent-guides` 通过；Chrome 1440×900 与 390×844 覆盖 `/`、`/about`、`/mascot`、`/radish` 的亮 / 暗主题：无横向溢出、broken image、console error 或小于 44px 的链接触控目标；About 为 4 个联系入口、14 个仓库、4 个域名；Mascot 为 3 形态、7 Gallery、10 表情、4 组边界；公开文本不含内部评审与部署语言。页面高度：首页约 3,987 / 6,647px，详情 Radish 约 2,534 / 3,818px，About 约 3,355 / 5,357px，Mascot 约 4,940 / 10,020px。截图在 `output/playwright/site-r2-2026-10-17/`。

遗留：R2.2 Pencil 设计源仍未回填；首批 10 张单张表情 Web 图存在既有裁切偏移，本轮未改素材，需单独授权后重新生成。线上版本未核验。

## 目标与授权

以下 R2.1 内容保留为历史设计与静态评审记录；项目数量、Flow 状态与 Pencil 画板不再直接代表当前 R2.2 首页。

项目所有者已确认沿用纸色、灰玉与萝小白的品牌基础，按“精选展示、完整目录、跨页统一”的建议推进。第一批完成首页与 Radish 代表详情页的桌面 / 移动设计，供整体效果评审；设计确认后再进入 React 实现和其他页面扩展。

本轮仅维护设计与目标文档，不启动服务、增加依赖、迁入兄弟素材、修改路由、公开入口或部署。新页面文案依据 [产品矩阵同步](product-matrix-refresh.md)；本地产品状态核验不等于线上可用性核验。

## 第一批范围

- 首页：品牌首屏与精选项目舞台、八个在研 / 维护项目目录、Flow 历史入口、萝小白品牌舞台与收束页脚。
- 精选候选：Radish、Lex、Catalyst；默认 Radish，手动切换，不自动轮播。精选只表示编辑选择，不表示产品均已发布。
- 主目录：Radish、Lex、Catalyst、Mind、Axiom、Memory、Nexus、Link；Checker 在 Axiom 条目中标为配套工具，Flow 独立标注停止公开业务维护。
- Radish 详情：兴趣社区定位、代表视觉、用途、Web / Native 分工、源码与文档入口及关联项目。
- 桌面宽 1440，移动宽 390；使用同一信息顺序，移动改为单列，目录直接可见。

## 首轮反馈与第二轮重点

所有者反馈“勉强可以，但缺少设计感”。保留产品用途、成熟度和入口组织，直接迭代现有 R2 画板：强化首屏的品牌字形与展陈构图，将平铺目录转为有主次的项目展陈，给不同领域保留可辨认的文字 / 示意视觉；代表详情同步调整构图与段落节奏。移动稿独立编排，避免只缩小桌面稿。首轮预览保留在本地原导出目录，第二轮另行导出。

## 视觉与素材

- 沿用 family-ui v26.7.3，灰玉承担主动作，正文使用主文字 / 次文字 token，弱信息不依赖低对比度小字。
- 用大标题、留白和明度差组织内容；精选区允许强视觉，项目区采用大小有别的展陈组合，主图与文字领域视觉配合，不重复整套首屏媒体，不画暗示已实现集成的关系图。
- 延续已确认首页萝小白透明立绘；Radish 代表图按既有授权使用，标明角色视觉，不描述为产品截图。其余新项目使用文字与排版表达领域，本轮不新增外部图片或字体资源。
- 设计源为 `docs/design/sources/radishx-site-v1.pen`，保留原两张灰玉基线，在旁边新增本轮画板；v0 历史源不改。
- 英文品牌使用现有设计字体，中文正文保持系统无衬线方向；不新增负字距，移动标题独立设定。

## 交互与文案

- 项目名称、短用途、当前阶段和具体动作同时可读。未核实的独立站不呈现为可点击体验入口。
- 首页精选切换复用现有键盘 tab 语义；设计明确默认、选中、悬停和焦点态；移动不依赖 hover，不隐藏完整目录。
- 移动 Header 保持 44px 菜单按钮，弹层沿用现有导航和主题切换；滚动锚点避开 sticky Header。
- Radish 首屏优先“查看源码 / 阅读文档”。已发布 Web 是状态事实，实际访问 URL 核验前不放“立即体验”。Native 明确分平台建设，不把本地验收写成全端发布。
- 素材审核、Route、部署边界、批次编号移回文档；页面只保留用途、成熟度、可用动作和必要使用限制。
- 动效只做短时淡入、切换反馈，尊重 reduced-motion；暗色沿用 token 策略，完整暗色精确稿留待范围确认。

## 验证与完成标准

- 四张主画板内容完整，无布局溢出、文字截断、角色主体裁切与过低对比度。
- 逐区 Pencil 截图检查，完成后导出本地预览；原始两张基线不被改写。
- 文档链接、UTF-8 / LF、协作入口同步与 `git diff --check` 通过。
- 记录画板 ID、评审状态和未验证边界。Pencil 静态检查不写成浏览器交互或线上验收。

## 设计交付与静态复核

设计源：`docs/design/sources/radishx-site-v1.pen`。原始 `p2os7` / `Z8IVU` 两张灰玉基线保留；本轮新增：

| 画板 | 节点 ID | 范围 |
| --- | --- | --- |
| R2.1 · 首页 Desktop · 展陈精修 | `AytTs` | 1440px，品牌大字 / 精选展签 / 不对称展陈 / Flow 历史 / 萝小白 / 页脚 |
| R2.1 · 首页 Mobile · 展陈精修 | `f5KnH6` | 390px，独立首屏与精选构图、分级压缩的项目展面 |
| R2.1 · Radish Desktop · 展陈精修 | `FGArU` | 1440px，深灰玉角色展面 / 编号分栏 / 平台进展 / 入口 |
| R2.1 · Radish Mobile · 展陈精修 | `O0ZlX` | 390px，入口前置与单列状态说明 |
| R2.1 · 交互状态与移动菜单 · 评审说明 | `XmBXA` | Lex / Catalyst 桌面与移动备用精选、移动菜单、按钮反馈及实现说明 |

2026-09-06：Pencil 五个新增根画板的结构检查无部分 / 完全裁切报告；逐区检查首屏、目录、角色舞台、平台说明及备用精选。修正移动 Mascot 标记越界，并为新稿引入设计局部文字 token `rx-r2-text-accent`（`#46513f`），避免原灰玉文字在浅灰玉底上的 4.44:1 小字对比度。该 token 未写入运行时，也未替换旧画板变量。

预览导出至本地 `output/design-refinement-2026-09-06/`，按节点 ID 命名；该目录为不提交的 QA 产物，正式可编辑源保留在 `.pen`。首屏示例和完整详情导出图已复核。

2026-09-06 第二轮 R2.1：在同一五张画板中直接迭代，原始两张灰玉基线保持不动。增强品牌字形比例、精选章节与轻倾斜角色图；项目区改为 Radish / Lex 字形展面、Catalyst 工厂概念图与 Mind 深色展面、三个较小领域条目及 Link 通信主题。Radish 详情增加深灰玉角色展面、编号分栏和 Web 主产品线的视觉层级。移动辅助展面压缩为短条，保留名称、用途、阶段和入口。

第二轮预览输出至 `output/design-refinement-r2-2026-09-06/`；第一轮导出不覆盖，供前后比较。已复核五张画板的可见节点边界与画板间隔，无可见内容裁切；隐藏的旧定位摘要不参与可见节点检查。已检查桌面 / 移动首屏、项目展面、详情用途及精选备用状态，角色主体保持完整。

这批为静态设计：尚未执行本轮 React 构建、交互验收、浏览器 / 线上复核；未确认新增详情路由与实际产品体验 URL，也未替换正式页面素材。

## 后续批次

1. R2.2 首页、详情页、About、Mascot 与共享层已完成 React-first 实现和双端验证；等待所有者查看截图并确认下一批范围。
2. 评估 R2.2 Pencil 设计源回填；`.pen` 只能通过 Pencil 读写，当前环境未执行。
3. 单张表情 Web 图裁切偏移需单独确认素材授权与重新生成范围。
4. 继续核实公开访问地址、修正既有质量问题，再评估 SEO 静态输出与验证入口。
