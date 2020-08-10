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
    "revision": "f9e349f1c3a13760c9c96754de22b83c"
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
    "url": "assets/js/14.3237656d.js",
    "revision": "bfb7b2a93593bc1cc76f8198390557a4"
  },
  {
    "url": "assets/js/15.674b3f2c.js",
    "revision": "83986970b2c5a4699e1034d9cae2acca"
  },
  {
    "url": "assets/js/16.1bb5b6df.js",
    "revision": "1a7fb1579eb6d621ee7b802b7ea50b93"
  },
  {
    "url": "assets/js/17.d6fb9959.js",
    "revision": "39c8bacc089764d22289da3e3cbb9bb5"
  },
  {
    "url": "assets/js/18.a109fc1c.js",
    "revision": "2a75c977315a59e42c97a2f74a892364"
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
    "url": "assets/js/app.7a0c5c2a.js",
    "revision": "e4c679dc0517de6179730dec50d0e586"
  },
  {
    "url": "assets/js/vendors~flowchart.d9532bba.js",
    "revision": "70999c85d2699f8bf5d217cf8765a630"
  },
  {
    "url": "blogs/DataBase/2020-8/MongDB-nodejs-example.html",
    "revision": "c5afd791ed0c00ddd3e57d87bff9d816"
  },
  {
    "url": "blogs/DataBase/2020-8/MongoDB-Base.html",
    "revision": "6277d3bb197d65cbb9a5abe4a587d5ad"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "06bd91e0babcea9d258487041cad2c72"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "5fef5cb35af1504b8e41dd8dddf37d11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "a09fd379510a5786cf42de7243ba0105"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Express-Start.html",
    "revision": "d56ff4f5ba6ce6067d4189a3d885f974"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "a76e986fc1136bc85f37e0ab3e047fb1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "87a770e59d0f4cc50f3dd11cbb458af5"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "27780fe2ce3e8198a4116c880bdb7b50"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "aed1db951c2e280a32b9d249b5e3bda7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "4f77798cb69458f701093b3f5680a569"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "cfab3e857dda2ae0451e5d512c12b704"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "af20414f57772d5eda65cac2b2911a11"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "b863cdbe60680295bec9a0e765a799c7"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "88b52dcaea6ee52aa9b103bb7dd29b51"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "25b01f2d6aeaaedaaefb7f81f05b9971"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "dbe47a0a1e0fc9d09afe854992dc5f72"
  },
  {
    "url": "categories/DataBase/index.html",
    "revision": "96d6cdb8f86b9f31b4e949df7af81574"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "10b41c4bc25d212a15571fadc4b0fd39"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "c161af3312da77e2ab4ba85f641af3ca"
  },
  {
    "url": "categories/index.html",
    "revision": "372d87a161120e0b94de1d5aa18c2d6e"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "932e582c418d590c86b4058fa494fa16"
  },
  {
    "url": "index.html",
    "revision": "eefc50af442616a5a5662beba4f04bc0"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "99b49fe7dbfc923b421d4ab2ab32d531"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "efac72712b75d82d738a3bf731633317"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5d244b66a43da4213da08dcae804a319"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "fa8de9e6e1ac18946f3d270db60cd4f9"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "70a07dcb75cebd8463c3be8f5b562298"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "2e7ae16b82de7f295c3ae82857e8da01"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "8406cab553eb2b3d9dfb32723699c1f5"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "4fb942d8f7b77a538bb784a936cf0938"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "5b7691cd9e8e40f2f0dcc2defc5a73f2"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "b3033f21c272e8b413aa80fd8510c3af"
  },
  {
    "url": "tag/index.html",
    "revision": "8a6bf34914e8b304bf976143dd331014"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "a677042a642dd8da975dbc86ddb46a34"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "d0b22fc13cbb1a53e984a6c718b239a8"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "0a4cdb97407cadc8d7e07f83920fae63"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "84faa1f7b08504d0cfac0740367777c5"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "6388e6cde4bd21e344257c0287ed410b"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "e1ccb169bb2c54679405b4e0fd47db98"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d9cde80ec23830fc3e49a2ed13e3e46"
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
