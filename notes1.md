Première semaine (Découverte et préparation)

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Mise en place de l'environnement
- Installation de Node.js et vérification (node -v, npm -v)
- Amélioration de mon compte GitHub

2. Ce que j'ai appris

API:
Une API permet à deux programmes de communiquer entre eux. On peut la comparer à un échange de SMS : je demande une information, l'autre programme me répond avec cette information.

HTTP
C'est le protocole utilisé pour cette communication. Les deux méthodes principales que j'ai étudiées :
- GET : demander/récupérer une information
- POST : envoyer une information pour qu'elle soit enregistrée

JSON
C'est le format dans lequel les données échangées sont écrites, organisées en clé/valeur. Exemple :

{
  "nom": "Marie",
  "age": 25
}


3. Tests réalisés
- `https://jsonplaceholder.typicode.com/users/1` → obtenu les informations d'une personne test (nom, email, adresse...)
- `https://api.github.com/repos/nodejs/node/branches` → obtenu la liste des branches d'un dépôt réel, au format JSON

4. Git — mise en pratique
- Création d'un dépôt local avec "git init"
- Ajout d'un fichier avec "git add"
- Premier commit réalisé avec "git commit"
- Connexion du dépôt local à GitHub (`git remote add origin`)
- Envoi du commit en ligne avec "git push"

5. Difficultés rencontrées et solutions
- Erreur `index.lock` lors d'un commit → résolue en supprimant le fichier verrou
- Confusion initiale sur l'emplacement du dépôt (dossier utilisateur au lieu du dossier projet) → corrigée en créant un dossier de projet dédié

6. Lien du dépôt GitHub

https://github.com/Tantely2010/mon-stage-scietech.git

7. Ce que je retiens pour la suite
Je suis maintenant capable de créer un dépôt Git, faire des commits, et comprendre le principe de base d'une API et du format JSON. La semaine 2 consistera à afficher ces informations dans une interface web.
