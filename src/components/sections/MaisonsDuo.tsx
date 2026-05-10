import Link from "next/link";
import { MAISONS, MAISONS_DUO } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";

export function MaisonsDuo() {
  return (
    <section className="sp-section bg-[var(--sp-bg)]" aria-labelledby="maisons-title">
      <div className="sp-container">
        <FadeIn className="text-center mb-16">
          <p className="sp-eyebrow mb-4">{MAISONS_DUO.eyebrow}</p>
          <h2 id="maisons-title" className="max-w-3xl mx-auto">
            <MaskReveal>{MAISONS_DUO.title}</MaskReveal>
          </h2>
          <p className="mt-6 text-lg text-[var(--sp-slate)] max-w-2xl mx-auto">
            {MAISONS_DUO.subtitle}
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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[var(--sp-ease-cinema)] group-hover:scale-[1.05] group-hover:brightness-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,22,40,0) 35%, rgba(10,22,40,0.85) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-[var(--sp-alabaster)]">
                  <span className="sp-eyebrow text-[var(--sp-peach)] mb-3 block">
                    {m.tag}
                  </span>
                  <h3 className="font-heading text-[clamp(1.6rem,3vw,2.6rem)] text-[var(--sp-alabaster)] mb-3">
                    {m.name}
                  </h3>
                  <p className="text-sm text-[rgba(245,241,232,0.85)] max-w-md leading-relaxed">
                    {m.teaser}
                  </p>
                  <div
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium opacity-100 md:translate-y-2 md:opacity-0 transition-[opacity,transform] duration-500 group-hover:opacity-100 group-hover:translate-y-0 text-[var(--sp-peach-soft)]"
                  >
                    {m.linkText}
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
