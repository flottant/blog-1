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
    "revision": "72daf72bd29d84dfcc9db95d3ea9d2d7"
  },
  {
    "url": "assets/css/0.styles.67296747.css",
    "revision": "24da0114edfe96a9f38280e0d3c228f5"
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
    "url": "assets/js/app.9194c875.js",
    "revision": "1aa2ff2a12bda3eba04f277820cf0004"
  },
  {
    "url": "assets/js/vendors~flowchart.b1222c5f.js",
    "revision": "ddeae57682a006ba86719462a1926475"
  },
  {
    "url": "blogs/FrontEnd/2020-8/tips.html",
    "revision": "b58da961c9c56f4f9542cc2ff518cdde"
  },
  {
    "url": "blogs/FrontEnd/2020-8/依托于 GithubPage 的静态博客部署方案.html",
    "revision": "093dd1c895db9f5e83cefb540e53f8be"
  },
  {
    "url": "categories/FrondEnd/index.html",
    "revision": "fd7424c90ea17340180e0ce910155ded"
  },
  {
    "url": "categories/index.html",
    "revision": "6568fbfee13b7b25938b4d4591a8ef17"
  },
  {
    "url": "index.html",
    "revision": "0d25088b46ccb356684216dcfe7ea790"
  },
  {
    "url": "tag/githubpage/index.html",
    "revision": "6b7e28acc46420b3879204742bfba143"
  },
  {
    "url": "tag/index.html",
    "revision": "4d9ae5bfc065a64d32344632295b9ec3"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1950f522010501a17ffbef8d94f769f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b1a1d22d710231eca3d1ec0212784a2"
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
