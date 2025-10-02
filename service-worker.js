// Define a name for our cache
const CACHE_NAME = 'aura-cache-v1';

// List the essential files to be cached when the service worker is installed.
const URLS_TO_CACHE = [
  '/', // The main index.html file
  '/offline.html' // The custom page to show when offline
];

// The 'install' event is fired when the service worker is first installed.
self.addEventListener('install', event => {
  // We wait until the installation phase is complete.
  event.waitUntil(
    // Open the cache by name.
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all our essential files to the cache.
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// The 'fetch' event is fired for every network request the page makes.
self.addEventListener('fetch', event => {
  event.respondWith(
    // Try to find a matching request in the cache first.
    caches.match(event.request)
      .then(response => {
        // If a cached version is found, return it immediately.
        if (response) {
          return response;
        }

        // If the request is not in the cache, try to fetch it from the network.
        return fetch(event.request).catch(() => {
          // If the network fetch fails (i.e., the user is offline),
          // and the request was for a navigation (a web page),
          // return our custom offline page from the cache.
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html');
          }
        });
      })
  );
});
