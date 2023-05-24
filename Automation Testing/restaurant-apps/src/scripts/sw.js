import 'regenerator-runtime/runtime';
import { setCacheNameDetails } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  StaleWhileRevalidate,
  CacheFirst,
  NetworkFirst,
} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

setCacheNameDetails({
  prefix: 'restoin-ajah',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime',
});

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'my-pages-cache',
  }),
);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'my-image-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 50,
      }),
    ],
  }),
);

registerRoute(
  /https:\/\/cdn.jsdelivr.net\/npm\/bootstrap-icons@1.10.5\/font\/bootstrap-icons.css/,
  new CacheFirst({
    cacheName: 'my-bootstrap-icons-css-cache',
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'my-google-fonts-cache',
    plugins: [new ExpirationPlugin({ maxEntries: 50 })],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'scripts'
    || request.destination === 'styles',
  new StaleWhileRevalidate({
    cacheName: 'my-assets-cache',
  }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
