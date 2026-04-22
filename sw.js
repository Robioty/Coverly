// ── Bump this version every time you deploy a new index.html ──
const CACHE_VERSION = 'coverly-v3';

// Static assets that rarely change — safe to cache-first
const STATIC_ASSETS = [
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap',
  'https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js',
  'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => Promise.allSettled(STATIC_ASSETS.map(url => c.add(url).catch(() => {}))))
      .then(() => self.skipWaiting()) // activate immediately, don't wait for old SW to die
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // Delete ALL old caches whose name doesn't match the current version
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // ── Never cache: geocoding API ──
  if (url.hostname === 'nominatim.openstreetmap.org') {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
    return;
  }

  // ── index.html: NETWORK-FIRST ──
  // Always fetch the latest version. Fall back to cache only if offline.
  if (e.request.mode === 'navigate' || url.pathname === '/index.html' || url.pathname === '/') {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          // Update the cache with the fresh version
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match('/index.html')) // offline fallback
    );
    return;
  }

  // ── Static CDN assets: CACHE-FIRST (they never change at a fixed URL) ──
  if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('googleapis.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // ── Everything else: network with cache fallback ──
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
