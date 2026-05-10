import { FadeIn } from "@/components/animations/FadeIn";

export interface Feature {
  title: string;
  body?: string;
  /** Optional small label / number index. */
  index?: string;
}

interface FeaturesListProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  features: Feature[];
  /** "1col" stacked numbered list, "2col" two-column grid (default), "3col" three-column. */
  layout?: "1col" | "2col" | "3col";
  bg?: "default" | "soft";
}

export function FeaturesList({
  eyebrow,
  title,
  intro,
  features,
  layout = "2col",
  bg = "default",
}: FeaturesListProps) {
  const cols =
    layout === "3col" ? "lg:grid-cols-3" : layout === "1col" ? "" : "md:grid-cols-2";
  return (
    <section
      className={`sp-section ${bg === "soft" ? "bg-[var(--sp-bg-soft)]" : "bg-[var(--sp-bg)]"}`}
    >
      <div className="sp-container">
        {(eyebrow || title || intro) && (
          <FadeIn className="mb-12 max-w-3xl">
            {eyebrow && <p className="sp-eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="mb-5">{title}</h2>}
            {intro && (
              <p className="text-lg text-[var(--sp-slate)] leading-relaxed">{intro}</p>
            )}
          </FadeIn>
        )}
        <ol className={`grid ${cols} gap-x-12 gap-y-10`}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 80} as="li">
              <div className="flex gap-5 items-start">
                <span
                  className="font-heading text-[var(--sp-pewter)] tabular-nums shrink-0"
                  style={{ fontSize: "2rem", lineHeight: 1, fontWeight: 500 }}
                >
                  {f.index ?? String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-[var(--sp-mahogany)]" style={{ fontSize: "1.3rem" }}>
                    {f.title}
                  </h3>
                  {f.body && (
                    <p className="text-[var(--sp-slate)] leading-relaxed">{f.body}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
