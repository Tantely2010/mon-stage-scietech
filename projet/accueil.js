const statuts = ["à faire", "en cours", "à présenter", "à corriger", "validé"];

const couleurs = {
  "à faire": "s-afaire",
  "en cours": "s-encours",
  "à présenter": "s-presenter",
  "à corriger": "s-corriger",
  "validé": "s-valide"
};

let semaines = [
  { numero: 1, statut: "à présenter" },
  { numero: 2, statut: "à présenter" },
  { numero: 3, statut: "à présenter" },
  { numero: 4, statut: "à présenter" },
  { numero: 5, statut: "à présenter" },
  { numero: 6, statut: "en cours" }
];

const sauvegarde = localStorage.getItem("semaines2");
if (sauvegarde) {
  semaines2 = JSON.parse(sauvegarde);
}

function sauvegarder() {
  localStorage.setItem("semaines2", JSON.stringify(semaines2));
}

function afficher() {
  const liste = document.getElementById("liste-planning");
  liste.innerHTML = "";
  let nbValides = 0;

  semaines.forEach((s, index) => {
    if (s.statut === "validé") {
      nbValides++;
    }

    const li = document.createElement("li");

    const nom = document.createElement("span");
    nom.textContent = "Semaine " + s.numero;

    const select = document.createElement("select");
    select.className = "statut " + couleurs[s.statut];

    statuts.forEach(statut => {
      const option = document.createElement("option");
      option.textContent = statut;
      if (statut === s.statut) {
        option.selected = true;
      }
      select.appendChild(option);
    });

    select.addEventListener("change", function () {
      semaines[index].statut = select.value;
      sauvegarder();
      afficher();
    });

    li.appendChild(nom);
    li.appendChild(select);
    liste.appendChild(li);
  });

  const pourcentage = Math.round((nbValides / semaines.length) * 100);

  document.getElementById("pourcentage").textContent = pourcentage + "%";
  document.getElementById("cercle").style.background =
    "conic-gradient(#c9669f " + pourcentage + "%, #f5e3ec 0)";
  document.getElementById("compteur").textContent =
    nbValides + " / " + semaines.length + " semaines validées";
}

afficher();