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
    "revision": "810135c1a52dfa650aa9718fc4ba94ff"
  },
  {
    "url": "assets/css/0.styles.f0590aa3.css",
    "revision": "3071ce5eb7e491b8b9f13332457263e8"
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
    "url": "assets/js/24.16d04130.js",
    "revision": "934f84323fd8a9a1bbeb5098dfc477ff"
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
    "url": "assets/js/app.ce477db6.js",
    "revision": "f455a3d53781aefc96d6f47884582321"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "5efab1648297211f49d5f3828ccf6123"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "75a1995da28a5102ca7577a13cb3d736"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "ad8ece1a4445b48863257f469cc90ffd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "a7477b1b1bd20a4b09b3f11ba9536bf0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "9153694c4f35561c5666b3124b76a8e8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "7dfb3b2c474c6f63990cf11173e9c8e2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "96b2489eb70858e1a6dfb4032604c42e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "ef7842edcf6b3ee9901df5a88b3db57f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "9dce5d4065e0b385d5eb0e3acaf4154d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "753fde2aa31bdaf51a5d556172f6f50b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "70bd22d7413f6f23f0eaffb8d5a9ec24"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "0e02860c98ea6dab643818998335a644"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "1b901716bf6f0276f41e700a70964511"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "2c572503666caf1a6993ed3746eca905"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "a4b68fbfcbf4d2e2cd8d7a73da68b4be"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "98a03b6c5518cbd0c8a8a661ee5b838c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "fd0b650312a480fcaf910f74cfd43445"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "51ce4b477205aff93a555158959f3df2"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "cef8dede1a2b298367e883fbcb7d81e0"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "5df73953cfef8f349aef0522aa430b17"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "4f22314d7033b7c0cdeb9340233ad06b"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "87caf0c81add730c995ff2f084347aab"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "215d65f4cfeaa48b3140b68cebfbf70f"
  },
  {
    "url": "categories/index.html",
    "revision": "b0ff212cd176c7a5f6207fcc491cb091"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "98f728cac79691ccd925bf3b8b33f1d8"
  },
  {
    "url": "index.html",
    "revision": "17be4406c46b47bce0b5c86675150c64"
  },
  {
    "url": "js/HeroVideo.js",
    "revision": "46104defe3b9db56290c0a36ca75cb60"
  },
  {
    "url": "js/hitokoto.js",
    "revision": "b442088bf29f4f14668f862f9508d77c"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "cd532fdb2050b91b7aa65cad3c8a8729"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "d4b222516fb0efe1c7ee51585a4125b0"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "422a5051699e5504964defcb80b7c887"
  },
  {
    "url": "tag/css/index.html",
    "revision": "75b305f182181de746b2df5c3ca11c7f"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "40def539dffaa828e8ea702ae44bec8e"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "28647f1f4041b5439e0a894426d55ab9"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "f527c906661bd8b02fab32bef4c91395"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "8434029c1ff8ca54cde5c6728452ce52"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "76075ebccefaa3a8896af149c86e755d"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "b5b0b3e4d9550e2aa22b7a25dd4f0d22"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "edf16aeabeb3d63c057038f1f86ffe3f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4f9a3d659e4b79043e35c4f386d5ecdb"
  },
  {
    "url": "tag/index.html",
    "revision": "8a2eb164e0561deda2ef70c6a60373fd"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "5c37186eb29d8500eaf1247a5a32bc6f"
  },
  {
    "url": "tag/less/index.html",
    "revision": "584ab9c42f342ec5d340ecefcd3ebc48"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "cd92bce73cf2d68f14945eb65b1e6ae5"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "f5215d496fa8b7426e4b2e6a5e993302"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "5135c3c9e64ca854ee197cfff3064c8d"
  },
  {
    "url": "tag/other/index.html",
    "revision": "26160d66a29faa73e453e0c40f623e76"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "6aebffdb144cf1d92d0d9b67262e912d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "d6bd0ab9447cc17a253a7a9b3d000f2e"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "729c6dc3189702d568e1040243b769ad"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "26f71fb3d78e08aeab99c57e2fadf8b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "9713b82520907e5b9a9f111bc63d49cd"
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
