import "./VenteModal.js";  

class VenteCard extends HTMLElement {
  constructor() {
    super();
  }

  set data(vente) {
    this.innerHTML = `
        <link rel="stylesheet" href="./../../assets/css/venteCard.css">
        <div class="card">
            <div class="card-header">
                <p>#${vente.order_id}</p>
                <span class="${
                    vente.sales_channel === "Online" ? "online" : "offline"
                }">
                    ${vente.sales_channel}
                </span>
            </div>
            <div class="card-body">
                <div class="info">
                    <p class="info-label">Type d'Article</p>
                    <p class="info-value">${vente.item_type}</p>
                </div>
                <div class="info">
                    <p class="info-label">Unités Vendues</p>
                    <p class="info-value">${vente.units_sold}</p>
                </div>
            </div>
            <div class="card-footer">
                <button class="more" data-id="${vente.order_id}">Voir plus</button>
            </div>
        </div>
    `;

    // Récupérer la référence au bouton "Voir plus"
    const moreButton = this.querySelector('.more');

    // Ajouter un gestionnaire d'événements au bouton pour afficher son modal
    moreButton.addEventListener('click', () => {
        const venteModal = document.createElement('vente-modal');
        venteModal.data = vente;
        document.body.appendChild(venteModal);
        venteModal.open();
    });
  }
}

customElements.define("vente-card", VenteCard);