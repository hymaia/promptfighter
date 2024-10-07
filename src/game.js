// game.js
console.log("hello");
// Fonction pour afficher l'image depuis localStorage sur la page de jeu
function displayModelImage() {
    const modelImageUrl = localStorage.getItem("modelImageUrl");
    const modelImageElement = document.getElementById('modelImage');

    if (modelImageElement && modelImageUrl) {
        modelImageElement.src = modelImageUrl; // Set the image source
    }
}

// Appeler la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', displayModelImage);
