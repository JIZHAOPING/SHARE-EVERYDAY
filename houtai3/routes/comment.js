var express = require('express');
var router = express.Router();
router.get('/',(req,res,next)=>{
	res.render('comment');//渲染
  });
module.exports = router;
