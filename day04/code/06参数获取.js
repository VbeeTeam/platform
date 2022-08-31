/**
 * 参数获取
 * get、post、put、delete
 * post参数获取 =》安装 npm i body-parser --save
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//挂载参数处理
// extended:false 表示使用querystring来处理
// extended:true  表示使用第三方模块qs来处理
app.use(bodyParser.urlencoded({extended: false}))
//get  query
// app.get("/login", (req, res) => {
//     let params = req.query;
//     console.log("get:", params);
//     res.send("get方法登录成功");
// })
//post参数获取
// app.post("/login", (req, res) => {
//     let params = req.body;
//     console.log("post:", params);
//     if(params.username && params.password){
//         res.send("post方法登录成功");
//     }else{
//         res.send("post方法登录失败");
//     } 
// })
//put
// app.put("/login", (req, res) => {
//     let params = req.body;
//     console.log("put:", params);
//     if(params.username && params.password){
//         res.send("put方法登录成功");
//     }else{
//         res.send("put方法登录失败");
//     }
// })
app.delete("/login", (req, res) => {
    let params = req.body;
    console.log("delete:", params);
    if(params.username && params.password){
        res.send("delete方法登录成功");
    }else{
        res.send("delete方法登录失败");
    }
})
app.listen(3000, () => {
    console.log("server run success");
})