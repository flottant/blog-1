(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{636:function(t,a,s){"use strict";s.r(a);var _=s(3),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("所谓流式布局，即指使用 百分比% 作为元素单位，从而实现适配不同屏幕尺寸")]),t._v(" "),s("ul",[s("li",[t._v("移动端网页开发现状")]),t._v(" "),s("li",[t._v("视口")])]),t._v(" "),s("h2",{attrs:{id:"_1-0-移动端基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-移动端基础"}},[t._v("#")]),t._v(" 1.0 移动端基础")]),t._v(" "),s("h3",{attrs:{id:"_1-1浏览器现状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1浏览器现状"}},[t._v("#")]),t._v(" 1.1浏览器现状")]),t._v(" "),s("p",[t._v("PC端常见浏览器：360浏览器、谷歌浏览器、火狐浏览器、QQ浏览器、百度浏览器、搜狗浏览器、IE浏览器。")]),t._v(" "),s("p",[t._v("移动端常见浏览器：UC浏览器，QQ浏览器，欧朋浏览器，百度手机浏览器，360安全浏览器，谷歌浏览器，搜狗手机浏览器，猎豹浏览器，以及其他杂牌浏览器。")]),t._v(" "),s("p",[t._v("国内的UC和QQ，百度等手机浏览器都是根据Webkit修改过来的内核，国内尚无自主研发的内核，就像国内的手机操作系统都是基于Android修改开发的一样。")]),t._v(" "),s("p",[s("strong",[t._v("总结：兼容移动端主流浏览器，处理Webkit内核浏览器即可。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-手机屏幕的现状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-手机屏幕的现状"}},[t._v("#")]),t._v(" 1.2 手机屏幕的现状")]),t._v(" "),s("ul",[s("li",[t._v("移动端设备屏幕尺寸非常多，碎片化严重。")]),t._v(" "),s("li",[t._v("Android设备有多种分辨率：480x800, 480x854, 540x960, 720x1280，1080x1920等，近年来也出现了2K，4k屏。")]),t._v(" "),s("li",[t._v("近年来iPhone的碎片化也加剧了，其设备的主要分辨率有：640x960, 640x1136, 750x1334, 1242x2208等。")]),t._v(" "),s("li",[t._v("作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是 px 。")])]),t._v(" "),s("h3",{attrs:{id:"_1-3常见移动端屏幕尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3常见移动端屏幕尺寸"}},[t._v("#")]),t._v(" 1.3常见移动端屏幕尺寸")]),t._v(" "),s("h3",{attrs:{id:"_1-4移动端调试方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4移动端调试方法"}},[t._v("#")]),t._v(" 1.4移动端调试方法")]),t._v(" "),s("ul",[s("li",[t._v("Chrome DevTools（谷歌浏览器）的模拟手机调试")]),t._v(" "),s("li",[t._v("搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器")]),t._v(" "),s("li",[t._v("使用外网服务器，直接IP或域名访问")])]),t._v(" "),s("h2",{attrs:{id:"_2-0-视口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-视口"}},[t._v("#")]),t._v(" 2.0 视口")]),t._v(" "),s("p",[t._v("视口（viewport）就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口")]),t._v(" "),s("h3",{attrs:{id:"_2-1-布局视口-layout-viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-布局视口-layout-viewport"}},[t._v("#")]),t._v(" 2.1 布局视口 layout viewport")]),t._v(" "),s("p",[t._v("一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题。")]),t._v(" "),s("p",[t._v("iOS, Android基本都将这个视口分辨率设置为 980px，所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。")]),t._v(" "),s("img",{attrs:{src:"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200811153044.png"}}),t._v(" "),s("h3",{attrs:{id:"_2-2-视觉视口-visual-viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-视觉视口-visual-viewport"}},[t._v("#")]),t._v(" 2.2 视觉视口 visual viewport")]),t._v(" "),s("p",[t._v("字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。")]),t._v(" "),s("p",[t._v("我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。")]),t._v(" "),s("img",{attrs:{src:"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200811153050.png"}}),t._v(" "),s("h3",{attrs:{id:"_2-3-理想视口-ideal-viewport"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-理想视口-ideal-viewport"}},[t._v("#")]),t._v(" 2.3 理想视口 ideal viewport")]),t._v(" "),s("p",[t._v("为了使网站在移动端有最理想的浏览和阅读宽度而设定")]),t._v(" "),s("p",[t._v("理想视口，对设备来讲，是最理想的视口尺寸")]),t._v(" "),s("p",[t._v("需要手动添写meta视口标签通知浏览器操作")]),t._v(" "),s("p",[t._v("meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽")]),t._v(" "),s("p",[s("strong",[t._v("总结：我们开发最终会用理想视口，而理想视口就是将布局视口的宽度修改为视觉视口")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-meta标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-meta标签"}},[t._v("#")]),t._v(" 2.4 meta标签")]),t._v(" "),s("p",[t._v("最标准的viewport设置")]),t._v(" "),s("ul",[s("li",[t._v("视口宽度和设备保持一致")]),t._v(" "),s("li",[t._v("视口的默认缩放比例1.0")]),t._v(" "),s("li",[t._v("不允许用户自行缩放")]),t._v(" "),s("li",[t._v("最大允许的缩放比例1.0")]),t._v(" "),s("li",[t._v("最小允许的缩放比例1.0")])]),t._v(" "),s("h3",{attrs:{id:"_3-0-二倍图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-二倍图"}},[t._v("#")]),t._v(" 3.0 二倍图")]),t._v(" "),s("h4",{attrs:{id:"_3-1-物理像素-物理像素比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-物理像素-物理像素比"}},[t._v("#")]),t._v(" 3.1 物理像素&物理像素比")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的。这是厂商在出厂时就设置好了,比如苹果6 是  "),s("code",[t._v("750* 1334")])]),t._v(" "),s("p",[t._v("我们开发时候的"),s("code",[t._v("1px")]),t._v(" 不是一定等于1个物理像素的")]),t._v(" "),s("p",[t._v("一个"),s("code",[t._v("px")]),t._v("的能显示的物理像素点的个数，称为物理像素比或屏幕像素比")]),t._v(" "),s("p",[t._v("如果把1张"),s("code",[t._v("100*100")]),t._v("的图片放到手机里面会按照物理像素比给我们缩放")]),t._v(" "),s("p",[t._v("lRetina（视网膜屏幕）是一种显示技术，可以将把更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。")]),t._v(" "),s("p",[t._v("对于一张 "),s("code",[t._v("50px * 50px")]),t._v(" 的图片,在手机或 Retina 屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊")]),t._v(" "),s("p",[t._v("在标准的 "),s("code",[t._v("viewport")]),t._v(" 设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题")]),t._v(" "),s("p",[t._v("通常使用二倍图， 因为iPhone 6 的影响背景图片 注意缩放问题")]),t._v(" "),s("h4",{attrs:{id:"_3-2-背景缩放background-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-背景缩放background-size"}},[t._v("#")]),t._v(" 3.2 背景缩放background-size")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("background-size 属性规定背景图像的尺寸")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 背景图片宽度 背景图片高度"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("单位： 长度|百分比|cover|contain;")]),t._v(" "),s("p",[s("code",[t._v("cover")]),t._v("：把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。")]),t._v(" "),s("p",[s("code",[t._v("contain")]),t._v(" ：把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域")]),t._v(" "),s("h3",{attrs:{id:"_4-0-移动开发选择和技术解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-移动开发选择和技术解决方案"}},[t._v("#")]),t._v(" 4.0 移动开发选择和技术解决方案")]),t._v(" "),s("h4",{attrs:{id:"_4-1-移动端主流方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-移动端主流方案"}},[t._v("#")]),t._v(" 4.1 移动端主流方案")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("1. 单独制作移动端页面（主流）")])]),t._v(" "),s("p",[t._v("通常情况下，网址域名前面加 m(mobile)\n可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。")]),t._v(" "),s("p",[t._v("也就是说，PC端和移动端为两套网站，pc端是pc断的样式，移动端在写一套，专门针对移动端适配的一套网站")]),t._v(" "),s("p",[t._v("京东PC端："),s("a",{attrs:{href:"https://www.jd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jd.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("京东移动端："),s("a",{attrs:{href:"https://m.jd.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://m.jd.com/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("2.响应式页面兼容移动端（其次）")])]),t._v(" "),s("p",[t._v("三星中国官网："),s("a",{attrs:{href:"https://www.samsung.com/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.samsung.com/cn/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("响应式网站：即PC和移动端共用一套网站，只不过在不同屏幕下，样式会自动适配")]),t._v(" "),s("h4",{attrs:{id:"_4-2-移动端技术解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-移动端技术解决方案"}},[t._v("#")]),t._v(" 4.2 移动端技术解决方案")]),t._v(" "),s("p",[s("strong",[t._v("1.移动端浏览器兼容问题")])]),t._v(" "),s("p",[t._v("移动端浏览器基本以 webkit 内核为主，因此我们就考虑webkit兼容性问题。")]),t._v(" "),s("p",[t._v("我们可以放心使用 H5 标签和 CSS3 样式。")]),t._v(" "),s("p",[t._v("同时我们浏览器的私有前缀我们只需要考虑添加 webkit 即可")]),t._v(" "),s("p",[s("strong",[t._v("2.移动端公共样式")])]),t._v(" "),s("p",[t._v("移动端 CSS 初始化推荐使用 "),s("code",[t._v("normalize.css")])]),t._v(" "),s("p",[t._v("Normalize.css：保护了有价值的默认值")]),t._v(" "),s("p",[t._v("Normalize.css：修复了浏览器的bug")]),t._v(" "),s("p",[t._v("Normalize.css：是模块化的")]),t._v(" "),s("p",[t._v("Normalize.css：拥有详细的文档")]),t._v(" "),s("p",[t._v("官网地址： "),s("a",{attrs:{href:"http://necolas.github.io/normalize.css/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://necolas.github.io/normalize.css/"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_4-3-移动端大量使用-css3盒子模型box-sizin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-移动端大量使用-css3盒子模型box-sizin"}},[t._v("#")]),t._v(" 4.3 移动端大量使用 CSS3盒子模型box-sizin")]),t._v(" "),s("p",[t._v("传统模式宽度计算：盒子的宽度 = CSS中设置的width + border + padding")]),t._v(" "),s("p",[t._v("CSS3盒子模型： 盒子的宽度=  CSS中设置的宽度width 里面包含了 border 和 padding")]),t._v(" "),s("p",[t._v("也就是说，我们的CSS3中的盒子模型， padding 和 border 不会撑大盒子了")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*CSS3盒子模型*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*传统盒子模型*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("移动端可以全部CSS3 盒子模型")]),t._v(" "),s("p",[t._v("PC端如果完全需要兼容，我们就用传统模式，如果不考虑兼容性，我们就选择 CSS3 盒子模型")]),t._v(" "),s("h4",{attrs:{id:"_4-4移动端特殊样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4移动端特殊样式"}},[t._v("#")]),t._v(" 4.4移动端特殊样式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*CSS3盒子模型*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-sizing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*点击高亮我们需要清除清除  设置为transparent 完成透明*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-tap-highlight-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transparent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-appearance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*禁用长按页面时的弹出菜单*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img,a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-touch-callout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-0移动端常见布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-0移动端常见布局"}},[t._v("#")]),t._v(" 5.0移动端常见布局")]),t._v(" "),s("p",[t._v("移动端单独制作")]),t._v(" "),s("ul",[s("li",[t._v("流式布局（百分比布局）")]),t._v(" "),s("li",[t._v("flex 弹性布局（强烈推荐）")]),t._v(" "),s("li",[t._v("less+rem+媒体查询布局")]),t._v(" "),s("li",[t._v("混合布局")])]),t._v(" "),s("p",[t._v("响应式")]),t._v(" "),s("ul",[s("li",[t._v("媒体查询")]),t._v(" "),s("li",[t._v("bootstarp")])]),t._v(" "),s("h2",{attrs:{id:"_3-0-流式布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-流式布局"}},[t._v("#")]),t._v(" 3.0 流式布局")]),t._v(" "),s("p",[t._v("流式布局，就是百分比布局，也称非固定像素布局。")]),t._v(" "),s("p",[t._v("通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。")]),t._v(" "),s("p",[t._v("流式布局方式是移动web开发使用的比较常见的布局方式。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-0-京东移动端首页案例制作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-京东移动端首页案例制作"}},[t._v("#")]),t._v(" 4.0 京东移动端首页案例制作")]),t._v(" "),s("p",[t._v("京东为移动端采用单独的页面样式，并使用了典型的流式布局方案。")]),t._v(" "),s("blockquote",[s("p",[t._v("source："),s("a",{attrs:{href:"https://github.com/QiJieH/WebReprint/tree/master/mjd",target:"_blank",rel:"noopener noreferrer"}},[t._v("京东移动端静态页面复刻"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);