export const mascotName = "萝小白";

export type MascotImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type MascotExpressionItem = {
  id: string;
  label: string;
  emotion: string;
  sourceCell: string;
  usage: string;
  boundary: string;
  image: MascotImage;
};

export const mascotHeroImage: MascotImage = {
  src: "/images/mascot/radish-mature-standing-white-dress-web.jpg",
  width: 1400,
  height: 788,
  alt: "萝小白虚拟形象完全体站姿图",
};

export const mascotHeroReview = [
  {
    label: "Main visual",
    value: "完全体站姿图",
  },
  {
    label: "Public use",
    value: "展示，不提供下载",
  },
  {
    label: "Next review",
    value: "单张表情候选展示",
  },
];

export const mascotForms = [
  {
    name: "原始形象",
    role: "站点图标与原始形态来源",
    image: {
      src: "/images/mascot/radish-origin-icon-web.jpg",
      width: 360,
      height: 360,
      alt: "萝小白原始萝卜图标",
    },
    assetCue: "已确认",
    assetStatus: "已接入 favicon 和形态展示",
    description: "作为 RadishX 的形态起点，适合小尺寸印章、站点图标和 Mascot 页原始形态展示。",
    review: {
      currentUse: "站点图标、导航标识和小尺寸形态起点。",
      auditStatus: "已生成 Web 版本并接入公开页面。",
      usageBoundary: "只作为小尺寸印章、站点图标或原始形态展示，不替代后续独立项目 Logo。",
      nextNeed: "后续如出现新版主 Logo，需要重新审核并替换 favicon 口径。",
    },
    notes: ["当前可用于站点图标", "公开页只作为小尺寸形态起点", "各项目标识另用代码内临时方案"],
  },
  {
    name: "可爱Q版",
    role: "亲和、轻游戏感和社交传播",
    image: {
      src: "/images/mascot/radish-child-standing-white-dress-tall-web.jpg",
      width: 1254,
      height: 1254,
      alt: "萝小白可爱Q版站姿图",
    },
    assetCue: "已确认",
    assetStatus: "站姿图已接入首页和形态展示",
    description: "完整外装、非性感化、无内衣展示、无身体拆解，适合首页视觉锚点和 Mascot 页形态展示。",
    review: {
      currentUse: "首页中心视觉锚点、首页 Mascot 辅助视觉和 Mascot 页形态展示。",
      auditStatus: "安全设定图与站姿图已确认，可进入 public/images。",
      usageBoundary: "公开页只使用完整外装安全版本；单张表情只做官网内部展示候选。",
      nextNeed: "首批 10 张基础表情已生成 Web 展示图；下载口径继续关闭。",
    },
    notes: ["公开页只使用安全候选口径", "适合作为首页视觉锚点", "单张表情只做内部展示候选"],
  },
  {
    name: "虚拟形象完全体",
    role: "品牌主视觉与长期角色表达",
    image: {
      src: "/images/mascot/radish-mature-standing-white-dress-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白虚拟形象完全体站姿图",
    },
    assetCue: "已确认",
    assetStatus: "完全体站姿图已接入 Mascot 主视觉",
    description: "适合承担更强的品牌记忆点，后续可扩展为活动视觉、服装和表情素材。",
    review: {
      currentUse: "Mascot 页首屏主视觉、形态展示和品牌记忆点。",
      auditStatus: "完全体设定图、站姿图与表情包预览已接入公开页面。",
      usageBoundary: "当前只做展示和品牌识别，不声明素材可自由复用。",
      nextNeed: "后续活动图、服装扩展和下载口径需要继续审核。",
    },
    notes: ["可承担长期品牌记忆点", "适合作为 Mascot 页主视觉", "后续可扩展更多表情和服装"],
  },
];

export const mascotGalleryItems = [
  {
    title: "服装变体",
    category: "Outfits",
    publicStatus: "Reviewed preview",
    usageBoundary: "只展示服装扩展方向，不提供独立素材文件。",
    nextStep: "后续如进入活动或下载口径，需要重新确认授权和文件包边界。",
    description: "展示萝小白可爱Q版的服装扩展方向，第一版只做 Gallery 预览。",
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
    publicStatus: "Sheet preview only",
    usageBoundary: "整图预览，不拆分单张表情，不开放下载。",
    nextStep: "首批单张候选已单独展示；整图继续保留来源预览。",
    description: "作为整图预览接入 Mascot Gallery；首批基础表情另设单张展示候选区，不提供下载入口。",
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
    publicStatus: "Sheet preview only",
    usageBoundary: "保留原始横图组合，不作为可下载贴纸包。",
    nextStep: "单张裁切前需逐格审核主体、文字、边距和传播边界。",
    description: "社交表达方向整图预览，保留原始组合，不作为可下载素材包。",
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
    publicStatus: "Sheet preview only",
    usageBoundary: "保留原始横图组合，不作为可下载贴纸包。",
    nextStep: "单张裁切前需逐格审核主体、文字、边距和传播边界。",
    description: "社交表达方向整图预览，保留原始组合，不作为可下载素材包。",
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
    publicStatus: "Sheet preview only",
    usageBoundary: "保留原始横图组合，不作为可下载贴纸包。",
    nextStep: "单张裁切前需逐格审核主体、文字、边距和传播边界。",
    description: "社交表达方向整图预览，保留原始组合，不作为可下载素材包。",
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
    publicStatus: "Sheet preview only",
    usageBoundary: "保留原始横图组合，不作为可下载贴纸包。",
    nextStep: "单张裁切前需逐格审核主体、文字、边距和传播边界。",
    description: "社交表达方向整图预览，保留原始组合，不作为可下载素材包。",
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
    publicStatus: "Reviewed preview",
    usageBoundary: "只展示完全体表情方向，不提供下载入口。",
    nextStep: "后续若开放传播，需要先确认授权范围、归属说明和撤回策略。",
    description: "展示虚拟形象完全体的表情包方向，不提供下载入口。",
    image: {
      src: "/images/mascot/radish-mature-sticker-sheet-wide-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白虚拟形象完全体表情包展示",
    },
  },
];

