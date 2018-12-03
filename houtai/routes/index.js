var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res,next)=>{
  res.render('login');
});
router.get('/index', (req, res,next)=> {  
  res.render('index');
});

module.exports = router;
