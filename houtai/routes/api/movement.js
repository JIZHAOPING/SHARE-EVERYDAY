const Movement = require('../../modules/api/movement');
var express = require('express');
var router = express.Router();

var movement = new Movement();
//获取所有动态
router.get('/',(req,res,next)=>{
    movement.getAll((err,result)=>{
      if(err){res.statusCode = 500;}
      else{
        //console.log(result);
        var obj = JSON.parse(JSON.stringify(result));
        //console.log(obj);
        res.json(obj);
      }
    });
  });

  router.post('/',(req,res,next)=>{
    var obj = {};
    movement.selectAid((err,result)=>{
      if(err){
        res.statusCode = 500;
      }
      var aid = JSON.parse(JSON.stringify(result))[0].c;
      obj.mid = aid;
      obj.uid = req.body.uid;
      obj.mtype = req.body.mtype;
      obj.mcontent = req.body.mcontent;
      movement.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
        } else {
            movement.insertColumn(obj,(err,result)=>{
            if(err){
              res.statusCode = 500;
            } else {
              res.end('OK');
            }
          })
        }
      });
    });
});

module.exports=router;