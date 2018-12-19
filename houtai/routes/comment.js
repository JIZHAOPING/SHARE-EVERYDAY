const comments = require('../db/comment.js');
var express = require('express');
var router = express.Router();

var comment = new comments();

router.get('/',function(req, res) {
  comment.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('comment',{items:result});
  }); 
});

router.post('/',function(req,res){
  comment.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB error');
      return;
    }
  });
  comment.getAll(function(err,result){
    if(err){
      res.status(500).send('DB error');
      return;
    }
    res.render('user',{items:result});
  });
});

router.delete('/',function(req,res){
  console.log(2);
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    comment.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    comment.delItem(req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('Delete OK');
      }
    });
  }
});

router.put('/',function(req,res){
  if(typeof req.query.id === 'undefined'){
    res.status(404).send('Not found!');
  }else{
    comment.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;