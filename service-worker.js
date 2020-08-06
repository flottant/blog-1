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
    "revision": "50e1ffaf8bda5d3ff2c543869bccf701"
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
    "url": "assets/js/1.8939d8e1.js",
    "revision": "06f8621b86a39948e88e74add2067892"
  },
  {
    "url": "assets/js/10.2a06ecaf.js",
    "revision": "e63d54b65869e8d5deee73a79e4c4479"
  },
  {
    "url": "assets/js/11.87663bde.js",
    "revision": "ca3beb71dd8b5683c75d84f424512b74"
  },
  {
    "url": "assets/js/12.fb9b35cd.js",
    "revision": "6da4a98e14ff97ecb66500dd8ed7faca"
  },
  {
    "url": "assets/js/13.db2e0a77.js",
    "revision": "ca79ff35025cdefa5d8a71efa36665d0"
  },
  {
    "url": "assets/js/14.42890515.js",
    "revision": "817dca9bc9d1d23c6f65e8fe66513a2b"
  },
  {
    "url": "assets/js/15.d00ba8bf.js",
    "revision": "c12d73a4581bf88e78dc794784614436"
  },
  {
    "url": "assets/js/4.33506f86.js",
    "revision": "025b05db7b8bf04278371b3a44489f0e"
  },
  {
    "url": "assets/js/5.505fda4e.js",
    "revision": "14729225467b1f0fbb77d95b6df07506"
  },
  {
    "url": "assets/js/6.fe95798a.js",
    "revision": "f9d24baf6212b5555423b5fd8e11d756"
  },
  {
    "url": "assets/js/7.b203f11f.js",
    "revision": "4bc6b4ceaf481c5105c66708d9be93a3"
  },
  {
    "url": "assets/js/8.a3fe876b.js",
    "revision": "2a21477bff3f94998b030425c5144a47"
  },
  {
    "url": "assets/js/9.fb674d65.js",
    "revision": "7d38039f747baab9c6591473a2c9abd1"
  },
  {
    "url": "assets/js/app.2f51ac8d.js",
    "revision": "693dfc5bce5dab676d45a7103a9a86c1"
  },
  {
    "url": "assets/js/vendors~flowchart.8cc5d160.js",
    "revision": "bdb66a3e153e52cd76ceb1c45391be11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/代码块行高亮测试.html",
    "revision": "7c5facb8402ee80244293532e4f80ba8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/依托于GithubPages的Vuepress静态博客GithubAction自动部署方案.html",
    "revision": "57a882a3a2c1ea84b27a8bf55427e8d5"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d619345f579efec9a3ed41e5232e2cef"
  },
  {
    "url": "categories/index.html",
    "revision": "da0cccc028254450b70b7f8a3fa0cf2e"
  },
  {
    "url": "index.html",
    "revision": "4978a8112a1dbfccf2dcd69733ceacde"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "4477ec16f587a970d356620fdcc07cc0"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "7735d81ee3b456f15cfe52c859bc3b22"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "26bbe838828ed3e2abf4c2f720c98a56"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "c3c52612e33537f12427610d776510dc"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "b63429dab93f586362e956c173031193"
  },
  {
    "url": "tag/index.html",
    "revision": "18478b23fbc9366131f42a0a1b04afa4"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "24231943dc2fa73b03205ed4c96158a9"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "d3da104e55567d766fdd7e8aed3f1c3c"
  },
  {
    "url": "timeline/index.html",
    "revision": "1e6211ccaed17ba3c89280831be1de66"
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
