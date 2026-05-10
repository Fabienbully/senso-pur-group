import Link from "next/link";
import { TEMOIGNAGES } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function Temoignages() {
  return (
    <section className="sp-section bg-[var(--sp-bg)]" aria-labelledby="temoignages-title">
      <div className="sp-container">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <p className="sp-eyebrow mb-4">PAROLES DE PROS</p>
          <h2 id="temoignages-title">Ceux qui nous connaissent en parlent</h2>
          <p className="mt-6 text-[var(--sp-slate)] leading-relaxed">
            Hôteliers, investisseurs, agenceurs, ensembliers. Quatre regards sur ce que nous fabriquons.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TEMOIGNAGES.map((t, i) => (
            <FadeIn key={t.name} delay={i * 110}>
              <figure
                className="bg-[var(--sp-bg-soft)] p-9 md:p-10 rounded-[var(--sp-radius-lg)] border border-[var(--sp-bronze-soft)]/40 h-full flex flex-col"
              >
                <div
                  aria-hidden
                  className="font-heading text-[var(--sp-pewter)] mb-2"
                  style={{ fontSize: "4rem", lineHeight: 0.6, fontWeight: 500 }}
                >
                  &ldquo;
                </div>
                <blockquote
                  className="font-heading text-[var(--sp-text-strong)] mb-6 italic flex-1"
                  style={{
                    fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)",
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
          <Link
            href="/espace-presse"
            className="sp-btn sp-btn--ghost"


          >
            Voir toutes les interviews →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
