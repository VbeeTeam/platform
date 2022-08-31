/**
 * 初步实现服务器功能
 */
const http = require("http");
//创建服务器对象
// let server = http.createServer();
//绑定事件
// server.on("request", (req, res) => {
    //req:前端请求的参数
    //res:后端响应给前端的信息
    // res.end("success");
// })
//监听端口
// server.listen(3000, "192.168.2.15", () => {
//     console.log("run success");
// });
http.createServer((req, res) => {
    res.end("ok");
}).listen(3000, "192.168.2.15", () => {
    console.log("server run success");
})
//127.0.0.1
//localhost
//IPV4 =》 ipconfig => 192.168.2.15
