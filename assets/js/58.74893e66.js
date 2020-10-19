(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{655:function(e,a,t){"use strict";t.r(a);var s=t(3),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"eclipse-安装与配置简明指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-安装与配置简明指南"}},[e._v("#")]),e._v(" Eclipse 安装与配置简明指南")]),e._v(" "),t("h3",{attrs:{id:"jdk-13-及以上版本-jre-生成命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk-13-及以上版本-jre-生成命令"}},[e._v("#")]),e._v(" JDK-13 及以上版本 jre 生成命令")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("// 命令行确保在 JDK 目录下\nbin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("jlink.exe --module-path jmods --add-modules java.desktop --output jre\n")])])]),t("h3",{attrs:{id:"eclipse-汉化插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-汉化插件"}},[e._v("#")]),e._v(" Eclipse 汉化插件")]),e._v(" "),t("p",[e._v("访问"),t("a",{attrs:{href:"https://www.eclipse.org/babel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网语言包项目"),t("OutboundLink")],1),e._v("下载相应语言包\n解压之后，将解压文件中的 "),t("code",[e._v("eclipse")]),e._v(" 下的两个文件 "),t("code",[e._v("feature")]),e._v(" 和 "),t("code",[e._v("plugins")]),e._v(" 移动到 eclipse 的安装目录下的 "),t("code",[e._v("dropins")]),e._v(" 文件夹中")]),e._v(" "),t("h3",{attrs:{id:"eclipse-为项目导入第三方-jar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-为项目导入第三方-jar"}},[e._v("#")]),e._v(" Eclipse 为项目导入第三方 jar")]),e._v(" "),t("p",[e._v("在资源管理栏中右键项目文件夹，选择 "),t("code",[e._v("Build Path")]),e._v(" 在顶栏选择 "),t("code",[e._v("Libraries")]),e._v(" 选择 "),t("code",[e._v("modul path")]),e._v(" 点击右侧 "),t("code",[e._v("Add External JARs")]),e._v(" 选择已下载解压的 jar 包")]),e._v(" "),t("h3",{attrs:{id:"eclipse-代码中文字符过小解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-代码中文字符过小解决"}},[e._v("#")]),e._v(" Eclipse 代码中文字符过小解决")]),e._v(" "),t("p",[e._v("两种方案：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("把字体设置为 Courier New ：\n"),t("code",[e._v("Windows -> Preferences -> Genneral -> Appearance -> Colors and Font -> 在右侧框展开Basic -> Text Font")]),e._v(" 点击"),t("code",[e._v("Edit")]),e._v(" 按钮，在弹出窗选择 "),t("code",[e._v("Courier New")])])]),e._v(" "),t("li",[t("p",[e._v("将脚本修改为 中欧字符 ：\n"),t("code",[e._v("windows -> Preferences -> Genneral -> Appearance -> Colors and Font")]),e._v(" 在右侧选中 "),t("code",[e._v("Text Font")]),e._v(" 点击 "),t("code",[e._v("Edit")]),e._v(" 按钮， 将 "),t("code",[e._v("西欧语言")]),e._v(" 改成 "),t("code",[e._v("中欧字符")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("推荐使用第二种解决方案，Consolas 字体个人感觉比 Courier New 好看\n"),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master/20201019225954.png",loading:"lazy"}})])]),e._v(" "),t("h3",{attrs:{id:"eclipse-代码补全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-代码补全"}},[e._v("#")]),e._v(" Eclipse 代码补全")]),e._v(" "),t("p",[e._v("默认情况下 Eclipse 的代码补全是在键入 "),t("code",[e._v(".")]),e._v(" 之后出现的，不像其他 IDE 键入任意字母提示补全。如果需要同其他 IDE 一样，需要自行修改补全规则")]),e._v(" "),t("p",[t("code",[e._v("Window --\x3e Perferences --\x3e Java --\x3e Editor --\x3e Content Assist")])]),e._v(" "),t("p",[e._v("在 "),t("code",[e._v("Auto Activation")]),e._v(" 栏中勾选 "),t("code",[e._v("Enable auto activation")]),e._v(" ，并设置 "),t("code",[e._v("Auto activation triggers for java")]),e._v(" 选项为 "),t("code",[e._v(".qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM")]),e._v(" 即二十六个字母\n"),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master/20201019230118.png",loading:"lazy"}})]),e._v(" "),t("h3",{attrs:{id:"eclipse-修改类注释文档的-author字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-修改类注释文档的-author字段"}},[e._v("#")]),e._v(" Eclipse 修改类注释文档的@author字段")]),e._v(" "),t("p",[e._v("Eclipse默认情况下使用"),t("code",[e._v("/**")]),e._v("自动创建类注释文档时"),t("code",[e._v("@author")]),e._v("字段默认是计算机的用户名，如果你需要修改成你的开发名，可以以下操作设置\n"),t("code",[e._v("Window --\x3e Perferences")]),e._v(" "),t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master/20201019225807.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);