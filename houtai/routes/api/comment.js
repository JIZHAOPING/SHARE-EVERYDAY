const Comment = require('../../modules/api/comment');
var express = require('express');
var router = express.Router();
var comment = new Comment();

router.get('/:mid',(req,res,next)=>{
    console.log(req.params);
    var obj =req.params;
    //console.log(obj);
    comment.getComment(obj,(err,result)=>{
      if(err){
        res.statusCode = 500;
      } else {
        var obj = JSON.parse(JSON.stringify(result));
        res.json(obj);
      }
    });
  });
router.post('/',(req,res,next)=>{
    var obj = {};
    comment.selectCid((err,result)=>{
      if(err){
        console.log(err);
        res.statusCode = 500;
      }
      var cid = JSON.parse(JSON.stringify(result))[0].c;
      obj.cid = cid;
      obj.uid = req.body.uid;
      obj.mid = req.body.mid;
      obj.ccontent = req.body.ccontent;
      comment.insertItem(obj,(err,result)=>{
        if(err){
          res.statusCode = 500;
          res.send('error');
        }else{
          res.send('ok');
        }
      });
    });
});

module.exports=router;