/**
 * 目录的操作
 * mkdir(创建的目录路径，回调函数)
 * mkdir(删除的目录路径，回调函数)
 * readdir(读取目录的路径，回调函数)
 */
const fs = require("fs");
const path = require("path");
//异步的创建
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


