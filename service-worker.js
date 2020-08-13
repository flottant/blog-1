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
    "revision": "8e7cc23f73030dc754fa6c20fb7c5ddc"
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
    "url": "assets/js/app.d6dc8f4d.js",
    "revision": "23285dc68dd829722d951aae95b94539"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "4190ddb491dc6f699a6609918e037007"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "6897d6ac202af97c23e6da210ef81459"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "45620111c8a92041bda8b3a36fa21107"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "b1aa1e250b5f56c4626d726efadfb9ca"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "2af402fc3ec805faabd899b707748c78"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "ecbaeeb81ece427fe1aa5353a8ccc4a3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "71fe6a09d138a3f4c14f1dd84f287091"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "b82ca7c5e71199dd6a2728edf5ac5727"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "7d1cddaaaaa495f95dcf653a07bfb3b9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "f7e1f2fa1589d8d9868ce96f4fd4d281"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "56ace05af5331cf01bb2cf3e7c94d4b7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "165766752ed22072fb5fedd98501af7d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "5440605936989a15e6cb5eeba48c681e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "b6c49a3d95d12066213b43dc6fd6bbbc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "d9b11bfbaa65b3600250dad9211f788d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "58ab45f8372203a7c79d429759a8181d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "8310886ff61f2b8380f4288fd2004793"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "c4e747b1d217066c2822087d054ff901"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "e23d1e8b85e64c51a2d513545a88f1d5"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "dc6b1babf20bc2fa6b26d32f26bb111d"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "8406eee8101cf25a086b70c54c565d0f"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "ba9786648dbc4364d47a2d919f74b3d6"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "dc184ba2834c6cdc96aa4391dc8e4f5b"
  },
  {
    "url": "categories/index.html",
    "revision": "69b50fce43c5da8213d73b891303efd2"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "c745a1da1a22262257c444f571d0cc1f"
  },
  {
    "url": "index.html",
    "revision": "6b3be7a4ddf01d60c29dc43f407e5bf1"
  },
  {
    "url": "js/HeroVideo.js",
    "revision": "46104defe3b9db56290c0a36ca75cb60"
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
    "revision": "0eaecdb5409110486fef9cb60f9ee4da"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "6776c66c39580ccfb1ddcb5127f8ae04"
  },
  {
    "url": "tag/css/index.html",
    "revision": "396ab3d8a2d9a856906932ca607ee16f"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "dac9e45aa550ab6b75ee2341f95933f4"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "c4f1b5972f9ef8bca6747dde47d9bed6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "fd460c562f04589bfbd0cf1e46840065"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "43173cad658e01572d0c44be1c5b668e"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "a6c0d25871aad6c36080dac04af65d5b"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "7c6b4f560a21949167a682b2f558034e"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "eee2e4c82facd045cce4941de69671db"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d0e390382d6fd7875c46f6d01dbe43bb"
  },
  {
    "url": "tag/index.html",
    "revision": "ea2e4c7b80480ac32e9b50f49838f309"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "55b8ff7d62c3c9b07522efeaea6a7e02"
  },
  {
    "url": "tag/less/index.html",
    "revision": "637be40077ce368fe83e21ca94499a54"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "a6971f855df4bc9a215fc2211969360a"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "454cc78e700ad44e647be4c6df8b0e99"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "2a3ef194f5bfaac9071e129677776da1"
  },
  {
    "url": "tag/other/index.html",
    "revision": "4462a4d3fe6ee996b320ded750d48d11"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "628b3a1bb2cbd525bc77c6d189db42b6"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "ec4a956b81e583c00922bda9a3966124"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "59577dc3b3ba3fa2bc88a76ef40cc091"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "d183ac51e9975c2cf6273d2973846f6a"
  },
  {
    "url": "timeline/index.html",
    "revision": "529e658c3a8c0639df67350f13950540"
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
