let express = require('express');
let myFun = require('./myPackage.js')
let setting = require('./setting.js')
let fs = require('fs')
let iconv = require('iconv-lite')
let child_process = require('child_process');
const { stderr, argv, argv0 } = require('process');


let port = 8080;
let host =myFun.pathFun.getLocalIpv4();

let app = express();  //初始化一个页面服务器
app = setting.setting(app);
let a = myFun.Mongo;
    a.setInfo('xiao','20160626','mongodb://localhost:27017/xiaoqiang');
    a.connectMoGo();
    a.setSchema('Login',{account:{type:String},password:{type:String}});

//路由的配置
app.get('/',function (req,res) {
    res.send('系统启动！')    
})

app.get('/find',function(req,res){
    a.mogoFind('Login',{},function (err,data) {
        if(err){console.log(err)}else{
            res.send(data)
        }
    })
})
app.get('/save',function(req,res){
    a.mogoSave('Login',{
        account:"雯子",
        password:"2016026"
    },function (err) {
        res.send([err,'成功'])
    })
})
//子进程的测试
app.get('/ceshi',function(req,res){
    let pythonName = 'ceshi.py'
    var ceshi = child_process.exec('python ./public/python/' + pythonName,{encoding:'binary'},function(err,stdout,stdEerr){
        if(err){
            console.log(err.stack)
        }
        // console.log(
        //     iconv.decode(new Buffer(stdout,'binary'),'gb2312')
        // )
        res.send(iconv.decode(new Buffer(stdout,'binary'),'gb2312'))
    })
})
app.get('/wenda',function(req,res){
    let pythonName = 'ceshi.py'
    var ceshi = child_process.exec('python ./public/python/', + pythonName,{encoding:'binary'},argv0,function(err,stdout,stdEerr){
        if(err){
            console.log(err.stack)
        }
        // console.log(
        //     iconv.decode(new Buffer(stdout,'binary'),'gb2312')
        // )
        res.send(iconv.decode(new Buffer(stdout,'binary'),'gb2312'))
    })
})






//服务器的状态监听
app.listen(port,()=>{
    console.log("访问的地址为:http://%s:%s",host,port)
})

