import type { ReactNode } from "react";

type StatusChipProps = {
  children: ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning" | "ink";
};

export function StatusChip({ children, tone = "neutral" }: StatusChipProps) {
  return <span className={`status-chip status-chip--${tone}`}>{children}</span>;
}
