/**
 * 模拟登录接口
 */
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const queryString = require("querystring");
http.createServer((req, res) => {
    if (req.url.startsWith("/login")) {
        // let ret = url.parse(req.url, true).query;
        let postData = "";
        let obj = {};
        req.on("data", (chunk) => {
            postData += chunk;
        })
        req.on("end", () => {
            obj = queryString.parse(postData);
            // console.log(ret);
            console.log("obj", obj);
            fs.readFile(path.join(__dirname, "www", "login.html"), "utf8", (err, file) => {
                if (err) {
                    res.end("server error")
                } else {
                    // console.log(file);
                    file = file.replace("$$username$$", obj.username);
                    file = file.replace("$$password$$", obj.password);
                    res.end(file);
                }
            })s
        })
    }
}).listen(3000, () => {
    console.log("server run success");
})