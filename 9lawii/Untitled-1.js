// JavaScript pour l'ouverture de l'image en grand
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const imageModalElements = document.querySelectorAll(".image-modal");
const closeModal = document.querySelector(".close-modal");

// Ouvrir la vue modale avec l'image en grand
function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Fermer la vue modale
function closeModalHandler() {
    modal.style.display = "none";
}

// Attacher les événements de clic aux images
imageModalElements.forEach((element) => {
    element.addEventListener("click", () => {
        const imageSrc = element.getAttribute("data-image");
        openModal(imageSrc);
    });
});

// Fermer la vue modale lorsqu'on clique sur le bouton de fermeture
closeModal.addEventListener("click", closeModalHandler);
