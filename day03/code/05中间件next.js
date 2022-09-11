/**
 * 中间件：就是处理过程中的一个环节
 * next():作用就是把请求方法传递到下一个中间件
 */
const express = require("express");
const app = express();

// app.get("/user", (req, res, next) => {
//     console.log("访问了user1");
//     next();
// })
// app.get("/user", (req, res, next) => {
//     console.log("访问了user2");
//     next();
// })
// app.get("/user", (req, res, next) => {
//     console.log("访问了user3");
//     next();
// })

app.get("/user", (req, res, next) => {
    console.log("user1");
    next();
}, (req, res) =>{
    console.log("user2");
})


app.listen(3000, () => {
    console.log("server run success")
})
