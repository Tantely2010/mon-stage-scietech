const statuts = ["à faire", "en cours", "à présenter", "à corriger", "validé"];

const couleurs = {
  "à faire": "s-afaire",
  "en cours": "s-encours",
  "à présenter": "s-presenter",
  "à corriger": "s-corriger",
  "validé": "s-valide"
};

let missions = [];

const sauvegarde = localStorage.getItem("missions");
if (sauvegarde) {
  missions = JSON.parse(sauvegarde);
}

function sauvegarder() {
  localStorage.setItem("missions", JSON.stringify(missions));
}

function afficher() {
  const corps = document.getElementById("missions-body");
  corps.innerHTML = "";

  missions.forEach((mission, index) => {
    const tr = document.createElement("tr");

    [mission.nom, mission.description, mission.echeance].forEach(texte => {
      const td = document.createElement("td");
      td.textContent = texte;
      tr.appendChild(td);
    });

    const tdStatut = document.createElement("td");
    const select = document.createElement("select");
    select.className = "statut " + couleurs[mission.statut];

    statuts.forEach(statut => {
      const option = document.createElement("option");
      option.textContent = statut;
      if (statut === mission.statut) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener("change", function () {
      missions[index].statut = select.value;
      sauvegarder();
      afficher();
    });

    tdStatut.appendChild(select);
    tr.appendChild(tdStatut);

  
    const tdSuppr = document.createElement("td");
    const bouton = document.createElement("button");
    bouton.className = "supprimer";
    bouton.textContent = "Supprimer";
    bouton.addEventListener("click", function () {
      missions.splice(index, 1);
      sauvegarder();
      afficher();
    });
    tdSuppr.appendChild(bouton);
    tr.appendChild(tdSuppr);

    corps.appendChild(tr);
  });

  const total = missions.length;
  const valides = missions.filter(m => m.statut === "validé").length;
  let pourcentage = 0;
  if (total > 0) {
    pourcentage = Math.round((valides / total) * 100);
  }

  document.getElementById("resume").textContent =
    valides + " mission(s) validée(s) sur " + total;
  document.getElementById("barre").style.width = pourcentage + "%";

  if (total === 0) {
    document.getElementById("vide").style.display = "block";
  } else {
    document.getElementById("vide").style.display = "none";
  }
}

document.getElementById("ajouter").addEventListener("click", function () {
  const nom = document.getElementById("champ-nom").value;

  if (nom === "") {
    alert("Donne un nom à la mission.");
    return;
  }

  missions.push({
    nom: nom,
    description: document.getElementById("champ-description").value,
    echeance: document.getElementById("champ-echeance").value,
    statut: "à faire"
  });

  document.getElementById("champ-nom").value = "";
  document.getElementById("champ-description").value = "";
  document.getElementById("champ-echeance").value = "";

  sauvegarder();
  afficher();
});

document.getElementById("fichier-missions").addEventListener("change", function (event) {
  const fichier = event.target.files[0];
  if (!fichier) return;

  const lecteur = new FileReader();

  lecteur.onload = function (e) {
    const classeur = XLSX.read(e.target.result, { type: "array" });
    const feuille = classeur.Sheets[classeur.SheetNames[0]];
    const lignes = XLSX.utils.sheet_to_json(feuille);

    missions = [];

    lignes.forEach(ligne => {
      let statut = "à faire";
      if (statuts.includes(ligne.Statut)) {
        statut = ligne.Statut;
      }

      missions.push({
        nom: ligne.Mission || "",
        description: ligne.Description || "",
        echeance: ligne["Échéance"] || "",
        statut: statut
      });
    });

    sauvegarder();
    afficher();
  };

  lecteur.readAsArrayBuffer(fichier);
});

afficher();