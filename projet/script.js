const repo = "Tantely2010/mon-stage-scietech";

function chargerBranches() {
  fetch(`https://api.github.com/repos/${repo}/branches`)
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data)) {
        console.error("Réponse inattendue :", data);
        return;
      }

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

function chargerCommits() {
  fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`)
    .then(response => response.json())
    .then(data => {
      if (!Array.isArray(data)) {
        console.error("Réponse inattendue :", data);
        return;
      }

      const list = document.getElementById("commits-list");
      list.innerHTML = "";

      data.forEach(commit => {
        const item = document.createElement("li");
        const date = new Date(commit.commit.author.date).toLocaleString("fr-FR");
        item.textContent =
          commit.commit.message + " — " + commit.commit.author.name + " (" + date + ")";
        list.appendChild(item);
      });
    });
}

function toutActualiser() {
  chargerBranches();
  chargerCommits();
}

toutActualiser();
setInterval(toutActualiser, 180000);