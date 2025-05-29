const CACHE_NAME = 'physique-tracker-cache-v1';
const urlsToCache = [
  '.',
  'index.html',
  'manifest.json',
  // Add other assets (css, js, icons) you want cached
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
