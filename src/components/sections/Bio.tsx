import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";

interface BioProps {
  name: string;
  role: string;
  image: string;
  parcours: string[];
  vision: string;
  hobby: string;
  quote: string;
  /** "left" → image left, "right" → image right (mirror layout) */
  layout?: "left" | "right";
}

export function Bio({
  name,
  role,
  image,
  parcours,
  vision,
  hobby,
  quote,
  layout = "left",
}: BioProps) {
  const mirror = layout === "right";
  return (
    <section className="sp-section bg-[var(--sp-bg)]">
      <div className="sp-container">
        <div
          className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
            mirror ? "lg:[direction:rtl]" : ""
          }`}
        >
          <FadeIn className={`lg:col-span-5 lg:[direction:ltr]`}>
            <div className="overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[4/5] bg-[var(--sp-obsidian)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 lg:[direction:ltr]">
            <p className="sp-eyebrow mb-3">{role.toUpperCase()}</p>
            <h2 className="mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              <MaskReveal>{name}</MaskReveal>
            </h2>

            <div className="space-y-8 text-[var(--sp-slate)] leading-relaxed">
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Parcours
                </h3>
                <ul className="space-y-1.5">
                  {parcours.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="text-[var(--sp-pewter)]">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Vision
                </h3>
                <p>{vision}</p>
              </div>
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Hors business
                </h3>
                <p>{hobby}</p>
              </div>

              <blockquote
                className="font-heading italic text-[var(--sp-text-strong)] border-l-2 border-[var(--sp-pewter)] pl-6 mt-10"
                style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", lineHeight: 1.4 }}
              >
                « {quote} »
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
