 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANTrZAWfkMPcIl4QMkOnk3x_t5-UHMPVs",
    authDomain: "personal-10bf3.firebaseapp.com",
    projectId: "personal-10bf3",
    storageBucket: "personal-10bf3.appspot.com",
    messagingSenderId: "989316458043",
    appId: "1:989316458043:web:ed2c60716a15f8ee64de1e",
    measurementId: "G-ETXSDESL9G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