export const mascotGalleryNotes = [
  "首批可爱Q版单张表情只做官网内部展示候选，不作为下载素材。",
  "表情格和贴纸横图继续保留整图预览，便于回看来源和审核边界。",
  "节日素材只用于活动 Banner、彩蛋或运营内容，不进入长期 Gallery。",
  "后续新增素材仍需先进入 assets/ 并完成审核，再生成 public/images Web 版本。",
];

export const mascotExpressionItems: MascotExpressionItem[] = [
  {
    id: "rx-expression-001",
    label: "开心",
    emotion: "Happy",
    sourceCell: "R1C1",
    usage: "正向反馈、欢迎或轻量成功提示候选。",
    boundary: "保留中文标签和双手，不作为下载素材。",
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
    sourceCell: "R1C2",
    usage: "轻量状态提醒或情绪说明候选。",
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
    sourceCell: "R1C3",
    usage: "异常、提示或惊讶类轻量插图候选。",
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
    sourceCell: "R2C3",
    usage: "完成反馈、亮点说明或小成就候选。",
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
    sourceCell: "R2C4",
    usage: "预告、待办或轻量引导候选。",
    boundary: "保留双手和星形符号，不写成上线承诺。",
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
    sourceCell: "R3C2",
    usage: "FAQ、待确认事项或说明提示候选。",
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
    sourceCell: "R3C3",
    usage: "空状态、非阻断提示或轻量反馈候选。",
    boundary: "保留省略号，不用于嘲讽用户或错误归因。",
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
    sourceCell: "R5C2",
    usage: "完成状态、确认或轻量成功反馈候选。",
    boundary: "保留 OK 字样和手势，不作为独立授权图标。",
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
    sourceCell: "R5C3",
    usage: "开发日志、项目进展或鼓励类提示候选。",
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
    sourceCell: "R6C4",
    usage: "页尾彩蛋、404 辅助或结束状态候选。",
    boundary: "保留挥手和红色强调线，不开放外部分发。",
    image: {
      src: "/images/mascot/expressions/radish-child-expression-goodbye-web.jpg",
      width: 256,
      height: 256,
      alt: "萝小白可爱Q版再见表情",
    },
  },
];

export const mascotUsageGroups = [
  {
    label: "Display",
    title: "公开页只展示已审核 Web 版本",
    summary: "页面引用 `public/images/mascot/` 中的 Web 图，原始候选继续保留在 `assets/avatars/`。",
    rules: [
      "首批单张表情只作为官网内部展示候选，不作为素材包或贴纸包。",
      "图片说明需要区分服装、表情格、贴纸横图和完全体表情包。",
    ],
  },
  {
    label: "Safety",
    title: "可爱Q版继续遵守安全口径",
    summary: "公开素材必须完整外装、非性感化、无内衣展示、无身体拆解。",
    rules: [
      "旧可爱Q版设定图和未审核候选不进入公开页面。",
      "单张表情保留整格边框、中文标签、主体动作和关键符号。",
    ],
  },
  {
    label: "License",
    title: "下载和复用声明继续关闭",
    summary: "当前页面只做品牌展示，不提供 ZIP、单图下载、素材 API 或自由使用声明。",
    rules: [
      "新增单张 Web 文件仅用于页面展示，不附带复用、改作、商用或再分发授权。",
      "缩略图只在页面性能或网格浏览真实需要时再生成。",
    ],
  },
  {
    label: "Seasonal",
    title: "活动图不进入长期 Gallery",
    summary: "Seasonal 图只作为短期活动 Banner、节日彩蛋或运营内容候选。",
    rules: [
      "进入官网前必须确认活动窗口、页面位置、文案边界和下线策略。",
      "当前不生成 seasonal Web 版本，不移动到 `public/images/`。",
    ],
  },
];
