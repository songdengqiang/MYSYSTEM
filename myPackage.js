let os = require('os');
let dns = require('dns');
let xmlReader = require('xmljs');
let fs = require('fs');
let mongoose = require('mongoose');

//路径获取对象
class myPathFunction {
    constructor () {
        this.title = "这是一个路径函数，包含一些简单的运用操作，方法的列表和说明如下"
        this.infos = [
            {name:"getLocalIpv4",info:"获取本机的内网地址：具有一个字符串返回值（IPv4）"},
            {name:"getLocalIpv6",info:"获取本机的内网地址：具有一个数组返回值（IPv6）"}
        ];
    }
    help () {
        console.log(this.title);
        this.infos.forEach(function (e,i) {
            console.log("第%s个方法:%s,主要功能:%s",(i+1),e.name,e.info)
        })
    };
    getLocalIpv4 () {
        var interfaces = os.networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    };
    getLocalIpv6 () {
        let strIpv6 = dns.getServers();
        return strIpv6;
    }
}
//时间对象
class myGetTime {
    constructor () {
        this.title = "这是一个时间函数，包含一些简单的运用操作，方法的列表和说明如下"
        this.infos = [
            {name:"getYear",info:"获取本年份值"},
            {name:"getMoth",info:"获取月份值"},
            {name:"getWeek",info:"获取星期"},
            {name:"getDay",info:"获取日期"},
            {name:"getHour",info:"获取当前时间的小时值"},
            {name:"getMinutes",info:"获取当前时间的分钟值"},
            {name:"getSeconds",info:"获取当前时间的秒值"}
        ];
        this.time = new Date();
    };
    help () {
        console.log(this.title);
        this.infos.forEach(function (e,i) {
            console.log("第%s个方法:%s,主要功能:%s",(i+1),e.name,e.info)
        })
    }
    getYear () {
        return this.time.getFullYear;
    };
    getMoth () {
        return this.time.getMonth + 1;
    };
    getWeek () {
        return "周" + this.time.getDay();
    };
    getDay () {
        return this.time.getDate();
    }
    getHour () {
        return this.time.getHours();
    }
    getMinutes () {
        return this.time.getMinutes();
    }
    getSeconds () {
        return this.time.getSeconds();
    }
    
}
//mongodb数据库对象
class MongoDB {
    constructor () {
        this.user = null;
        this.pass = null;
        this.url = null;
    };
    setInfo (accout,password,url) {
        this.user = accout;
        this.pass = password;
        this.url = url;
    };
    connectMoGo () {
        mongoose.connect(this.url,{
            db: {native_parser: true},
            server: {poolSize: 5},//最大连接池为5
            // replset: {rs_name: 'myReplicaSetName'},
            user: this.user,
            pass: this.pass
        },(err)=>{
            if(err){
                console.log(err);
                return 0;
            }else{
                console.log("连接成功!");
                return 1;
            }
        })  
    }
    
}

module.exports = {
    pathFun : new myPathFunction(),
    timeFun : new myGetTime(),
    Mongo : new MongoDB()
}

