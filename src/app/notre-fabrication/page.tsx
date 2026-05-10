import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { FeaturesList } from "@/components/sections/FeaturesList";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ETAPES, MACHINES, METIERS } from "@/content/fabrication";

export const metadata: Metadata = {
  title: "Notre fabrication",
  description:
    "6 600 m² d'atelier à Vaulx-Milieu, 35 personnes, 50 000 matelas par an. Découpe numérique, couture, matelassage, expédition — toutes les étapes intégrées.",
};

export default function NotreFabrication() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Notre fabrication" }]}
        eyebrow="FABRICATION"
        title="6 600 m² d'atelier, 35 personnes, 50 000 matelas par an. Bienvenue à Vaulx-Milieu."
        bgImage="/images/media/media-fabrication.jpg"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-1.jpg"
        alt="Atelier Senso Pur — vue d'ensemble"
        caption="Atelier principal — Vaulx-Milieu, Isère"
      />

      <TextBlock
        eyebrow="LE SITE"
        title="Une usine intégrée, pas un assemblage"
        body={`Notre site de Vaulx-Milieu (Isère) couvre 6 600 m² d'ateliers et 5 200 m² de stockage. Il accueille toutes les étapes de fabrication des produits Senso Pur — découpe, couture, assemblage, matelassage, conditionnement, expédition.

C'est un choix industriel coûteux, et c'est notre choix. Ce que nous garantissons, nous le faisons. Ce que nous co-fabriquons ou sélectionnons, nous le disons clairement (voir notre doctrine d'achat).`}
      />

      <PortraitLarge
        image="/images/media/media-fabrication-2.jpg"
        alt="Vue intérieure de l'atelier de découpe"
      />

      <FeaturesList
        eyebrow="LES SEPT ÉTAPES"
        title="De la matière à l'expédition"
        intro="Chaque produit Senso Pur traverse ces sept étapes. Aucune n'est sous-traitée."
        features={ETAPES}
        layout="2col"
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-3.jpg"
        alt="Atelier de couture"
        aspect="wide"
      />

      <FeaturesList
        eyebrow="NOS MACHINES"
        title="Sept équipements clés"
        features={MACHINES}
        layout="2col"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-4.jpg"
        alt="Atelier matelassage"
      />

      <FeaturesList
        eyebrow="NOS MÉTIERS"
        title="Sept métiers, une équipe"
        intro="Une partie de nos collaborateurs sont chez Senso Pur depuis l'ouverture en 2010. La transmission interne est notre meilleure formation."
        features={METIERS}
        layout="2col"
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-5.jpg"
        alt="L'équipe Senso Pur"
        caption="L'équipe — 35 collaborateurs"
      />

      <ManifesteQuote
        quote="Une usine, ce n'est pas un décor de communication. C'est un lieu où des femmes et des hommes décident, chaque matin, de faire correctement leur métier."
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          { eyebrow: "RSE", title: "Nos engagements", body: "Mousses certifiées, chutes valorisées, transparence sourcing.", href: "/engagements-rse" },
          { eyebrow: "DOCTRINE", title: "Doctrine d'achat", body: "Ce que nous fabriquons, co-fabriquons, sélectionnons.", href: "/doctrine-achat" },
          { eyebrow: "CARRIÈRES", title: "Nous rejoindre", body: "Nos métiers, nos équipes, comment postuler.", href: "/carrieres" },
        ]}
      />
    </>
  );
}
