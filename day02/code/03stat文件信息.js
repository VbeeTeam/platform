/**
 * fs 文件信息stat(文件路径，回调函数)
 */
const fs = require("fs");

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

