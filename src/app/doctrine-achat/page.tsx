import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TextBlock } from "@/components/sections/TextBlock";
import { Cercle } from "@/components/sections/Cercle";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";

export const metadata: Metadata = {
  title: "Notre doctrine d'achat",
  description:
    "À l'heure où le secteur cache ses chaînes d'approvisionnement, nous publions la nôtre. Quatre cercles, chacun avec ses produits, ses pays, ses partenaires.",
};

const CERCLES = [
  {
    index: "01",
    title: "Ce que nous fabriquons",
    body:
      "L'essentiel de la literie du groupe est fabriqué dans notre usine de Vaulx-Milieu, en Isère. 6 600 m² d'atelier, 35 collaborateurs, 50 000 matelas par an. C'est ici que tout a commencé en 2010, et c'est ici que nous façonnons les matelas de toutes nos gammes — pour Bellecour, Matelas Pour Tous, la collection Olympe et une partie des matelas Maison Aubertin. Au-delà des matelas, nous fabriquons aussi certains de nos sommiers tapissiers, nos housses, et nous y broyons et recyclons l'intégralité de nos chutes de production.",
    detail:
      "Périmètre : matelas (toutes gammes, La Maison Senso et une partie de Maison Aubertin), sommiers tapissiers, housses, découpe mousse & recyclage. Lieu : Vaulx-Milieu, Isère.",
  },
  {
    index: "02",
    title: "Ce que nous co-fabriquons avec nos associés espagnols",
    body:
      "Une partie des matelas Maison Aubertin est produite en Espagne, chez des partenaires avec qui nous sommes associés depuis plus de quinze ans. Co-fabriquer signifie ici quelque chose de précis : ce ne sont pas des fournisseurs interchangeables, ce sont des partenaires de long terme. Nos associés espagnols disposent de machines de dernière génération sur certaines technologies de matelas hôteliers et art-de-vivre.",
    detail:
      "Périmètre : une partie des matelas Maison Aubertin. Origine : Espagne. Co-fabrication entre associés. Ancienneté : 15 ans+. Certifications : OEKO-TEX, CertiPUR. Visites : 2 à 3 fois par an.",
  },
  {
    index: "03",
    title: "Nos approvisionnements européens fidèles",
    body:
      "Pour les composants que nous ne fabriquons pas nous-mêmes, nous ne sommes pas des assembleurs opportunistes. Nous nous approvisionnons en Europe, chez des fournisseurs souvent fidèles depuis quinze ans ou plus — parfois depuis bien avant la fondation de Senso Pur. Cette fidélité n'est ni un dogme ni une nostalgie : c'est ce qui rend possible l'exigence. Un fournisseur qui sait qu'il sera encore notre fournisseur dans dix ans n'a aucune raison de tricher.",
    detail:
      "Mousses : France 60 % / Italie 40 %. Tissus & coutils : Portugal et Belgique. Ressorts : Espagne. Latex naturel : Belgique. Sommiers à lattes & têtes de lit : Belgique (CAT, +15 ans). Canapés : Pologne. Tissus complémentaires : Turquie.",
  },
  {
    index: "04",
    title: "Nos sélections artisanales internationales",
    body:
      "Pour certains produits Maison Aubertin — décoration, mobilier, pièces artisanales — nous ne fabriquons pas, nous sélectionnons. Nous travaillons avec un nombre restreint de partenaires en Inde, au Vietnam et en Chine, dans des pays où certains savoir-faire artisanaux n'ont aucun équivalent en Europe. Le choix de l'international n'est pas un choix de prix : c'est un choix de savoir-faire.",
    detail:
      "Mobilier, déco, pièces artisanales pour Maison Aubertin. Inde (depuis 2019, ébénisterie & ferronnerie), Vietnam (tissage & fibres naturelles), Chine (travail du métal). Sélection rigoureuse, partenaires de long terme.",
  },
];

export default function DoctrineAchat() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Nos engagements", href: "/engagements-rse" },
          { label: "Notre doctrine d'achat" },
        ]}
        eyebrow="NOTRE DOCTRINE D'ACHAT"
        title="Nous fabriquons ce que nous savons faire. Pour le reste, nous choisissons. Et nous le disons."
        subtitle="À l'heure où le secteur cache ses chaînes d'approvisionnement, nous publions la nôtre. Quatre cercles, chacun avec ses produits, ses pays, ses partenaires, et l'ancienneté de nos relations."
      />

      <TextBlock
        eyebrow="LE POURQUOI"
        title="Pourquoi nous publions ceci"
        body={`Quand on s'appelle Senso Pur et qu'on revendique la fabrication française, on doit dire ce qu'on fabrique vraiment, et ce qu'on ne fabrique pas. Ne rien dire serait mentir par omission.

Notre groupe réunit deux maisons. La Maison Senso, où la quasi-totalité de la literie est fabriquée intégralement à Vaulx-Milieu. Maison Aubertin, qui élargit notre offre vers le canapé, le mobilier et la décoration — des univers que nous ne maîtrisons pas tous industriellement, mais que nous choisissons avec rigueur. Cette doctrine met les deux dimensions au clair, sans ambiguïté.`}
        bg="soft"
      />

      <Cercle cercles={CERCLES} />

      <TextBlock
        eyebrow="NOTRE ENGAGEMENT DE PROXIMITÉ"
        title="Toujours plus près, quand c'est possible"
        body={`Cette doctrine n'est pas figée. Nous avons engagé une démarche d'achat responsable qui consiste, lorsque c'est pertinent, à privilégier des fabrications au plus proche de nos marchés.

Cette approche poursuit trois objectifs : réduire l'impact carbone lié au transport, favoriser des circuits plus courts, et contribuer au maintien des savoir-faire et de l'emploi en Europe. Quand un savoir-faire chinois ou vietnamien peut être retrouvé en Europe à qualité équivalente, nous étudions systématiquement la bascule.`}
      />

      <ManifesteQuote
        quote="Nous fabriquons ce que nous savons faire, en France et en Europe. Pour le reste, nous travaillons depuis des années avec des partenaires triés sur le volet — engagés, durables, fidèles. Nous ne changeons pas de fournisseur pour quelques centimes. Et nous le disons."
        author="LA DOCTRINE D'ACHAT SENSO PUR"
      />

      <TextBlock
        eyebrow="ENGAGEMENT DE TRANSPARENCE"
        title="Cette doctrine évolue. Nous la mettons à jour chaque année."
        body={`Une charte ne vaut que si elle est tenue. Cette page est revue chaque année. Si un partenaire change, nous le disons. Si une certification s'ajoute, nous la publions. Si quelque chose ne va pas, vous le saurez.

Vous pensez que nous oublions quelque chose, que nous nous trompons, ou que nous pourrions mieux faire ? Écrivez-nous. Cette doctrine est aussi une conversation. — Dernière mise à jour : Mai 2026 · Prochaine révision : Septembre 2027 · Fréquence : annuelle.`}
        bg="soft"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Le contexte complet"
        cards={[
          {
            eyebrow: "RSE",
            title: "Tous nos engagements",
            body: "Indicateurs chiffrés, actions concrètes, certifications EcoVadis et The Positive Company.",
            href: "/engagements-rse",
          },
          {
            eyebrow: "FABRICATION",
            title: "L'usine de Vaulx-Milieu",
            body: "Process, métiers, savoir-faire — au cœur du cercle 01.",
            href: "/notre-fabrication",
          },
          {
            eyebrow: "CONTACT",
            title: "Une question, une remarque",
            body: "Presse, partenaires, journalistes, citoyens curieux. Cette doctrine se discute.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
