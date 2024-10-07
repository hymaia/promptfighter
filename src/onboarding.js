import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Récupérer la base de données Firestore
const db = getFirestore();

// Fonction pour récupérer l'URL de l'image depuis Firestore et la stocker dans localStorage
async function getModelImageAndStoreInLocalStorage(gameId) {
  try {
    // Référence au document dans la collection "games_test"
    const gameDocRef = doc(db, "games_test", gameId);

    // Récupérer le document
    const gameDoc = await getDoc(gameDocRef);

    // Vérifier si le document existe et récupérer l'URL de l'image
    if (gameDoc.exists()) {
      const data = gameDoc.data();
      const modelImageUrl = data.modelImage;

      // Stocker l'URL de l'image dans le localStorage
      localStorage.setItem("modelImageUrl", modelImageUrl);

      // Modifier la src de l'image dans le HTML
      const modelImageElement = document.getElementById('modelImage');
      if (modelImageElement) {
        modelImageElement.style.backgroundImage = `url(${modelImageUrl})`;
        modelImageElement.style.backgroundSize = 'cover';
      }
    } else {
      console.log("Aucun document trouvé pour cet ID de jeu !");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du document :", error);
  }
}

// Appel de la fonction avec l'ID du jeu
getModelImageAndStoreInLocalStorage('gametest_1'); // Remplace par l'ID du document que tu veux utiliser

// Redirection vers game.html lors du clic sur le bouton
document.getElementById('startGameButton').addEventListener('click', function() {
  window.location.href = '/dist/game.html'; // Redirection vers la page game.html
});
