import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactAiguilleur } from "@/components/sections/ContactAiguilleur";
import { Coordonnees } from "@/components/sections/Coordonnees";
import { Formulaire } from "@/components/sections/Formulaire";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Senso Pur — 40 rue Antoine Condorcet, 38090 Vaulx-Milieu. Tél. 04 74 07 33 51. Aiguilleur de contact selon votre profil : presse, hôtelier, candidat, partenaire.",
};

const CARDS = [
  {
    tag: "HÔTELIER · PROJET PRO",
    title: "Bellecour Literie",
    body: "Notre marque hôtellerie. Sur-mesure, livraison, installation, SAV.",
    cta: "bellecour-literie.com",
    href: "https://bellecour-literie.com",
    external: true,
  },
  {
    tag: "PRESSE",
    title: "Espace presse",
    body: "Pitch, retombées, kit média et contacts dédiés journalistes.",
    cta: "Voir l'espace presse",
    href: "/espace-presse",
  },
  {
    tag: "CANDIDAT",
    title: "Carrières",
    body: "Nos métiers, nos avantages, et le formulaire de candidature.",
    cta: "Postuler",
    href: "/carrieres",
  },
  {
    tag: "SAV",
    title: "Service après-vente",
    body: "Pour toute question sur un produit déjà acheté.",
    cta: "sav@senso-pur.com",
    href: "mailto:sav@senso-pur.com",
  },
  {
    tag: "PARTICULIER",
    title: "Sites des marques",
    body: "Les achats particuliers se font sur les sites des marques du groupe.",
    cta: "Voir nos maisons",
    href: "/nos-maisons",
  },
  {
    tag: "AUTRE",
    title: "Demande générale",
    body: "Pour toute autre demande, utilisez le formulaire ci-dessous.",
    cta: "Aller au formulaire",
    href: "#formulaire",
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="CONTACT"
        title="Avant de nous écrire — choisissez le bon point d'entrée."
        subtitle="Selon votre demande, l'interlocuteur n'est pas le même. Cela nous permet de vous répondre vite, et bien."
      />

      <ContactAiguilleur cards={CARDS} />
      <Coordonnees />
      <Formulaire />
    </>
  );
}
