let express = require('express');
let myFun = require('./myPackage.js')
let setting = require('./setting.js')


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
//数据库的连接



//服务器的状态监听
app.listen(port,()=>{
    console.log("访问的地址为:http://%s:%s",host,port)
})

