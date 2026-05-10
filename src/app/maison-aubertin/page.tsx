import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { Callout } from "@/components/sections/Callout";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";

export const metadata: Metadata = {
  title: "Maison Aubertin",
  description:
    "Maison Aubertin — l'art de vivre incarné par Marine Bully. Literie, canapés, mobilier, décoration. Offre Contract clé-en-main pour hôteliers.",
};

export default function MaisonAubertin() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos maisons", href: "/nos-maisons" }, { label: "Maison Aubertin" }]}
        eyebrow="ART DE VIVRE · DEPUIS 2017"
        title="Maison Aubertin — l'art de vivre, à hauteur de famille."
        subtitle="Marine Bully a créé Maison Aubertin en 2017. Une maison qui prolonge la literie vers la décoration, le canapé, le mobilier — tout ce qui compose un quotidien."
        bgImage="/images/media/media-maison-aubertin.jpg"
      />

      <PortraitLarge image="/images/media/media-maison-aubertin.jpg" alt="Maison Aubertin" />

      <TextBlock
        eyebrow="L'UNIVERS"
        title="La chambre, c'est plus qu'un lit"
        body={`Maison Aubertin est née d'une conviction de Marine : un matelas n'existe pas hors d'un univers. Il appelle un canapé, une lumière, une matière. La maison conçoit et sélectionne aujourd'hui literie, mobilier, linge de lit, décoration — pour un foyer cohérent.

L'esprit de la maison : matières naturelles, lignes apaisées, pièces qui durent. Une décoration qui ne se renouvelle pas chaque saison, mais qui se patine.`}
      />

      <Callout
        eyebrow="OFFRE CONTRACT — NOUVEAUTÉ MAI 2026"
        title="Un service clé-en-main pour les hôteliers et résidences"
        body="Maison Aubertin propose désormais une offre Contract : design, sourcing, livraison, pose, installation. Un seul interlocuteur du brief jusqu'à la mise en service."
        cta={{ label: "Échanger sur un projet Contract", href: "/contact" }}
        variant="mahogany"
      />

      <PortraitLarge image="/images/media/media-extra-1.jpg" alt="Maison Aubertin — collection" />

      <ManifesteQuote
        quote="L'art de vivre n'est pas un slogan. C'est un soin, un rythme, une présence aux choses qui composent un quotidien."
        author="Marine Bully"
        role="Direction Maison Aubertin"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Continuer la visite"
        cards={[
          { eyebrow: "MAISON", title: "La Maison Senso", body: "Notre maison historique de literie.", href: "/la-maison-senso" },
          { eyebrow: "USINE", title: "Notre fabrication", body: "L'usine où tout est fabriqué.", href: "/notre-fabrication" },
          { eyebrow: "CONTACT", title: "Échanger", body: "Pour un projet Contract ou une demande retail.", href: "/contact" },
        ]}
      />
    </>
  );
}
