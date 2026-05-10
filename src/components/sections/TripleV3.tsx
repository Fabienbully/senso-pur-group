import { TROIS_MARCHES, TROIS_MARCHES_HEAD } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function TripleV3() {
  return (
    <section className="sp-section bg-[var(--sp-bg)]" aria-labelledby="triple-title">
      <div className="sp-container">
        <FadeIn className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <p className="sp-eyebrow mb-4">{TROIS_MARCHES_HEAD.eyebrow}</p>
          <h2 id="triple-title" className="mb-4">{TROIS_MARCHES_HEAD.title}</h2>
          <p className="text-[var(--sp-slate)] leading-relaxed">{TROIS_MARCHES_HEAD.subtitle}</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TROIS_MARCHES.map((m, i) => (
            <FadeIn
              key={m.code}
              delay={i * 120}
              className="relative bg-[var(--sp-bg-soft)] p-10 rounded-[var(--sp-radius-lg)] border border-[var(--sp-bronze-soft)]/40 transition-shadow hover:shadow-[var(--sp-shadow-medium)]"
            >
              <div
                className="font-heading text-[var(--sp-pewter)] mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1, fontWeight: 500 }}
              >
                {m.code}
              </div>
              <h3 className="mb-4 text-[var(--sp-mahogany)]">{m.title}</h3>
              <p className="text-[var(--sp-slate)] mb-6 leading-relaxed">{m.body}</p>
              <ul className="flex flex-wrap gap-2">
                {m.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-xs px-3 py-1.5 rounded-full bg-[var(--sp-bg)] border border-[var(--sp-bronze-soft)]/40 text-[var(--sp-slate)]"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
