const types = require('../db/type.js');
var express = require('express');
var router = express.Router();

var type = new types();

router.get('/',function(req, res) {
  type.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('type',{items:result});
  }); 
});

router.post('/',function(req,res){
  db.query(sql.insert, [req.body.uid, req.body.uname, req.body.uimg, req.body.utel, req.body.upwd, new Date().toLocaleString()],
     function (err, result) {
    if (err) return err;
    res.redirect('user');
 });
});


router.delete('/',function(req,res){
  // console.log(2);
  // res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    type.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    type.delItem(req.body.item,function(err){
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
    type.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
