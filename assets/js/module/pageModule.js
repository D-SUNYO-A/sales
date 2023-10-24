import { getVenteData } from "./venteModule.js";

// Fonction pour calculer le total des pages
export const calculateTotalPages = async (itemsPerPage) => {
  const venteData = await getVenteData();
  return Math.ceil(venteData.length / itemsPerPage);
};

// Fonction pour mettre à jour l'indicateur de page actuelle
export const updatePageIndicator = (currentPage, totalPages) => {
  const pageIndicator = document.getElementById("currentPageIndicator");
  pageIndicator.textContent = `Page ${currentPage}/${totalPages}`;
};

