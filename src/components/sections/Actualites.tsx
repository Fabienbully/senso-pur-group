import Link from "next/link";
import { ACTUS } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function Actualites() {
  return (
    <section className="sp-section bg-[var(--sp-bg-soft)]" aria-labelledby="actus-title">
      <div className="sp-container">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className="sp-eyebrow mb-3">ACTUALITÉS</p>
            <h2 id="actus-title">L'actualité du groupe</h2>
          </div>
          <Link
            href="/espace-presse"
            className="text-sm font-medium text-[var(--sp-mahogany)] hover:text-[var(--sp-bronze)] transition-colors inline-flex items-center gap-2"
          >
            Voir toutes les actualités <span aria-hidden>→</span>
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {ACTUS.map((a, i) => (
            <FadeIn key={a.title} delay={i * 110}>
              <Link
                href={a.href}
                className="group block bg-[var(--sp-bg)] rounded-[var(--sp-radius-lg)] overflow-hidden border border-[var(--sp-bronze-soft)]/40 transition-all duration-500 hover:shadow-[var(--sp-shadow-medium)] hover:-translate-y-1"


              >
                <div className="aspect-[5/3] bg-[var(--sp-bg-soft)] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3 text-xs text-[var(--sp-bronze)]">
                    <span className="sp-eyebrow text-[var(--sp-pewter)]" style={{ fontSize: "0.65rem" }}>
                      {a.tag}
                    </span>
                    <span aria-hidden className="opacity-50">·</span>
                    <time className="tracking-wide">{a.date}</time>
                  </div>
                  <h3
                    className="font-heading text-[var(--sp-mahogany)] leading-tight"
                    style={{ fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)" }}
                  >
                    {a.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
