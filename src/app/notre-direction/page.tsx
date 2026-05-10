import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { Bio } from "@/components/sections/Bio";
import { TextBlock } from "@/components/sections/TextBlock";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { FABIEN, MARINE } from "@/content/direction";

export const metadata: Metadata = {
  title: "Notre direction",
  description:
    "Fabien Bully a fondé Senso Pur en 2010. Marine Bully, sa sœur, l'a rejoint en 2014 puis a créé Maison Aubertin en 2017. Une famille à la tête du groupe.",
};

export default function NotreDirection() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Notre direction" }]}
        eyebrow="LE GROUPE"
        title="Une famille à la tête du groupe."
        subtitle="Deux dirigeants, deux maisons, une même exigence — incarner ce que nous fabriquons."
        bgImage="/images/media/media-direction-duo.jpg"
      />

      <PortraitLarge
        image="/images/media/media-direction-duo.jpg"
        alt="Fabien et Marine Bully"
        caption="Fabien & Marine Bully — Direction Senso Pur Group"
      />

      <section id="manifeste">
        <VideoFeature
          youtubeId="DsKByvMOZYQ"
          caption="VIDÉO MANIFESTE · 90 sec — Senso Pur, l'industrie française du sommeil"
        />
      </section>

      <Bio {...FABIEN} layout="left" />
      <Bio {...MARINE} layout="right" />

      <ManifesteQuote
        quote="Une histoire familiale, un même nom. Trois générations dans le textile et l'ameublement — c'est notre humus, c'est ce qui donne sens à chacune de nos décisions industrielles."
        author="La famille Bully"
      />

      <TextBlock
        eyebrow="HISTOIRE"
        title="Une histoire familiale, un même nom"
        body={`Le textile et l'ameublement traversent notre famille depuis trois générations. Ce que nos parents et grands-parents nous ont transmis, ce n'est pas un savoir-faire isolé — c'est une certaine idée du métier.

Cette idée tient en trois mots : exigence, durée, transmission. Quand Fabien fonde Senso Pur en 2010, il prolonge cette conviction dans le secteur de la literie. Quand Marine crée Maison Aubertin en 2017, elle l'élargit à l'art de vivre.

Nous ne sommes pas des financiers de la literie. Nous sommes une famille qui fabrique en France, qui forme ses équipes, qui assume ses choix de sourcing — et qui accepte d'être jugée sur la durée.`}
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          {
            eyebrow: "FABRICATION",
            title: "Notre usine de Vaulx-Milieu",
            body: "6 600 m², 35 personnes, 50 000 matelas par an.",
            href: "/notre-fabrication",
          },
          {
            eyebrow: "ENGAGEMENTS",
            title: "Nos engagements RSE",
            body: "Mousses certifiées, chutes valorisées, six référentiels.",
            href: "/engagements-rse",
          },
          {
            eyebrow: "DOCTRINE",
            title: "Notre doctrine d'achat",
            body: "Ce que nous fabriquons, co-fabriquons, sélectionnons.",
            href: "/doctrine-achat",
          },
        ]}
      />
    </>
  );
}
