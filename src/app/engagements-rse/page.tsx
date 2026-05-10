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
  title: "Nos engagements",
  description:
    "Bilan carbone, ferme photovoltaïque, recyclage intégral des chutes, partenariat avec un centre d'apprentissage par le travail. Nous publions ce que nous faisons.",
};

const PILIERS_ENV = [
  {
    index: "3 940 t",
    title: "Bilan carbone et trajectoire",
    body:
      "Empreinte carbone 2024 mesurée sur les scopes 1, 2 et 3 avec Bpifrance Décarbon'Action : 3 940 tonnes équivalent CO₂. Trajectoire publique : −2,5 % par an, soit −12,5 % sur 5 ans, neutralité visée à horizon 2035.",
  },
  {
    index: "PV",
    title: "Énergie et bâtiment",
    body:
      "Usine pensée dès 2019 pour la sobriété énergétique : isolation renforcée, éclairage naturel, LED basse consommation. Ferme photovoltaïque opérationnelle sur le terrain de l'usine, contrat d'approvisionnement énergie verte.",
  },
  {
    index: "100%",
    title: "Déchets et économie circulaire",
    body:
      "Toutes nos chutes de mousse sont transformées sur place : flocons pour coussins, croûtes pour isolants thermiques. Aucune chute ne quitte l'usine sans avoir été transformée. Réduction de plus de 70 % des déchets industriels banals.",
  },
  {
    index: "OEKO",
    title: "Matières premières et certifications",
    body:
      "Toutes nos mousses sont certifiées CertiPUR ou OEKO-TEX. 100 % de nos références produits sont OEKO-TEX. Fournisseurs européens fidèles, certains depuis avant la fondation de Senso Pur.",
  },
  {
    index: "÷3",
    title: "Logistique optimisée",
    body:
      "Le transport représente 14 % de notre empreinte carbone. Roulé-compressé adopté dès 2013 (volume divisé par 3). Borne de recharge VE sur le parking, flotte hybride/électrique en cours de bascule.",
  },
];

const SOCIAL = [
  {
    title: "Le collaborateur au cœur",
    body:
      "Prime d'intéressement (100 % des collaborateurs associés aux résultats), tickets-restaurants, espace de pause équipé, plan d'épargne entreprise, chèques cadeaux à chaque anniversaire, cours de sport financés sur site, flexibilité des horaires, livret d'accueil personnalisé.",
  },
  {
    title: "Inclusion et handicap",
    body:
      "Depuis plus de 15 ans, partenariat industriel avec un centre d'apprentissage par le travail (CAT) belge employant plus de 18 personnes en situation de handicap, qui fabrique nos sommiers à lattes et nos têtes de lit.",
  },
  {
    title: "Ancrage local et soutien associatif",
    body:
      "Acteur de la vie locale en Isère : don d'environ 100 matelas par an à Emmaüs et Notre-Dame des sans-abris. Soutien d'associations culturelles, sportives, caritatives. Implication dans le tissu économique local.",
  },
  {
    title: "Sensibilisation interne",
    body:
      "En 2024, 18 collaborateurs ont participé à une Fresque du Climat — plus de la moitié de l'effectif. RSE représentée au COMEX par un membre dédié. Pilotage transverse (achats, ADV, production, RH).",
  },
];

const RECONNAISSANCES = [
  {
    title: "EcoVadis — Médaille Argent",
    body:
      "Évaluation de référence sur la performance RSE des entreprises (100 000+ entreprises évaluées dans le monde). Top 25 % sur quatre piliers : environnement, social et droits humains, éthique, achats responsables.",
  },
  {
    title: "The Positive Company — 66/100",
    body:
      "Label exigeant qui évalue l'impact global d'une entreprise sur ses parties prenantes — collaborateurs, clients, fournisseurs, environnement, communautés.",
  },
  {
    title: "Indice Maturité Climat Bpifrance — B+",
    body:
      "Évaluation Bpifrance sur la solidité de la démarche climat des entreprises françaises. Note B+ au-dessus de la moyenne du secteur (C+).",
  },
  {
    title: "OEKO-TEX Standard 100",
    body:
      "L'intégralité de nos références produits est certifiée OEKO-TEX Standard 100, le référentiel mondial sur l'absence de substances nocives dans les textiles.",
  },
  {
    title: "CertiPUR",
    body:
      "Toutes nos mousses sont certifiées CertiPUR — le standard européen sur la qualité, la sécurité et la performance environnementale des mousses polyuréthane.",
  },
  {
    title: "La French Fab",
    body:
      "Membre de La French Fab, le mouvement qui réunit l'industrie française autour d'une bannière commune. PME industrielle française, 35 personnes, 50 000 matelas par an.",
  },
  {
    title: "PEFC",
    body:
      "Bois et matières d'origine forestière issus de forêts gérées durablement. Chaîne de traçabilité auditée, depuis l'abattage jusqu'au produit fini.",
  },
];

