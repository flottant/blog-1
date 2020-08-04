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
    "revision": "fae8f61c7f1c2687b574f51b2a5c268e"
  },
  {
    "url": "assets/css/0.styles.605b745b.css",
    "revision": "6f8e88636b23281095b93afcca083413"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.f549426b.js",
    "revision": "cdb165c63fa51ea5c1e7d51cf8191bb1"
  },
  {
    "url": "assets/js/10.cfb1ba8a.js",
    "revision": "aac3ec1ee0b8999cdbb1eeda5ab97577"
  },
  {
    "url": "assets/js/11.458ea742.js",
    "revision": "dd21573a014548ea646311ecebaa456e"
  },
  {
    "url": "assets/js/12.52f1008d.js",
    "revision": "eb5f8a18cb80db43705bf03f3cf81079"
  },
  {
    "url": "assets/js/13.3d7feb27.js",
    "revision": "31b515330df0b9357fd4c4a68838f593"
  },
  {
    "url": "assets/js/14.9f4657d8.js",
    "revision": "efbd82153ef9a073e9723031f6d850ef"
  },
  {
    "url": "assets/js/15.bb9b5627.js",
    "revision": "d56dca7aa60a0bd6200e82c81363e5a4"
  },
  {
    "url": "assets/js/4.0dc17781.js",
    "revision": "8d9db0b10ed21cb54e074893044cee4f"
  },
  {
    "url": "assets/js/5.1546c66d.js",
    "revision": "fa5916adf5db52ac2d707329ffcbb5ff"
  },
  {
    "url": "assets/js/6.63cbbf63.js",
    "revision": "62238a1d9a1211858ca27c77ee035b04"
  },
  {
    "url": "assets/js/7.0e3f4994.js",
    "revision": "a71f4cc8aca03d60a39f24c9d82ab8e0"
  },
  {
    "url": "assets/js/8.521d0228.js",
    "revision": "7ed3a7bd239c005c6132b1093a0e4c6e"
  },
  {
    "url": "assets/js/9.a59fc3df.js",
    "revision": "bbb13da129bebc39243315fbddf9d88a"
  },
  {
    "url": "assets/js/app.445a08ef.js",
    "revision": "16705acc7d8feb29a436d75f7a789608"
  },
  {
    "url": "assets/js/vendors~flowchart.b1222c5f.js",
    "revision": "ddeae57682a006ba86719462a1926475"
  },
  {
    "url": "blogs/FrontEnd/2020-8/tips.html",
    "revision": "2a249bd5976440ea09cc61f256966c12"
  },
  {
    "url": "blogs/FrontEnd/2020-8/依托于 GithubPage 的静态博客部署方案.html",
    "revision": "8b4b6f35c9e76542555d119a57a49fe2"
  },
  {
    "url": "categories/FrondEnd/index.html",
    "revision": "6c7e4dfd7fc1f0cce85b497638d9d71d"
  },
  {
    "url": "categories/index.html",
    "revision": "bf5be481f58d209c27cc4c9484f4dbf6"
  },
  {
    "url": "index.html",
    "revision": "59a07a830e375d8d4b024c4691612e01"
  },
  {
    "url": "tag/githubpage/index.html",
    "revision": "fe9c3e16ebe7af4578951922d01cf312"
  },
  {
    "url": "tag/index.html",
    "revision": "e8673d5428ccfb24e1a5bb8dbaa69fe8"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "165a4d363fb1ffb93b411452682897d3"
  },
  {
    "url": "timeline/index.html",
    "revision": "e68921d10e5b423ac9c9d4e85cb3cebc"
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
