// Fonction pour calculer le total des pages
export const calculateTotalPages = (data, itemsPerPage) => {
  return Math.ceil(data.length / itemsPerPage);
};

// Fonction pour mettre à jour l'indicateur de page actuelle
export const updatePageIndicator = (currentPage, totalPages) => {
  const pageIndicator = document.getElementById("currentPageIndicator");
  pageIndicator.textContent = `Page ${currentPage}/${totalPages}`;
};

