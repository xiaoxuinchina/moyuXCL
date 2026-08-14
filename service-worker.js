const CACHE = 'xcl-workbench-mobile-v3.0.3';
const BASE = '/moyuXCL/';
const APP_SHELL = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'xcl_avatar.jpg',
  BASE + 'icon-192.png',
  BASE + 'icon-512.png',
  BASE + 'icon-maskable-192.png',
  BASE + 'icon-maskable-512.png',
  BASE + 'apple-touch-icon.png',
  BASE + 'favicon-64.png',
  BASE + 'assets/sunny-campus-bg.svg',
  BASE + 'assets/research.svg',
  BASE + 'assets/gaming.svg',
  BASE + 'assets/life.svg',
  BASE + 'assets/sport.svg',
  BASE + 'assets/weather.svg',
  BASE + 'assets/clock.svg',
  BASE + 'assets/fish.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys =>
        Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Never interfere with third-party APIs such as Open-Meteo.
  if (url.origin !== self.location.origin) return;

  // Network-first for HTML/navigation so GitHub updates appear quickly.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(cache => cache.put(BASE + 'index.html', copy));
          }
          return res;
        })
        .catch(() => caches.match(BASE + 'index.html'))
    );
    return;
  }

  // Cache-first for local static assets.
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
