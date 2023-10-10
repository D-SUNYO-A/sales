/**
 * Fonction permettant de découper un tableau de données en tranches pour affichage paginé.
 *
 * @param {Array} data - Le tableau de données à découper.
 * @param {number} currentPage - Le numéro de la page actuelle (commençant à 1).
 * @param {number} itemsPerPage - Le nombre d'éléments à afficher par page (8 par page).
 * @returns {Array} Un sous-ensemble du tableau de données correspondant à la page spécifiée.
 */
export const sliceDataToDisplay = (data, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage; // 0
  const endIndex = startIndex + itemsPerPage; // 8
  return data.slice(startIndex, endIndex); // [0, 8[ => [0, 7]
};

/**
 * Compte le nombre d'occurrences de chaque valeur d'une propriété dans le tableau de données de vente.
 *
 * @param {Array} data - Le tableau de données de vente.
 * @param {string} propertyName - Le nom de la propriété à compter (ex: region, country, item_type, sales_channel,...).
 * @returns {Object} Un objet contenant les valeurs de la propriété comme clés et le nombre d'occurrences comme valeurs.
 */
export const countOccurrences = (data, propertyName) => {
  return data.reduce((acc, item) => {
    // Obtient la valeur de la propriété spécifiée pour l'objet actuel
    const propertyValue = item[propertyName];

    // Accumuler le nombre de vente par 'propertyName' dans un objet "acc"
    // Incrémente le compteur pour cette valeur de propriété dans l'objet "acc"
    acc[propertyValue] = (acc[propertyValue] || 0) + 1;
    return acc;
  }, {});
};

/**
 * Calcule les chiffres d'affaires par région à partir des données de vente.
 *
 * @param {Array} data - Les données de vente.
 * @returns {Object} Un objet contenant les chiffres d'affaires par région.
 */
export const calculChiffresAffairesParRegion = (data) => {
  return data.reduce((acc, vente) => {
    const region = vente.region;

    // Calculez le chiffre d'affaire de la vente en cours 
    // en multipliant les unités vendues par le prix unitaire
    const chiffreAffaire = vente.units_sold * vente.unit_price;

    // Accumuler les chiffres d'affaires par région dans un objet "acc"
    // Si la région existe déjà dans l'objet "acc", ajoutez le chiffre d'affaire à la valeur existante, sinon initialisez-la à 0
    acc[region] = (acc[region] || 0) + chiffreAffaire;

    return acc;
  }, {});
};
