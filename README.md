# Portfolio — Maimouna Ndiaye

Projet React (Vite) — conversion du portfolio HTML/CSS original.

## Développement local

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Header.jsx      → nav + menu burger
    Hero.jsx         → section d'intro + photo
    About.jsx        → section "Why I build"
    Skills.jsx        → grille de compétences
    Projects.jsx       → projets sélectionnés
    Experience.jsx      → build log / expérience
    Contact.jsx         → contact + footer
  styles/
    global.css        → tous les styles (identiques à l'original)
  App.jsx
  main.jsx
public/
  photo.jpg           → ta photo (extraite du base64 original)
```

## Déploiement sur Vercel

1. Pousse ce dossier sur GitHub (voir instructions séparées).
2. Va sur vercel.com, connecte-toi avec GitHub.
3. "Add New Project" → sélectionne ce repo.
4. Vercel détecte Vite automatiquement (build command: `vite build`, output: `dist`).
5. Clique "Deploy".

Plan gratuit (Hobby) suffit largement pour ce portfolio.


