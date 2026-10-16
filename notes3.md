Troisième semaine (Affichage dynamique et temps réel)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Objectif de la semaine
Améliorer le prototype de la semaine 2 : actualisation automatique, récupération des nouvelles informations, historique et amélioration de l'interface. Étudier les solutions techniques permettant une mise à jour en temps réel ou quasi temps réel.

2. Recherche : les solutions pour mettre à jour une page en temps réel

Polling (interrogation régulière)
La page redemande les données à l'API à intervalle régulier (par exemple toutes les 3 minutes). C'est la solution la plus simple, elle ne demande aucun serveur. Le défaut : il y a toujours un petit délai entre un changement et son affichage, et chaque interrogation consomme une requête.

WebSocket
Une connexion permanente est ouverte entre la page et un serveur. Le serveur envoie les changements dès qu'ils arrivent, ce qui donne du vrai temps réel. C'est plus complexe : il faut un serveur qui gère ces connexions.

Webhook
C'est GitHub qui prévient un serveur dès qu'un événement se produit (nouvelle branche, nouveau commit). Il faut donc un serveur accessible depuis Internet pour recevoir ces notifications, puis le relier à la page (par exemple avec un WebSocket).

3. Solution choisie : le polling
J'ai choisi le polling car c'est le plus adapté à un prototype : il fonctionne uniquement avec du JavaScript dans la page, sans serveur. Il suffit pour avoir un affichage en quasi temps réel. Les WebSocket et les webhooks seraient une évolution possible si le projet final avait besoin d'un affichage instantané.

4. Ce que j'ai réalisé

Étape 1 : actualisation automatique
- Le code de récupération des branches est regroupé dans une fonction (chargerBranches) pour pouvoir le relancer.
- "setInterval" relance cette fonction automatiquement.
- `list.innerHTML = ""` vide la liste avant de la remplir, pour éviter les doublons à chaque mise à jour.

Étape 2 : informations supplémentaires
- Affichage de l'heure de la dernière mise à jour (`new Date()` et `toLocaleTimeString`).
- Affichage du nombre de branches (`data.length`).

Étape 3 : historique des commits
- Nouvel appel à l'API GitHub (`/commits?per_page=5`) pour récupérer les 5 derniers commits.
- Affichage du message, de l'auteur et de la date de chaque commit.
- Une fonction `toutActualiser()` lance les deux chargements en même temps.

Étape 4 : amélioration de l'interface
- Mise en forme avec un thème rose: fond en dégradé doux, cartes arrondies avec une ombre légère.
- Contenu centré avec une largeur maximale.

5. Difficultés rencontrées et solutions
- Limite de l'API GitHub : sans authentification, l'API autorise seulement 60 requêtes par heure. Avec une actualisation trop rapide, la limite serait dépassée. J'ai donc choisi un intervalle de 3 minutes (environ 40 requêtes par heure avec les deux appels).
- Message d'erreur dans la console (`Unsafe attempt to load URL file:///...`) : il vient du fait que la page est ouverte directement depuis un fichier. Ce n'est pas une erreur de mon code. Pour l'éviter, on peut utiliser un petit serveur local (extension Live Server de VS Code).
- Valeur de test oubliée : j'avais mis un intervalle court pour tester (10 secondes) puis je l'ai remis à la bonne valeur après avoir envoyé le code. J'ai corrigé avec un nouveau commit. Retenu : l'historique Git garde la trace de ces corrections.
- Réponse inattendue de l'API : en cas de limite dépassée, GitHub renvoie un message d'erreur au lieu d'une liste. J'ai ajouté une vérification (`Array.isArray`) pour que la page ne plante pas.
- limite mise à jour : je n'ai fais afficher que les commits du branche main car avec 3 branches, ça fait 4 requêtes à chaque mise à jour. Toutes les 3 minutes, ça donnerait 80 requêtes par heure, donc au-dessus de la limite de 60. 

6. Lien du dépôt GitHub

https://github.com/Tantely2010/mon-stage-scietech.git

7. Ce que je retiens pour la suite
Je sais maintenant faire une page qui se met à jour toute seule en interrogeant régulièrement une API, afficher plusieurs types d'informations et gérer les limites d'une API. La semaine 4 portera sur la manipulation de fichiers, un espace Drive de test et les données Excel.