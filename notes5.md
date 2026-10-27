Cinquième semaine (Intégration et gestion du stage)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Objectif de la semaine
Concevoir l'architecture fonctionnelle de l'interface de gestion du stage (description, planning, missions, workflow, livrables, documents et suivi), puis mettre en place ses principales fonctionnalités.

2. Conception de l'architecture

Cahier des charges :
J'ai rédigé le cahier des charges du projet à partir de la section « Projet final » du sujet : contexte, objectif, utilisateurs (la stagiaire et le coach), fonctionnalités attendues, contraintes et livrables. Il est rangé dans le dossier 03 du Drive.

Maquette :
Avant de coder, j'ai dessiné une maquette de la page d'accueil (menu à gauche, bloc de bienvenue, avancement, planning). Elle m'a servi de plan pour construire les pages.

Architecture du site :
Le site est composé de 5 pages reliées par un menu commun.

3. Ce que j'ai appris :

Un menu commun à toutes les pages :
Au lieu de recopier le menu dans chaque page, je l'ai écrit une seule fois dans `menu.js`. Chaque page charge ce fichier, et le menu apparaît automatiquement. Le script repère aussi la page actuelle pour la mettre en évidence. Si je veux changer un lien, je ne modifie qu'un seul endroit.

Le parcours des statuts (workflow)
Chaque mission suit le parcours du sujet : à faire, en cours, à présenter, à corriger, validé. Le statut se change avec une liste déroulante. Seul le coach peut mettre « validé » : tant qu'il n'a pas vu un travail, je le laisse à « à présenter ».

Enregistrer des données dans le navigateur :
Avec `localStorage`, les missions et les statuts restent enregistrés quand on recharge la page. On les stocke sous forme de texte avec `JSON.stringify` et on les relit avec `JSON.parse`.

Lire un Excel et créer les éléments de la page :
Les missions se chargent depuis `missions.xlsx` avec SheetJS. Les lignes de tableau, les listes déroulantes et les boutons sont créés avec `createElement`, comme pour les branches Git en semaine 2.

Mise en page :
- Pour placer des éléments côte à côte, j'ai utilisé `display: flex`.
- Le cercle d'avancement est un rond coloré avec un `conic-gradient`, recouvert d'un rond blanc plus petit.
- Un fichier de style commun (`pages.css`) évite de répéter le même style dans chaque page.

4. Choix techniques
- Pas de serveur : le site fonctionne avec seulement du HTML, du CSS et du JavaScript, ce qui est adapté à un prototype de stage.
- Excel pour les données de départ : planning et missions se modifient facilement dans un tableur.
- `localStorage` pour les statuts : c'est la solution la plus simple pour garder les modifications sans base de données.
- Les liens du Drive plutôt que l'API Google Drive : l'API demande une authentification et des étapes de configuration. Des liens vers chaque dossier répondent au besoin d'accès aux documents.
- Une seule source pour le pourcentage : il ne compte que les semaines « validé », donc il reste à 0 % tant que le coach n'a rien validé.

5. Limites connues
- Les statuts sont enregistrés dans le navigateur de chaque personne : si le coach change un statut sur son ordinateur, je ne le vois pas sur le mien.
- La page ne peut pas modifier le fichier Excel : `missions.xlsx` sert seulement à charger la liste de départ.
- Les pages demandent de choisir le fichier Excel avec le bouton à chaque visite, parce qu'un navigateur ne peut pas lire un fichier de l'ordinateur tout seul.
- Pour partager vraiment les statuts entre le coach et moi, il faudrait une base de données en ligne. C'est une amélioration possible.

6. Difficultés rencontrées et solutions
- Deux fichiers de style : j'avais un `page.css` et un `pages.css`, et les pages chargeaient l'ancien. J'ai supprimé l'ancien et renommé le nouveau avec le nom attendu par les pages.
- Statut « validé » : j'ai compris qu'une mission terminée n'est pas « validée » tant que le coach ne l'a pas dit, donc je l'ai mise à « à présenter ».

7. Sources utilisées :
- Documentation SheetJS : https://docs.sheetjs.com
- localStorage (MDN) : https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
- createElement (MDN) : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- Flexbox (MDN) : https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox
- conic-gradient (MDN) : https://developer.mozilla.org/fr/docs/Web/CSS/gradient/conic-gradient
- Image de la page d'accueil : Unsplash (image libre de droits)

8. Lien du dépôt GitHub

https://github.com/Tantely2010/mon-stage-scietech.git

9. Ce que je retiens pour la suite
L'interface de gestion du stage est fonctionnelle : on peut consulter la description, le planning, les missions et leur statut, les documents et le dépôt Git. La semaine 6 consistera à tester l'ensemble, corriger les anomalies, organiser les documents, rédiger la documentation et présenter la solution.
