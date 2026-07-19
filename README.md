# Yavésa?

Site statique (HTML/CSS/JS, aucune dépendance) pour le projet de fin d'année.

## Voir le site en local

Aucune installation requise, mais ouvrir directement `index.html` dans le
navigateur peut bloquer certains scripts selon le navigateur. Pour un rendu
fiable, servez le dossier :

```
# avec Node déjà installé
npx serve .
```

puis ouvrez l'URL affichée (ex. http://localhost:3000).

## Héberger pour la soutenance, puis supprimer

1. Aller sur https://app.netlify.com/drop
2. Glisser tout le dossier `yavesa` (celui qui contient `index.html`) dans la
   zone de dépôt.
3. Netlify génère une URL publique en quelques secondes — aucun compte requis.
4. Après la présentation : si tu t'es connecté avec un compte, supprime le
   site depuis le dashboard Netlify. Sans compte, le site déployé en "drop"
   expire automatiquement au bout de quelques heures.

## Structure

- `index.html` — accueil
- `article.html?slug=...` — gabarit d'article (voir `js/data.js` pour les slugs)
- `rubriques.html`, `archives.html`, `a-propos.html`
- `css/style.css` — charte graphique (couleurs, typographies, thème clair/sombre)
- `js/data.js` — contenu des articles et rubriques (à compléter/remplacer)
- `js/main.js` — rendu dynamique des pages, interactions, bascule de thème
- `js/theme.js` — applique le thème mémorisé avant l'affichage (évite le flash)
- `assets/` — logo et icônes de rubriques extraits directement du PDF
  (`logo-mark.png`, `logo-full.png`, `logo-stamp.png`, `icon-*.png`), tous en
  PNG transparent pour rester lisibles sur fond clair ou sombre

## Mode sombre

Le bouton "1976 / 2026" dans le header bascule entre les deux thèmes
(mémorisé dans `localStorage`, sinon aligné sur la préférence système). Les
deux thèmes réutilisent exactement la même palette de la charte graphique
(`css/style.css`, tokens `--bg`, `--surface`, `--text`, etc. redéfinis dans
`html[data-theme="dark"]`) — aucune couleur inventée.

## À faire ensuite

- Remplacer les blocs `.featured-media` / `.article-media` / `.rewind-thumb`
  (actuellement des placeholders à rayures) par de vraies images d'archive.
- Compléter `js/data.js` avec plus d'articles.
- La police "Journal OT" du moodboard est une police commerciale : le CSS
  utilise Playfair Display (Google Fonts, gratuite) en remplacement pour les
  titres. À changer dans `css/style.css` (`--font-titre`) si tu obtiens la
  police originale.
