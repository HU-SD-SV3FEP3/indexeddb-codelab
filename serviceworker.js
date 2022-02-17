const STATIC_CACHE = 'STATIC-v1';
const DYNAMIC_CACHE = 'DYNAMIC';

const STATIC_FILES = [
  '/images/favicon.ico',
  '/images/256px-Smile-big.png',
  '/src/app.serviceworker.js',
];

self.addEventListener('install', (installEvent) => {
  // console.log('[Service Worker] Installing Service Worker ...', installEvent);
  // Caching Strategie: On-Install as a dependency
  installEvent.waitUntil(
    caches.open(STATIC_CACHE)
    .then((cache) => {
      cache.addAll(STATIC_FILES);
      return;
    })
  );
});

self.addEventListener('activate', (activateEvent) => {
  // console.log('[Service Worker] Activating Service Worker ...', activateEvent);
  return self.clients.claim();
});

self.addEventListener('fetch', (fetchEvent) => {
  // console.debug(`[Service Worker] Fetching...`, fetchEvent.request);
  // caching strategie: network only
  fetchEvent.respondWith(fetch(fetchEvent.request));
});
