Quatrième semaine (Drive et Excel)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Objectif de la semaine

Étudier la manipulation de fichiers et l'utilisation d'un espace Drive de test, lire, traiter et organiser des données Excel, et commencer à réfléchir au lien entre documents, données et interface web.

2. Ce que j'ai appris

Google Drive est un espace de stockage en ligne. Il permet de ranger des fichiers dans des dossiers, de les retrouver depuis n'importe quel appareil et de les partager avec un lien. Dans le projet, il joue le rôle de l'armoire où sont rangés les documents du stage, alors que GitHub sert à conserver le code.

Lire un fichier Excel avec JavaScript Un navigateur ne sait pas lire un fichier Excel tout seul. J'ai utilisé la bibliothèque SheetJS, qui ouvre le classeur et transforme chaque ligne du tableau en objet, comme du JSON. Les titres de la première ligne deviennent les noms des informations (Semaine, Objectif, Tâche).

Lire un fichier choisi par l'utilisateur Le bouton « choisir un fichier » (<input type="file">) donne accès au fichier choisi. Un FileReader le lit, et le code qui traite les données s'exécute seulement quand la lecture est terminée (onload), comme le .then d'un fetch.

3. Ce que j'ai réalisé

Fichier Excel de test planning.xlsx contient le planning des 6 semaines, avec les colonnes Semaine, Objectif et Tâche.

Page planning.html :

Un bouton pour choisir le fichier Excel
Un script (planning.js) qui lit le fichier avec SheetJS
Un tableau HTML, rempli ligne par ligne, avec le même style que la page des branches (thème rose, cartes arrondies)

Drive de test J'ai créé un dossier Stage Scietech - Test avec les 8 sous-dossiers proposés dans le sujet : 01 Description, 02 Planning, 03 Cahier des charges, 04 Recherches, 05 Travaux, 06 Livrables, 07 Rapports, 08 Évaluation. J'y ai rangé les documents du stage.

Seuls des documents et des accès de test sont utilisés, conformément aux règles du stage.

4. Recherche : accéder à Google Drive depuis un  code (non réalisé par moi)

L'API Google Drive permet à un programme de lister les fichiers d'un dossier, de les lire ou de les envoyer. Voici ce que j'ai compris :

Il faut créer un projet dans la Google Cloud Console et activer l'API Drive.
L'accès à des fichiers privés demande une authentification . C'est plus complexe qu'un simple fetch.
Pour un dossier partagé publiquement, une clé API peut suffire à lister son contenu.

Je n'ai pas implémenté cette partie cette semaine. Pour le projet final, la solution la plus simple serait d'afficher dans l'interface des liens vers les dossiers du Drive, et d'étudier l'API si le temps le permet.

5. Réflexion sur le lien entre documents, données et interface
Excel = les données (le planning, les missions et les objectifs )
Drive = les documents (sujet, notes, livrables, rapports)
L'interface web = le point d'entrée qui affiche les données et donne accès aux documents

Pour la semaine 5, l'interface de gestion du stage pourra lire un fichier Excel pour afficher le planning et les missions, et proposer des liens vers les bons dossiers du Drive.

6. Difficultés rencontrées et solutions
Colonne vide dans le tableau : un petit blanc apparaissait à côté de « Tâche ». Il venait de la colonne programme, qui était vide. Je l'ai retirée du tableau, du code et du fichier Excel.
Noms de colonnes : dans le code, les noms doivent être écrits exactement comme dans l'Excel, sinon l'affichage donne undefined.
Fichier lu seulement à la sélection : après chaque modification de l'Excel, il faut rechoisir le fichier dans la page pour voir le changement.
Fichier supprimé par erreur : j'ai supprimé notes3.md de mon dossier. Comme il était déjà sur GitHub, j'ai pu le récupérer. Retenu : l'historique Git sert aussi de sauvegarde.

8. Lien du dépôt GitHub

https://github.com/Tantely2010/mon-stage-scietech.git

9. Ce que je retiens pour la suite

Je sais maintenant lire un fichier Excel avec du code et afficher son contenu dans une page web, et organiser des documents dans un Drive de test. La semaine 5 consistera à concevoir l'architecture de l'interface de gestion du stage et à mettre en place ses principales fonctionnalités.