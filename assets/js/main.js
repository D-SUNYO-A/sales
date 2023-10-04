// Selection du div avec la class 'list' du tableau dot l'id est : 'tableau-ventes'
const listeVente = document.getElementsByClassName("list")[0];

// Selection du modal pour les details d'une vente
const modal = document.getElementById("venteModal");

// Selection du contenue du modal
const modalContent = document.getElementById("modalContent");

// Sélectionnez tous les menu .tab-link
const tabLinks = document.querySelectorAll(".tab-link");

// Sélectionnez tous les tabs de tab-content
const tabContents = document.querySelectorAll(".tab-pane");

// Pour stocker les données de ventes extrait du JSON
let venteData;

// Format de date personnalisé
const customFormat = "DD/MM/YYYY";

// Créez un événement personnalisé pour signaler que les données sont prêtes
const dataReadyEvent = new Event('dataReady');