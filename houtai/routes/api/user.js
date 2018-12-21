const Users = require('../../modules/api/user');
var express = require('express');
var router = express.Router();

var user = new Users();

router.get('/haha',(req,res,next)=>{
  user.getAll((err,result)=>{
    if(err){
      res.statusCode = 500;
      console.log('1');
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
      console.log('0');
    }
  });
});

router.post('/reg',(req,res,next)=>{
  var obj=req.body;
  console.log(obj);
  user.insertItem(obj,(err,result)=>{
    if(err){
      res.statusCode=500;
      console.log(result);
    }
    res.send('success');
  })
})

module.exports=router;
