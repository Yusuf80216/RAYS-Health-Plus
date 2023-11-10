'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "23bc3a7722cfc286fe4298e2d7ee4128",
".git/config": "a065a5a3388bc2f2de4c1136e89cff1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bc0ac8ad3396a044852e70577d3194d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a71a285d1721c5a492bdbd1ce36fd6e2",
".git/logs/refs/heads/main": "a71a285d1721c5a492bdbd1ce36fd6e2",
".git/logs/refs/remotes/origin/HEAD": "309668acb82d207e681170a61a855858",
".git/logs/refs/remotes/origin/main": "30a265f130c510268bad52844aa557a1",
".git/objects/00/efd4a125c3b3920b7900a05f2fb055cfe5d1d1": "1ecc6dccd321cbbe267bd4dcbc9ff32a",
".git/objects/09/956ea7be0d97ae23d0837a1f558be3a8c110bf": "2bf935fc53baeb55c5c5bd8cdede4610",
".git/objects/47/738c82f9d0759362eafa446353e2ae4b79a071": "e872afff0e5c17d2e7381e66b6b7a0b0",
".git/objects/49/555c2a7ac70e6f972da4300fa95dd7a2430ad2": "280eab0fe7ad24d98d9fcc101a04d3f1",
".git/objects/53/da5549343578b738a7c004e38ad86d981718a5": "ff35796d43b79a98181d3ad02073362d",
".git/objects/56/f5050336e40a29579ae839f922e5855d87cd0c": "cb698687afb8d954d8dda40804d5c3ef",
".git/objects/6a/2bac6d2f8da94dd02f978ab22232b4fadcedbd": "337ecf124025001eedfcd95f64e6c64f",
".git/objects/6e/47d9ac26a066fcaf1cc8e280bb89f226390316": "ed86b7ed2e9870c60fea96e74a9a6231",
".git/objects/92/4a684a5dd57104622ae1fdcf8ae728cead6ba0": "4ff0cc79967c5769b086e97d87d59f07",
".git/objects/ba/ca5d737cad06b54c49a8d6c8dde6700951853e": "0c51b3111f4c1279556556a5358dbb73",
".git/objects/e1/ce596408b7a2cbfc825319f16e6a382fa23f90": "4b7c13962252f8d4617d996ff250e47a",
".git/objects/fc/20713ecf819661c9f54d65035fac7b24c5a526": "fac5d103c099e1137513e1185616cd8e",
".git/objects/pack/pack-3ab967260c9491bb4513209aa76531bcd4a3198b.idx": "78817ad0a75738426621a10946de2ea6",
".git/objects/pack/pack-3ab967260c9491bb4513209aa76531bcd4a3198b.pack": "dba698f8117fa648c11ce0e372cee92b",
".git/packed-refs": "f229d2e52a7dda613b3f02d2c5dfc64c",
".git/refs/heads/main": "a359386cfc2734a1052d8ec8a46bd240",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a359386cfc2734a1052d8ec8a46bd240",
"assets/AssetManifest.bin": "3467657e2d3558f93aa659ce5866c0aa",
"assets/AssetManifest.json": "8347468016ad91696c9117e5d173b65c",
"assets/assets/background.jpg": "bd7a033186f313582ffd01965c58aab0",
"assets/assets/herbal2.jpeg": "6c18f01d3d2a6c6fe9a8f9ed4f722278",
"assets/assets/home-pattern.png": "7283c5b81af035445dd0df4bc59687ea",
"assets/assets/home_pattern.png": "2418f5b61305d06318656f89fb1067a5",
"assets/assets/mobile-background.png": "e7ff4caa5354209e3613b2a9b9e42418",
"assets/assets/mobile-home-pattern.png": "6b8e7335ac01964835b7a1eef51fcde3",
"assets/assets/pranic-healing-image.jpg": "058bb75434c668ac4532df8d656a7fb9",
"assets/assets/RAYS%2520Logo.png": "22b7288c77643bd4f393c3b42f223b9e",
"assets/FontManifest.json": "9022a696e0c92517ec2b489f89569e6f",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "c2d9e8e99815e080c881f7a40a6b959e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a025f5b63f6981f38232235e75593790",
"/": "a025f5b63f6981f38232235e75593790",
"main.dart.js": "589abb29532466f0e788477738439b26",
"manifest.json": "152fd644b695992de595cfb41411fdb7",
"version.json": "f9168861a6debe4fb1281677487ca2d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
