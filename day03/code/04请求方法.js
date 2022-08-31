/**
 * 常用的请求方法
 * get :获取数据 =》传输的数据量小，请求参数显示在url地址栏中，不安全
 * post：提交数据 =》传输数据量大，请求参数是用户看不到的，安全
 * delete：删除数据
 * put：更新数据
 */
const http = require("http");
const url = require("url");
const queryString = require("querystring");
// get请求传参 http://localhost:3000/login?name=张三&password=123456
// post请求传参 
http.createServer((req, res) => {
    //get 参数处理
    // console.log(req.url);
    // let ret = url.parse(req.url, true); //true设置为对象
    // console.log(ret.query);
    // console.log(ret.query.name,ret.query.password);
    //post参数处理
    // let ret = queryString.parse(req.url);
    // console.log("post", ret);
    //chunk 流
    let postData = "";
    req.on("data", (chunk)=>{
        postData += chunk;
    })
    req.on("end", () => {
        console.log("postData", postData);
        let ret = queryString.parse(postData);
        console.log(ret);
        res.end(ret.name);
    })
}).listen(3000, () => {
    console.log("server success");
})