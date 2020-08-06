/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f8badc550c888570156527f223181e9c"
  },
  {
    "url": "assets/css/0.styles.e168caf7.css",
    "revision": "65c0fc1389f7a8887f4c6186ecfa3c45"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.b075f33e.js",
    "revision": "fb6ae7143a939a33722550ca13b88b1a"
  },
  {
    "url": "assets/js/10.bb9b2106.js",
    "revision": "5c196715c2ea3938ad0f49313352e593"
  },
  {
    "url": "assets/js/11.32769570.js",
    "revision": "7f7dfc13f8d94636e56c93b35314a257"
  },
  {
    "url": "assets/js/12.304ee69c.js",
    "revision": "b8825d74f9a0c8b719a71fa2570603bc"
  },
  {
    "url": "assets/js/13.81644de3.js",
    "revision": "8b6d945fab448c96572bd305aeb54868"
  },
  {
    "url": "assets/js/14.107077f8.js",
    "revision": "72209fc8d9486ea1a2b3336964a45ccd"
  },
  {
    "url": "assets/js/4.9426981b.js",
    "revision": "8baf6131624e73fa78652e613ac9ba4b"
  },
  {
    "url": "assets/js/5.e9ff4345.js",
    "revision": "8ef2751d2ad38888065c3ea79537b584"
  },
  {
    "url": "assets/js/6.31fffafe.js",
    "revision": "d50094ce7ae4d22c01eb9da7b96623f4"
  },
  {
    "url": "assets/js/7.da59afe4.js",
    "revision": "aff32c63ca485e0c1094ec60663a8744"
  },
  {
    "url": "assets/js/8.19f00d27.js",
    "revision": "80bb86e24057e1455ee67531044c83e2"
  },
  {
    "url": "assets/js/9.0e33fc2c.js",
    "revision": "f7310014de180132e98befdd04f61c81"
  },
  {
    "url": "assets/js/app.265510bb.js",
    "revision": "fafdeb7bff1b3f58c6aa855b79fefe38"
  },
  {
    "url": "assets/js/vendors~flowchart.8cc5d160.js",
    "revision": "bdb66a3e153e52cd76ceb1c45391be11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/依托于GithubPages的Vuepress静态博客GithubAction自动部署方案.html",
    "revision": "f9fd3f00b389403540094cdd013cc7de"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "190d7595416d9d9d1199fd66581d4363"
  },
  {
    "url": "categories/index.html",
    "revision": "2d16d6a299192e18f5708f423582d21b"
  },
  {
    "url": "index.html",
    "revision": "d356b8ba865a7f93dfa8f815df1f2553"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "b94bb0e51ca673b62354ad4c600a9649"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "96130e3c1ede11c9b418a6f9115f371a"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "13af11e99b899b64492af0858db7a17b"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "3c7886b57d4240fb8e4b2f8b432462b3"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "cc3f9156242134a18511e4e53c29ad21"
  },
  {
    "url": "tag/index.html",
    "revision": "e5fe493025239901ab0d2934353f05d0"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1a6156567f3dfe538e36385ddd8991a7"
  },
  {
    "url": "timeline/index.html",
    "revision": "521408617165ca56136a7ef244d91f40"
  },
  {
    "url": "web-img/author.jpg",
    "revision": "04df4f219cbf8db1bac55822bb7d15bb"
  },
  {
    "url": "web-img/banner02.png",
    "revision": "d1ac6e2de347a5212489385d7674f5fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
