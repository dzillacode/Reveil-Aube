/* Service worker « Aube » : garde l'application en cache pour qu'elle se rouvre
   même sans connexion. Les flux radio et la météo ne sont pas interceptés.
   Le cache porte un nom propre à Aube et on ne supprime QUE les anciens caches
   d'Aube : l'appli « Réveil », publiée sur le même domaine, n'est jamais touchée. */
var CACHE = 'aube-v12';

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(['./', './index.html']);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) {
      return k.indexOf('aube-') === 0 && k !== CACHE;
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // réseau d'abord (pour recevoir les mises à jour), cache d'Aube en secours
  var fresh;
  try { fresh = new Request(req.url, { cache: 'no-cache' }); } catch (er) { fresh = req; }
  e.respondWith(fetch(fresh).then(function (res) {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); });
    return res;
  }).catch(function () {
    return caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (r) { return r || c.match('./index.html'); });
    });
  }));
});
