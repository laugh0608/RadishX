import { useLayoutEffect, useRef, useState } from "react";
import { Button, Dialog } from "@radish-ui/react";
import "@radish-ui/react/styles.css";
import { radishUISiteUrl } from "../data/navigation";

export default function RadishUIEntry({ onReady }: { onReady(button: HTMLButtonElement): void }) {
  const [radishUIDialogOpen, setRadishUIDialogOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    if (trigger.current) onReady(trigger.current);
  }, [onReady]);
  return (
    <>
      <Button ref={trigger} className="about2-radishui-entry__button" variant="secondary" onClick={() => setRadishUIDialogOpen(true)}>
        查看 RadishUI
      </Button>
      <Dialog
        className="about2-radishui-entry__dialog"
        open={radishUIDialogOpen}
        onOpenChange={setRadishUIDialogOpen}
        title="RadishUI"
        description="Radish 家族共享设计系统"
        footer={
          <Button variant="ghost" onClick={() => setRadishUIDialogOpen(false)}>
            关闭
          </Button>
        }
      >
        <p className="about2-radishui-entry__lead">
          RadishUI 提供跨平台的语义 token、React 组件和展示范例；独立站点为 ui.radishx.com。
        </p>
        <p className="about2-radishui-entry__note">
          本次试点只接入 Button 与 Dialog；站点其余样式与 family-ui token 副本保持原值。
        </p>
        <a
          className="about2-radishui-entry__link"
          href={radishUISiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          打开 ui.radishx.com
          <span aria-hidden="true">↗</span>
        </a>
      </Dialog>
    </>
  );
}
