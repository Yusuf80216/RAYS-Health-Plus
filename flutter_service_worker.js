'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "ab3c65e7733ce21f117636380a6db211",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3ba97e054aa508e9a4a1f97d5f734cfb",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dae371ff74f0dbc4135f2a8429d7dba6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "920583f3904b30d8efd75df076b35203",
".git/logs/refs/heads/main": "920583f3904b30d8efd75df076b35203",
".git/logs/refs/remotes/origin/HEAD": "920583f3904b30d8efd75df076b35203",
".git/objects/pack/pack-423a9d135fec93383712aca51cfecd980130162f.idx": "ccb1b3275d034e4c52428eb115b83402",
".git/objects/pack/pack-423a9d135fec93383712aca51cfecd980130162f.pack": "3b522780398c298ef2e2a1d0ab254a93",
".git/objects/pack/pack-423a9d135fec93383712aca51cfecd980130162f.rev": "e1d27f753760267906762d8f9f7433e0",
".git/packed-refs": "6ddd954dfd66e22ed618b9f93db833d0",
".git/refs/heads/main": "0753164caecbdc90bea79c7b1c0c6796",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "3635be57ec112e1a1d5be93a7c9f1af5",
"assets/AssetManifest.bin.json": "e295ea5d33f09306f971005c19fd96ad",
"assets/AssetManifest.json": "fdcf871a71291b2ee6ddbeaf4de2c952",
"assets/assets/about-atique.png": "1195c436cb81ba93e3d463a2bf93f7bb",
"assets/assets/about-bg-mob.png": "02e95843ba218c730b1d39ea2e187401",
"assets/assets/about-img.png": "f5b0e4ea7c9d942f9f266077cad3b5e3",
"assets/assets/background.jpg": "bd7a033186f313582ffd01965c58aab0",
"assets/assets/background.webp": "621389d524e441a85db701d2206c632a",
"assets/assets/gallery-bg-mob.jpg": "643bac2e4ee84b9bbbbb8922603ff69b",
"assets/assets/gallery-bg.jpg": "d8377c1abe827b9663ed54a797460243",
"assets/assets/herbal2.jpeg": "6c18f01d3d2a6c6fe9a8f9ed4f722278",
"assets/assets/herbal2.webp": "112f908014bdaacb1f0d7b1b70cdfc06",
"assets/assets/home-pattern.png": "7283c5b81af035445dd0df4bc59687ea",
"assets/assets/home_pattern.png": "2418f5b61305d06318656f89fb1067a5",
"assets/assets/Media%2520Gallery/1.jpg": "369c8ac408fbf7b04cfb6c5c89576a7e",
"assets/assets/Media%2520Gallery/10.jpg": "90c43ab72ab19d6e09e6828025c2ad92",
"assets/assets/Media%2520Gallery/11.jpg": "b64b3217a15a47e63efb9c1487d7d712",
"assets/assets/Media%2520Gallery/12.jpg": "773d49684a9e5e3a2849725664919293",
"assets/assets/Media%2520Gallery/13.jpg": "7aa90d55362b2fa208f0d9fa1cf8baf8",
"assets/assets/Media%2520Gallery/14.jpg": "d670fc7a3c2458280563670b84d6abf7",
"assets/assets/Media%2520Gallery/15.jpg": "f8478c709e496a748f355f4d71db94f5",
"assets/assets/Media%2520Gallery/16.jpg": "30cf242faaee7f4c26bd219ad2625b0d",
"assets/assets/Media%2520Gallery/17.jpg": "dad6adb0f8e5f24759737dbc7a64d087",
"assets/assets/Media%2520Gallery/2.jpg": "fd17177d18158d8ebc8e4e6687df410e",
"assets/assets/Media%2520Gallery/3.jpg": "bd2b325da129d992cc47c8144325ed3b",
"assets/assets/Media%2520Gallery/4.jpg": "4aa3be4b4e83b52df75663035f0783c1",
"assets/assets/Media%2520Gallery/5.jpg": "1808771cfcdd5b36e40d69d3430e616f",
"assets/assets/Media%2520Gallery/6.jpg": "3559285d5d800ab99f013c68397b9fa8",
"assets/assets/Media%2520Gallery/7.jpg": "8ad212eb55f5ce6f5faa2f754a6114b8",
"assets/assets/Media%2520Gallery/8.jpg": "f6f0d7d489181ed26138b1da050d62f0",
"assets/assets/Media%2520Gallery/9.jpg": "93f3b2944998a2c4378cf02692205148",
"assets/assets/mobile-background.png": "e7ff4caa5354209e3613b2a9b9e42418",
"assets/assets/mobile-background.webp": "2e313fc4bdd12aaa0f5717f7a39debdb",
"assets/assets/mobile-home-pattern.png": "6b8e7335ac01964835b7a1eef51fcde3",
"assets/assets/pranic-healing-image.jpg": "058bb75434c668ac4532df8d656a7fb9",
"assets/assets/pranic-healing-image.webp": "4bab8b857db5e18315baf905c242b144",
"assets/assets/RAYS%2520Logo.png": "22b7288c77643bd4f393c3b42f223b9e",
"assets/assets/RAYS%2520Logo.webp": "709c102f54548582225a9722e1df8d71",
"assets/assets/RAYS-ONLY-LOGO.png": "3a98f3cfaf4f60865a2015931d31688d",
"assets/assets/work-bg-mob.png": "5d8d58e2ddb034b98a872946c4889fe6",
"assets/assets/work-bg-mob.webp": "a0d1cc32912b871b987f20998c0e7760",
"assets/assets/work-bg.png": "7e48e275efebc3bfbaef1f78e8923a82",
"assets/assets/work-bg.webp": "20968d489de85c9b97b3b2b1a3984484",
"assets/assets/work-imgs.png": "aa93dca520057cd0c48bec73b32ad2a2",
"assets/assets/work-imgs.webp": "5c8d4761b18c4fcd074f8193c9cdfdbf",
"assets/FontManifest.json": "9022a696e0c92517ec2b489f89569e6f",
"assets/fonts/MaterialIcons-Regular.otf": "2fe6d637615d6f0728830da633774e20",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "8a11ed6fec3059ce386495e75ac53608",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "028bfc9aaf992c8ccebf6e0de5fa2619",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6877b57c44347ecd38c87070e5af36a",
"/": "f6877b57c44347ecd38c87070e5af36a",
"main.dart.js": "c95851cd70c18e7c7f5741ab0bd863ba",
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
