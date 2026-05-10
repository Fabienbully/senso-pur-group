import { CHIFFRES } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { CountUp } from "@/components/animations/CountUp";

export function ChiffresCles() {
  return (
    <section
      className="sp-section bg-[var(--sp-bg-soft)] relative overflow-hidden"
      aria-labelledby="chiffres-title"
    >
      <div className="sp-container">
        <FadeIn className="text-center mb-16">
          <p className="sp-eyebrow mb-4">EN CHIFFRES</p>
          <h2 id="chiffres-title">L'industrie française du sommeil, en quelques nombres</h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
          {CHIFFRES.map((c, i) => (
            <FadeIn key={c.label} delay={i * 90} className="text-center">
              <div
                className="font-heading text-[var(--sp-mahogany)] tabular-nums"
                style={{
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <CountUp to={c.value} suffix={c.suffix} />
              </div>
              <p className="mt-3 font-body font-semibold text-[var(--sp-slate)] text-base">
                {c.label}
              </p>
              {c.caption && (
                <p className="text-xs text-[var(--sp-bronze)] mt-1">{c.caption}</p>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
