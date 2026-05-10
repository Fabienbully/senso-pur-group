import Link from "next/link";
import { MAISONS } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";

export function MaisonsDuo() {
  return (
    <section className="sp-section bg-[var(--sp-bg)]" aria-labelledby="maisons-title">
      <div className="sp-container">
        <FadeIn className="text-center mb-16">
          <p className="sp-eyebrow mb-4">NOS MAISONS</p>
          <h2 id="maisons-title" className="max-w-3xl mx-auto">
            <MaskReveal>Deux maisons, une même exigence du confort</MaskReveal>
          </h2>
          <p className="mt-6 text-lg text-[var(--sp-slate)] max-w-2xl mx-auto">
            Le groupe Senso Pur réunit deux univers complémentaires : la literie
            historique de La Maison Senso et l'art de vivre incarné par Maison Aubertin.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {MAISONS.map((m, i) => (
            <FadeIn key={m.slug} delay={i * 120}>
              <Link
                href={m.href}
                className="sp-maison-card group block relative overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[4/5] md:aspect-[3/4] bg-[var(--sp-obsidian)]"


              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[var(--sp-ease-cinema)] group-hover:scale-110 group-hover:brightness-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,22,40,0) 35%, rgba(10,22,40,0.85) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-[var(--sp-alabaster)]">
                  <span className="sp-eyebrow text-[var(--sp-pewter)] mb-3 block">
                    {m.tag}
                  </span>
                  <h3 className="font-heading text-[clamp(1.8rem,3.4vw,2.8rem)] text-[var(--sp-alabaster)] mb-3">
                    {m.name}
                  </h3>
                  <p className="text-sm text-[rgba(245,241,232,0.85)] max-w-md">
                    {m.teaser}
                  </p>
                  <div
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium translate-y-2 opacity-0 transition-[opacity,transform] duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Découvrir <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
