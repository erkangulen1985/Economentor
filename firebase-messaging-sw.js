self.addEventListener('push', (event) => {
  const data = event.data?.json() || {
    notification: {
      title: "Yeni Bildirim",
      body: "Mesajınız var!",
      icon: "/image1.png"
    },
    data: {
      url: "https://economentor.netlify.app/mesaj.html"
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.notification.title, {
      body: data.notification.body,
      icon: data.notification.icon || '/image1.png',
      data: {
        url: data.data?.url
      }
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  const urlToOpen = event.notification?.data?.url || '/';
  console.log("📲 Bildirime tıklandı!");
  console.log("➡️ Açılacak URL:", urlToOpen);

  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
      for (let client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
