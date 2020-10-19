(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{626:function(t,e,a){"use strict";a.r(e);var _=a(3),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("h3",{attrs:{id:"_1-css-加载阻塞问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-加载阻塞问题"}},[t._v("#")]),t._v(" 1. css 加载阻塞问题")]),t._v(" "),a("p",[a("strong",[t._v("问题：")])]),t._v(" "),a("ul",[a("li",[t._v("css 加载是否会阻塞 html 和 javascript ？")])]),t._v(" "),a("p",[a("strong",[t._v("结论：")])]),t._v(" "),a("ol",[a("li",[t._v("css 加载不会阻塞 DOM 树解析")]),t._v(" "),a("li",[t._v("css 加载会阻塞 DOM 树渲染")]),t._v(" "),a("li",[t._v("css 加载会阻塞 JavaScript 的运行")])]),t._v(" "),a("p",[a("strong",[t._v("分析：")])]),t._v(" "),a("p",[t._v("浏览器解析网页流程图：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200812212524.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("根据流程图，HTML 和 CSS 同步解析，所以 css 不会阻塞 DOM 解析，但是在渲染 DOM 树时需要 css 文件进行渲染，所以  css 加载会阻塞 DOM 渲染，最后 JavaScript 想要操作 DOM 节点，修改节点样式同样需要 DOM 树渲染完成后才能执行，所以 css 加载间接阻塞了 JavaScript 的执行。")]),t._v(" "),a("h3",{attrs:{id:"_2-innerhtml-效率问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-innerhtml-效率问题"}},[t._v("#")]),t._v(" 2. innerHTML 效率问题")]),t._v(" "),a("p",[a("strong",[t._v("问题：")])]),t._v(" "),a("ul",[a("li",[t._v("三种动态创建页面元素的方法中，哪个效率最高？")])]),t._v(" "),a("p",[a("strong",[t._v("结论：")])]),t._v(" "),a("p",[t._v("使用数组追加方式执行的 innerHTML 效率最高。")]),t._v(" "),a("p",[a("strong",[t._v("分析：")])]),t._v(" "),a("p",[t._v("一般情况下使用字符串拼接形式的 innerHTML 的效率是最底下的，但是改用数组方式进行字符串拼接这种方式能将 innerHTML 效率提至最高。")]),t._v(" "),a("h3",{attrs:{id:"_3-事件委托原理问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件委托原理问题"}},[t._v("#")]),t._v(" 3. 事件委托原理问题")]),t._v(" "),a("p",[a("strong",[t._v("问题：")])]),t._v(" "),a("ul",[a("li",[t._v("请简述事件委托 实现方式/原理 。")])]),t._v(" "),a("p",[a("strong",[t._v("结论：")])]),t._v(" "),a("ul",[a("li",[t._v("不为每个子节点单独设置事件监听器，而是将事件监听器设置在其父节点上，然后利用冒泡原理捕获子节点事件，并提供事件属性判断是哪一个子节点被点击，并作出相应动作。")])]),t._v(" "),a("p",[t._v("分析：")]),t._v(" "),a("p",[t._v("事件冒泡特性，指事件会从事件源元素逐级往上传递，通过设置事件监听器捕获该事件。详见 DOM 事件 > 事件委托")]),t._v(" "),a("h3",{attrs:{id:"_4-浏览器内核理解问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器内核理解问题"}},[t._v("#")]),t._v(" 4. 浏览器内核理解问题")]),t._v(" "),a("p",[t._v("浏览器内核包括两部分，渲染引擎（Rendering Engine）和 js 引擎。渲染引擎负责读取网页内容，整理讯息，计算网页的显示方式并显示页面，js引擎是解析执行js获取网页的动态效果。 后来 js 引擎越来越独立，内核就倾向于只指渲染引擎。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("浏览器")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("内核")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Trident")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IE、猎豹安全、360极速浏览器、百度浏览器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("firefox")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Gecko")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("flash 的落幕，firefox 也开始进入夕阳")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Safari")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("webkit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("苹果研发的内核，在移动端被大量使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("chrome")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Chromium/Blink")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用Blink内核。二次开发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Opera")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("blink")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("现在跟随chrome用blink内核。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Edge")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Chromium")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("新版Edge目前受到了大量的好评")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);