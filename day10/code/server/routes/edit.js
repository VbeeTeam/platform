var express = require('express');
var router = express.Router();

const db = require('../public/javascripts/db');

router.put('/', function(req, res, next) {
    
    let info = req.body;
    let sql = "update info set name=?, sex=?, age=?, phone=?, description=? where id = ?";
    let data = [info.name, info.sex, info.age, info.phone, info.description, info.id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "修改成功"
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
