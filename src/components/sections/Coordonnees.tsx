import { FadeIn } from "@/components/animations/FadeIn";

const BLOCS = [
  {
    title: "Siège & usine",
    lines: ["40 rue Antoine Condorcet", "38090 Vaulx-Milieu, France"],
    href: "https://maps.google.com/?q=40+rue+Antoine+Condorcet+Vaulx-Milieu",
    cta: "Itinéraire",
  },
  {
    title: "Téléphone",
    lines: ["04 74 07 33 51"],
    href: "tel:+33474073351",
    cta: "Appeler",
  },
  {
    title: "Email",
    lines: ["contact@senso-pur.com"],
    href: "mailto:contact@senso-pur.com",
    cta: "Écrire",
  },
  {
    title: "Horaires",
    lines: ["Du lundi au vendredi", "8h30 — 17h30"],
  },
];

export function Coordonnees() {
  return (
    <section className="sp-section bg-[var(--sp-bg-soft)]">
      <div className="sp-container">
        <FadeIn className="mb-12">
          <p className="sp-eyebrow mb-3">COORDONNÉES</p>
          <h2>Nous trouver</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOCS.map((b, i) => (
            <FadeIn key={b.title} delay={i * 90}>
              <div className="h-full p-7 rounded-[var(--sp-radius-lg)] bg-[var(--sp-bg)] border border-[var(--sp-bronze-soft)]/40">
                <p className="sp-eyebrow mb-3">{b.title}</p>
                <div className="space-y-1 mb-4">
                  {b.lines.map((l) => (
                    <p key={l} className="text-[var(--sp-text-strong)] font-heading text-xl leading-tight">
                      {l}
                    </p>
                  ))}
                </div>
                {b.href && b.cta && (
                  <a
                    href={b.href}
                    target={b.href.startsWith("http") ? "_blank" : undefined}
                    rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-[var(--sp-pewter)] hover:text-[var(--sp-mahogany)] inline-flex items-center gap-2"
                  >
                    {b.cta} →
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
