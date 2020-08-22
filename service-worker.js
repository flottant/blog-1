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
    "revision": "feb8c49cd92f9f9ab035e9d20c0919ff"
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
    "url": "assets/js/10.94153cb7.js",
    "revision": "848a154c557eb7c7204452b5e37612ac"
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
    "url": "assets/js/17.f042db5b.js",
    "revision": "07d927cf0827daed9041a73c9c5c9b1c"
  },
  {
    "url": "assets/js/18.61afb9e6.js",
    "revision": "7d217426beb62cdadd483da0b57e14c9"
  },
  {
    "url": "assets/js/19.ac613dd0.js",
    "revision": "1427ce705781756fd163d30838f0976e"
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
    "url": "assets/js/22.a34c5ce8.js",
    "revision": "1c9df2458d18563bb2ae9b6bfd9e7207"
  },
  {
    "url": "assets/js/23.81258464.js",
    "revision": "ec2a6aac2d86c0e044663f3c9a2660e3"
  },
  {
    "url": "assets/js/24.994811f5.js",
    "revision": "84e84f80638aab86c4a52ecd0c05649d"
  },
  {
    "url": "assets/js/25.eadaa0df.js",
    "revision": "44f5a768828b4e78b421fc856736e0ae"
  },
  {
    "url": "assets/js/26.a7feb70a.js",
    "revision": "18431f8b6446ca723426d6a2f14fc26a"
  },
  {
    "url": "assets/js/27.2667a4be.js",
    "revision": "045e688daf98976b40d887e0b2bb85b0"
  },
  {
    "url": "assets/js/28.af4058f1.js",
    "revision": "c2053a467bebd6214629b06908a3af12"
  },
  {
    "url": "assets/js/29.1e92141a.js",
    "revision": "6c2c37d4a99368a44d87dd74122576cd"
  },
  {
    "url": "assets/js/30.b353e289.js",
    "revision": "544b36b4ce99647afa59832a9c36707c"
  },
  {
    "url": "assets/js/31.1b90f256.js",
    "revision": "8b99b649eb63a15bb63466e73e2bce9d"
  },
  {
    "url": "assets/js/32.be927c8e.js",
    "revision": "11db1ac966c4d0b2bd9e017d7a398a19"
  },
  {
    "url": "assets/js/33.68c03fdb.js",
    "revision": "7e52016c195861fe9903471344d2b3fd"
  },
  {
    "url": "assets/js/34.3677adb3.js",
    "revision": "c5f7a4787d29432d9f0f7b7023462dd4"
  },
  {
    "url": "assets/js/35.9807c446.js",
    "revision": "a5e47c529664d31b6c970e13ddbc1b75"
  },
  {
    "url": "assets/js/36.b0954014.js",
    "revision": "7307d4997e1d3daff253982a28f00988"
  },
  {
    "url": "assets/js/37.28a9c473.js",
    "revision": "eb922d0d454a302be0026b6d2b85e79f"
  },
  {
    "url": "assets/js/38.b6eea37a.js",
    "revision": "081d944a434025e91176186cf4ef95a9"
  },
  {
    "url": "assets/js/39.9b75e59c.js",
    "revision": "34d6f18c455ddd09fa117153146a7cbe"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.d13cbf4d.js",
    "revision": "0d80c7dc4a163a4036fd2ca04952610a"
  },
  {
    "url": "assets/js/41.b1638c5d.js",
    "revision": "7a7d19542903cbf416bfde795f04f1d9"
  },
  {
    "url": "assets/js/42.aea3586b.js",
    "revision": "5aaa60205784d5464acaed1fe72cab7a"
  },
  {
    "url": "assets/js/43.b61495d5.js",
    "revision": "1c067803c81d5c9be8716dcd63bd5612"
  },
  {
    "url": "assets/js/44.16a06d6b.js",
    "revision": "0f949b7eae981aa1900229ee2c6ba0b8"
  },
  {
    "url": "assets/js/45.72f3d0ef.js",
    "revision": "a420d20f0758798c29c4b024ab898202"
  },
  {
    "url": "assets/js/46.8a78d87f.js",
    "revision": "06515abf4b3d7ccd09ddbaaf9b9c9641"
  },
  {
    "url": "assets/js/47.3f1f9e72.js",
    "revision": "9d6680c9ded6f9819dab25486d52270d"
  },
  {
    "url": "assets/js/48.068483e2.js",
    "revision": "c779c0f03c67be439731209524366658"
  },
  {
    "url": "assets/js/49.1a372faa.js",
    "revision": "0f14ed437a3fdd0319a8687663250018"
  },
  {
    "url": "assets/js/5.9d9f0faa.js",
    "revision": "21e59952e2781d937e4de22cf0d56c00"
  },
  {
    "url": "assets/js/50.a3e2687e.js",
    "revision": "8a06ef1333496f859c509decc9708262"
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
    "url": "assets/js/app.1cddda96.js",
    "revision": "27730f3618e3f811c63961106269a04e"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/BackEnd/MongDB-nodejs-example.html",
    "revision": "65871c2e6b3452b28b7fa4484fb4c172"
  },
  {
    "url": "blogs/BackEnd/MongoDB-Base.html",
    "revision": "ab24743f55786f5376a0e1d2189c5feb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "7b4b996c94f25ae190099e4dade398a6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "ea242874fb2b3bde96375931fb7e1f0e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "bf6bee967b464724168b82a849707154"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "88fccd50167e5e830dbca6e99b6fcf34"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "92d775b428286c36027438ebdceca695"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "3f5de56243390bb8b0cdc2884df1dc2c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "ff02c1cb85c2c58d0324f0c49a16e0c5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "6253db0693e8f0edc93b9d715f756d2d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-1.html",
    "revision": "90320c5de72588cd2ef05b50bc2c4e17"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-2.html",
    "revision": "c1756202b26603b6a16290a71d13cb75"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-3.html",
    "revision": "c86f6f0b83799d1c3e6136dd0c321349"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-1.html",
    "revision": "85a9b327e1e7525b76ab6309a8bb5bc1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-2.html",
    "revision": "0092653cdaf787ac7c046e292f167f63"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-3.html",
    "revision": "97075ca24a5e4763280df3d7854638fa"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-4.html",
    "revision": "0177b9f07a5bcec2b361474cbcc062fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "1f922b2b1910c192537387a7ee44efbe"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "8c514dbd52ffaa4f43c92c5cee74683b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "40bfea2dd8cb33df4a79e3e75579a5ac"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "2bd0d3af9c97befeceb6d9bc8112e177"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "1e4aeff97ec2cc4454d660291962932d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "6c08099d642ec992f3a49158c2e714c3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "3dc9c5dd901b148182215bdf3102c4e8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "6e460b49b01c5f9c1a759b80d386083d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "17ec001dd36f84b7acdcdbb0dfe9ff6e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "2916cff83c7368a201847a2db0d43bc3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "f7326482d2fb9972a00867282051ce6c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "af0c5b8ddcfbbb7910653eaadefb7d41"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "e58ce71c315dfceb4f58b7688329dcac"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "5fe08f87f6713a23f084a3722156625e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "a726ad22bd60fe613975d0f89d234d75"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "133da59d5de6748136dd9fa015debac4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "693b9271312869b82a02665e5d64cf5c"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "de938e99c6e0ab8e18db15ac4d722bbb"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "329622bf72ce97476b8d4d3416d448ee"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "16317ff9f19e53c5a6777083f79cbeb5"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "4aac586b90e783f0613821523acd9e0c"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "53128e350d7f3919d6a82d2f9c2f0aa8"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "304bcc797ea2fbdb16650d20a6682a89"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "e0822fb3fa9cc1adc092f2f95bd87af2"
  },
  {
    "url": "categories/FrontEnd/page/4/index.html",
    "revision": "d5ab2bf97c117a0f2dd0f065e15798a9"
  },
  {
    "url": "categories/index.html",
    "revision": "c3efa29453e8bb40405f0f671138a5ad"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "ce4606be3bad59e5346236d64a42c8af"
  },
  {
    "url": "index.html",
    "revision": "ac5b0aadd8b704c70f44572c82aba2b5"
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
    "revision": "44445274c3d5a6073d0a1f652af1d9d4"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "44c91223d578f3f8277bd15989d93b54"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "9c5d95e8670aaafe38ad414d98cec1c7"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "140befbd2ec366556cbc7f3c4a3b48eb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4d667d37934a16427f0c364c1623c3fb"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "0ac94885c4c9e9f05e3b14e5020c903a"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "d6a84efea3feef84462d152de44ce703"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "1cf69697f421a6f2a7532f70ebec18fb"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "dc31a99656896ef8ff744643921d1736"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "333838ffa072a3f226a52cfd8c4ea39d"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "17eb9e3bd56afed62a2473020acd3e76"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "44eee7ce456769929c53bff3fed10c30"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d8120e9b45447ba4e9a4097064ccd4e2"
  },
  {
    "url": "tag/index.html",
    "revision": "10ff7a743a2f71518eb6def598a0211a"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "b787f3be7bf01abc5788713f72a12322"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "89fc09f3fde0df55aab2de7656eb810f"
  },
  {
    "url": "tag/jquery/index.html",
    "revision": "18ab9bbb8c17280bfe5eda92b7a3776c"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5fe29cef79a649212e5c639858df0df9"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "3a28b31f96aceaca9e5a27870aa2477a"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "423eda3fa51941962fe10faa9ff57cbf"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "8cf59099fdd4d4bc0e195376319b9714"
  },
  {
    "url": "tag/other/index.html",
    "revision": "8b5fa38adaf7e33ea760b0015020ebbe"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "f2a5f5058a2413dc3406e4930dad8896"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1186510602e498e12c6803266aa31a9a"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "765626c625a802f34d5a9cc2e6087b65"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "a9e243134e68c45227bf562e551d7794"
  },
  {
    "url": "timeline/index.html",
    "revision": "eacbca4200661d1ef870cb82e80c67d5"
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
