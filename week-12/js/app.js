// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3aRRymdk1GMEVVCPJJ1cUYe3GWoF1Cak",
  authDomain: "thomaka-final-db.firebaseapp.com",
  projectId: "thomaka-final-db",
  storageBucket: "thomaka-final-db.firebasestorage.app",
  messagingSenderId: "832815181765",
  appId: "1:832815181765:web:18bdb1db34dc4898bae5ac",
  measurementId: "G-ER2DTGN074",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
