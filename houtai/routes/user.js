const Users = require('../db/user.js');
var express = require('express');
var router = express.Router();
var sql = require('../db/sql');
const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'two-cylinder',
    port: 3306
});


var user = new Users();

router.get('/',function(req, res) {
  user.getAll(function(err,result){
    if(err){
      console.error(err);
      return;
    }
    res.render('user',{items:result});
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
    user.delAll((err) => {
      if(err) {
        res.staus(500).send('DB error!');
                      
      } else {
        res.status(200).send('Delete OK!');              
      }
    });  
  } else {
    user.delItem(req.body.item,function(err){
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
    user.update(Number(req.query.id),req.body.item,function(err){
      if(err){
        res.status(500).send('DB error');
      }else{
        res.status(200).send('update Ok');
      }
    });
  }
});

module.exports = router;
