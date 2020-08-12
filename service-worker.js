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
    "revision": "5985d537ac75c2923bd9e4f7a2de18eb"
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
    "url": "assets/js/20.a02e1cb5.js",
    "revision": "3b7e4cb5a332b7a81384a13a2b4a37b2"
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
    "url": "assets/js/app.8b71558e.js",
    "revision": "5dd590ee47fa866a2755ac0aeccd1cfc"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "3adfb385a8d5b13db30f79e3a1bd7c2c"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "807b86539b6fcccdfcfab1b677088ebb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "d89d068648c0146bbdaff922441a7d02"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "64d07a1e949af339c7c5dcabc5611bcd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "17c41519d7c4db243d11c98e59cd75df"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "5aa6076bd82bea7ee7f7b40fa277823f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "84349c3f98c080aa38a6d9d889ca3541"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "e01707514a4d803419880b7cc1e1ffe7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "ef9be24ca597a874afaeaee0f141b6f6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "b6c154dae2f73b329bd60b43ffdc3b77"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flow.html",
    "revision": "40530576b4da1c6c02905827d77f1e74"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "6db11ef339897eb2fd1ba7149a468ca4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "3919e1afb9146c7f7e70d5526eb888c3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "33b3d062fe84844cdd983d46be1fbe56"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "478b578e29af5e247ed3c2711d9f27ac"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "faf7aae620eaae15c1033df0c81264fc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "c7d5854bab18a6fc8c4d490ca8feada4"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "452ca644a7e3dded9d917e748e1f956b"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "bd76d97b3be44a850a1e7f8c1b729f23"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "fc23f1c5908a27303464c261517c5a01"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "3a3feb3cc5f1b559ffba4e0dd3ddabf4"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "f5c2dac97db149c242875c0c5c4d6074"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "aaa05db18b406d73fcf528073390cebf"
  },
  {
    "url": "categories/index.html",
    "revision": "e4726aa99a87ff7a5cb7b01f54229072"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "0d0bdab0052b9051af0c0c64bd8d8533"
  },
  {
    "url": "index.html",
    "revision": "ba6c9102ccb790f8079fce871da52485"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "0b2426628f52b49c0d29d22ccd6e0074"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "1daed02993cd37cd28c33c189417accf"
  },
  {
    "url": "tag/css/index.html",
    "revision": "992635717678dacfbaa595b24e4b2ed9"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "bbf7832bd0964518dd5fb2a71d079fd4"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "a2e1b0e6de0f8a0168a65692cfad739f"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "e5123e7c2a63355ce308f19122b90513"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "6f6b3575033023c09e2e36914608c93f"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "bb9ee2c9a7ebc3006efa20503732d3aa"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "d4ef7554069e2f945fb62f09a6903403"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "e084a8b3ef3ffd146cf7c204412a6b84"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8ec8d92e6b29404e0987ab3dc089de2f"
  },
  {
    "url": "tag/index.html",
    "revision": "27146b08c322acc9a1def1677d3fd085"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "c1493e2f28896704c2f648febffbc40d"
  },
  {
    "url": "tag/less/index.html",
    "revision": "d8bed1043c0d795483b5cd2f8b59e9b1"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "e720ae82ba67cf26ccf80e03dbfc395e"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "ea34fdd98d88ff1daf58829b60f1cf9a"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "34be79571ef4404a1b5961d471a5f0ad"
  },
  {
    "url": "tag/other/index.html",
    "revision": "a8b1de5b5761d687ad5b3680fed475fc"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "acfa93927fd86bf139b02fdcc91d7ed1"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0647148a655a308ce25516727481dd4e"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "31d80fb318b5dc3dcab599868a50305c"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "2b8a6127367635dc3e5b2e4f31b00067"
  },
  {
    "url": "timeline/index.html",
    "revision": "b2fff0cb6b6db9cdc2a8d72649f5bfd7"
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
