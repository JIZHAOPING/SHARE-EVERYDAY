var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TodoModel = mongoose.model('Todo');

/* GET home page. */
router.get('/',(req,res,next)=>{
  res.render('login',{flag:0});
});
router.get('/index', (req, res,next)=> {  
  res.render('index');
});
router.post('/',(req,res,next)=>{
  if(req.body.username=='hello' && req.body.password=='123456'){
                    res.redirect('/index'); 
  }else{
    res.render('login',{flag:1}); 
  }
});

module.exports = router;
