# Day01  开班  跨平台开发实训

## 课程内容

- 后端技术：Node.js
- 前端技术：Vue.js

## 课程安排（64课时）

- Node.js基础学习 - 20课时
- Vue.js基础学习 - 20课时
- B2C商城项目实战 - 24课时  =》平时成绩+项目成绩+演讲能力

### 目标

1. 强化编码、调试能力。

2. 了解基于Web前端的网页设计与制作技术。

3. 精通Html+Css、JavaScript 、Vue和Node.js的语法以及相关运用。 

4. 体验企业工作环境和工作方式。

5. 加强团队意识、交流和表达能力。

## 项目分析-查看项目效果

## 商城模式

一、O2O商城系统模式

是指在线离线或者线上到线下的一种模式，使企业可以通过互联网将线下的商务机会和线上结合，让线上成为线下交易的平台。作为线下商务与互联网相结合的新模式，O2O模式解决了传统行业的电子商务问题。目前比较有代表性的企业有美团和饿了么两个平台。

二、B2C商城系统模式

B2C是最典型的商城模式，即企业直接面向消费者的模式。使用B2C这种商城系统的企业一般都有自己的货源，在商城上销售自己的产品，树立自己的品牌，具有代表性的企业是苏宁商城。

三、B2B商城系统模式

B2B模式是指企业与企业之间通过互联网进行产品、服务和信息交流的商业模式，主要是批发采购。网上B2B商城是一个可以将企业内网与客户紧密结合的平台。是电子商务中历史最长，最完善的商业模式。典型的代表企业是阿里巴巴。

四、B2B2C商城系统模式

第一个B是指货物或服务的供应商。第二个B是指从事电子商务的企业，C指消费者。

B2B2C商城系统又称多用户商城系统。以京东、天猫商城为例。

## 前端技术栈

![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\1.png)

## 前端后端的区别

### 前端 

![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\src=http___photo.16pic.com_00_05_66_16pic_566331_b.jpg&refer=http___photo.16pic.jpg)

### 后端 

![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\src=http___images2.10qianwan.com_10qianwan_20180509_b_0_201805091348187671.jpg&refer=http___images2.10qianwan.jpg)

### 印象中的程序员 



![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\微信图片_20210326135631.png)

### 实际工作中的

![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\微信图片_20210326135651.png)

## 产品开发人员及流程

![](C:\Users\15596\Desktop\2022-9-浙江工商\跨平台开发\day01\img\微信图片_20210327204026.png)

## 初识Nodejs

- JavaScript是什么？ 

- JavaScript可以运行在哪里？ 

  - JavaScript一种在浏览器中解释运行的脚本语言，它的解释器被称为JavaScript引擎，为浏览器的一部分，是广泛用于

  客户端的脚本语言，最早是在HTML网页上使用，用来给HTML（HTML5）网页增加动态功能

| 浏览器  | 内核        |
| ------- | ----------- |
| IE      | Trident     |
| FireFox | Gecko       |
| Chrome  | WebKit\Bink |
| Safari  | WebKit      |
| Opera   | Presto      |
| Edge    | Chakra      |

## Node.js的诞生

- 作者Ryan Dahl 瑞恩·达尔
  + 2004 纽约 读数学博士 
  + 2006 退学到智利 转向开发 
  + 2009.5对外宣布node项目，年底js大会发表演讲 
  + 2010 加入Joyent云计算公司 
  + 2012 退居幕后

> 1.简单的说 Node.js 就是运行在服务端的 JavaScript。
>
> 2.Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。
>
> 3.Node.js是一个事件驱动I/O的服务端JavaScript环境（由C++编写），基于Google的V8引擎设计，V8引擎执行Javascript的速度非常快，性能非常好。

### 事件驱动

事件驱动模型主要包含3个对象：事件源、事件和事件处理程序。

· 事件源：产生事件的地方(html元素)

· 事件：点击/鼠标操作/键盘操作等等

· 事件对象：当某个事件发生时，可能会产生一个事件对象，该时间对象会封装好该时间的信息，传递给事件处理程序

· 事件处理程序：响应用户事件的代码 
我们使用的window系统也算得上是事件驱动了。简单的事例：监听鼠标点击事件，并能够显示鼠标点击的位置x,y。

### Node.js的工作原理

nodejs是单线程，异步I/O，事件驱动

