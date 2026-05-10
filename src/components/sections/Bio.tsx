import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";

interface BioProps {
  name: string;
  role: string;
  /** Sur-titre du bloc (ex: "FONDATEUR ET DIRIGEANT") */
  overhead?: string;
  image: string;
  /** Liste des points "en bref" affichés à côté du nom */
  enBref?: string[];
  /** Multi-paragraphes — séparés par \n\n */
  parcours: string;
  vision: string;
  hobby: string;
  quote: string;
  /** "left" → image gauche, "right" → image droite (layout miroir) */
  layout?: "left" | "right";
}

function renderParas(text: string) {
  return text.split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>);
}

export function Bio({
  name,
  role,
  overhead,
  image,
  enBref,
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
            <div className="overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[4/5] bg-[var(--sp-obsidian)] sticky top-[calc(var(--sp-header-h)+2rem)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          </FadeIn>

          <FadeIn delay={120} className="lg:col-span-7 lg:[direction:ltr]">
            {overhead && (
              <p className="sp-eyebrow mb-3">{overhead}</p>
            )}
            <h2
              className="mb-6"
              style={{ fontSize: "clamp(1.7rem, 3.6vw, 3rem)" }}
            >
              <MaskReveal>{name}</MaskReveal>
            </h2>
            {!overhead && (
              <p className="text-sm text-[var(--sp-slate)] mb-6">{role}</p>
            )}

            {enBref && enBref.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-10 pb-8 border-b border-[var(--sp-bronze-soft)]/40">
                {enBref.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-[var(--sp-slate)] flex items-baseline gap-2"
                  >
                    <span aria-hidden className="text-[var(--sp-peach)]">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-10 text-[var(--sp-slate)] leading-relaxed">
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Parcours
                </h3>
                <div className="space-y-3">{renderParas(parcours)}</div>
              </div>
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Vision
                </h3>
                <div className="space-y-3">{renderParas(vision)}</div>
              </div>
              <div>
                <h3 className="text-[var(--sp-mahogany)] mb-3" style={{ fontSize: "1.1rem" }}>
                  Hors business
                </h3>
                <div className="space-y-3">{renderParas(hobby)}</div>
              </div>

              <blockquote
                className="font-heading italic text-[var(--sp-text-strong)] border-l-2 border-[var(--sp-peach)] pl-6 mt-10"
                style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.4rem)", lineHeight: 1.45 }}
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
