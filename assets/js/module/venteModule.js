import Vente from "./../class/Vente.js";
import { sliceDataToDisplay } from "./../utils/dataUtils.js";
import "./../components/VenteCard.js";

// Fonction pour récupérer les données de vente depuis le fichier JSON
export const getVenteData = async () => {
  try {
    // Récupérer les données JSON
    const response = await fetch("./data/sales_100.json");

    // Vérifie si la réponse HTTP n'est pas OK
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données de vente.");
    }

    // Stocker dans data les données recuperées
    const data = await response.json();

    // Mappe les données de vente JSON en instances de la classe "Vente"
    // en utilisant le constructeur de "Vente" avec les valeurs de chaque vente
    return data.sales_100.map(
      (venteData) => new Vente(...Object.values(venteData))
    );
  } catch (error) {
    // Gère les erreurs génériques
    console.error(error);
  }
};

// Attendre que getVenteData() récupère les données puis le stocker dans venteData
export const venteData = await getVenteData();

// Afficher tout les données de vente par page
export const displayVenteData = (data, currentPage, itemsPerPage) => {
  const listContainer = document.querySelector(".list");

  // Effacer la liste des ventes actuellement affichées
  listContainer.innerHTML = "";

  // Calculez la plage d'indices des ventes à afficher
  const ventesToDisplay = sliceDataToDisplay(data, currentPage, itemsPerPage);

  ventesToDisplay.forEach((vente) => {
    const venteCard = document.createElement('vente-card');
    venteCard.data = vente;
    listContainer.appendChild(venteCard);
  });
};