/**
 * 处理业务逻辑
 */

const data = require("./data/bookData.json");
const fs = require("fs");
const path = require("path");

//登录状态
var loginBoolean = false;

//自动生成图书id
let maxBookId = () => {
    let arr = [];
    if (data.length == 0) {
        arr[0] = 0;
    } else {
        data.forEach((item) => {
            arr.push(item.id);
        })
    }
    return Math.max.apply(null, arr);
}
//登录页面
exports.showLogin = (req, res) => {
    res.render("login", {});
}
//首页
exports.showIndex = (req, res) => {
    if (loginBoolean) {
        res.render("index", {
            list: data
        });
    } else {
        res.redirect("/");
    }
}
//新增页
exports.showAdd = (req, res) => {
    if (loginBoolean) {
        res.render("add", {});
    } else {
        res.redirect("/");
    }
}
//修改页
exports.showEdit = (req, res) => {
    if (loginBoolean) {
        // console.log(req.query)
        let id = req.query.id;
        let book = {};
        data.forEach((item) => {
            if (id == item.id) {
                book = item;
                return;
            }
        })
        // console.log(book);
        res.render("edit", book);
    } else {
        res.redirect("/");
    }
}
//添加图书业务逻辑
exports.addBook = (req, res) => {
    // console.log(req.body);
    let info = req.body;
    info.id = maxBookId() + 1;
    // console.log(info);
    data.push(info);
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/bookData.json"), JSON.stringify(data), "utf8", (err) => {
        if (err) {
            res.send("server error")
        }
        //路由重定向
        res.redirect("/toIndex");
    })
}
//修改图书逻辑
exports.editBook = (req, res) => {
    console.log(req.body);
    let info = req.body;
    data.forEach((item) => {
        if (info.id == item.id) {
            for (let key in info) {
                item[key] = info[key]
            }
            return;
        }
    })
    console.log(data);
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/bookData.json"), JSON.stringify(data), (err) => {
        if (err) {
            res.send("server error")
        }
        res.redirect("/toIndex");
    })

}
//删除图书
exports.deleteBook = (req, res) => {
    console.log(req.query);
    let id = req.query.id;
    data.forEach((item, index) => {
        if (id == item.id) {
            data.splice(index, 1);
            return;
        }
    })
    // console.log(data);
    //把数据写入文件
    fs.writeFile(path.join(__dirname, "/data/bookData.json"), JSON.stringify(data), (err) => {
        if (err) {
            res.send("server error")
        }
        res.redirect("/toIndex");
    })
}
//搜索图书
exports.searchBook = (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let newArr = [];
    if (name == "") {
        res.render("index", {
            list: data
        });
    } else {
        data.forEach((item) => {
            // if(name == item.name){
            //     newArr.push(item);
            //     return;
            // }
            //模糊查询
            if (item.name.indexOf(name) >= 0) {
                newArr.push(item);
                return;
            }
        })
        res.render("index", {
            list: newArr,
            keyword: name
        });
    }
}
//登录
exports.login = (req, res) => {
    console.log(req.body);
    let info = req.body;
    if (info.username && info.password) {
        loginBoolean = true;
        res.redirect("/toIndex");
    } else {
        res.send("请输入用户名或密码");
    }
}