import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Foire aux questions sur Senso Pur Group — fabrication, marques, hôtellerie, carrières, presse.",
};

const FAQ = [
  {
    cat: "LE GROUPE",
    items: [
      {
        q: "Qui dirige Senso Pur ?",
        a: "Fabien Bully (fondateur, CEO) et Marine Bully (Direction Maison Aubertin). Co-fondateurs et frère et sœur.",
      },
      {
        q: "Combien de marques compte le groupe ?",
        a: "Deux maisons : La Maison Senso (literie, fondée 2010) et Maison Aubertin (art de vivre, fondée 2017). Sous La Maison Senso, trois sous-marques : Bellecour Literie, Matelas Pour Tous, Olympe.",
      },
      {
        q: "Où se trouve l'usine ?",
        a: "40 rue Antoine Condorcet, 38090 Vaulx-Milieu (Isère). 6 600 m² d'ateliers, 5 200 m² de stockage.",
      },
    ],
  },
  {
    cat: "FABRICATION",
    items: [
      {
        q: "Tous les produits sont-ils fabriqués en France ?",
        a: "L'intégralité des matelas portant les marques du groupe est fabriquée à Vaulx-Milieu. Pour les autres produits (canapés, mobilier Maison Aubertin) ou les composants, voir notre doctrine d'achat publique.",
      },
      {
        q: "Combien de matelas par an ?",
        a: "50 000 matelas par an, sur une chaîne intégrée.",
      },
      {
        q: "Combien de personnes ?",
        a: "35 collaborateurs en 2026.",
      },
    ],
  },
  {
    cat: "HÔTELLERIE",
    items: [
      {
        q: "Comment travailler avec vous en tant qu'hôtelier ?",
        a: "Notre marque dédiée à l'hospitalité est Bellecour Literie (bellecour-literie.com). Pour un projet clé-en-main décoration + literie, voir l'offre Contract de Maison Aubertin.",
      },
      {
        q: "Quels sont vos clients hôteliers de référence ?",
        a: "Villa Maïa Lyon, Villa Florentine, Le Claridge Champs-Élysées, Fraser Suites, Belambra, Huttopia, VVF, Appart'City, Vinci, et plus de 1 000 clients pro depuis 2021.",
      },
    ],
  },
  {
    cat: "RSE / SOURCING",
    items: [
      {
        q: "Quelles sont vos certifications ?",
        a: "Six référentiels : OEKO-TEX, CertiPUR, EcoVadis (Argent), The Positive Company, La French Fab, PEFC.",
      },
      {
        q: "Pourquoi avez-vous publié votre doctrine d'achat ?",
        a: "Parce que « Made in France » ne suffit plus à dire la vérité d'un produit. Nous publions, pays par pays et partenaire par partenaire, ce que nous fabriquons, co-fabriquons et sélectionnons. Voir /doctrine-achat.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "FAQ" }]}
        eyebrow="FAQ"
        title="Vos questions, nos réponses."
        subtitle="Si votre question n'apparaît pas ci-dessous, écrivez-nous."
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container max-w-4xl">
          <div className="space-y-16">
            {FAQ.map((cat) => (
              <FadeIn key={cat.cat}>
                <div>
                  <h2 className="mb-8 sp-eyebrow text-[var(--sp-pewter)]" style={{ fontSize: "0.85rem" }}>
                    {cat.cat}
                  </h2>
                  <div className="space-y-4">
                    {cat.items.map((it) => (
                      <details
                        key={it.q}
                        className="group bg-[var(--sp-bg-soft)] rounded-[var(--sp-radius-lg)] border border-[var(--sp-bronze-soft)]/40 transition-shadow hover:shadow-[var(--sp-shadow-soft)] [&_summary]:list-none"
                      >
                        <summary className="cursor-pointer p-6 flex items-start gap-4 font-heading text-[var(--sp-mahogany)] text-xl">
                          <span
                            aria-hidden
                            className="mt-1.5 w-5 h-5 shrink-0 grid place-items-center text-[var(--sp-pewter)] transition-transform group-open:rotate-45"
                          >
                            +
                          </span>
                          <span>{it.q}</span>
                        </summary>
                        <div className="px-6 pb-6 pl-16 text-[var(--sp-slate)] leading-relaxed">
                          {it.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CardsGrid
        eyebrow="VOUS NE TROUVEZ PAS ?"
        title="Écrivez-nous directement"
        cards={[
          { eyebrow: "CONTACT", title: "Formulaire", body: "Pour toute demande générale.", href: "/contact" },
          { eyebrow: "PRESSE", title: "Espace presse", body: "Pour les journalistes.", href: "/espace-presse" },
          { eyebrow: "CARRIÈRES", title: "Postuler", body: "Pour les candidats.", href: "/carrieres" },
        ]}
      />
    </>
  );
}
