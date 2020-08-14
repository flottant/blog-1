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
    "revision": "c3c0d9896434dd9d500afd10a8d4d5fe"
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
    "url": "assets/js/app.2a6aaa93.js",
    "revision": "df4820892e77ac767ed3bfb21d27d921"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "2cf9adea851402895722a0d701c0f2a0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "28efc842ac94a5afb3966673997451fd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "dab25fafa48d719ad2e2db2e8661a72f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "acaaa5417b8111f7d1e4828385fa3e65"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "ecb522a8948b603b0a9a0b98df4b3fef"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "2d6253a5e638ac49724fc983ed57b3fb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "12a814536d08919dbf0415b67439a0c0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "7afcf7ec8b5cf17ad1f9d70c74195663"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "bf0d16ee81068c1f4eb206e219ca9763"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "02e3dc66771784907aac8ea87a4180a9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "524db80c34407c2f6dcf24274c659692"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "24f6bbc0bdc16c3a925d67cfc8ce08eb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "56a92587fa41cd48b20f202fd68ca13f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "0074872c315b04ed27247ba8b7db556c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "56c50e5226b5d86b3ab01aa5a03b4012"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "70a7384fe971da21b7b539dd03ae7dfc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "5cae0be4c417822609a751b6a6220608"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "39a19ab898dabbb8e7fd73aac728f976"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "f3623c118e36e49f0914133876041ed2"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "92ffabe29a5f208018a2991dd53fe9f4"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "0ce900c1941532d46ac7a3e77bbaef14"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "6f2ec5c0fc14f8fbf001c28f810c0c20"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "a6b5c4ab840a1574986dc4a96026232a"
  },
  {
    "url": "categories/index.html",
    "revision": "38c9f6881b89be1370d2962d0a43b681"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "ac492c4ea755a2bb12b21e0303e829fe"
  },
  {
    "url": "index.html",
    "revision": "21ac762fd12b3dc29ca3dac921a08928"
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
    "revision": "5e79d6e0debcebb55c013bdaabd8402a"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "093af3cf901b8946653c3f8ae79ad355"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4f1f90c3e6f18634677422512137010b"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "c79bb5f70e8ece8227b0cc2477cf22c2"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "2730c0ab3b4403dd696f9d73ad3158bb"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "10a101ac458e4899d8d2416dd9f3b821"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "2b554d43ee51581972a8b3df81675198"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "187e2dfece64062cf5abb2412a6c70d2"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "622d3e12be815bb2773024c08770a8b4"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "fdf58dac9f6685ea481ca16226c644df"
  },
  {
    "url": "tag/html/index.html",
    "revision": "47e830b3d40899722eb8393630e8df43"
  },
  {
    "url": "tag/index.html",
    "revision": "8929d8a026890219b8a6f35a38e481f8"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "8316739a79bf0f4fe84eedc410f59af4"
  },
  {
    "url": "tag/less/index.html",
    "revision": "096e6bbd3c5666c8c81cda2c99d82d25"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "2b445be570ea3ee324ba9755b386ca4d"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "53fdd67034fc69c6aec8677b2de80bd0"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "f2f317f86ea9a22bde189a0e50b89ca9"
  },
  {
    "url": "tag/other/index.html",
    "revision": "04f5cc51318e2325a5e777bd045b0ef0"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "010bafda05bea152e027a126da4f27b5"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "ff7ce486984d4ffea7f73f89c01ca17a"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "97193597181386d4e7b87b2895198bca"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "2ac2e9ee06ab9b1692b91d64aed1db09"
  },
  {
    "url": "timeline/index.html",
    "revision": "94ace67a49cea477d3e48f6fb10d0ac3"
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
