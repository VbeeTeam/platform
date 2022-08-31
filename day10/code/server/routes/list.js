var express = require('express');
var router = express.Router();
const db = require("../public/javascripts/db");
router.get('/', function(req, res, next) {
    var page = req.query.page || 1;//传过来的页数
    var size = req.query.size || 5;//传过来的条数
    var total = 0;
    let sql = "select * from info";
    if(req.query.name && req.query.sex){
        sql = sql + ` where name='${req.query.name}' and sex='${req.query.sex}'`;
        console.log(sql);
    } else if(req.query.name){
        sql = sql + ` where name='${req.query.name}'`;
    }else if(req.query.sex){
        sql = sql + ` where sex='${req.query.sex}'`;
    }
    //查询总条数
    db(sql, null, (result) => {
        total = result.length;
    })
    //分页查询
    //select * from info limit m, n;
    //m：从第几个数据开始查
    //n: 查多少条数据
    var m = (parseInt(page) - 1) * size;
    //13条数据 page =1 => m=0, size=5 ; page = 2 => m=5, size = 5  
    sql = sql + ` limit ${m}, ${size}`;
    setTimeout(()=>{
        db(sql, null, (result) => {
            console.log(result)
            if(result.length >= 0){
                res.json({
                    code: 200,
                    message: "请求成功",
                    data: result,
                    total: total
                })
            }else{
                res.json({
                    code: 500,
                    message: "服务器错误"
                })
            }
        })
    },300)
});
module.exports = router;
