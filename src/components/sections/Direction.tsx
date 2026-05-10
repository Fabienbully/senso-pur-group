import Link from "next/link";
import { DIRECTION } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { Parallax } from "@/components/animations/Parallax";

export function Direction() {
  return (
    <section className="sp-section bg-[var(--sp-bg)] relative" aria-labelledby="direction-title">
      <div className="sp-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <FadeIn className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[4/5] md:aspect-[5/4] bg-[var(--sp-obsidian)]">
              <Parallax speed={0.7} className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DIRECTION.image}
                  alt="Fabien et Marine Bully"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "120%" }}
                />
              </Parallax>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(27,40,36,0.5) 100%)",
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-5">
            <p className="sp-eyebrow mb-4">{DIRECTION.eyebrow}</p>
            <h2 id="direction-title" className="mb-6">
              <MaskReveal>{DIRECTION.title}</MaskReveal>
            </h2>
            <p className="text-[var(--sp-slate)] leading-relaxed mb-8">
              {DIRECTION.body}
            </p>
            <Link
              href={DIRECTION.videoBadge.href}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--sp-bronze-soft)] hover:bg-[var(--sp-bg-soft)] transition-colors group"


            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--sp-mahogany)] text-[var(--sp-alabaster)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 1l9 5-9 5V1z" />
                </svg>
              </span>
              <span className="text-sm font-medium tracking-wide text-[var(--sp-mahogany)]">
                {DIRECTION.videoBadge.label}
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
