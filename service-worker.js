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
    "revision": "173de14ac1ba79cb2bb7276d0a9706ed"
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
    "url": "assets/js/10.e1e42b7f.js",
    "revision": "c1441ea76f7691a506bdc41d7c0f6ee9"
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
    "url": "assets/js/14.29edade9.js",
    "revision": "514c905369ca8f5230dec1d8b8fa5715"
  },
  {
    "url": "assets/js/15.47e2e33c.js",
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
    "url": "assets/js/34.43cc6393.js",
    "revision": "25851b81c7724fea3bb1aae0b35c404c"
  },
  {
    "url": "assets/js/35.3ebc69c2.js",
    "revision": "fa47bc59ede2b5de95bb905040b8df9e"
  },
  {
    "url": "assets/js/36.e0c18d7f.js",
    "revision": "d29f9c2d8c31329d3fdcc6d1f1a31497"
  },
  {
    "url": "assets/js/37.f94d9cff.js",
    "revision": "cf4b45cb7133cc26a3dba8c1240abda8"
  },
  {
    "url": "assets/js/38.e6989e58.js",
    "revision": "32ca7d960ae462561cf4059a2614b704"
  },
  {
    "url": "assets/js/39.a8990621.js",
    "revision": "7415cef1714ae27ab118617bbe7a35a9"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.23fbfcac.js",
    "revision": "df66fd25e7c27beae3b98d4b24d8361d"
  },
  {
    "url": "assets/js/41.50d86fa9.js",
    "revision": "62470a3cddc28ca39b7ddbce8976603a"
  },
  {
    "url": "assets/js/42.134d19d3.js",
    "revision": "0a47da4a8d7ff13b76949daaecb5f8f0"
  },
  {
    "url": "assets/js/43.bfb88f48.js",
    "revision": "6e3583d500aea76bafe5b8119f739f9b"
  },
  {
    "url": "assets/js/44.3c7a5171.js",
    "revision": "e317addba3233f028467482f27f8d8e8"
  },
  {
    "url": "assets/js/45.8ba2af28.js",
    "revision": "a3f6e83e2e1da3224d241ea5807ac3ee"
  },
  {
    "url": "assets/js/46.0e981314.js",
    "revision": "9180a36d1456f5f806964e88d82dfb9a"
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
    "url": "assets/js/app.fd26daba.js",
    "revision": "a6184e6e766c1e6047d36eb8528d27b8"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "90858f6d72f3bca2c918a2ad0f80774b"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "13268c15783ef8abc9a2673b5a58b12f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "67b876a715d802e19eda96f18d5bfb0c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "88cebd80225046413ac196a996f00833"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "a1f971ec4e3906f6b433ffff8a63490c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "c3461af31f0bf21f49ea9725031947b9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "3b5c4585a741027926da40da01bebe99"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "192172a0f50b7a40561cc58b3e19db86"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "fdd36276059e42233d12ec12d1485c70"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "cb68b8d293b72268e145c28a65735d19"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-1.html",
    "revision": "a9972c90d690639085b3f6d250634da1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-2.html",
    "revision": "12701a5f340f304fac78ba29c0ec8d2d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-3.html",
    "revision": "19fc8b6a41441ebfb2f2fe319607f56f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "46cd0b5819e242bdd788ee7afd0640fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "8263432e90c4129083fbc22912789292"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "6d71d4bad76745826ef885dcd83458a0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "eaea44076f6aa06996025c83a5995272"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "935b4b9f01e61737a1301dbdba5e144c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "8037fac736a677c6a7947198277a1ef2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "3ad213aaecd22ee348f0c60ccf93e227"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "7b9af4d1ff411c1efdf51b3c2246e2fd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "05540924a8af8ab89c9bbfeac0195d19"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "1161c36ab1177bd2b97131a744ac2e36"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "394271393bc7b73dfc7236c4566ad395"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "e73e57e9c6564ef0898c8987d6daa145"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "2462b5427619ccaf6b793f9a69db8351"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "3cc1701bdffb8390909ab08bdeaa7098"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "2b9c723afc024fd3030dcacfc8d69418"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "1040d9d2ecf12351eca74096e9d20aae"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "f7f09500628122edcbc279cbc32df6bf"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "8717b8d51dd39b5fff9c3ce32729b317"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "84281d657719d5288926e5b723b6f212"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "7efa6d8a84b3f05f23a9517093177526"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "23c96e7e1ef36e5bb3bdfe49ae77e376"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "c70bc112c576561103623f184b0e78be"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "b4ad1adb316f06d0e25ac42290929f10"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "c809927ea3512817de735b70be32a474"
  },
  {
    "url": "categories/index.html",
    "revision": "1c2593b4e901a0ff0fcc0083e36c78ce"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "0313de441b21e6e63719d07c76b14d52"
  },
  {
    "url": "index.html",
    "revision": "3b79a74a89982ea78f8c66d4b8cdce12"
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
    "revision": "8267f588e18d0b8187c679a7847038ac"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "71bcce643d37f469a57fbb6146ac09cd"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "bf0dcdc9f77dd26774866119425d4ca8"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "bb338471a2b56c1d87fc464d4408c964"
  },
  {
    "url": "tag/css/index.html",
    "revision": "83df2ecb9a51908ef6343fd6ce4f30bb"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "0e1bf9e82a463e40ddc032a54bcc6150"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "fb75619b8bb49b0e03f552ac5cec5674"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "fcd70299e3a54036f5a480972247ea88"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "0aa42882f315e0fdecd5283791093ac6"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "a001b916a5c7f55c849f692df9e64298"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "2eead3699340d645d4a8abb7cf914ab5"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "c2c0b5bde7ab03a82e4118dc9864450d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d0dbbfa9aad5b990f11fce3da48996a9"
  },
  {
    "url": "tag/index.html",
    "revision": "af810634e2b681a04b6c871a0deb4a44"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "1b4a97c9d33b88584722534badddbf32"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "e6f258f45543bd554223969eefcd501d"
  },
  {
    "url": "tag/jquery/index.html",
    "revision": "168a3c439628faf24354fe7ac0482b1e"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e02d2ec64800aeee30daae5409e37212"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "5f4323abdf305cb90c2aaf1b2ca929e5"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "a69ec42f3306feaea2dccf68bda43af2"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "28904cd637467ab07c93e2ac868e386b"
  },
  {
    "url": "tag/other/index.html",
    "revision": "28d99b602d83bf9cfd98935a2d92f9cf"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "9f2b5f7c2f36dc60123b49f4abc558fa"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "8e4df7fe0847a35c04617714236e0e85"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "21e3e5db9e34ea3db32e820051b39d70"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "6ccca9b3fba9c359e35729ea293eeceb"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ca46651ff42d827f93d6deefbeb95ae"
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
