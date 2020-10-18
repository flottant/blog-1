(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{619:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200823161501.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("MongoDB 是一个基于分布式文件存储非关系数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。")]),t._v(" "),s("h1",{attrs:{id:"mongodb-基础语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-基础语法"}},[t._v("#")]),t._v(" MongoDB 基础语法")]),t._v(" "),s("p",[t._v("官方文档："),s("a",{attrs:{href:"https://docs.mongodb.com/guides/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。")]),t._v(" "),s("p",[t._v("MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。")]),t._v(" "),s("h2",{attrs:{id:"数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),s("p",[t._v("MongDB 所有的数据都是以 json 对象进行存储的")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notebook"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"qty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rating"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"score"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"score"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"width"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"college-ruled"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"perforated"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在进行数据库结构设计时务必参照 JSON 标准。")]),t._v(" "),s("p",[t._v("MongoDB术语 参照 SQL术语 理解")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("SQL术语/概念")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("MongoDB术语/概念")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("解释/说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("database")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("database")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据库")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("table")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("collection")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据库表/集合")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("row")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("document")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据记录行/文档")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("column")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("field")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据字段/域")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("index")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("索引")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("table joins")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表连接,MongoDB不支持")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("primary key")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("primary key")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("主键,MongoDB自动将_id字段设置为主键")])])])]),t._v(" "),s("h2",{attrs:{id:"安装部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[t._v("#")]),t._v(" 安装部署")]),t._v(" "),s("p",[t._v("下载中心")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.mongodb.com/download-center#production",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Download Center"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("mongodb 社区版下载")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Community"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("mongodb 图形界面管理工具（可选）")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.mongodb.com/try/download/compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Compass"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"使用引导安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用引导安装"}},[t._v("#")]),t._v(" 使用引导安装")]),t._v(" "),s("p",[t._v("在命令行操作 mongodb 时请务必使用"),s("strong",[t._v("管理员权限打开命令行窗口")])]),t._v(" "),s("p",[t._v("所有的安装设置都会在引导界面设置完成，之后通过命令行操作数据库服务")]),t._v(" "),s("ul",[s("li",[t._v("启动服务")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("net "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" mongodb\n")])])]),s("ul",[s("li",[t._v("停止服务")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("net stop mongodb\n")])])]),s("ul",[s("li",[t._v("移除服务")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2\\bin\\mongo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("remove\n")])])]),s("ul",[s("li",[t._v("连接管理")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2\\bin\\mongo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n")])])]),s("h3",{attrs:{id:"使用命令行安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用命令行安装"}},[t._v("#")]),t._v(" 使用命令行安装")]),t._v(" "),s("p",[t._v("移除服务后需要手动以命令行方式进行安装")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("mongod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("logpath="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files\\MongoDB\\Server\\4.2\\log\\mongod.log"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("dbpath="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files\\MongoDB\\Server\\4.2\\data"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("install\n")])])]),s("h3",{attrs:{id:"添加系统变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加系统变量"}},[t._v("#")]),t._v(" 添加系统变量")]),t._v(" "),s("p",[t._v("虽然这步不是必须的，但是在使用 mongodb 过程中某些命令需要系统变量的支持。")]),t._v(" "),s("p",[t._v("MongoDB安装目录下的bin路径导入到系统变量Path中。")]),t._v(" "),s("h3",{attrs:{id:"设置身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置身份验证"}},[t._v("#")]),t._v(" 设置身份验证")]),t._v(" "),s("p",[t._v("初次安装时是没有设置身份验证的，任何人都可以访问你的数据库，这样是十分危险的。接下来将为 mongodb 部署强制身份验证。")]),t._v(" "),s("p",[t._v("在命令行窗口运行以下命令，确保 mongodb 服务在你的系统上存在")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("tasklist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FI "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IMAGENAME eq mongod.exe"')]),t._v("\n")])])]),s("p",[t._v("如果显示以下字段，说明 mogodb 服务正在运行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Image Name                     PID Session Name        Session#    Mem Usage\n========================= ======== ================ =========== ============\nmongod.exe                    8716 Console                    1      9,508 K\n")])])]),s("ol",[s("li",[t._v("使用命令行打开运行 mongo.exe")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("2\\bin\\mongo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("切换到 admin 数据库")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("use admin\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("新建超级管理员账户")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"superuser"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwd")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"changeMeToAStrongPassword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    roles: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("验证是否创建成功")])]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("show users\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("卸载 mongodb 服务")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("net stop mongodb\nmongod --remove\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[t._v("创建 mongodb 服务 注意 -auth 参数")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mongod --logpath="C:\\Program Files\\MongoDB\\Server\\4.2\\log\\mongod.log" --dbpath="C:\\Program Files\\MongoDB\\Server\\4.2\\data" --install -auth\n')])])]),s("p",[t._v("如果您已成功完成本指南，则已在本地 MongoDB 实例上启用了基本身份验证。")]),t._v(" "),s("h3",{attrs:{id:"添加数据库用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加数据库用户"}},[t._v("#")]),t._v(" 添加数据库用户")]),t._v(" "),s("p",[t._v("在添加数据库用户之前您必须拥有超级管理员账号。")]),t._v(" "),s("p",[t._v("连接到数据库 admin 进行身份验证，之后切换到需要创建管理账户的数据库中使用 "),s("code",[t._v("db.createUser")]),t._v(" 进行创建。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mongo.exe\nuse admin\ndb.auth("rootname","rootpwd")\nuse dba\ndb.createUser({\n\tuser:"dbaadmin",\n\tpwd:"admin",\n\troles:["readWrite"]\n})\n')])])]),s("blockquote",[s("p",[t._v("注意只有切换到响应的数据库之后才能进行身份验证或用户创建，否则会出现验证失败和创建失败。")])]),t._v(" "),s("h2",{attrs:{id:"连接数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接数据库"}},[t._v("#")]),t._v(" 连接数据库")]),t._v(" "),s("h3",{attrs:{id:"未启用身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未启用身份验证"}},[t._v("#")]),t._v(" 未启用身份验证")]),t._v(" "),s("p",[t._v("如果你未启用身份验证，您可以容易的使用命令行进入数据库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("C:\\Program Files\\MongoDB\\Server\\4.2\\bin\\mongo.exe\n")])])]),s("p",[t._v("在 Compass 中只需要点击 connect 即可，无需配置")]),t._v(" "),s("h3",{attrs:{id:"启用身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用身份验证"}},[t._v("#")]),t._v(" 启用身份验证")]),t._v(" "),s("p",[t._v("如果你启用了身份验证，在使用 Compass 连接时需要填写 URL ，url的填写规则为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mongodb:身份名:身份密码@host:port/数据库名称\n\nmongodb:root:root@localhost:27017/admin\n")])])]),s("p",[t._v("在命令行中启动 mongo.exe 切换到正确数据库之后使用 "),s("code",[t._v('db.auth("name","pwd")')]),t._v(" 来进行验证")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('mongo.exe\nuse admin\ndb.auth("root","root")\n')])])]),s("blockquote",[s("p",[t._v("命令行进入 mongo.exe 并不需要验证，但是这样是无法查看或修改任何数据的")])]),t._v(" "),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("p",[t._v("你可以访问 "),s("a",{attrs:{href:"https://docs.mongodb.com/drivers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Drivers"),s("OutboundLink")],1),t._v(" 来获取您语言操作数据库的 API")]),t._v(" "),s("p",[t._v("本文档只介绍 Node.js 对 Mongodb 的连接操作。")]),t._v(" "),s("p",[t._v("在 node.js 下操作 mongodb 您需要使用到第三方模块 mongoose 您可以通过 npm 管理工具进行下载")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install mongoose\n")])])]),s("p",[t._v("之后您可以在 js 文件中引入 mongoose 并使用它来连接数据库。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mongoose "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongoose'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmongoose"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"mongodb'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("userpwd@host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dbname\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useNewUrlParser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useUnifiedTopology"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据库连接成功'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据库连接失败'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"数据库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),s("p",[t._v("访问 "),s("a",{attrs:{href:"https://docs.mongodb.com/drivers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Drivers"),s("OutboundLink")],1),t._v(" 来获取您语言操作数据库的 API ，下面我们只介绍使用 mongo.exe 命令行对数据库的操作。")]),t._v(" "),s("h3",{attrs:{id:"创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[t._v("#")]),t._v(" 创建数据库")]),t._v(" "),s("p",[t._v("MongoDB 创建数据库的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("use DataBaseName\n")])])]),s("p",[t._v("这个方法在没有该数据库时会创建该数据库，否则会转到该数据库，注意，如果创建数据库时没有添加该数据库内容，是不会显示该数据库的。")]),t._v(" "),s("p",[t._v("如果你想查看所有数据库，可以使用 "),s("strong",[t._v("show dbs")]),t._v(" 命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> show dbs\nadmin   0.000GB\nconfig  0.000GB\nlocal   0.000GB\n> \n")])])]),s("h3",{attrs:{id:"删除数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[t._v("#")]),t._v(" 删除数据库")]),t._v(" "),s("p",[t._v("MongoDB 删除数据库的语法格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("db.dropDatabase()\n")])])]),s("p",[t._v("您需要使用 use dbname 来切换到需要删除的数据库才能执行删除操作。")]),t._v(" "),s("h3",{attrs:{id:"创建集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建集合"}},[t._v("#")]),t._v(" 创建集合")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('db.createCollection(name, options)\n\n// name ：集合命名  options：集合规则\n\ndb.createCollection("mycol", \n{ \n\tcapped : true, \n\tautoIndexId : true,\n\tsize : 6142800, \n\tmax : 10000 \n})\n')])])]),s("p",[t._v("如果要查看已有集合，可以使用 "),s("strong",[t._v("show collections")]),t._v(" 或 "),s("strong",[t._v("show tables")]),t._v(" 命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> show collections\n")])])]),s("h3",{attrs:{id:"删除集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除集合"}},[t._v("#")]),t._v(" 删除集合")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("db.collection.drop()\n\ncollection 为集合名称 ， 如果要查看已有集合，可以使用 show collections 或 show tables 命令\n")])])]),s("h3",{attrs:{id:"插入文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入文档"}},[t._v("#")]),t._v(" 插入文档")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(">db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLLECTION_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insertOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLLECTION_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insertMany"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("以上代码会将花括号内的 json 对象插入到 col 集合中，如果集合不存在数据库会自动创建。")]),t._v(" "),s("h3",{attrs:{id:"导入文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入文档"}},[t._v("#")]),t._v(" 导入文档")]),t._v(" "),s("p",[s("code",[t._v("mongoimport -d 数据库名称 -c 集合名称 -file 导入目标文件")])]),t._v(" "),s("p",[t._v("使用mongoimport命令需要将MongoDB安装目录下的bin路径导入到系统变量Path中")]),t._v(" "),s("h3",{attrs:{id:"更新文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新文档"}},[t._v("#")]),t._v(" 更新文档")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(">db.COLLECTION_NAME.updateOne({'json':'value'},{$set:{'new key':'new value'}})\n\n>db.COLLECTION_NAME.updateMany({'json':'value'},{$set:{'new key':'new value'}})\n")])])]),s("h3",{attrs:{id:"删除文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除文档"}},[t._v("#")]),t._v(" 删除文档")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 删除匹配的第一条数据\n>db.COLLECTION_NAME.deleteOne({'title':'MongoDB 笔记'})\n\n// 删除所以匹配的数据\n>db.COLLECTION_NAME.deleteMany({'title':'MongoDB 笔记'})\n\n// 删除全部\n>db.COLLECTION_NAME.deleteMany({})\n\n")])])]),s("h3",{attrs:{id:"查询文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询文档"}},[t._v("#")]),t._v(" 查询文档")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(">db.COLLECTION_NAME.find({key1:value1, key2:value2}).pretty()\n// .pretty() 以易读的方式返回查询数据\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);