1.node.js的单线程并不是真正的单线程，只是开启了单个线程进行业务处理（cpu的运算），同时开启了其他线程专门处理I/O。当一个指令到达主线程，主线程发现有I/O之后，直接把这个事件传给I/O线程，不会等待I/O结束后，再去处理下面的业务，而是拿到一个状态后立即往下走，这就是“单线程”、“异步I/O”。  

2.Node.js的I/O 处理完之后会有一个回调事件，这个事件会放在一个事件处理队列里头，在进程启动时node会创建一个类似于While(true)的循环，它的每一次轮询都会去查看是否有事件需要处理，是否有事件关联的回调函数需要处理，如果有就处理，然后加入下一个轮询，如果没有就退出进程，这就是所谓的“事件驱动”。

3.在node.js中，事件主要来源于网络请求，文件I/O等，根据事件的不同对观察者进行了分类，有文件I/O观察者，网络I/O观察者。事件驱动是一个典型的生产者/消费者模型，请求到达观察者那里，事件循环从观察者进行消费，主线程就可以马不停蹄的只关注业务不用再去进行I/O等待。

## Node.js可以用来做什么？

- 具有复杂逻辑的动态网站 
- WebSocket服务器  即时聊天室（直播）
- 命令行工具 
- 带有图形界面的本地应用程序 
- ......

## Node.js开发环境准备

1. 普通安装方式[官方网站](https://nodejs.org/zh-cn/)

2. 配置环境变量

   （1）node.js的msi包是一路next就可以了

   （2）安装完后，可以在命令行中输入node -v 来查看安装版本和是否安装成功，再输入npm-v查看npm模块是否正常

   （3）配置npm的全局模块（新建文件夹node_global、node_cache）

     npm config set prefix "D:\nodejs\node_global"  》模块配置位置
     npm config set cache "D:\nodejs\node_cache"   》缓存文件

   （4）配置环境变量

   进入环境变量对话框，在【系统变量】下新建【NODE_PATH】，输入D:\nodejs\node_global\node_modules

   将【用户变量】下的【Path】修改为 D:\nodejs\node_global

   （5）查看配置路径 npm root -g

   （6）配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口输入命令，进行模块的全局安装
   
   npm install express -g      # -g是全局安装的意思
   
   （7）设置淘宝镜像 npm config set registry https://registry.npm.taobao.org
   
   （8）查看淘宝镜像 npm config get registry

## 开发工具安装（工欲善其事必先利其器！）

### 1.Vscode的下载、安装

（1）官网https://code.visualstudio.com/Download下载最新版   最好下载zip格式

（2）解压到非系统盘，文件夹最好不要出现中文和空格，我解压到D:\VSCode-win32-x64-1.31.1，直接运行code.exe即可

### 2.安装常用插件

- Chinese (Simplified) Language：中文（简体）语言包为 VS Code 提供本地化界面
- html CSS Support ：提供基础的语法知识编写辅助
- Open-In-Browser：在vscode中打开浏览器访问
- Prettier - Code formatter:格式化代码
- Vetur: vue代码模块提示
- vscode-icons 文件图标

### 3.vscode中无法识别npm相关模块

以管理员身份运行vscode;
 \* 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的;
 \* 执行：set-ExecutionPolicy RemoteSigned;
 \* 这时再执行get-ExecutionPolicy，就显示RemoteSigned

## NodeJs服务器端模块化

- 服务器端模块化规范CommonJS与实现Node.js

- 模块导出与引入     

  模块导出：exports、module

  模块引入：require()

- 模块导出机制分析

  exports导出调用时要调用导出方法

  module导出调用时直接使用方法

- 模块加载规则
  
  + 模块查找 不加扩展名的时候会按照如下后缀顺序进行查找 .js .json.txt
  
- 模块分类
  + 自定义模块
  + 系统核心模块
    * fs 文件操作
    * http 网络操作
    * path 路径操作
    * querystring 查询参数解析
    * url url解析
    * ......

## JavaScript-ES6常用语法

- 变量声明let与const
- 变量的解构赋值
  + 数组解构赋值
  + 对象解构赋值
  + 字符串解构赋值
- 字符串扩展
  + includes()     判断字符串中是否包含指定的字符（有：true，无：false）
  + startsWith()  判断字符串是否以特定的字符开始（有：true，无：false）
  + endsWith()   判断字符串是否以特定的字符结束（有：true，无：false）
  + 模板字符串   ``反引号 表示模板，模板中的内容可以有格式，通过${}填充数据
- 函数扩展
  + 参数默认值
  + 参数解构赋值
  + rest函数
  + 扩展运算符
  + 箭头函数