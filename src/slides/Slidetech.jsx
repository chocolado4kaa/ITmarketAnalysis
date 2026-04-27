import { SlideNum, SlideTitle, AccentBar } from "../components/UI";

const categories = [
  {
    color: "var(--accent)",
    bg: "var(--accent-light)",
    icon: "🌐",
    title: "Фронтенд",
    sub: "Те, що бачить користувач",
    items: [
      {
        name: "HTML",
        emoji: "🧱",
        desc: "Скелет будь-якої сторінки. Починати тут.",
      },
      {
        name: "CSS",
        emoji: "🎨",
        desc: "Стилі, кольори, анімації. Робить красиво.",
      },
      {
        name: "JavaScript",
        emoji: "⚡",
        desc: "Додає інтерактивність. Обов'язково.",
      },
      { name: "React", emoji: "⚛️", desc: "Популярна бібліотека. Після JS." },
    ],
  },
  {
    color: "var(--green)",
    bg: "var(--green-light)",
    icon: "⚙️",
    title: "Бекенд",
    sub: 'Те, що працює "за лаштунками"',
    items: [
      {
        name: "Python",
        emoji: "🐍",
        desc: "Найпростіший старт. Підходить для всього.",
      },
      {
        name: "Node.js",
        emoji: "🟢",
        desc: "JavaScript на сервері. Логічно після фронту.",
      },
      { name: "SQL", emoji: "🗄️", desc: "Бази даних. Знадобиться скрізь." },
      {
        name: "REST API",
        emoji: "🔌",
        desc: "Як фронт і бек спілкуються між собою.",
      },
    ],
  },
  {
    color: "var(--amber)",
    bg: "var(--amber-light)",
    icon: "🛠️",
    title: "Інструменти",
    sub: "Без цього не обійтись",
    items: [
      {
        name: "GitHub",
        emoji: "🐙",
        desc: "Зберігай код, показуй роботодавцям.",
      },
      {
        name: "VS Code",
        emoji: "💻",
        desc: "Найпопулярніший редактор коду. Безплатний.",
      },
      {
        name: "ChatGPT / Claude",
        emoji: "🤖",
        desc: "AI-помічник. Вчись з ним, а не замість нього.",
      },
      {
        name: "Figma",
        emoji: "🎭",
        desc: "Дизайн інтерфейсів. Корисно фронтендерам.",
      },
    ],
  },
];

const route = ["HTML", "CSS", "JavaScript", "GitHub", "Python або React"];

export default function SlideTech() {
  return (
    <div>
      <SlideNum>05 / 05</SlideNum>
      <SlideTitle>
        Вибір <em style={{ fontStyle: "italic" }}>технологій</em>
      </SlideTitle>
      <AccentBar color="var(--accent2)" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 16,
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.title}
            style={{
              background: "var(--surface)",
              borderRadius: 16,
              border: "1px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: cat.bg,
                padding: "16px 20px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>{cat.icon}</div>
              <div style={{ fontWeight: 800, fontSize: 16, color: cat.color }}>
                {cat.title}
              </div>
              <div
                style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}
              >
                {cat.sub}
              </div>
            </div>
            <div style={{ padding: "12px 0" }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "10px 18px",
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>
                    {item.emoji}
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
