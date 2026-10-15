const repo = "Tantely2010/mon-stage-scietech";

function chargerBranches() {
  fetch(`https://api.github.com/repos/${repo}/branches`)
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("branches-list");
      list.innerHTML = "";

      data.forEach(branch => {
        const item = document.createElement("li");
        item.textContent = branch.name + " — commit: " + branch.commit.sha.substring(0, 7);
        list.appendChild(item);
      });

      const maintenant = new Date();
      document.getElementById("derniere-m-a-j").textContent =
        "Dernière mise à jour : " + maintenant.toLocaleTimeString("fr-FR");
      document.getElementById("nombre-branches").textContent =
        "Nombre de branches : " + data.length;
    });
}

chargerBranches();
setInterval(chargerBranches, 60000);