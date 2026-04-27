export default function SlideCover({ onGoTo }) {
  const chips = [
    { label: "01 · Ринок праці", idx: 1 },
    { label: "02 · AI та навички", idx: 2 },
    { label: "03 · Fullstack", idx: 3 },
    { label: "04 · Саморозвиток", idx: 4 },
    { label: "05 · Вибір технологій", idx: 5 },
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          right: 48,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.06,
          fontFamily: "'Playfair Display', serif",
          fontSize: 200,
          fontWeight: 700,
          pointerEvents: "none",
          userSelect: "none",
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        IT
      </div>

      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(38px, 6vw, 64px)",
          lineHeight: 1.1,
          fontWeight: 700,
          marginBottom: 24,
          maxWidth: 640,
        }}
      >
        Сучасні реалії{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
          IT-ринку
        </em>
      </h1>

      <p
        style={{
          fontSize: 17,
          color: "var(--muted)",
          maxWidth: 520,
          lineHeight: 1.6,
          marginBottom: 48,
        }}
      >
        Що насправді відбувається у сфері розробки програмного забезпечення — і
        як це впливає на вас як на майбутніх спеціалістів.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {chips.map(({ label, idx }) => (
          <Chip key={idx} onClick={() => onGoTo(idx)}>
            {label}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function Chip({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 18px",
        borderRadius: 24,
        border: "1px solid var(--border)",
        fontSize: 13,
        fontWeight: 500,
        background: "var(--surface)",
        cursor: "pointer",
        transition: "all 0.2s",
        color: "var(--text)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.background = "var(--accent-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--text)";
        e.currentTarget.style.background = "var(--surface)";
      }}
    >
      {children}
    </button>
  );
}
