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
    "revision": "5a24762b35bce27211ff33e2ba307670"
  },
  {
    "url": "assets/css/0.styles.e168caf7.css",
    "revision": "65c0fc1389f7a8887f4c6186ecfa3c45"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.b99936a8.js",
    "revision": "c4c18e5e07b92ecb75184bf315f5d9dc"
  },
  {
    "url": "assets/js/10.63c8bc57.js",
    "revision": "bdcf577cf6d7fc7ed0be0bbd9c4eee43"
  },
  {
    "url": "assets/js/11.87663bde.js",
    "revision": "ca3beb71dd8b5683c75d84f424512b74"
  },
  {
    "url": "assets/js/12.d6c76540.js",
    "revision": "72453c3535b9384005757c9742ba61e0"
  },
  {
    "url": "assets/js/13.f5ea0aac.js",
    "revision": "d07dd75fd795bbf669f74039bbae774e"
  },
  {
    "url": "assets/js/14.9823b415.js",
    "revision": "f70f7800f9a308252c0795d923751fc9"
  },
  {
    "url": "assets/js/15.0fc97b26.js",
    "revision": "f3a8799dae4a756f2236f77ce708e68a"
  },
  {
    "url": "assets/js/16.bf9dee59.js",
    "revision": "1751b26ad050c5d19604e802c4f5e375"
  },
  {
    "url": "assets/js/17.eb6cfbaa.js",
    "revision": "212ce893ebda1516353a6a27fb7110e1"
  },
  {
    "url": "assets/js/18.d3cdce3d.js",
    "revision": "d6f57355f2a1f4cb46580cf44fa01b6e"
  },
  {
    "url": "assets/js/19.3f0ebe16.js",
    "revision": "c6f0365783d2dca9199f7b67886d0f94"
  },
  {
    "url": "assets/js/20.78766422.js",
    "revision": "77444002de7c8ae230c1ed4409459d17"
  },
  {
    "url": "assets/js/21.5a709a83.js",
    "revision": "b62b03d6acc15240b2df4bf709816ede"
  },
  {
    "url": "assets/js/22.84454b6d.js",
    "revision": "55351bef81157c285fa4f30918678f40"
  },
  {
    "url": "assets/js/23.f22da811.js",
    "revision": "9c800f89936484c78782938a3ce0dd36"
  },
  {
    "url": "assets/js/24.34dfaf91.js",
    "revision": "1721d563e585a1086cbbd0f1e6d1591e"
  },
  {
    "url": "assets/js/25.d8f7f9e1.js",
    "revision": "7e71f0496e8fcd9259353ce6286135e9"
  },
  {
    "url": "assets/js/26.4b5bb238.js",
    "revision": "ac4b05e0517832767417d9b0cc85dbb8"
  },
  {
    "url": "assets/js/4.f2dc001f.js",
    "revision": "225a3cf61f1a7542ca13d56f51638c61"
  },
  {
    "url": "assets/js/5.a52307e5.js",
    "revision": "37958fc1eba05783fbd10f328893e4ac"
  },
  {
    "url": "assets/js/6.4cfc5c94.js",
    "revision": "68b4f122b766f6c3fcde5209588b32aa"
  },
  {
    "url": "assets/js/7.ff08fdfc.js",
    "revision": "38dbe7b6c8fd1ff022902e209ff7eb0e"
  },
  {
    "url": "assets/js/8.a3fe876b.js",
    "revision": "2a21477bff3f94998b030425c5144a47"
  },
  {
    "url": "assets/js/9.5b033a52.js",
    "revision": "9167c5951fe5de34c9501cd8eca29b9e"
  },
  {
    "url": "assets/js/app.e322d504.js",
    "revision": "5d9846fcf74b736a15a94977c6d81e1a"
  },
  {
    "url": "assets/js/vendors~flowchart.8cc5d160.js",
    "revision": "bdb66a3e153e52cd76ceb1c45391be11"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "048c5cd6076ceac08c2746ddc1344cc5"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "ee60e5c6ebc5d9bd45c8bd1b522d8689"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "aa4629911efe1a4ad1c314f6aaeac701"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "b8a76018f99c4183ddb078bed972eb89"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "6aa06be9d6fc0dfa612e84e6b01218a6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "56858b9badbec7af102cdad278b2408c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "f3886f3b57e47cf92bc60d63c8051dc1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "8ff77f1367868cc830a9aa7d8c77134e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "bcee5e8311339a5ccf70addc40511f94"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "ddf794daf118021f37afbb216eed7bb3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "f3340156d6ee8a3ebaa549346d70d9f0"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "eccf1f40f464f28107945db044f52c7b"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "28b2a5aad1e9cb4a33fefcba5eb4ff59"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "7e125a59bff19e50898731966f39e9e3"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "7efaaf854a8d499b2badb037d5688d3b"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "a53a95ecc48fda337877f33ef0f416d5"
  },
  {
    "url": "categories/index.html",
    "revision": "7ff9b255c0b1db7f0b3ec094b7fcbacd"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "418e5a8c9016581771269bb67db39077"
  },
  {
    "url": "index.html",
    "revision": "2c0a6b753dbb7c20cfbfb57e50794149"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "e218729ec3d6a65d01859280ec71c384"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "dcef02f1efa4037e18a2ead4028bd01d"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "c0ec5f6329403d0b549ffb2fccdd9411"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "242e66a37532733c8f5688e72674c961"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "9d31950d2e383685fe36a4f61c68ef07"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "b4e746ac0b98aa3939bb32350167a2dc"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "22b4c16968cce96e01ae23f45a1111a8"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "8c1bec9b58e24e8da66827cf26d2a40e"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "3caa28c537d8767abdaaa1fd82c1eb0f"
  },
  {
    "url": "tag/index.html",
    "revision": "d22f013f9db438eba04e1e30fb21bdb2"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "5529f133f3f7e280bb5493182105de03"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "b47d4f7fac9f49b36b2da961fde09cba"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "383b381c6ccbd969eeefbe2d1138794f"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "09bbe3ad9e7723c63aafc54b4509911a"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "83dcc25d55247ef9f21ab2503c8d1a9a"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "b10b1aa36235057e8d38530d9ea413a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "d791bd35d41702f75a37c1425571f676"
  },
  {
    "url": "web-img/author.jpg",
    "revision": "04df4f219cbf8db1bac55822bb7d15bb"
  },
  {
    "url": "web-img/banner02.png",
    "revision": "d1ac6e2de347a5212489385d7674f5fe"
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
