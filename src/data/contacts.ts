import { projects } from "./projects";

export const contacts = [
  {
    label: "QQ",
    value: "2101827166",
    href: "https://qm.qq.com/",
  },
  {
    label: "Email",
    value: "luobo0608@foxmail.com",
    href: "mailto:luobo0608@foxmail.com",
  },
  {
    label: "GitHub",
    value: "laugh0608",
    href: "https://github.com/laugh0608",
  },
  {
    label: "个人主页",
    value: "imbhj.com",
    href: "https://www.imbhj.com",
  },
];

export const officialAccount = {
  name: "大白萝卜的坑",
  asset: "assets/social/wechat-official-account-qr.png",
  status: "二维码素材待确认后进入 public/images",
};

export const repositories = [
  {
    name: "RadishX",
    href: "https://github.com/laugh0608/RadishX",
    description: "Radish 系列项目官网与统一入口。",
  },
  ...projects.map((project) => ({
    name: project.name,
    href: project.githubUrl,
    description: project.tagline,
  })),
];
