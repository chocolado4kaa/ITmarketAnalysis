import { SlideNum, SlideTitle, AccentBar, Highlight } from '../components/UI';

const skills = [
  {
    icon: '💤', bg: '#FEE2E2',
    name: 'Механічне написання коду',
    desc: '«Напиши функцію для X» — з цим AI справляється чудово.',
    level: '↓ знецінено', levelBg: '#f0f0ee', levelColor: 'var(--muted)',
  },
  {
    icon: '🧠', bg: 'var(--amber-light)',
    name: 'Глибоке розуміння системи',
    desc: 'Архітектура, дебагінг складних проблем, розуміння «чому це не працює» — цього AI не замінить.',
    level: '→ важливе', levelBg: 'var(--amber-light)', levelColor: 'var(--amber)',
  },
  {
    icon: '🤝', bg: 'var(--green-light)',
    name: 'Софт-скіли',
    desc: 'Комунікація, критичне мислення, вміння ставити правильні запитання, робота в команді.',
    level: '↑ на піку', levelBg: 'var(--green-light)', levelColor: 'var(--green)',
  },
];

export default function SlideAI() {
  return (
    <div>
      <SlideNum>02 / 04</SlideNum>
      <SlideTitle>AI переписує <em style={{ fontStyle: 'italic' }}>правила гри</em></SlideTitle>
      <AccentBar color="var(--accent2)" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {skills.map(s => (
          <div key={s.name} style={{ background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ minWidth: 42, height: 42, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{s.name}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>{s.desc}</div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20, letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0, background: s.levelBg, color: s.levelColor }}>
              {s.level}
            </span>
          </div>
        ))}
      </div>

      <Highlight color="orange" title="Новий образ розробника">
        AI — це інструмент, а не замінник. Найцінніший спеціаліст — той, хто вміє правильно ставити задачу, перевіряти результат і розуміти систему в цілому.
      </Highlight>
    </div>
  );
}
