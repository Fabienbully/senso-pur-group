/**
 * Données éditoriales de la home Senso Pur — extraites du brief CLAUDE.md.
 * Tous ces chiffres et libellés sont validés Direction (Fabien & Marine Bully).
 * Ne pas modifier sans accord — voir CLAUDE.md §"Contenus rédactionnels".
 */

export const HERO = {
  eyebrow: "UNE FAMILLE · DEUX MAISONS · UN SAVOIR-FAIRE",
  title:
    "Senso Pur conçoit et fabrique en France des produits de literie de qualité, dans le respect de l'environnement et des hommes.",
  videoYouTubeId: "DsKByvMOZYQ",
  videoStartAt: 8,
  ctas: [
    { label: "Découvrir le groupe", href: "/notre-direction", variant: "primary" as const },
    { label: "Voir nos engagements", href: "/engagements-rse", variant: "secondary" as const },
  ],
};

export const MAISONS = [
  {
    slug: "la-maison-senso",
    name: "La Maison Senso",
    tag: "MAISON HISTORIQUE",
    image: "/images/media/media-maison-senso.jpg",
    teaser:
      "Toute la literie du groupe est fabriquée à Vaulx-Milieu. Trois marques sous une même exigence — Bellecour Literie, Matelas Pour Tous, Olympe.",
    href: "/la-maison-senso",
  },
  {
    slug: "maison-aubertin",
    name: "Maison Aubertin",
    tag: "FONDÉE EN 2017",
    image: "/images/media/media-maison-aubertin.jpg",
    teaser:
      "L'art de vivre incarné par Marine Bully — literie, canapés, mobilier, décoration. Une offre Contract clé-en-main pour hôteliers et résidences.",
    href: "/maison-aubertin",
  },
];

export const CHIFFRES = [
  { value: 16, suffix: "", label: "ans d'existence", caption: "depuis 2010" },
  { value: 15, suffix: " M€", label: "de chiffre d'affaires", caption: "annuel" },
  { value: 35, suffix: "", label: "collaborateurs", caption: "" },
  { value: 50000, suffix: "", label: "matelas fabriqués", caption: "chaque année" },
  { value: 1000, suffix: "+", label: "clients professionnels", caption: "depuis 2021" },
  { value: 6600, suffix: " m²", label: "d'usine", caption: "+ 5 200 m² de stockage" },
];

export const CERTIFICATIONS = [
  { name: "OEKO-TEX",          src: "/images/labels/label-oeko-tex.png" },
  { name: "CertiPUR",          src: "/images/labels/label-certipur.jpg" },
  { name: "EcoVadis",          src: "/images/labels/label-ecovadis.jpg" },
  { name: "The Positive Company", src: "/images/labels/label-positive-company.png" },
  { name: "La French Fab",     src: "/images/labels/label-french-fab.svg" },
  { name: "PEFC",              src: "/images/labels/label-pefc.png" },
];

export const TROIS_MARCHES = [
  {
    code: "D2C",
    title: "Direct to Consumer",
    body:
      "Sur les sites des marques du groupe — Bellecour, La Maison Senso, Maison Aubertin, Matelas Pour Tous.",
    examples: ["Bellecour", "Senso", "Aubertin", "Matelas Pour Tous"],
  },
  {
    code: "B2B2C",
    title: "Partenaires & marketplaces",
    body:
      "Une présence soignée auprès des grands acteurs e-commerce et retailers spécialisés.",
    examples: [
      "La Redoute",
      "Veepee",
      "Maisons du Monde",
      "BUT",
      "Amazon",
      "Showroom Privé",
      "The Bradery",
      "Conforama",
      "Leroy Merlin",
    ],
  },
  {
    code: "B2B",
    title: "Professionnels",
    body:
      "Hôtellerie et résidences professionnelles — du palace 5★ à la résidence de plein air.",
    examples: [
      "Villa Maïa",
      "Villa Florentine",
      "Le Claridge",
      "Fraser Suites",
      "Belambra",
      "Huttopia",
      "VVF",
      "Appart'City",
      "Vinci",
    ],
  },
];

