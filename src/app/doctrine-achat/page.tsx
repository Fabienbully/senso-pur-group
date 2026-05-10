import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TextBlock } from "@/components/sections/TextBlock";
import { Cercle } from "@/components/sections/Cercle";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";

export const metadata: Metadata = {
  title: "Doctrine d'achat",
  description:
    "Pays par pays, partenaire après partenaire, depuis combien d'années nous travaillons ensemble. Notre doctrine d'achat est publique.",
};

const CERCLES = [
  {
    index: "01",
    title: "Ce que nous fabriquons",
    body: "Toutes les opérations de fabrication finale — découpe mousse, couture housse, assemblage, matelassage, conditionnement — sont réalisées dans notre usine de Vaulx-Milieu, par nos équipes.",
    detail: "France — équipe interne — depuis 2010.",
  },
  {
    index: "02",
    title: "Ce que nous co-fabriquons",
    body: "Certaines pièces techniques (ressorts ensachés, mousses haute densité, tissus techniques) sont co-développées avec des partenaires industriels long-terme.",
    detail: "France et UE majoritaires — partenaires depuis 5 à 12 ans en moyenne.",
  },
  {
    index: "03",
    title: "Ce que nous sélectionnons",
    body: "Une partie des matières premières (latex, fibres naturelles, certains tissus déco) provient d'industriels que nous auditons mais avec qui nous ne co-développons pas.",
    detail: "Sourcing tracé — origine documentée par fournisseur, audit annuel.",
  },
  {
    index: "04",
    title: "Ce que nous certifions",
    body: "Tous nos produits portent OEKO-TEX et CertiPUR. Le sourcing est audité annuellement. EcoVadis Argent vérifie notre démarche RSE de manière indépendante.",
    detail: "Six référentiels — réévalués chaque année.",
  },
];

export default function DoctrineAchat() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Doctrine d'achat" }]}
        eyebrow="DOCTRINE — NOUVEAU"
        title="Pays par pays, partenaire par partenaire, depuis combien d'années nous travaillons ensemble."
        subtitle="Notre doctrine d'achat est désormais publique. Ce document n'est pas une promesse — c'est une cartographie."
      />

      <TextBlock
        eyebrow="POURQUOI PUBLIER CETTE DOCTRINE"
        title="La transparence sourcing n'est pas une option — c'est notre méthode"
        body={`Pendant longtemps, le secteur du sommeil a entretenu une opacité confortable. « Made in France » suffisait. Nous pensons que ce n'est plus suffisant.

Cette doctrine décrit, en quatre cercles, ce que nous fabriquons, ce que nous co-fabriquons, ce que nous sélectionnons, et ce que nous certifions. Elle reconnaît nos limites — certains intrants ne sont pas français, certaines opérations ne sont pas internalisables. Elle nomme nos partenaires, nos pays, nos anciennetés de relation.`}
      />

      <Cercle cercles={CERCLES} />

      <TextBlock
        eyebrow="LA PROXIMITÉ"
        title="Une fidélité qui se compte en années"
        body={`Nos partenaires industriels sont chez nous depuis 5 à 12 ans en moyenne. Plusieurs d'entre eux sont là depuis l'ouverture de l'usine en 2010.

Cette fidélité n'est pas un argument décoratif : elle est ce qui rend possible la qualité. Un fournisseur que l'on connaît depuis dix ans, c'est un fournisseur que l'on peut challenger sur les détails — et qui peut nous challenger en retour.`}
      />

      <ManifesteQuote
        quote="Nous ne fabriquons pas tout. Nous le disons. Et nous publions le reste."
      />

      <TextBlock
        eyebrow="RÉVISION"
        title="Cette doctrine est révisée chaque année"
        body={`Cette page est mise à jour annuellement, en mars, en cohérence avec notre revue EcoVadis et notre audit RSE interne. La version publique reflète l'état réel de notre sourcing.

Une question, une demande de précision sur un fournisseur, un doute ? Notre équipe RSE répond directement à press@senso-pur.com.`}
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Le contexte complet"
        cards={[
          { eyebrow: "RSE", title: "Engagements RSE", body: "Six référentiels, piliers env/social.", href: "/engagements-rse" },
          { eyebrow: "USINE", title: "Notre fabrication", body: "L'usine où tout converge.", href: "/notre-fabrication" },
          { eyebrow: "PRESSE", title: "Espace presse", body: "Pitch et retombées sur la doctrine.", href: "/espace-presse" },
        ]}
      />
    </>
  );
}
