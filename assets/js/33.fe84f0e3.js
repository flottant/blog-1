(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{630:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[t._v("JQuery 事件注册")]),t._v(" "),a("li",[t._v("JQuery 事件处理")]),t._v(" "),a("li",[t._v("JQuery 事件对象")])]),t._v(" "),a("h2",{attrs:{id:"jquery-事件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-事件注册"}},[t._v("#")]),t._v(" JQuery 事件注册")]),t._v(" "),a("p",[t._v("jQuery 为我们提供了方便的事件注册机制，优缺点如下：")]),t._v(" "),a("ul",[a("li",[t._v("优点: 操作简单，且不用担心事件覆盖等问题。")]),t._v(" "),a("li",[t._v("缺点: 普通的事件注册不能做事件委托，且无法实现事件解绑，需要借助其他方法。")])]),t._v(" "),a("p",[a("strong",[t._v("语法")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("事件类型和原生js基本一致 "),a("code",[t._v("mouseover")]),t._v(" , "),a("code",[t._v("mouseout")]),t._v(" , "),a("code",[t._v("blur")]),t._v(" , "),a("code",[t._v("focus")]),t._v(" , "),a("code",[t._v("keydown")]),t._v(" , "),a("code",[t._v("resize")]),t._v(" ...")]),t._v(" "),a("h2",{attrs:{id:"jquery-事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-事件处理"}},[t._v("#")]),t._v(" JQuery 事件处理")]),t._v(" "),a("p",[t._v("因为普通注册事件方法的不足，jQuery又开发了多个处理方法 ：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("on()")]),t._v(": 用于事件绑定，目前最好用的事件绑定方法")]),t._v(" "),a("li",[a("code",[t._v("off()")]),t._v(": 事件解绑")]),t._v(" "),a("li",[a("code",[t._v("trigger() / triggerHandler()")]),t._v(": 事件触发")])]),t._v(" "),a("h3",{attrs:{id:"事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),a("p",[t._v("因为普通注册事件方法的不足，jQuery又创建了多个新的事件绑定方法 "),a("code",[t._v("bind() / live() / delegate() / on()")]),t._v(" 等，其中最好用的是: "),a("code",[t._v("on()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 多事件绑定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mouseover")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mouseout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("click")]),t._v("\t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果事件处理程序相同")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mouseover mouseout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件委派")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ul"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在此之前有 bind() live() delegate()等方法处理事件委托 现以用 on() 替代")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态创建元素绑定")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>future elem</p>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"事件解绑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件解绑"}},[t._v("#")]),t._v(" 事件解绑")]),t._v(" "),a("p",[t._v("当某个事件上面的逻辑，在特定需求下不需要的时候，可以把该事件上的逻辑移除，这个过程我们称为事件解绑。jQuery 为我们提供 了多种事件解绑方法："),a("code",[t._v("die() / undelegate() / off()")]),t._v(" 等，甚至还有只触发一次的事件绑定方法 "),a("code",[t._v("one()")]),t._v(" ，在这里我们重点讲解一下 "),a("code",[t._v("off()")]),t._v(";")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("off()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解绑全部事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解绑指定事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ul"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("off")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"li"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解绑事件委托")]),t._v("\n")])])]),a("h3",{attrs:{id:"自定触发事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定触发事件"}},[t._v("#")]),t._v(" 自定触发事件")]),t._v(" "),a("p",[t._v("有些时候，在某些特定的条件下，我们希望某些事件能够自动触发, 比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。由此 jQuery 为我们提供了两个自动触发事件 "),a("code",[t._v("trigger()")]),t._v(" 和  "),a("code",[t._v("triggerHandler()")]),t._v(" ;")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("trigger()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("elemnet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("triggerHandler()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("triggerHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("triggerHandler()")]),t._v(" 不会触发元素的默认行为，如输入框获取焦点后，光标闪烁。")]),t._v(" "),a("h2",{attrs:{id:"jquery-事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-事件对象"}},[t._v("#")]),t._v(" JQuery 事件对象")]),t._v(" "),a("p",[t._v("jQuery 对DOM中的事件对象 event 进行了封装，兼容性更好，获取更方便，使用变化不大。事件被触发，就会有事件对象的产生。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("阻止默认行为："),a("code",[t._v("e.preventDefault()")])]),t._v(" "),a("li",[t._v("阻止冒泡："),a("code",[t._v("e.stopPropagation()")])])]),t._v(" "),a("h2",{attrs:{id:"jquery-拷贝对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-拷贝对象"}},[t._v("#")]),t._v(" JQuery 拷贝对象")]),t._v(" "),a("p",[t._v("如果想要把某个对象拷贝（合并）给另外一个对象使用，此时可以使用 "),a("code",[t._v("$.extend()")]),t._v(" 方法")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("$.extend()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("待拷贝对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("拷贝原件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("objectN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("deep")]),t._v(" ：拷贝深浅，默认浅拷贝\n"),a("ul",[a("li",[t._v("浅拷贝目标对象引用被拷贝对象的地址，修改目标对象"),a("strong",[t._v("会影响")]),t._v("被拷贝对象，对象嵌套")]),t._v(" "),a("li",[t._v("深拷贝完全克隆一份对象，修改目标对象"),a("strong",[t._v("不会影响")]),t._v("被拷贝对象，对象嵌套")])])]),t._v(" "),a("li",[a("code",[t._v("target")]),t._v(" ：需要拷贝的对象")]),t._v(" "),a("li",[a("code",[t._v("object")]),t._v(" ：待拷贝对象")]),t._v(" "),a("li",[a("code",[t._v("objectN")]),t._v(" ：复数拷贝")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"andy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("66666")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// msg 被拷贝地址，原对象和拷贝对象都指向一个内存地址")]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery-多库共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-多库共存"}},[t._v("#")]),t._v(" JQuery 多库共存")]),t._v(" "),a("p",[t._v("实际开发中，很多项目连续开发十多年，jQuery版本不断更新，最初的 jQuery 版本无法满足需求，这时就需要保证在旧有版本正常运行的情况下，新的功能使用新的jQuery版本实现，这种情况被称为，jQuery 多库共存。")]),t._v(" "),a("p",[t._v("可能存在这样的情况，其他 js 库或函数使用了 $ 符作为函数封装，这样就会与 JQuery 产生冲突，JQuery 为我们提供了解决方案")]),t._v(" "),a("ol",[a("li",[t._v("使用 "),a("code",[t._v("JQuery()")]),t._v("替代 "),a("code",[t._v("$()")])]),t._v(" "),a("li",[t._v("JQuery 释放 "),a("code",[t._v("$")]),t._v(" 符控制权："),a("code",[t._v("var Pick = $.noConfilict()")]),t._v(" ，这样我们就可以使用 "),a("code",[t._v("Pick()")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让jquery 释放对$ 控制权 让用自己决定")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" suibian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("noConflict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suibian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-插件"}},[t._v("#")]),t._v(" JQuery 插件")]),t._v(" "),a("p",[t._v("jQuery 功能比较有限，想要更复杂的特效效果，可以借助于 jQuery 插件完成。 这些插件也是依赖于 jQuery 来完成的，所以必须要先引入 jQuery 文件，因此也称为 jQuery 插件。")]),t._v(" "),a("p",[t._v("jQuery 插件常用的网站：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.jq22.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JQuery插件库"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.htmleaf.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JQuery之家"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"综合案例-todolist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综合案例-todolist"}},[t._v("#")]),t._v(" 综合案例 toDoList")]),t._v(" "),a("p",[a("strong",[t._v("需求")])]),t._v(" "),a("ol",[a("li",[t._v("文本框里面输入内容，按下回车，就可以生成待办事项。")]),t._v(" "),a("li",[t._v("点击待办事项复选框，就可以把当前数据添加到已完成事项里面。")]),t._v(" "),a("li",[t._v("点击已完成事项复选框，就可以把当前数据添加到待办事项里面。")]),t._v(" "),a("li",[t._v("页面刷新内容不会丢失。")])]),t._v(" "),a("p",[a("strong",[t._v("分析")])]),t._v(" "),a("ol",[a("li",[t._v("刷新页面不会丢失数据，因此需要用到本地存储 "),a("code",[t._v("localStorage")])]),t._v(" "),a("li",[t._v("不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新关闭页面不会丢失数据")]),t._v(" "),a("li",[t._v("存储的数据格式："),a("code",[t._v("var todolist = [{ title : ‘xxx’, done: false}]")])]),t._v(" "),a("li",[t._v("注意点1： 本地存储 "),a("code",[t._v("localStorage")]),t._v(" 里面只能存储字符串格式 ，因此需要把对象转换为字符串 "),a("code",[t._v("JSON.stringify(data)")]),t._v("。")]),t._v(" "),a("li",[t._v("注意点2： 获取本地存储数据，需要把里面的字符串转换为对象格式 "),a("code",[t._v("JSON.parse()")]),t._v(" 我们才能使用里面的数据。")])]),t._v(" "),a("p",[a("strong",[t._v("功能实现")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("新添todo")])]),t._v(" "),a("ol",[a("li",[t._v("切记： 页面中的数据，都要从本地存储里面获取，这样刷新页面不会丢失数据，所以先要把数据保存到本地存储里面。")]),t._v(" "),a("li",[t._v("利用事件对象 "),a("code",[t._v(".keyCode")]),t._v(" 判断用户按下回车键（13）。")]),t._v(" "),a("li",[t._v("声明一个数组，保存数据。")]),t._v(" "),a("li",[t._v("先要读取本地存储原来的数据（声明函数 "),a("code",[t._v("getData()")]),t._v(" ），放到这个数组里面。")]),t._v(" "),a("li",[t._v("之后把最新从表单获取过来的数据，追加到数组里面。")]),t._v(" "),a("li",[t._v("最后把数组存储给本地存储 (声明函数 "),a("code",[t._v("savaDate()")]),t._v(" )")])]),t._v(" "),a("p",[a("strong",[t._v("加载todo")])]),t._v(" "),a("ol",[a("li",[t._v("因为后面也会经常渲染加载操作，所以声明一个函数 "),a("code",[t._v("load")]),t._v(" ，方便后面调用")]),t._v(" "),a("li",[t._v("先要读取本地存储数据。（数据不要忘记转换为对象格式）")]),t._v(" "),a("li",[t._v("之后遍历这个数据（ "),a("code",[t._v("$.each()")]),t._v(" ），有几条数据，就生成几个小 "),a("code",[t._v("li")]),t._v(" 添加到 "),a("code",[t._v("ol")]),t._v(" 里面")]),t._v(" "),a("li",[t._v("每次渲染之前，先把原先里面 "),a("code",[t._v("ol")]),t._v(" 的内容清空，然后渲染加载最新的数据")])]),t._v(" "),a("p",[a("strong",[t._v("删除todo")])]),t._v(" "),a("ol",[a("li",[t._v("点击里面的a链接，不是删除的 "),a("code",[t._v("li")]),t._v(" ，而是删除本地存储对应的数据。")]),t._v(" "),a("li",[t._v("先获取本地存储数据，删除对应的数据，保存给本地存储，重新渲染列表li")]),t._v(" "),a("li",[t._v("我们可以给链接自定义属性记录当前的索引号")]),t._v(" "),a("li",[t._v("根据这个索引号删除相关的数据----数组的 "),a("code",[t._v("splice(i, 1)")]),t._v(" 方法")]),t._v(" "),a("li",[t._v("存储修改后的数据，然后存储给本地存储")]),t._v(" "),a("li",[t._v("重新渲染加载数据列表")]),t._v(" "),a("li",[t._v("因为a是动态创建的，我们使用 "),a("code",[t._v("on()")]),t._v(" 绑定事件")])]),t._v(" "),a("p",[a("strong",[t._v("完成todo")])]),t._v(" "),a("ol",[a("li",[t._v("当我们点击了小的复选框，修改本地存储数据，再重新渲染数据列表。")]),t._v(" "),a("li",[t._v("点击之后，获取本地存储数据。")]),t._v(" "),a("li",[t._v("修改对应数据属性 "),a("code",[t._v("done")]),t._v(" 为当前复选框的 "),a("code",[t._v("checked")]),t._v(" 状态。")]),t._v(" "),a("li",[t._v("之后保存数据到本地存储")]),t._v(" "),a("li",[t._v("重新渲染加载数据列表")]),t._v(" "),a("li",[a("code",[t._v("load")]),t._v(" 加载函数里面，新增一个条件,如果当前数据的 "),a("code",[t._v("done")]),t._v(" 为 "),a("code",[t._v("true")]),t._v(" 就是已经完成的，就把列表渲染加载到 "),a("code",[t._v("ul")]),t._v(" 里面")]),t._v(" "),a("li",[t._v("如果当前数据的 "),a("code",[t._v("done")]),t._v(" 为 "),a("code",[t._v("false")]),t._v(" ， 则是待办事项，就把列表渲染加载到 "),a("code",[t._v("ol")]),t._v(" 里面")])]),t._v(" "),a("p",[a("strong",[t._v("统计todo")])]),t._v(" "),a("ol",[a("li",[t._v("在我们 "),a("code",[t._v("load")]),t._v(" 函数里面操作")]),t._v(" "),a("li",[t._v("声明2个变量 ："),a("code",[t._v("todoCount")]),t._v(" 待办个数  "),a("code",[t._v("doneCount")]),t._v(" 已完成个数")]),t._v(" "),a("li",[t._v("当进行遍历本地存储数据的时候， 如果 数据 "),a("code",[t._v("done")]),t._v(" 为 "),a("code",[t._v("false")]),t._v(" ， 则 "),a("code",[t._v("todoCount++")]),t._v(" , 否则 "),a("code",[t._v("doneCount++")])]),t._v(" "),a("li",[t._v("最后修改相应的元素 "),a("code",[t._v("text()")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);