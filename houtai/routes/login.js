const express = require('express'),
      router = express.Router();

//渲染登陆界面
router.get('/',(req,res,next)=>{
res.render('login')
});

//处理登陆请求
/*router.post('/',function(req,res,next){
  if(req.body.username == 'hello'&& req.body.password == 'world'){
    res.cookie('authorized',req.body.username);
    res.redirect('/index');
  }
  else{
    res.render('login',{content:'登陆成功'});
  }
})*/

module.exports=router;
