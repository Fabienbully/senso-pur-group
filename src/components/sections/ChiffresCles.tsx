import { CHIFFRES, CHIFFRES_HEAD } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { CountUp } from "@/components/animations/CountUp";

export function ChiffresCles() {
  return (
    <section
      className="sp-section bg-[var(--sp-bg-soft)] relative overflow-hidden"
      aria-labelledby="chiffres-title"
    >
      <div className="sp-container">
        <FadeIn className="text-center mb-14 md:mb-16">
          <p className="sp-eyebrow mb-3" id="chiffres-title">{CHIFFRES_HEAD.eyebrow}</p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12">
          {CHIFFRES.map((c, i) => (
            <FadeIn key={c.label} delay={i * 90} className="text-center">
              <div
                className="font-heading text-[var(--sp-mahogany)] tabular-nums"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                <CountUp to={c.value} suffix={c.suffix} />
              </div>
              <p className="mt-4 font-body text-[var(--sp-slate)] text-sm md:text-base leading-snug max-w-[28ch] mx-auto">
                {c.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
