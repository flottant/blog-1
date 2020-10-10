(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{636:function(a,n,t){"use strict";t.r(n);var e=t(3),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v("简单数据类型的存储方式")])]),a._v(" "),t("p",[a._v("值类型变量的数据直接存放在变量（栈空间）中")]),a._v(" "),t("p",[t("strong",[a._v("复杂数据类型的存储方式")])]),a._v(" "),t("p",[a._v("引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中")]),a._v(" "),t("h2",{attrs:{id:"数据类型深入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型深入"}},[a._v("#")]),a._v(" 数据类型深入")]),a._v(" "),t("h3",{attrs:{id:"简单数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单数据类型"}},[a._v("#")]),a._v(" 简单数据类型")]),a._v(" "),t("p",[t("strong",[a._v("简单类型")]),a._v("（"),t("strong",[a._v("基本数据类型")]),a._v("、"),t("strong",[a._v("值类型")]),a._v("）：在存储时变量中存储的是值本身，包括 "),t("code",[a._v("string")]),a._v(" ，"),t("code",[a._v("number")]),a._v("，"),t("code",[a._v("boolean")]),a._v("，"),t("code",[a._v("undefined")]),a._v("，"),t("code",[a._v("null")])]),a._v(" "),t("h3",{attrs:{id:"复杂数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂数据类型"}},[a._v("#")]),a._v(" 复杂数据类型")]),a._v(" "),t("p",[t("strong",[a._v("复杂数据类型（引用类型）")]),a._v("：在存储时变量中存储的仅仅是地址（引用），通过 new 关键字创建的对象（系统对象、自定义对象），如 "),t("code",[a._v("Object")]),a._v("、"),t("code",[a._v("Array")]),a._v("、"),t("code",[a._v("Date")]),a._v("等；")]),a._v(" "),t("h3",{attrs:{id:"堆栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈"}},[a._v("#")]),a._v(" 堆栈")]),a._v(" "),t("p",[t("strong",[a._v("注意：JavaScript 并不存在堆栈，这里只是形象说明")])]),a._v(" "),t("p",[a._v("堆栈空间分配区别：")]),a._v(" "),t("ul",[t("li",[a._v("栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；")]),a._v(" "),t("li",[a._v("堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。")])]),a._v(" "),t("p",[t("strong",[a._v("简单数据类型的存储方式")])]),a._v(" "),t("p",[a._v("值类型变量的数据直接存放在变量（栈空间）中")]),a._v(" "),t("p",[t("strong",[a._v("复杂数据类型的存储方式")])]),a._v(" "),t("p",[a._v("引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中")]),a._v(" "),t("h3",{attrs:{id:"简单类型传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单类型传参"}},[a._v("#")]),a._v(" 简单类型传参")]),a._v(" "),t("p",[a._v("函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" function fn(a) {\n     a++;\n     console.log(a); \n }\n var x = 10;\n fn(x);\n console.log(x);\n \n /*\n     11\n     10\n */\n")])])]),t("h3",{attrs:{id:"复杂类型传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂类型传参"}},[a._v("#")]),a._v(" 复杂类型传参")]),a._v(" "),t("p",[a._v("函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' function Person(name) {\n     this.name = name;\n }\n function f1(x) {\n     console.log(x.name); \n     x.name = "张学友";\n     console.log(x.name);   \n }\n var p = new Person("刘德华");\n console.log(p.name);\n f1(p);\n console.log(p.name);\n')])])]),t("p",[a._v("运行结果：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" 刘德华\n 刘德华\n 张学友\n 张学友\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);