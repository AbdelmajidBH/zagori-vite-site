# Site vitrine Zagori Vite

Site statique (aucun serveur, aucune base de données) : page d'accueil et
politique de confidentialité, en arabe et en français.

## Publier une modification

Poussez sur `main` : le site se republie automatiquement en 1 à 2 minutes,
via `.github/workflows/deploy.yml`.

## Modifier le contenu

- **Texte de l'accueil** : `build-index.mjs` — puis `node build-index.mjs`
  pour regénérer `index.html`.
- **Politique de confidentialité** : `build-privacy.mjs` — puis
  `node build-privacy.mjs` pour regénérer `privacy.html`.
- **Couleurs, mise en page** : `site.css`.
- **Bascule de langue** : `site.js`.

Les images (logo, captures d'écran) sont embarquées directement dans les
pages HTML (encodées en base64) : aucun fichier image séparé à gérer, et
aucun lien cassé possible.

## Lien avec l'application

Ce dépôt est volontairement séparé du dépôt de l'application
(`AbdelmajidBH/zagori-vite`, privé) : GitHub Pages gratuit exige un dépôt
**public**, alors que le code de l'application reste privé.
