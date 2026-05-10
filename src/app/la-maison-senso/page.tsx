import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { ChiffresCles } from "@/components/sections/ChiffresCles";
import { FadeIn } from "@/components/animations/FadeIn";

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

      <section className="sp-section bg-[var(--sp-bg-soft)]">
        <div className="sp-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <p className="sp-eyebrow mb-3">UNE MAISON, TROIS PUBLICS</p>
              <h2 className="mb-6">Une maison, trois publics</h2>
              <div className="space-y-4 text-[var(--sp-slate)] leading-relaxed text-lg">
                <p>
                  La Maison Senso est née en 2010 à Vaulx-Milieu, autour d&apos;une
                  conviction simple : on peut fabriquer en France des matelas qui durent,
                  sans renoncer à l&apos;accessibilité.
                </p>
                <p>
                  Le groupe a été fondé par Fabien Bully avec son père, qui cumulait
                  alors trente ans d&apos;expérience dans les matières premières de la
                  literie. Père et fils ont travaillé ensemble jusqu&apos;en 2020, année où
                  le père a pris une retraite bien méritée à 71 ans. Le savoir-faire,
                  lui, est resté.
                </p>
                <p>
                  Au fil des années, ce savoir-faire s&apos;est élargi. Des matelas
                  hôteliers de Bellecour aux matelas sur-mesure de Matelas Pour Tous, en
                  passant par la collection Olympe pour les sportifs — La Maison Senso a
                  su servir trois publics avec la même exigence de fabrication.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150} className="lg:col-span-6">
              <figure className="overflow-hidden rounded-[var(--sp-radius-lg)] bg-[var(--sp-obsidian)] aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/media/visuel-expertise-du-marche.jpg"
                  alt="L'expertise du marché — l'équipe Senso Pur dans l'atelier de Vaulx-Milieu"
                  className="w-full h-full object-cover"
                />
              </figure>
              <figcaption className="mt-3 text-xs text-[var(--sp-bronze)] tracking-wide">
                L&apos;expertise du marché — l&apos;équipe Senso Pur, atelier de Vaulx-Milieu
              </figcaption>
            </FadeIn>
          </div>
        </div>
      </section>

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
            watermark: "/images/brand/matelas-pour-tous-sigle.png",
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
