// Import all necessary functions from your JS files
import { handleAuthFormSubmission } from './auth.js';
import { signInAnonymouslyAndGetUser, addUserToFirestore } from './firebase.js';
import './game.js';         // Import game logic
import './scoreboard.js';   // Import scoreboard logic
import './vote.js';         // Import voting logic
import './ui.js';           // Import UI handling logic

// Initialization function to set up the app
async function init() {
    try {
        // Initialize the authentication flow
        handleAuthFormSubmission();

        // Sign in the user anonymously and get the user object
        const user = await signInAnonymouslyAndGetUser();

        // Check if the user was successfully signed in
        if (user) {
            // You can modify the username as needed
            const username = 'AnonymousUser'; 
            await addUserToFirestore(user.uid, username); // Add user to Firestore
            console.log("User added to Firestore successfully.");
        }

        // Any other app initialization logic can go here (e.g., screen rendering)
        console.log("App initialized successfully.");
    } catch (error) {
        console.error("Error during app initialization:", error);
    }
}

// Call the init function to start the app
init();
