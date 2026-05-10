import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

interface Card {
  eyebrow?: string;
  title: string;
  body?: string;
  href: string;
  external?: boolean;
}

interface CardsGridProps {
  eyebrow?: string;
  title?: string;
  cards: Card[];
  bg?: "default" | "soft";
}

export function CardsGrid({ eyebrow, title, cards, bg = "soft" }: CardsGridProps) {
  return (
    <section
      className={`sp-section ${bg === "soft" ? "bg-[var(--sp-bg-soft)]" : "bg-[var(--sp-bg)]"}`}
    >
      <div className="sp-container">
        {(eyebrow || title) && (
          <FadeIn className="mb-12 max-w-3xl">
            {eyebrow && <p className="sp-eyebrow mb-3">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </FadeIn>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 90}>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group block h-full p-8 bg-[var(--sp-bg)] rounded-[var(--sp-radius-lg)] border border-[var(--sp-bronze-soft)]/40 hover:border-[var(--sp-pewter)] hover:shadow-[var(--sp-shadow-soft)] transition-all duration-500 hover:-translate-y-1"


              >
                {c.eyebrow && (
                  <p className="sp-eyebrow mb-4" style={{ fontSize: "0.65rem" }}>
                    {c.eyebrow}
                  </p>
                )}
                <h3 className="mb-3 text-[var(--sp-mahogany)]" style={{ fontSize: "1.4rem" }}>
                  {c.title}
                </h3>
                {c.body && (
                  <p className="text-sm text-[var(--sp-slate)] leading-relaxed mb-6">{c.body}</p>
                )}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sp-pewter)]">
                  Découvrir{" "}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
