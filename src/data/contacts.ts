import { projects } from "./projects";

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
    value: "luobo0608@foxmail.com",
    href: "mailto:luobo0608@foxmail.com",
    action: "发送邮件",
    intent: "正式说明",
    note: "适合项目合作、素材授权和较长说明。",
  },
  {
    label: "GitHub",
    value: "laugh0608",
    href: "https://github.com/laugh0608",
    action: "访问主页",
    intent: "源码入口",
    note: "查看公开仓库、提交记录和项目入口。",
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
  assetLabel: "wechat-official-account-qr-web.png",
  summary: "用于 Radish 系列项目动态、开发记录和公开说明。",
  status: "二维码已审核并接入 About 页。",
  boundary: "仅作为联系和社交媒体入口，不提供订阅表单或后端服务。",
  highlights: ["已审核二维码", "仅 About 页展示", "无后端订阅"],
};

export const repositories = [
  {
    name: "RadishX",
    ownerRepo: "laugh0608/RadishX",
    href: "https://github.com/laugh0608/RadishX",
    status: "Current Site",
    description: "Radish 系列项目官网与统一入口。",
    role: "官网、文档和公开素材说明源。",
    surface: "radishx.com",
    action: "打开官网仓库",
  },
  ...projects.map((project) => ({
    name: project.name,
    ownerRepo: `laugh0608/${project.name}`,
    href: project.githubUrl,
    status: project.status,
    description: project.tagline,
    role: project.role,
    surface: project.futureDomain,
    action: `打开 ${project.name} 仓库`,
  })),
];

export const domainSurfaces = [
  {
    label: "Canonical",
    domain: "radishx.com",
    status: "Current Vercel site",
    description: "当前官网主域，承载首页、四个项目介绍页、Mascot 和 About。",
  },
  {
    label: "Compatibility",
    domain: "www.radishx.com",
    status: "Redirect to root domain",
    description: "兼容访问入口，保留路径跳转到 radishx.com，不作为独立站点。",
  },
  ...projects.map((project) => ({
    label: project.name,
    domain: project.futureDomain,
    status: "Future project domain",
    description: "未来独立部署入口，当前不是本官网 Vercel rewrite。",
  })),
];
