import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { TextBlock } from "@/components/sections/TextBlock";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { MAISONS } from "@/content/home";

export const metadata: Metadata = {
  title: "Nos maisons",
  description:
    "Le groupe Senso Pur réunit deux maisons sœurs : La Maison Senso (literie historique, fondée 2010) et Maison Aubertin (art de vivre, fondée 2017).",
};

export default function NosMaisons() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos maisons" }]}
        eyebrow="NOS MAISONS"
        title="Deux maisons sœurs, une même exigence."
        subtitle="La Maison Senso — la literie historique. Maison Aubertin — l'art de vivre. Deux univers complémentaires, une même fabrication française."
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {MAISONS.map((m, i) => (
              <FadeIn key={m.slug} delay={i * 120}>
                <Link
                  href={m.href}
                  className="group block relative overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[3/4] bg-[var(--sp-obsidian)]"


                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,22,40,0) 30%, rgba(10,22,40,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-10 text-[var(--sp-alabaster)]">
                    <p className="sp-eyebrow text-[var(--sp-pewter)] mb-3">{m.tag}</p>
                    <h2
                      className="font-heading mb-3"
                      style={{
                        color: "var(--sp-alabaster)",
                        fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      }}
                    >
                      {m.name}
                    </h2>
                    <p className="text-sm text-[rgba(245,241,232,0.85)] max-w-md">{m.teaser}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TextBlock
        eyebrow="L'ARCHITECTURE DU GROUPE"
        title="Deux maisons, trois sous-marques sous La Maison Senso"
        body={`La Maison Senso porte trois marques :
— Bellecour Literie, dédiée à l'hospitalité (palaces, résidences, plein air).
— Matelas Pour Tous, sur-mesure et économie circulaire.
— Olympe, collection sportifs et performance.

Maison Aubertin élargit l'univers à l'art de vivre — literie, canapés, mobilier, décoration — et propose une offre Contract clé-en-main pour hôteliers et résidences professionnelles.

Toute la literie du groupe, quel que soit la marque, est fabriquée à Vaulx-Milieu (Isère).`}
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Découvrir le groupe en profondeur"
        cards={[
          { eyebrow: "GROUPE", title: "Notre direction", body: "Bios Fabien & Marine, manifeste vidéo.", href: "/notre-direction" },
          { eyebrow: "USINE", title: "Notre fabrication", body: "L'usine, les machines, les métiers.", href: "/notre-fabrication" },
          { eyebrow: "RSE", title: "Nos engagements", body: "Six référentiels, sourcing, transparence.", href: "/engagements-rse" },
        ]}
      />
    </>
  );
}
