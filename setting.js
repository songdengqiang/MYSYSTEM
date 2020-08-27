let session = require('express-session');
let body_parser = require('body-parser');
let express = require('express');
let path = require('path');

exports.setting = function (app) {
    app.set("views","public"); //更改静态目录
    app.set('view engine', 'html');//实现模板引擎读取html文件

    app.use(body_parser.urlencoded({ extended: false }));
    app.use(body_parser.json());

    app.use(express.static('public')); //配置静态目录
    app.set('public', path.join(__dirname, 'public'));

    app.use(session({
        secret: 'keyboard cat',  //编码形式
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge:1000*60*10    //最大过期时间为十分钟
        },
        rolling:true     //若在操作，则关闭后的十分钟后失效
    }));

    app.all('*', function(req, res,next) {  //跨域请求配置
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By", ' 3.2.1');
        res.header("Content-Type", "application/json;charset=utf-8");
        next();
    });

    return app;
}