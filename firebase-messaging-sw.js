importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyADPBpJhZ9UKR1NFC42bqEqgKHyLaWunIQ",
    authDomain: "economentor-8ddc4.firebaseapp.com",
    projectId: "economentor-8ddc4",
    storageBucket: "economentor-8ddc4.appspot.com",
    messagingSenderId: "835370350520",
    appId: "1:835370350520:web:d9bb275eb4b7502997814d"
});

const messaging = firebase.messaging();
