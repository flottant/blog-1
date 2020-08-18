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
    "revision": "66f6bcfe7088d35c11a12dead40f14c1"
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
    "url": "assets/js/10.9db0d9e5.js",
    "revision": "655e523fed88d6216a7effcd50aec42e"
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
    "url": "assets/js/22.41de22c9.js",
    "revision": "f9f70a54096cc7404ded83c5e5083c44"
  },
  {
    "url": "assets/js/23.663c25cf.js",
    "revision": "007c13fca83c88bcef8202bab5ac3673"
  },
  {
    "url": "assets/js/24.f9b80010.js",
    "revision": "691ac09254d86701000fe5dc5256fa45"
  },
  {
    "url": "assets/js/25.27bfd5b8.js",
    "revision": "1710b6e3e1e52bbae93e9ac08b93ce0c"
  },
  {
    "url": "assets/js/26.a7cff6f1.js",
    "revision": "807a9761d5b79e6a1f67f66ed12775a5"
  },
  {
    "url": "assets/js/27.d06ddbab.js",
    "revision": "1d084e96ba7165304fb5a8a11719b959"
  },
  {
    "url": "assets/js/28.7aa2541d.js",
    "revision": "da69874b4c235ff479e8192b17bfd27d"
  },
  {
    "url": "assets/js/29.f29687ac.js",
    "revision": "a5d6468874b11245478ad6cfca54338d"
  },
  {
    "url": "assets/js/30.6040ed4c.js",
    "revision": "d1466104be6448c3102f5e0f049b5c6a"
  },
  {
    "url": "assets/js/31.2673b809.js",
    "revision": "efcbf5063dd5b026232dade5644e3821"
  },
  {
    "url": "assets/js/32.85e5cd7d.js",
    "revision": "5374635e080bc5373a7f02ed26c4ac8d"
  },
  {
    "url": "assets/js/33.4602398d.js",
    "revision": "d76ed10c683f9b7764b52b393e60f07f"
  },
  {
    "url": "assets/js/34.53e3c55f.js",
    "revision": "f9ae8707ad4443d1acec8a1ee2b2c4a9"
  },
  {
    "url": "assets/js/35.612d3f57.js",
    "revision": "6ce45a448276c93cc534a8fb48408c93"
  },
  {
    "url": "assets/js/36.cb8b3260.js",
    "revision": "af0b82da5039cb9f0d3da880a9593fb6"
  },
  {
    "url": "assets/js/37.5219a155.js",
    "revision": "ab2cf7be975712d9d320ff25f41be878"
  },
  {
    "url": "assets/js/38.2a257c65.js",
    "revision": "29d3efbb8b036cc2718446276e4c2be1"
  },
  {
    "url": "assets/js/39.93429455.js",
    "revision": "409cc693e98394a20f2f6c67886a336e"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.01ffd917.js",
    "revision": "b5ff33dfa6f6ff1a8c8de80ae0681939"
  },
  {
    "url": "assets/js/41.f012de6c.js",
    "revision": "d5be2fe24cab5381feb1c7c66f6610bd"
  },
  {
    "url": "assets/js/42.38978541.js",
    "revision": "267d81706fc7e50e15539c846d295828"
  },
  {
    "url": "assets/js/43.bbe8d39a.js",
    "revision": "c2a1ffe6b5b6bccf36abc9f09f7ee504"
  },
  {
    "url": "assets/js/44.51294668.js",
    "revision": "fc6b884e573490c495021fa0092f6ba2"
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
    "url": "assets/js/app.7da08b4d.js",
    "revision": "04215948693f54b18d93311a395e64f8"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "a28404370b567c6374a3cf10dbe0c8b5"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "fc6062746efd2f63d8e5b6d37265cd9d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "e5fa17c5b9c9911538192a26a8d3c0f8"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "e5a4a9afa8881f2085ea465e66a0df98"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "2c3b7ad6e66d03d81a15930d91f7f996"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "bb063144d72c2467ead53020699f7a78"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "87e4d11eedc9df925e6fd3fcebc352da"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "45c8b4934ab12dcd4f1fe25bf4303b6d"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "61f7ad7db9b335289769232cc09f8576"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "828bf4bb7ac3bf20c9c1db96729659cc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery.html",
    "revision": "d546c999712d4b05cb128eb503212f13"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "726907360f541f7e810d7c1126d3d362"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "c3fd60807bdbbfac749ee8179e349591"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "ff1d6159d5611f7d13fbdb1255fd6a6b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "cf0bea07dc3cdd6ade6903addf8b2e6f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "47ea6da1884498acfe608ad5995aafd2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "f1d698e06bf175320dc84b7cae342818"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "de45fc6f229bd9203bab08876d5091dc"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "488cc59484ce29dfff6cfb5012a3fbf5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "ed9905fa52972f4b1307eb344cd00c32"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "35286a9517d1bb822bc8f1b6c33659bb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "5a2ad1b050be6a78a4a4122782c18cce"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "4766f0e71069b8370c4227130f2c4ff7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "bae7b0ef640124c3335ada56cc5fc685"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "97ba44ea6330544f80229dd90dc8fa37"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "f4544713ece1e06bfe81a93939036e6e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "83ec4771a224de593749f4f1b3260ec9"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "6af156a5bdbfe4993b42700ef6688201"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "b36d03d3ec0d3b24e6d55a1f0eac1f3a"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "cbd9d468e51103e4be7aa058bcff8ad6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "684892b52a2c7dc1e7c6ea329eca97a7"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "c3a61a0515bc0ef26b3350dfe966e444"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "e586c75d4170072cb610ee108836b4aa"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "30e7285c2591bc3a09848a6705323e14"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "da6a4e6645af0ffa958e888cc7577c52"
  },
  {
    "url": "categories/index.html",
    "revision": "1a830e2f8aa3254e9eb4af471ff38856"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "9d9e9c689bb0b791aaea868ef35ff1c4"
  },
  {
    "url": "index.html",
    "revision": "6bb175759f30dd869de8a5e597151429"
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
    "revision": "5b071129cc92b567f8fb4c9a254ec54d"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "7d65c31e2bd0df70317fa606a255ff1f"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "9256a8ff8f10b94f1a81010e543a4b2c"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "304c242677d8d3e0b2ff5148958922d8"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9d03fb8da5efa538ac9560b6092964f4"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "12ee4fd1e79d74a3993f78c221e92e3e"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "dc48ca98b524862aa4db4479537cb1b1"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "0628169b1d4e15615ba5bf8df0e6549f"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "bb76b1730ea4a1bf66adaebddb25c258"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "39d30a4261004a85ec8046791598bf6b"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "b92a3353cb4a60415a4c0ab1543b9d44"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "2a38064646e73ebf77c3df407387a39c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f6e47e270c66a81ea844ced3897dc414"
  },
  {
    "url": "tag/index.html",
    "revision": "a36c71fcf6ebc836295494c92524b388"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "49d7bf39ae2203231aecc9c61afe073c"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "6a465f115893416853aac3c27326ae44"
  },
  {
    "url": "tag/jquery/index.html",
    "revision": "f20b98398d346573b3e0f0ae8094380d"
  },
  {
    "url": "tag/less/index.html",
    "revision": "f30a2b1952ff1aff35b3c547b87ecbcd"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "efcecffa195cdb66f85104fafba0586d"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e27c7334ec7a084d04e9b4be58471928"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "a32993efd2f1aaa2e174a1ea2a97e637"
  },
  {
    "url": "tag/other/index.html",
    "revision": "ea118214e3c688e02f7acda1e9d9200b"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "a286b4a35716225c1cf454e9b4a43e25"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "c71cdb893b90aef9ef1013636d8bef72"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "045a3ad5684ff6a4971c15fb5f4bfe1c"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "67e732ccc3c29366aeb189fe41e1116a"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9c045bfba54dd02b2cc3b0d1d6d4912"
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
