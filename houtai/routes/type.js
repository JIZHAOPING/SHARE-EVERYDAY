const types = require('../db/type.js');
var express = require('express');
var router = express.Router();

var type = new types();

router.get('/',function(req, res) {
  type.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('type',{items:result});
  }); 
});

router.post('/change',function(req,res){
  res.end(hi);
})

module.exports = router;
