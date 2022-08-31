/**
 * 网站站点
 */
const path = require("path");
const fs = require("fs");
//初始化目录 
let root = __dirname;
console.log(root);
//初始化文件及目录
let initData = {
    projectName: "mydemo",
    data: [
        {
            name: "css",
            type: "dir"
        },
        {
            name: "img",
            type: "dir"
        },
        {
            name: "js",
            type: "dir"
        },
        {
            name: "font",
            type: "dir"
        },
        {
            name: "index.html",
            type: "file"
        }
    ]
}
let fileContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>nodejsCreate</title>
</head>
<body>
    我是nodejs动态创建的
</body>
</html>`;
//创建根目录
fs.mkdir(path.join(root, initData.projectName), (err) => {
    if(err) return;
    //创建子目录及文件
    initData.data.forEach((item)=>{
        if(item.type == "dir"){
            fs.mkdir(path.join(root, initData.projectName, item.name), (err) => {
                if(err) return;
            })
        }else if(item.type == "file"){
            fs.writeFile(path.join(root, initData.projectName, item.name), fileContent, (err) => {
                if(err) return;
            })
        }
    })
})