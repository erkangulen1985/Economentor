importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Firebase config — seninle aynı olmalı
firebase.initializeApp({
  apiKey: "AIzaSyADPBpJhZ9UKR1NFC42bqEqgKHyLaWunIQ",
  authDomain: "economentor-8ddc4.firebaseapp.com",
  projectId: "economentor-8ddc4",
  messagingSenderId: "835370350520",
  appId: "1:835370350520:web:d9bb275eb4b7502997814d"
});

// 🔔 Bildirim servisini başlat
const messaging = firebase.messaging();

// 🔕 Arka planda mesaj geldiğinde gösterilecek yapı
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Arka planda mesaj alındı:', payload);

  const notificationTitle = payload.notification?.title || "Yeni Bildirim";
  const notificationOptions = {
    body: payload.notification?.body || "Bir mesajınız var",
    icon: "/image1.png", // simge (opsiyonel)
    data: {
      url: payload.data?.url || "https://economentor.netlify.app" // tıklanınca gidilecek adres
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// 👆 Bildirime tıklanırsa PWA'yı aç
self.addEventListener('notificationclick', function(event) {
  const targetUrl = event.notification?.data?.url || '/';
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(clientList) {
      for (const client of clientList) {
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
