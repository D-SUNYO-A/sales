// Ouvrir le modal avec le contenu spécifié
const openModal = (content) => {
  modalContent.innerHTML = content;
  modal.style.display = "block";
  // Ajouter la classe CSS pour désactiver le défilement
  document.body.classList.add("modal-open");
};

// Fermer le modal
const closeModal = () => {
  modal.style.display = "none";
  // Supprimer la classe CSS pour réactiver le défilement
  document.body.classList.remove("modal-open");
};

// Fermer le modal lorsque l'utilisateur clique en dehors de celui-ci
document.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
})