# 10 迁移说明书（撤项目 UI 专题 / 新产品接入）

本文是操作手册：当某个家族项目要撤掉自己的通用 UI 专题、或新产品要接入统一规范时，**只需按本文执行**，把所需规范与参考复制 / 引用到目标项目即可，不需要重读全套规范。

## 0. 适用时机

- 现有项目决定退役自己的通用视觉规范（颜色、字体、间距、通用组件条款）。
- 新产品启动，需要建立 UI 基线。
- family-ui 发布破坏性变更版本，下游需要跟进。

## 1. 复制还是引用

| 内容 | 策略 | 原因 |
| --- | --- | --- |
| `tokens/tokens.json` | **复制**到目标项目 | 要进入目标项目构建 / 生成流程 |
| `tokens/tokens.css`（或按栈生成物） | **复制** | 同上 |
| 规范正文（01–08 章） | **引用**（记路径 / 链接，不复制正文） | 避免多副本漂移；家族真相源唯一 |
| [references.md](references.md) 参考图 | **引用**；确需本地查看时可复制图片，且必须带上版权边界说明 | 外部截图不扩散 |
| 差异附录模板（本文 §4） | **复制**并填写 | 项目自持 |

## 2. 现有项目撤专题步骤

以下每步可独立提交。

**Step 1 建差异附录**：在目标项目 `docs/` 下新建 `ui-addendum.md`（模板见 §4），先只填「项目定位 / Profile / 遵循版本」。

**Step 2 复制 token 文件**：把 `tokens/tokens.json`、`tokens/tokens.css` 复制到目标项目样式目录；按技术栈处理：

- React / Web：直接引入 tokens.css，或从 tokens.json 生成。
- egui / 自绘：按 tokens.json 手写映射结构体，映射表贴进差异附录。
- Flutter：tokens.json → `ThemeData` / `ThemeExtension` 映射，映射文件路径记入附录。
- Godot：只映射状态色语义与文本可读性相关值到 theme resource。

**Step 3 建 L2 别名层**：把项目现有前缀（`--theme-*` / `--console-*` / `--rm-*` / `studio-*`）逐个指向 `--rd-*`（`--old-x: var(--rd-x)`），参照 [09-adoption.md](09-adoption.md) 的映射表；值有差异的项按「待收敛清单」决定立即收敛还是暂持旧值并登记。组件代码此阶段**不必改动**。

**Step 4 撤旧专题**：对项目原 UI 规范逐节处理——

- 与 family-ui 01–08 章重复的通用条款（色板、字体、间距、通用组件、避免方向）：**删除**，在删除位置留一行指向 family-ui 对应章节。
- 领域特有条款（画布图元、HUD、状态矩阵、候选窗、治理证据面板等）：**迁入差异附录**保留。
- 项目灵感参考文档（如 ui-design-inspiration 类）：可保留，标注「历史灵感库，家族级参考见 RadishX family-ui/references.md」。

**Step 5 更新项目入口**：在目标项目 `CLAUDE.md` / `AGENTS.md` / README 的规范入口处改为：

> UI 通用规范遵循 RadishX `docs/design/family-ui/`（版本 <YYYY-MM-DD>）；项目差异见 `docs/ui-addendum.md`。

**Step 6 验证与回写**：目标项目构建 + 至少一桌面一窄屏视觉 smoke；按 09 章「合规检查清单」自查；回写 RadishX [09-adoption.md](09-adoption.md) 接入状态表。

## 3. 新产品接入步骤

1. 回答三个问题（见 [01-principles.md](01-principles.md) 扩展规则）：Profile 归属、accent 选色、自治组件范围。
2. 执行 §2 的 Step 1 / 2 / 5（绿地项目无旧专题与别名负担，直接用 `--rd-*`）。
3. 把 accent 分工登记回 [02-color.md](02-color.md) 第 4 节，接入状态登记回 [09-adoption.md](09-adoption.md)。
4. 若三个问题的答案超出现有规范（新 Profile、新 token 需求），先在 family-ui 提版本变更，再进实现。

## 4. 差异附录模板

复制以下模板到目标项目 `docs/ui-addendum.md` 并填写：

```markdown
# <项目名> UI 差异附录

- 遵循：RadishX family-ui <YYYY-MM-DD>（docs/design/family-ui/）
- Profile：Brand / Workbench / Game（多面产品分别标注）
- 主 accent：<母板色系>；辅 accent：<母板色系>（与 family-ui 02 章登记一致）

## Token 实现

- token 文件位置：<路径>
- 技术栈映射方式：<CSS 直用 / egui 映射表 / Flutter ThemeData / Godot theme>
- L2 别名层：<有 / 无；别名文件路径>

## 领域自治组件

| 组件 | 规范位置 | 说明 |
| --- | --- | --- |
| <画布图元 / HUD / 候选窗…> | <本项目文档路径> | <一句话边界> |

## 与 family-ui 的已知偏离

| 条款 | 偏离内容 | 理由 | 计划 |
| --- | --- | --- | --- |

## 维护规则

- 通用条款变更走 family-ui，不在本附录扩写。
- family-ui 非破坏性更新后择机评估跟进；破坏性更新按其迁移窗口执行。
```

## 5. 版本升级跟进

- 非破坏性更新：下游择机跟进，更新附录中的遵循版本日期即可。
- 破坏性更新：family-ui 会在 [09-adoption.md](09-adoption.md) 登记迁移窗口与破坏性变更清单；下游按清单逐项处理后更新版本日期。

## 6. 撤专题的"不做"

- 不删除项目的领域自治规范（那是差异附录的正文来源）。
- 不把 family-ui 正文复制成项目内副本。
- 不在迁移批次里顺手做视觉重构；迁移只做等价替换与登记，视觉收敛按「待收敛清单」另开批次。
