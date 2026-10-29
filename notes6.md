Sixième semaine (Finalisation et présentation)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Objectif de la semaine
Finaliser l'interface, effectuer les tests, corriger les anomalies, organiser les documents, rédiger la documentation et présenter la solution développée.

2. Ce que j'ai réalisé

Mise à jour de l'avancement
J'ai mis à jour les statuts : la semaine 5 est passée à « à présenter » et la semaine 6 à « en cours ». Le pourcentage reste à 0 % tant que le coach n'a rien validé, parce que seul le coach peut mettre le statut « validé ».

Tests du site
J'ai parcouru chaque page avec une liste de vérifications :
- le menu ouvre les 5 pages et met en évidence la page active ;
- le planning et les missions se chargent depuis les fichiers Excel ;
- les statuts changent avec les listes déroulantes et restent après un rechargement ;
- chaque carte de la page Documents ouvre son propre dossier du Drive ;
- la page Interface Git affiche les branches et les commits.

Organisation des documents
J'ai rangé les documents du stage dans le Drive de test, dans les 8 dossiers du sujet : le sujet, le planning et les missions, le cahier des charges, les notes de recherche, le code et la maquette, la documentation et la présentation.

Fusion des branches
J'ai ramené le travail de la branche `test2` dans `main`. Des conflits sont apparus sur plusieurs fichiers. Je les ai résolus en choisissant la bonne version de chaque fichier, puis j'ai terminé la fusion et envoyé le résultat sur GitHub.

Documentation
J'ai rédigé la documentation fonctionnelle et technique du site : à quoi il sert, comment l'utiliser, les technologies, le rôle de chaque fichier, mes choix techniques, les limites et les améliorations possibles.

Présentation finale
J'ai préparé une présentation de 7 diapositives, avec le même code couleur que mon site, et une démonstration page par page.

3. Ce que j'ai appris cette semaine
- Fusionner des branches avec Git : une fusion peut créer des conflits quand un même fichier est modifié de deux façons. Il faut ouvrir le fichier, choisir la bonne version, puis terminer la fusion.
- Tester avant de présenter : parcourir chaque page avec une liste de vérifications permet de trouver des erreurs que je n'avais pas vues en construisant.
- Documenter : expliquer un projet à quelqu'un qui ne le connaît pas m'a obligée à comprendre chaque fichier et chaque choix.
- Présenter : ce qui compte est de savoir expliquer ce que j'ai fait et pourquoi, plus que de montrer un site parfait.

4. Difficultés rencontrées et solutions
- Conflits Git lors de la fusion : `README.md`, `style.css`, `notes3.md`, `planning.html` et `planning.js` avaient été modifiés différemment sur les deux branches. J'ai choisi la bonne version de chaque fichier avant de terminer la fusion.
- Éditeur Vim : Git a ouvert un éditeur inconnu pour le message de fusion. J'ai appris à le quitter avec Échap puis `:wq`.
- Statut « validé » : j'ai compris qu'un travail terminé n'est pas « validé » tant que le coach ne l'a pas décidé, donc il reste « à présenter ».

5. Bilan du stage

Ce que j'ai construit
Une interface web de gestion et de suivi de stage, avec cinq pages (Accueil, Planning, Missions, Documents, Interface Git), un menu commun, des données lues depuis des fichiers Excel et l'API GitHub, et un parcours de statuts pour les missions.

Compétences développées
- Git et GitHub : dépôt, commits, branches, fusion et conflits
- API, HTTP et JSON : récupérer des données avec `fetch`
- HTML, CSS et JavaScript : construire des pages qui réagissent
- Lire des fichiers Excel avec du code
- Organiser des documents dans un Drive
- Rechercher, tester, corriger, documenter et présenter

Autonomie
Au début, je ne comprenais pas bien les API. À la fin, je sais chercher une solution, l'essayer, expliquer mes choix et corriger mes erreurs.

Ce que je ferais ensuite
- Ajouter une base de données en ligne pour partager les statuts entre la stagiaire et le coach
- Pouvoir modifier directement les données du planning et des missions dans le site
- Relier l'accueil aux missions pour que l'avancement se calcule tout seul

6. Sources utilisées
- Documentation SheetJS : https://docs.sheetjs.com
- localStorage (MDN) : https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
- API GitHub : https://docs.github.com/en/rest
- conic-gradient (MDN) : https://developer.mozilla.org/fr/docs/Web/CSS/gradient/conic-gradient

7. Lien du dépôt GitHub

https://github.com/Tantely2010/mon-stage-scietech.git

8. Conclusion
Ce stage m'a permis d'apprendre à comprendre un problème, chercher une solution, l'expérimenter et expliquer mes choix. Mon site de suivi du stage est fonctionnel, documenté et prêt à être présenté.
