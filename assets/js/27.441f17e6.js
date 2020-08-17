(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{624:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"函数的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的概念"}},[t._v("#")]),t._v(" 函数的概念")]),t._v(" "),a("p",[t._v("在 JS 里面，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。虽然 for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用 JS 中的函数。")]),t._v(" "),a("p",[t._v("函数：就是"),a("strong",[t._v("封装了一段可被重复调用执行的代码块")]),t._v("。通过此代码块可以"),a("strong",[t._v("实现大量代码的重复使用")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"函数的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的使用"}},[t._v("#")]),t._v(" 函数的使用")]),t._v(" "),a("h3",{attrs:{id:"声明函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明函数"}},[t._v("#")]),t._v(" 声明函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//函数体代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("function 是声明函数的关键字,必须小写")]),t._v(" "),a("li",[t._v("由于函数一般是为了实现某个功能才定义的， 所以通常我们将函数名命名为动词，比如 getSum")])]),t._v(" "),a("h3",{attrs:{id:"调用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用函数"}},[t._v("#")]),t._v(" 调用函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过调用函数名来执行函数体代码")]),t._v("\n")])])]),a("ul",[a("li",[t._v("调用的时候千万不要忘记添加小括号")]),t._v(" "),a("li",[t._v("声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。")])]),t._v(" "),a("h3",{attrs:{id:"函数封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数封装"}},[t._v("#")]),t._v(" 函数封装")]),t._v(" "),a("p",[t._v("函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n   计算1-100之间值的函数 函数封装示例\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sumNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 准备一个变量，保存数字和")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sumNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把每个数值 都累加 到变量中")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sumNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"函数的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的参数"}},[t._v("#")]),t._v(" 函数的参数")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("形参：函数定义时设置接收调用时传入")])]),t._v(" "),a("li",[a("p",[t._v("实参：函数调用时传入小括号内的真实数据")])])]),t._v(" "),a("p",[t._v("参数的作用 : 在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带参数的函数声明")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("形参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 形参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 形参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以定义任意多的参数，用逗号分隔")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数体")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带参数的函数调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("实参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 实参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 实参"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("ol",[a("li",[t._v("调用的时候实参值是传递给形参的")]),t._v(" "),a("li",[t._v("形参简单理解为：不用声明的变量")]),t._v(" "),a("li",[t._v("实参和形参的多个参数之间用逗号（,）分隔")])]),t._v(" "),a("p",[a("strong",[t._v("函数形参和实参数量不匹配时")])]),t._v(" "),a("ul",[a("li",[t._v("实参等于形参\n"),a("ul",[a("li",[t._v("输出正确结果")])])]),t._v(" "),a("li",[t._v("实参个数多余形参个数\n"),a("ul",[a("li",[t._v("只取到形参个数")])])]),t._v(" "),a("li",[t._v("实参个数小于形参个数\n"),a("ul",[a("li",[t._v("多的形参定义为 "),a("code",[t._v("Undefined")]),t._v(" ，结果为 "),a("code",[t._v("NaN")])])])])]),t._v(" "),a("h2",{attrs:{id:"函数的返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的返回值"}},[t._v("#")]),t._v(" 函数的返回值")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("return")])])]),t._v(" "),a("p",[t._v("返回值：函数调用整体代表的数据；函数执行完成后可以通过return语句将指定数据返回 。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" 函数名（）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  需要返回的值；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数名")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时调用函数就可以得到函数体内return 后面的值")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在使用 return 语句时，函数会停止执行，并返回指定的值")]),t._v(" "),a("li",[t._v("如果函数没有 return ，返回的值是 undefined")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("break")]),t._v(" , "),a("code",[t._v("continue")]),t._v(" , "),a("code",[t._v("return")]),t._v(" 的区别：")]),t._v(" "),a("ul",[a("li",[t._v("break ：结束当前的循环体（如 for、while）")]),t._v(" "),a("li",[t._v("continue ：跳出本次循环，继续执行下次循环（如 for、while）")]),t._v(" "),a("li",[t._v("return ：不仅可以退出循环，还能够返回 return 语句中的值，同时还可以结束当前的函数体内的代码")])])]),t._v(" "),a("h2",{attrs:{id:"arguments-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-的使用"}},[t._v("#")]),t._v(" arguments 的使用")]),t._v(" "),a("p",[t._v("当不确定有多少个参数传递的时候，可以用 arguments 来获取。")]),t._v(" "),a("p",[t._v("JavaScript 中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个 arguments 对象，arguments 对象中存储了传递的所有实参。arguments展示形式是一个伪数组，因此可以进行遍历。")]),t._v(" "),a("p",[t._v("伪数组具有以下特点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("具有 length 属性")])]),t._v(" "),a("li",[a("p",[t._v("按索引方式储存数据")])]),t._v(" "),a("li",[a("p",[t._v("不具有数组的 push , pop 等方法")])])]),t._v(" "),a("h2",{attrs:{id:"函数复调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数复调"}},[t._v("#")]),t._v(" 函数复调")]),t._v(" "),a("p",[t._v("函数内部可以调用另一个函数，在同一作用域代码中，函数名即代表封装的操作，使用函数名加括号即可以将封装的操作执行。")]),t._v(" "),a("h2",{attrs:{id:"函数的两种声明方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数的两种声明方式"}},[t._v("#")]),t._v(" 函数的两种声明方式")]),t._v(" "),a("h3",{attrs:{id:"命名函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名函数"}},[t._v("#")]),t._v(" 命名函数")]),t._v(" "),a("p",[t._v("利用函数关键字 function 自定义函数方式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明定义方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),a("blockquote",[a("p",[t._v("JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。")]),t._v(" "),a("p",[t._v("JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。")]),t._v(" "),a("p",[t._v("详见："),a("a",{attrs:{href:"https://www.runoob.com/js/js-hoisting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 变量提升"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"匿名函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数"}},[t._v("#")]),t._v(" 匿名函数")]),t._v(" "),a("p",[t._v("利用函数表达式，可以将函数匿名。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是函数表达式写法，匿名函数后面跟分号结束")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用的方式，函数调用必须写到函数体下面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);