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
    "revision": "43b61eb308f67fb23c4cddd53adecfef"
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
    "url": "assets/js/13.30570704.js",
    "revision": "c73f223d3bdc1fb4a5b4b3702975c0ff"
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
    "url": "assets/js/app.feda22e5.js",
    "revision": "1c2b38036eebfae3bff4f6ccf27f7260"
  },
  {
    "url": "assets/js/vendors~flowchart.8cc5d160.js",
    "revision": "bdb66a3e153e52cd76ceb1c45391be11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/依托于GithubPages的Vuepress静态博客GithubAction自动部署方案.html",
    "revision": "38f3582d6398eb58b3e58a97ea8fb8bb"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "b054faaf767b6bcef943b65479854b1c"
  },
  {
    "url": "categories/index.html",
    "revision": "238d0b95bb3d3aec152e132ad94552ff"
  },
  {
    "url": "index.html",
    "revision": "fdba8c83fc3e7035f78feac4a1143d1e"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "8c9e9e39df5799b2a6507278ef4dcbb5"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "4540dda8a94964d492512ec67b74295b"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "2c558f40f28c1a3e370f7693dc65defb"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "3c910db8cfe79d47a69ee47fd8ae2fea"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "19051974297eecafe65e3bfddb3a6b96"
  },
  {
    "url": "tag/index.html",
    "revision": "bbf7d79ee219b239931847e9fd3e7343"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0c07b57d3d9efe02c38aa5493b542e38"
  },
  {
    "url": "timeline/index.html",
    "revision": "09bc02d0fd97ad4b227d25ba587352cf"
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
