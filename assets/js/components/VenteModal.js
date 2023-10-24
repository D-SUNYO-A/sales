import { formatDateToCustomFormat, customFormat } from "../utils/formatDate.js";

class VenteModal extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  set data(vente) {
    this.root.innerHTML = `
        <link rel="stylesheet" href="./../../assets/css/venteModal.css">
        <div id="venteModal" class="modal">
            <div id="modalContent" class="modal-content">
                <div class="modal-content-head">
                    <div class="title">
                        <p>#${vente.order_id}</p>
                        <span class="${
                        vente.sales_channel === "Online" ? "online" : "offline"
                        }">${vente.sales_channel}</span>
                    </div>
                    <div class="close" id="closeButton">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        >
                        <path
                            d="M5.13455 13.6077C4.87087 13.8714 4.85832 14.3423 5.14082 14.6185C5.41705 14.8947 5.88789 14.8884 6.15157 14.6248L9.99364 10.7764L13.842 14.6248C14.1119 14.8947 14.5765 14.8947 14.8527 14.6185C15.1227 14.336 15.129 13.8777 14.8527 13.6077L11.0107 9.75939L14.8527 5.91731C15.129 5.64736 15.129 5.1828 14.8527 4.90657C14.5702 4.63662 14.1119 4.63034 13.842 4.90029L9.99364 8.74865L6.15157 4.90029C5.88789 4.63662 5.41077 4.62407 5.14082 4.90657C4.8646 5.1828 4.87087 5.65364 5.13455 5.91731L8.9829 9.75939L5.13455 13.6077Z"
                            fill="#3C3C43"
                            fill-opacity="0.6"
                        />
                        </svg>
                    </div>
                </div>
                <div class="modal-content-body">
                    <div class="info-group">
                        <div class="info">
                        <p class="info-label">Type d'Article</p>
                        <p class="info-value">${vente.item_type}</p>
                        </div>
                        <div class="info">
                        <p class="info-label">Unités Vendues</p>
                        <p class="info-value">${vente.units_sold}</p>
                        </div>
                    </div>
                    <div class="info-group">
                        <div class="info">
                        <p class="info-label">Prix Unitaire</p>
                        <p class="info-value">${vente.unit_price}</p>
                        </div>
                        <div class="info">
                        <p class="info-label">Coût Unitaire</p>
                        <p class="info-value">${vente.unit_cost}</p>
                        </div>
                    </div>
                    <div class="info-group">
                        <div class="info">
                        <p class="info-label">Région</p>
                        <p class="info-value">${vente.region}</p>
                        </div>
                        <div class="info">
                        <p class="info-label">Pays</p>
                        <p class="info-value">${vente.country}</p>
                        </div>
                    </div>
                    <div class="info-group">
                        <div class="info">
                        <p class="info-label">Date de Commande</p>
                        <p class="info-value">${formatDateToCustomFormat(
                        vente.order_date,
                        customFormat
                        )}</p>
                        </div>
                        <div class="info">
                        <p class="info-label">Date d'Expédition</p>
                        <p class="info-value">${formatDateToCustomFormat(
                        vente.ship_date,
                        customFormat
                        )}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Gestionnaire d'événements pour le bouton de fermeture
    const closeButton = this.root.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        this.close();
    });

    // Fermer le modal lorsque l'utilisateur clique en dehors de celui-ci
    this.root.addEventListener("click", (event) => {
        const venteModal = this.root.getElementById("venteModal")
        if (event.target === venteModal) {
            this.close();
        }
    });

  }

  // Ouvrir modal
  open = () => {
    this.root.querySelector('#venteModal').classList.add('open');
    // Ajouter la classe CSS pour désactiver le défilement
    document.body.style.overflow = "hidden";
  }

  // Fermer modal
  close = () => {
    this.root.querySelector('#venteModal').classList.remove('open');
    // Supprimer la classe CSS pour réactiver le défilement
    document.body.style.overflow = "auto";
    // Appeler la méthode de suppression pour supprimer le modal du DOM
    this.remove();
  }
}

customElements.define("vente-modal", VenteModal);
