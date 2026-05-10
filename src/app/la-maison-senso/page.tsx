import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { ChiffresCles } from "@/components/sections/ChiffresCles";

export const metadata: Metadata = {
  title: "La Maison Senso",
  description:
    "Trois marques sous une même ombrelle, trois publics, un seul atelier — La Maison Senso porte la fabrication française depuis 2010.",
};

export default function LaMaisonSenso() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Nos maisons", href: "/nos-maisons" },
          { label: "La Maison Senso" },
        ]}
        eyebrow="NOTRE MAISON HISTORIQUE"
        title="La Maison Senso, 16 ans de literie fabriquée à Vaulx-Milieu."
        subtitle="Trois marques sous une même ombrelle, trois publics, un seul atelier. La Maison Senso est l'aînée du groupe — celle par qui tout a commencé en 2010, et celle qui porte aujourd'hui l'essentiel de notre fabrication française."
        bgImage="/images/media/media-maison-senso.jpg"
      />

      <PortraitLarge
        image="/images/media/media-maison-senso.jpg"
        alt="L'atelier — Vaulx-Milieu"
        caption="L'atelier — Vaulx-Milieu"
      />

      <TextBlock
        eyebrow="UNE MAISON, TROIS PUBLICS"
        title="Une maison, trois publics"
        body={`La Maison Senso est née en 2010 à Vaulx-Milieu, autour d'une conviction simple : on peut fabriquer en France des matelas qui durent, sans renoncer à l'accessibilité.

Le groupe a été fondé par Fabien Bully avec son père, qui cumulait alors trente ans d'expérience dans les matières premières de la literie. Père et fils ont travaillé ensemble jusqu'en 2020, année où le père a pris une retraite bien méritée à 71 ans. Le savoir-faire, lui, est resté.

Au fil des années, ce savoir-faire s'est élargi. Des matelas hôteliers de Bellecour aux matelas sur-mesure de Matelas Pour Tous, en passant par la collection Olympe pour les sportifs — La Maison Senso a su servir trois publics avec la même exigence de fabrication.`}
        bg="soft"
      />

      <CardsGrid
        eyebrow="TROIS MARQUES, TROIS MARCHÉS"
        title="Trois marques sous une même fabrication"
        cards={[
          {
            eyebrow: "MARQUE PHARE · B2B HÔTELLERIE · B2C HOME",
            title: "Bellecour Literie",
            body: "L'expertise hôtelière de Senso Pur — référence du secteur depuis trente ans, des centaines d'établissements équipés en France et plus de 1 000 clients professionnels accompagnés depuis 2021. Aujourd'hui aussi disponible chez les particuliers qui veulent dormir chez eux comme dans un hôtel.",
            href: "https://www.bellecour-literie.com",
            external: true,
            watermark: "/images/brand/bellecour-sigle.svg",
          },
          {
            eyebrow: "B2C · DIY · ÉCONOMIE CIRCULAIRE",
            title: "Matelas Pour Tous",
            body: "Le do-it-yourself sur mousse et tissus pour les particuliers. C'est aussi l'expression la plus aboutie de notre démarche circulaire : nous remoussons les canapés de nos clients pour leur donner une seconde vie.",
            href: "https://www.matelas-pour-tous.com/fr",
            external: true,
          },
          {
            eyebrow: "COLLECTION · PERFORMANCE SPORTIVE",
            title: "Olympe",
            body: "La performance par le sommeil récupérateur. Un matelas conçu avec et pour les sportifs, parce que la récupération nocturne est le facteur de performance le plus sous-estimé. Olympe est une collection de La Maison Senso, pensée comme un outil au service du corps.",
            href: "https://lamaisonsenso.com/pages/nos-marques",
            external: true,
          },
        ]}
      />

      <ChiffresCles />

      <ManifesteQuote
        quote="La Maison Senso, c'est l'usine qui devient maison. Trois marques, mais une seule équipe qui les fabrique toutes — ici, à Vaulx-Milieu."
        author="FABIEN BULLY"
        role="FONDATEUR"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          {
            eyebrow: "L'AUTRE MAISON",
            title: "Maison Aubertin",
            body: "L'art de vivre du groupe : literie, canapés, mobilier, décoration. Incarnée par Marine Bully.",
            href: "/maison-aubertin",
          },
          {
            eyebrow: "FABRICATION",
            title: "L'usine de Vaulx-Milieu",
            body: "Les coulisses, les métiers, le savoir-faire au cœur du groupe.",
            href: "/notre-fabrication",
          },
          {
            eyebrow: "DIRECTION",
            title: "Fabien et Marine Bully",
            body: "La famille à la tête du groupe.",
            href: "/notre-direction",
          },
        ]}
      />
    </>
  );
}
