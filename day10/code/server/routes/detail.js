var express = require('express');
var router = express.Router();

const db = require('../public/javascripts/db');

router.get('/', function(req, res, next) {
    
    let id = req.query.id;
    let sql = "select * from info where id = ?";
    let data = [id];

    db(sql, data, (result) => {
        if(result.length >= 0){
            res.json({
                code: 200,
                message: "请求成功",
                data: result[0]
            })
        }else{
            res.json({
                code: 500,
                message: "服务器错误"
            })
        }
    })

});

module.exports = router;
