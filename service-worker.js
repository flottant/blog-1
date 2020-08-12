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
    "revision": "4aeb6a274d8c226d0771435666f86edf"
  },
  {
    "url": "assets/css/0.styles.f2c4fbf9.css",
    "revision": "9b71b025554fb12c642c9ad797c593c6"
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
    "url": "assets/js/10.51812990.js",
    "revision": "0c1df089c882202af860d4248913f273"
  },
  {
    "url": "assets/js/11.f7f1505b.js",
    "revision": "9617a4d9610cac4443c06960640bc93e"
  },
  {
    "url": "assets/js/12.c85bb303.js",
    "revision": "f154ee5722a1ee79a882e85452ad053f"
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
    "url": "assets/js/20.d587f873.js",
    "revision": "cafac109cb50c1913500ccda63f30e95"
  },
  {
    "url": "assets/js/21.29f1d0c7.js",
    "revision": "5df3864e60fdab13a6f6437d652a38c4"
  },
  {
    "url": "assets/js/22.803172e0.js",
    "revision": "90cc8260c573c1971b563147df04330d"
  },
  {
    "url": "assets/js/23.7fafa88a.js",
    "revision": "1017cd669d6c7dde534cf6fb430eea1e"
  },
  {
    "url": "assets/js/24.0b1f0a10.js",
    "revision": "9cbf1677f2f3ed0dab20bbd9cd06d2c0"
  },
  {
    "url": "assets/js/25.e1b28c91.js",
    "revision": "825cc3c5e8f1274280461008a310f8fc"
  },
  {
    "url": "assets/js/26.4872772e.js",
    "revision": "ba772d265029a26db660c3c06f151fd6"
  },
  {
    "url": "assets/js/27.3caf0a20.js",
    "revision": "2c398173d7c671eb053b1fd9743d71c3"
  },
  {
    "url": "assets/js/28.75a335bf.js",
    "revision": "552e377f0f44330ae59cb8f0243bf140"
  },
  {
    "url": "assets/js/29.a4823438.js",
    "revision": "345ab5756dccb1c86ccf8a7d67f18c1a"
  },
  {
    "url": "assets/js/30.6ac821b7.js",
    "revision": "184e46df6f048659d73d3c99d5e479e8"
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
    "url": "assets/js/app.16c8b7ff.js",
    "revision": "f382f870849d898761e0f456a281ebdc"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "a877ee97a167f964e12ea36e9b962c71"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "77b6dd4b16408ef71cccbeba622dac21"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "4a7174d7f6a1eb0ffad9d63b9f535dbf"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "a1d6486de245c5d10876aad1ddecdbe2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "d4184bfba7a30e848dace9a2c8af3cb1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "7a4a581b4a11f48c7e7bbe1f75cefff1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "96a49748c49a533138629dd438acb175"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "2346fc4316b449da0d2843a4e1ba3747"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "268de8662284c6e9949903a5957ef8c1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "aec609284169ac402304e70d5135d49d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "d03c337bdd89a1af79416d0fc6078c0e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "9fa741a8ec6351c5ccd178951516bfcf"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "c41cdff546d50d53760c09d50d2c575e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "15de3333ebe2a8f6b96cdfbe91051bdf"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "785350d20a9477115a293c3513e0fa92"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "d5fbc2b64b2acdb7ad42a653e7f8e4ab"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "c5ebb52736fe67170edb1d1f6ce2db89"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "d7356dbe5138c93202a27b042a6c2a02"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "d900de53bb0dd0fe7b122b96c696bc45"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "d4d2febcb4f004e8401c7fe79021e8ec"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "b3eb6bdade3604f8ece9d9506abe5aee"
  },
  {
    "url": "categories/index.html",
    "revision": "9b7ed07a64dfefb58996fe9de942f8ea"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "4dfbc2828b11f39916602a8993f93a7e"
  },
  {
    "url": "index.html",
    "revision": "189f223f5de8e8def6b5194b13e292c8"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "e739ec16e52eaee0eaabbbf0c42f850e"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "2b2a37e4d25959b298a1cf447732949f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "36b255f6538e7e9e0b1b618fca04b6f9"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "00501357af68feff35fc4b3cbf546c99"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "c1fb2c0a7c353cc74cbbf34988f6b7e6"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "7b4541b7adc35a046cda30941d874235"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "87c6e9a80b34d4ed49ac2cc6d2ff203e"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "2ceff73e4f93e413c4f3295ee0401f93"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "054ab16adf8eb700eb56ca5a5c5f6bd3"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "41c7b7857efb0406206bdd53da1c755d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f85db309195ec084d2ca120c7cd02117"
  },
  {
    "url": "tag/index.html",
    "revision": "e4320e313f6fa86c7a7f19a20ab1cdf6"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "b9273fd66ac89e1d2d0eab42718ff258"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "43838f5ec34e90b0e3f613394c7ef5f3"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "8d052149a76d653080cf9d9397ce5220"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "90da5d2ac94fcb6d3df45ad31687ef4d"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "07adaf75363b70dbd410fbe6a7ba70b3"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "c249ce1eb70538c3e9fdd6bc329aca0a"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "a1e32187fd592ea7049bc38e0373c360"
  },
  {
    "url": "timeline/index.html",
    "revision": "ea12334f522767ed347e0a4a574a470d"
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
