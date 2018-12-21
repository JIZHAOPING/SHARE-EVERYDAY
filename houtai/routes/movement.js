const movements = require('../db/movement.js');
var express = require('express');
var router = express.Router();

var movement = new movements();

router.get('/',function(req, res) {
  movement.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('movement',{items:result});
  }); 
});

router.post('/',function(req,res){
  movement.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB error');
      return;
    }
  });
  movement.getAll(function(err,result){
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
    movement.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    movement.delItem(req.body.item,function(err){
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
    movement.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
