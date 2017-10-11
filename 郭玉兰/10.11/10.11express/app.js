var express=require("express");
var app=express();
//加载路由模块
var home=require("./route/home");
var news=require("./route/news");
// var list=require("./route/news/list")
var protect=require("./route/protect");
app.use('/',home);
app.use('/news',news);
app.use('/news/list',news);

app.use('/protect',protect);
app.listen(2000);