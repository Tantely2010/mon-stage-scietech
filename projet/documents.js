const lienDrive = "https://drive.google.com/drive/folders/17RWBnlroqvVRbT-xKzlH4sZfEqfSrzG7?usp=drive_link";

const dossiers = [
  { nom: "01 Description", texte: "Sujet et présentation du stage", lien: "https://drive.google.com/drive/folders/1yQqNzE2wpp_Y7M3dJ1sQjTDgxVzT9o1H?usp=drive_link" },
  { nom: "02 Planning", texte: "Planning des 6 semaines", lien: "https://drive.google.com/drive/folders/12R6Fc7C2hPK6ka-ayNx4YTxukmmSUt4W?usp=drive_link" },
  { nom: "03 Cahier des charges", texte: "Fonctionnalités attendues", lien: "https://drive.google.com/drive/folders/1CXhaLq7kwM78oeZCjfef-vjnu2ZFNZXJ?usp=drive_link" },
  { nom: "04 Recherches", texte: "Notes de recherche et sources", lien: "https://drive.google.com/drive/folders/1EUQcfbgLibultebdlavtjkmC5l3Xqtux?usp=drive_link" },
  { nom: "05 Travaux", texte: "Prototypes et code", lien: "https://drive.google.com/drive/folders/1HY0XHcyEAE4WgjTJ6pCSepQuz7uc53n8?usp=drive_link" },
  { nom: "06 Livrables", texte: "Documents à rendre", lien: "https://drive.google.com/drive/folders/1ZRVdjhCuUfTuzcGtdBT2K0taj8X5oGX1?usp=drive_link" },
  { nom: "07 Rapports", texte: "Comptes rendus", lien: "https://drive.google.com/drive/folders/1QGT1n1zIav3CydZzXtxAEwLoM2oMDYHu?usp=drive_link" },
  { nom: "08 Évaluation", texte: "Retours du coach", lien: "https://drive.google.com/drive/folders/1Jm7gGPqz-FKmIJ72Q-nup30-oeieOsUG?usp=drive_link" }
];

const conteneur = document.getElementById("docs");

dossiers.forEach(dossier => {
  const carte = document.createElement("a");
  carte.className = "doc-carte";
  carte.target = "_blank";

  if (dossier.lien === "") {
    carte.href = lienDrive;
  } else {
    carte.href = dossier.lien;
  }

  const nom = document.createElement("span");
  nom.className = "doc-nom";
  nom.textContent = dossier.nom;

  const texte = document.createElement("span");
  texte.className = "doc-texte";
  texte.textContent = dossier.texte;

  carte.appendChild(nom);
  carte.appendChild(texte);
  conteneur.appendChild(carte);
});