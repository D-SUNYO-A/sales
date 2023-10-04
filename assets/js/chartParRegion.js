// Nombre de ventes par région.

// Écoutez l'événement personnalisé pour réagir lorsque les données sont prêtes
window.addEventListener("dataReady", () => {
  const salesByRegion = {};

  venteData.sales_100.forEach((vente) => {
    const region = vente.region;
    if (salesByRegion[region]) {
      salesByRegion[region] += 1;
    } else {
      salesByRegion[region] = 1;
    }
  });

  // Récupérez le contexte du canvas HTML où pour afficher le graphique
  const vpr = document.getElementById("ventesParRegion");

  // Définition des données pour le graphique
  const regions = Object.keys(salesByRegion); // Noms des régions (Tableau)
  const salesCounts = Object.values(salesByRegion); // Nombre de ventes par régions (Tableau)

  // Configuration du graphique
  new Chart(vpr, {
    type: "bar",
    data: {
      labels: regions, // Noms des régions sur l'axe des x
      datasets: [
        {
          label: "Nombre de ventes",
          data: salesCounts, // Données de ventes sur l'axe des y
          backgroundColor: "rgba(99, 102, 241, 0.2)", 
          borderColor: "rgba(99, 102, 241, 1)", 
          borderWidth: 1, 
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true, // Commencer l'axe y à zéro
        },
      },
    },
  });
});