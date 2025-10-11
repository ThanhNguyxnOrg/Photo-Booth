// Service Worker for SnapStrip Studio
const CACHE_NAME = 'snapstrip-v1';
const urlsToCache = [
  '/Photo-Booth/',
  '/Photo-Booth/index.html',
  '/Photo-Booth/layout.html',
  '/Photo-Booth/templates.html',
  '/Photo-Booth/camera.html',
  '/Photo-Booth/faq.html',
  '/Photo-Booth/privacy-policy.html',
  '/Photo-Booth/contact.html',
  '/Photo-Booth/i18n.js',
  'https://cdn.tailwindcss.com'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
