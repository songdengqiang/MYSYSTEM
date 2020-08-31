let express = require('express');
let myFun = require('./myPackage.js')
let setting = require('./setting.js')
let fs = require('fs')
let iconv = require('iconv-lite')
let child_process = require('child_process');
let Home = require('./router/home');
let Login = require('./router/login');

let port = 8080;
let host =myFun.pathFun.getLocalIpv4();

let app = express();  //初始化一个页面服务器
app = setting.setting(app);




//路由的配置
app.use('/',function(req,res){
    res.send('系统启动！')
})
app.use('/login',Login);
app.use('/home',Home);

// app.get('/find',function(req,res){
//     a.mogoFind('Login',{},function (err,data) {
//         if(err){console.log(err)}else{
//             res.send(data)
//         }
//     })
// })
// app.get('/save',function(req,res){
//     a.mogoSave('Login',{
//         account:"雯子",
//         password:"2016026"
//     },function (err) {
//         res.send([err,'成功'])
//     })
// })
//子进程的测试
app.get('/ceshi',function(req,res){
    let pythonName = 'ceshi.py'
    let argvs = " 李四在加工零件！";
    var ceshi = child_process.exec('python' + ' ./public/python/'+pythonName + argvs,{encoding:'binary'},function(err,stdout,stdEerr){
        if(err){
            console.log(err.stack)
        }else{
            let entityList = Object.values(iconv.decode(new Buffer(stdout,'binary'),'gb2312').split('\r\n')).splice(2,Object.values(iconv.decode(new Buffer(stdout,'binary'),'gb2312').split('\r\n')).length-3)
            res.send(entityList)
        }
    })
})
//服务器的状态监听
app.listen(port,()=>{
    console.log("访问的地址为:http://%s:%s",host,port)
})

