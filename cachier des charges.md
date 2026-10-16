Cahier des charges : interface web de gestion et de suivi du stage

Stage Scietech — Tantely Nirina Judickaël RAHARIMANANA

1. Contexte
Stage à distance de 6 semaines chez Scietech, centré sur l'autonomie, la recherche personnelle et le coaching. Le projet final est une interface web qui permet de suivre le stage de son démarrage jusqu'à sa clôture.

## 2. Objectif du projet
Centraliser dans une seule interface les informations utiles à la stagiaire et au coach : description du stage, planning, missions, avancement, livrables et documents.

## 3. Utilisateurs
- **La stagiaire** : consulte son planning et ses missions, suit son avancement, retrouve ses documents.
- **Le coach** : consulte l'avancement, les livrables et les documents, et suit l'état de chaque mission.

## 4. Fonctionnalités attendues

### 4.1 Description du stage
Afficher la durée, les objectifs, les missions et les compétences à développer.

### 4.2 Planning des 6 semaines
Afficher, pour chaque semaine, les objectifs, les tâches et les livrables (source possible : le fichier `planning.xlsx`).

### 4.3 Gestion des missions
- Créer une mission
- Lui donner une description
- Fixer une échéance
- Suivre son statut

### 4.4 Workflow des statuts
Chaque mission suit ce parcours :

à faire → en cours → à présenter → à corriger → validé

### 4.5 Suivi de l'avancement et des livrables
Voir d'un coup d'œil ce qui est terminé, en cours ou à faire, et la liste des livrables rendus.

### 4.6 Accès aux documents
Accéder aux documents du stage organisés dans un Drive de test (liens vers les dossiers).

### 4.7 Consultation claire
Une interface simple à lire, utilisable aussi bien par la stagiaire que par le coach.

### 4.8 Documentation
Documenter le fonctionnement et les choix techniques.

## 5. Organisation des documents (Drive de test)
01 Description, 02 Planning, 03 Cahier des charges, 04 Recherches, 05 Travaux, 06 Livrables, 07 Rapports, 08 Évaluation.

## 6. Données et technologies envisagées
- **Interface** : HTML, CSS et JavaScript
- **Données du planning** : fichier Excel lu avec SheetJS
- **Code** : dépôt GitHub
- **Documents** : Google Drive de test

## 7. Contraintes
- Stage entièrement à distance
- Uniquement des données et des environnements de test
- Aucun accès ni donnée interne sensible de Scietech
- Travail autonome, avec coaching

## 8. Livrables attendus
- Code source de l'interface
- Documentation technique et fonctionnelle
- Notes de recherche et sources
- Présentation finale et démonstration

## 9. Critères de réussite
L'interface permet de suivre un stage de bout en bout, elle est claire à consulter, et je suis capable d'expliquer ce que j'ai réalisé et pourquoi.