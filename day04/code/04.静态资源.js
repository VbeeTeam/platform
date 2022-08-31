/**
 * 托管静态资源文件
 */
const express = require("express");
const app = express();
//将publick文件夹下的静态资源挂载到路由上
// app.use(express.static("public"));
//添加虚拟目录
app.use("/static", express.static("public"));

app.listen(3000, () => {
    console.log("server run success");
})