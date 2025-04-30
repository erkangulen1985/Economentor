importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyADPBpJhZ9UKR1NFC42bqEqgKHyLaWunIQ",
  authDomain: "economentor-8ddc4.firebaseapp.com",
  projectId: "economentor-8ddc4",
  messagingSenderId: "835370350520",
  appId: "1:835370350520:web:d9bb275eb4b7502997814d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    data: {
      url: payload.data?.url || "https://economentor.netlify.app"
    }
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function(event) {
  const targetUrl = event.notification.data?.url || "/";
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(clientList => {
      for (const client of clientList) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
