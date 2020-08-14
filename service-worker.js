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
    "revision": "8ce6911eb5659d0773e5a4b299453d2d"
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
    "url": "assets/js/app.b62f627b.js",
    "revision": "b917879fa7faa2a22639661e589dc928"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "63ebd1a0e015dcd55c201c018a8cafac"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "f329dc2589211978b6f7722e65fa468e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "004eaac15a35e002e2f36cfd4edceae4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "bd6e63a3d35a90af1d18ebdf58ef8a1e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "615d40fceffb4fd6eedca5edd37c9081"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "7ae831baf202c77a7eb745f18dadbe38"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "0de130b65b45a133a9f3d9c21e561199"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "1cc4a25882088badb40acd357f7850c3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "030de782f945c930ad28aceeddde115e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "94b04e8f79e59b9420392dce92b9b041"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "5d22c22783439c3ac4c2fe2af4e84bfc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "c3e0baa54c7d0e27d9c655815b23e4d3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "a9af1b09eb502f55f31343adb74d95f4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "f9153bb2a8642343478c8ffdb79aa7cc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "8c0b4c3b29057f132213d12a5ba0da81"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "0cb11c2ab66fed832ade943b73778a50"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "a76e7017fd662452401706acc46a4462"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "5388df128b35448eb1c5adb5f09dcf00"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "500062fb8fa1f229ffd59b65dc263c1b"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "9c7d47347a30b7bcb5b2d9a0114484f9"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "2c18fc4d136a303b3f43a799c5150297"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "bad14f97d26378feb21030c006c1aa1f"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "05132c8ea86d4ef398313d42c5cdf404"
  },
  {
    "url": "categories/index.html",
    "revision": "3d97abb2c89f62c9f20acfec34ead55e"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "64a0e4874e28ef74307c65b93dd8068f"
  },
  {
    "url": "index.html",
    "revision": "ed5d0b7e9042aa04e42feb58b11a3611"
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
    "revision": "94f41e6383f70f35c08a8d2bcaee38cf"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "f8948d1f44fddd4ca1bae33b2aa6e370"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f3b069317664a9c1c0cdbbb3d8f6161b"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "5e72b3dde4d3ea480f2fd37e72920a02"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "0a8a999d86fd363c2e92c96d1a3867e6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "03769326f5cd71821c207ced43831445"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "e8c39530886ab4841d4cbd7f401624fa"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "a4757018833f86848c3e3381b4b39bfa"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "7e7137c5b8c8ac31bc21b2626569f375"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "c700c88fbb9f63a88c6184c730da1c04"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4b42241fa621064028c5dad2e9facbe7"
  },
  {
    "url": "tag/index.html",
    "revision": "88843d00dbb5254341b5292c234abde1"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "36eb89e59857e13ef8e58de33562de29"
  },
  {
    "url": "tag/less/index.html",
    "revision": "7bbce2a047937e38baee01847a7cf699"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "a967fa6115f76577c0e962ef23c9ba62"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d8167ee1ddef28ecf2eb56414d5c6ad9"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "4e78294c3b49327a2bb795eb13e4a702"
  },
  {
    "url": "tag/other/index.html",
    "revision": "a1e658ded18cbb482ca11400a4b819dc"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "1e87c6cc4ed95460d173be20df4a292f"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6098542bf23ff60c8cd53c6f3be4ec95"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "672d58f72080f41542014ec5d356a16f"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "0d942fef7355b4bf588479596f86a7e3"
  },
  {
    "url": "timeline/index.html",
    "revision": "2cb2e30b9b4439dcf77036b34369e41b"
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
