let express = require('express')
let router = express.Router()
let myFun = require('../myPackage.js')



let a = myFun.Mongo;
    a.setInfo('xiao','20160626','mongodb://localhost:27017/xiaoqiang');
    a.connectMoGo();
    a.setSchema('Login',{account:{type:String},password:{type:String}});

/* 登录功能 */
router.get('/',function(req,res){
    res.send("这是登录页！")
})
router.post('/check',function (req,res) {
    // loginD.find({account:req.body.account,password:req.body.password},function (err,data) {
    //     // console.log(data);
    //     if(data.length >0 ){
    //         res.send("成功！")
    //     }else {
    //         res.send("失败！")
    //     }
    // })
});
router.post('/insertData',function (req,res) {
    // console.log(result);
    // const registerD = new loginD({
    //     account:req.body.account,
    //     password:req.body.password
    // });
    // registerD.save(function (err,data) {
    //     if(err){
    //         console.log(err)
    //     }else {
    //         res.send("成功！")
    //     }
    // })
});
/* 注册功能 */



module.exports = router