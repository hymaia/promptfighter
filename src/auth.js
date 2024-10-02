// auth.js

// Import necessary Firebase functions from firebase.js
import { signInAnonymouslyAndGetUser, updateUsername, addUserToFirestore } from './firebase.js';

// Function to handle the form submission and authentication logic
function handleAuthFormSubmission() {
  document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;

    // Handle Firebase anonymous sign-in and Firestore user creation
    signInAnonymouslyAndGetUser().then((user) => {
      if (user) {
        // Update the user's profile with the username
        updateUsername(user, username);

        // Add the user to Firestore
        addUserToFirestore(user.uid, username);
      } else {
        console.error("No user is signed in.");
      }
    });
  });
}

// Export the form submission handler to be used in index.js
export { handleAuthFormSubmission };
