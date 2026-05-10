import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";

interface ManifesteQuoteProps {
  quote: string;
  author?: string;
  role?: string;
}

export function ManifesteQuote({ quote, author, role }: ManifesteQuoteProps) {
  return (
    <section className="sp-section bg-[var(--sp-obsidian)] text-[var(--sp-alabaster)] relative overflow-hidden">
      <div className="sp-grain" aria-hidden />
      <div className="sp-container relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <span
            aria-hidden
            className="font-heading block mb-4 text-[var(--sp-pewter)]"
            style={{ fontSize: "5rem", lineHeight: 0.6 }}
          >
            &ldquo;
          </span>
          <blockquote
            className="font-heading italic text-[var(--sp-alabaster)]"
            style={{
              color: "var(--sp-alabaster)",
              fontSize: "clamp(1.7rem, 3.4vw, 3rem)",
              lineHeight: 1.25,
              fontWeight: 400,
            }}
          >
            <MaskReveal>{quote}</MaskReveal>
          </blockquote>
          {(author || role) && (
            <p className="mt-10 text-sm tracking-wide uppercase text-[var(--sp-pewter)]">
              {author}
              {role && <span className="text-[rgba(245,241,232,0.55)]"> · {role}</span>}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
