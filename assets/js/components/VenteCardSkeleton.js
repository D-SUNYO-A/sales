export class VenteCardSkeleton extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.render();    
    }

    render() {
        this.root.innerHTML = `
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