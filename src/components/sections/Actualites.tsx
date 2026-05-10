import Link from "next/link";
import { ACTUS, ACTUS_HEAD } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function Actualites() {
  return (
    <section className="sp-section bg-[var(--sp-bg-soft)]" aria-labelledby="actus-title">
      <div className="sp-container">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="sp-eyebrow mb-3">{ACTUS_HEAD.eyebrow}</p>
            <h2 id="actus-title">{ACTUS_HEAD.title}</h2>
          </div>
          <Link
            href={ACTUS_HEAD.link}
            className="text-sm font-medium text-[var(--sp-mahogany)] hover:text-[var(--sp-peach)] transition-colors inline-flex items-center gap-2"
          >
            {ACTUS_HEAD.linkText} <span aria-hidden>→</span>
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {ACTUS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 110}>
              <Link
                href={a.href}
                className="group block bg-[var(--sp-bg)] rounded-[var(--sp-radius-lg)] overflow-hidden border border-[var(--sp-bronze-soft)]/40 transition-all duration-500 hover:shadow-[var(--sp-shadow-medium)] hover:-translate-y-1 h-full"
              >
                <div className="aspect-[5/3] bg-[var(--sp-bg-soft)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <span className="sp-eyebrow text-[var(--sp-peach)]" style={{ fontSize: "0.65rem" }}>
                      {a.tag}
                    </span>
                    <span aria-hidden className="text-[var(--sp-peach-soft)] opacity-60">·</span>
                    <time className="tracking-wide text-[var(--sp-slate)]">{a.date}</time>
                  </div>
                  <h3
                    className="font-heading text-[var(--sp-mahogany)] leading-tight mb-3"
                    style={{ fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm text-[var(--sp-slate)] leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
