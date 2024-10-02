// Imported functions
import './index.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore'; 


const firebaseConfig = {
  apiKey: "AIzaSyBuOAFK7UU5OOCMCTW3sgS6i6iE38UPIWg",
  authDomain: "prompt-fighter.firebaseapp.com",
  databaseURL: "https://prompt-fighter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "prompt-fighter",
  storageBucket: "prompt-fighter.appspot.com",
  messagingSenderId: "685708643563",
  appId: "1:685708643563:web:95af0cfba988a6755c82ae",
  measurementId: "G-Y1B6XWQQVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Function to sign in the user anonymously
export function signInAnonymouslyAndGetUser() {
  return signInAnonymously(auth)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in anonymously:", user);
      return user;  // Return the user object for further use
    })
    .catch((error) => {
      console.error("Error signing in anonymously:", error.code, error.message);
      return null;  // Return null if there's an error
    });
}

// Function to update the username for the authenticated user
export function updateUsername(user, username) {
  return updateProfile(user, {
    displayName: username  // Set the display name
  })
    .then(() => {
      console.log("Username updated successfully:", username);
    })
    .catch((error) => {
      console.error("Error updating username:", error.message);
    });
}

// Firestore function to add a new user to Firestore database
export async function addUserToFirestore(userId, username) {
  try {
    await setDoc(doc(db, "Users", userId), {
      username: username,
      score: 0,
      createdAt: new Date(),
      totalGames: 0
    });
    console.log("User added to Firestore with ID: ", userId);
  } catch (error) {
    console.error("Error adding user to Firestore: ", error);
  }
}