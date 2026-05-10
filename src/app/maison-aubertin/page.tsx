import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { Callout } from "@/components/sections/Callout";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { FeaturesList } from "@/components/sections/FeaturesList";

export const metadata: Metadata = {
  title: "Maison Aubertin",
  description:
    "Maison Aubertin élargit l'univers du groupe au-delà du sommeil — literie, canapés, mobilier, décoration. Incarnée par Marine Bully.",
};

const UNIVERS = [
  {
    title: "Literie",
    body: "Matelas et sommiers Maison Aubertin, fabriqués à Vaulx-Milieu et chez nos associés espagnols depuis plus de quinze ans. La même exigence que La Maison Senso, dans un design pensé pour l'art de vivre.",
    index: "FRANCE / ESPAGNE",
  },
  {
    title: "Canapés",
    body: "La Pologne possède une longue tradition d'ébénisterie et de confection textile. Nos partenaires y créent des pièces robustes, élégantes et parfaitement exécutées — avec une attention particulière aux finitions et au confort.",
    index: "POLOGNE",
  },
  {
    title: "Mobilier",
    body: "Tables, chaises, meubles en bois et en métal. L'Inde pour la tradition de l'ébénisterie et du vieux bois, la Chine pour la maîtrise du travail du métal et la précision technique.",
    index: "INDE / CHINE",
  },
  {
    title: "Décoration",
    body: "Paniers, têtes de lit, luminaires, pièces décoratives. Le Vietnam pour la maîtrise exceptionnelle du tissage et des fibres naturelles. L'Inde pour l'artisanat de la ferronnerie et de la chaudronnerie.",
    index: "VIETNAM / INDE",
  },
];

export default function MaisonAubertin() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Nos maisons", href: "/nos-maisons" },
          { label: "Maison Aubertin" },
        ]}
        eyebrow="ART DE VIVRE"
        title="Maison Aubertin, l'art de vivre fabriqué et choisi avec exigence."
        subtitle="Fondée en 2017, Maison Aubertin élargit l'univers du groupe au-delà du sommeil. Literie, canapés, mobilier, décoration : un univers complet pour la maison et les résidences professionnelles, incarné par Marine Bully."
        bgImage="/images/media/media-maison-aubertin.jpg"
      />

      <PortraitLarge
        image="/images/media/media-maison-aubertin.jpg"
        alt="L'art de vivre Maison Aubertin"
      />

      <TextBlock
        eyebrow="UNE NOUVELLE MAISON, UN ANCIEN SAVOIR-FAIRE"
        title="Une nouvelle maison, un ancien savoir-faire"
        body={`Maison Aubertin a été fondée en 2017 par Marine et Fabien Bully. Notre intention : faire le pont entre le savoir-faire artisanal et la modernité des designs et des matières.

Maison Aubertin n'est pas un assembleur de tendances. C'est une maison qui fabrique ce qu'elle sait fabriquer (la literie, à Vaulx-Milieu et chez nos associés espagnols), et qui sélectionne le reste avec exigence — chez des partenaires européens fidèles depuis quinze ans pour les canapés et les composants, et chez des artisans internationaux soigneusement triés pour le mobilier et la décoration.`}
        bg="soft"
      />

      <FeaturesList
        eyebrow="QUATRE UNIVERS, UNE MÊME MAISON"
        title="Quatre univers, une même maison"
        intro="Du sommeil au salon, du mur à la table — Maison Aubertin couvre l'ensemble de la vie domestique avec la même exigence."
        features={UNIVERS}
        layout="2col"
      />

      <Callout
        eyebrow="OFFRE CONTRACT — NOUVEAU 2025"
        title="Maison Aubertin Contract — l'ensemblier complet du groupe"
        body="En 2025, Maison Aubertin a lancé son offre Contract en synergie avec Bellecour. Une offre clé-en-main pour les hôteliers, les résidences professionnelles, les promoteurs et les ensembliers : literie Bellecour, décoration et mobilier Maison Aubertin, design, livraison, pose et installation. Une seule équipe, un seul interlocuteur, deux marques aux savoir-faire complémentaires."
        cta={{
          label: "Découvrir l'offre Contract",
          href: "https://www.maison-aubertin.com",
          external: true,
        }}
        variant="mahogany"
      />

      <PortraitLarge image="/images/media/media-extra-1.jpg" alt="Univers Maison Aubertin" />

      <ManifesteQuote
        quote="L'art de vivre, ce n'est pas un style. C'est une attention. À la matière, au geste, à l'objet qu'on garde longtemps."
        author="MARINE BULLY"
        role="DIRECTION MAISON AUBERTIN"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          {
            eyebrow: "L'AUTRE MAISON",
            title: "La Maison Senso",
            body: "Notre maison historique, dédiée à la literie depuis 2010. Bellecour, Matelas Pour Tous, Olympe.",
            href: "/la-maison-senso",
          },
          {
            eyebrow: "TRANSPARENCE",
            title: "Notre doctrine d'achat",
            body: "Pays par pays, partenaire après partenaire — nous publions tout ce qui peut l'être.",
            href: "/doctrine-achat",
          },
          {
            eyebrow: "DIRECTION",
            title: "Marine Bully",
            body: "Découvrez celle qui incarne Maison Aubertin et son univers d'art de vivre.",
            href: "/notre-direction",
          },
        ]}
      />
    </>
  );
}
