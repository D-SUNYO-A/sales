import "./../components/VenteCardSkeleton.js"

export const loadSkeletonCard = itemsPerPage => {
    const listContainer = document.querySelector(".list");
    listContainer.innerHTML = "";
    for(let i = 0; i < itemsPerPage; i++) {
        listContainer.appendChild(document.createElement("vente-card-skeleton"))
    }
}
