export const mascotName = "萝小白";

export type MascotImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type MascotForm = {
  code: string;
  name: string;
  role: string;
  description: string;
  notes: string[];
  image: MascotImage;
};

export type MascotGalleryItem = {
  title: string;
  category: string;
  publicStatus: string;
  description: string;
  boundary: string;
  image: MascotImage;
};

export type MascotExpressionItem = {
  id: string;
  label: string;
  emotion: string;
  usage: string;
  boundary: string;
  image: MascotImage;
};

export type MascotUsageGroup = {
  label: string;
  title: string;
  summary: string;
  rules: string[];
};

export const mascotHeroImage: MascotImage = {
  src: "/images/mascot/radish-mature-standing-grayjade-v1-transparent.png",
  width: 941,
  height: 1672,
  alt: "萝小白虚拟形象完全体透明立绘",
};

export const mascotHeroCaption = "虚拟形象完全体 · 站姿";

export const mascotForms: MascotForm[] = [
  {
    code: "Origin",
    name: "原始形象",
    role: "站点图标与形态起点",
    image: {
      src: "/images/mascot/radish-origin-icon-web.jpg",
      width: 360,
      height: 360,
      alt: "萝小白原始萝卜图标",
    },
    description: "作为 RadishX 的形态起点，适合小尺寸印章、站点图标和 Mascot 页的原始形态展示。",
    notes: ["用于站点图标、小尺寸印章与形态展示", "不替代各项目的独立标识"],
  },
  {
    code: "Child",
    name: "可爱Q版",
    role: "亲和表达与轻游戏感",
    image: {
      src: "/images/mascot/radish-child-standing-white-dress-tall-web.jpg",
      width: 1254,
      height: 1254,
      alt: "萝小白可爱Q版站姿图",
    },
    description: "完整外装、非性感化、无身体拆解；适合首页视觉锚点、表情与轻量互动场景。",
    notes: ["公开形象保持完整外装与非性感化", "单张表情只做站内展示，不提供下载"],
  },
  {
    code: "Mature",
    name: "虚拟形象完全体",
    role: "品牌主视觉与长期角色表达",
    image: {
      src: "/images/mascot/radish-mature-standing-white-dress-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白虚拟形象完全体站姿图",
    },
    description: "适合承担品牌主视觉与长期角色记忆，也可延展为舞台、活动与服装方向。",
    notes: ["用于 Mascot 主视觉与品牌记忆点", "不声明素材可自由复用"],
  },
];

export const mascotGalleryItems: MascotGalleryItem[] = [
  {
    title: "服装变体",
    category: "Outfits",
    publicStatus: "公开展示",
    description: "展示萝小白可爱Q版的服装扩展方向。",
    boundary: "仅作站内展示，不提供独立素材文件。",
    image: {
      src: "/images/mascot/radish-child-outfit-variants-web.jpg",
      width: 1400,
      height: 700,
      alt: "萝小白可爱Q版服装变体展示",
    },
  },
  {
    title: "可爱Q版表情格",
    category: "Expressions",
    publicStatus: "整图预览",
    description: "可爱Q版基础表情的完整表情格。",
    boundary: "保留整图，不拆分单张，不提供下载。",
    image: {
      src: "/images/mascot/radish-child-expression-sheet-grid-web.jpg",
      width: 933,
      height: 1400,
      alt: "萝小白可爱Q版表情格展示",
    },
  },
  {
    title: "可爱Q版贴纸横图 01",
    category: "Stickers",
    publicStatus: "整图预览",
    description: "社交表达方向的贴纸整图预览。",
    boundary: "保留原始横图组合，不作为可下载贴纸包。",
    image: {
      src: "/images/mascot/radish-child-sticker-sheet-wide-01-web.jpg",
      width: 1024,
      height: 572,
      alt: "萝小白可爱Q版贴纸横图 01",
    },
  },
  {
    title: "可爱Q版贴纸横图 02",
    category: "Stickers",
    publicStatus: "整图预览",
    description: "社交表达方向的贴纸整图预览。",
    boundary: "保留原始横图组合，不作为可下载贴纸包。",
    image: {
      src: "/images/mascot/radish-child-sticker-sheet-wide-02-web.jpg",
      width: 1376,
      height: 768,
      alt: "萝小白可爱Q版贴纸横图 02",
    },
  },
  {
    title: "可爱Q版贴纸横图 03",
    category: "Stickers",
    publicStatus: "整图预览",
    description: "社交表达方向的贴纸整图预览。",
    boundary: "保留原始横图组合，不作为可下载贴纸包。",
    image: {
      src: "/images/mascot/radish-child-sticker-sheet-wide-03-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白可爱Q版贴纸横图 03",
    },
  },
  {
    title: "可爱Q版贴纸横图 04",
    category: "Stickers",
    publicStatus: "整图预览",
    description: "社交表达方向的贴纸整图预览。",
    boundary: "保留原始横图组合，不作为可下载贴纸包。",
    image: {
      src: "/images/mascot/radish-child-sticker-sheet-wide-04-web.jpg",
      width: 1376,
      height: 768,
      alt: "萝小白可爱Q版贴纸横图 04",
    },
  },
  {
    title: "完全体表情包",
    category: "Stickers",
    publicStatus: "公开展示",
    description: "虚拟形象完全体的表情与动作方向。",
    boundary: "仅作站内展示，不提供下载入口。",
    image: {
      src: "/images/mascot/radish-mature-sticker-sheet-wide-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白虚拟形象完全体表情包展示",
    },
  },
];

