# RadishX Docs

这里是 RadishX 官网项目的正式文档入口。

## 当前入口

- [当前规划](planning/current.md)：项目阶段、已确认决策、下一步。
- [Agent 协作与执行规则](development/agent-collaboration.md)：根入口、专题规则、当前规划与记录的职责边界。
- [功能与目标文档](features/README.md)：页面、功能、素材治理和发布检查的设计与开发文档。
- [开发规范](development/standards.md)：仓库、前端、公开内容维护、响应式、验证和提交规则。
- [视觉规范](design/visual-guidelines.md)：官网气质、页面节奏、Radish 视觉参考和素材使用原则。
- [Vercel 与域名](deployment/vercel.md)：官网部署边界、根域和未来项目域名策略。
- [素材治理](assets/materials.md)：虚拟形象、社交媒体素材和审核规则。
- [开发日志](devlogs/README.md)：周志索引。

## 当前状态

当前阶段、活跃目标、停止线和下一步不在本入口重复维护，统一查看[当前规划](planning/current.md)。

## 文档规则

- `docs/` 是本仓库正式文档源。
- `AGENTS.md` 与 `CLAUDE.md` 只保留启动级长期约束和任务路由，详细协作规则写入 `docs/development/agent-collaboration.md`。
- `docs/planning/current.md` 只保留当前阶段、活跃目标和执行顺序。
- 页面、功能、素材替换和发布检查的展开设计写入 `docs/features/`。
- 入口文档保持简短，历史过程写入开发日志。
- 页面结构、域名策略、视觉方向、部署边界或协作规则变化时，更新对应专题真相源；只有启动级长期约束变化时才修改根协作入口。
- 正文默认中文，路径、命令、配置键和产品名保留原文。
