/**
 * 入口js文件
 * express搭建静态服务器
 */
const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})