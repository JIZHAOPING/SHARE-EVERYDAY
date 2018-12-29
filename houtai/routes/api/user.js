const Users = require('../../modules/api/user');
var express = require('express');
var router = express.Router();

var user = new Users();

//获取用户信息
router.get('/:uid',(req,res,next)=>{
  var obj = req.params;
  console.log(req.params)
  user.getAll(obj,(err,result)=>{
    if(err){
      console.log("出错啦");
      res.statusCode = 500;
    } else {
      var obj = JSON.parse(JSON.stringify(result));
      res.json(obj);
    }
  });
});

//注册接口
// router.post('/reg',(req,res,next)=>{
//   var obj=req.body;
//   console.log(obj);
//   user.insertItem(obj,(err,result)=>{
//     if(err){
//       res.statusCode=500;
//       console.log(result);
//     }else{
//       res.send('成功');
//     }
//     res.send('success');
//     res.end(obj);
//   })
// })
router.post('/reg',(req,res,next)=>{
  var obj = req.body;
  console.log(obj);
  // var params=obj.params;
  // console.log(params);
  user.selectUid((err,result)=>{
    if(err){
      console.log(err);
      res.statusCode = 500;
    }
    var uid = JSON.parse(JSON.stringify(result))[0].c;
    console.log(JSON.parse(JSON.stringify(result))[0]);
    obj.uid = uid;
    if(obj.uid){
      user.insertItem(obj,(err,result)=>{
        if(err){
          console.log(err);
          res.statusCode = 500;
        }
        res.send('已成功');
        console.log('result:',result);
      });
    }
  });
});

//登陆接口
router.post('/login',(req,res,next)=>{
  var obj = req.body;
  user.getUser(obj,(err,result)=>{
    if(err){
      console.log(err);
      res.statusCode = 500;
    }
    var json = JSON.parse(JSON.stringify(result));
    res.json(json);
  })
});


//请求动态
router.get('/mymovement/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getMovement(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
     // console.log(res.json(JSON.parse(JSON.stringify(result))));
    }
  });
})

//用户收藏
router.get('/mykeep/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getKeep(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      user. 
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
});

//用户关注
router.get('/myattention/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getConcern(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})

//用户粉丝
router.get('/myfans/:uid',(req,res,next)=>{
  var obj = req.params;
  user.getFans(obj,(err,result)=>{
    if(err){
      res.statusCode = 500;
    } else {
      res.json(JSON.parse(JSON.stringify(result)));
    }
  })
})

module.exports=router;
