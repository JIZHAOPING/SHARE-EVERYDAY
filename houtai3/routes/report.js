var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/',(req,res,next)=>{
  res.render('report');//渲染
});

module.exports = router;
