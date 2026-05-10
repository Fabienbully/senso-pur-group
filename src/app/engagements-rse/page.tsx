import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PortraitLarge } from "@/components/sections/PortraitLarge";
import { TextBlock } from "@/components/sections/TextBlock";
import { FeaturesList } from "@/components/sections/FeaturesList";
import { ManifesteQuote } from "@/components/sections/ManifesteQuote";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { CERTIFICATIONS } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Engagements RSE",
  description:
    "Six référentiels exigeants, des mousses certifiées à 100%, des chutes valorisées en coussins et isolants. Notre engagement environnemental et social.",
};

const PILIERS_ENV = [
  { title: "Mousses 100% certifiées", body: "OEKO-TEX et CertiPUR sur toutes nos références — sans solvants, sans métaux lourds, traçabilité totale." },
  { title: "Chutes transformées",     body: "Aucune chute jetée. Elles deviennent coussins, isolants thermiques pour le bâtiment, ou matières secondaires." },
  { title: "Sourcing France priorisé", body: "Mousses, ressorts, tissus — nous documentons chaque pays et chaque ancienneté de relation. Voir doctrine d'achat." },
  { title: "Transports optimisés",     body: "Conditionnement sous vide ×4 sur les particuliers. Tournées hôtelières mutualisées." },
];

const PILIERS_SOCIAL = [
  { title: "Stabilité de l'emploi",  body: "Une partie de nos collaborateurs sont chez Senso Pur depuis l'ouverture en 2010." },
  { title: "Formation interne",      body: "Tutorat sur les postes techniques. La transmission métier passe par les anciens." },
  { title: "Sécurité au poste",      body: "Investissement régulier en EPI, ergonomie postes, audits trimestriels." },
  { title: "Inclusion",              body: "Postes adaptés, accueil de personnes en réinsertion en partenariat avec acteurs locaux." },
];

const RECONNAISSANCES = [
  { title: "EcoVadis Argent",        body: "Évaluation RSE multi-critères. Note 2026 dans le top 25% des entreprises évaluées." },
  { title: "The Positive Company",   body: "Communauté d'entreprises engagées sur l'impact environnemental et social." },
  { title: "La French Fab",          body: "Membre actif. Représentation de l'industrie française du sommeil." },
  { title: "PEFC",                   body: "Sourcing bois et matières dérivées issus de forêts gérées durablement." },
];

export default function EngagementsRse() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Le groupe" }, { label: "Engagements RSE" }]}
        eyebrow="ENGAGEMENTS"
        title="Nous assumons ce que nous fabriquons, et ce que nous achetons."
        subtitle="Six référentiels, des mousses certifiées à 100%, des chutes valorisées. Pas un argument marketing — une méthode."
        bgImage="/images/media/media-rse.jpg"
      />

      <PortraitLarge
        image="/images/media/media-rse-2.jpg"
        alt="Atelier RSE Senso Pur"
      />

      <TextBlock
        eyebrow="NOTRE APPROCHE"
        title="L'industrie française a un rôle climatique"
        body={`Fabriquer en France, c'est moins de transport, plus de transparence, et la possibilité de former une équipe sur la durée. C'est aussi une façon de tenir nos engagements : une usine que l'on peut visiter est une usine qui ne ment pas sur ses pratiques.

Nous ne prétendons pas être parfaits. Nous documentons nos limites — et nous publions notre doctrine d'achat pour que chaque pays, chaque partenaire, chaque ancienneté de relation soit lisible.`}
      />

      <PortraitLarge
        image="/images/media/media-rse-3.jpg"
        alt="Salariés Senso Pur en atelier"
      />

      <FeaturesList
        eyebrow="PILIER ENVIRONNEMENTAL"
        title="Quatre principes opérationnels"
        features={PILIERS_ENV}
        bg="soft"
      />

      <FeaturesList
        eyebrow="PILIER SOCIAL"
        title="Une équipe qui dure"
        features={PILIERS_SOCIAL}
      />

      <section className="sp-section bg-[var(--sp-bg-soft)]">
        <div className="sp-container">
          <FadeIn className="text-center mb-12">
            <p className="sp-eyebrow mb-4">SIX RÉFÉRENTIELS</p>
            <h2>Reconnaissances et certifications</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
            {CERTIFICATIONS.map((c, i) => (
              <FadeIn key={c.name} delay={i * 80}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.name}
                  title={c.name}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-[filter] duration-500"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FeaturesList
        eyebrow="DISTINCTIONS"
        title="Notre engagement, attesté"
        features={RECONNAISSANCES}
      />

      <ManifesteQuote
        quote="Notre meilleure preuve, c'est notre usine. Notre meilleure preuve, c'est qu'on peut la visiter."
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Lire l'intégralité de notre démarche"
        cards={[
          { eyebrow: "DOCTRINE", title: "Notre doctrine d'achat", body: "Pays par pays, partenaire par partenaire — nous publions notre cartographie sourcing.", href: "/doctrine-achat" },
          { eyebrow: "FABRICATION", title: "Visite d'usine", body: "6 600 m² à Vaulx-Milieu — sept étapes, sept machines, sept métiers.", href: "/notre-fabrication" },
          { eyebrow: "PRESSE", title: "Espace presse", body: "Pitch, retombées, kit média.", href: "/espace-presse" },
        ]}
      />
    </>
  );
}
