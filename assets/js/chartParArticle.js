// Répartition des ventes par type d'article.

// Écoutez l'événement personnalisé pour réagir lorsque les données sont prêtes
window.addEventListener("dataReady", () => {
  const salesByType = {};

  venteData.sales_100.forEach((vente) => {
    const itemType = vente.item_type;
    if (salesByType[itemType]) {
      salesByType[itemType] += 1;
    } else {
      salesByType[itemType] = 1;
    }
  });

  // Récupérez le contexte du canvas HTML pour afficher le graphique circulaire
  const vpa = document.getElementById("ventesParArticle");

  // Définition des données pour le graphique circulaire
  const types = Object.keys(salesByType); // Noms des types d'articles (Tableau)
  const salesCounts = Object.values(salesByType); // Nombre de ventes par type d'article (Tableau)

  // Couleurs de remplissage pour chaque secteur
  const sectorColors = [
    "rgba(255, 99, 132, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(128, 0, 0, 0.8)",
    "rgba(0, 128, 0, 0.8)",
    "rgba(0, 0, 128, 0.8)",
    "rgba(255, 0, 255, 0.8)",
    "rgba(128, 128, 128, 0.8)",
    "rgba(0, 255, 255, 0.8)",
  ];

  // Configuration du graphique
  new Chart(vpa, {
    type: "pie",
    data: {
      labels: types, // Noms des types d'articles
      datasets: [
        {
          data: salesCounts, // Données de ventes par type d'article
          backgroundColor: sectorColors,
          borderColor: sectorColors,
          borderWidth: 1,
        },
      ],
    },
  });
});
