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
    "revision": "aae08e27fb59a92cd790b582b2268ef1"
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
    "url": "assets/js/10.622f92e3.js",
    "revision": "104e277651d7e30578bcdfd8c22cb2dc"
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
    "url": "assets/js/22.c0135444.js",
    "revision": "cca82e01a6671feeae323d5fc12293d2"
  },
  {
    "url": "assets/js/23.bfa0fa83.js",
    "revision": "5404569ab621f97a1d472eb5af24b5a2"
  },
  {
    "url": "assets/js/24.481bf6b3.js",
    "revision": "ed03ad4990bfcf436803570c30de3805"
  },
  {
    "url": "assets/js/25.3b2d7590.js",
    "revision": "aff7a6f211a13d994570d337416abdc9"
  },
  {
    "url": "assets/js/26.bbc554d9.js",
    "revision": "e7e69ba76452a82473d3524f7761c688"
  },
  {
    "url": "assets/js/27.441f17e6.js",
    "revision": "4083a083960ac4de880261fd9158a748"
  },
  {
    "url": "assets/js/28.b814648f.js",
    "revision": "9496955ea121ee0a1e52f6663d82592a"
  },
  {
    "url": "assets/js/29.75fd975c.js",
    "revision": "28d547c1473c9bf7827a284074f1e652"
  },
  {
    "url": "assets/js/30.12858b41.js",
    "revision": "22463e04b43046fea794444295629f87"
  },
  {
    "url": "assets/js/31.8d6c7b98.js",
    "revision": "5e6a3605390251678ce54260073af64d"
  },
  {
    "url": "assets/js/32.950d8cc9.js",
    "revision": "2de821a42247d79a7c8f82a6939ae17b"
  },
  {
    "url": "assets/js/33.bede6aa9.js",
    "revision": "67075cc69a703d84739d3902692a563c"
  },
  {
    "url": "assets/js/34.0d5878bc.js",
    "revision": "b651c5103b9897a75e78db5e80e1cdf2"
  },
  {
    "url": "assets/js/35.9297b26f.js",
    "revision": "30eb161151b4422842b4347b5078177b"
  },
  {
    "url": "assets/js/36.de7c9a4e.js",
    "revision": "b331f0b8a5551002e7e4b257d5a2b1a0"
  },
  {
    "url": "assets/js/37.f7d36d86.js",
    "revision": "899be52f2d00b6a6c5a8976a001dfcff"
  },
  {
    "url": "assets/js/38.9130174e.js",
    "revision": "fabdc707133af67d71e7de1e8fe949a1"
  },
  {
    "url": "assets/js/39.7d693c1b.js",
    "revision": "d114bf84d95599ffa7925c792d13e8b1"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.53a3bfd8.js",
    "revision": "c3add7aeed4f9114b16ce87a541d0c37"
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
    "url": "assets/js/app.bd75b5d9.js",
    "revision": "d7eeefb0e60fd41dca55b9879cf1abf3"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "ab9600c33dec09e56333cea0b0b4b00a"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "82f757a131223f5aabf3133d1a65e44c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "8f2bb640012f085e485db4aa760dd688"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "f4371d51b271248843e9cf4a4d383498"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "d8b984b51c8415543e9c753378af1ef1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "a8e61e218cd51d314642bc3865a4d6eb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "57849018959142d681882daae143b8c6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "16708478d0c35fac8e9e1d775465735c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "d139f2dac94c4f440df4b80fb0c4cd8e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "31cd4d44793b32d78f77a4b3bd2bdf68"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1.html",
    "revision": "ed7c44577ec60facd41b51aa4e84a2a5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2.html",
    "revision": "3a33a8614e0c784fa14f53cc84894a33"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3.html",
    "revision": "6ac2674ce641f960133b12a3ff98c09f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4.html",
    "revision": "bf18fad3335a15d94a1d1a5e1ac18368"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5.html",
    "revision": "f5612ecdc8a4ddab3440d022bb191e7f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "bcd4f2d6306c2c1c97c45b7114b64c11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "b7f8f07ddee4e56152754efcbca05837"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "dc6481bb098b1d52f66686cade2de9d5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "66e2640450b553a5545213c187d65ca8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "82b9dc926cfcf5aac4a91c059152100a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "1bafdd33d27cdede03c88a980d913e45"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "eedf9827b4837c6990d52ef3691ddec1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "07732a41777d73c39b6eb970c80e50fa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "396dc73122b0650da5d94c4b4b7f434d"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "337c6fa2b925e99ecca1b1eaaaba5a10"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "159ccb9582e8fc2aa9aae8e4de045ff2"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "0b2c2f7bb082862016c8aa385428afde"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "0e0e37157ea96b600830bb9db68f806f"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "82434332ef64567bfd1156e6b1d30363"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "1ea5f4f0a3834f6c4e5b587c6e896b4b"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "d1c05d94b892638565af27baa94e1dc1"
  },
  {
    "url": "categories/index.html",
    "revision": "8056813a13b63d7f59c60ceafd67bd72"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "088bc9328fc3e792a5381c5822cee229"
  },
  {
    "url": "index.html",
    "revision": "ac4921a65f1d76c917437c184e32de23"
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
    "revision": "9950d1e329e1ae63cfb4a0e1a3c4e296"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "31a0ffba7b96acea3cdc46a087315403"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "b08491273940e8e14b4a3ad8f0a052ed"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "46258780b3ca7903e0e6a71ef76b32a9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e9b88129a529b71eeb2693de57feeb3e"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "e362586d33dc4e6fe318d110c0deae5b"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "3efa05a0d4244489922bcf6dd88fb74f"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "141ddf746f9b9c6daf636f6f229f659b"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "6b263801cb7ba72a1027618a45538168"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "678a0a47aed028be10e7fd8adb90a6cb"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "6bc372dfe1be943d0b024d7bb02e88ee"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "f6b34594c27b914425605173a63970ef"
  },
  {
    "url": "tag/html/index.html",
    "revision": "57ebed5b092ef808c7420f7c26281c5b"
  },
  {
    "url": "tag/index.html",
    "revision": "295573ce2a79ffa09e08585af444209a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "597747198a92c57d671b8c7c875899cb"
  },
  {
    "url": "tag/less/index.html",
    "revision": "ddc3ee3f7fba02e62e222244bd942402"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "aec9b791d864c7c4cf0fa7e6b582ff64"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "3a902408f8c4c0b8d0bd95dc9f76dd0d"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "34a73287e9204f0caf1a8cc8f31d006f"
  },
  {
    "url": "tag/other/index.html",
    "revision": "c13eacb05fc9d52543249460b9e854a5"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "cdaa69e6220f28a72edde80563094105"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "da6296045942a93bcd9034d69c4745e5"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "1cfce1e1a7dd7ace994538ed394940a3"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "537c2ccf924b96c900b07713e2b097cd"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad65dcc980f0cfa73cc2bad652fea7ba"
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
