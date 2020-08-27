(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{649:function(t,a,s){"use strict";s.r(a);var e=s(3),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200825181855.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("Git 是一个版本管理控制系统 "),s("em",[t._v("VCS")]),t._v(" ，它可以在任何时间点，将文档的状态作为更新记录保存起来，也可以在任何时间点，将更新记录恢复回来。")]),t._v(" "),s("blockquote",[s("p",[t._v("官方文档")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://gitee.com/help/articles/4104",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee Git Doc"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://docs.github.com/cn/github/using-git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Git sue"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bootcss Git 简易指南"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://www.progit.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProGit 进阶"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"版本管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本管理"}},[t._v("#")]),t._v(" 版本管理")]),t._v(" "),s("p",[t._v("版本管理是一种记录文件变化的方式，以便将来查阅特定版本的内容")]),t._v(" "),s("h2",{attrs:{id:"部署下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署下载"}},[t._v("#")]),t._v(" 部署下载")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git官网"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),s("p",[t._v("工作区：项目在开发者设备上的目录")]),t._v(" "),s("p",[t._v("暂存区：用于暂时存储需要提交的仓库的文件，使用 "),s("code",[t._v("git add")]),t._v(" 命令将文件提交到暂存区")]),t._v(" "),s("p",[t._v("本地仓库\t：正式存储代码的位置，接收来自暂存区的文件，使用"),s("code",[t._v("git commit")]),t._v(" 命令正式提交到仓库，注意在正式提交前务必对暂存区代码进行完整测试。")]),t._v(" "),s("p",[t._v("远程仓库：存储在公共网络上的代码托管网站。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200807162249.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"命令语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令语法"}},[t._v("#")]),t._v(" 命令语法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("操作")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("git --version")])]),t._v(" "),s("td",[t._v("查看 Git 版本")])])])]),t._v(" "),s("h2",{attrs:{id:"git使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git使用"}},[t._v("#")]),t._v(" Git使用")]),t._v(" "),s("h3",{attrs:{id:"配置git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置git"}},[t._v("#")]),t._v(" 配置Git")]),t._v(" "),s("p",[t._v("在使用 git 前，需要告诉 git 你是谁，在向 git 仓库提交时需要辨识当前修改的提交者，这是利于多人协作的。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("配置提交人姓名："),s("code",[t._v("git config --global user.name 提交人姓名")])])]),t._v(" "),s("li",[s("p",[t._v("配置提交人邮箱："),s("code",[t._v("git config --global user.email 提交人邮箱")])])]),t._v(" "),s("li",[s("p",[t._v("查看 git 配置信息："),s("code",[t._v("git config --list")])])])]),t._v(" "),s("p",[t._v("多次输入配置信息会覆盖之前的配置信息")]),t._v(" "),s("p",[t._v("除了通过使用命令行进行配置外，也可以找到 C:/user 下的 .gitconfig")]),t._v(" "),s("h3",{attrs:{id:"提交步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交步骤"}},[t._v("#")]),t._v(" 提交步骤")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("git init")]),t._v(" 初始化 git 仓库")]),t._v(" "),s("li",[s("code",[t._v("git status")]),t._v(" 查看文件状态")]),t._v(" "),s("li",[s("code",[t._v("git add 文件列表")]),t._v(" 添加/更新 文件到暂存区")]),t._v(" "),s("li",[s("code",[t._v("git commit -m 提交信息")]),t._v(" 向仓库提交暂存区")]),t._v(" "),s("li",[s("code",[t._v("git log")]),t._v(" 查看提交记录")])]),t._v(" "),s("p",[t._v("每次 修改/增加 工作目录都需要执行 "),s("code",[t._v("git add")]),t._v("密码来加入暂存区")]),t._v(" "),s("p",[t._v("git 提交规范：")]),t._v(" "),s("ul",[s("li",[t._v("一次提交只包含一个改动")]),t._v(" "),s("li",[t._v("在提交到仓库之前，一定要经过完整测试")]),t._v(" "),s("li",[t._v("commit message 不能忽略，书写提交信息一定要简洁明了，一句点明当前提交改动")])]),t._v(" "),s("h3",{attrs:{id:"恢复记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#恢复记录"}},[t._v("#")]),t._v(" 恢复记录")]),t._v(" "),s("p",[t._v("用暂存区中的文件覆盖工作目录中的文件："),s("code",[t._v("git checkout 文件")])]),t._v(" "),s("p",[t._v("将文件从暂存区中删除："),s("code",[t._v("git rm --cached 文件")])]),t._v(" "),s("p",[t._v("将 git 仓库中指定的更新记录恢复，并且覆盖暂存区和工作目录："),s("code",[t._v("git reset --hard commitID")])]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("git log")]),t._v(" 来查看commit ID")]),t._v(" "),s("h3",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),s("p",[t._v("分支相当于工作目录的副本，多人协作时，其他人可以通过分支将其从开发主线上分离出来，以免影响开发主线。")]),t._v(" "),s("p",[t._v("分支的意义：如果没有分支我们可以想象在一个开发流程下我们同时对代码进行新功能添加，bug修复，代码重构，UI更替等等操作，可想而知是十分繁杂凌乱的，通过分支我们可以将不同的模块细分出去，更好的管理开发流程")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://gitee.com/QiJieH/blog-image-bed/raw/master//20200807162313.png",loading:"lazy"}})]),t._v(" "),s("h4",{attrs:{id:"分支细分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支细分"}},[t._v("#")]),t._v(" 分支细分")]),t._v(" "),s("ol",[s("li",[t._v("主分支（master）：第一次向 git 仓库提交更新时会自动产生该分支。")]),t._v(" "),s("li",[t._v("开发分支（develop）：作为开发的分支，基于 master 分支创建。")]),t._v(" "),s("li",[t._v("功能分支（feature）：作为开发具体功能的分支，基于开发分支创建。")])]),t._v(" "),s("h4",{attrs:{id:"分支命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支命令"}},[t._v("#")]),t._v(" 分支命令")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("git brach")]),t._v(" 查看分支列表")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git branch 分支名称")]),t._v(" 创建分支")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git checkout 分支名称")]),t._v(" 切换分支")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git merge 来源分支")]),t._v(" 合并分支")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("git branch -d 分支名称")]),t._v(" 删除分支（分支被合并后才能删除）"),s("code",[t._v("-D")]),t._v(" 强制删除")])])]),t._v(" "),s("p",[t._v("在切换分支时务必保证暂存区的文件已经commit到仓库，否则暂存区文件会影响到切换分支的工作区。")]),t._v(" "),s("p",[t._v("在当前分支下时，是无法删除本分支的，只有切换到其他分支才能对分支进行删除操作。")]),t._v(" "),s("h2",{attrs:{id:"git进阶"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git进阶"}},[t._v("#")]),t._v(" Git进阶")]),t._v(" "),s("h3",{attrs:{id:"暂时保存更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暂时保存更改"}},[t._v("#")]),t._v(" 暂时保存更改")]),t._v(" "),s("p",[t._v("在 git 中，可以暂时提取分支上所有的改动并存储，让开发人员得到一个干净的工作副本，临时转向其他工作。")]),t._v(" "),s("p",[t._v("使用场景：分支临时切换")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("git stash")]),t._v(" 存储临时改动")]),t._v(" "),s("li",[s("code",[t._v("git stash pop")]),t._v(" 恢复改动")])]),t._v(" "),s("h1",{attrs:{id:"github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" Github")]),t._v(" "),s("p",[t._v("在 Git 中有90%的操作都是在本地仓库中进行的，这样已经足以满足个人项目开发的所有需求了。但是往往一个项目是需要多人协作开发的，这时我们就需要一个别人也可以进行访问的远程仓库。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"团队协作开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#团队协作开发流程"}},[t._v("#")]),t._v(" 团队协作开发流程")]),t._v(" "),s("ul",[s("li",[t._v("A 在自己的计算机中创建本地仓库")]),t._v(" "),s("li",[t._v("A 在 github 中创建远程仓库")]),t._v(" "),s("li",[t._v("A 将本地仓库推送到远程仓库")]),t._v(" "),s("li",[t._v("B 克隆远程仓库到本地进行开发")]),t._v(" "),s("li",[t._v("B 将本地仓库开发内容推送到远程仓库")]),t._v(" "),s("li",[t._v("A 将远程仓库中的最新内容拉取到本地")])]),t._v(" "),s("h3",{attrs:{id:"推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[t._v("#")]),t._v(" 推送")]),t._v(" "),s("p",[t._v("创建新仓库并推送到远程仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"# git-demo"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" README.md\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README.md\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"first commit"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/QiJieH/git-demo.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),s("p",[t._v("推送已有仓库至远程仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/QiJieH/git-demo.git\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n")])])]),s("p",[t._v("第一行代码是为远程仓库设置别名 "),s("code",[t._v("origin")]),t._v(" ，这个名字是可更改的")]),t._v(" "),s("p",[t._v("第二行参数是以 "),s("code",[t._v("master")]),t._v(" 分支推送至远程仓库 ，"),s("code",[t._v("-u")]),t._v(" 参数是记忆当前操作，在下次推送时只需要使用 "),s("code",[t._v("git push")]),t._v(" 即可。")]),t._v(" "),s("h3",{attrs:{id:"克隆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆"}},[t._v("#")]),t._v(" 克隆")]),t._v(" "),s("p",[t._v("克隆远程仓库到本地")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone 仓库地址\n")])])]),s("p",[t._v("如果需要推送给A需要在远程仓库的"),s("code",[t._v("Settings -> Manage access -> Invate a collaborator")]),t._v("来添加协作者")]),t._v(" "),s("p",[t._v("并复制邀请链接给程序员B")]),t._v(" "),s("p",[t._v("程序员B 访问邀请链接，并接受邀请")]),t._v(" "),s("p",[t._v("github 的远程仓库账号存储在了 Windows凭据 下，如果需要切换登录需要手动删除凭据")]),t._v(" "),s("h3",{attrs:{id:"拉取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取"}},[t._v("#")]),t._v(" 拉取")]),t._v(" "),s("p",[t._v("拉取远程仓库到本地")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull 仓库名称 分支名称\n")])])]),s("p",[t._v("git pull 是在已经有本地仓库的基础上进行的，他会将本地仓库的版本与远程仓库版本进行比对，更新最新版本的代码。")]),t._v(" "),s("p",[t._v("git clone 是完全复制下远程仓库，是本地不存在仓库时进行。")]),t._v(" "),s("p",[t._v("如果远程仓库中的版本高于本地仓库的版本，本地仓库不能向远程仓库提交，只有先拉取远程仓库之后才能提交。")]),t._v(" "),s("h2",{attrs:{id:"解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[t._v("#")]),t._v(" 解决冲突")]),t._v(" "),s("p",[t._v("在多人协作时，可能会出现两个人对同一个文件的同一个地方进行了修改，就会发生冲突，冲突需要人为解决。")]),t._v(" "),s("p",[t._v("即只有第一个向远程仓库提交的人才能推送，第二个推送的人因为本地仓库版本低于远程仓库无法提交，只有拉取远程仓库进行提交，但是由于两个人修改了同一个文件的同一个地方，导致了冲突发生")]),t._v(" "),s("p",[t._v("报错提示")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<<<<<<< HEAD\n// 冲突原文\n=======\n// 修改内容\n>>>>>>> idstringxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),s("p",[t._v("选择处理，删除多余字符，解决冲突")]),t._v(" "),s("h2",{attrs:{id:"跨团队协作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨团队协作"}},[t._v("#")]),t._v(" 跨团队协作")]),t._v(" "),s("p",[t._v("作为非团队成员进行协作时，提交的代码需要审核才能生效")]),t._v(" "),s("p",[t._v("Fork 需要协作的仓库，会将目标仓库复制到自己的 github 账号下，之后可以进行远程仓库的克隆，然后开始修改，推送。")]),t._v(" "),s("p",[t._v("完成推送后在远程仓库点击 Pull requests -> New pull request -> Create pull request -> 与原仓库作者送信 -> Create pull request")]),t._v(" "),s("p",[t._v("这时在原仓库的作者的项目仓库下会有新的 Pull requests 拉取请求，点击之后就可以看见 fork者的合并请求，也可与 fork者进行回复，点击 Files changed 查看修改代码。")]),t._v(" "),s("p",[t._v("在对话页面点击 Marge pull request 即可应用合并。")]),t._v(" "),s("h2",{attrs:{id:"ssh免登陆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh免登陆"}},[t._v("#")]),t._v(" ssh免登陆")]),t._v(" "),s("p",[t._v("https协议进行远程仓库链接，每次推送操作都要输入账号密码进行验证，但是 Windows 系统为我们提供了凭证，可以让我们不用每次都进行输入验证，但是当在其他操作系统上时就无法这样了。")]),t._v(" "),s("p",[t._v("所以 Github 提供了另一种链接协议 ssh ，在 ssh 中身份验证通过密钥实现，分为公钥与私钥，只有当公私钥匹配成功才能通过验证。")]),t._v(" "),s("p",[t._v("生成密钥")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ssh-keygen\n")])])]),s("p",[t._v("存储在 C:/user/.ssh/")]),t._v(" "),s("p",[t._v("id_rsa 为私钥，必须存储在开发者系统下")]),t._v(" "),s("p",[t._v("id_rsa.pub 为公钥，这个公钥则需要存储在 Github 下")]),t._v(" "),s("p",[t._v("user -> Settings -> SSH and GPG keys -> new ssh key 填写key")]),t._v(" "),s("p",[t._v("之后再 仓库页面就可以通过 Clone or download 来切换获取 ssh 链接。")]),t._v(" "),s("h2",{attrs:{id:"gitignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" Gitignore")]),t._v(" "),s("p",[t._v("在工作区添加 .gitignore 文件，在 push 时 GitHub 会忽略 .gitignore 文件中的文件")])])}),[],!1,null,null,null);a.default=v.exports}}]);