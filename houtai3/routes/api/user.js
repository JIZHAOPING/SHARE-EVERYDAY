var express=require('express');
var router=express.Router();
var User=require('../../modules/api/user.js');

var user=new User();

router.post('/login',(req,res,next)=>{
  var obj=req.obj;//req.body:处理post请求，获取post请求体
  user.getUser(obj,(err,result)=>{
    if(err){
      res.statusCode=500;
    }
    var json=JSON.parse(JSON.stringify(result));
    res.json(JSON);
  })
});
module.exports=router;
