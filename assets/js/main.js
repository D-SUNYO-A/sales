import { displayVenteData, venteData } from "./module/venteModule.js";
import { calculateTotalPages, updatePageIndicator } from "./module/pageModule.js";
import { generateBarChart, generateDoughnutChart, generatePieChart, generateRevenueByRegionStackedBarChart } from "./module/chartModule.js";
import './module/tabsModule.js'
import { loadSkeletonCard } from "./module/loaderModule.js";

// Page actuelle
let currentPage = 1;

// Nombre de vente par page
let itemsPerPage = 8;

// Nombre de page total
const totalPages = calculateTotalPages(venteData, itemsPerPage);

// Afficher les card-skeleton en attendant que les données recuperer soient prets
loadSkeletonCard(itemsPerPage);

// Fonction pour actualiser la page
const refreshPage = () => {
    setTimeout(() => {
      displayVenteData(venteData, currentPage, itemsPerPage);
      updatePageIndicator(currentPage, totalPages);
    }, 1500)
}

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
generateBarChart(venteData, "region", "ventesParRegion");
generateDoughnutChart(venteData, "sales_channel", "ventesParCanal");
generatePieChart(venteData, "item_type", "ventesParArticle");

// Chiffre d'affaire par région
generateRevenueByRegionStackedBarChart(venteData, "chiffresAffairesParRegionStacked");