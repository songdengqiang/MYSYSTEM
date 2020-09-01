let express = require('express');
let myFun = require('./myPackage.js')
let setting = require('./setting.js')
let fs = require('fs')
let Home = require('./router/home');
let Login = require('./router/login');

let port = 8999;
let host =myFun.pathFun.getLocalIpv4();

let app = express();  //初始化一个页面服务器
app = setting.setting(app);




//路由的配置
app.get('/',function(req,res){
    res.send('系统启动！')
})
app.use('/login',Login);
app.use('/home',Home);

//服务器的状态监听
app.listen(port,()=>{
    console.log("访问的地址为:http://%s:%s",host,port)
})

