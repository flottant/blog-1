---
title: JavaScript基础（八）内存
date: 2020-08-18
sidebar: false
categories:
 - FrontEnd
tags:
 - javascript
publish: true
---

## 数据类型深入

### 简单数据类型

**简单类型**（**基本数据类型**、**值类型**）：在存储时变量中存储的是值本身，包括 `string` ，`number`，`boolean`，`undefined`，`null`



### 复杂数据类型

**复杂数据类型（引用类型）**：在存储时变量中存储的仅仅是地址（引用），通过 new 关键字创建的对象（系统对象、自定义对象），如 `Object`、`Array`、`Date`等；



### 堆栈

**注意：JavaScript 并不存在堆栈，这里只是形象说明**

堆栈空间分配区别：

- 栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈；
- 堆（操作系统）：存储复杂类型(对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。



**简单数据类型的存储方式**

值类型变量的数据直接存放在变量（栈空间）中

**复杂数据类型的存储方式**

引用类型变量（栈空间）里存放的是地址，真正的对象实例存放在堆空间中



### 简单类型传参

函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量在栈空间里的值复制了一份给形参，那么在方法内部对形参做任何修改，都不会影响到的外部变量。

```
 function fn(a) {
     a++;
     console.log(a); 
 }
 var x = 10;
 fn(x);
 console.log(x);
 
 /*
     11
     10
 */
```



### 复杂类型传参

函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。

```
 function Person(name) {
     this.name = name;
 }
 function f1(x) {
     console.log(x.name); 
     x.name = "张学友";
     console.log(x.name);   
 }
 var p = new Person("刘德华");
 console.log(p.name);
 f1(p);
 console.log(p.name);
```

运行结果：

```
 刘德华
 刘德华
 张学友
 张学友
```