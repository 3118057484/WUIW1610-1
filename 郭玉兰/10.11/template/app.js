var express=require("express");
var app=express();
app.set('views', './view');
app.set('view engine', 'ejs');
app.get("/",function (req,res) {
    res.render('index',{title:'测试文档',decription:'<b>一个好人</b>',tu:'这是头',wei:'这是尾'})
})
app.listen(4000);
