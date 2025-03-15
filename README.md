
<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">PORTFOLIO-NASSIM-ELHADDAD</h1></p>
<p align="center">
	<em><code>Portfolio professionnel de Nassim El Haddad</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/NassimEH/portfolio-nassim-elhaddad?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/NassimEH/portfolio-nassim-elhaddad?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/NassimEH/portfolio-nassim-elhaddad?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/NassimEH/portfolio-nassim-elhaddad?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table des matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Licence](#licence)

---

## Aperçu

Portfolio professionnel de Nassim El Haddad, présentant ses projets, compétences, et expériences dans un design moderne et élégant inspiré de l'esthétique Apple. Le site comprend une navigation fluide, des animations subtiles, et une expérience utilisateur optimisée pour tous les appareils.

---

## Fonctionnalités

- **Design élégant et minimaliste** inspiré de l'esthétique Apple
- **Typographie raffinée** avec des polices fines et modernes 
- **Présentation des projets** avec filtres et visualisation détaillée
- **Section expérience** montrant le parcours professionnel
- **Certifications** avec filtrage par organisme
- **Témoignages** de collaborateurs et clients
- **Formulaire de contact**
- **Mode sombre / clair**
- **Support multilingue** (français et anglais)
- **Responsive design** pour tous les appareils
- **Animations et transitions** soignées

---

## Prérequis

Avant d'installer le projet, assurez-vous d'avoir les éléments suivants :

- [Node.js](https://nodejs.org/) (v16.0.0 ou supérieur)
- [npm](https://www.npmjs.com/) (v7.0.0 ou supérieur)
- Un éditeur de code (recommandé : [Visual Studio Code](https://code.visualstudio.com/))

---

## Installation

1. **Clonez le dépôt**

```sh
git clone https://github.com/NassimEH/portfolio-nassim-elhaddad.git
cd portfolio-nassim-elhaddad
```

2. **Installez les dépendances**

```sh
npm install
```

## Démarrage

Pour lancer le projet en mode développement :

```sh
npm run dev
```

Le site sera disponible à l'adresse [http://localhost:8080](http://localhost:8080).

Pour construire le projet pour la production :

```sh
npm run build
```

Les fichiers seront générés dans le dossier `dist`.

Pour prévisualiser la version de production :

```sh
npm run preview
```

---

## Technologies utilisées

- **React** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Superset JavaScript avec typage statique
- **Vite** - Outil de build moderne et rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Bibliothèque d'animations
- **Three.js** - Bibliothèque 3D
- **i18next** - Internationalisation
- **Zustand** - Gestion d'état
- **Shadcn/UI** - Composants UI accessibles et personnalisables

---

## Structure du projet

```
portfolio-nassim-elhaddad/
│
├── public/                # Fichiers statiques
├── src/                   # Code source
│   ├── components/        # Composants React
│   ├── hooks/             # Hooks personnalisés
│   ├── lib/               # Bibliothèques et utilitaires
│   ├── pages/             # Pages de l'application
│   ├── store/             # Magasins d'état (Zustand)
│   ├── translations/      # Fichiers de traduction
│   ├── utils/             # Fonctions utilitaires
│   ├── App.tsx            # Composant racine
│   └── main.tsx           # Point d'entrée
├── index.html             # Fichier HTML principal
├── package.json           # Dépendances et scripts
├── tailwind.config.ts     # Configuration Tailwind CSS
├── tsconfig.json          # Configuration TypeScript
└── vite.config.ts         # Configuration Vite
```

---

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---
