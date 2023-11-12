'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "deec0b541d28e97bb450f9bf593c8eef",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0e8a33665d8bcaf474e03b062327e1b9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "aa9d7edb133f9e4ff817fc2fd2f79b64",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2d58596dcfbaf29b2375bb77c99afd4",
".git/logs/refs/heads/main": "98820739277620e5fbf18012c9917ccb",
".git/logs/refs/heads/master": "c368c8e0a8f2b4ab96cafd67b267888e",
".git/logs/refs/remotes/origin/HEAD": "5ceb4d9ae647b77b7e0306930e49eb87",
".git/logs/refs/remotes/origin/main": "ba8603e42723ee29d3008b65614acf4f",
".git/objects/21/eda13ba7474843dc13861b1f6826273d7d8a26": "7e4e584a41b0f6ca0f999ad2d26d4bb5",
".git/objects/32/807bcec0d000d169104e0bc5dea8cdea2ad852": "48d92c4c09c80be709dd2bc0f5aedb5c",
".git/objects/35/8b283c5e0607d104bd24ad423c227efdfa23f5": "fc51b1d53f1fd060707856cceebb44a3",
".git/objects/54/b3bd5e732f48f3f036fb3225e27ed255279172": "4a9b0ef51c9164f4a315cfbed12ac713",
".git/objects/58/17aa57082c7370104ea3fe0c0497ae8f7017fb": "0683ec79a6f61082553eb04ffb685e63",
".git/objects/61/59b224289d0322c3a8f00bf671243143052f48": "ea5f99cd106db33a80c5a007539e4c93",
".git/objects/84/4f513f28bc30b711abe9d62d2f72ae2a069f4e": "270e39ba1d98871cd5ecbd91c1dde0d2",
".git/objects/85/8f19b396b9aaa6185f85485f031c13a195d317": "cc47ba0a157dd797cbfc5d52f55ca614",
".git/objects/8e/8143c4087d5335a9c4bee9217dcd8b31d39835": "8e0a4c38ac74282a6ef17a5d31ed5eb5",
".git/objects/94/e93583653daa064ba5125c669deb0a91976b5f": "08209b76514d89fb0dfbe79826d875aa",
".git/objects/9e/9574b972d22abf55dc87ce54d86fa07c2c673e": "f7529a5bbea4ea9b7ea07303559a4300",
".git/objects/b3/c07e33854de3bafe60d096603e3d23077a7a60": "3657b744126306e289efd99e572d65a7",
".git/objects/bf/04981fd97c279d5bdb09b8c718fe341dda068a": "926393aa3941ffef3786fa135abd02b0",
".git/objects/c6/bacbcd0c786d4b454f5feb6c958aab727365a9": "11d6bcc4c55be99b9c2abb5d4ccfb5a4",
".git/objects/ca/9983ee6b703013c2651ad3b0d9509432ac34fe": "045854b9c22bcb782858d1ccf11bbb0f",
".git/objects/d1/1f4a049a607aae1d7206b39328772393b608b3": "54fc397bba24236a872fb70a37bd237c",
".git/objects/ee/6a66c2b8bbc434cbae607b86fcd1e2af3c531e": "53cc3d7a77d91307902ab6de7d45cdb2",
".git/objects/f6/f18274f27b8f5888a384dc16783d4edc41204e": "129a7da58f4646baa9939f95d298d569",
".git/objects/f8/cd98e1feec30e6bc05c60515652a421db4a57c": "3144d8947c4ea53204f682d3a455eb84",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.idx": "3a39857363d80a1d0a1035d952d75a79",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.pack": "85454bdfab0cbfe835c13c06bcd02d1c",
".git/objects/pack/pack-8cf2095829dca3def77a2821ade04763d6f1850f.rev": "6e9c4c399c35070146141d2212bc8284",
".git/ORIG_HEAD": "2ae2865fe1d3d5eb19da2466883e5a32",
".git/packed-refs": "114e5605f4a858ab3a1da2056400ee53",
".git/refs/heads/main": "2a711f40c75a9a97b8cfaea0c010cd8c",
".git/refs/heads/master": "b45934a64c544045004d4b2b623d369e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2a711f40c75a9a97b8cfaea0c010cd8c",
"assets/AssetManifest.bin": "d9bca5fc28242af5a9ea8700fd56a003",
"assets/AssetManifest.json": "d33528e8970a86cdac9c4310fece4b6f",
"assets/assets/background.jpg": "bd7a033186f313582ffd01965c58aab0",
"assets/assets/herbal2.jpeg": "6c18f01d3d2a6c6fe9a8f9ed4f722278",
"assets/assets/home-pattern.png": "7283c5b81af035445dd0df4bc59687ea",
"assets/assets/home_pattern.png": "2418f5b61305d06318656f89fb1067a5",
"assets/assets/mobile-background.png": "e7ff4caa5354209e3613b2a9b9e42418",
"assets/assets/mobile-home-pattern.png": "6b8e7335ac01964835b7a1eef51fcde3",
"assets/assets/pranic-healing-image.jpg": "058bb75434c668ac4532df8d656a7fb9",
"assets/assets/RAYS%2520Logo.png": "22b7288c77643bd4f393c3b42f223b9e",
"assets/assets/work-bg-mob.png": "5d8d58e2ddb034b98a872946c4889fe6",
"assets/assets/work-bg.png": "7e48e275efebc3bfbaef1f78e8923a82",
"assets/assets/work-imgs.png": "aa93dca520057cd0c48bec73b32ad2a2",
"assets/FontManifest.json": "9022a696e0c92517ec2b489f89569e6f",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "ab9fce2dbe769240b0a59239c7486d01",
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
"index.html": "d29f93de79b625ed7fe098969ca65003",
"/": "d29f93de79b625ed7fe098969ca65003",
"main.dart.js": "b899844ab9404193642646f38fa54ea5",
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