export const mascotGalleryNotes = [
  "表情格与贴纸横图保留整图，不拆分单张。",
  "所有图片仅作站内展示，不提供下载、素材包或贴纸包。",
  "节日与活动图不进入长期 Gallery。",
];

export const mascotExpressionItems: MascotExpressionItem[] = [
  {
    id: "rx-expression-001",
    label: "开心",
    emotion: "Happy",
    usage: "欢迎、正向反馈或轻量成功提示。",
    boundary: "保留中文标签和双手，不提供下载。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-happy-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版开心表情",
    },
  },
  {
    id: "rx-expression-002",
    label: "生气",
    emotion: "Angry",
    usage: "轻量状态提醒或情绪说明。",
    boundary: "保留蒸汽和怒气符号，不延展为攻击性语境。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-angry-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版生气表情",
    },
  },
  {
    id: "rx-expression-003",
    label: "震惊",
    emotion: "Surprised",
    usage: "异常、提示或惊讶类轻量场景。",
    boundary: "保留左侧符号和双手，不裁成单独头像。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-surprised-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版震惊表情",
    },
  },
  {
    id: "rx-expression-004",
    label: "得意",
    emotion: "Proud",
    usage: "完成反馈、亮点说明或小成就。",
    boundary: "保留手势和星形符号，不替代品牌 Logo。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-proud-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版得意表情",
    },
  },
  {
    id: "rx-expression-005",
    label: "期待",
    emotion: "Expectant",
    usage: "待办、预告或轻量引导。",
    boundary: "保留双手和星形符号，不作任何时间承诺。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-expectant-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版期待表情",
    },
  },
  {
    id: "rx-expression-006",
    label: "疑问",
    emotion: "Question",
    usage: "FAQ、待确认事项或说明提示。",
    boundary: "保留右上问号，不脱离上下文暗示错误。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-question-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版疑问表情",
    },
  },
  {
    id: "rx-expression-007",
    label: "无语",
    emotion: "Speechless",
    usage: "空状态、非阻断提示或轻量反馈。",
    boundary: "保留省略号，不用于嘲讽用户。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-speechless-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版无语表情",
    },
  },
  {
    id: "rx-expression-008",
    label: "OK",
    emotion: "OK",
    usage: "完成状态、确认或轻量成功反馈。",
    boundary: "保留 OK 字样和手势，不作为独立图标。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-ok-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版 OK 表情",
    },
  },
  {
    id: "rx-expression-009",
    label: "加油",
    emotion: "Cheer",
    usage: "项目进展、开发记录或鼓励类提示。",
    boundary: "保留举拳和强调线，不用于商业承诺。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-cheer-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版加油表情",
    },
  },
  {
    id: "rx-expression-010",
    label: "再见",
    emotion: "Goodbye",
    usage: "页尾、404 辅助或结束状态。",
    boundary: "保留挥手和红色强调线，不开放外部分发。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-goodbye-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版再见表情",
    },
  },
];

export const mascotUsageGroups: MascotUsageGroup[] = [
  {
    label: "展示",
    title: "只展示公开版本",
    summary: "页面中的图片均为公开版本，用于介绍萝小白的三种形态与表情方向。",
    rules: ["三种形态、Gallery 与表情候选只做站内展示。", "图片不表示可以自由使用、改作或再分发。"],
  },
  {
    label: "安全",
    title: "可爱Q版保持完整外装",
    summary: "可爱Q版的公开形象坚持完整外装、非性感化、无身体拆解。",
    rules: ["公开页面不使用未确认的设定图或裁剪版本。", "单张表情保留完整构图、中文标签与关键符号。"],
  },
  {
    label: "使用",
    title: "不提供下载或素材包",
    summary: "当前没有下载入口、素材包、贴纸包或自由复用声明。",
    rules: ["如需使用或合作，请通过 About 页面的联系方式沟通。", "未获得授权前，不支持商用、改作或再分发。"],
  },
  {
    label: "活动",
    title: "节日图只用于短期活动",
    summary: "节日与活动图只在明确的活动期内使用，不进入长期 Gallery。",
    rules: ["当前页面不展示节日或活动图。", "活动结束后不保留为常驻视觉。"],
  },
];
