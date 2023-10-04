// Gestion des données

// Utilisation de fetch pour récupérer les données JSON depuis le fichier : 'sales_100.json'
fetch("./data/sales_100.json")
  .then((response) => handleResponse(response))
  .then((data) => {
    // Stocker dans venteData les données recuperées
    venteData = data;

    // Déclenchez l'événement personnalisé pour signaler que les données sont prêtes
    window.dispatchEvent(dataReadyEvent);
  })
  .catch((error) => handleError(error));

// Gère la réponse HTTP obtenue à partir de fetch
const handleResponse = (response) => {
  // Vérifie si la réponse HTTP est OK
  if (!response.ok) {
    // Si la réponse n'est pas OK, génère une erreur avec un message d'erreur approprié
    throw new Error("Erreur HTTP : " + response.status);
  }
  return response.json();
};

// Gère les erreurs génériques
const handleError = (error) => {
  // Affiche une erreur avec le message d'erreur dans la console
  console.error("Erreur : " + error);
};