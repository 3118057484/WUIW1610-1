var express=require("express");
var app=express();
app.use(function(req,res,next){
    console.log("国家");
    req.money=10000;
    next();
})
app.use(function(req,res,next){
//    10000-4000=6000
    console.log("省");
    req.money=(req.money-4000);
    next();
})
app.use(function(req,res,next){
//    60000-2000=40000
    console.log("市");
    req.money=(req.money-2000);
    next();
})
app.use(function(req,res,next){
    console.log("县");
//    40000-2000=20000
    req.money=(req.money-2000);
    next();
})
app.use(function(req,res,next){
//    20000-1000=10000
    console.log("镇");
    req.money=(req.money-1000);
    next();
})
app.use(function(req,res,next){
//    10000-500=500
    console.log("村");
    req.money=(req.money-500);
    next();
})
app.use(function(req,res){
    console.log("人");
   res.send(req.money+"");
})
app.listen(3000);