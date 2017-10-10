var express=require('express');
var app=express();
app.get('/',function(req,res){ //路由
    res.send('首页'); //write end
})
app.get('/list',function(req,res){ //路由
    res.send('列表'); //write end
})
app.get('/category',function(req,res){ //路由
    res.send('栏目'); //write end
})
var server=app.listen(3000,'localhost',function(){
    console.log('当前地址是: http://%s:%s',server.address().address,server.address().port);
})
