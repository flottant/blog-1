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
    "revision": "83a873a506651ac40d7ecf133b41d406"
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
    "url": "assets/js/app.67035037.js",
    "revision": "57454b1fe1280b7c84677c8a0cd062b4"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "72f807f2f26fba5c32df781f40c9795d"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "91ea68ca90683136deab15e151351126"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "5516935fb72073f3153c97e4d234ba95"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "641eb2f0929917c728f1bac6633a2384"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "4677db7deaf615fbc03c19c1b9463d34"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "dc2da4796e5d1da0c0bbb88ef0fdc0fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "ca3a2552b383402d74bd49f75d90d035"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "d25a0dfbae32fc5b3003c1ba1cb34980"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "385653522741efd13eb2e5ee0b859178"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "3bac348abc553385a0e2eebcdb5be882"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1.html",
    "revision": "476251e56131e4c90a696b12bf83b88d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2.html",
    "revision": "d231c0ea78705bbfaa95351bb287d55f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3.html",
    "revision": "c87f358e0ba3010707c2e1e054bb96aa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4.html",
    "revision": "0bb391064d8ccb78f7860ddd85dd310b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5.html",
    "revision": "dc90ca7534305a828fabcc7acaf5570d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "6844c33cac4a06036caf92b9d054a2bd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "a1fa191444a05092a64fa0c1ac5e125f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "8b9e96100307ed7e520b46684c9d4d9a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "b2c360ead782ea2e438606ecb3480a70"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "64329cd01cedb45f24f298eb6efa7b05"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "529da642ef6b685042000978714b483a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "b3b752c89d46a059eaf28b19ef50d767"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "aa2267c74f1265e215ecad00bfb40514"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "e1ee3561e2e5dc2bf2527e90f9617c97"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "8b96e7ba3c531cbc5960b1b6df8dd28c"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "6c9b40b94a755844cb9df31f1960d34a"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "4b8e55074b3d4eb2fc4ae363a7b69713"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "85db3e3d52ec4c0980e6bd21f8b57706"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c54a05dd8a985d02417693223202b992"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "9fc21a58dece94f7ee5a33b5c7232421"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "1aada3532eba556c99c75747ab0650f7"
  },
  {
    "url": "categories/index.html",
    "revision": "4711c6f21b2554aa644b137226aa98a8"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "ea6061276c1eac258a7e9d8d24f78383"
  },
  {
    "url": "index.html",
    "revision": "9d4cc282bf306429fd63eef5d93b4e19"
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
    "revision": "4d5eb41dc8fb55b1cd65048abeccedb2"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "da5eed6a2b11a83b0f5ff07831c46850"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "46a7761da247457158676d2349fdb1f2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8edcb7cd35c02ebddbc5d96bcdddabda"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "e254a618dcca4eb21e928427f8a4189b"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "a034b5422b3bdd656c134494829828ec"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "13bdbcb936d5a4f8e1f8aaf42d426502"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "a50fbd947f7719986d361cbb1bfb77d5"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "927d867d86f7faf209f79097d3f98a02"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "f3d48cf640572290474e9fd70894f657"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "23f69b472ca8ac815eb163224055b4fd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "72a0ac75252d95e1fdb2a2fe21a4e9b7"
  },
  {
    "url": "tag/index.html",
    "revision": "2148371302f3e0f0de5802395059c6c6"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "a900998d88476c14393e743d6f4475fc"
  },
  {
    "url": "tag/less/index.html",
    "revision": "8fc89b798ff05181fb3d37d28f0f5d1e"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "18d44bc65bd748ef41c963a5509230d6"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "1f0001905fb1b49558239b722176956c"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "1f675ca9bf12c9925d400f27c6b5b54a"
  },
  {
    "url": "tag/other/index.html",
    "revision": "516603970a05b97faaf0d408a68606c7"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "df61cb4d8657fccceca2431dae1d0883"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1caae5bbd12fd75c8da2b4d2afc72196"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "55d4aab0c0ee8033a7b317acff8f0870"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "acbacd0de251968ad9078a8e07c8ee5b"
  },
  {
    "url": "timeline/index.html",
    "revision": "c934164a3226ea31fd485f079092fbb3"
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
