export const mascotName = "萝小白";

export type MascotImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
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
    value: "表情拆分 / 下载口径",
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
    notes: ["当前可用于站点图标", "公开页只作为小尺寸形态起点", "四个项目标识另用代码内临时方案"],
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
      usageBoundary: "公开页只使用完整外装安全版本，不提供素材下载入口。",
      nextNeed: "表情和贴纸横图已作为整图预览接入；单张拆分和下载口径仍需单独确认。",
    },
    notes: ["公开页只使用安全候选口径", "适合作为首页视觉锚点", "不提供素材下载入口"],
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
    nextStep: "如需单张展示，先建立拆分清单、命名规则和授权边界。",
    description: "作为整图预览接入 Mascot Gallery；当前不拆分单张贴纸，不提供下载入口。",
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
  "表情包素材当前只做整图预览，不拆分单张贴纸。",
  "节日素材只用于活动 Banner、彩蛋或运营内容，不进入长期 Gallery。",
  "第一版不提供素材下载入口，也不声明素材可自由复用。",
  "后续新增素材仍需先进入 assets/ 并完成审核，再生成 public/images Web 版本。",
];

export const mascotUsageGroups = [
  {
    label: "Display",
    title: "公开页只展示已审核 Web 版本",
    summary: "页面引用 `public/images/mascot/` 中的 Web 图，原始候选继续保留在 `assets/avatars/`。",
    rules: [
      "现有 Gallery 保持整图预览，避免把素材升级为独立传播文件。",
      "图片说明需要区分服装、表情格、贴纸横图和完全体表情包。",
    ],
  },
  {
    label: "Safety",
    title: "可爱Q版继续遵守安全口径",
    summary: "公开素材必须完整外装、非性感化、无内衣展示、无身体拆解。",
    rules: [
      "旧可爱Q版设定图和未审核候选不进入公开页面。",
      "任何裁切或单张展示都要重新确认主体完整、文字可读和边界清楚。",
    ],
  },
  {
    label: "License",
    title: "下载和复用声明继续关闭",
    summary: "当前页面只做品牌展示，不提供 ZIP、单图下载、素材 API 或自由使用声明。",
    rules: [
      "如未来开放下载，先确认授权范围、允许 / 禁止使用场景、文件包内容和撤回策略。",
      "缩略图只在单张素材真实进入页面或文件包时生成。",
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
