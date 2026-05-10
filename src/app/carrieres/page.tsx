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
    "35 personnes à Vaulx-Milieu, en Isère. Une famille à la tête, une usine au cœur, des marques en croissance. Si vous cherchez un travail qui se voit, qui se touche, et qui se mesure — vous êtes au bon endroit.",
};

const RAISONS = [
  {
    title: "Une fabrication intégrée, pas une coquille marketing",
    body: "Quand vous travaillez chez Senso Pur, vous voyez le résultat de votre travail. Les matelas que vous fabriquez ou accompagnez sortent chaque jour de l'atelier de Vaulx-Milieu. Pas de production sous-traitée à 8 000 km. L'industrie, le vrai, à 30 minutes de Lyon.",
  },
  {
    title: "Une PME familiale qui ne se prend pas pour une multinationale",
    body: "Senso Pur est dirigée par Fabien et Marine Bully. Frère et sœur. Quand vous arrivez, vous les rencontrez. Quand vous avez un problème, vous savez à qui parler. Quand l'entreprise gagne, vous gagnez aussi — c'est le sens de la prime d'intéressement à laquelle 100 % des collaborateurs participent.",
  },
  {
    title: "Un cap clair, des engagements publics",
    body: "Bilan carbone réalisé, médaille EcoVadis Argent, partenariat depuis 15 ans avec un centre d'apprentissage par le travail employant des personnes en situation de handicap, ferme photovoltaïque, recyclage intégral des chutes de mousse.",
  },
  {
    title: "Un projet en croissance, des marques en mouvement",
    body: "La Maison Senso et ses trois marques (Bellecour, Matelas Pour Tous, Olympe), Maison Aubertin et son nouvel univers art de vivre — le groupe a doublé d'effectifs en cinq ans. Un projet qui avance.",
  },
];

const METIERS = [
  {
    title: "Métiers industriels",
    body: "Le cœur de notre activité. Découpeurs et opérateurs machines (découpe numérique, machines verticales, encolleuse, broyeuse), couturières en atelier de confection, tapissiers pour le matelassage et l'habillage des sommiers.",
  },
  {
    title: "Qualité et logistique",
    body: "Les garants de la promesse client. Responsables qualité (contrôle entrant et produit fini), magasiniers (gestion des 5 200 m² de stockage), équipe logistique (expéditions France et Europe), service retour.",
  },
  {
    title: "Achats et relations fournisseurs",
    body: "Les architectes de notre doctrine d'achat. L'équipe achats sélectionne, négocie et accompagne les partenaires fournisseurs en France, en Europe, et à l'international (Inde, Vietnam, Pologne).",
  },
  {
    title: "Commerce et marketing",
    body: "Les ambassadeurs des marques. Équipes commerciales B2B (hôteliers, ensembliers Contract) et B2C (marketplaces, sites de marques), équipes marketing (contenus, sites, réseaux sociaux).",
  },
  {
    title: "Fonctions support",
    body: "Les colonnes vertébrales de l'entreprise. Direction administrative et financière, ressources humaines, IT, juridique. Polyvalence demandée — chez Senso Pur, on n'est pas dans des silos.",
  },
];

const AVANTAGES = [
  { title: "Rémunération et participation", body: "Prime d'intéressement (100 % des collaborateurs), plan d'épargne entreprise (PEE) avec abondement, tickets-restaurants, chèques cadeaux à chaque anniversaire." },
  { title: "Santé et prévoyance", body: "Mutuelle d'entreprise mise à jour en 2026 — couverture renforcée. Prévoyance prise en charge. Cours de sport entièrement financés sur le site. Salle de repos." },
  { title: "Équilibre vie pro / vie perso", body: "Télétravail possible pour les fonctions qui le permettent. Flexibilité des horaires adaptée aux contraintes familiales. Covoiturage facilité. Borne de recharge VE." },
  { title: "Développement professionnel", body: "Plan de formation structuré. Sensibilisation aux enjeux climatiques (Fresque du Climat). Possibilités de mobilité interne entre les marques." },
  { title: "Petites attentions qui changent tout", body: "Un matelas Senso Pur offert au terme de la première année. Un livret d'accueil personnalisé pour chaque nouvelle recrue. Espace de pause équipé." },
];

