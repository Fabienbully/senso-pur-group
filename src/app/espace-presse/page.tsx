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
    "Senso Pur, vu par la presse — pitch, retombées, kit média, contacts journalistes. Industrie française, RSE, entrepreneuriat familial.",
};

const RETOMBEES = [
  { title: "Le Progrès — Senso Pur", body: "Reportage régional sur le groupe et son ancrage en Isère. (16 novembre 2021)" },
  { title: "Le Monde du Camping-Car — Matelas Pour Tous", body: "Focus sur la marque Matelas Pour Tous et le sur-mesure pour les véhicules de loisirs. (Juillet 2024)" },
  { title: "Le Courrier du Meuble", body: "Présentation du groupe dans la presse spécialisée ameublement. (Octobre 2024)" },
  { title: "Ma Santé — Publi-reportage", body: "Publi-reportage autour de la qualité du sommeil et du savoir-faire literie Senso Pur. (Décembre 2025)" },
  { title: "Le Messager Savoyard", body: "Publireportage régional autour de Senso Pur. (Juin 2025)" },
  { title: "Bref Eco — Portrait Fabien Bully", body: "Portrait du dirigeant et présentation de la stratégie de croissance. (13 septembre 2022)" },
  { title: "Bref Eco — Levée de fonds Senso Pur", body: "Annonce de la première levée de fonds du groupe, avec un objectif de doublement du chiffre d'affaires en cinq ans. (Août 2022)" },
  { title: "Le Journal des Entreprises — Déménagement en Isère", body: "Article sur le déménagement vers la nouvelle usine de Vaulx-Milieu et le modèle du groupe. (5 novembre 2019)" },
  { title: "Bref Eco — Déménagement Senso Pur", body: "Annonce du déménagement vers Vaulx-Milieu, accompagné de cinq embauches. (2019)" },
];

const DISTINCTIONS = [
  { title: "Prix de l'entrepreneur de l'année 2019", body: "Fabien Bully a été nommé pour le Prix de l'entrepreneur de l'année 2019, distinction qui salue les dirigeants français portant un projet à fort potentiel de croissance et d'innovation." },
  { title: "Membre de La French Fab", body: "Senso Pur est référencée comme PME industrielle française au sein de La French Fab, mouvement porté par Bpifrance qui rassemble 4 000+ entreprises industrielles." },
  { title: "Médaille EcoVadis Argent", body: "Médaille Argent EcoVadis, qui place Senso Pur dans le top 25 % des entreprises évaluées sur quatre piliers : environnement, social et droits humains, éthique, achats responsables." },
  { title: "The Positive Company (66/100)", body: "Score de 66/100 au label The Positive Company, qui évalue l'impact global d'une entreprise sur ses parties prenantes." },
  { title: "Indice Maturité Climat Bpifrance B+", body: "Note B+ à l'Indice Maturité Climat Bpifrance, soit au-dessus de la moyenne du secteur (C+)." },
];

export default function EspacePresse() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Presse" }]}
        eyebrow="ESPACE PRESSE"
        title="Senso Pur, vu par la presse — et ce qu'il faut savoir pour en parler."
        subtitle="Vous écrivez sur l'industrie française, la RSE, l'entrepreneuriat familial, ou la literie. Voici les retombées presse récentes, les chiffres-clés du groupe, le kit média téléchargeable, et les contacts directs."
      />

      <TextBlock
        eyebrow="LE GROUPE EN 30 SECONDES"
        title="Senso Pur en cinq lignes"
        body="Senso Pur est un fabricant français de literie et d'art de vivre, fondé en 2010 par la famille Bully. Le groupe est implanté à Vaulx-Milieu (Isère), où il fabrique l'essentiel de ses produits. Il regroupe deux maisons (La Maison Senso et Maison Aubertin) et plusieurs marques (Bellecour Literie, Matelas Pour Tous, Olympe). Présidé par Fabien Bully, en codirection avec Marine Bully."
        bg="soft"
      />

      <ChiffresCles />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container">
          <FadeIn className="mb-12">
            <p className="sp-eyebrow mb-3">ILS EN PARLENT</p>
            <h2>Senso Pur dans la presse</h2>
            <p className="text-[var(--sp-slate)] mt-4 max-w-2xl">
              Une sélection d&apos;articles parus sur le groupe, ses dirigeants et son projet.
            </p>
          </FadeIn>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {RETOMBEES.map((r, i) => (
              <FadeIn key={r.title} delay={i * 60} as="li">
                <article className="border-t border-[var(--sp-bronze-soft)]/40 pt-5">
                  <h3 className="text-[var(--sp-mahogany)] mb-2" style={{ fontSize: "1.15rem" }}>
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
        title="Nos distinctions et reconnaissances"
        features={DISTINCTIONS}
        layout="2col"
        bg="soft"
      />

      <Callout
        eyebrow="DOSSIER DE PRESSE"
        title="À télécharger"
        body="Document officiel pour vos articles, dossiers et publications. Pour des visuels HD ou des chiffres complémentaires, écrivez à press@senso-pur.com."
        cta={{ label: "Demander le kit média", href: "mailto:press@senso-pur.com" }}
        variant="obsidian"
      />

      <ContactAiguilleur
        eyebrow="CONTACT PRESSE"
        title="Une question, un sujet, une demande d'interview ?"
        cards={[
          {
            tag: "EMAIL DÉDIÉ",
            title: "press@senso-pur.com",
            body: "Réponse sous 48 h ouvrées garantie. Interview Fabien et/ou Marine Bully, visite de l'usine (sur RDV), demande de chiffres ou visuels HD.",
            cta: "Écrire à la presse",
            href: "mailto:press@senso-pur.com",
          },
          {
            tag: "TÉLÉPHONE",
            title: "04 74 07 33 51",
            body: "Standard de l'usine. Pour les sollicitations urgentes en heures ouvrées.",
            cta: "Appeler",
            href: "tel:+33474073351",
          },
          {
            tag: "L'ÉQUIPE",
            title: "L'équipe communication",
            body: "Une question, un sujet, une demande d'interview ? Notre équipe communication centralise les demandes et oriente vers le bon interlocuteur.",
            cta: "press@senso-pur.com",
            href: "mailto:press@senso-pur.com",
          },
        ]}
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Le contexte complet"
        cards={[
          {
            eyebrow: "LES DIRIGEANTS",
            title: "Fabien et Marine Bully",
            body: "Les biographies complètes des dirigeants, avec photos et citations.",
            href: "/notre-direction",
          },
          {
            eyebrow: "LE FOND",
            title: "Nos engagements RSE",
            body: "Tous les chiffres, labels et engagements vérifiables du groupe.",
            href: "/engagements-rse",
          },
          {
            eyebrow: "L'EXCLUSIVITÉ",
            title: "Notre doctrine d'achat",
            body: "La transparence radicale sur notre sourcing — un sujet pour un papier.",
            href: "/doctrine-achat",
          },
        ]}
      />
    </>
  );
}
