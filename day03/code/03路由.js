/**
 * 路由
 */
const express = require("express");
const app = express();
//基本的路由处理
app.get("/", (req, res) => {
    res.send("get data");
})
app.post("/", (req, res) => {
    res.send("post data");
})
app.put("/", (req, res) => {
    res.send("put data");
})
app.delete("/", (req, res) => {
    res.send("delete data");
})
app.listen(3000, () => {
    console.log("server run success");
})