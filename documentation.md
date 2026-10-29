Documentation : interface de gestion et de suivi du stage

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

Partie 1 : documentation fonctionnelle

Elle explique à quoi sert le site et comment l'utiliser, sans parler de code.

1.1 À quoi sert le site ?

Ce site permet de suivre un stage à distance, du début à la fin. Il regroupe les missions, l'avancement de la stagiaire, le planning à suivre, les documents utilisés ainsi que l'historique des commits Git.

1.2 Qui l'utilise ?

La stagiaire
- Modifie les missions (dans le site, ou avec le fichier `missions.xlsx` et le code) et le planning (avec le fichier `planning.xlsx` et le code) selon les directives reçues.
- Modifie les statuts des missions selon sa position dans le stage.

Le coach
- Vérifie l'avancement de la stagiaire grâce aux statuts de ses missions.
- Met le statut « validé » si le travail est validé, ou « à corriger » si des changements sont nécessaires.
- Comme les statuts sont enregistrés dans le navigateur de chacun, il les change pendant la présentation, ou donne son retour à la stagiaire, qui met le site à jour.

1.3 Les pages du site

- Accueil : voir la description du stage, l'avancement et le planning par semaine. Les données viennent d'une liste écrite dans `accueil.js`.
- Planning : consulter les 6 semaines avec objectif, tâche et livrable. Les données viennent du fichier `planning.xlsx`.
- Missions : créer des missions, changer leur statut, suivre l'avancement. Les données viennent du fichier `missions.xlsx` et de la saisie dans la page.
- Documents : ouvrir les 8 dossiers du Drive de test. Les données viennent des liens Google Drive.
- Interface Git : voir les branches et les derniers commits du dépôt. Les données viennent de l'API GitHub.

1.4 Le parcours des statuts (workflow)

Chaque mission et chaque semaine suit ce parcours :

à faire - en cours - à présenter - à corriger - validé

- à faire : la stagiaire n'a pas encore commencé la mission. Choisi par la stagiaire.
- en cours : la stagiaire est en train de la réaliser. Choisi par la stagiaire.
- à présenter : la stagiaire a terminé, mais n'a pas encore présenté son travail au coach. Choisi par la stagiaire.
- à corriger : le coach a vu le travail et demande des corrections. Choisi par le coach.
- validé : le coach a validé le travail. Choisi par le coach.

1.5 Comment utiliser le site

1. On ouvre `accueil.html` dans le navigateur.
2. On remplit les fichiers `planning.xlsx` et `missions.xlsx` selon les objectifs et le planning du stage, puis on les charge avec le bouton « Choisir un fichier » des pages Planning et Missions.
3. On change le statut de chaque mission avec la liste déroulante (à faire, en cours, à présenter...). Le site n'a pas de base de données : les statuts des semaines de l'accueil se changent avec la liste déroulante de la carte Planning, et les statuts de départ se modifient dans `accueil.js`.
4. On ouvre le Drive du stage depuis la page « Documents », ou avec le bouton « Ouvrir le Drive du stage » de la page « Planning », pour y ranger les documents.

Partie 2 : documentation technique

Elle explique comment le site est construit et pourquoi.

2.1 Technologies utilisées

- HTML : la structure des pages.
- CSS : l'apparence (couleurs, mise en page).
- JavaScript : le comportement des pages.
- SheetJS : lire les fichiers Excel.
- API GitHub : récupérer les branches et les commits.
- localStorage : garder les statuts dans le navigateur.
- Git et GitHub : versionner et sauvegarder le code.
- Google Drive : ranger les documents du stage.

2.2 Les fichiers du projet (dossier `projet`)

- `accueil.html`, `accueil.css`, `accueil.js` : la page d'accueil.
- `planning.html`, `planning.js` : la page Planning (lit `planning.xlsx`).
- `missions.html`, `missions.js` : la page Missions (lit `missions.xlsx`).
- `documents.html`, `documents.js` : la page Documents (liens vers le Drive).
- `interface.html`, `script.js` : la page Interface Git (API GitHub).
- `menu.js`, `menu.css` : le menu de gauche, commun à toutes les pages.
- `pages.css` : le style commun aux pages.
- `planning.xlsx`, `missions.xlsx` : les données de départ.

2.3 Mes choix techniques

Pourquoi un menu dans `menu.js` ?
Pour ne pas avoir à modifier chaque page une par une quand on change un lien : le menu est écrit une seule fois et toutes les pages le chargent.

Pourquoi Excel pour les données ?
Parce qu'un tableau Excel est facile à modifier sans toucher au code, et qu'il permet de planifier le stage avant de le charger dans le site.

Pourquoi `localStorage` ?
Pour ne pas perdre les modifications : quand on recharge la page, les statuts modifiés restent enregistrés dans le navigateur.

Pourquoi des liens vers le Drive plutôt que l'API Google Drive ?
Parce qu'un lien est plus simple à utiliser que l'API : avec l'API, l'accès aux fichiers privés demande une authentification.

2.4 Limites et améliorations possibles

- Limite : les statuts sont enregistrés dans le navigateur de chaque personne, donc le coach et la stagiaire ne voient pas les mêmes valeurs.
- Limite : la page ne peut pas modifier le fichier Excel.
- Amélioration possible : une base de données en ligne pour partager les statuts.


Partie 3 : tests et difficultés

Page Planning : colonne vide
- Problème : une colonne du tableau restait vide.
- Solution : le titre de la colonne dans l'Excel devait être identique à celui du code.

Page Accueil : le cercle de pourcentage
- Problème : le cercle de pourcentage n'était pas dans mes connaissances, mais je voulais le faire.
- Solution : j'ai fait des recherches précises (`conic-gradient`) puis je l'ai mis en pratique.

Partie 4 : sources

- Documentation SheetJS : https://docs.sheetjs.com
- localStorage (MDN) : https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
- API GitHub : https://docs.github.com/en/rest
- createElement (MDN) : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- Flexbox (MDN) : https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox
- conic-gradient (MDN) : https://developer.mozilla.org/fr/docs/Web/CSS/gradient/conic-gradient
- Image de la page d'accueil : Unsplash (image libre de droits)

Dépôt GitHub : https://github.com/Tantely2010/mon-stage-scietech.git
