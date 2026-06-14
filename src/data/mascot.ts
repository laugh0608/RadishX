export const mascotName = "萝小白";

export type MascotImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const mascotHeroImage: MascotImage = {
  src: "/images/mascot/radish-mature-design-sheet-web.jpg",
  width: 1400,
  height: 788,
  alt: "萝小白虚拟形象完全体设定图",
};

export const mascotForms = [
  {
    name: "原始形象",
    role: "站点图标与第一版临时 Logo 来源",
    image: {
      src: "/images/mascot/radish-origin-icon-web.jpg",
      width: 360,
      height: 360,
      alt: "萝小白原始萝卜图标",
    },
    assetCue: "已确认",
    assetStatus: "已接入 favicon 和形态展示",
    description: "作为 RadishX 的形态起点，适合小尺寸印章、图标和项目详情页临时 Logo。",
    notes: ["当前可用于站点图标", "项目详情页第一版临时 Logo 来源", "公开页只作为小尺寸形态起点"],
  },
  {
    name: "可爱Q版",
    role: "亲和、轻游戏感和社交传播",
    image: {
      src: "/images/mascot/radish-child-safe-design-sheet-v1-web.jpg",
      width: 1400,
      height: 933,
      alt: "萝小白可爱Q版安全设定图",
    },
    assetCue: "已确认",
    assetStatus: "安全设定图已接入公开页面",
    description: "完整外装、非性感化、无内衣展示、无身体拆解，适合 Mascot 页主视觉和 Gallery。",
    notes: ["公开页只使用安全候选口径", "适合作为首页辅助视觉", "不提供素材下载入口"],
  },
  {
    name: "虚拟形象完全体",
    role: "品牌主视觉与长期角色表达",
    image: {
      src: "/images/mascot/radish-mature-design-sheet-web.jpg",
      width: 1400,
      height: 788,
      alt: "萝小白虚拟形象完全体设定图",
    },
    assetCue: "已确认",
    assetStatus: "完全体设定图已接入 Mascot 主视觉",
    description: "适合承担更强的品牌记忆点，后续可扩展为活动视觉、服装和表情素材。",
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
