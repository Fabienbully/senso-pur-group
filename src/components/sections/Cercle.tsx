import { FadeIn } from "@/components/animations/FadeIn";

export interface CercleData {
  index: string;
  title: string;
  body: string;
  detail: string;
}

interface CercleProps {
  cercles: CercleData[];
}

/**
 * Quatre cercles concentriques pour la doctrine d'achat — chaque cercle décrit
 * un mode d'engagement (fabrique, co-fabrique, sélectionne, certifie).
 */
export function Cercle({ cercles }: CercleProps) {
  return (
    <section className="sp-section bg-[var(--sp-bg)]">
      <div className="sp-container">
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
          {cercles.map((c, i) => (
            <FadeIn key={c.title} delay={i * 110}>
              <article className="relative pl-12 md:pl-16">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 grid place-items-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-[var(--sp-pewter)]/15 border border-[var(--sp-pewter)] text-[var(--sp-mahogany)] font-heading text-sm md:text-base"
                  style={{ fontWeight: 500 }}
                >
                  {c.index}
                </span>
                <h3 className="mb-3 text-[var(--sp-mahogany)]" style={{ fontSize: "1.5rem" }}>
                  {c.title}
                </h3>
                <p className="text-[var(--sp-slate)] mb-3 leading-relaxed">{c.body}</p>
                <p className="text-sm text-[var(--sp-bronze)] italic">{c.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
