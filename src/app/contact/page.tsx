import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactAiguilleur } from "@/components/sections/ContactAiguilleur";
import { Coordonnees } from "@/components/sections/Coordonnees";
import { Formulaire } from "@/components/sections/Formulaire";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Selon ce que vous cherchez, le bon interlocuteur n'est pas le même. Senso Pur — Parc technologique de l'Isle, 40 rue Antoine Condorcet, 38090 Vaulx-Milieu.",
};

const CARDS = [
  {
    tag: "VOUS ÊTES PROFESSIONNEL",
    title: "Hôtelier, résidence, ensemblier",
    body: "Pour la literie, contactez Bellecour. Pour une offre Contract complète (literie + décoration + pose), contactez Maison Aubertin.",
    cta: "Bellecour Literie",
    href: "https://www.bellecour-literie.com",
    external: true,
  },
  {
    tag: "VOUS ÊTES PARTICULIER",
    title: "Acheter pour la maison",
    body: "Selon votre besoin, nous avons quatre destinations adaptées. Choisissez la marque qui correspond à votre projet.",
    cta: "La Maison Senso",
    href: "https://lamaisonsenso.com",
    external: true,
  },
  {
    tag: "VOUS ÊTES JOURNALISTE",
    title: "Demande presse",
    body: "Pour une interview de Fabien ou Marine Bully, une demande de visite de l'usine, ou un kit média : nous répondons sous 48 h.",
    cta: "press@senso-pur.com",
    href: "mailto:press@senso-pur.com",
  },
  {
    tag: "VOUS CHERCHEZ UN POSTE",
    title: "Candidature spontanée ou postes ouverts",
    body: "Découvrez nos métiers, nos avantages collaborateurs et nos postes ouverts. Candidatures spontanées bienvenues — nous lisons tout.",
    cta: "Voir nos postes ouverts",
    href: "/carrieres",
  },
  {
    tag: "VOUS ÊTES PARTENAIRE",
    title: "Partenariat ou demande institutionnelle",
    body: "Investisseurs, collectivités, fédérations, écoles, associations. Pour toute demande institutionnelle ou de partenariat.",
    cta: "partenariats@senso-pur.com",
    href: "mailto:partenariats@senso-pur.com",
  },
  {
    tag: "AUTRE DEMANDE",
    title: "Toute autre demande",
    body: "Une question qui ne rentre dans aucune des catégories précédentes ? Écrivez-nous, nous orienterons votre demande.",
    cta: "contact@senso-pur.com",
    href: "mailto:contact@senso-pur.com",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="CONTACT"
        title="Parlons-nous."
        subtitle="Selon ce que vous cherchez, le bon interlocuteur n'est pas le même. Pour gagner du temps — le vôtre comme le nôtre — commencez par identifier votre besoin."
      />

      <ContactAiguilleur
        eyebrow="VOTRE BESOIN"
        title="Le bon interlocuteur, du premier coup"
        cards={CARDS}
      />
      <Coordonnees />
      <Formulaire />
    </>
  );
}
