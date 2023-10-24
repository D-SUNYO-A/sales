import { calculChiffresAffairesParRegion, countOccurrences } from "../utils/dataUtils.js";
import { getVenteData } from "./venteModule.js";

/**
 * Génère un graphique.
 *
 * @param {string} labelKey - La clé utilisée pour extraire les libellés des catégories (Ex: order_id, region, country, ...).
 * @param {string} canvasId - L'identifiant du canvas HTML où afficher le graphique.
 */

export const generateBarChart = async (labelKey, canvasId) => {

  const venteData = await getVenteData();

  // Récupère le contexte du canvas
  const context = document.getElementById(canvasId);

  // Compte le nombre d'occurrences de chaque catégorie dans les données
  const salesByCategory = countOccurrences(venteData, labelKey);

  // Définition des données pour le graphique
  const labels = Object.keys(salesByCategory);
  const dataValues = Object.values(salesByCategory);

  // Couleurs de remplissage
  const sectorBackgrond = "rgba(99, 102, 241, 0.2)";
  const sectorborder = "rgba(99, 102, 241, 1)";

  new Chart(context, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Nombre de ventes",
          data: dataValues,
          backgroundColor: sectorBackgrond,
          borderColor: sectorborder,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export const generateDoughnutChart = async (labelKey, canvasId) => {
  const venteData = await getVenteData();
  const context = document.getElementById(canvasId);
  const salesByCategory = countOccurrences(venteData, labelKey);

  // Définition des données pour le graphique
  const labels = Object.keys(salesByCategory);
  const dataValues = Object.values(salesByCategory);

  // Couleurs de remplissage
  const sectorBackgrond = ["#dcfce7", "#ffedd5"];
  const sectorborder = ["#166534", "#9a3412"];

  new Chart(context, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: sectorBackgrond,
          borderColor: sectorborder,
          borderWidth: 1,
        },
      ],
      options: {
        cutout: "50%",
      },
    },
  });
};

export const generatePieChart = async (labelKey, canvasId) => {
  const venteData = await getVenteData();
  const context = document.getElementById(canvasId);
  const salesByCategory = countOccurrences(venteData, labelKey);

  // Définition des données pour le graphique
  const labels = Object.keys(salesByCategory);
  const dataValues = Object.values(salesByCategory);

  // Couleurs de remplissage
  const sectorBackgrond = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(128, 0, 0, 0.5)",
    "rgba(0, 128, 0, 0.5)",
    "rgba(0, 0, 128, 0.5)",
    "rgba(255, 0, 255, 0.5)",
    "rgba(128, 128, 128, 0.5)",
    "rgba(0, 255, 255, 0.5)",
  ];

  const sectorborder = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(128, 0, 0, 1)",
    "rgba(0, 128, 0, 1)",
    "rgba(0, 0, 128, 1)",
    "rgba(255, 0, 255, 1)",
    "rgba(128, 128, 128, 1)",
    "rgba(0, 255, 255, 1)",
  ];

  new Chart(context, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: sectorBackgrond,
          borderColor: sectorborder,
          borderWidth: 1,
        },
      ],
    },
  });
};

/**
 * Génère un graphique.
 *
 * @param {string} canvasId - L'identifiant du canvas HTML où afficher le graphique.
 */
export const generateRevenueByRegionStackedBarChart = async (canvasId) => {
  const venteData = await getVenteData();
  // Créez une structure de données pour stocker les chiffres d'affaires par région
  const chiffresAffairesParRegion = calculChiffresAffairesParRegion(venteData);

  // Obtenez les libellés (noms des régions) et les valeurs (chiffres d'affaires) à partir de la structure de données
  const labels = Object.keys(chiffresAffairesParRegion);
  const dataValues = Object.values(chiffresAffairesParRegion);

  // Couleur de remplissage pour les barres du graphique empilé
  const barBackgroundColor = 'rgba(99, 102, 241, 0.7)';

  // Créez le graphique en barres empilées
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: "Chiffre d'affaires",
          data: dataValues,
          backgroundColor: barBackgroundColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
