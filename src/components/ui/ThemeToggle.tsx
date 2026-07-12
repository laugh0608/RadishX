import type { ThemePreference } from "../../app/theme";

const LABEL: Record<ThemePreference, string> = {
  system: "跟随系统",
  light: "浅色",
  dark: "深色",
};

const ORDER: ThemePreference[] = ["system", "light", "dark"];

function SegIcon({ preference }: { preference: ThemePreference }) {
  if (preference === "light") {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.8v2.2M12 19v2.2M4.8 4.8l1.6 1.6M17.6 17.6l1.6 1.6M2.8 12h2.2M19 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" />
      </svg>
    );
  }
  if (preference === "dark") {
    return (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 14.4A8 8 0 1 1 9.6 4a6.4 6.4 0 0 0 10.4 10.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="12.5" rx="2" />
      <path d="M8.5 20.5h7M12 17v3.5" />
    </svg>
  );
}

export function ThemeToggle({
  preference,
  onChange,
}: {
  preference: ThemePreference;
  onChange: (next: ThemePreference) => void;
}) {
  return (
    <div className="theme-seg" role="group" aria-label="主题切换">
      {ORDER.map((option) => (
        <button
          key={option}
          type="button"
          className="theme-seg__item"
          aria-pressed={preference === option}
          aria-label={`主题：${LABEL[option]}`}
          title={LABEL[option]}
          onClick={() => onChange(option)}
        >
          <SegIcon preference={option} />
        </button>
      ))}
    </div>
  );
}
