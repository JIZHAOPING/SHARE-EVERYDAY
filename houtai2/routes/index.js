var express = require('express');
var router = express.Router();
var User = require("../models/user");

/* GET home page. */
router.get('/',(req,res,next)=>{
  res.render('login');
});
router.get('/index', (req, res,next)=> {  
  res.render('index');
});
router.post('/', function(req, res, next) {
    var postData = {
              username: req.body.username,
              psw: req.body.psw
          };
      User.find({username:postData.username,psw:postData.psw}, function(err, docs){
        if(err) throw err;
              if(docs){
                  res.redirect('index');
              }else{
                  res.send('账号或密码错误')
              }
      });
  });

module.exports = router;
