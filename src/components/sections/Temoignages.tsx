import Link from "next/link";
import { TEMOIGNAGES, TEMOIGNAGES_HEAD } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function Temoignages() {
  return (
    <section className="sp-section bg-[var(--sp-bg)]" aria-labelledby="temoignages-title">
      <div className="sp-container">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <p className="sp-eyebrow mb-4">{TEMOIGNAGES_HEAD.eyebrow}</p>
          <h2 id="temoignages-title">{TEMOIGNAGES_HEAD.title}</h2>
          <p className="mt-6 text-[var(--sp-slate)] leading-relaxed">
            {TEMOIGNAGES_HEAD.subtitle}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TEMOIGNAGES.map((t, i) => (
            <FadeIn key={t.name} delay={i * 110}>
              <figure
                className="bg-[var(--sp-bg-soft)] p-8 md:p-10 rounded-[var(--sp-radius-lg)] border border-[var(--sp-bronze-soft)]/40 h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="sp-eyebrow text-[var(--sp-peach)]" style={{ fontSize: "0.65rem" }}>
                    {t.tag}
                  </span>
                  <span
                    aria-hidden
                    className="font-heading text-[var(--sp-peach)] leading-none"
                    style={{ fontSize: "3rem", lineHeight: 0.5, fontWeight: 500 }}
                  >
                    &ldquo;
                  </span>
                </div>
                <blockquote
                  className="font-heading text-[var(--sp-text-strong)] mb-6 italic flex-1"
                  style={{
                    fontSize: "clamp(1.05rem, 1.5vw, 1.4rem)",
                    lineHeight: 1.45,
                    fontWeight: 400,
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-[var(--sp-bronze-soft)]/40 pt-5">
                  <p className="font-semibold text-[var(--sp-mahogany)]">{t.name}</p>
                  <p className="text-sm text-[var(--sp-slate)]">{t.role}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-14">
          <Link href={TEMOIGNAGES_HEAD.link} className="sp-btn sp-btn--ghost">
            {TEMOIGNAGES_HEAD.linkText} →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
