
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE55N7tAvDcvyB3EE2LSEBnst5cXQlcjc",
  authDomain: "site-mundo-invertido.firebaseapp.com",
  projectId: "site-mundo-invertido",
  storageBucket: "site-mundo-invertido.appspot.com",
  messagingSenderId: "507747561855",
  appId: "1:507747561855:web:05619517523e38e2deaa4a",
  measurementId: "G-BBWZ3WMC5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);