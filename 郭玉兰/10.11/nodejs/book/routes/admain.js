var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admain/index');
});
router.get('/info', function(req, res, next) {
    res.render('admain/info');
});
router.get('/pass', function(req, res, next) {
    res.render('admain/pass');
});
router.get('/adv', function(req, res, next) {
    res.render('admain/adv');
});
router.get('/addadv', function(req, res, next) {
    res.render('admain/addadv');
});
router.get('/cate', function(req, res, next) {
    res.render('admain/cate');
});
router.get('/addcate', function(req, res, next) {
    res.render('admain/addcate');
});
router.get('/article', function(req, res, next) {
    res.render('admain/article');
});
router.get('/message', function(req, res, next) {
    res.render('admain/message');
});
router.get('/link', function(req, res, next) {
    res.render('admain/link');
});router.get('/addlink', function(req, res, next) {
    res.render('admain/addlink');
});

module.exports = router;
