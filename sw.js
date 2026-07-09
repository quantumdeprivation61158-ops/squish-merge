/* Squish Merge — lightweight offline cache */
const CACHE = 'squish-merge-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/ui/bg.png',
  './assets/icons/icon-192.png',
  './assets/characters/tier0.png',
  './assets/characters/tier1.png',
  './assets/characters/tier2.png',
  './assets/characters/tier3.png',
  './assets/characters/tier4.png',
  './assets/characters/tier5.png',
  './assets/characters/tier6.png',
  './assets/characters/tier7.png',
  './assets/characters/tier8.png',
  './assets/characters/tier9.png',
  './assets/characters/tier10.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached ||
      fetch(event.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return res;
      }).catch(() => cached)
    )
  );
});
