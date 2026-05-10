import Link from "next/link";
import { CERTIFICATIONS } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function RsePulse() {
  return (
    <section
      className="sp-section relative overflow-hidden"
      aria-labelledby="rse-title"
      style={{
        background:
          "linear-gradient(180deg, var(--sp-bg) 0%, var(--sp-bg-soft) 100%)",
      }}
    >
      <div className="sp-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Big number circle */}
          <FadeIn className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div
                className="rounded-full grid place-items-center aspect-square"
                style={{
                  width: "min(420px, 80vw)",
                  background:
                    "radial-gradient(circle, var(--sp-bg) 60%, transparent 100%)",
                  boxShadow: "var(--sp-shadow-glow)",
                  border: "1px solid var(--sp-bronze-soft)",
                }}
              >
                <div className="text-center">
                  <div
                    className="font-heading text-[var(--sp-mahogany)] leading-none"
                    style={{ fontSize: "clamp(5rem, 12vw, 9rem)", fontWeight: 500 }}
                  >
                    100<span className="text-[0.5em] align-top">%</span>
                  </div>
                  <p className="sp-eyebrow text-[var(--sp-pewter)] mt-3">
                    MOUSSES CERTIFIÉES
                  </p>
                </div>
              </div>
              {/* Pulse rings */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px solid var(--sp-pewter)",
                  animation: "sp-pulse-soft 3s var(--sp-ease-cinema) infinite",
                  opacity: 0.4,
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={120} className="order-1 lg:order-2">
            <p className="sp-eyebrow mb-4">NOS ENGAGEMENTS</p>
            <h2 id="rse-title" className="mb-6">
              Nos mousses sont certifiées. Nos chutes ne sont pas perdues —
              transformées en coussins, en isolants thermiques.
            </h2>
            <p className="text-[var(--sp-slate)] leading-relaxed mb-8">
              Six référentiels exigeants attestent de la qualité matières, de
              l'éthique sociale et environnementale, et du sourcing France de
              notre fabrication.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {CERTIFICATIONS.map((cert, i) => (
                <FadeIn key={cert.name} delay={200 + i * 60} className="flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.src}
                    alt={cert.name}
                    title={cert.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </FadeIn>
              ))}
            </div>

            <Link
              href="/engagements-rse"
              className="sp-btn sp-btn--ghost"


            >
              Lire nos engagements →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
