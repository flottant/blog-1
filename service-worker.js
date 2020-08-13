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
    "revision": "ad7c5f508c7d509ab35389e89778222e"
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
    "url": "assets/js/app.08783003.js",
    "revision": "4f7072011f5f3e9dc64a65afcd596bc9"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "c2f20ae41e56cb1e7f1542fd9c35efc0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "c84646212d5c4680e2189861ead808cc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "38a6d6c51de228cc6b15dfda394768bb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "b74cc54ee3f1b79a89df506c3a60180b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "4ca062ac6f7a7132bc2bf871f2547a39"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "f3d94c21d1594368d1f2aa0547ed4d2b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "0e3792762ebe1646f999e1865ed7de6f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "6a427ea1c5fc539ca1a41f2bf14ff6b0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "b671450f4587e7cd28180b10395a56aa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "a1ce82d1c5b079b0f1941c399c782b36"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "69637a4aec27ad7addc407ebae24cd04"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "50dfeb6d536bc7034e20df0f6f7685bd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "3513e2112c9ff1bc9167e395266a9c7e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "8eb128cee862c1bfe81fd24d8c2e70b3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "39cf20d1487a41cf3ddfc8599a06ecd5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "c809b3e8a5b9052591bfe797c3d99823"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "1bcd1cf7f77922a904d85862d3a673c8"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "fc30d9c5be4e61142c8370c87d73b8e7"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "9fd7692a25928fbb86cea752fd8286a6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "054e3e8124da8ad3211e26b7cc08ebd9"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "96329233cf2d2f2800a830e50694ab87"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "11f638f53a7749d4d112378b772f3a1e"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "e4a95b9d54639d023a5f258e59b07882"
  },
  {
    "url": "categories/index.html",
    "revision": "9e439ed87882c64d0a5444b3123d54cd"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "20e98efc8e5fa01f0894ebbdd2fd7cb2"
  },
  {
    "url": "index.html",
    "revision": "f70cf319135add53a6774bafad253079"
  },
  {
    "url": "js/HeroVideo.js",
    "revision": "bf99dad0728103303e73f7d70e44ac88"
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
    "revision": "9e35ad26f16189eade7ee931248bbba1"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "21aecbc68d99c8e7ce50a7d34c00418b"
  },
  {
    "url": "tag/css/index.html",
    "revision": "714c6e9eaa89f69c93ee1ffcb1181f31"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "c932f9a51fa3f60e3aeba0bc5febbe31"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "74a8e41845e0e659840f48d4f3b95f5c"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "ea2c4ca892c2c18881734365ce3105ae"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "b0f3dd8ec27438fab52ff75c3086e817"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "51a5e8c2ef7468534f8d120630a525ab"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "9bf2acc78c325af1fac77f3ec09ce0f2"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "b41abb268951cfd2bb0d97407c784ef1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1cfc34d67d24c0a1dcb03537fb48b932"
  },
  {
    "url": "tag/index.html",
    "revision": "469b7eba55332bc5e0d4f048c5a7591d"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "87db3606d543b667e6cc34421a18967d"
  },
  {
    "url": "tag/less/index.html",
    "revision": "37a629ecb0d140245c799f5d7814b43b"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "865eabb166bfe75f2ed4aaa692b8958c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "114eeb3f6925b3cb47a60cab56850517"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "3a3b77c5fbea0d612a91a8c68b2cb3c6"
  },
  {
    "url": "tag/other/index.html",
    "revision": "e73399247bc5dc76c9e90d3b9b7bc5cb"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "415d15a565207c382fdca30901d49a99"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6934af0ccca758063d4c06274bbc0fa7"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "c0ce0e792be604d9af276dd45f637182"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "cd2e055bf1487835ef4facf297ce03cc"
  },
  {
    "url": "timeline/index.html",
    "revision": "d2f569f51a1af7613d4b8fae55423c3c"
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
