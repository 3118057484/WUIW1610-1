var express=require('express');
var app=express();
// 匹配根路径的请求
// app.get('/', function (req, res) {
//     res.send('root');
// });
// app.listen(3000);

//根据字符串方式请求
// app.get('/ab?c',function(req,res){ //?表示b可有可无
//     res.send("abc");
// })
// app.listen(3000)

// app.get('/ab+c',function(req,res){ //+表示b可以有多个
//     res.send("ab+c");
// })
// app.listen(3000)

// app.get('/ab*c',function(req,res){ //*表示bc之间可以是任意字符
//     res.send("ab*c");
// })
// app.listen(3000)

// app.get('/ab(d+b)?c',function(req,res){ //(d+b)?表示(d+b)可有可无，进行筛选
//     res.send("abc");
// })
// app.listen(3000)

//根据正则方式请求
// app.get('/a/',function(req,res){  ///a/表示路径a就可以
//     res.send("a的路径");
// })
// app.listen(3000);

app.get(/.*abc$/,function(req,res){  //匹配任意字符+以abc结尾的字符
    res.send("abc路径");
})
app.listen(3000);