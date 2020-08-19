---
title: 移动WEB开发之rem布局
date: 2020-08-12
sidebar: false
categories:
 - FrontEnd
tags:
 - css
 - html
 - less
 - webReprint
publish: true
---



## rem 基础

### rem 单位

---

`rem` 是一个相对单位，类似于`em` 是相对于父元素字体大小。

不同的是 `rem` 的基准是相对于 `html` 元素的字体大小。

```css
/* 根html 为 12px */
html {
   font-size: 12px;
}
/* 此时 div 的字体大小就是 24px */       
div {
    font-size: 2rem;
    width: 10rem;
    hight: 10rem;
}
```

**`rem` 的优势：父元素文字大小可能不一致， 但是整个页面只有一个 `html`，可以很好来控制整个页面的元素大小。**



## 媒体查询

### 什么是媒体查询

---

媒体查询 `Media Query` 是 `CSS3` 新语法。

+ 使用 `@media` 查询，可以针对不同的媒体类型定义不同的样式
+ `@media` 可以针对不同的屏幕尺寸设置不同的样式
+ 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 
+ 目前针对很多苹果手机，Android手机，平板等设备都用得到多媒体查询





### 媒体查询语法规范

---

+ 用 @media开头 注意@符号
+ mediatype  媒体类型
+ 关键字 and  not  only
+ media feature 媒体特性必须有小括号包含

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```



**1. `mediatype` 媒体查询**

​	将不同的终端设备划分成不同的类型，称为媒体类型

| 属性     | 说明                               |
| -------- | ---------------------------------- |
| `all`    | 用于所有设备                       |
| `print`  | 用于打印机和打印预览               |
| `screen` | 用于电脑屏幕，平板电脑，智能手机等 |

**2. 关键字**

​	关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

+ `and` ：可以将多个媒体特性连接到一起，相当于“且”的意思。
+ `not` ：排除某个媒体类型，相当于“非”的意思，可以省略。
+ `only` ：指定某个特定的媒体类型，可以省略。    

**3. 媒体特性**

​	每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同	的展示风格。我们暂且了解三个。

​	注意他们要加小括号包含

| 属性        | 说明                                 |
| ----------- | ------------------------------------ |
| `width`     | 定义输出设备中页面可见区域的宽度     |
| `min-width` | 定义输出设备中页面最小可见区域的宽度 |
| `max-width` | 定义输出设备中页面最大可见区域的宽度 |

**4. 媒体查询书写规则**

注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁



### 案例：根据页面宽度改变背景颜色

---

**实现思路：**

1. 按照从大到小或者从小到大的思路
2. 注意 `max-width` 和 `min-width` 都是包含等于的
3. 当屏幕小于540像素，背景颜色为蓝色 `x <= 539`
4. 当屏幕大于等于540像素，且小于等于 969像素背景色为绿色 `540 <= x <= 969`
5. 当屏幕大于970像素，背景为红色 `x >= 970`

**源码：**

::: details

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @media screen and (max-width: 539px) {
            body {
                background-color: royalblue;
            }
        }
        @media screen and (min-width:540px) {
            body {
                background-color: seagreen;
            }
        }
         /* 冲突覆盖 层叠 */
        @media screen and (min-width: 970px){
            body {
                background-color: crimson;
            }
        }
    </style>
</head>
<body>
</body>
<style>
</style>
</html>
```

:::



### 媒体查询 + rem 实现元素动态大小变化

---

`rem` 是相对于 `html` 的 `font-size` 变化的，现在通过媒体查询我们可以动态的设置不同设备的 `html`  的 `font-size` 属性，进而使 `rem` 在不同设备是展示不同形态。



### 案例：媒体查询+rem实现Header元素变化

---


::: details

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        @media screen and (min-width:320px) {
            html {
                font-size: 50px;
            }
        }
        @media screen and (min-width:640px) {
            html {
                font-size: 100px;
            }
        }
        header {
            height: 1rem;
            font-size: .5rem;
            color: #fff;
            background-color: royalblue;
            text-align: center;
            line-height: 1rem;
        }
    </style>
</head>
<body>
    <header>购物车</header>
</body>
<style>
</style>
</html>
```

:::



### 引入资源

---

当当前页面的样式比较多时，我们可以针对不同的媒体宽度引入不同的 `css` 样式表。

直接在 `link` 中判断设备尺寸，然后应用不同的 `css` 文件。

**1. 语法规范**

```html
<link rel="stylesheet" media="screen and (min-width:320px)" href="style_320.css">
```



### 案例：不同屏幕宽度引入不同样式

---

::: details

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" media="screen and (min-width:320px)" href="style_320.css">
    <link rel="stylesheet" media="screen and (min-width:640px)" href="style_640.css">
    <style>
        
    </style>
</head>
<body>
    <div>1</div>
    <div>2</div>
</body>
<style>
</style>
</html>
```

