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
    "revision": "7b0b28a580a00c13be31afc81eca87e3"
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
    "url": "assets/js/10.ba3da2eb.js",
    "revision": "a529d6ce94587f16b01b7914c8dc8c31"
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
    "url": "assets/js/21.82461b69.js",
    "revision": "2451886506512f75afcd1ec4e07bdba2"
  },
  {
    "url": "assets/js/22.7c2974f6.js",
    "revision": "9051a44d1791ade506c827a58837a4c9"
  },
  {
    "url": "assets/js/23.b0ddad0a.js",
    "revision": "e28b2d42431bacecdddd47be1d134c7c"
  },
  {
    "url": "assets/js/24.8415ac7e.js",
    "revision": "943a89a21440abb0d14aac0ee72a8daa"
  },
  {
    "url": "assets/js/25.f1444cae.js",
    "revision": "d92724b2242972b1c2f4806963a07101"
  },
  {
    "url": "assets/js/26.ae5da51b.js",
    "revision": "51f74ea948f094666b9baa006dbc2304"
  },
  {
    "url": "assets/js/27.90df646e.js",
    "revision": "361011eca337326ea5f1988c7873936d"
  },
  {
    "url": "assets/js/28.34965e27.js",
    "revision": "0c4f07cdf13a731785837415ee32611d"
  },
  {
    "url": "assets/js/29.7a0259c2.js",
    "revision": "ec19cb8663efb2c6f3ee8de9b1f7ff6b"
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
    "url": "assets/js/app.372631e2.js",
    "revision": "ef738f39dae29f974f79a23e65208ef8"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "4f27591e27c4a0dba12d2841855c7f6d"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "20808ec9df4a6241c912207b818eb7b5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "31c2dbf7e54a35dcf28f5ef72c2975a4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "fc6a6ec831f15dc517867e35c1005771"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "2be8669df54413be60b653eff0d995a5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "8fd56d6f3b5b36ec0078c8f77081379f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "6492b08169125de90a2d2b4571342df9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "1d65ebe2479fc1dd63842de9976bd349"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "e3153557591309d099b170bc8fa506ce"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "68cabd54b05f353857e58d753822272c"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "54a21c4cbfb1db2246f0ab41efaf5cfb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "a958b13d387f401c57bcdfd6b614b686"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "bc094230b1caa920039df4906c3b65f7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "fe934509dce19981ecd0e3b69e95acdc"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "0a5fa7e31183be983a3badb79b4c853c"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "884c01d38f33bfb4f21612ce5cc9d627"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "5b0aef23cfcfaa49c4d03492fa141e1c"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "2d1233434aaf62dff68c1cfa2f18fa81"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "f63eb2fc6b41e65cd87a6243185e529c"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "bf15da9d01b8581687b0b8f3481ce05f"
  },
  {
    "url": "categories/index.html",
    "revision": "f672289bc23a6312e82ab52ec57cd98b"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "69a3935d5e27656583541dc7480225b1"
  },
  {
    "url": "index.html",
    "revision": "15a6e5fc77c14057428d58896d1646c1"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "dfa87b3d06bd42ac2b9f2e0aedaffd8c"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "9f7888e4867b6eac553602ee2034c22d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f90c3fe2510d912b0b2aa143e3bbf7b5"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "cb92dc818d0344931a50936b7b2c4f06"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "f11335c3f49d91214ab3d7b15fb396ae"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "880aa0608b8d33985797561b209d1016"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "a1e1e1ad07c862b28fee539b4bc88d9a"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "d5321b0cfebe2297f56dac57d6c2e768"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "901deaebdeefc7ecb4ef4fe811e9b20f"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "9bd34e4e3942914052b240d010b07f3e"
  },
  {
    "url": "tag/index.html",
    "revision": "8d1ba22232e73c564bfd05cab7e8aef9"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "46b02bdf03c838de58bd097e1c2eb7b3"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d21abb76bfd456e100d453f779ae3665"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "6dd43985fc7505376e3b8ecd2f891d65"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "bc04dc35e0bc921d1a3ada49f176c9b3"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "3adbf71bdc1837d7b2883f09635e398c"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "221826eb23427342f12da2c501e0f075"
  },
  {
    "url": "timeline/index.html",
    "revision": "16cbd6dc66b20918d1780cbbbf7d7634"
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
