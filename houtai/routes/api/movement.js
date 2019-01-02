const Movement = require('../../modules/api/movement');
var express = require('express');
var router = express.Router();

var movement = new Movement();
//获取所有动态
router.get('/',(req,res,next)=>{
    movement.getAll((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/xixi/:mid',(req,res,next)=>{
    movement.getAll((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/xuexi1',(req,res,next)=>{
    movement.selectMtype1((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/xuexi2',(req,res,next)=>{
    movement.selectMtype2((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/xuexi3',(req,res,next)=>{
    movement.selectMtype3((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/work1',(req,res,next)=>{
    movement.selectMtype4((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/work2',(req,res,next)=>{
    movement.selectMtype5((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/work3',(req,res,next)=>{
    movement.selectMtype6((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/qinggan1',(req,res,next)=>{
    movement.selectMtype7((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/qinggan2',(req,res,next)=>{
    movement.selectMtype8((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/qinggan3',(req,res,next)=>{
    movement.selectMtype9((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/yule1',(req,res,next)=>{
    movement.selectMtype10((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/yule2',(req,res,next)=>{
    movement.selectMtype11((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });

  router.get('/yule3',(req,res,next)=>{
    movement.selectMtype12((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
        console.log(obj);
      }
    });
  });
//发表动态
  router.post('/',(req,res,next)=>{
    var obj = {};
    movement.selectMid((err,result)=>{
      if(err){
        res.statusCode = 500;
        console.log(err);
      }
      var mid = JSON.parse(JSON.stringify(result))[0].c;
      console.log(result);
      obj.mid = mid;
      obj.uid = req.body.uid;
      obj.mtype = req.body.mtype;
      obj.mcontent = req.body.mcontent;
      console.log(obj);
      movement.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          console.log(err);
        } else {
            // movement.insertColumn(obj,(err,result)=>{
            // if(err){
            //   res.statusCode = 500;
            //   console.log(err);
            // } else {
              res.end('OK');
            // }
          // })
        }
      });
    });
});


module.exports=router;