```css
/* style_320.css */
div {
    width: 100%;
    height: 100px;
}
div:nth-child(1) {
    background-color: royalblue;
}
div:nth-child(2) {
    background-color: seagreen;
}
```

```css
/* style_640.css */
div {
    width: 50%;
    height: 100px;
    float: left;
}
div:nth-child(1) {
    background-color: royalblue;
}
div:nth-child(2) {
    background-color: seagreen;
}
```

:::





## Less 基础

### 维护css弊端

---

`CSS` 是一门非程序式语言，没有变量、函数、`SCOPE`（作用域）等概念。

+ `CSS` 需要书写大量看似没有逻辑的代码，`CSS` 冗余度是比较高的。
+ 不方便维护及扩展，不利于复用。
+ `CSS` 没有很好的计算能力
+ 非前端开发工程师来讲，往往会因为缺少 `CSS` 编写经验而很难写出组织良好且易于维护的 `CSS` 代码项目。 



### Less 介绍

---

`Less`（ `LeanerStyle Sheets` 的缩写）是一门 `CSS` 扩展语言，也成为 `CSS` 预处理器。

做为 `CSS` 的一种形式的扩展，它并没有减少 `CSS` 的功能，而是在现有的 `CSS` 语法上，为 `CSS` 加入程序式语言的特性。

它在 `CSS`  的语法基础之上，引入了变量，`Mixin`（混入），运算以及函数等功能，大大简化了 `CSS` 的编写，并且降低了 `CSS` 的维护成本，就像它的名称所说的那样，`Less` 可以让我们用更少的代码做更多的事情。



