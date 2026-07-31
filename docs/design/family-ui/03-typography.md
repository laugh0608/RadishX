# 03 字体与排版

## 1. 字体策略

| Token | 栈 | 用途 |
| --- | --- | --- |
| `--rd-font-sans` | `system-ui, -apple-system, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", sans-serif` | 默认正文与界面字体 |
| `--rd-font-serif` | `"Songti SC", "STSong", "Noto Serif SC", serif` | Brand 面大标题与少量展示性标题 |
| `--rd-font-mono` | `ui-monospace, "SF Mono", "Cascadia Code", "JetBrains Mono", Consolas, monospace` | 代码、命令、id、路径、域名、需对齐的数值 |

规则：

- Web 端使用系统栈，不引入网络字体。
- 桌面客户端或自绘 UI 可打包字体保证跨平台中文渲染；只打包必需字重并保留许可证文件。
- **衬线边界**：衬线只出现在 Brand 面大标题与展示性场景；Workbench 面一律无衬线，表单、表格、按钮、正文永远无衬线。
- 首版不引入第三字体家族；中英文并排必须协调，无明显时代断层。

## 2. 字号阶梯

### Workbench 面（默认）

| 角色 | 字号 | 行高 | 用途 |
| --- | --- | --- | --- |
| display | 32–40px | 1.2 | 页面主标题，一页最多一个 |
| title | 20–24px | 1.3 | 页面次级标题、大面板标题 |
| section | 16–18px | 1.4 | 面板 / 分区标题 |
| body | 13–15px | 1.5–1.6 | 正文、字段、列表（默认 14px） |
| caption | 12–13px | 1.4 | 元信息、chip、时间戳、单位 |
| metric | 24–40px | 1.1 | KPI 大数字，只用于关键摘要 |

### Brand 面

展示型页面可采用：首页 H1 桌面 64–88px / 移动 42–52px，页面 H1 桌面 48–64px / 移动 34–42px，正文桌面 16–18px / 移动 15–16px。移动端标题使用独立字号，不靠桌面字号硬缩放。

## 3. 字重

- 常规 400、中强调 500、标题 600；避免 700+ 大面积使用。
- 数字强调优先用字号与颜色，不叠加过粗字重。

## 4. 排版规则

- `letter-spacing` 不小于 0；中文标题可有轻微正字距，不做断裂式拆字排版。
- 不用 `vw` 直接控制字号。
- 表格与 KPI 数字启用 `font-variant-numeric: tabular-nums`（或等宽字体）保证对齐。
- 单位必须紧贴数值，不藏进说明文字。
- 中英文长度冗余：按钮、tab、chip、列名必须为语言切换留余量，不用短文案卡死宽度。
- 长 id、路径、URL 必须支持截断、tooltip 或断行，不得溢出容器或挤压相邻状态标签。
- 界面文案短句化：说明帮助用户做决定，内部调试变量不出现在默认界面。
