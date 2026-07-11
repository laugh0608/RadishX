export type HomeVisualAssetSlot = {
  label: string;
  title: string;
  status: string;
  statusTone: "brand" | "success" | "warning" | "ink";
  note: string;
  checkpoints: {
    label: string;
    value: string;
  }[];
};

export const homeVisualAssetSlots: HomeVisualAssetSlot[] = [
  {
    label: "Hero Visual",
    title: "Radish Orbit + Mascot Anchor",
    status: "站姿已接入",
    statusTone: "brand",
    note: "首屏继续用项目星图承载 RadishX 矩阵，并接入已审核可爱Q版站姿图作为中心视觉锚点。",
    checkpoints: [
      {
        label: "Primary",
        value: "项目星图",
      },
      {
        label: "Mascot",
        value: "已审核站姿图",
      },
      {
        label: "Next",
        value: "最终选图后再评估 OG",
      },
    ],
  },
  {
    label: "Mascot Forms",
    title: "萝小白三形态",
    status: "素材已审核",
    statusTone: "success",
    note: "原始形象、可爱Q版安全设定图、可爱Q版站姿图和完全体站姿图已进入公开资源目录。",
    checkpoints: [
      {
        label: "Origin",
        value: "favicon / 形态起点",
      },
      {
        label: "Child",
        value: "首页视觉锚点",
      },
      {
        label: "Mature",
        value: "Mascot 页主视觉",
      },
    ],
  },
  {
    label: "Project Media",
    title: "详情页媒体状态",
    status: "已分流",
    statusTone: "ink",
    note: "Radish、Catalyst、Flow 已接入审核图；RadishMind 与 RadishLex 使用代码内视觉，Logo 与视频继续等待素材。",
    checkpoints: [
      {
        label: "Images",
        value: "3 个审核图",
      },
      {
        label: "Diagram",
        value: "Mind / Lex 视觉",
      },
      {
        label: "Pending",
        value: "Logo / Video",
      },
    ],
  },
];
