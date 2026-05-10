import Link from "next/link";
import { AIGUILLEUR } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export function Aiguilleur() {
  return (
    <section
      className="sp-section bg-[var(--sp-obsidian)] text-[var(--sp-alabaster)]"
      aria-labelledby="aiguilleur-title"
    >
      <div className="sp-container">
        <FadeIn className="text-center mb-16">
          <p className="sp-eyebrow text-[var(--sp-pewter)] mb-4">QUI ÊTES-VOUS ?</p>
          <h2
            id="aiguilleur-title"
            className="text-[var(--sp-alabaster)]"
            style={{ color: "var(--sp-alabaster)" }}
          >
            Trouvez votre chemin
          </h2>
          <p className="mt-6 text-base text-[rgba(238,236,233,0.78)] max-w-2xl mx-auto">
            Selon ce que vous cherchez, le bon point d'entrée n'est pas le même.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {AIGUILLEUR.primary.map((card, i) => (
            <FadeIn key={card.tag} delay={i * 120}>
              <Link
                href={card.href}
                className="group block h-full p-9 rounded-[var(--sp-radius-lg)] border border-[rgba(238,236,233,0.12)] bg-[rgba(238,236,233,0.03)] hover:bg-[rgba(238,236,233,0.07)] hover:border-[rgba(153,179,183,0.5)] transition-all duration-500"


              >
                <span className="sp-eyebrow text-[var(--sp-pewter)] mb-5 block">
                  {card.tag}
                </span>
                <h3
                  className="font-heading mb-4 text-[var(--sp-alabaster)]"
                  style={{ color: "var(--sp-alabaster)", fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-[rgba(238,236,233,0.72)] mb-8 leading-relaxed">
                  {card.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-[var(--sp-pewter)] font-medium">
                  {card.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Audiences secondaires */}
        <FadeIn delay={400} className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {AIGUILLEUR.secondary.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="flex items-start gap-3 text-sm text-[rgba(238,236,233,0.72)] hover:text-[var(--sp-alabaster)] transition-colors py-4 border-t border-[rgba(238,236,233,0.12)]"
            >
              <span aria-hidden className="text-[var(--sp-pewter)] mt-0.5">→</span>
              <span>
                <span className="font-medium text-[var(--sp-alabaster)]">{s.label}.</span>{" "}
                {s.body}{" "}
                <span className="underline-offset-2 underline text-[var(--sp-pewter)]">{s.cta}</span>
                {s.external && " ↗"}
              </span>
            </Link>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
