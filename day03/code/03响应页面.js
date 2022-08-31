/**
 * 响应给前端完整的页面信息
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
http.createServer((req, res) => {
    // if(req.url.startsWith("/index")){ // /index
    //     fs.readFile(path.join(__dirname, "www", "index.html"), "utf8", (err, file) =>{
    //         if(err){
    //             res.end("server error");
    //         }else{
    //             console.log(file);
    //             res.end(file);
    //         }
    //     })
    // }else if(req.url.startsWith("/about")){
    //     fs.readFile(path.join(__dirname, "www", "about.html"), "utf8", (err, file) =>{
    //         if(err){
    //             res.end("server error");
    //         }else{
    //             res.end(file);
    //         }
    //     })
    // }else{
    //     res.writeHead(404, {
    //         "Content-Type": "text/plain; charset=utf8"
    //     })
    //     res.end("页面被吃了！");
    // }
    //优化响应页面信息
    console.log(req.url);// /index.html
    fs.readFile(path.join(__dirname, "www", req.url), "utf8", (err, file) => {
        if(err){
            res.writeHead(404,{
                "Content-Type": "text/plain; charset=utf8"
            })
            res.end("没有这个页面");
        } else {
            res.end(file);
        }
    })
}).listen(3000, () => {
    console.log("server run success");
})