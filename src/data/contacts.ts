import { projects } from "./projects";
import { radishUIRepositoryUrl } from "./navigation";

export const contacts = [
  {
    label: "QQ",
    value: "2101827166",
    href: "https://qm.qq.com/",
    action: "打开 QQ",
    intent: "即时沟通",
    note: "公开联系号，适合临时沟通和事项确认。",
  },
  {
    label: "Email",
    value: "luobo@radishx.com",
    href: "mailto:luobo@radishx.com",
    action: "发送邮件",
    intent: "正式说明",
    note: "适合项目合作、素材授权和较长说明。",
  },
  {
    label: "GitHub",
    value: "RadishIntelligence",
    href: "https://github.com/RadishIntelligence",
    action: "访问主页",
    intent: "组织入口",
    note: "萝卜智能 · Radish Intelligence 的组织主页与项目入口。",
  },
  {
    label: "个人主页",
    value: "imbhj.com",
    href: "https://www.imbhj.com",
    action: "访问站点",
    intent: "个人站点",
    note: "个人主页入口，不替代 RadishX 官网主域。",
  },
];

export const officialAccount = {
  name: "大白萝卜的坑",
  asset: "/images/social/wechat-official-account-qr-web.png",
  summary: "用于 Radish 系列项目动态、开发记录和公开说明。",
};

export const repositories = [
  {
    name: "RadishX",
    ownerRepo: "RadishIntelligence/RadishX",
    href: "https://github.com/RadishIntelligence/RadishX",
    status: "官网",
    description: "Radish 系列项目官网与统一入口。",
  },
  {
    name: "RadishUI",
    ownerRepo: "RadishIntelligence/RadishUI",
    href: radishUIRepositoryUrl,
    status: "共享基础设施",
    description: "家族共享设计系统，提供视觉基础、通用组件与界面范例；当前为工程预览。",
  },
  ...projects.map((project) => ({
    name: project.name,
    ownerRepo: `laugh0608/${project.name}`,
    href: project.githubUrl,
    status: project.status,
    description: project.tagline,
  })),
  {
    name: "RadishAxiomChecker",
    ownerRepo: "laugh0608/RadishAxiomChecker",
    href: "https://github.com/laugh0608/RadishAxiomChecker",
    status: "配套工具",
    description: "RadishAxiom 配套的独立语义与证据检查器。",
  },
];

export const domainSurfaces = [
  {
    label: "Canonical",
    isIndependentEntry: false,
    domain: "radishx.com",
    status: "官网主域",
    description: "承载首页、十三个项目介绍页、萝小白和 About。",
  },
  {
    label: "Compatibility",
    isIndependentEntry: false,
    domain: "www.radishx.com",
    status: "兼容入口",
    description: "访问 www.radishx.com 会跳转到主域，路径保持不变。",
  },
  {
    label: "RadishUI",
    isIndependentEntry: true,
    domain: "ui.radishx.com",
    status: "设计系统预览",
    description: "家族共享设计系统的独立展示站，提供视觉基础与组件示例。",
  },
  ...projects.flatMap((project) =>
    project.domain
      ? [
          {
            label: project.name,
            isIndependentEntry: true,
            domain: project.domain.name,
            status: "Web 入口",
            description: `${project.name} 的独立 Web 服务，可通过项目详情页访问。`,
          },
        ]
      : [],
  ),
];
