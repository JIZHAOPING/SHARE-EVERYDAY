const managers = require('../db/supergirl.js');
var express = require('express');
var router = express.Router();
var ssql = require('../db/ssql');
const mysql = require('mysql');

let db = mysql.createConnection({
    host: '192.168.189.144',
    user: 'root',
    password: 'ddd',
    database: 'two-cylinder',
    port: 3306
});

var manager = new managers();

router.get('/',function(req, res) {
  manager.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('supergirl',{items:result});
  }); 
});

router.post('/',function(req,res){
  db.query(ssql.insert, [req.body.sid, req.body.sname, req.body.spwd],
     function (err, result) {
    if (err) return err;
    res.redirect('supergirl');
 });
});
  

router.delete('/',function(req,res){
  console.log(2);
  res.header('Access-Control-Allow-Origin', '*');
  if(req.body === '') {
    mmanager.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');               
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    manager.delItem(req.body.item,function(err){
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
    manager.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
