var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var TodoModel = mongoose.model('Todo');

/* GET home page. */
router.get('/',(req,res,next)=>{
  res.render('login',{flag:0});
});
router.get('/index', (req, res,next)=> {  
  res.render('index');
});
router.post('/',(req,res,next)=>{
  if(req.body.username=='hello' && req.body.password=='123456'){
    console.log('req.body', req.body);
        new TodoModel({ //实例化对象，新建数据
                content: req.body.username,
                updated_at: Date.now(),
            }).save(function(err, todo, count) { //保存数据
                    console.log('内容', todo, '数量', count); //打印保存的数据
                    res.redirect('/index'); //返回首页
                });

  }else{
    res.render('login',{flag:1}); 
  }
});

module.exports = router;
