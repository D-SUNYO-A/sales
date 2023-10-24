import "./module/tabsModule.js";
import { loadSkeletonCard } from "./module/loaderModule.js";
import { calculateTotalPages, updatePageIndicator } from "./module/pageModule.js";
import { displayVenteData } from "./module/venteModule.js";
import { generateBarChart, generateDoughnutChart, generatePieChart, generateRevenueByRegionStackedBarChart } from "./module/chartModule.js";

// Page actuelle
let currentPage = 1;

// Nombre de vente par page
let itemsPerPage = 8;

// Nombre de page total
const totalPages = await calculateTotalPages(itemsPerPage);

// Fonction pour actualiser la page
const refreshPage = () => {
  displayVenteData(currentPage, itemsPerPage);
  updatePageIndicator(currentPage, totalPages);
};

refreshPage();

// Gestionnaire d'événements pour le bouton Suivant
document.getElementById("nextPageButton").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadSkeletonCard(itemsPerPage);
    refreshPage();
  }
});

// Gestionnaire d'événements pour le bouton Précédent
document.getElementById("previousPageButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadSkeletonCard(itemsPerPage);
    refreshPage();
  }
});

// Charts
generateBarChart("region", "ventesParRegion");
generateDoughnutChart("sales_channel", "ventesParCanal");
generatePieChart("item_type", "ventesParArticle");

// Chiffre d'affaire par région
generateRevenueByRegionStackedBarChart("chiffresAffairesParRegionStacked");