export default function Carrieres() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Carrières" }]}
        eyebrow="CARRIÈRES"
        title="Travailler chez Senso Pur, c'est rejoindre une PME industrielle française qui fabrique vraiment, qui respecte ses équipes, et qui a un cap clair."
        subtitle="35 personnes à Vaulx-Milieu, en Isère. Une famille à la tête, une usine au cœur, des marques en croissance. Si vous cherchez un travail qui se voit, qui se touche, et qui se mesure — vous êtes au bon endroit."
        bgImage="/images/media/media-carrieres-equipe.jpg"
      />

      <PortraitLarge
        image="/images/media/media-carrieres-equipe.jpg"
        alt="L'équipe Senso Pur — Vaulx-Milieu, Isère"
        caption="L'équipe Senso Pur — Vaulx-Milieu, Isère"
      />

      <FeaturesList
        eyebrow="POURQUOI NOUS"
        title="Quatre raisons de nous rejoindre"
        features={RAISONS}
        layout="2col"
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-carrieres-2.jpg"
        alt="Au quotidien dans les ateliers"
        caption="Au quotidien dans les ateliers — convivialité et savoir-faire"
      />

      <FeaturesList
        eyebrow="LES MÉTIERS"
        title="Les métiers qui font Senso Pur"
        intro="De l'atelier à la direction, de la couture au marketing — voici les familles de métiers qui composent notre équipe."
        features={METIERS}
        layout="2col"
      />

      <PortraitLarge
        image="/images/media/media-carrieres-3.jpg"
        alt="Une PME familiale qui assume ce qu'elle fabrique"
        caption="Une PME familiale qui assume ce qu'elle fabrique"
      />

      <FeaturesList
        eyebrow="CONCRÈTEMENT"
        title="Ce que nous proposons à nos collaborateurs"
        intro="Pas de charabia RH. Voici ce que vous trouverez vraiment en arrivant."
        features={AVANTAGES}
        layout="3col"
        bg="soft"
      />

      <TextBlock
        eyebrow="UNE QUESTION HONNÊTE"
        title="Vous hésitez ?"
        body={`Une PME de 35 personnes en Isère, ce n'est pas pour tout le monde. Si vous cherchez les codes corporate d'un grand groupe, le télétravail à 100 %, ou un environnement où chaque mission est ultra-spécialisée — il y a peut-être un meilleur endroit pour vous.

Mais si vous voulez voir le résultat de votre travail, comprendre comment marche un produit de bout en bout, parler tous les jours avec les personnes qui le fabriquent, et participer à un projet qui a un cap : Senso Pur peut être ce que vous cherchez.`}
      />

      <Callout
        eyebrow="POSTULER"
        title="Envoyez-nous votre candidature"
        body="CV + quelques lignes sur votre motivation. Pas besoin de lettre formelle. On préfère lire vrai."
        cta={{ label: "Postuler par email", href: "mailto:recrutement@senso-pur.com" }}
        variant="mahogany"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Comprendre où vous arriveriez"
        cards={[
          { eyebrow: "L'OUTIL", title: "Visiter notre usine", body: "Les machines, les étapes, les coulisses de Vaulx-Milieu.", href: "/notre-fabrication" },
          { eyebrow: "LE CAP", title: "Nos engagements RSE", body: "Le détail de nos engagements environnementaux et sociaux.", href: "/engagements-rse" },
          { eyebrow: "L'ÉQUIPE", title: "Fabien et Marine Bully", body: "La famille à la tête du groupe — vos futurs interlocuteurs.", href: "/notre-direction" },
        ]}
      />
    </>
  );
}
