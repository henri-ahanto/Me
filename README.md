# Portfolio — AHANTO Henri Sylvain

Portfolio personnel de développeur fullstack, mobile & IA, construit autour des couleurs de **Python**, **Laravel** et **PHP**.

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **Motion** (Framer Motion) pour les animations
- **Lucide React** pour les icônes

## Animations

- Terminal interactif avec frappe au caractère
- Machine à écrire sur les rôles (fullstack, mobile, IA)
- Réseau de particules en canvas, teinté Python / Laravel / PHP
- Orbes de dégradé animés et grille de fond
- Spotlight qui suit le curseur (desktop)
- Révélations au scroll, compteurs animés, timeline dessinée
- Cartes projets avec effet de tilt 3D et reflet
- Marquee de la stack technique
- Respect de `prefers-reduced-motion`

## Démarrer

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Personnaliser

Tout le contenu (profil, compétences, projets, parcours, diplômes, liens) est centralisé dans :

```text
src/data/profile.ts
```

Le CV téléchargeable se trouve dans `public/CV_AHANTO_Henri_Sylvain.pdf`.

## Déploiement

Le projet est prêt pour **Vercel**, **Netlify** ou tout hébergement statique :

- Build command : `npm run build`
- Output directory : `dist`
