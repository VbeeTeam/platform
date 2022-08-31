/**
 * 路径的分发 req.url：可以获取请求地址的路径(端口号后面的部分)
 */
const http = require("http");
http.createServer((req, res) => {
    console.log(req.url);
    if(req.url.startsWith("/index")){
        res.end("index");
    }else if(req.url.startsWith("/about")){
        res.end("about");
    }else{
        res.writeHead(404, { //设置响应类型为utf8 解决中文乱码问题
            "Content-Type": "text/plain; s
        })
        res.end("您访问错了");
    }
}).listen(3000, () => {
    console.log("server run success");
})