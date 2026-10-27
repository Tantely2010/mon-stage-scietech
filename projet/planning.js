document.getElementById("fichier-excel").addEventListener("change", function (event) {
  const fichier = event.target.files[0];
  if (!fichier) return;

  const lecteur = new FileReader();

  lecteur.onload = function (e) {
    const classeur = XLSX.read(e.target.result, { type: "array" });
    const feuille = classeur.Sheets[classeur.SheetNames[0]];
    const lignes = XLSX.utils.sheet_to_json(feuille);

    const corps = document.getElementById("planning-body");
    corps.innerHTML = "";

    lignes.forEach(ligne => {
      const tr = document.createElement("tr");

<<<<<<< HEAD
      const valeurs = [ligne.Semaine, ligne.Objectif, ligne["Tâche"]];
=======
      const valeurs = [
        ligne.Semaine,
        ligne.Objectif,
        ligne["Tâche"],
        ligne.Livrable
      ];

>>>>>>> test2
      valeurs.forEach(valeur => {
        const td = document.createElement("td");
        td.textContent = valeur;
        tr.appendChild(td);
      });

      corps.appendChild(tr);
    });
  };

  lecteur.readAsArrayBuffer(fichier);
});