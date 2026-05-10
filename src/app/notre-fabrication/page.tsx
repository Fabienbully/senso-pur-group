import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { FeaturesList } from "@/components/sections/FeaturesList";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import {
  FABRICATION_HERO,
  SITE_BLOCK,
  ETAPES_HEAD, ETAPES,
  MACHINES_HEAD, MACHINES,
  METIERS_HEAD, METIERS,
} from "@/content/fabrication";

export const metadata: Metadata = {
  title: "Notre fabrication",
  description:
    "6 600 m² d'atelier à Vaulx-Milieu, 35 personnes, 50 000 matelas par an. Une usine intégrée en Isère, des machines de pointe, des métiers transmis.",
};

export default function NotreFabrication() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Notre fabrication" }]}
        eyebrow={FABRICATION_HERO.eyebrow}
        title={FABRICATION_HERO.title}
        subtitle={FABRICATION_HERO.subtitle}
        bgImage="/images/media/media-fabrication-1.jpg"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-1.jpg"
        alt="Atelier de Vaulx-Milieu"
        caption="Atelier de Vaulx-Milieu, Isère — 6 600 m² de production"
      />

      <TextBlock
        eyebrow={SITE_BLOCK.eyebrow}
        title={SITE_BLOCK.title}
        body={SITE_BLOCK.body}
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-2.jpg"
        alt="Stockage et matières premières"
        caption="Stockage et matières premières — 5 200 m² dédiés à la logistique"
      />

      <FeaturesList
        eyebrow={ETAPES_HEAD.eyebrow}
        title={ETAPES_HEAD.title}
        intro={ETAPES_HEAD.subtitle}
        features={ETAPES}
        layout="2col"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-3.jpg"
        alt="Découpe, couture, assemblage"
        caption="Découpe, couture, assemblage — sept étapes maîtrisées en interne"
      />

      <FeaturesList
        eyebrow={MACHINES_HEAD.eyebrow}
        title={MACHINES_HEAD.title}
        intro={MACHINES_HEAD.subtitle}
        features={MACHINES}
        layout="3col"
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-4.jpg"
        alt="Notre outil industriel"
        caption="Notre outil industriel — machines de précision et savoir-faire transmis"
      />

      <FeaturesList
        eyebrow={METIERS_HEAD.eyebrow}
        title={METIERS_HEAD.title}
        intro={METIERS_HEAD.subtitle}
        features={METIERS}
        layout="3col"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-5.jpg"
        alt="Les femmes et les hommes de l'atelier"
        caption="Les femmes et les hommes de l'atelier — 35 collaborateurs"
      />

      <PortraitLarge
        image="/images/media/media-fabrication-6.jpg"
        alt="Maîtrise du geste, exigence du détail"
        caption="Maîtrise du geste, exigence du détail — la signature Senso Pur"
      />

      <ManifesteQuote
        quote="Une usine, ce n'est pas un décor de communication. C'est un lieu où des femmes et des hommes décident, chaque matin, de faire correctement leur métier."
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          {
            eyebrow: "RSE",
            title: "Nos engagements",
            body: "Bilan carbone, certifications, ferme photovoltaïque, recyclage. Le détail de notre démarche.",
            href: "/engagements-rse",
          },
          {
            eyebrow: "DOCTRINE",
            title: "D'où viennent nos matières",
            body: "Pays par pays, partenaire après partenaire — la transparence radicale sur notre sourcing.",
            href: "/doctrine-achat",
          },
          {
            eyebrow: "REJOIGNEZ-NOUS",
            title: "Travailler chez Senso Pur",
            body: "Découvrez les métiers, les conditions, et les postes ouverts.",
            href: "/carrieres",
          },
        ]}
      />
    </>
  );
}
