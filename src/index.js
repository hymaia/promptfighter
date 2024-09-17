// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// function to sign in a user anonymously
signInAnonymously(auth)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in anonymously:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in anonymously:", errorCode, errorMessage);
  });

