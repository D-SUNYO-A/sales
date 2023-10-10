import { displayVenteData, venteData } from "./module/venteModule.js";
import { calculateTotalPages, updatePageIndicator } from "./module/pageModule.js";
import { generateBarChart, generateDoughnutChart, generatePieChart, generateRevenueByRegionStackedBarChart } from "./module/chartModule.js";
import './module/tabsModule.js'

// Page actuelle
let currentPage = 1;

// Nombre de vente par page
let itemsPerPage = 8;

// Nombre de page total
const totalPages = calculateTotalPages(venteData, itemsPerPage);

// Fonction pour actualiser la page
const refreshPage = () => {
    displayVenteData(venteData, currentPage, itemsPerPage);
    updatePageIndicator(currentPage, totalPages);
}

refreshPage();

// Gestionnaire d'événements pour le bouton Suivant
document.getElementById("nextPageButton").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    refreshPage();
  }
});

// Gestionnaire d'événements pour le bouton Précédent
document.getElementById("previousPageButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    refreshPage();
  }
});


// Charts
generateBarChart(venteData, "region", "ventesParRegion");
generateDoughnutChart(venteData, "sales_channel", "ventesParCanal");
generatePieChart(venteData, "item_type", "ventesParArticle");

// Chiffre d'affaire par région
generateRevenueByRegionStackedBarChart(venteData, "chiffresAffairesParRegionStacked");