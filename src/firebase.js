// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsXTKdChyvzvwqYWtfsN7SMygYuOgE10",
  authDomain: "supermarket-f7f88.firebaseapp.com",
  projectId: "supermarket-f7f88",
  storageBucket: "supermarket-f7f88.appspot.com",
  messagingSenderId: "462366586086",
  appId: "1:462366586086:web:62f65de69e195eae18f727",
  measurementId: "G-B182F8GQTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);