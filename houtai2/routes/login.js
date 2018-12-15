const express = require('express'),
      router = express.Router();

//渲染登陆界面
router.get('/',(req,res,next)=>{
res.render('login')
});

//处理登陆请求
router.post('/',function(req,res,next){
    res.redirect('/index');
})

module.exports=router;
