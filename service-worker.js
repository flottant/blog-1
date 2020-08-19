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
    "revision": "1cd87481043ae8d9e87abc015403fb41"
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
    "url": "assets/js/24.c0e37510.js",
    "revision": "d267f8d827d4217848aa277c4d76b6ba"
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
    "url": "assets/js/app.724769ff.js",
    "revision": "cb02ee05729181ba25507d1c9c4fcefa"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "9e766d6ed5a9bc728be0933055b8faf4"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "c3f2b25e2c9b17d1a942d72365a19d57"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "60704ca162d6f41e3a51dd8fbb2a2d9f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "ecda5d1948b3aa8de34b54bad0350e7b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "17c11ccf5cbf5b1108b7e881443b0059"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "540f74c73afa31d0880aa80a6921eaa4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "bedff31615670e37deeae3bcd08b846e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "21b3af69ca2dd8afafac6fa799f53b6a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "109f08a7cfcff3b5a70fa5e25f96731d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "e3f337c7aab1e1e01ea8af4ef262b909"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-1.html",
    "revision": "0e4019f99d3932cd6f0afd2f188e1ae2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-2.html",
    "revision": "4fbe1697d71e827f393a2697f137ea92"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-3.html",
    "revision": "ca775157958bf5a529c5879b4ae22b45"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "6b323d8fed649c19ca0ea6751c14073d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "3417eb764eec4823a296771a94dcd1ee"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "3d5d0575e031c775148315975998a18d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "a3d2c72400c00a8053991f368af15c73"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "0510481f3b3e7a4c1dad6fca367cfab7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "7ecd69c1a16c2397f7813f1ae46a062d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "2f12ea49706f6bb17f97db39394aef27"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "0b33a6f13c99ad4f1a178454265c5cd1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "22feeed99da28b5f7aaa3ae3bfaaac57"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "db12a7242a0bde6ebb01c1acfb6483a1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "483af09253c033ae9582afb2c643f992"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "132547d61965e49f1c42d8012fcdb3bf"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "2e1bba40023c8bf51d0ed73d661a4a43"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "151c9d4b586fc5b6d734dfeb5f7a271c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "9cdff5e3e28b6f3e9fbcb8b5665b53aa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "b0ee7e735591a426c9c6f2bacadf99bb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "ea7ee72d1e0a0bf6a8f658f62af91447"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "2030c9cdb4c867f7e198bdae95ac3429"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "12d7efbbf25282d3d2ec1c020edf33c6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "8e1f97cbaea7a7962840dbf8ceb8690c"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "41eaba8acfaeb110390aa1f2f7d7dccb"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "5dd3ad2a7b9c2c93ef4400da378a1894"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "266ad3957185e12be017f0945c466264"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "76d6142664d2a3da555123897c7ad9ab"
  },
  {
    "url": "categories/index.html",
    "revision": "8703c6190b07037d19a1617149822555"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "229d11c980683c2c2ec42a89d2213591"
  },
  {
    "url": "index.html",
    "revision": "0841e3c322782900c4991d6fc7ae3880"
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
    "revision": "7b3a9f78b6ab159d945de55914b39130"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "34504833db4346c88780c213603a6b50"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "aa4519d7292d459790a6b6d0327dda1c"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "03d643cb91c903e46347053521f17dd0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ef6097e31c2aaef21ac0ac6a0dcee4f6"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "4f9476e98931fe2b95589a66b41ea81b"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "3b0fa55242789d6c31da0514d618bf06"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "1fb7213f27f00b59b30edaffdff3b75c"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "4f45d9f39d99b3313c13fa7eb35734d6"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "2cefc2ae68cb1d2a7186b7118f3d5007"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "4ea4eb1780fd962a6a32c869fa4dc823"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "3808fd3ed581b777668669f5d6bafec1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f0597735319a0c4449a223c14f4df856"
  },
  {
    "url": "tag/index.html",
    "revision": "4c4d01e0d5d10a22491d12e5cdbe1718"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "aff2260141e216308c08f38275cf6919"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "5e2edfd1df22dfbf2592bf56dc676958"
  },
  {
    "url": "tag/jquery/index.html",
    "revision": "7a8cdf487a558494521ead08c08f4924"
  },
  {
    "url": "tag/less/index.html",
    "revision": "9934e6022c93dc03c4ab268aadc7b5cf"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "eef1ed2eac295af80f598f40788be8bf"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "c863032126315f455223bace97cece3d"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "8314212d492c9cb7a9834102ad601085"
  },
  {
    "url": "tag/other/index.html",
    "revision": "992ed4d7a75fd75d0cc39319db53f4d3"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "09d9393c6ae6da1d6a1a4bcd2471a2b6"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "e652d48182795b8488241d4670faaaf5"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "eba1d497f2ead25bc1aaafd00cf95eb0"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "a0a2a83d84044916c2c2ef1a022db6ab"
  },
  {
    "url": "timeline/index.html",
    "revision": "19df7af1e335657c4ef6c07ff980963a"
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
