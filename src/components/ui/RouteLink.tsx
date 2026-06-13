import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type RouteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  to: string;
};

function canHandleClientSide(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (event.defaultPrevented || event.button !== 0) {
    return false;
  }

  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
    return false;
  }

  const url = new URL(href, window.location.origin);
  return url.origin === window.location.origin;
}

export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("radishx:navigate"));
}

export function RouteLink({ children, to, onClick, ...props }: RouteLinkProps) {
  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);

        if (!canHandleClientSide(event, to)) {
          return;
        }

        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
