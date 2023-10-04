// Afficher par default la liste des données
tabContents[0].style.display = "flex";

// Ajoutez un gestionnaire d'événements à chaque onglet du menu tabs
tabLinks.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Cachez tous les contenus des onglets
    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    // Affichez le contenu de l'onglet correspondant
    tabContents[index].style.display = "flex";

    // Supprimez la classe "active" de tous les onglets
    tabLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Ajoutez la classe "active" à l'onglet actuellement sélectionné
    tabLinks[index].classList.add("active");
  });
});