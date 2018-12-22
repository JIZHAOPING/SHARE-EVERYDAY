const movements = require('../db/movement.js');
var express = require('express');
var router = express.Router();
const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'two-cylinder',
    port: 3306
});

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
  const sql='INSERT INTO movement(mid,mcontent,mdate,mimg,mtype,uid) VALUES(?,?,?,?,?,?)';
  db.query(sql, [req.body.mid, req.body.mcontent,new Date().toLocaleString(),req.body.mimg, req.body.mtype,req.body.uid],
  function (err, result) {
     if (err) return err;
     res.redirect('movement');
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
