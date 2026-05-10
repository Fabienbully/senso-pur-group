import Link from "next/link";

const COLS = [
  {
    title: "Le groupe",
    links: [
      { label: "Notre direction", href: "/notre-direction" },
      { label: "Notre fabrication", href: "/notre-fabrication" },
      { label: "Engagements RSE", href: "/engagements-rse" },
      { label: "Doctrine d'achat", href: "/doctrine-achat" },
    ],
  },
  {
    title: "Nos maisons",
    links: [
      { label: "Nos maisons", href: "/nos-maisons" },
      { label: "La Maison Senso", href: "/la-maison-senso" },
      { label: "Maison Aubertin", href: "/maison-aubertin" },
      { label: "Bellecour Literie ↗", href: "https://bellecour-literie.com" },
    ],
  },
  {
    title: "Audiences",
    links: [
      { label: "Carrières", href: "/carrieres" },
      { label: "Espace presse", href: "/espace-presse" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Coordonnées",
    links: [
      {
        label: "40 rue Antoine Condorcet, 38090 Vaulx-Milieu",
        href: "https://maps.google.com/?q=40+rue+Antoine+Condorcet+Vaulx-Milieu",
      },
      { label: "04 74 07 33 51", href: "tel:+33474073351" },
      { label: "contact@senso-pur.com", href: "mailto:contact@senso-pur.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative bg-[var(--sp-obsidian)] text-[var(--sp-alabaster)] overflow-hidden"
      role="contentinfo"
    >
      <div className="sp-container-wide pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3
                className="font-body text-xs tracking-[0.22em] uppercase text-[var(--sp-pewter)] font-semibold mb-5"
              >
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[rgba(245,241,232,0.78)] hover:text-[var(--sp-alabaster)] transition-colors leading-relaxed"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-10 border-t border-[rgba(245,241,232,0.12)]">
          <p className="text-xs text-[rgba(245,241,232,0.55)] max-w-md leading-relaxed">
            SENSO PUR SAS — Capital social. SIREN. RCS Vienne. Fabricant français
            de literie depuis 2010.<br />
            <Link href="/mentions-legales" className="underline-offset-2 hover:underline">
              Mentions légales
            </Link>
            {" · "}
            <Link href="/politique-confidentialite" className="underline-offset-2 hover:underline">
              Politique de confidentialité
            </Link>
          </p>
          <p className="text-xs text-[rgba(245,241,232,0.55)]">
            © {new Date().getFullYear()} Senso Pur Group. Tous droits réservés.
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="font-heading italic select-none pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[rgba(245,241,232,0.06)] tracking-tight"
        style={{ fontSize: "clamp(6rem, 18vw, 18rem)", lineHeight: 1 }}
      >
        Diffuseur de confort
      </p>
    </footer>
  );
}
