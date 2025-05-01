// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-VVeR9fsGCpDV-JwLF2eR2v0E8KA4C0U",
  authDomain: "onlyrealty-competition.firebaseapp.com",
  databaseURL: "https://onlyrealty-competition-default-rtdb.firebaseio.com",
  projectId: "onlyrealty-competition",
  storageBucket: "onlyrealty-competition.firebasestorage.app",
  messagingSenderId: "764100863723",
  appId: "1:764100863723:web:98a24cc88cbf2b662a00ae",
  measurementId: "G-FEE51ZG23N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
