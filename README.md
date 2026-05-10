# Senso Pur Group — site corporate

Site vitrine corporate du groupe Senso Pur, construit selon le brief
[`CLAUDE.md`](../CLAUDE.md).

> **Une famille, deux maisons, un savoir-faire.**
> Senso Pur conçoit et fabrique en France des produits de literie de qualité,
> dans le respect de l'environnement et des hommes.

---

## Stack

| Couche               | Outil                                    |
| -------------------- | ---------------------------------------- |
| Framework            | Next.js 15 (App Router)                  |
| Langage              | TypeScript strict                        |
| UI                   | React 19                                 |
| Style                | Tailwind v4 + tokens CSS Senso Pur 2026  |
| Smooth scroll        | Lenis                                    |
| Animations           | IntersectionObserver maison + Framer Motion |
| Polices              | Cormorant Garamond + Manrope (next/font) |
| Hébergement cible    | Vercel                                   |

---

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve la build
```

---

## Architecture

```
public/
  ├ images/
  │   ├ brand/      logos Senso Pur (4 variantes)
  │   ├ clients/    55 logos clients (hôtellerie + marketplaces)
  │   ├ labels/     6 certifications (OEKO-TEX, CertiPUR, EcoVadis…)
  │   └ media/      photos d'illustration (portraits, atelier, RSE)
  └ videos/         vidéos self-hosted (à fournir : hero, manifeste)

src/
  ├ app/            App Router — une page par route
  ├ components/
  │   ├ layout/     Header, Footer, SmoothScroll, Cursor, Loader
  │   ├ animations/ FadeIn, MaskReveal, CountUp, Marquee, Parallax
  │   └ sections/   1 fichier = 1 section éditoriale (sp-* du thème Shopify)
  ├ content/        données éditoriales (chiffres, témoignages, bios…)
  ├ hooks/          useReducedMotion
  ├ lib/            utils (cn, formatFR, SITE_URL)
  └ styles/         tokens.css, animations.css
```

### Pages livrées (14)

| Route                          | Statut |
| ------------------------------ | ------ |
| `/`                            | Home — 10 sections cinéma |
| `/nos-maisons`                 | Présentation parité |
| `/la-maison-senso`             | Maison historique |
| `/maison-aubertin`             | Art de vivre + Contract |
| `/notre-direction`             | Bios Fabien & Marine + manifeste |
| `/notre-fabrication`           | Usine, étapes, machines, métiers |
| `/engagements-rse`             | RSE, piliers, certifications |
| `/doctrine-achat`              | 4 cercles transparence sourcing |
| `/espace-presse`               | Pitch, retombées, kit média |
| `/carrieres`                   | Métiers, raisons, avantages |
| `/contact`                     | Aiguilleur + coordonnées + formulaire |
| `/faq`                         | Foire aux questions |
| `/mentions-legales`            | Légal |
| `/politique-confidentialite`   | RGPD |

Plus `sitemap.xml` et `robots.txt` générés dynamiquement.

---

## Charte graphique 2026

Tokens définis dans [`src/styles/tokens.css`](src/styles/tokens.css), à ne
modifier qu'avec validation Direction (Fabien Bully).

| Couleur          | Hex      | Usage                    |
| ---------------- | -------- | ------------------------ |
| `--sp-alabaster` | `#EEECE9`| Fonds principaux         |
| `--sp-pewter`    | `#99B3B7`| Accents, liens — signature |
| `--sp-bronze`    | `#9D7960`| Tons chauds intermédiaires |
| `--sp-mahogany`  | `#6E3D23`| Titres forts, boutons    |
| `--sp-slate`     | `#304E4D`| Textes courants          |
| `--sp-obsidian`  | `#1B2824`| Footer, hero overlays    |
| `--sp-midnight`  | `#22324A`| Bleu nuit du logo        |

**Polices** : Cormorant Garamond (titres) + Manrope (corps).
**Boutons** : tous en pill (`border-radius: 999px`).
**Easing signature** : `cubic-bezier(0.16, 1, 0.3, 1)` (easeOutExpo).

---

## Effets cinématographiques

- **Smooth scroll Lenis** activé globalement (`SmoothScroll`).
- **Curseur custom** desktop : 24 px → 64 px sur les éléments
  `[data-cursor="hover"]`, libellé via `data-cursor-label`.
- **Loader d'entrée** premier chargement (sessionStorage flag).
- **Mask reveal** sur titres clés via clip + translateY.
- **Count-up** easeOutExpo sur les chiffres clés (`CountUp`).
- **Marquee** infinie sur le mur de logos clients (pause au hover).
- **Parallax** sur portraits (`speed=0.7` par défaut).
- **Grain léger** SVG noise sur hero/quotes (`mix-blend-mode: overlay`).
- **prefers-reduced-motion** → tout est neutralisé proprement.

---

## À brancher avant déploiement

| Tâche                                       | Où                                  |
| ------------------------------------------- | ----------------------------------- |
| Endpoint `/api/contact` (Resend)            | `Formulaire.tsx` + nouvelle route   |
| Photos haute déf Marine Bully               | `media-direction-marine.jpg`        |
| Vidéo manifeste 90 sec                      | `public/videos/manifeste.mp4`       |
| Carte Mapbox sur `/contact`                 | nouveau composant `Map.tsx`         |
| Sanity CMS (presse + actus)                 | dossier `sanity/`                   |
| Plausible analytics                         | `<head>` du root layout             |
| Numéros SIREN / TVA mentions légales        | `mentions-legales/page.tsx`         |

---

## Commandes utiles

```bash
npm run dev          # dev server hot-reload
npm run build        # build prod (tape les types + lint)
npm run start        # serve la build
npx next lint        # linter standalone
```

---

## Critères de réussite (rappel CLAUDE.md)

- ⭐ Effet « waouh » cinématographique dès la home — 3 premières secondes décisives.
- ⭐ Identité Senso Pur 2026 conservée à 100 % (palette, typo, ton éditorial).
- ⭐ Architecture 2 maisons + 3 sous-marques claire dès la home.
- ⭐ Chiffres et certifications mis en valeur.
- ⭐ Témoignages clients hôteliers/investisseurs visibles et crédibles.
- ⭐ Aiguilleur de contact pour chaque audience.
- ⭐ Mobile : dégradation intelligente, pas de copie ratée du desktop.
- ⭐ Bios Fabien & Marine émotionnellement fortes.
- ⭐ Page Notre fabrication → 7 étapes + machines + métiers.
- ⭐ Accessibilité AA, `prefers-reduced-motion` respecté.
