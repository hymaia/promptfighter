// Import necessary Firebase functions from firebase.js
import { signInAnonymouslyAndGetUser, updateUsername, addUserToFirestore } from './firebase.js';

// Function to handle the form submission and authentication logic
function handleAuthFormSubmission() {
  document.getElementById("usernameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    console.log("Button clicked");

    const username = document.getElementById("username").value;
    console.log("Username entered:", username); // Check if the username is captured

    // Handle Firebase anonymous sign-in and Firestore user creation
    signInAnonymouslyAndGetUser().then((user) => {
      if (user) {
        // Update the user's profile with the username
        updateUsername(user, username).then(() => {
          // Add the user to Firestore
          addUserToFirestore(user.uid, username).then(() => {
            // Redirect to the onboarding page after successful signup
            window.location.href = "/dist/onboarding.html";  // Manual redirection
          }).catch((error) => {
            console.error("Error adding user to Firestore:", error);
          });
        }).catch((error) => {
          console.error("Error updating username:", error);
        });
      } else {
        console.error("No user is signed in.");
      }
    }).catch((error) => {
      console.error("Error signing in anonymously:", error);
    });
  });
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", handleAuthFormSubmission);

// Export the form submission handler to be used in index.js
export { handleAuthFormSubmission };
