(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{624:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[t._v("JQuery 属性操作")]),t._v(" "),a("li",[t._v("JQuery 文本内容")]),t._v(" "),a("li",[t._v("JQuery 节点操作")]),t._v(" "),a("li",[t._v("JQuery 尺寸位置")])]),t._v(" "),a("h2",{attrs:{id:"jquery-属性操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-属性操作"}},[t._v("#")]),t._v(" JQuery 属性操作")]),t._v(" "),a("p",[t._v("jQuery 常用属性操作有三种")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("prop()")])]),t._v(" "),a("li",[a("code",[t._v("attr()")])]),t._v(" "),a("li",[a("code",[t._v("data()")])])]),t._v(" "),a("h3",{attrs:{id:"prop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop"}},[t._v("#")]),t._v(" prop()")]),t._v(" "),a("p",[t._v("固有属性操作")]),t._v(" "),a("p",[t._v("所谓元素固有属性就是元素本身自带的属性，比如 "),a("code",[t._v("<a>")]),t._v(" 元素里面的 "),a("code",[t._v("href")]),t._v(" ，比如 "),a("code",[t._v("<input>")]),t._v(" 元素里面的 "),a("code",[t._v("type")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("语法")])]),t._v(" "),a("ol",[a("li",[t._v("获取属性")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("设置属性")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("prop() 除了普通属性操作，更适合操作表单属性："),a("code",[t._v("disabled / checked / selected")]),t._v(" 等。")]),t._v(" "),a("h3",{attrs:{id:"attr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attr"}},[t._v("#")]),t._v(" attr()")]),t._v(" "),a("p",[t._v("自定义属性操作")]),t._v(" "),a("p",[t._v("用户自己给元素添加的属性，我们称为自定义属性。 比如给 "),a("code",[t._v("div")]),t._v(" 添加 "),a("code",[t._v("index =“1”")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("语法")])]),t._v(" "),a("ol",[a("li",[t._v("获取属性")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似原生 getAttribute()")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("设置属性")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"属性值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setAttribute()")]),t._v("\n")])])]),a("p",[t._v("attr() 除了普通属性操作，更适合操作自定义属性。（该方法也可以获取 H5 自定义属性）")]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data()")]),t._v(" "),a("p",[t._v("数据缓存")]),t._v(" "),a("p",[a("code",[t._v("data()")]),t._v(" 方法可以在指定的元素上存取数据，并不会修改 DOM 元素结构。一旦页面刷新，之前存放的数据都将被移除。")]),t._v(" "),a("p",[a("strong",[t._v("语法")])]),t._v(" "),a("ol",[a("li",[t._v("附加数据")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("获取数据")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery-文本属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-文本属性"}},[t._v("#")]),t._v(" JQuery 文本属性")]),t._v(" "),a("p",[t._v("jQuery的文本属性值常见操作有三种："),a("code",[t._v("html() / text() / val()")]),t._v("  分别对应JS中的 "),a("code",[t._v("innerHTML innerText value")]),t._v(" 属性。")]),t._v(" "),a("h3",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html()")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改")]),t._v("\n")])])]),a("h3",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" text()")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改")]),t._v("\n")])])]),a("h3",{attrs:{id:"val"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#val"}},[t._v("#")]),t._v(" val()")]),t._v(" "),a("p",[t._v("表单值操作")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改")]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery-节点操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-节点操作"}},[t._v("#")]),t._v(" JQuery 节点操作")]),t._v(" "),a("p",[t._v("jQuery 元素操作主要讲的是用jQuery方法，操作标签的遍历、创建、添加、删除等操作。")]),t._v(" "),a("h3",{attrs:{id:"遍历元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历元素"}},[t._v("#")]),t._v(" 遍历元素")]),t._v(" "),a("p",[t._v("jQuery 隐式迭代是对同一类元素做了同样的操作。 如果想要给同一类元素做不同操作，就需要用到遍历。")]),t._v(" "),a("p",[a("strong",[t._v("语法1")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domEle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("function")]),t._v(" ：回调函数\n"),a("ul",[a("li",[a("code",[t._v("index")]),t._v(" ：元素索引号")]),t._v(" "),a("li",[a("code",[t._v("domEle")]),t._v(" ：DOM 元素对象")])])])]),t._v(" "),a("p",[t._v("此方法用于遍历 jQuery 对象中的每一项，回调函数中元素为 DOM 对象，想要使用 jQuery 方法需要转换 "),a("code",[t._v("$(domEle)")]),t._v(" 。")]),t._v(" "),a("p",[a("strong",[t._v("语法2")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domEle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("$.each()")]),t._v(" 方法可以用于遍历任何对象。主要用于数据处理，比如数组，对象。")]),t._v(" "),a("h3",{attrs:{id:"增删元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增删元素"}},[t._v("#")]),t._v(" 增删元素")]),t._v(" "),a("p",[t._v("jQuery方法操作元素的创建、添加、删除方法很多，则重点使用部分，如下：")]),t._v(" "),a("p",[a("strong",[t._v("创建")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<li></li>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("内部添加")]),t._v(" 父子添加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("把内容放入匹配元素内部的最后面，类似原生 "),a("code",[t._v("appendChild")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("把内容放入匹配元素最前面")]),t._v(" "),a("p",[a("strong",[t._v("外部添加")]),t._v(" 兄弟添加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把内容放入目标元素后面")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"内容"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把内容放入目标元素前面")]),t._v("\n")])])]),a("p",[a("strong",[t._v("删除元素")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除匹配元素本身")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("empty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除匹配元素内子节点")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情况匹配元素内子节点")]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery-尺寸操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-尺寸操作"}},[t._v("#")]),t._v(" JQuery 尺寸操作")]),t._v(" "),a("p",[t._v("jQuery 尺寸操作包括元素宽高的获取和设置，且不一样的API对应不一样的盒子模型。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("语法")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("width() / height()")])]),t._v(" "),a("td",[t._v("取得匹配元素的宽高度 只算 width / height")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("innerWidth() / innerHeight()")])]),t._v(" "),a("td",[t._v("取得匹配元素的宽高度 包含 padding")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("outerWidth() / outerHeight()")])]),t._v(" "),a("td",[t._v("取得匹配元素的宽高度 包含 padding border")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("outerWidth(true) / outerHeight(true)")])]),t._v(" "),a("td",[t._v("取得匹配元素的宽高度 包含 padding border margin")])])])]),t._v(" "),a("p",[t._v("有了这套 API 我们将可以快速获取盒子的宽高，至于其他属性想要获取和设置，还要使用 css() 等方法配合")]),t._v(" "),a("h2",{attrs:{id:"jquery-位置操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-位置操作"}},[t._v("#")]),t._v(" JQuery 位置操作")]),t._v(" "),a("p",[t._v("jQuery的位置操作主要有三个： "),a("code",[t._v("offset()、position()、scrollTop()/scrollLeft()")]),t._v(", 具体介绍如下:")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("offset()")])])]),t._v(" "),a("ul",[a("li",[t._v("设置或返回被选元素相对于文档的偏移坐标，和父级无关")]),t._v(" "),a("li",[t._v("该方法有两个属性 "),a("code",[t._v("left")]),t._v(" , "),a("code",[t._v("top")]),t._v(" 。"),a("code",[t._v("offset().top")]),t._v(" 用于获取距离文档顶部的距离，"),a("code",[t._v("offset().left")]),t._v(" 用于获取距离文档左侧的距离。")]),t._v(" "),a("li",[t._v("设置元素偏移 ： "),a("code",[t._v("offset({top:10,left:10})")])])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("position()")])])]),t._v(" "),a("ul",[a("li",[t._v("返回被选元素相对于带有定位的父级偏移坐标，如果父级没有定位，这相对于文档。")]),t._v(" "),a("li",[t._v("该方法有两个属性值 "),a("code",[t._v("left")]),t._v(" "),a("code",[t._v("top")])]),t._v(" "),a("li",[t._v("该方法只能获取")])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("scrollTop() / scrollLeft()")])])]),t._v(" "),a("ul",[a("li",[t._v("设置或返回被选元素被卷去的头部")]),t._v(" "),a("li",[t._v("设置 "),a("code",[t._v("scrollTop(100)")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);