const TRAJECTOIRE = [
  {
    index: "2026 → 2030",
    title: "Court terme — 3 à 5 ans",
    body:
      "Réduire les émissions de gaz à effet de serre de 12,5 % sur 5 ans (−2,5 % / an). Mesurer le poids carbone de chaque matière première achetée. Optimiser consommations d'énergie, fluides et déchets. Optimiser les modes de livraison. Sensibiliser et former l'écosystème externe. Structurer une politique d'achat responsable.",
  },
  {
    index: "2030 → 2035",
    title: "Moyen terme — 10 ans",
    body:
      "Atteindre la neutralité carbone à horizon 2035. Évaluer 100 % de nos fournisseurs sur leurs pratiques climat et environnement. Repenser 100 % de nos matelas selon les principes d'éco-conception. Cartographier précisément le scope 3 et établir un plan de réduction ciblée. Déployer une logistique bas carbone.",
  },
];

export default function EngagementsRse() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos engagements" }]}
        eyebrow="NOS ENGAGEMENTS"
        title="Nos engagements ne sont pas un slogan. Ce sont des chiffres, des labels, et un cap."
        subtitle="Bilan carbone, ferme photovoltaïque, recyclage intégral des chutes, partenariat avec un centre d'apprentissage par le travail employant des personnes en situation de handicap. Nous publions ce que nous faisons, et ce que nous ne faisons pas encore."
        bgImage="/images/media/media-rse.jpg"
      />

      <TextBlock
        eyebrow="01 · NOTRE APPROCHE"
        title="Pourquoi nous publions tout cela"
        body={`Une démarche RSE n'a de valeur que si elle est sincère, mesurée et publique. Sans mesure, c'est du marketing. Sans publication, c'est de la communication interne. Sans sincérité, c'est du greenwashing.

Chez Senso Pur, nous avons fait le choix de la transparence radicale. Nous publions notre bilan carbone détaillé. Nous publions notre doctrine d'achat avec les pays et les anciennetés de nos partenaires. Nous publions nos labels et leurs niveaux exacts. Nous publions ce que nous faisons bien, et ce que nous devons encore améliorer.`}
        bg="soft"
      />

      <PortraitLarge
        image="/images/media/media-rse-2.jpg"
        alt="Économie circulaire — chutes de mousse transformées sur place"
        caption="Économie circulaire — chutes de mousse transformées sur place"
      />

      <FeaturesList
        eyebrow="02 · ENVIRONNEMENT"
        title="Cinq piliers environnementaux"
        intro="De la matière première à la fin de vie du produit, voici comment nous mesurons et réduisons notre impact."
        features={PILIERS_ENV}
        layout="2col"
      />

      <PortraitLarge
        image="/images/media/media-rse-3.jpg"
        alt="Engagement humain — 35 collaborateurs, partenariats inclusion"
        caption="Engagement humain — 35 collaborateurs, partenariats inclusion"
      />

      <FeaturesList
        eyebrow="03 · SOCIAL"
        title="Quatre engagements humains"
        features={SOCIAL}
        layout="2col"
        bg="soft"
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <p className="sp-eyebrow mb-3">04 · RECONNAISSANCES</p>
            <h2>Sept reconnaissances officielles, indépendantes</h2>
            <p className="text-[var(--sp-slate)] mt-4">
              Parce qu&apos;on ne peut pas s&apos;auto-évaluer sur ces sujets — labels,
              certifications et référentiels qui attestent ce que nous faisons.
            </p>
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
        eyebrow="DÉTAIL DES RECONNAISSANCES"
        title="Notre engagement, attesté en détail"
        features={RECONNAISSANCES}
        layout="2col"
        bg="soft"
      />

      <FeaturesList
        eyebrow="05 · TRAJECTOIRE"
        title="Notre trajectoire 2026-2035"
        intro="Cinq ans pour réduire, dix ans pour atteindre la neutralité. Trajectoire chiffrée construite avec Bpifrance Décarbon'Action."
        features={TRAJECTOIRE}
        layout="2col"
      />

      <ManifesteQuote
        quote="Cette page n'est pas une plaquette commerciale. C'est un engagement contractuel de fait avec nos clients, nos partenaires, nos collaborateurs, et la société en général. Si nous prenons du retard, nous le dirons. Si nous accélérons, nous le dirons aussi."
        author="ENGAGEMENT DE TRANSPARENCE"
      />

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Lire l'intégralité de notre démarche"
        cards={[
          {
            eyebrow: "DOCTRINE",
            title: "Notre doctrine d'achat",
            body: "Pays par pays, partenaire par partenaire — la transparence radicale sur notre sourcing.",
            href: "/doctrine-achat",
          },
          {
            eyebrow: "FABRICATION",
            title: "L'usine de Vaulx-Milieu",
            body: "Le détail de notre process et de nos métiers.",
            href: "/notre-fabrication",
          },
          {
            eyebrow: "DIALOGUE",
            title: "Une question, une remarque",
            body: "Cette page se discute. Écrivez-nous.",
            href: "/contact",
          },
        ]}
      />
    </>
  );
}
