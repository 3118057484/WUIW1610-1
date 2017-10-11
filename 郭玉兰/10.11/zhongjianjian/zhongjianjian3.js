// 挂载至 /user/list 的中间件，任何指向 /user/list 的请求都会执行它
var express=require('express');
var app=express();

var fs=require('fs');
app.use('/list',function(req,res,next){
    var t=new Date().toLocaleDateString();
    fs.appendFile('.log1.txt',t+"\n",function(err){
        if(err) throw err;
    })
    next();
})

app.get("/",function(req,res){
    res.send('首页');
})
app.get("/list",function(req,res){
    res.send('首页 列表页');
})
app.listen(3000);