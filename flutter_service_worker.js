'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "a7ee4ca6620ae56e348c49e3f40b0d08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d6f070e2133501cb835e1d6a7835af0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "217079bdff855bdfef67de958267e08b",
".git/logs/refs/heads/main": "5d0ec97afe3b0873e9513af59a1bcbfb",
".git/logs/refs/remotes/origin/main": "6d4af085b92133608e716320d7943121",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/9c15cf1054ef01a367e57a025e5fc5a30d5e13": "bc6bbc7eb2da2abe4ef01184b2ee41cd",
".git/objects/18/8ff72b3a9ea5235da228fd80c0378031434638": "ea800dea7af8fb7f8d3f5d084b37a5d3",
".git/objects/1e/89cfe1687a786fd9026f3362af598900bc6751": "319107e4bdcc122a3820856ea6ae8150",
".git/objects/1f/ecd8fba3a466843a3c42da1f0ef7750168422d": "090962f5c11fc45904b94a744a7f7382",
".git/objects/20/15be66dcd45463a53b819b544e729b00fdec97": "9bff497a317dfc08661bd0249777eff7",
".git/objects/22/6371351595307779cfe3d346a308f6134179ca": "d51438b7c5cc923de946b8d1fcff34fb",
".git/objects/26/c5d38564c651911ebe8af20373f0a5b171d086": "c63a86c304637a76eebec897783375b3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/20c6b49cb8129bf868d0f2bafd596168321fea": "a77d909e47d004e2ac73beeb59e0b75a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/abf2c192e70ebe266121994948ae674968d386": "c9577aaeacb306a0435b37aacc5662a1",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/57/e0e0c79642522bcc80406c24215200f49b041d": "1fdaff85ff5a41b006eb3c76f041a435",
".git/objects/60/b5af6e4071e754445e1e82eb608b98f9f5ee7d": "561cfdad5c99fd60f801fa064e4e6992",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/81/6c995b63d1df0af3a05cfe109372fc5de0d261": "8362ebdd2f1452985287eac6676f430e",
".git/objects/82/0b40818a4ee336c859e585a00ebe93c8fde802": "42f3004df001eaa762237841cc9e09e0",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/89/d434152ba8dc61c76f82972ea6eefcc5cd8425": "9aafa9c109ab4277ac03ea1381744f74",
".git/objects/8c/2b92372e5ed9fc919b79e1b2903240f1d258b3": "cfa0dc2589d8c90de39a897fe6e9c16e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/dfb3941edd965f9220f3552e7a3745dabb3350": "a844c3b299a1b923f822b79f66b08ce3",
".git/objects/9c/865c6ec4e331e27e64d7f4c9e015d3be643998": "26a56e4cb061711d01884c660b8f4e77",
".git/objects/a7/5e3860ebad6c0e7be12a3a6d5b460006809211": "a8b249f1eb65fa01e43e985dc8e0345d",
".git/objects/a7/9fcc91843bbf54b94c17ffc3f048b4666f137d": "3d7bbf22c27891424206b0a648ffbe48",
".git/objects/aa/1222abe58e80b7e89fe9b4440cb00561b11205": "9480be5e8251b8a1e34ad6d4f42929ce",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/212999481385867f6a7cfd0de1390b96a81bf2": "c67b58454a45beec791bdf3fca642cf4",
".git/objects/b8/99b0d8cfe4e39880cf101aa43884b5ae8ad823": "f412dc9451861f94ecbc30b81b2e1ee4",
".git/objects/bc/c5b7863e86f348cc4367c782155728905ac876": "4ab91315dbf0e1720d5b9e89bfeee1ab",
".git/objects/c1/57390a024b6b9977e3eac7437e0418d74997fa": "c0f0d6b6cd683e644c0dfe8dabf63657",
".git/objects/cd/bdb65d0769c719504d8ea87dfa090b09d0dd36": "50cf6b7648c8ca0c038a927b39b8e1d1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/55ba5bac2614186c6c7958402daac5b9d87156": "29fc9d80ba5f2df68ad14a37ca9bda9e",
".git/refs/heads/main": "9ddcfc812b6c6f412eb4965d5d72e14b",
".git/refs/remotes/origin/main": "9ddcfc812b6c6f412eb4965d5d72e14b",
"assets/AssetManifest.bin": "2baa696f55985a50fc1729d4445e7162",
"assets/AssetManifest.bin.json": "2b48d4076faab03723174123325e55de",
"assets/AssetManifest.json": "3f0035cbd8341ac1766d235018824b0a",
"assets/assets/1.png": "b8951a7b873055f0f52cc126c2e7db49",
"assets/assets/2.png": "dd27066f885469813078c3c16a94b5c2",
"assets/assets/3.png": "25045baff97c669a8661a4946f8ce5aa",
"assets/assets/4.png": "7278316b8d981b3a696ef77056326daa",
"assets/assets/5.png": "123309dfe15f2a4d311c3f802ffd8d11",
"assets/assets/6.png": "b23064558aa7b349709f4edf86f37790",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8c92472b32ff5d8c6b37242c8a84c98c",
"assets/NOTICES": "f6acd381b175bbe6a55b585040cf6199",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "94abbd2c0b853494d33bcb9794f9141a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cb02f115af757b4a9019624dc66355e1",
"icons/Icon-192.png": "c42125c370c018e10c89938462c1e0a4",
"icons/Icon-512.png": "826ac17b42065316b364f32f24d15e31",
"icons/Icon-maskable-192.png": "c42125c370c018e10c89938462c1e0a4",
"icons/Icon-maskable-512.png": "826ac17b42065316b364f32f24d15e31",
"index.html": "d7b1f3a06bcbe33cbf4fde41200f6074",
"/": "d7b1f3a06bcbe33cbf4fde41200f6074",
"main.dart.js": "761ca86213522fd5c919c3401ec08615",
"manifest.json": "1d58f5f9301d1dedf2cf10f718699146",
"version.json": "1b9c6528581f2cac9d498d1b25aa8d78"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
