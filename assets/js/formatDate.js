// Fonction pour formater une date au format personnalisé
const formatDateToCustomFormat = (dateISO8601, customFormat) => {

  // Crée un objet Date à partir de la date au format ISO8601
  const dateObj = new Date(dateISO8601);

  // Récupère l'année (ex: 2023)
  const year = dateObj.getFullYear();

  // Récupère le mois (de 1 à 12) et le formate sur 2 chiffres (ex: 03 pour mars)
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");

  // Récupère le jour du mois et le formate sur 2 chiffres (ex: 09)
  const day = dateObj.getDate().toString().padStart(2, "0");

  // Remplace les marqueurs de format dans la chaîne personnalisée par les valeurs de date calculées
  const formattedDate = customFormat
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day);

  // Retourne la date formatée
  return formattedDate;
};