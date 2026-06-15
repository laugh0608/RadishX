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
      nextNeed: "表情拆分和贴纸横图继续等待单独审核。",
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
    description: "展示萝小白可爱Q版的服装扩展方向，第一版只做 Gallery 预览。",
    image: {
      src: "/images/mascot/radish-child-outfit-variants-web.jpg",
      width: 1400,
      height: 700,
      alt: "萝小白可爱Q版服装变体展示",
    },
  },
  {
    title: "完全体表情包",
    category: "Stickers",
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
  "表情包素材适合 Mascot 页 Gallery，第一版不提供下载入口。",
  "节日素材只用于活动 Banner、彩蛋或运营内容。",
  "后续新增素材仍需先进入 assets/ 并完成审核，再生成 public/images Web 版本。",
];
