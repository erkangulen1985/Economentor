// auth-guard.js
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
//import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

//const firebaseConfig = {
//  apiKey: "AIzaSyADPBpJhZ9UKR1NFC42bqEqgKHyLaWunIQ",
//  authDomain: "economentor-8ddc4.firebaseapp.com",
//  projectId: "economentor-8ddc4",
//  storageBucket: "economentor-8ddc4.appspot.com",
//  messagingSenderId: "835370350520",
//  appId: "1:835370350520:web:d9bb275eb4b7502997814d",
//  measurementId: "G-FS3FMPYVPD"
//};


//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
//
//onAuthStateChanged(auth, (user) => {
//  if (!user) {
//    // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
//    window.location.href = "index.html";
//  }
//});


import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("Lütfen giriş yapınız.");
    window.location.href = "index.html";
  }
});
