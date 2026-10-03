const repo = "Tantely2010/mon-stage-scietech";

fetch(`https://api.github.com/repos/${repo}/branches`)
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("branches-list");
    data.forEach(branch => {
      const item = document.createElement("li");
      item.textContent = branch.name + " — commit: " + branch.commit.sha.substring(0, 7);
      list.appendChild(item);
    });
  });