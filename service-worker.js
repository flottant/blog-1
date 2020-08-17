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
    "revision": "14ce74ec27b6595cdf71ba424dc92ede"
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
    "url": "assets/js/10.5ece0236.js",
    "revision": "5b5189826d7e8e9b6c3382f4fe4a9013"
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
    "url": "assets/js/22.625e8ce2.js",
    "revision": "335ef8cf3e09cc8b7b3dc08b9c580e11"
  },
  {
    "url": "assets/js/23.a32085fe.js",
    "revision": "1b6ec7aa484907a6b3d8eb67625f8cdb"
  },
  {
    "url": "assets/js/24.43009bf9.js",
    "revision": "cea80410198a41855e47d49a885fdf4b"
  },
  {
    "url": "assets/js/25.9c9c4ba0.js",
    "revision": "fda484e042c385246f7a4c8ba06c9e47"
  },
  {
    "url": "assets/js/26.f2ebbe6a.js",
    "revision": "3d105c5b75fa63799137fbf21ac31a08"
  },
  {
    "url": "assets/js/27.8be701c8.js",
    "revision": "1930d0453793bb807af4f989009cd655"
  },
  {
    "url": "assets/js/28.3d8d34e0.js",
    "revision": "458bbe26b9f17f7f6962f0614fbc72a2"
  },
  {
    "url": "assets/js/29.d7eb23d4.js",
    "revision": "24080965fc8cb29960d72d8118921ae8"
  },
  {
    "url": "assets/js/30.03a61702.js",
    "revision": "bb514f4a3a4d3230ec20a25203d8fb82"
  },
  {
    "url": "assets/js/31.502c8f94.js",
    "revision": "255275ba5c354e7e213530fe40117cc5"
  },
  {
    "url": "assets/js/32.a0ff646f.js",
    "revision": "b6aee02e373c8dad4a0dd4b2c7662548"
  },
  {
    "url": "assets/js/33.12388e1d.js",
    "revision": "d95658b6bc01b117904135d900864afb"
  },
  {
    "url": "assets/js/34.572d15f9.js",
    "revision": "4bd006442d08377ec2c192fa39ad38c4"
  },
  {
    "url": "assets/js/35.a59530c9.js",
    "revision": "593539a4db8a3ed9dde3d8ccf268f3f8"
  },
  {
    "url": "assets/js/36.c2d7a781.js",
    "revision": "a835fccea90f580b9fdcae3619dade75"
  },
  {
    "url": "assets/js/37.efb927b2.js",
    "revision": "6e926d9b90e910a2eb3377b00c218e95"
  },
  {
    "url": "assets/js/38.3c23d020.js",
    "revision": "686aa9ba9ebcf4a0a22e37b61174e993"
  },
  {
    "url": "assets/js/39.b46da75a.js",
    "revision": "725ffcd9723051edfadf946daa98b646"
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
    "url": "assets/js/app.43952142.js",
    "revision": "9eb4e3cab4a66373a92560b5fca05b12"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "59b31ddb0bb62ceec6993c89a2314614"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "9c6f1ce1d7e3e32ae9c7459009171ad9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "5165d89934884ccc869be6c83609e080"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "7e2643abb836d70acf74e6f7fc2d0de6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "25f00b7de8f5e52073098c0fccf6f7db"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "86ca6e63067253bc05084cd2d7910800"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "f26a422cd79ae64425ec84720fc25b87"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "2b0a9c695e35a09c8b7b4e1fda4bacfe"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "14a81c47b75e5d6d12f51ac777af3acf"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "0c8c6e5b09ccaaf440792733e952b456"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1.html",
    "revision": "9c0eb90ec8319d67b554e46bb0849cb3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2.html",
    "revision": "d474a17867e66978eed0c53bcb5f2051"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3.html",
    "revision": "f6591d5a1e18ec93b78be1c666b0f8b9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4.html",
    "revision": "2f8559d3951508534219130ba7a90db9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5.html",
    "revision": "9995e67fc134465ff6f5bb0760ea480e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "13435cfefdb32b7aba60f25b9e4c27e3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "657c0fbda1c10e17e8802842e741e3d6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "f3058951fab35c841a86be5624e9bf0d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "ded74afd96c773a33bf890b8407624fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "5ff470fc908cc486c1001158527d238e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "288e657594a2ee789a47b37a88e534bc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "a285eac86a031196cf633b4095463839"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "477d9e349f02f77ddc7277a6646ffb65"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "20b824b2c083fd686ccaa34d61b84e87"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "5d7199deec945adfc7d46f64e40bf3e2"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "77315cb50731846d85c6b6a5cae12286"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "d538aa69000aa370c847de0bea48421c"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "d3aca31571df4e6fb8ea9f79f437ae03"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d5025e9fcd2ae05077920aed1c813481"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "d53f3410c86d595349c696f72986cc5f"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "2bd47aaf2eb4524190ec94824c47087a"
  },
  {
    "url": "categories/index.html",
    "revision": "ed606b0cadd73ff9783ed1c7444e6293"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "6fa817aaa0e0b5148c5a99a7cbf71eab"
  },
  {
    "url": "index.html",
    "revision": "24c4d998167fbf308eb6617aaeabf6b6"
  },
  {
    "url": "js/AutoHeroImg.js",
    "revision": "d82431f8579c5506700b11fdad1e4fcb"
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
    "revision": "4b1683f31e944cf363fce6797f3ad9cc"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "2365ff54499b78f90fbecaa480ec73a8"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "0458dff7b65e5e695e6b6c0340f05086"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b731a47ff1f88d3f66cefede6cf34994"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "2b89be768a9aad288c2fe7dae2112bf1"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "22e03bf3a5fbd6c14ad29cdb48d30b95"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "c1e51d25d204e8b99b3587a0d1fb7dc8"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "3dcdbd2e84162eb497a98209910069db"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "a336b47de0fa690034e8444bee69afa8"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "59c5c36b59684206ec860623472911ba"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "07b2db48852e877a8ec4604f435c8f34"
  },
  {
    "url": "tag/html/index.html",
    "revision": "454b7d7facbd88c6d19ea69073d677db"
  },
  {
    "url": "tag/index.html",
    "revision": "27855033700a28013f8286424cbe7626"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "777cacc2630146311130ef9e8cabda6c"
  },
  {
    "url": "tag/less/index.html",
    "revision": "f3da6d36fd808697f483761c289a2961"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "7f62ca3840960c8af6ea5a8a83e53798"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "fe1edfe81f7f0ad617d966a3313b6640"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "5833b3e66282c75ac331808c170566ba"
  },
  {
    "url": "tag/other/index.html",
    "revision": "5877eaaaaf25a171648f9338e33c6d3f"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "939a592e8db1f8d1640fe0c1ef617746"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "481486319f2c9f3878a18c8dbcc92ac0"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "60baae7097ee3834261cc2b4538d7f21"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "87678a1d61f864ed6f24c826f75236e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "f08a9595e0804e13a73b1d08cbcb3020"
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
    "url": "web-img/Bing01.jpg",
    "revision": "e5a86e654389fca21092c242ddbf9a80"
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
