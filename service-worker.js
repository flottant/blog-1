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
    "revision": "0e8b6853f6cb92c1b7b0b1b043046076"
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
    "url": "assets/js/app.d228ac41.js",
    "revision": "5871a286d19aecd7f72e9c3349847dd1"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "1400fcc8858a27224bf9da2df6ada357"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "2ed2930d7bcf804c85cebf8349966eae"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "3d4195703dd9b203b065c572c222d3ea"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "656641bd9d8946f3fb911026652e11fb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "59870ed898825ef30a11fd7c39b7f60a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "6d890708f825b180694637167011ce48"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "74059b9a0dc43ba11971b7a47319ef12"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "06913c02dcccc4a05ced95c933feef30"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "0568e1c38cbf770bd70a652b8ce649e0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "1dbf2e0e85973046998fab3ebf1217a9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "793008066014f4419a79c0dca02f1426"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "9de56949d27a8e0ad29e5ac7dfe6f82c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "364598e76f696ce6df0346b087b2e559"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "30941d2bfab63db3aac193180922a1f7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "6fc66a880ee396a922925da2a20b4727"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "663ad7d383584d39eec0474bcc54aaa0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "8b8333f34c4468b094657d896b941e40"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "3292b7be06b37aea51520914937018fc"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "4d010cf817e631debbc92f5df8fb3ece"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "4a551f919a7a24c6f806d172b0e27c72"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "33348ae154b16c8e262c4cbf70c55408"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "45dd3726dd880b8d9ef421e81d9792b2"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "6cdd8857a08bf5cf29a7106354eb9876"
  },
  {
    "url": "categories/index.html",
    "revision": "2ad0d9360ddf78db45449daf6ff2f1d5"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "c0a98d09fae5de437c78b48968b47780"
  },
  {
    "url": "index.html",
    "revision": "f2a9c02ef52501571038a7da5a99a54b"
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
    "revision": "fafb943aa82cd7bedff91b7931f0a47d"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "85a7e01525e913c86359f7bd4de1cfda"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e6ffb164cdc7738c422fee78617eaad3"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "cffdac30377fdf8060a4aa4f7b756130"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "48e91b76150390fabc3d73321b5d2bb7"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d2907735607bd119b2f164f9ce514fa7"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "fd2933ed03c710ade2320f663d0a0d26"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "3252f8ada3c42bdd8c43fcc4b360d72e"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "537d35d4a66cc5e0b18a11b37c4ece72"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "63c0f290e3f924f2bd8f78fa55a3b250"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2db9e089ca8fd335709335a7c4bbb22c"
  },
  {
    "url": "tag/index.html",
    "revision": "6f3a9fe97ff75f60eb65d82fdaed133a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "b372f50752cff7d6e61e2b329f2fb3bf"
  },
  {
    "url": "tag/less/index.html",
    "revision": "34c12845c665ec697f4c6f224b40ff06"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "a306a0cc32c7f301bbd90c5b8a5bbe31"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "2a7755c5b6f188093ac7d2f0984ed57d"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "ed0148baf370b53e581e2decac16de6a"
  },
  {
    "url": "tag/other/index.html",
    "revision": "7b476981cdcca6dc2d0316357aff2197"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "76940c09bc14868358952604bdeacf0e"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "8da3d17115fe37e77510af22d8202e27"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "96c42fe444840a93cc59496c62a7c280"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "c6dfd7e722516e3f0793eed70c287ae0"
  },
  {
    "url": "timeline/index.html",
    "revision": "4810214ca7a013bd89a7518e0ef60775"
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
