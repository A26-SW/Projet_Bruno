# Mes projets — Portfolio React

Petite application React créée avec Vite présentant deux projets ainsi qu'un encadré de présentation personnelle.

## Installation et lancement

1. Installer les dépendances:
   ```bash
   npm install
   ```

2. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

3. Construire le projet pour la production:
   ```bash
   npm run build
   ```

## Architecture des composants

* **Props de `CarteProjet`**: Ce composant reçoit trois informations sous forme de chaînes de caractères: `titre` (le nom du projet), `technologies` (les outils utilisés) et `description` (un court résumé).

* **Utilisation de `children` dans `Encadre`**: Le composant `Encadre` utilise la prop `children` pour afficher le paragraphe de présentation rédigé directement entre ses balises dans `App.jsx`.
