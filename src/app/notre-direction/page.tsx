import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { Bio } from "@/components/sections/Bio";
import { TextBlock } from "@/components/sections/TextBlock";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { FABIEN, MARINE, HISTOIRE_FAMILLE } from "@/content/direction";

export const metadata: Metadata = {
  title: "Notre direction",
  description:
    "Fabien Bully a fondé Senso Pur en 2010 avec son père. Sa sœur Marine l'a rejoint en 2014, avant de fonder Maison Aubertin trois ans plus tard.",
};

export default function NotreDirection() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Notre direction" }]}
        eyebrow="NOTRE DIRECTION"
        title="Une famille à la tête du groupe."
        subtitle="Fabien Bully a fondé Senso Pur en 2010 avec son père. Sa sœur Marine l'a rejoint en 2014, avant de fonder Maison Aubertin trois ans plus tard. Trois générations de savoir-faire dans le textile et l'ameublement, deux dirigeants aujourd'hui à la tête du groupe — et une même conviction : on peut fabriquer en France, autrement, sans intermédiaire."
        bgImage="/images/media/media-direction-duo.jpg"
      />

      <PortraitLarge
        image="/images/media/media-direction-fabien.jpg"
        alt="Fabien Bully — fondateur et dirigeant"
        caption="Fabien Bully — fondateur et dirigeant du groupe Senso Pur"
      />

      <PortraitLarge
        image="/images/media/media-direction-duo.jpg"
        alt="Fabien et Marine Bully"
        caption="Fabien & Marine Bully — Direction du groupe Senso Pur"
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
        quote="Marine Bully prend la parole — Maison Aubertin, c'est l'art de vivre prolongeant le savoir-faire literie. Une vision, un cap — racontés à la première personne."
        author="LE MOT DE LA DIRECTRICE"
      />

      <TextBlock
        eyebrow={HISTOIRE_FAMILLE.eyebrow}
        title={HISTOIRE_FAMILLE.title}
        body={HISTOIRE_FAMILLE.body}
        bg="soft"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          {
            eyebrow: "L'ÉQUIPE",
            title: "35 personnes au quotidien",
            body: "Découvrez celles et ceux qui font tourner l'usine — ateliers, bureaux, terrain.",
            href: "/carrieres",
          },
          {
            eyebrow: "PRESSE",
            title: "Demander une interview",
            body: "Contact presse, biographies des dirigeants, kit média téléchargeable.",
            href: "/espace-presse",
          },
          {
            eyebrow: "CARRIÈRES",
            title: "Rejoindre le groupe",
            body: "Postes ouverts, culture, avantages collaborateurs, processus de recrutement.",
            href: "/carrieres",
          },
        ]}
      />
    </>
  );
}
