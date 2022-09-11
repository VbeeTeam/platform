/**
 * 入口文件
 * 模板引擎 art-template => npm i art-template express-art-template --save
 */
const express = require("express");
const app = express();
const template = require("art-template");
const path = require("path");
//设置静态资源路径 views作为根目录参数
app.set('views', path.join(__dirname, 'view'));
//1.设置art模板后缀 html
app.set('view engine', 'html');
//2.设置兼容 html
app.engine('html', require('express-art-template'));
app.get("/", (req, res) => {
    // 1.基于模板名渲染模板
    // var html = template(__dirname + '/view/tpl.art', {
    //     user: {
    //         name: '张三'
    //     }
    // });
    // res.send(html);
    // 2.将模板源代码编译成函数
    // let tpl = `
    //     <ul>
    //         {{each list}}
    //             <li>
    //                 {{$index}} - {{$value}}
    //             </li>
    //         {{/each}}
    //     </ul>
    // `;
    
    // let com = template.compile(tpl);
    // let html = com({
    //     list: ["apple", "banana", "orange"]
    // })
    // res.send(html);
    //3.将模板源代码编译成函数并立刻执行
    // let html = template.render(tpl, {
    //     list: ["apple", "banana", "orange"]
    // });
    // res.send(html);
    //4.res.render
    let data = {list: ["apple", "banana", "orange"]};
    //参数1：模板的名称   参数2：数据
    res.render("list", data);
})
app.listen(3000, () => {
    console.log("server run success");
})