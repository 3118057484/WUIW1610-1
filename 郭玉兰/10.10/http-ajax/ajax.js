var http=require('http');
var fs=require('fs');
var url=require('url'); //借助url取search
var qs=require('querystring');//用querysrtring上的parse方法
var data=['张三','李四','王五'];
var server=http.createServer(function(req,res){
    var u = url.parse(req.url);
    // console.log(u);
    if (u.pathname == '/favicon.ico') {  //请求这个东西，没有，直接结束
        res.end();
        return;
    }
    if (u.pathname == '/' || u.pathname == "/ajax.html") {
        fs.readFile('./ajax.html', function(err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if (u.pathname == '/search') {
        var q = qs.parse(u.query);
        // console.log(q);
        res.setHeader('Content-type', 'text/plain;charset=utf-8');
        var result = data.filter(function (v,i){ //过滤  结果为ture返回值
            if (v==q.s){
                return true;
            }
            return false;
        })
        var d=JSON.stringify(result);
        res.write(d); //变为字符串，发给前台
        res.end();
    }
})
server.listen(8000);