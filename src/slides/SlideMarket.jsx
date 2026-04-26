import { useEffect, useRef, useState } from 'react';
import { SlideNum, SlideTitle, AccentBar, Highlight } from '../components/UI';

const bars = [
  { year: '2019', value: 22, label: '~15', color: 'var(--accent)' },
  { year: '2021', value: 45, label: '~40', color: 'var(--accent)' },
  { year: '2023', value: 72, label: '~80', color: 'var(--accent2)' },
  { year: '2025', value: 96, label: '100+', color: 'var(--accent2)' },
];

const examples = [
  { icon: '🇺🇸', title: 'Meta, Amazon — layoffs 2023', desc: 'Великі компанії звільнили десятки тисяч розробників. Частина з них досі шукає роботу.' },
  { icon: '🇺🇦', title: 'Україна: джунів не беруть', desc: 'Більшість компаній заморозили junior-найм. Ринок зміщується до mid+ і продуктових команд.' },
  { icon: '🎓', title: 'Буткемп-бум', desc: 'За 2020–2024 кількість людей, які пройшли онлайн-курси з програмування, зросла в рази.' },
];

export default function SlideMarket() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref}>
      <SlideNum>01 / 04</SlideNum>
      <SlideTitle>Пропозиція <em style={{ fontStyle: 'italic' }}>перевищила</em> попит</SlideTitle>
      <AccentBar color="var(--accent)" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 18, marginBottom: 16 }}>
        {/* Infographic */}
        <div style={{ background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)', padding: '20px 24px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: 16 }}>
            Конкурс на junior-позицію
          </div>
          {bars.map((b, i) => (
            <div key={b.year} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 600, minWidth: 36, color: 'var(--text)' }}>{b.year}</div>
              <div style={{ flex: 1, height: 10, background: '#f0efeb', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 6,
                  background: b.color,
                  width: animated ? `${b.value}%` : '0%',
                  transition: `width 0.8s ease ${i * 0.15}s`,
                }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, minWidth: 36, textAlign: 'right', color: b.color }}>{b.label}</div>
            </div>
          ))}
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
            * кількість резюме на одну вакансію, орієнтовні дані
          </div>
        </div>

        {/* Examples */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {examples.map(e => (
            <div key={e.title} style={{ display: 'flex', gap: 14, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 18px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{e.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{e.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Highlight color="blue" title="Суть простими словами">
        Ринок змістився від <strong>«дефіциту розробників»</strong> до <strong>«дефіциту сильних розробників»</strong>. Джунів — багато. Тих, хто реально вміє — як і раніше мало.
      </Highlight>
    </div>
  );
}
