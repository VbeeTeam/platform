# 02
## 核心模块API
### 路径操作
#### 路径基本操作API    =》 path

```js
/**
 * 路径的操作 path
 */
const path = require("path");
```

###### __dirname  获取当前文件绝对路径

```js
console.log("__dirname:", __dirname);
console.log("dirname:", path.dirname("C:\\Users\\susu\\Desktop\\2021-7-WEB\\day09\\code\\index.html"));
```

###### __filename 获取当前文件及路径

```js
console.log("__filename:", __filename);
console.log("parse:", path.parse(__filename));
```

###### join 拼接路径

```js
let str3 = "C:\\a\\b\\c";
let str4 = "index.html";
console.log("join:", path.join(str3, str4));
console.log("join:", path.join("\\a", "\\b", "..\\c", ".\\d", "index.html"));
```

###### resolve 解析路径 

```js
//默认拼接在当前文件所在的绝对路径上
console.log("resolve:", path.resolve("目录1","目录2/目录3", "../目录4/文件.gif"));
//指定绝对路径
console.log("resolve:", path.resolve("/目录1","目录2/目录3", "../目录4/文件.gif"));
```

### 文件操作(fs)

```js
/**
 * fs 文件信息stat(文件路径，回调函数)
 */
const fs = require("fs");
```

- 文件信息获取  stat()

  ```js
  //异步读取
  // ./data.txt 文件
  // ./abc
  fs.stat("./data.txt", (err, stat) =>{
      console.log(err); //null:表示信息获取成功，没有错误
      console.log(stat); //文件信息对象
      if(err) return;
      if(stat.isFile()){
          console.log("获取的信息是文件")
      }else if(stat.isDirectory()){
          console.log("获取的信息是目录")
      }
      console.log("atime访问文件的时间", stat.atime.toString());
      console.log("mtime文件数据发生变化的时间", stat.mtime.toString());
      console.log("ctime文件状态信息发生变化的时间", stat.ctime.toString());
      console.log("birthtime文件创建的时间", stat.birthtime.toString());
  });
  
  //同步获取文件信息
  let info = fs.statSync("./data.txt");
  console.log("=====", info)
  ```

- 读文件操作 readFile()

  ```js
  //异步读取文件
  fs.readFile("./data.txt", "utf8", (err, data) => {
      if(err) return;
      // console.log(data.toString());
      console.log(data);
  })
  //同步读取
  let txtStr = fs.readFileSync("./data.txt", "utf8");
  console.log(txtStr);
  ```

- 写文件操作 writeFile()

  ```js
  //异步写文件
  // fs.writeFile("./data.txt", "hello world", "utf8", (err) => {
  //     if(err) return;
  //     console.log("文件写入成功！");
  // })
  //同步写文件
  fs.writeFileSync("./data.txt", "我是同步写入的文件");
  ```

- 目录操作

  ```js
  /异步的创建
  // fs.mkdir(path.join(__dirname, "ab"), (err) => {
  //     if(err) return;
  // })
  //异步的删除
  // fs.rmdir(path.join(__dirname, "ab"), (err) => {
  //     if(err) return;
  // });
  //异步读取目录中的文件和目录
  fs.readdir(__dirname, (err, directory) => {
      if(err) return;
      console.log(directory);
      directory.forEach((item, index) => {
          // console.log(item, index)
          fs.stat(path.join(__dirname, item), (err, stat) => {
              if(err) return;
              if(stat.isFile()){
                  console.log(item, "=是文件");
              }else if(stat.isDirectory()){
                  console.log(item, "=是目录");
              }
          })
         
      })
  })
  ```

### 文件操作案例

###### 创建站点

## 包
> 多个模块可以形成包，不过要满足特定的规则才能形成规范的包

### NPM （node.js package management）
> 全球最大的模块生态系统，里面所有的模块都是开源免费的；也是Node.js的包管理工具。

- [官方网站](https://www.npmjs.com/ )

### npm包安装方式
- 本地安装
- 全局安装

### 解决npm安装包被墙的问题
- --registry
  
    + npm config set registry=https//registry.npm.taobao.org 
- cnpm
    + 淘宝NPM镜像,与官方NPM的同步频率目前为10分钟一次 
    + 官网: http://npm.taobao.org/ 
    + npm install -g cnpm –registry=https//registry.npm.taobao.org 
    + 使用cnpm安装包: cnpm install 包名
    
    

### npm常用命令
- 安装包
- 更新包
- 卸载包

## 自定义包
### 包的规范
- package.json必须在包的顶层目录下
- 二进制文件应该在bin目录下
- JavaScript代码应该在lib目录下
- 文档应该在doc目录下
- 单元测试应该在test目录下

### package.json字段分析
- name：包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含空格
- description：包的简要说明
- version：符合语义化版本识别规范的版本字符串
- keywords：关键字数组，通常用于搜索
- maintainers：维护者数组，每个元素要包含name、email（可选）、web（可选）字段
- contributors：贡献者数组，格式与maintainers相同。包的作者应该是贡献者数组的第一- 个元素
- bugs：提交bug的地址，可以是网站或者电子邮件地址
- licenses：许可证数组，每个元素要包含type（许可证名称）和url（链接到许可证文本的- 地址）字段
- repositories：仓库托管地址数组，每个元素要包含type（仓库类型，如git）、url（仓- 库的地址）和path（相对于仓库的路径，可选）字段
- dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
- devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