export const AIGUILLEUR = {
  primary: [
    {
      tag: "CANDIDAT",
      title: "Vous voulez nous rejoindre",
      body: "35 collaborateurs, 16 ans d'existence, une usine en croissance.",
      cta: "Découvrir nos métiers",
      href: "/carrieres",
    },
    {
      tag: "JOURNALISTE",
      title: "Vous écrivez sur le groupe",
      body: "Pitch, retombées, kit média, contacts presse.",
      cta: "Espace presse",
      href: "/espace-presse",
    },
    {
      tag: "PARTENAIRE",
      title: "Fédération · investisseur",
      body: "Notre direction, notre fabrication, nos engagements.",
      cta: "Le groupe",
      href: "/notre-direction",
    },
  ],
  secondary: [
    {
      label: "Vous êtes hôtelier",
      body: "Bellecour Literie est notre marque dédiée à l'hospitalité.",
      cta: "bellecour-literie.com",
      href: "https://bellecour-literie.com",
      external: true,
    },
    {
      label: "Vous êtes particulier",
      body: "Découvrez les sites de nos maisons.",
      cta: "Voir nos maisons",
      href: "/nos-maisons",
    },
  ],
};

export const CLIENTS_HOTELLERIE = [
  { name: "Villa Maïa",        src: "/images/clients/client-villa-maia.svg" },
  { name: "Villa Florentine",  src: "/images/clients/client-villa-florentine.svg" },
  { name: "Le Claridge",       src: "/images/clients/client-claridge.svg" },
  { name: "Fraser Suites",     src: "/images/clients/client-fraser-suites.svg" },
  { name: "Hekipia",           src: "/images/clients/client-hekipia.png" },
  { name: "Belambra",          src: "/images/clients/client-belambra.svg" },
  { name: "Huttopia",          src: "/images/clients/client-huttopia.svg" },
  { name: "VVF",               src: "/images/clients/client-vvf.svg" },
];

export const CLIENTS_MARKETPLACES = [
  { name: "Veepee",            src: "/images/clients/client-veepee.svg" },
  { name: "La Redoute",        src: "/images/clients/client-la-redoute.svg" },
  { name: "Maisons du Monde",  src: "/images/clients/client-maisons-du-monde.svg" },
  { name: "Westwing",          src: "/images/clients/client-westwing.svg" },
  { name: "Showroom Privé",    src: "/images/clients/client-showroom-prive.svg" },
  { name: "The Bradery",       src: "/images/clients/client-the-bradery.svg" },
  { name: "BUT",               src: "/images/clients/client-but.svg" },
  { name: "Amazon",            src: "/images/clients/client-amazon.svg" },
];

export const TEMOIGNAGES = [
  {
    quote:
      "Nos clients viennent à la Villa Maïa pour vivre une expérience. Le sommeil en fait partie — il devait être impeccable. Senso Pur a compris cela mieux que personne.",
    name: "Séverine Maisonneuve",
    role: "Villa Maïa Lyon · 5★",
  },
  {
    quote:
      "Mes locataires reviennent. C'est le meilleur indicateur. Le confort qu'apporte Senso Pur est un argument concret de relocation.",
    name: "Laurent Tatikian",
    role: "Investisseur LMNP",
  },
  {
    quote:
      "Nos chalets et nos résidences de plein air doivent offrir le même niveau de confort qu'un hôtel. Avec Senso Pur, nous sommes rassurés sur la qualité et la durée.",
    name: "Sandrine Usséglio",
    role: "Hekipia",
  },
  {
    quote:
      "Quand un client nous demande un projet clé-en-main, nous avons besoin de partenaires qui savent livrer dans les délais et installer proprement. Senso Pur est de ceux-là.",
    name: "Cyril Février",
    role: "Amevet Agencement",
  },
];

export const ACTUS = [
  {
    tag: "ANNONCE",
    title: "Maison Aubertin lance son offre Contract",
    date: "Mai 2026",
    image: "/images/media/media-actu-aubertin-contract.jpg",
    href: "/espace-presse#aubertin-contract",
  },
  {
    tag: "ENGAGEMENT",
    title: "Notre doctrine d'achat est désormais publique",
    date: "Mai 2026",
    image: "/images/media/media-actu-doctrine.jpg",
    href: "/doctrine-achat",
  },
  {
    tag: "ANNIVERSAIRE",
    title: "Senso Pur — 16 ans d'engagement industriel français",
    date: "Avril 2026",
    image: "/images/media/media-actu-anniversaire.svg",
    href: "/espace-presse#anniversaire",
  },
];

export const DIRECTION = {
  image: "/images/media/media-direction-duo.jpg",
  eyebrow: "NOTRE DIRECTION",
  title: "Une famille à la tête du groupe",
  body:
    "Fabien Bully a fondé Senso Pur en 2010, avec son père. Marine Bully, sa sœur, l'a rejoint en 2014 puis a créé Maison Aubertin en 2017. Deux dirigeants, deux maisons, une même exigence — incarner ce que nous fabriquons.",
  videoBadge: { label: "VIDÉO MANIFESTE · 90 sec", href: "/notre-direction#manifeste" },
};
