let express = require('express')
let child_process = require('child_process');
let iconv = require('iconv-lite')
let router = express.Router()

router.get('/',function(req,res){
    res.send("这是主页")
})

router.post('/pyChild',function(req,res){
    let pythonName = req.body.pyName
    let argvs = req.body.textParam
    var ceshi = child_process.exec('python' + ' ./public/python/'+pythonName + ' ' + argvs,function(err,stdout,stdEerr){
        if(err){
            console.log(err.stack)
            console.log(stdout)
        }else{
            // console.log(stdout)
            // let entityList = Object.values(iconv.decode(new Buffer(stdout,'binary'),'utf-8').split('\r\n')).splice(2,Object.values(iconv.decode(new Buffer(stdout,'binary'),'gb2312').split('\r\n')).length-3)
            res.send(stdout)
        }
    })
})


module.exports = router