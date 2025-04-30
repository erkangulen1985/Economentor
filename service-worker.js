// Sayfa önbelleğe alma
self.addEventListener('install', (e) => {
  console.log('Service Worker: Yüklendi');
  e.waitUntil(
    caches.open('economentor-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/image1.png',
        '/image2.png',
        '/kayitol.html',
        '/kullaniciadi.html',
        '/şifremiunuttum.html',
        '/duyuru.html',
        '/adminpanel.html'
      ]);
    })
  );
});

// Önbellekten yükleme
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// 🔔 Push bildirimi dinleyicisi (Firebase Cloud Messaging için)
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {
    notification: {
      title: "Yeni Bildirim",
      body: "Detay verilmedi.",
      icon: "/image1.png"
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.notification.title, {
      body: data.notification.body,
      icon: data.notification.icon || '/image1.png'
    })
  );
});
