var express = require('express');
var router = express.Router();

router.get('/',function(req,res) {
    res.send('get news');
});
router.post('/',function(req,res) {
    res.send('post news');
});

router.get('/list',function(req,res){
    res.send("get news/list");
})
module.exports=router;