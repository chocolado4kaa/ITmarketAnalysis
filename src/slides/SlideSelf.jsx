import { SlideNum, SlideTitle, AccentBar, Highlight } from "../components/UI";

const tips = [
  {
    icon: "🛠",
    num: 1,
    title: "Пет-проєкти",
    text: "Зроби хоч один реальний проєкт і постав на GitHub. Це важливіше за оцінки.",
  },
  {
    icon: "🌐",
    num: 2,
    title: "Спільнота",
    text: "Telegram-чати, Discord, GitHub — там живе реальна індустрія.",
  },
  {
    icon: "📖",
    num: 3,
    title: "Читай код інших",
    text: "Open-source — найкраща школа. Читай, форкай, контрибюй.",
  },
  {
    icon: "🤖",
    num: 4,
    title: "Освой AI-інструменти",
    text: "Cursor, Copilot, Claude — не бійся, вчися використовувати правильно.",
  },
];

const roadmap = [
  {
    color: "var(--accent)",
    phase: "Зараз · коледж",
    title: "Базові навички + пет-проєкти",
    desc: "HTML/CSS/JS або Python, перший проєкт на GitHub, розуміння git.",
  },
  {
    color: "#6B8FE8",
    phase: "+6 міс після випуску",
    title: "Стажування або фріланс",
    desc: "Реальні задачі, реальні помилки, реальний зворотній зв'язок.",
  },
  {
    color: "var(--green)",
    phase: "+1–1.5 роки",
    title: "Junior в команді",
    desc: "Перша офіційна позиція. Тут починається справжнє навчання.",
  },
  {
    color: "var(--amber)",
    phase: "+3 роки",
    title: "Middle → Senior",
    desc: "Глибина, відповідальність, менторство, вища зарплата.",
  },
];

export default function SlideSelf() {
  return (
    <div>
      <SlideNum>04 / 04</SlideNum>
      <SlideTitle>
        Диплом — це лише <em style={{ fontStyle: "italic" }}>початок</em>
      </SlideTitle>
      <AccentBar color="var(--amber)" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginBottom: 16,
        }}
      >
        {/* Tips */}
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            Поради студентам
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
          >
            {tips.map((t) => (
              <div
                key={t.num}
                style={{
                  background: "var(--surface)",
                  borderRadius: 14,
                  border: "1px solid var(--border)",
                  padding: "16px 18px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: 10,
                    top: -4,
                    fontSize: 48,
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: 700,
                    opacity: 0.06,
                    lineHeight: 1,
                  }}
                >
                  {t.num}
                </div>
                <div style={{ fontSize: 22, marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 5 }}>
                  {t.title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {t.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            Орієнтовний шлях джуна
          </div>
          <div style={{ position: "relative", paddingLeft: 28 }}>
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 8,
                bottom: 8,
                width: 2,
                background:
                  "linear-gradient(to bottom, var(--accent), var(--green))",
                borderRadius: 2,
              }}
            />
            {roadmap.map((r, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  paddingBottom: i < roadmap.length - 1 ? 18 : 0,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: -20,
                    top: 4,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: r.color,
                    border: "2px solid var(--bg)",
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: r.color,
                    marginBottom: 3,
                  }}
                >
                  {r.phase}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>
                  {r.title}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Highlight color="amber" title="Головна думка">
        Найкращі розробники — не ті, хто знає більше, а ті, хто{" "}
        <strong>постійно хочуть дізнатись більше</strong>. Цікавість — це теж
        навичка.
      </Highlight>
    </div>
  );
}
