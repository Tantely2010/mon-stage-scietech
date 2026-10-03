Deuxième semaine (Git et affichage web)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Objectif de la semaine
Étudier les branches Git et concevoir une première interface web permettant d'afficher les branches d'un dépôt et leurs informations principales.

2. Ce que j'ai appris

Les branches Git:
Une branche est une version parallèle du code, qui permet de travailler sur une fonctionnalité ou un test sans modifier la branche principale (main).

Commandes utilisées :
- "git branch" : lister les branches existantes
- "git branch test" ou "git checkout -b test" : créer une nouvelle branche (test)
- "git checkout nom-du-branche" : basculer sur une branche
- "git push -u origin test" : envoyer une branche locale vers GitHub

Construction d'une interface web simple
J'ai créé un projet avec 3 fichiers :
- index.html : la structure de la page
- style.css : la mise en forme visuelle
- script.js : la logique pour récupérer et afficher les données

Utilisation de l'API GitHub avec JavaScript:
Le fichier "script.js" utilise "fetch()" pour appeler l'API GitHub et récupérer la liste des branches d'un dépôt, au format JSON. Les données sont ensuite transformées en éléments HTML (`<li>`) ajoutés dynamiquement à la page, au lieu d'afficher le JSON brut.

3. Fonctionnement du script (résumé)

1. fetch() envoie une requête vers l'API GitHub
2. .then(response => response.json()) transforme la réponse en données utilisables
3. data.forEach(...) parcourt chaque branche reçue
4. Pour chaque branche, un élément <li> est créé avec son nom et le début de son dernier commit
5. Cet élément est ajouté à la liste affichée sur la page (`appendChild`)

4. Résultat obtenu
Une page web qui affiche dynamiquement les branches de mon dépôt "mon-stage-scietech", avec leur nom et le début du commit associé, mise en forme avec un style simple et lisible (cartes, couleurs, espacement).

5. Difficultés rencontrées et solutions
- Compréhension du fonctionnement de `fetch` et des promesses (`.then`) → clarifié en le reliant à ce qui avait été vu en semaine 1 (requête = demande, réponse = JSON)
- Une branche créée en local n'apparaissait pas sur GitHub → résolu en comprenant qu'il faut la pousser avec git push -u origin test

7. Ce que je retiens pour la suite
Je sais maintenant créer une interface simple qui consomme une API et affiche des données dynamiquement. La semaine 3 consistera à améliorer ce prototype avec une actualisation automatique et un affichage en temps réel.