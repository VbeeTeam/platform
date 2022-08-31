/**
 * 查询成绩功能
 */
const http = require("http");
const queryString = require("querystring");
const scoreData = require("./data/score.json");
const fs = require("fs");
const path = require("path");
http.createServer((req, res) => {
    if(req.url.startsWith("/search")){
        let pdata = "";
        req.on("data", (chunk) => {
            pdata += chunk;
        })
        req.on("end", () => {
            console.log(pdata);
            let obj = queryString.parse(pdata);
            console.log(obj);
            console.log(scoreData);
            let result = scoreData[obj.name];
            console.log(result);
            //读取文件
            fs.readFile(path.join(__dirname, "view", "result.html"), "utf8", (err, file) => {
                file = file.replace("$$chinese$$", result.chinese);
                file = file.replace("$$math$$", result.math);
                file = file.replace("$$english$$", result.english);
                file = file.replace("$$summary$$", result.summary);
                res.end(file);
            })
        })
    }else{
        res.end("path error");
    }
}).listen(3000, () => {
    console.log("server run success");
})