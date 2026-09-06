# RadishX 官网 UI 差异附录

- 运行时 token：family-ui `v26.7.3` 灰玉参考。
- 首页与共享 Header：`radishx-site-v1.pen` 灰玉设计；其余页面保留 craft 结构。
- Profile：Brand 展示面。
- 页面范围、验收与下一步以 [当前规划](../planning/current.md) 为准。

本附录记录本站 token 映射、组件事实及规范偏离。family-ui 是通用参考，不要求其他项目同步采用本站实现。

## Token 实现

- `src/styles/family-ui-tokens.css` 是 `docs/design/family-ui/tokens/tokens.css` 的运行时副本，提供 `--rd-*`。
- `src/styles/tokens.css` 将通用语义映射为 `--rx-*`，同时定义站点特有值；不是所有 `--rx-*` 都是上游别名。
- 当前引入顺序为 `family-ui-tokens.css → tokens.css → global.css → utilities.css → home-v1.css`，见 `src/main.tsx`。
- 组件样式优先消费 `--rx-*`；当前 `home-v1.css` 也覆盖共享 Header，属于待整理的文件职责，不代表仅影响首页。
- 更新副本时比较上游版本和实际差异，不只修改版本号；通用参考变更与本站采用分别决定。

## 站点特有 token

| Token | 用途 |
| --- | --- |
| `--rx-font-body` / `--rx-font-heading` / `--rx-font-serif` / `--rx-font-mono` | Brand 字体栈；Inter / Geist 等是候选字体名称，当前未加载外部字体，实际显示依赖本机字体与 fallback |
| `--rx-space-page-x` / `--rx-content-max` | 页面边距与内容宽度 |
| `--rx-shadow-color` | 暖棕阴影分量；暗色为黑色 |
| `--rx-state-success-strong` / `--rx-state-warning-strong` | 状态文字的站点变体 |
| `--rx-brand-stage` / `--rx-brand-stage-muted` | 首页深灰玉 Mascot 舞台 |
| `--rx-transition-base` | 对 family-ui motion 时长和曲线的组合 |

## 主题与暗色

- `src/app/theme.ts` 管理 system / light / dark 偏好、localStorage 与系统主题监听。
- `index.html` 在 React 执行前设置主题属性，减少首屏主题闪烁。
- `ThemeToggle.tsx` 提供三个可直接选择的段控按钮；桌面位于 Header，移动位于展开菜单中，不是单按钮循环切换。
- 暗色通过 `[data-rd-theme="dark"]` 覆盖上游与少量本站 token。
- 灰玉首页主按钮用 `--rx-text-on-brand`，深色舞台用 `--rx-text-on-ink`；不同背景的前景语义不能统一替换。
- 当前 metadata 会覆盖 `theme-color`，需随质量修正处理；页面 CSS 主题与浏览器主题色应分别验证。

## 页面与组件

| 组件 | 实现位置 | 当前职责 |
| --- | --- | --- |
| 首页项目舞台 | `HeroOrbit.tsx`、`HomeProjectVisual.tsx`、`home-v1.css` | 单项目内容舞台与五项目 tab 索引；`HeroOrbit` 为沿用名称，已不再是中心环绕星图 |
| 首页项目矩阵 | `ProjectMatrix.tsx`、`HomeProjectVisual.tsx` | 五种领域视觉与不对称布局，移动改单列 |
| 项目主媒体 | `MediaFrame.tsx`、`global.css` | 已审核代表图或 Mind / Lex 代码内示意，不冒充真实产品截图 |
| Mascot 展示 | `HomePage.tsx`、`MascotPage.tsx` | 首页透明舞台与详情页三形态 / Gallery 分别维护，遵守素材准入 |
| 共享 Header | `SiteHeader.tsx`、两份页面 / 全局 CSS | 桌面导航、主题段控与移动菜单 |

## 已知差异与处置

| 对照项 | 当前事实 | 处置 |
| --- | --- | --- |
| 字体来源 | 站点使用带 Inter / Geist 的系统 fallback 栈 | 描述为字体栈偏好，不宣称已引入 Web 字体；新字体仍需授权 |
| 焦点环 | 使用灰玉品牌色混合透明度，上游参考为墨蓝 focus-ring | 保留本站表达，结合真实背景复核可见性，不沿用“品牌红”旧说明 |
| 字距与字号 | `home-v1.css` 使用负字距和含 `vw` 的 `clamp()`，偏离视觉规范默认要求 | 尚未决定修实现还是调整限定规则；后续按桌面、移动及文字缩放证据确认，不扩大为全站例外 |
| muted 小字 | 现有浅色 token 对常用浅底的计算对比度为 3.30–3.79:1，首页存在对应信息小字 | 待复核实际背景并达到普通文字 4.5:1；优先明确本站修改范围，不自动改全家族规范 |
| 暗色精确设计 | 主题切换存在，灰玉首页尚未建立独立暗色精确稿 | 可读性问题仍需修复；暗色设计扩展另行确定，不把两者混为一个目标 |

具体问题、证据等级和验收项见 [官网质量与对外表达收口](../features/site-quality-and-public-content.md)。这里记录偏离事实，不把未修复项描述成已达标。

## 维护规则

- 通用原则维护于 family-ui，本站差异维护于本附录。
- 更新视觉基线时同步组件职责与样式引入顺序，删除已失效的“待迁移”描述。
- 阶段完成与验证事实记录到当前规划和开发日志，不在本附录重复维护进度清单。
