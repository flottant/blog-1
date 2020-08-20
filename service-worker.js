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
    "revision": "74bddd62fc822042e404823798046ec8"
  },
  {
    "url": "assets/css/0.styles.7ecdf83a.css",
    "revision": "1501fbd0addd4d972c153667df7fd44f"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.5a562c4a.js",
    "revision": "4719ac9b4d750aca5e17a5b7d18006d2"
  },
  {
    "url": "assets/js/10.eb44f778.js",
    "revision": "3fe365db1460ef64f0d3838feedaac11"
  },
  {
    "url": "assets/js/11.1ebb953e.js",
    "revision": "674549df1eb9c26edb4018c370e145a7"
  },
  {
    "url": "assets/js/12.458ebf03.js",
    "revision": "b116ce59f741a1157605413c847899ee"
  },
  {
    "url": "assets/js/13.5200ec6f.js",
    "revision": "f5ca552446fa98c62bfc0d78ff9ec488"
  },
  {
    "url": "assets/js/14.4ab6c4cd.js",
    "revision": "514c905369ca8f5230dec1d8b8fa5715"
  },
  {
    "url": "assets/js/15.079763f4.js",
    "revision": "c9ce6e27a08b8ccc2720f91dd4acead2"
  },
  {
    "url": "assets/js/16.ab43845b.js",
    "revision": "f8b5eb3b6c89ab62a6fcea9c78643701"
  },
  {
    "url": "assets/js/17.65b9ae1f.js",
    "revision": "19cca7046954e1a35606471dd79b34c6"
  },
  {
    "url": "assets/js/18.7f1b44a8.js",
    "revision": "88e86d1ffff1cc9a54f74397a7573387"
  },
  {
    "url": "assets/js/19.0004b351.js",
    "revision": "a9bf99293a95e0268b2f7819a038e85e"
  },
  {
    "url": "assets/js/20.90245536.js",
    "revision": "5b02f94895bdea385e61297435d103c9"
  },
  {
    "url": "assets/js/21.4df56d7f.js",
    "revision": "a613b3610955231d2242fc6a7f960d2a"
  },
  {
    "url": "assets/js/22.642ac99a.js",
    "revision": "cdd86f0003cf6b04f3bc3f189b48a7d7"
  },
  {
    "url": "assets/js/23.4f1566b3.js",
    "revision": "de98133ddf6744ca91bdee4a8593f01e"
  },
  {
    "url": "assets/js/24.837c42cc.js",
    "revision": "463dc984f1d8c24db850ee99cabc5dd0"
  },
  {
    "url": "assets/js/25.7c1629fa.js",
    "revision": "fc91eaa09a43016ed09c01973ed45885"
  },
  {
    "url": "assets/js/26.7dbe34ba.js",
    "revision": "d40eecbda8e02a8d2e2515dcbd44795a"
  },
  {
    "url": "assets/js/27.2667a4be.js",
    "revision": "045e688daf98976b40d887e0b2bb85b0"
  },
  {
    "url": "assets/js/28.d40b0fa3.js",
    "revision": "b2eb500a18bd4ff59141c562384f4d84"
  },
  {
    "url": "assets/js/29.6ee3233b.js",
    "revision": "b37e3fc58c6cdefc7d94d0862bf12aa3"
  },
  {
    "url": "assets/js/30.b353e289.js",
    "revision": "544b36b4ce99647afa59832a9c36707c"
  },
  {
    "url": "assets/js/31.511ee26d.js",
    "revision": "415833731e99d626ea8ce65eedb68cab"
  },
  {
    "url": "assets/js/32.31449f57.js",
    "revision": "5fc26980c9e322f9f4e95a7e74bc3ca5"
  },
  {
    "url": "assets/js/33.8a20b506.js",
    "revision": "9cbbee78bf4b8bf1ec25bef3b4c26517"
  },
  {
    "url": "assets/js/34.c4f6ef1d.js",
    "revision": "de2fb71f100f428fbb61f5823f82c695"
  },
  {
    "url": "assets/js/35.45671e1c.js",
    "revision": "648340198c58b0373d4c1e048688e132"
  },
  {
    "url": "assets/js/36.169d08c3.js",
    "revision": "d9d50464ba4dbfed721ba3328aae3f0a"
  },
  {
    "url": "assets/js/37.2427dbfc.js",
    "revision": "8f453c53906bbc660293f62bc76ef65b"
  },
  {
    "url": "assets/js/38.bc301b47.js",
    "revision": "0fbf25547aa445828007b1154d6d8ed4"
  },
  {
    "url": "assets/js/39.75a14a97.js",
    "revision": "b7f7fe852a80210c99e1547740c2f095"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.01cd04f1.js",
    "revision": "0be46b1ee5af8ae6ddd5b7242ccddaa7"
  },
  {
    "url": "assets/js/41.7a19b72e.js",
    "revision": "69635398d7d819e543ce62b28ec32bd1"
  },
  {
    "url": "assets/js/42.298006b3.js",
    "revision": "868b0126bcc9749154cb699a00c4143e"
  },
  {
    "url": "assets/js/43.228d4ff0.js",
    "revision": "798aed999873be860311343e816c8007"
  },
  {
    "url": "assets/js/44.ffeba224.js",
    "revision": "f66bd8ced54a9a9cf18f7164eb8eb378"
  },
  {
    "url": "assets/js/45.7824622e.js",
    "revision": "5622dee61f8ea025769cdf377b935669"
  },
  {
    "url": "assets/js/46.a7335cf0.js",
    "revision": "42073b93ec8939a8debe1173fcdc0003"
  },
  {
    "url": "assets/js/47.e221c7b0.js",
    "revision": "d1c37a25e185a8464a8a5d12e76453a7"
  },
  {
    "url": "assets/js/5.9d9f0faa.js",
    "revision": "21e59952e2781d937e4de22cf0d56c00"
  },
  {
    "url": "assets/js/6.71cbf98c.js",
    "revision": "3dc61cececb8cd3d585d98d17f6f08f2"
  },
  {
    "url": "assets/js/7.43fd5c12.js",
    "revision": "035eb51ccd24947145ff8132204b3df7"
  },
  {
    "url": "assets/js/8.553e80e9.js",
    "revision": "478487067eaf62bd3d2a199c9503ba1d"
  },
  {
    "url": "assets/js/9.c74c2319.js",
    "revision": "f2cb7e29c08404935b9eab0e64af0204"
  },
  {
    "url": "assets/js/app.34d3ee1e.js",
    "revision": "7d85ced10e0ae87bf76b57b7613fd456"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/BackEnd/MongDB-nodejs-example.html",
    "revision": "8574b6604f9ea3afa0acdd0a7a6d936f"
  },
  {
    "url": "blogs/BackEnd/MongoDB-Base.html",
    "revision": "7a9a9845758223e96c94d15903ee14a9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "30c33e482103ecc8a1eb3158645789cb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "71a0db8ff73c0f65b97d1832a61f0c78"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "885619a59f1e3aaee9bbc8dd062546bd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "2960c8e8c9f5161865dd53307ba8ea4a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "fc3aeccb9258ea7b8b90d956c2af813c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "b74a1da51f3d604866684989358ea2fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "0f078ccfaf2dd9604f447473c9bf2ea2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "d31576674a51e6063f5dd547422b1b2b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-1.html",
    "revision": "ad2fa238ce7d9c760929b1c5d55ba4ee"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-2.html",
    "revision": "44c68f3a4a401dbf383115ebb16836fa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-3.html",
    "revision": "a7bf98afb2053da663d942b6b3850084"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-1.html",
    "revision": "5d732926530d5ace3d0a839e4930bab2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "fb6984704f172bf9211851888bf656e1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "b2c03711994fea7b9a363e6325ee024d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "1ad7509b3f6558190ca4be180c08fc2a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "d497b352ee53c16186455bbf22a49d2b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "71de6561392501caf463072efc84ce8a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "9d2621a4fd72fa6153a5a8fe7bdd2118"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "5c72a6418f907c415c4cf876995e1eb8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "c91c557d9bb168cc903e0663ae3f146f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "e7cf2a160185dd22d24cd55943f3909a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "ba0950a31e848c3ec56a05504a9a116e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "9d5df2d18a74e9c25d5f3188201999fa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "e3ebdba7dee606d37a665c80c5495b8c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "ce8ae6b0bbec77f47f0edb39b356ceb5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "55a30d726affde8bfd4c8301314879e8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "2ae664618c0d98559a6d913b94a4a200"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "0f7d3ab09fae6b919391cd58446d9ce2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "f77f9a825b31d6bd00a18d4d28011ce6"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "b537af2765081b3e529cf3d4d9455ec7"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "40d422ec4290c0c4b09695056c32e6a9"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "1ee45abdf71ea3048d2326e4a6659065"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "c3ea7f75c0004a63c4b1e940fb431671"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "cf4c1e384c0c634895a793cba2356930"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "ac6122ee17d0030f8b83f7196b08213e"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "758bedb8d466c85eff4366861e5af729"
  },
  {
    "url": "categories/index.html",
    "revision": "69aab075e1c3caae200ed6e97fdeb372"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "19f79f709e0b0fcd5fa893452c4602e8"
  },
  {
    "url": "index.html",
    "revision": "8f34d90a86384ac089554fa6129385f8"
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
    "url": "js/MouseClickEffect.js",
    "revision": "cd532fdb2050b91b7aa65cad3c8a8729"
  },
  {
    "url": "record/index.html",
    "revision": "9f4e638ac01d31b2816083e0a0e9e593"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "3445782b585f333f7864aafdee75cc46"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "9605c3faa1db2f511842dfb135ddfdcd"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "94b51b7cdb33c2cd1bcc5ef41417804c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "851ffceaef1723cd6119e68dec7eb6d9"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "5cc9611b79078ba53de3f8cf0bd590da"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "c1aad70cc953c7bcbda07581f054d289"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "cba19b37bd63cbc7df040c55c2ad290a"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "6ec8267f47186c58500fd67fab678113"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "37ba98736a4939859f1071db672c8fce"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "941faae1a28a9e872d4d76da686f13fc"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "1db0b643128d4a7a7928168d7ebe7666"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c68e76a607b7a9c503a4d602efa2f27c"
  },
  {
    "url": "tag/index.html",
    "revision": "efcac4ebf0f9384a3f278f1d4e8acf84"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "75993954ca4ceb93db09982de81ef505"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "9c2b72d5f7e0b584a6d4ffa7927be570"
  },
  {
    "url": "tag/jquery/index.html",
    "revision": "4a1cf6ce8784c0b5eb4db7bde5889ff0"
  },
  {
    "url": "tag/less/index.html",
    "revision": "d0b68379145814ff5c8461ad38193c83"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "4417c755326c36cbd650a0912828dfb0"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "2a1d0eda6d4d4d6b616956384ba365a2"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "8624d6beb3d4c557e4524e08ea7362e2"
  },
  {
    "url": "tag/other/index.html",
    "revision": "01a448960dea59a443fbdda0ad776966"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "c01d9c7e11147eabb19c79103611b18c"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "cfdcd861267b8f897567f0e40cd7eda3"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "a18cb948db88f5d4402556100debb9c1"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "093018f58ad542cd977d5b9d778bf3bd"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5fb3332d6a5a61b0396d660e15ef23c"
  },
  {
    "url": "web-img/author.jpg",
    "revision": "04df4f219cbf8db1bac55822bb7d15bb"
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
