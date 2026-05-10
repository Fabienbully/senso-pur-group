import { FadeIn } from "@/components/animations/FadeIn";

export interface CercleDetail {
  title: string;
  body: string;
}

export interface CercleData {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  recap: string;
  /** "soft" → fond crème ivoire warm ; "ivoire" → fond crème ivoire base */
  background?: "soft" | "ivoire";
  /** Sous-détails (cercle 3 : composants par pays / cercle 4 : pays artisanaux) */
  details?: CercleDetail[];
}

interface CercleProps {
  cercles: CercleData[];
}

function renderParas(text: string) {
  // Le contenu Shopify n'a parfois pas de \n entre paragraphes ; on coupe sur ". " avec capitale qui suit.
  const blocks = text.split(/\n\n+/);
  if (blocks.length > 1) return blocks.map((p, i) => <p key={i}>{p}</p>);
  // Heuristique : on tente de couper sur les ". " suivis d'une majuscule + autre lettre,
  // mais on garde au moins un seul bloc si pas de coupure trouvée.
  return [<p key={0}>{text}</p>];
}

export function Cercle({ cercles }: CercleProps) {
  return (
    <>
      {cercles.map((c, i) => (
        <section
          key={c.number}
          className={`sp-section ${
            c.background === "ivoire" || !c.background
              ? "bg-[var(--sp-bg)]"
              : "bg-[var(--sp-bg-soft)]"
          }`}
        >
          <div className="sp-container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <FadeIn className="lg:col-span-4" delay={i * 80}>
                <div className="sticky top-[calc(var(--sp-header-h)+2rem)]">
                  <div
                    aria-hidden
                    className="font-heading text-[var(--sp-peach)] mb-4"
                    style={{
                      fontSize: "clamp(4rem, 8vw, 6.5rem)",
                      lineHeight: 0.9,
                      fontWeight: 500,
                    }}
                  >
                    {c.number}
                  </div>
                  <p className="sp-eyebrow mb-3">{c.eyebrow}</p>
                  <h2
                    className="text-[var(--sp-mahogany)]"
                    style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)", lineHeight: 1.2 }}
                  >
                    {c.title}
                  </h2>
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-8" delay={i * 80 + 100}>
                <div className="text-[var(--sp-slate)] leading-relaxed text-base md:text-lg space-y-5">
                  {renderParas(c.intro)}
                </div>

                {c.details && c.details.length > 0 && (
                  <div className="mt-12 space-y-8">
                    {c.details.map((d) => (
                      <article
                        key={d.title}
                        className="border-l-2 border-[var(--sp-peach-soft)] pl-6"
                      >
                        <h3
                          className="text-[var(--sp-mahogany)] mb-2"
                          style={{ fontSize: "1.15rem" }}
                        >
                          {d.title}
                        </h3>
                        <div className="text-[var(--sp-slate)] leading-relaxed space-y-3">
                          {renderParas(d.body)}
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                <div className="mt-10 p-5 rounded-[var(--sp-radius-md)] bg-[rgba(232,169,138,0.08)] border border-[var(--sp-peach-soft)]/40">
                  <p className="text-sm text-[var(--sp-slate)] italic leading-relaxed">
                    <span className="font-semibold not-italic text-[var(--sp-mahogany)]">
                      En résumé —{" "}
                    </span>
                    {c.recap}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
