/**
 * Données éditoriales de la home Senso Pur — issues du thème Shopify
 * exporté par Senso Pur SAS (templates/index.json + sections sp-*.liquid).
 * Migration 1:1 vers le nouveau site Next.js.
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

export const MAISONS_DUO = {
  eyebrow: "NOS MAISONS",
  title: "Deux maisons, une même exigence du confort",
  subtitle:
    "Le groupe Senso Pur réunit deux univers complémentaires, portés par une même famille et un même engagement. La Maison Senso pour le sommeil, Maison Aubertin pour l'art de vivre.",
};

export const MAISONS = [
  {
    slug: "la-maison-senso",
    name: "La Maison Senso",
    tag: "MAISON HISTORIQUE",
    image: "/images/media/media-maison-senso.jpg",
    teaser:
      "Notre maison fondatrice, née en 2010 à Vaulx-Milieu. Toute la literie y est fabriquée intégralement, dans notre usine de l'Isère. Trois marques sous l'ombrelle : Bellecour pour l'hôtellerie, Matelas Pour Tous pour le sur-mesure et l'économie circulaire, et la collection Olympe pour les sportifs.",
    linkText: "Découvrir La Maison Senso →",
    href: "/la-maison-senso",
  },
  {
    slug: "maison-aubertin",
    name: "Maison Aubertin",
    tag: "FONDÉE EN 2017",
    image: "/images/media/media-maison-aubertin.jpg",
    teaser:
      "Notre maison d'art de vivre, incarnée par Marine Bully. Literie, canapés, mobilier et décoration : un univers complet pour la maison et les résidences professionnelles. Avec, depuis peu, une offre Contract complète — design, livraison, pose et installation.",
    linkText: "Découvrir Maison Aubertin →",
    href: "/maison-aubertin",
  },
];

export const CHIFFRES_HEAD = { eyebrow: "EN CHIFFRES" };
export const CHIFFRES = [
  { value: 16,    suffix: "",    label: "ans d'existence (depuis 2010)",            caption: "" },
  { value: 15,    suffix: " M€", label: "de chiffre d'affaires annuel",             caption: "" },
  { value: 35,    suffix: "",    label: "collaborateurs",                            caption: "" },
  { value: 50000, suffix: "",    label: "matelas fabriqués chaque année",            caption: "" },
  { value: 1000,  suffix: "+",   label: "clients professionnels et hôteliers depuis 2021", caption: "" },
  { value: 6600,  suffix: " m²", label: "d'usine et 5 200 m² de stockage à Vaulx-Milieu",   caption: "" },
];

export const RSE_PULSE = {
  eyebrow: "NOS ENGAGEMENTS",
  bigNumber: "100%",
  bigSubtext: "MOUSSES CERTIFIÉES",
  title:
    "Nos mousses sont certifiées. Nos chutes ne sont pas perdues — transformées en coussins, en isolants thermiques.",
  support:
    "Six référentiels exigeants attestent de la qualité matières, du sourcing responsable et de l'ancrage industriel français. Nos certifications ci-dessous sont vérifiées chaque année.",
  linkText: "Lire nos engagements",
  link: "/engagements-rse",
};

export const CERTIFICATIONS = [
  { name: "OEKO-TEX Standard 100",                src: "/images/labels/label-oeko-tex.png" },
  { name: "CertiPUR",                             src: "/images/labels/label-certipur.jpg" },
  { name: "EcoVadis — Médaille Argent",           src: "/images/labels/label-ecovadis.jpg" },
  { name: "The Positive Company",                 src: "/images/labels/label-positive-company.png" },
  { name: "La French Fab",                        src: "/images/labels/label-french-fab.svg" },
  { name: "PEFC",                                 src: "/images/labels/label-pefc.png" },
];

export const TROIS_MARCHES_HEAD = {
  eyebrow: "TROIS MARCHÉS",
  title: "Trois marchés, un seul savoir-faire",
  subtitle:
    "Senso Pur s'adresse à trois publics différents avec la même exigence de qualité — particuliers, partenaires de distribution, professionnels.",
};
export const TROIS_MARCHES = [
  {
    code: "D2C",
    title: "Direct to Consumer",
    body: "Vente directe aux particuliers via nos sites de marques. Sans intermédiaire, à juste prix.",
    examples: ["Bellecour Literie", "La Maison Senso", "Maison Aubertin", "Matelas Pour Tous"],
  },
  {
    code: "B2B2C",
    title: "Partenaires",
    body: "Présents sur les principales marketplaces et lors de ventes événementielles.",
    examples: [
      "La Redoute", "Veepee", "Maisons du Monde", "BUT", "Amazon",
      "Showroom Privé", "The Bradery", "Conforama", "Leroy Merlin",
    ],
  },
  {
    code: "B2B",
    title: "Professionnels",
    body:
      "Hôteliers, résidences, promoteurs, agenceurs. Avec Bellecour pour la literie et Maison Aubertin pour l'ensemblier complet.",
    examples: [
      "Villa Maïa Lyon", "Villa Florentine", "Le Claridge",
      "Fraser Suites", "Belambra", "Huttopia", "VVF", "Appart'City", "Vinci",
    ],
  },
];

export const AIGUILLEUR = {
  eyebrow: "QUI ÊTES-VOUS ?",
  title: "Trouvez votre chemin",
  subtitle: "Selon ce que vous cherchez, le bon point d'entrée n'est pas le même.",
  primary: [
    {
      tag: "CANDIDAT",
      title: "Candidat",
      body:
        "Découvrez notre culture, nos métiers et nos avantages collaborateurs. Comprenez ce que veut dire travailler dans un groupe familial qui assume ce qu'il fabrique.",
      cta: "Carrières",
      href: "/carrieres",
    },
    {
      tag: "JOURNALISTE",
      title: "Journaliste",
      body:
        "Kit média, contact presse, biographies, actualités du groupe. Tout ce qu'il vous faut pour comprendre Senso Pur, et plus encore.",
      cta: "Espace presse",
      href: "/espace-presse",
    },
    {
      tag: "PARTENAIRE",
      title: "Partenaire",
      body:
        "Le groupe, sa gouvernance, ses chiffres, ses engagements. Pour les institutions, les fédérations, les investisseurs et les partenaires associatifs.",
      cta: "Le groupe",
      href: "/notre-direction",
    },
  ],
  secondaryIntro: "Vous cherchez à acheter ?",
  secondary: [
    {
      label: "Vous êtes hôtelier",
      body: "Bellecour Literie est notre marque dédiée à l'hospitalité.",
      cta: "bellecour-literie.com",
      href: "https://www.bellecour-literie.com",
      external: true,
    },
    {
      label: "Vous êtes particulier",
      body: "Découvrez nos maisons.",
      cta: "Voir nos maisons",
      href: "/nos-maisons",
    },
  ],
};

export const DIRECTION = {
  eyebrow: "NOTRE DIRECTION",
  title: "Une famille à la tête du groupe",
  body:
    "Fabien Bully a fondé Senso Pur en 2010. Marine Bully, sa sœur, l'a rejoint pour incarner Maison Aubertin. Deux histoires entrepreneuriales qui n'en font qu'une — celle d'un groupe familial qui assume ce qu'il fabrique, ce qu'il sélectionne, et ceux qui le portent.",
  image: "/images/media/media-direction-duo.jpg",
  cta: { text: "Lire leur prise de parole", href: "/notre-direction" },
  videoBadge: { label: "VIDÉO MANIFESTE · 90 sec", href: "/notre-direction#manifeste" },
};

export const CONFIANCE = { title: "ILS NOUS FONT CONFIANCE" };

export const CLIENTS_HOTELLERIE = [
  { name: "Villa Maïa 5* (Lyon)",           src: "/images/clients/client-villa-maia.svg" },
  { name: "Villa Florentine 5* (Lyon)",     src: "/images/clients/client-villa-florentine.svg" },
  { name: "Le Claridge Champs-Élysées",     src: "/images/clients/client-claridge.svg" },
  { name: "Fraser Suites Paris La Défense", src: "/images/clients/client-fraser-suites.svg" },
  { name: "Hekipia",                        src: "/images/clients/client-hekipia.png" },
  { name: "Belambra",                       src: "/images/clients/client-belambra.svg" },
  { name: "Huttopia",                       src: "/images/clients/client-huttopia.svg" },
  { name: "VVF",                            src: "/images/clients/client-vvf.svg" },
];

export const CLIENTS_MARKETPLACES = [
  { name: "Veepee",          src: "/images/clients/client-veepee.svg" },
  { name: "La Redoute",      src: "/images/clients/client-la-redoute.svg" },
  { name: "Maisons du Monde", src: "/images/clients/client-maisons-du-monde.svg" },
  { name: "Westwing",        src: "/images/clients/client-westwing.svg" },
  { name: "Showroom Privé",  src: "/images/clients/client-showroom-prive.svg" },
  { name: "The Bradery",     src: "/images/clients/client-the-bradery.svg" },
  { name: "BUT",             src: "/images/clients/client-but.svg" },
  { name: "Amazon",          src: "/images/clients/client-amazon.svg" },
];

export const TEMOIGNAGES_HEAD = {
  eyebrow: "PAROLES DE PROS",
  title: "Ceux qui nous connaissent en parlent",
  subtitle:
    "Hôteliers, investisseurs, agenceurs, ensembliers. Quatre regards sur ce que nous fabriquons.",
  linkText: "Voir toutes les interviews",
  link: "/espace-presse",
};
export const TEMOIGNAGES = [
  {
    tag: "HÔTELIÈRE",
    quote:
      "Nos clients viennent à la Villa Maïa pour vivre une expérience. Le sommeil en fait partie — c'est pour ça que nous avons choisi Bellecour, parce qu'ils prennent ce sujet aussi au sérieux que nous.",
    name: "Séverine Maisonneuve",
    role: "Directrice de la Villa Maïa, Lyon (5 étoiles)",
  },
  {
    tag: "INVESTISSEUR LMNP",
    quote:
      "Mes locataires reviennent. C'est le meilleur indicateur. Nous mettons notre âme dans la rénovation de nos produits, et grâce à l'expérience de Bellecour et Aubertin, nous apportons la touche de confort et visuelle qui rend nos appartements agréables à vivre.",
    name: "Laurent Tatikian",
    role: "Investisseur en LMNP",
  },
  {
    tag: "ENSEMBLIER PLEIN AIR",
    quote:
      "Nos chalets et nos résidences de plein air doivent offrir le même niveau de confort qu'un hôtel — parce qu'aujourd'hui, c'est ce que les vacanciers attendent. Avec Senso Pur, nous équipons sans compromis.",
    name: "Sandrine Usséglio",
    role: "Hekipia, aménagement de chalets et résidences plein air",
  },
  {
    tag: "AGENCEUR",
    quote:
      "Quand un client nous demande un projet clé-en-main, nous avons besoin de partenaires qui savent livrer dans les délais et installer proprement. Maison Aubertin est devenu un de nos partenaires de référence sur ce volet.",
    name: "Cyril Février",
    role: "Amevet Agencement",
  },
];

export const ACTUS_HEAD = {
  eyebrow: "ACTUALITÉS",
  title: "L'actualité du groupe",
  linkText: "Voir toutes les actualités",
  link: "/espace-presse",
};
export const ACTUS = [
  {
    tag: "ANNONCE",
    title: "Maison Aubertin lance son offre Contract",
    excerpt:
      "Avec Bellecour pour la literie et Maison Aubertin pour la décoration et l'ensemblier, le groupe propose désormais une offre clé-en-main pour les hôteliers et résidences professionnelles : design, livraison, pose et installation.",
    date: "Mai 2026",
    image: "/images/media/media-actu-aubertin-contract.jpg",
    href: "/maison-aubertin",
  },
  {
    tag: "ENGAGEMENT",
    title: "Notre doctrine d'achat est désormais publique",
    excerpt:
      "Pays par pays, partenaire après partenaire, depuis combien d'années nous travaillons ensemble. Une page entière pour expliquer ce que nous fabriquons, ce que nous co-fabriquons, et ce que nous sélectionnons.",
    date: "Mai 2026",
    image: "/images/media/media-actu-doctrine.jpg",
    href: "/doctrine-achat",
  },
  {
    tag: "ANNIVERSAIRE",
    title: "Senso Pur, 16 ans d'engagement industriel français",
    excerpt:
      "De 2010 à 2026 — seize années à fabriquer en Isère, à élargir le savoir-faire, à former une équipe. Retour sur les étapes qui ont fait du groupe ce qu'il est aujourd'hui.",
    date: "Avril 2026",
    image: "/images/media/media-actu-anniversaire.svg",
    href: "/espace-presse",
  },
];
