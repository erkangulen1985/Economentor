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

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
