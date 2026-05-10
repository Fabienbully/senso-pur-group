import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { FeaturesList } from "@/components/sections/FeaturesList";
import { TextBlock } from "@/components/sections/TextBlock";
import { Callout } from "@/components/sections/Callout";
import { CardsGrid } from "@/components/sections/CardsGrid";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Senso Pur recrute. Une équipe de 35 personnes, une usine de 6 600 m², 16 ans d'existence. Découvrez nos métiers, nos avantages, et postulez.",
};

const RAISONS = [
  { title: "Une industrie qui dure", body: "16 ans d'existence, croissance maîtrisée. Une partie de l'équipe est là depuis 2010." },
  { title: "Un site, une équipe",     body: "Tout le monde, tous les métiers, sur le même site à Vaulx-Milieu. Pas de silo." },
  { title: "Des métiers concrets",    body: "On voit le résultat de son travail. On peut le toucher. On en est fier." },
  { title: "La transmission",          body: "Tutorat sur les postes techniques. Formation interne par les anciens." },
];

const METIERS = [
  { title: "Découpeur·se numérique", body: "Programme et supervise les machines de découpe haute précision. Formation interne possible si fond mécanique." },
  { title: "Couturier·ère",           body: "Atelier housses. Travail à la chaîne et sur-mesure pour les commandes hôtelières." },
  { title: "Tapissier·ère",           body: "Geste de finition — bordures, capitonnage. Métier passion." },
  { title: "Matelassier·ère",         body: "Spécialiste matelassage. La signature visuelle de la maison." },
  { title: "Contrôleur·se qualité",  body: "Inspection systématique. Aucun matelas ne sort sans validation." },
  { title: "Cariste / expéditeur",    body: "Pilotage flux entre stockage et expédition." },
  { title: "Service après-vente",    body: "L'équipe la plus proche du client. Diagnostic, remplacement." },
];

const AVANTAGES = [
  { title: "Mutuelle haut de gamme",      body: "Prise en charge à 70% par l'entreprise." },
  { title: "Tickets restaurant",           body: "Prise en charge employeur 60%." },
  { title: "Prime ancienneté",             body: "Reconnaissance de la fidélité, indexée sur les années." },
  { title: "Aménagements ergonomiques",    body: "Investissement régulier en EPI et postes de travail." },
  { title: "Formation continue",           body: "Budget formation par collaborateur, axé technique métier." },
  { title: "Avantage produit",             body: "Tarif préférentiel sur l'ensemble des marques du groupe." },
];

export default function Carrieres() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Carrières" }]}
        eyebrow="REJOIGNEZ-NOUS"
        title="Faites votre métier — chez nous, on a le temps de bien le faire."
        subtitle="35 personnes, une usine en croissance, des métiers concrets et durables. Voici pourquoi vous pourriez nous rejoindre."
        bgImage="/images/media/media-carrieres-equipe.jpg"
      />

      <PortraitLarge image="/images/media/media-carrieres-equipe.jpg" alt="L'équipe Senso Pur" />

      <FeaturesList
        eyebrow="POURQUOI NOUS"
        title="Quatre raisons concrètes"
        features={RAISONS}
        layout="2col"
        bg="soft"
      />

      <PortraitLarge image="/images/media/media-carrieres-2.jpg" alt="Atelier" />

      <FeaturesList
        eyebrow="NOS MÉTIERS"
        title="Sept métiers, une équipe"
        features={METIERS}
        layout="2col"
      />

      <PortraitLarge image="/images/media/media-carrieres-3.jpg" alt="Atelier" />

      <FeaturesList
        eyebrow="AVANTAGES"
        title="Ce qui vient avec le poste"
        features={AVANTAGES}
        layout="3col"
        bg="soft"
      />

      <TextBlock
        eyebrow="VOUS HÉSITEZ ?"
        title="Pas besoin d'un poste ouvert pour nous écrire"
        body="Si votre profil croise un de nos métiers, ou même si vous voulez simplement venir voir l'usine, écrivez-nous. Nous lisons toutes les candidatures spontanées et nous répondons systématiquement."
      />

      <Callout
        eyebrow="POSTULER"
        title="Envoyez-nous votre candidature"
        body="CV + quelques lignes sur votre motivation. Pas besoin de lettre formelle. On préfère lire vrai."
        cta={{ label: "Postuler par email", href: "mailto:rh@senso-pur.com" }}
        variant="mahogany"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Comprendre où vous arriveriez"
        cards={[
          { eyebrow: "USINE", title: "Notre fabrication", body: "L'usine, les machines, les métiers en image.", href: "/notre-fabrication" },
          { eyebrow: "GROUPE", title: "Notre direction", body: "Qui pilote la maison.", href: "/notre-direction" },
          { eyebrow: "RSE", title: "Engagements", body: "Pourquoi nous travaillons comme ça.", href: "/engagements-rse" },
        ]}
      />
    </>
  );
}
