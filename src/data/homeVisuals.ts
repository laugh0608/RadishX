export type HomeVisualAssetSlot = {
  label: string;
  title: string;
  status: string;
  note: string;
};

export const homeVisualAssetSlots: HomeVisualAssetSlot[] = [
  {
    label: "Hero Visual",
    title: "Radish Orbit",
    status: "已落地",
    note: "当前首页使用项目星图与 favicon 临时 Logo，不接入未审核角色大图。",
  },
  {
    label: "Mascot Forms",
    title: "萝小白三形态",
    status: "待确认",
    note: "原始形象、可爱Q版、完全体素材审核后再进入公开资源目录。",
  },
  {
    label: "Project Media",
    title: "项目媒体框",
    status: "设计占位",
    note: "第一版继续使用图形化候选媒体框，后续替换真实截图、视频或独立 Logo。",
  },
];
