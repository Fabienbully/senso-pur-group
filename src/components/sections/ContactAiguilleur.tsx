import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

interface AiguilleurCard {
  tag: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
}

interface ContactAiguilleurProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards: AiguilleurCard[];
}

export function ContactAiguilleur({
  eyebrow = "QUEL EST L'OBJET DE VOTRE DEMANDE ?",
  title = "Selon votre demande, écrivez à la bonne adresse",
  subtitle,
  cards,
}: ContactAiguilleurProps) {
  return (
    <section className="sp-section bg-[var(--sp-bg)]">
      <div className="sp-container">
        <FadeIn className="mb-12 max-w-3xl">
          <p className="sp-eyebrow mb-3">{eyebrow}</p>
          <h2 className="mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[var(--sp-slate)]">{subtitle}</p>}
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <FadeIn key={c.tag} delay={i * 90}>
              <Link
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="block h-full p-8 rounded-[var(--sp-radius-lg)] bg-[var(--sp-bg-soft)] border border-[var(--sp-bronze-soft)]/40 hover:border-[var(--sp-pewter)] hover:shadow-[var(--sp-shadow-soft)] transition-all duration-500"


              >
                <p className="sp-eyebrow mb-4">{c.tag}</p>
                <h3 className="mb-3 text-[var(--sp-mahogany)]" style={{ fontSize: "1.3rem" }}>
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--sp-slate)] leading-relaxed mb-5">{c.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sp-pewter)]">
                  {c.cta} {c.external ? "↗" : "→"}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
