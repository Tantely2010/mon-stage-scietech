const pages = [
  { fichier: "accueil.html", nom: "Accueil" },
  { fichier: "planning.html", nom: "Planning" },
  { fichier: "missions.html", nom: "Missions" },
  { fichier: "documents.html", nom: "Documents" },
  { fichier: "interface.html", nom: "Interface Git" }
];

const pageActuelle = window.location.pathname.split("/").pop() || "accueil.html";

const menu = document.createElement("aside");
menu.className = "menu";

const logo = document.createElement("div");
logo.className = "logo";
logo.textContent = "SCIETECH";
menu.appendChild(logo);

const slogan = document.createElement("p");
slogan.className = "slogan";
slogan.textContent = "Innovation • Technologie • Avenir";
menu.appendChild(slogan);

const nav = document.createElement("nav");

pages.forEach(page => {
  const lien = document.createElement("a");
  lien.href = page.fichier;
  lien.textContent = page.nom;
  if (page.fichier === pageActuelle) {
    lien.className = "actif";
  }
  nav.appendChild(lien);
});

menu.appendChild(nav);

const phrase = document.createElement("p");
phrase.className = "menu-phrase";
phrase.textContent = "Petit pas aujourd'hui, grandes réussites demain";
menu.appendChild(phrase);

document.body.insertBefore(menu, document.body.firstChild);