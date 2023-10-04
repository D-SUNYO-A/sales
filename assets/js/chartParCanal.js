// Répartition des ventes par canal de vente.

// Écoutez l'événement personnalisé pour réagir lorsque les données sont prêtes
window.addEventListener("dataReady", () => {
  const salesByChannel = {};

  venteData.sales_100.forEach((vente) => {
    const channel = vente.sales_channel;
    if (salesByChannel[channel]) {
      salesByChannel[channel] += 1;
    } else {
      salesByChannel[channel] = 1;
    }
  });

  // Récupérez le contexte du canvas HTML pour afficher le graphique
  const vpc = document.getElementById("ventesParCanal");

  // Définition des données pour le graphique
  const channels = Object.keys(salesByChannel); // Noms des canaux de vente (Tableau)
  const salesCounts = Object.values(salesByChannel); // Nombre de ventes par canal de vente (Tableau)

  // Configuration du graphique
  new Chart(vpc, {
    type: "doughnut",
    data: {
      labels: channels, // Noms des canaux de vente
      datasets: [
        {
          data: salesCounts, // Données de ventes par canal de vente
          backgroundColor: ["#dcfce7", "#ffedd5"],
          borderColor: ["#166534", "#9a3412"],
          borderWidth: 1,
        },
      ],
      options: {
        cutout: "50%", // Taille du trou au milieu (50% pour un cercle complet)
      },
    },
  });
});
