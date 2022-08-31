/**
 * fs 
 * 文件读取 readFile(文件路径，字符集编码（默认可以不写）, 回调函数) 第二个参数如果不设置，默认为buffer对象
 * 写入文件 writeFile(文件路径，写入的数据，字符集编码，回调函数)
 * 
 */
const fs = require("fs");
//异步读取文件
fs.readFile("./data.txt", "utf8", (err, data) => {
    if(err) return;
    // console.log(data.toString());
    console.log(data);
})

//同步读取
let txtStr = fs.readFileSync("./data.txt", "utf8");
console.log(txtStr);

//异步写文件
// fs.writeFile("./data.txt", "hello world", "utf8", (err) => {
//     if(err) return;
//     console.log("文件写入成功！");
// })
//同步写文件
fs.writeFileSync("./data.txt", "我是同步写入的文件");


