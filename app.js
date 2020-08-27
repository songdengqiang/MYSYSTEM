let express = require('express');

let port = 8080;
let host ="localhost";

let app = express();  //初始化一个页面服务器

//路由的配置
app.get('/',function(req,res){
    res.send("服务器启动成功！")
})



//服务器的状态监听
app.listen(port,()=>{
    console.log("访问的地址为:http://%s:%s",host,port)
})

