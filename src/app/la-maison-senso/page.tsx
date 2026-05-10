import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";

export const metadata: Metadata = {
  title: "La Maison Senso",
  description:
    "La Maison Senso — la maison historique de literie du groupe, fondée en 2010. Trois marques : Bellecour Literie, Matelas Pour Tous, Olympe. Toute la fabrication à Vaulx-Milieu.",
};

export default function LaMaisonSenso() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos maisons", href: "/nos-maisons" }, { label: "La Maison Senso" }]}
        eyebrow="MAISON HISTORIQUE · DEPUIS 2010"
        title="La Maison Senso — la literie au cœur du groupe."
        subtitle="Tout ce qui se dort dans le groupe est fabriqué ici. Trois marques sous une même exigence."
        bgImage="/images/media/media-maison-senso.jpg"
      />

      <PortraitLarge
        image="/images/media/media-maison-senso.jpg"
        alt="La Maison Senso"
        caption="L'atelier — Vaulx-Milieu"
      />

      <TextBlock
        eyebrow="HISTOIRE"
        title="Une maison fondée sur l'industrie française"
        body={`Senso Pur a été fondé en 2010 par Fabien Bully avec son père. La Maison Senso prolonge cet héritage : une fabrication intégrée, à Vaulx-Milieu, où chaque matelas du groupe sort de la même chaîne, de la même équipe, du même atelier.

Trois marques portent les produits selon les usages : Bellecour Literie pour l'hôtellerie, Matelas Pour Tous pour le sur-mesure et l'économie circulaire, Olympe pour les sportifs. Une seule fabrication.`}
      />

      <CardsGrid
        eyebrow="LES TROIS MARQUES"
        title="Trois univers sous une même fabrication"
        cards={[
          {
            eyebrow: "HÔTELLERIE",
            title: "Bellecour Literie",
            body: "Notre marque dédiée aux palaces, hôtels, résidences pro et plein air. Sur-mesure, livraison, installation, SAV.",
            href: "https://bellecour-literie.com",
            external: true,
          },
          {
            eyebrow: "SUR-MESURE",
            title: "Matelas Pour Tous",
            body: "L'atelier sur-mesure et l'économie circulaire — matelas pour bateaux, camping-cars, dimensions atypiques.",
            href: "/contact",
          },
          {
            eyebrow: "PERFORMANCE",
            title: "Olympe",
            body: "La collection sportifs — matelas pensés pour la récupération musculaire et le maintien postural.",
            href: "/contact",
          },
        ]}
      />

      <ManifesteQuote
        quote="Une maison, c'est ce que vous laissez derrière vous quand vous éteignez la lumière."
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          { eyebrow: "USINE", title: "Notre fabrication", body: "Les sept étapes, les sept machines, les sept métiers.", href: "/notre-fabrication" },
          { eyebrow: "MAISON", title: "Maison Aubertin", body: "Notre maison sœur, art de vivre.", href: "/maison-aubertin" },
          { eyebrow: "ENGAGEMENTS", title: "Engagements RSE", body: "Six référentiels, sourcing, transparence.", href: "/engagements-rse" },
        ]}
      />
    </>
  );
}
