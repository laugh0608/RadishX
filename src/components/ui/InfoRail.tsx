export type InfoRailItem = {
  label: string;
  value: string;
  note?: string;
  href?: string;
};

type InfoRailProps = {
  items: InfoRailItem[];
  tone?: "light" | "dark";
};

export function InfoRail({ items, tone = "light" }: InfoRailProps) {
  return (
    <div className={`info-rail info-rail--${tone}`}>
      {items.map((item) => {
        const value = item.href ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label}: ${item.value}`}>
            {item.value}
          </a>
        ) : (
          <span>{item.value}</span>
        );

        return (
          <div key={`${item.label}-${item.value}`} className="info-rail__item">
            <span className="info-rail__label">{item.label}</span>
            <strong className="info-rail__value">{value}</strong>
            {item.note ? <span className="info-rail__note">{item.note}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
