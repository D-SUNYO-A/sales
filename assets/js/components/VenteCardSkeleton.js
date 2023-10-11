class VenteCardSkeleton extends HTMLElement {
    constructor() {
        super();
        // Créez un Shadow DOM racine et attachez-le à l'élément
        const shadowRoot = this.attachShadow({ mode: 'open' });
    
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./../../assets/css/venteCardSkeleton.css">
        <div class="skeleton-card">
            <div class="skeleton-card-header">
                <p></p>
                <span></span>
            </div>
            <div class="skeleton-card-body">
                <div class="info">
                    <p></p>
                    <p></p>
                </div>
                <div class="info">
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div class="skeleton-card-footer"></div>
        </div>
    `;
    }
}
  
customElements.define("vente-card-skeleton", VenteCardSkeleton);