# 当前规划

最后更新：2026-06-12

## 当前阶段

RadishX 当前处于官网项目初始化前的规划与基础治理阶段。

已完成：

- 明确技术栈：Vite + React + TypeScript。
- 明确部署目标：GitHub 公开仓库 + Vercel 免费部署 `radishx.com`。
- 明确页面结构：首页、四个项目介绍页、Mascot、About。
- 明确官网气质：创意品牌 / 游戏感 / 视觉冲击，参考 Apple 官网的节奏。
- 整理虚拟形象和社交媒体素材。
- 建立基础文档、协作文件和仓库通用配置。
- 初始化 Git 仓库并推送到 `laugh0608/RadishX`。
- 生成儿童形态安全设定图候选 `assets/avatars/child/radish-child-safe-design-sheet-v1.png`。
- 添加 RadishX source-available 许可证 `LICENSE`。

## 产品边界

当前官网只负责展示 RadishX 和四个项目矩阵。

本官网包含：

- `radishx.com` 官网首页。
- Radish、RadishCatalyst、RadishFlow、RadishMind 的站内介绍页。
- Mascot 虚拟形象页。
- About 联系方式和社交媒体页面。

本官网不包含：

- 四个项目的实际业务功能。
- 四个项目未来独立站点的部署。
- 登录、后台、数据库、服务端 API。

## 域名决策

- `radishx.com`：当前官网，部署在 Vercel。
- `hub.radishx.com`：Radish 未来独立访问域名。
- `forge.radishx.com`：RadishCatalyst 未来独立访问域名。
- `flow.radishx.com`：RadishFlow 未来独立访问域名。
- `mind.radishx.com`：RadishMind 未来独立访问域名。
- `x.radishx.com`：保留给 RadishX Labs、实验入口、短链或统一跳转页。

四个项目域名不是当前 Vercel 官网项目的路由或重写规则。

## 待确认

- 首页主视觉最终选图。
- 四个项目详情页使用哪些截图、Logo 或视频素材。
- 是否需要为项目文档入口暴露仓库内 docs 链接。

## 下一步建议

1. 审核首页和 Mascot 页首批候选图。
2. 初始化 Vite + React + TypeScript 项目。
3. 实现静态多页面官网骨架。
4. 完成 PC 和移动端响应式首轮验证。
5. 配置 Vercel 项目并绑定 `radishx.com`。
