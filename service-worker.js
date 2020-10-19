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
    "revision": "a7b0ebd49f82f5c05369c1bee6d1c61d"
  },
  {
    "url": "assets/css/0.styles.b91f81b7.css",
    "revision": "68b08a09fc903113744537222669d5f8"
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
    "url": "assets/js/10.2872f495.js",
    "revision": "d5a2700ab8252bf94c0bd938212bfa48"
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
    "url": "assets/js/13.88fe6fa1.js",
    "revision": "c2c3b20cd5eee5686c1d78ac4906acfa"
  },
  {
    "url": "assets/js/14.dd9de94e.js",
    "revision": "17ff317b1c5f294b7e8f9762d37b6c54"
  },
  {
    "url": "assets/js/15.7a9238aa.js",
    "revision": "3d0452311b72900310a84ef6dbcfef3b"
  },
  {
    "url": "assets/js/16.a8223dfe.js",
    "revision": "1be294837707ec9f8a24486d325f3df9"
  },
  {
    "url": "assets/js/17.bb1bea07.js",
    "revision": "2ec2282086d356559f7f69919828146b"
  },
  {
    "url": "assets/js/18.3eecb33c.js",
    "revision": "93c65106c14dcc347c3085a04df32bc7"
  },
  {
    "url": "assets/js/19.5edacffb.js",
    "revision": "0eab40978d5d43a956395cb33c8d6962"
  },
  {
    "url": "assets/js/20.a16f8417.js",
    "revision": "d9354295de9e155a1b744890de583bfb"
  },
  {
    "url": "assets/js/21.38cce67c.js",
    "revision": "b27ee22bb7b24ad01b415666c643357b"
  },
  {
    "url": "assets/js/22.2c733407.js",
    "revision": "bd974d53d54919894e42c1b953ea1890"
  },
  {
    "url": "assets/js/23.5060c704.js",
    "revision": "02f0ef09fe604990b6b9cced523a8e26"
  },
  {
    "url": "assets/js/24.0d783a72.js",
    "revision": "1a0c2910c33751fc3792968e92c5a69c"
  },
  {
    "url": "assets/js/25.1c80a2bd.js",
    "revision": "90061a6a7e5b178670999eb722a148fb"
  },
  {
    "url": "assets/js/26.96b8a33f.js",
    "revision": "81ea2dcc3ec2e9b6c4853c1baa601322"
  },
  {
    "url": "assets/js/27.cbaa7014.js",
    "revision": "891b788d9809b158c448c346c68ef7e4"
  },
  {
    "url": "assets/js/28.dfb2157b.js",
    "revision": "bda07382c70411031610a4f585305b24"
  },
  {
    "url": "assets/js/29.408f65f9.js",
    "revision": "ef32c50cea5be1fc946bf8e79e45d860"
  },
  {
    "url": "assets/js/30.7bd11a83.js",
    "revision": "a93e4bdffbd4502d8bc0a670ed9ffe77"
  },
  {
    "url": "assets/js/31.27d71516.js",
    "revision": "a4a268f4222b6163e8284cb354e1375d"
  },
  {
    "url": "assets/js/32.f9b0d42a.js",
    "revision": "96f027167b164a801e1b6a8bd1d8db7a"
  },
  {
    "url": "assets/js/33.c7d8dadd.js",
    "revision": "c9b076d416e28d48d6be6581ce7c32b1"
  },
  {
    "url": "assets/js/34.1d0ea2f6.js",
    "revision": "34f530bd2c0e8f7d322e71cf280eaabb"
  },
  {
    "url": "assets/js/35.166a83d1.js",
    "revision": "87650520c225a523d23d7d10f52983dd"
  },
  {
    "url": "assets/js/36.3ac5c44f.js",
    "revision": "1812c8508dce10b845fa321e92fdcc07"
  },
  {
    "url": "assets/js/37.634432c7.js",
    "revision": "cb33673d489250e02521d260d68185da"
  },
  {
    "url": "assets/js/38.a6dbd9f3.js",
    "revision": "95e712cc140b2daf830d7e671fd2da86"
  },
  {
    "url": "assets/js/39.a4d98315.js",
    "revision": "b53f197f99662b33d7782c0e8911bd45"
  },
  {
    "url": "assets/js/4.fcd936d3.js",
    "revision": "1060c6579d813f2fc2baceae2f7433b5"
  },
  {
    "url": "assets/js/40.a6198ac7.js",
    "revision": "8c35a37415f098be1e8bb95247f860dc"
  },
  {
    "url": "assets/js/41.0527f27b.js",
    "revision": "e87d7730313d4cefcfe4ee56e2405124"
  },
  {
    "url": "assets/js/42.d1567d73.js",
    "revision": "c1753efc158e1c6af204922f0c06763b"
  },
  {
    "url": "assets/js/43.2ce1e81a.js",
    "revision": "fc4e1c31ed9704984a60c9969c019d51"
  },
  {
    "url": "assets/js/44.5f46c0fe.js",
    "revision": "bd37c416c62156b73c652e35bf925504"
  },
  {
    "url": "assets/js/45.b142641c.js",
    "revision": "c9ad9581b9fc4fa21feb9870af25ff77"
  },
  {
    "url": "assets/js/46.e1f35c0f.js",
    "revision": "ac294041e6865967aed2bb2567ca1d14"
  },
  {
    "url": "assets/js/47.606d55a8.js",
    "revision": "70bef9c4ff29bdecebbc4fa03ad83f68"
  },
  {
    "url": "assets/js/48.c256a69f.js",
    "revision": "5723550e524cfa19c016c7f22bfc3061"
  },
  {
    "url": "assets/js/49.13930f3b.js",
    "revision": "f1868c62c1bb45ed4cab74d0a10e3577"
  },
  {
    "url": "assets/js/5.9d9f0faa.js",
    "revision": "21e59952e2781d937e4de22cf0d56c00"
  },
  {
    "url": "assets/js/50.e5e040d9.js",
    "revision": "877839bcd3244deadb100446a318b037"
  },
  {
    "url": "assets/js/51.5ddf7519.js",
    "revision": "e12b7c9c76c692b9f36d2e06b9d25367"
  },
  {
    "url": "assets/js/52.84d022c3.js",
    "revision": "47d6e9b50cd47ba42417bf6a607f66ba"
  },
  {
    "url": "assets/js/53.c87bc7b9.js",
    "revision": "7f8b8b56b6a5fa081267c88b2f85fbff"
  },
  {
    "url": "assets/js/54.05e91a41.js",
    "revision": "ea7d29dbe31d6f45cfa11dbf20b5daa4"
  },
  {
    "url": "assets/js/55.61a0e62e.js",
    "revision": "86278cfb296959158454f4b1683214e8"
  },
  {
    "url": "assets/js/56.f3991b71.js",
    "revision": "f6e308be6b6b1fde5aeb0ab695874992"
  },
  {
    "url": "assets/js/57.62c335bc.js",
    "revision": "7a45c650ace44e468fff96dd6bbfe55e"
  },
  {
    "url": "assets/js/58.74893e66.js",
    "revision": "f9d360b4c4be8f6a297d6d60d3cb948f"
  },
  {
    "url": "assets/js/59.92c83493.js",
    "revision": "45dcbdf53ddd403fed076a53f3e70cd2"
  },
  {
    "url": "assets/js/6.71cbf98c.js",
    "revision": "3dc61cececb8cd3d585d98d17f6f08f2"
  },
  {
    "url": "assets/js/60.737e7b8e.js",
    "revision": "ffe565c1cb53989c6cd59cebce425b21"
  },
  {
    "url": "assets/js/61.bc2dd144.js",
    "revision": "fee05760a2199dc8d024d6c813315ee3"
  },
  {
    "url": "assets/js/62.a2abbbab.js",
    "revision": "94e0ef31c5869e97ecad88438899a693"
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
    "url": "assets/js/app.ff0b91af.js",
    "revision": "e988f2c3c4f711ba3912638d9e50dbcc"
  },
  {
    "url": "assets/js/vendors~flowchart.448c1d87.js",
    "revision": "2dffb1e18e1aefa69b1b36cdb3742cc0"
  },
  {
    "url": "blogs/BackEnd/2020-10/DDB-simple-guide.html",
    "revision": "27611e3469a86f06d74a5f4f0c0dfeb1"
  },
  {
    "url": "blogs/BackEnd/2020-10/javaweb-servlet.html",
    "revision": "19fc549ad486221069003cf2c4cc3a8a"
  },
  {
    "url": "blogs/BackEnd/2020-10/javaweb.html",
    "revision": "a0dc62af318471dc9f38e50758e77820"
  },
  {
    "url": "blogs/BackEnd/2020-10/MySQL-uninstall-version-guide.html",
    "revision": "c456b43c73c024f110e318c271a60a80"
  },
  {
    "url": "blogs/BackEnd/2020-10/Navicat-connect-oracledb.html",
    "revision": "9ca49d2a324163ffdf11827619ff424f"
  },
  {
    "url": "blogs/BackEnd/2020-10/Tomcat-install-guide.html",
    "revision": "816ba841739cec1f60bfdf82c63cef9e"
  },
  {
    "url": "blogs/BackEnd/2020-8/Ajax-base.html",
    "revision": "ae7e80ec2ef44fc789fe18f9d1252f54"
  },
  {
    "url": "blogs/BackEnd/2020-8/Ajax-more-1.html",
    "revision": "8d19367fc5b11ee212e2de513a2e5dad"
  },
  {
    "url": "blogs/BackEnd/2020-8/Express-Start.html",
    "revision": "674478103cb8766db7e1e9c66b82f07f"
  },
  {
    "url": "blogs/BackEnd/2020-8/MongDB-nodejs-example.html",
    "revision": "72a8243477318e35631d487c52eceab1"
  },
  {
    "url": "blogs/BackEnd/2020-8/MongoDB-Base.html",
    "revision": "5a347b1f689d964e103312191babf1f3"
  },
  {
    "url": "blogs/BackEnd/2020-8/Node-start-1.html",
    "revision": "4b87fd36de946a67cc8592ff729d20d8"
  },
  {
    "url": "blogs/BackEnd/2020-8/Node-start-2.html",
    "revision": "4c61456ea3ed7d923ce37582ed66231f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/BOM.html",
    "revision": "d1b64df6af38c5d4c9ef909aa3591fb1"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-base.html",
    "revision": "76da17e113b138e3fc3975d883acfd83"
  },
  {
    "url": "blogs/FrontEnd/2020-8/DOM-event-high.html",
    "revision": "e6e296151bcb3a31b491b87f1e4bb0cb"
  },
  {
    "url": "blogs/FrontEnd/2020-8/FrontEndInterview.html",
    "revision": "85545c8a23c4cf07ed7a19cfe4c7ead6"
  },
  {
    "url": "blogs/FrontEnd/2020-8/GradientFront.html",
    "revision": "15ec91f37f8c462de80989be3d3c7b2f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JavaScritpHoisting.html",
    "revision": "bf456de6e65d388edf2a4473a779fcf4"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JDM-Banner-background-radio.html",
    "revision": "c4924ee9214608fea2d32ae75d070d56"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-1.html",
    "revision": "c30549f6007007fb4ebe7ab73e11f2a7"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-2.html",
    "revision": "899d8503fceb4b543ee1de4a8acbf79b"
  },
  {
    "url": "blogs/FrontEnd/2020-8/JQuery-Start-3.html",
    "revision": "7a79579d2d1cf50213b9d5382969cad0"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-1.html",
    "revision": "0bca70c0b6f165bdf89574a83780d348"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-2.html",
    "revision": "c93a07b6498bdec5bd76b790b73385a2"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-3.html",
    "revision": "6b450f7b4db2e3ecd356d90e2ab13618"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-4.html",
    "revision": "841292788c4c892d46c398fd7bfad861"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-senior-5.html",
    "revision": "7ba32a3f84cd71b16375b05885e7c795"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-1-Variable.html",
    "revision": "4ba334c079c097098daeed9ef5618b4f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-2-Operator.html",
    "revision": "18f5499f1a9ffeb76952bc8d7ca5076f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-3-Cycle.html",
    "revision": "353a9e1241070af4dd5c167989d5d78f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-4-Array.html",
    "revision": "3fb34840a0626ebf8044ad8a38945d77"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-5-Function.html",
    "revision": "4eff6d2d2520ca98b1f9a7ce4301e8bd"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-6-Scope.html",
    "revision": "600a73a434d45f20d48ebe10837e3894"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-7-Object.html",
    "revision": "3c548e60290b9c55d037529bea95717e"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Js-Start-8-Memory.html",
    "revision": "aa84630c93e20dfc50ae5a5c7643a553"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-flex.html",
    "revision": "8601334d1c21e5814eefa28727e82b83"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-fluid.html",
    "revision": "c99c6a1a3aabc1e26bd962ed8bd337e3"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-rem.html",
    "revision": "22c41739ad3d4a6827642f3225ba3991"
  },
  {
    "url": "blogs/FrontEnd/2020-8/MobileWeb-respon.html",
    "revision": "321b2764982b5631b1eee60721fa513a"
  },
  {
    "url": "blogs/FrontEnd/2020-8/moblie-web-effect.html",
    "revision": "1abc089541fd533c45591adfd833fa6f"
  },
  {
    "url": "blogs/FrontEnd/2020-8/pc-web-effect.html",
    "revision": "9e52c097de89ab9ab0f48a1b35bb7078"
  },
  {
    "url": "blogs/FrontEnd/2020-8/Project-BlogManageSystem.html",
    "revision": "11641de06fca31bbf50e875faf899f16"
  },
  {
    "url": "blogs/FrontEnd/2020-8/StaticBlogAutoDeployPlan.html",
    "revision": "58ed3f4b89d3decb30c224a9e39d27df"
  },
  {
    "url": "blogs/FrontEnd/2020-8/WEBAPI.html",
    "revision": "046518667f08b33abf9e2c1c293abbd5"
  },
  {
    "url": "blogs/Others/Eclipse-install-guide.html",
    "revision": "ef20d92cfde12355d8e5b19dfb446bee"
  },
  {
    "url": "blogs/Others/Git-Github-start.html",
    "revision": "f62816345d3c8819370217ce61d016b7"
  },
  {
    "url": "blogs/Others/MarkdownCheck.html",
    "revision": "b221a6f243807aeefe87ba69eaa0d843"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "69564b116cdc541f9a6ec66074fc715a"
  },
  {
    "url": "categories/BackEnd/page/2/index.html",
    "revision": "4a9dd9ecfc250ceef98e7542666e84f3"
  },
  {
    "url": "categories/FrontEnd/index.html",
    "revision": "b05fe4172ada5a1636742bf5d7e47a40"
  },
  {
    "url": "categories/FrontEnd/page/2/index.html",
    "revision": "3d017956145f561cb1c537d1b1000f01"
  },
  {
    "url": "categories/FrontEnd/page/3/index.html",
    "revision": "63de053900dd9d3c829580fc6b9cd688"
  },
  {
    "url": "categories/FrontEnd/page/4/index.html",
    "revision": "6afe13f02209ee1d1f96e1248a37be12"
  },
  {
    "url": "categories/index.html",
    "revision": "2a40cabf201520d2bbabf9a78d7765cd"
  },
  {
    "url": "categories/Others/index.html",
    "revision": "b13842995e95877f652ed8ba38479232"
  },
  {
    "url": "index.html",
    "revision": "8e583b999f5ed134d8607c79676c1ee8"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "cd532fdb2050b91b7aa65cad3c8a8729"
  },
  {
    "url": "record/index.html",
    "revision": "d7f953137582536d1daeb9abf6214b76"
  },
  {
    "url": "tag/Ajax/index.html",
    "revision": "4c8f84c0278f0204c77b98d8411d97b7"
  },
  {
    "url": "tag/Art-template/index.html",
    "revision": "eb63d827b6c1f88fe0c1e09ec4204e96"
  },
  {
    "url": "tag/BOM/index.html",
    "revision": "21739bb0dc403c884563e6397046b4cb"
  },
  {
    "url": "tag/Bootstrap/index.html",
    "revision": "8552181179172aaa21179ca296947cdc"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "043b483f8987c01d9662908361335f0a"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "107d465a386c92bf66b7d9abdede4b14"
  },
  {
    "url": "tag/Eclipse/index.html",
    "revision": "c80260bcc971eed3e8da4a0a00ffae21"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "e4e1d805d563e45ef7edd6eb9428d121"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "d315d2ff23eddc96e9d02a2e7a1c1e19"
  },
  {
    "url": "tag/Gitee/index.html",
    "revision": "b84d26ab19cfb5f6eb827adb0a8aad64"
  },
  {
    "url": "tag/Github Action/index.html",
    "revision": "73d0a09d12ab13bac82f4a96d1b4e3bb"
  },
  {
    "url": "tag/Github Pages/index.html",
    "revision": "65b67fe429c779d5147329af138fd91d"
  },
  {
    "url": "tag/Github/index.html",
    "revision": "0cf8aa8b9dde7d24a49598f2f18692dc"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "7fa515608fcbfb5547d6cecc1903e23d"
  },
  {
    "url": "tag/index.html",
    "revision": "c33f22c9306fa0e2dc65922fe8dbb67d"
  },
  {
    "url": "tag/Java Web/index.html",
    "revision": "867f9cb52479075155543442982729ed"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "8b4c41c3dd1d21cdfae80d717fa39d0f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2c8eb2dee7bb1aa1eece2aaa0e575b7d"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "300034417c112f8c0e43f55b7458a5fa"
  },
  {
    "url": "tag/Jdk/index.html",
    "revision": "a389c0948ff835614423afae254332f3"
  },
  {
    "url": "tag/JQuery/index.html",
    "revision": "eae02430667412b20f9ce647d77ee3a7"
  },
  {
    "url": "tag/Less/index.html",
    "revision": "7dc7fcbf0cf2d16fd9f3b5e46930323a"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "4b54e7ce60c33520795379c11d0d5042"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "e137c72ce19d1c5466b59d63b8d2ad9b"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "3f22ef1cf64c417a3d05ede18141569b"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "78ff72553a8637a4792860ae52211746"
  },
  {
    "url": "tag/Oracle/index.html",
    "revision": "59f3a52274d53a2a9942d3b8b4368e4f"
  },
  {
    "url": "tag/OracleDB/index.html",
    "revision": "e8c877f732b243e14c445d2b16a1bf3c"
  },
  {
    "url": "tag/Other/index.html",
    "revision": "b0029457121d723f9d37cb6c3d900feb"
  },
  {
    "url": "tag/ProjectPractice/index.html",
    "revision": "cf395445e6ebf4776860d88673421c8c"
  },
  {
    "url": "tag/Tomcat/index.html",
    "revision": "ac4197a5b3933e9f72f75ae70c73bba7"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "923955cabab6d269e88bfff40918bce2"
  },
  {
    "url": "tag/Web Design/index.html",
    "revision": "d6386f01051307cb298e7f5470d9edc8"
  },
  {
    "url": "tag/webReprint/index.html",
    "revision": "eb3aa926fe04458060dd3cc793c8adfc"
  },
  {
    "url": "tag/WebReprint/index.html",
    "revision": "a4f2df3a03418f391740cc0e5364c159"
  },
  {
    "url": "timeline/index.html",
    "revision": "1455894c860f2b0c0e69955d388c5e8c"
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
    "url": "web-img/sky.jpg",
    "revision": "3652888d27b229398c306d670592a071"
  },
  {
    "url": "web-img/summer.jpg",
    "revision": "ab206816fb98c6bf352dfa31edf552b3"
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
