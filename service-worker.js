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
    "revision": "b93113af16efe83d1d2c5bc561e604c8"
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
    "url": "assets/js/12.869a6b79.js",
    "revision": "f6d8660041b224cdcca50052ad62ac98"
  },
  {
    "url": "assets/js/13.18f97aeb.js",
    "revision": "967ebd88ddd97c364153fcfc67195e77"
  },
  {
    "url": "assets/js/14.79c902fe.js",
    "revision": "94936a4e49522692eaff83eded25e8fb"
  },
  {
    "url": "assets/js/15.674b3f2c.js",
    "revision": "83986970b2c5a4699e1034d9cae2acca"
  },
  {
    "url": "assets/js/16.f6318e6a.js",
    "revision": "d56049fcf9a359d0a4eacc5e1c4ff6c1"
  },
  {
    "url": "assets/js/17.c9186ce1.js",
    "revision": "175789ba81143954d145dfb4312932da"
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
    "url": "assets/js/21.61f78dae.js",
    "revision": "99c5c4e1c792578344c2c37f83a23309"
  },
  {
    "url": "assets/js/22.625e8ce2.js",
    "revision": "335ef8cf3e09cc8b7b3dc08b9c580e11"
  },
  {
    "url": "assets/js/23.da6a39b3.js",
    "revision": "a1133148866a1c00fa2631ec021b71ca"
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
    "url": "assets/js/28.f9c38191.js",
    "revision": "63faaff5230ccd8a8e9bdc8c5d52842e"
  },
  {
    "url": "assets/js/29.d7eb23d4.js",
    "revision": "24080965fc8cb29960d72d8118921ae8"
  },
  {
    "url": "assets/js/30.8be87637.js",
    "revision": "ea46b95ffb07be7a2c777758c7ba61f0"
  },
  {
    "url": "assets/js/31.a9be91fe.js",
    "revision": "3d9080b416223da57ca8e67f91aab720"
  },
  {
    "url": "assets/js/32.a0ff646f.js",
    "revision": "b6aee02e373c8dad4a0dd4b2c7662548"
  },
  {
    "url": "assets/js/33.f3c4642e.js",
    "revision": "65977e1c5613abddb30cf647d808c359"
  },
  {
    "url": "assets/js/34.2cbf5dd2.js",
    "revision": "612c742972b884d3a3e9566817b0362a"
  },
  {
    "url": "assets/js/35.3419c346.js",
    "revision": "c6dac448fdfed19a1708a98f7168ae9a"
  },
  {
    "url": "assets/js/36.2c59b945.js",
    "revision": "914fd65e7d0fdd34f745835455d028a6"
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
    "url": "assets/js/app.6ae170a8.js",
    "revision": "6766a3571c76f5de78c5eaaf3b52682b"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "cae369ef0bc29522214d5eae2683b54e"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "e2eb60d9ba6ecb587741c6f32d6acb6b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "c0c508e162857dabcc6ca0ee824977ac"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "65233916116d758aef61b41b2470a89f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "885af6524f18f57d91c587f2a725f09e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "d80f76c0d201d10d6f921a06ba9fc436"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "395062ce5bb1a0acaf67de1bff9a5517"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "5c6310122d382fede2eec540115722fa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "4ee68861c773536aa0bc20026def6ff7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "4761f72a8fd29d1a58ec4fdd4df6043e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1.html",
    "revision": "549eda6c6315b92470e211a53dcc61b3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2.html",
    "revision": "9391e2ba0eeadf772490727c0f5205d3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3.html",
    "revision": "c79c607a0b26377901554b98fc5a59fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4.html",
    "revision": "3e101c95f82bd84ec19bef400fb5bdd1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5.html",
    "revision": "fa54a36ac8df7c7892bdec56de54e338"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "bd4574671acb81c9e146f44ff66c6cfe"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "5cc84d60111706cd6de40bc8dd97edb7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "77d879d9f5eb28b309aa15e9b25b5170"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "e82422cb3582623c6004760704046a5f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "2fe0b7eccd3aad4d5aeee5c17175547d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "dae06d48313e906c8be84932a1ce93cb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "45902e5f776a14dad12b00d5c88f77bb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "1db4e752daa7a510ea619dde2e46622a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "63bc8ca65f38be53431bc70418b8f98a"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "90d423ac455b0180e2f6d43aa69251a8"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "eb239a530417da6a9372ae4bb5194576"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "865178c0812a4941abd8e8ae3396bac9"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "1bf4a5beb6429f38e77bd2f122c24e7d"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "dcea885767dc10656c1f7aa7eb30c37b"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "fae2685cf16e6efc55dd06f5ceb8caea"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "364a0eaa71ffa7c4f4278821b7f956f4"
  },
  {
    "url": "categories/index.html",
    "revision": "354fad76fc32e1e2ba00dcc8134e93cd"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "1aceab54547934ad2426475356cc41a9"
  },
  {
    "url": "index.html",
    "revision": "f4918b2692d492d6ebe08d4b642ef959"
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
    "revision": "bcb4344623870767a159bb3cf1380c4a"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "90b975e3fde1528cb0da084d0569b12d"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "afbb41aecf9e3c7078eb31b2f7373499"
  },
  {
    "url": "tag/css/index.html",
    "revision": "485278c5c4ca3e63f587f550af134482"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "ea6d9d67fd2688f2f629875bfc5738c9"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "f3b740b58a258fff619c5b69da0caeb0"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "7606fd8240c95fe2e78f7ee7fb41b35d"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "482efde8df12b7dbbe737e44832fba1f"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "2fab72fb0d352dc7068e0be29a1a23df"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "9dc2d015635d464681711d6f928a187a"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "679f3da6a05f74a374db4ee624d3464c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ab1c25090925b0ae14a8ceec42916dff"
  },
  {
    "url": "tag/index.html",
    "revision": "fe477f5015e955384f168c1646ae65cc"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "47f4b52ecdb7eaf13e65d9d14f5cd1a5"
  },
  {
    "url": "tag/less/index.html",
    "revision": "bcd79ee09685589707ab8d45e698e4d4"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "090fb5da2079156671586cc4487fa71c"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "6b39c4e8bdf547b73e5ef8127be53eab"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "0a393372de8830d794977e3a83d734f0"
  },
  {
    "url": "tag/other/index.html",
    "revision": "6ad04791f04745758b1ecce3bcd569b5"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "8a0cbcf93b0be80b08e6a7d5b10e6889"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "b273817069b3b69d822d080325071720"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "02ccdb5a229839463e3e8aeb745309a3"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "eea55e50bc0016c41111ca97ec1ce6e5"
  },
  {
    "url": "timeline/index.html",
    "revision": "16ff93ca0b825b9c40af0181741f3883"
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
