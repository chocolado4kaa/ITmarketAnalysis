export function AccentBar({ color }) {
  return <div style={{ width: 48, height: 4, borderRadius: 2, background: color, marginBottom: 24 }} />;
}

export function SlideNum({ n }) {
  return <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>{n}</div>;
}

export function SlideTitle({ children, style }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(26px, 4vw, 40px)',
      fontWeight: 700, lineHeight: 1.15,
      marginBottom: 20, maxWidth: 680,
      ...style
    }}>
      {children}
    </h2>
  );
}

export function Highlight({ color, title, children }) {
  const map = {
    blue:   { bg: 'var(--accent-light)',  border: 'var(--accent)',  titleColor: 'var(--accent)' },
    orange: { bg: 'var(--accent2-light)', border: 'var(--accent2)', titleColor: 'var(--accent2)' },
    green:  { bg: 'var(--green-light)',   border: 'var(--green)',   titleColor: 'var(--green)' },
    amber:  { bg: 'var(--amber-light)',   border: 'var(--amber)',   titleColor: 'var(--amber)' },
  };
  const t = map[color];
  return (
    <div style={{ borderRadius: 16, padding: '22px 28px', background: t.bg, borderLeft: `4px solid ${t.border}` }}>
      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: t.titleColor }}>{title}</div>
      <div style={{ fontSize: 13, lineHeight: 1.65, color: '#333' }}>{children}</div>
    </div>
  );
}

export function Card({ color = 'blue', icon, label, value, desc, style }) {
  const iconBg = {
    blue: 'var(--accent-light)', orange: 'var(--accent2-light)',
    green: 'var(--green-light)', amber: 'var(--amber-light)',
  }[color];
  const valColor = {
    blue: 'var(--accent)', orange: 'var(--accent2)',
    green: 'var(--green)', amber: 'var(--amber)',
  }[color];
  return (
    <div style={{ background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)', padding: 20, ...style }}>
      <div style={{ width: 38, height: 38, borderRadius: 12, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, marginBottom: 14 }}>{icon}</div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2, marginBottom: 6, color: valColor }}>{value}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}
