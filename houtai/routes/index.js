var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res,next)=>{
<<<<<<< HEAD
  res.render('login',{title:'潘凯亚'});
=======
  res.render('login',{flag:0});
>>>>>>> 4bc28f771f375cc5d5b0c7a1dd0e257a9e7a8432
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
