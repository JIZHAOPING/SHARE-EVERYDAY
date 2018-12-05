var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res,next)=>{
  res.render('login');
});
router.get('/index', (req, res,next)=> {  
  res.render('index');
});
router.post('/',(req,res,next)=>{
  if(req.body.username=='hello' && req.body.password=='123456'){
    res.redirect('/index');
  }else{
    res.render('login');
    
  }
})

module.exports = router;
