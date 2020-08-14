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
    "revision": "cef8ec6b6280bb089ba48df1f6ab67ff"
  },
  {
    "url": "assets/css/0.styles.1b343ea6.css",
    "revision": "04bede1715675c0a5ea80e75406e1414"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.f2954d1d.js",
    "revision": "99091de6fbf7259563940d63032a0cba"
  },
  {
    "url": "assets/js/10.7b9556f6.js",
    "revision": "0806310793cddae0c95791140effd96c"
  },
  {
    "url": "assets/js/11.f7f1505b.js",
    "revision": "9617a4d9610cac4443c06960640bc93e"
  },
  {
    "url": "assets/js/12.cb78b0b1.js",
    "revision": "e77700f624ad494010b77fadfb6d62d9"
  },
  {
    "url": "assets/js/13.18f97aeb.js",
    "revision": "967ebd88ddd97c364153fcfc67195e77"
  },
  {
    "url": "assets/js/14.91f2232c.js",
    "revision": "22571b3059a2e7f24ac60e8bae39ff91"
  },
  {
    "url": "assets/js/15.7d37d9db.js",
    "revision": "031b2b3ccf45735a02b7c0500e3d1c72"
  },
  {
    "url": "assets/js/16.f6318e6a.js",
    "revision": "d56049fcf9a359d0a4eacc5e1c4ff6c1"
  },
  {
    "url": "assets/js/17.8b2835ac.js",
    "revision": "ad52b6ebd47d2a72edb98947ce8d476f"
  },
  {
    "url": "assets/js/18.fa00cd8e.js",
    "revision": "600ffbab6cba9f3e6d98ee3a65616f9c"
  },
  {
    "url": "assets/js/19.08dc8d66.js",
    "revision": "649573e37cf943387ecae6be86902f43"
  },
  {
    "url": "assets/js/20.41832391.js",
    "revision": "376210e577575605478388d404acd88f"
  },
  {
    "url": "assets/js/21.c89933a1.js",
    "revision": "654e15e8d384f611492373e5f930e55c"
  },
  {
    "url": "assets/js/22.1fa0af37.js",
    "revision": "c2a2306b8ee9ff6130afbb49697136cd"
  },
  {
    "url": "assets/js/23.b0ab335e.js",
    "revision": "a48ef64d1a48bcff15652844b436ed05"
  },
  {
    "url": "assets/js/24.6e5e201f.js",
    "revision": "714e876ce8a340d8fe0ff7d059cd08d5"
  },
  {
    "url": "assets/js/25.63f52fa6.js",
    "revision": "0f58113bd291d93210dc40674436cb1e"
  },
  {
    "url": "assets/js/26.12165fbe.js",
    "revision": "c241a6ef09a3fda3f8fbb837173eae82"
  },
  {
    "url": "assets/js/27.89d1796e.js",
    "revision": "2c4a2b8aa9a6b1b8eb93119a61eedbd9"
  },
  {
    "url": "assets/js/28.34c8b2e6.js",
    "revision": "e9835af45fc4effb107d436054383f29"
  },
  {
    "url": "assets/js/29.e018bd18.js",
    "revision": "cc717b128c70c42001eee7dff48ff89e"
  },
  {
    "url": "assets/js/30.a1c99d7c.js",
    "revision": "fdb864239a0adb9e3b008fbfab338f67"
  },
  {
    "url": "assets/js/31.d47b010b.js",
    "revision": "6bf7a6604362094b36e17944f85224e3"
  },
  {
    "url": "assets/js/32.151c8814.js",
    "revision": "a8003c76822e40b2d4375a937ed8ecff"
  },
  {
    "url": "assets/js/4.1133f83b.js",
    "revision": "4de53b129f32f951dbe31e1d320e977a"
  },
  {
    "url": "assets/js/5.dd4680f3.js",
    "revision": "f4b5ba3471db012516b086d0e1324668"
  },
  {
    "url": "assets/js/6.22dfcefc.js",
    "revision": "a2cc67ee83f2780ea31a6e14ccf7d97f"
  },
  {
    "url": "assets/js/7.613eb78c.js",
    "revision": "891ebd7360eb970e08611f4baefc0c67"
  },
  {
    "url": "assets/js/8.a6d16518.js",
    "revision": "9385b39e6da1bdb4ec251d07f7ce9d23"
  },
  {
    "url": "assets/js/9.cb224565.js",
    "revision": "be73adfaac171f67eb292b0ccd5df2a7"
  },
  {
    "url": "assets/js/app.7616911d.js",
    "revision": "072f00ffcfe0d09080ebee0013e383d4"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "579fe8e46523e8f1017c856e2370e68d"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "28fa36a80d4ac269928cf70d3507f277"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "ef457ab2f70b629b74cc0bf7f72bf29a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "2e65e645dfd3ccfb628918368c50585f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "720631ff0344ace9d822d167fb2703ca"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "965cc98b81a46f4094dab6e5e70b7595"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "04d5277350ab07195b6009fd992dbc11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "7186a663978c8c1eae945de0c07751d6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "57b80f2659d42509cf15d1e8b15e8e93"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "9a4a15e45b08afc2831a50ac29599988"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "12b8013ce4c06224980e30d74ebaa96f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "fe227da299c426b986fb013d5b26d1a4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "1d7340c3f4a9704a1dcbd13ecd550030"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "1750ec4ccea77b3fd53649da38a7cb42"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "3b70b42de39503e3bf23f4af48084977"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "da2ad41ae606b2d60a7e6de29c079250"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "edffcced5b5ebdde14acd36830c2fdda"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "2db19b778e6c609479aaefbfc22f31ec"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "40ba2564a7bdd0f139f713f67c1f323f"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "0b052e64ca45c9ecdc1520b21f39667b"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "0d1f5ac88b84d268c8f0e8e14cbb8549"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "b0187959ec221fbee48a9156ab0a4086"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "99239c9942e3336f82839da403c62229"
  },
  {
    "url": "categories/index.html",
    "revision": "094bb50fd50fd878085a03e97ad710a1"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "fe506fe0482d0996996c7669e87565f2"
  },
  {
    "url": "index.html",
    "revision": "74637d22d9f17bcd79667ea12823a54d"
  },
  {
    "url": "js/HeroVideo.js",
    "revision": "596d8946c32bca3d5823f27cf69cb58c"
  },
  {
    "url": "js/hitokoto.js",
    "revision": "644843fc0c6da211a9e21429184dd906"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "cd532fdb2050b91b7aa65cad3c8a8729"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "4b6deb6e613225e42eeb1f5bbbe26a58"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "f1672f8c002c3aa9dc8890e428b07e5a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "86c3ee739e5520924168790cef12493e"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "0505871b7eee1a28064b87b28d7f81db"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "d1991fdb1f2491a83e4fb5034931acaa"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "1ab9d105b8012f980ce1eec3f984f3e1"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "5e8107b135370fc38932c334c273c6e7"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "a33beccff5009e246caebdd63239c5f1"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "bcaf78ae8453e70e1a995642e812da49"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "be0f084ac9e26aa6dfdfdb97f30b3138"
  },
  {
    "url": "tag/html/index.html",
    "revision": "dae8c657b3c592bb3d50fe2afd027d43"
  },
  {
    "url": "tag/index.html",
    "revision": "16935107d53b5cc2fd126dc04518241a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "2434ce4153acda005abe112dbc730a78"
  },
  {
    "url": "tag/less/index.html",
    "revision": "cfa0b3ff0a612f72a7193db20890254a"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "dbd34732788fa6b5876de5ccca4bf34e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "1c391dabcba13fe9aaa1ed395543516b"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "0ce164d587d05dd264cb3172b258c580"
  },
  {
    "url": "tag/other/index.html",
    "revision": "9769fba32b69f066caa414a3b40175ec"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "6fbba480fe9bb291ae31d3a95740293e"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6915e6b48cb81c3da5eb9e0248a99065"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "1082a50b59ff7fe5e8fd783c5db6eefc"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "846744e63029fe4c3c27f9890e19e1d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "c2f396c7680efedde663fdf3b3e4f1f8"
  },
  {
    "url": "web-img/author.jpg",
    "revision": "04df4f219cbf8db1bac55822bb7d15bb"
  },
  {
    "url": "web-img/banner04.jpg",
    "revision": "ba2485f79f4124b6ed0eaba7328e33bb"
  },
  {
    "url": "web-img/poster.jpg",
    "revision": "916ab1762b1f3a6002f7f5e590519085"
  },
  {
    "url": "web-img/古い通り.jpg",
    "revision": "f491be409b7f2101b73bc44d84eca03f"
  },
  {
    "url": "web-img/夏影.jpg",
    "revision": "9ac2395672f4660123522163123d8738"
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
