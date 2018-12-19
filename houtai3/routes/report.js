const reports = require('../db/report.js');
var express = require('express');
var router = express.Router();

var report = new reports();

router.get('/',function(req, res) {
  report.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('report',{items:result});
  }); 
});

router.post('/',function(req,res){
  report.addItem(req.body.item,function(err){
    if(err){
      res.status(500).send('DB error');
      return;
    }
  });
  report.getAll(function(err,result){
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
    report.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    report.delItem(req.body.item,function(err){
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
    repeort.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