> [Less中文网](http://lesscss.cn) 
>
> 常见的 `CSS` 预处理器：`Sass` 、`Less` 、`Stylus` ...
>
> `Less` 是一门 `CSS` 预处理语言，它扩展了`CSS` 的动态特性。



### Less 安装

---

1. 安装 `nodejs` ，可选择版本(8.0)，网址：[http://nodejs.cn/download/](http://nodejs.cn/download/) 
2. 检查是否安装成功，使用 `cmd` 命令（ `win10` 是 `window+r` 打开运行输入`cmd` ） 输入`node –v` 查看版本即可
3. 基于 `nodejs` 在线安装 `Less` ，使用 `cmd` 命令 `npm install -g less` 即可
4. 检查是否安装成功，使用 `cmd` 命令 ` lessc -v ` 查看版本即可

 

**快速开始**

---

**npm**

```bash
npm install -g less
```





### Less 使用

---

**1. 变量**

变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。

```less
@变量名:值;
```

+ 必须有@为前缀
+ 不能包含特殊字符
+ 不能以数字开头
+ 大小写敏感

```less
@FrontColor: #fff;
```

> 更多 Less 使用请参考 [Less中文网](http://lesscss.cn) 

### Less 编译

---

在 `Vscode` 扩展商店查找并安装 `Easy LESS` （作者：`mrcrowl` ）

该插件在你每次保存 `.less` 文件时，都会自动编译出 `.css` 文件。

### Less 嵌套

---

和 `css` 一样， `less` 也支持选择嵌套。

```less
#header .logo {
  width: 300px;
}

/* less */
#header {
    .logo {
       width: 300px;
    }
}
```

**注意，不要理解为继承！！**

如果遇见 （交集|伪类|伪元素选择器） ，利用&进行连接

```less
a:hover{
    color:red;
}

/* less */
a{
  &:hover{
      color:red;
  }
}
```



### Less 运算

---

任何数字、颜色或者变量都可以参与运算。就是 `Less` 提供了加，减，乘，除算术运算。

```less
/*Less 里面写*/
@witdh: 10px + 5;
div {
    border: @witdh solid red;
}
/*生成的css*/
div {
  border: 15px solid red;
}
/*Less 甚至还可以这样 */
width: (@width + 5) * 2;
```

+ 乘号 `*` 和除号 `/` 的写法  
+ 运算符中间左右有个空格隔开 `1px + 5`
+ 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位 
+ 如果两个值之间只有一个值有单位，则运算结果就取该单位



## rem 适配方案

1. 让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。

2. 使用媒体查询根据不同设备按比例设置 `html` 的字体大小，然后页面元素使用 `rem` 做尺寸单位，当 `html` 字体大小变化元素尺寸也会发生变化，从而达到等比缩放的适配。

::: tip

技术方案：

1. `less` + `rem` + 媒体查询

2. `lflexible.js` + `rem`

:::

总结： 

两种方案现在都存在。

方案2 更简单，现阶段大家无需了解里面的 `js` 代码。

### rem 实际开发适配方案1

---

```
less + rem + 媒体查询
```

1. 假设设计稿是 `750px`
2. 假设我们把整个屏幕划分为15等份（划分标准不一可以是20份也可以是10等份）
3. 每一份作为 `html` 字体大小，这里就是 `50px`
4. 那么在 `320px` 设备的时候，字体大小为 `320/15` 就是  `21.33px`
5. 用我们页面元素的大小除以不同的 `html`字体大小会发现他们比例还是相同的
6. 比如我们以 `750` 为标准设计稿
7. 一个 `100*100` 像素的页面元素在  750 屏幕下，  就是 100/ 50  转换为 `rem` 是  `2rem*2rem`  比例是1比1
8. 320屏幕下， `html` 字体大小为21.33   则 `2rem` =  `42.66px`  此时宽和高都是 42.66  但是宽和高的比例还是 1比1
9. 但是已经能实现不同屏幕下  页面元素盒子等比例缩放的效果

**总结：**

- 最后的公式：页面元素的 `rem` 值 =  页面元素值（px） /  （屏幕宽度  /  划分的份数）

- 屏幕宽度/划分 的份数就是 `html font-size` 的大小

- 或者：页面元素的 `rem 值 =  页面元素值（px） /  html font-size` 字体大小

### rem 实际开发适配方案2

---

```
flexible.js + rem
```

手机淘宝团队推出的简洁高效移动端适配库

我们再也不需要在写不同屏幕的媒体查询，因为里面 `js` 做了处理

它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。

我们要做的，就是确定好我们当前设备的 `html` 文字大小就可以了

比如当前设计稿是 `750px` ， 那么我们只需要把 `html` 文字大小设置为 `75px(750px / 10)`  就可以

里面页面元素rem值： 页面元素的 `px 值 /  75 `

剩余的，让 `flexible.js` 来去算

github地址：[https://github.com/amfe/lib-flexible](https://github.com/amfe/lib-flexible) 

**总结：**

因为 `flexible` 是默认将屏幕分为10等分

但是当屏幕大于750的时候希望不要再去重置 `html` 字体了

所以要自己通过媒体查询设置一下

并且要把权重提到最高



## 苏宁首页案例制作

苏宁首页地址 ：[苏宁首页](https://m.suning.com) 



### 方案1

1. 技术选型

   方案：我们采取单独制作移动页面方案

   技术：布局采取rem适配布局（less + rem  + 媒体查询）

   设计图： 本设计图采用 750px 设计尺寸

2. 搭建文件结构
3. 设置视口标签以及引入初始化样式

```html
<meta name="viewport" content="width=device-width, user-scalable=no,         initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
```

4. 设置公共 `common.less` 文件

	+ 新建 `common.less`  设置好最常见的屏幕尺寸，利用媒体查询设置不同的`html` 字体大小，因为除了首页其他页面也需要
	+ 我们关心的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
	+ 划分的份数我们定为 15 等份
	+ 因为我们 pc 端也可以打开我们苏宁移动端首页，我们默认 `html` 字体大小为 `50px` ，注意这句话写到最上面

```less
html {
    font-size: 50px;
}

@no: 15;

@media screen and (min-width: 320px) {html {font-size: 320px/@no;}}
@media screen and (min-width: 360px) {html {font-size: 360px/@no;}}
...
```



5. 新建 `index.less` 文件

   - 新建 `index.less` ，在这里书写首页样式
   - 将刚才设置好的 `common.less` 引入到 `index.less` 里面，语法如下

   ```less
   @import "common"
   ```

   - 生成 `index.css` 引入到 `index.html` 中。



>  **源码：[suning-firstPlan](https://github.com/QiJieH/WebReprint/tree/master/msunning/firstPlan) **
>
> 有感：尽管在这种方案中 `less` 帮我们完成了 `rem` 的计算，但是大量的的算术表达式导致语法键入极其困难。可是，这种方案布局出来的网页适配屏幕是相当优秀的，可以轻易适配出各种屏幕尺寸的最佳效果。





### 方案2

简洁高效的 `rem` 适配方案 `flexible.js` 



> Vscode `px` 转 `rem` 插件 ：**`cssrem`** 
>
> 注意修改插件配置的 `Cssrem:Root Font Size` 



源码：[suning-secondPlan](https://github.com/QiJieH/WebReprint/tree/master/msunning/secondPlan) 