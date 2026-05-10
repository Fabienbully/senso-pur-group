import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TextBlock } from "@/components/sections/TextBlock";
import { ChiffresCles } from "@/components/sections/ChiffresCles";
import { FeaturesList } from "@/components/sections/FeaturesList";
import { Callout } from "@/components/sections/Callout";
import { ContactAiguilleur } from "@/components/sections/ContactAiguilleur";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Espace presse",
  description:
    "Senso Pur — pitch, retombées presse, kit média, contacts journalistes. Industriel français du sommeil depuis 2010.",
};

const RETOMBEES = [
  { title: "Les Échos · 2025", body: "Sur la doctrine d'achat publique de Senso Pur — un précédent pour l'industrie textile française." },
  { title: "Maison & Travaux · 2025", body: "Reportage usine de Vaulx-Milieu — l'industrie qu'on peut visiter." },
  { title: "Stratégies · 2024",   body: "Maison Aubertin — comment Marine Bully repositionne la marque sur l'art de vivre." },
  { title: "L'Hôtellerie Restauration · 2024", body: "Bellecour Literie — la marque hôtelière de Senso Pur passe en offre Contract." },
  { title: "Le Dauphiné · 2023",  body: "Senso Pur, l'industriel familial qui irrigue l'écosystème textile de l'Isère." },
  { title: "BFM Business · 2022", body: "Interview Fabien Bully — Entrepreneur de l'année 2019 trois ans après." },
];

const DISTINCTIONS = [
  { title: "Entrepreneur de l'année 2019", body: "Région Auvergne-Rhône-Alpes — Fabien Bully." },
  { title: "EcoVadis Médaille Argent",     body: "Top 25% des entreprises évaluées sur la performance RSE." },
  { title: "La French Fab — membre actif", body: "Représentation de l'industrie française du sommeil." },
  { title: "The Positive Company",         body: "Communauté d'entreprises engagées." },
];

export default function EspacePresse() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Espace presse" }]}
        eyebrow="ESPACE PRESSE"
        title="Senso Pur, l'industriel français du sommeil — depuis 2010."
        subtitle="Pitch, retombées, kit média, contacts. Un seul interlocuteur dédié, une réponse sous 24h."
      />

      <TextBlock
        eyebrow="PITCH"
        title="Une famille, deux maisons, un savoir-faire"
        body={`Senso Pur a été fondé en 2010 par Fabien Bully avec son père. La maison fabrique 50 000 matelas par an dans son usine de Vaulx-Milieu (Isère, 6 600 m², 35 collaborateurs). Marine Bully, sa sœur, l'a rejoint en 2014 puis a créé Maison Aubertin en 2017 — une seconde maison qui prolonge la literie vers l'art de vivre.

Le groupe distribue ses produits en D2C (sites de marques), B2B2C (marketplaces : La Redoute, Veepee, Maisons du Monde, BUT, Amazon) et B2B (hôtellerie : Villa Maïa, Le Claridge, Fraser Suites, Belambra, Huttopia, VVF). Six certifications RSE attestent de la démarche : OEKO-TEX, CertiPUR, EcoVadis Argent, The Positive Company, French Fab, PEFC.

Mai 2026 : publication de la doctrine d'achat — pays par pays, partenaire par partenaire — un précédent dans le secteur du sommeil.`}
      />

      <ChiffresCles />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container">
          <FadeIn className="mb-12">
            <p className="sp-eyebrow mb-3">RETOMBÉES PRESSE</p>
            <h2>Ils ont parlé de nous</h2>
          </FadeIn>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {RETOMBEES.map((r, i) => (
              <FadeIn key={r.title} delay={i * 70} as="li">
                <article className="border-t border-[var(--sp-bronze-soft)]/40 pt-5">
                  <h3 className="text-[var(--sp-mahogany)] mb-2" style={{ fontSize: "1.2rem" }}>
                    {r.title}
                  </h3>
                  <p className="text-[var(--sp-slate)] leading-relaxed text-sm">{r.body}</p>
                </article>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <FeaturesList
        eyebrow="DISTINCTIONS"
        title="Reconnaissances institutionnelles"
        features={DISTINCTIONS}
        bg="soft"
      />

      <Callout
        eyebrow="KIT MÉDIA"
        title="Un kit complet à votre disposition"
        body="Logos haute définition, photos d'usine, portraits Fabien & Marine, fiche identité du groupe, vidéo manifeste 90 sec. Disponible sur demande à press@senso-pur.com."
        cta={{ label: "Demander le kit média", href: "mailto:press@senso-pur.com" }}
        variant="obsidian"
      />

      <ContactAiguilleur
        eyebrow="VOTRE DEMANDE"
        title="Contacts presse"
        cards={[
          {
            tag: "INTERVIEW · USINE",
            title: "Fabien Bully · CEO",
            body: "Pour les sujets industrie, stratégie, sourcing, RSE.",
            cta: "press@senso-pur.com",
            href: "mailto:press@senso-pur.com",
          },
          {
            tag: "INTERVIEW · ART DE VIVRE",
            title: "Marine Bully · Direction Aubertin",
            body: "Pour les sujets décoration, art de vivre, offre Contract.",
            cta: "press@senso-pur.com",
            href: "mailto:press@senso-pur.com",
          },
          {
            tag: "VISITE D'USINE",
            title: "Sur rendez-vous",
            body: "L'usine de Vaulx-Milieu se visite. Sur rendez-vous, encadré.",
            cta: "Demander une visite",
            href: "mailto:press@senso-pur.com",
          },
        ]}
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Le contexte complet"
        cards={[
          { eyebrow: "GROUPE", title: "Notre direction", body: "Bios Fabien & Marine.", href: "/notre-direction" },
          { eyebrow: "USINE", title: "Notre fabrication", body: "L'usine de Vaulx-Milieu.", href: "/notre-fabrication" },
          { eyebrow: "DOCTRINE", title: "Doctrine d'achat", body: "Notre cartographie sourcing.", href: "/doctrine-achat" },
        ]}
      />
    </>
  );
}
