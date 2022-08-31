/**
 * 路径的操作 path
 */
const path = require("path");
//获取获取路径的最后一部分-扩展名的文件 path.basename(字符串文件地址，去掉文件后缀/过滤)
let str = "C:\\Users\\susu\\Desktop\\2021-7-WEB\\day09\\code\\02path.js";
let str2 = "C:\\Users\\susu\\Desktop\\2021-7-WEB\\day09\\code\\index.html";
console.log("basename:", path.basename(str));
console.log("basename:", path.basename(str2));
console.log("basename:", path.basename(str2, ".html"));
// __dirname  获取当前文件绝对路径  path.dirname 获取文件绝对路径
console.log("__dirname:", __dirname);
console.log("dirname:", path.dirname("C:\\Users\\susu\\Desktop\\2021-7-WEB\\day09\\code\\index.html"));
//extname 获取文件后缀名
console.log("extname:", path.extname(str));
console.log("extname:", path.extname(str2));
//format 路径格式化 obj => string
var objPath = {
    root: 'C:\\',
    dir: 'C:\\home\\user\\dir',
    base: 'file.txt'
}
var objPath2 = {
    root: 'C:\\',
    dir: 'C:\\home\\user\\dir',
    name: 'demo',
    ext: '.html'
}
console.log("format:", path.format(objPath));
console.log("format:", path.format(objPath2));
//parse 格式化处理 string =》 obj
//__filename 获取当前文件及路径
console.log("__filename:", __filename);
console.log("parse:", path.parse(__filename)); 
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\susu\\Desktop\\2021-7-WEB\\day09\\code',
//     base: '02path.js',
//     ext: '.js',
//     name: '02path'
// }
// isAbsolute 判断是否为绝对路径
console.log("isAbsolute:", path.isAbsolute("C:\\a\\b\\index.html"));//true
console.log("isAbsolute:", path.isAbsolute("\\a\\b\\index.html"));//true
console.log("isAbsolute:", path.isAbsolute("a\\b\\index.html")); //false
//join 拼接路径  ..返回上一层 .当前路径
let str3 = "C:\\a\\b\\c";
let str4 = "index.html";
console.log("join:", path.join(str3, str4));
console.log("join:", path.join("\\a", "\\b", "..\\c", ".\\d", "index.html"));
//resolve 解析路径 
//默认拼接在当前文件所在的绝对路径上
console.log("resolve:", path.resolve("目录1","目录2/目录3", "../目录4/文件.gif"));
//指定绝对路径
console.log("resolve:", path.resolve("/目录1","目录2/目录3", "../目录4/文件.gif"));

//normalize 规范化路径
console.log("normalize:", path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log("normalize:", path.normalize('C:////temp\\\\/\\/\\/foo/bar'));

// sep环境变量分隔符
console.log("sep:", 'foo\\bar\\baz'.split(path.sep));

// delimter路径分隔符  process.env.PATH获取盘符里的文件路径
console.log("delimiter:", process.env.PATH.split(path.delimiter));