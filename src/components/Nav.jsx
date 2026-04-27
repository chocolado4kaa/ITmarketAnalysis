const LABELS = [
  "Вступ",
  "Ринок праці",
  "AI та навички",
  "Fullstack",
  "Саморозвиток",
  "вибір технологій",
];

export default function Nav({ current, total, onPrev, onNext, onGoTo }) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(247,246,242,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 32px",
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => onGoTo(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === current ? "var(--accent)" : "#ccc",
              transform: i === current ? "scale(1.3)" : "scale(1)",
              transition: "background 0.2s, transform 0.2s",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <span
        style={{
          fontSize: 12,
          color: "var(--muted)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {LABELS[current]}
      </span>

      <div style={{ display: "flex", gap: 8 }}>
        {[
          ["← Назад", onPrev],
          ["Далі →", onNext],
        ].map(([label, fn]) => (
          <button
            key={label}
            onClick={fn}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              fontSize: 13,
              cursor: "pointer",
              color: "var(--muted)",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--accent-light)";
              e.target.style.color = "var(--accent)";
              e.target.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--surface)";
              e.target.style.color = "var(--muted)";
              e.target.style.borderColor = "var(--border)";
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
