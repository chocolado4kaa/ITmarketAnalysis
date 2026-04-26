import { SlideNum, SlideTitle, AccentBar, Highlight } from '../components/UI';

const checks = [
  { ok: false, title: 'Тільки фронтенд', desc: 'Вузька спеціалізація легко автоматизується агентами. Менше цінності для невеликих команд.' },
  { ok: false, title: 'Тільки бекенд', desc: 'Та сама ситуація — якщо не розумієш продукт цілком, складно бути незамінним.' },
  { ok: true,  title: 'Fullstack + DevOps / Cloud', desc: 'Бачиш всю систему, можеш закрити задачу від і до. Це і є «дорогий спеціаліст».' },
];

export default function SlideFullstack() {
  return (
    <div>
      <SlideNum>03 / 04</SlideNum>
      <SlideTitle>Fullstack — нова <em style={{ fontStyle: 'italic' }}>норма</em></SlideTitle>
      <AccentBar color="var(--green)" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {checks.map(c => (
            <div key={c.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 18px' }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, marginTop: 2,
                background: c.ok ? 'var(--green-light)' : '#FEE2E2',
                color: c.ok ? 'var(--green)' : '#B91C1C',
              }}>{c.ok ? '✓' : '✕'}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: '#2a2a28' }}>
                <strong style={{ fontWeight: 700, display: 'block', marginBottom: 2, fontSize: 14 }}>{c.title}</strong>
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--surface)', borderRadius: 16, border: '1px solid var(--border)', padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, marginBottom: 14 }}>🔭</div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Чому це важливо</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--green)', lineHeight: 1.2, marginBottom: 10 }}>Широкий кругозір</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
            Компанії хочуть людей, які можуть взяти задачу і довести до кінця без передачі між відділами.
          </div>
        </div>
      </div>

      <Highlight color="green" title="Практично">
        Якщо зараз вчиш фронтенд — не зупиняйся. Зрозумій як працює API, база даних, деплой. Не треба знати все глибоко, але треба бачити картину цілком.
      </Highlight>
    </div>
  );
}
