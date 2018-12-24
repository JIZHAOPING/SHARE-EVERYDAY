const types = require('../db/type.js');
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
  res.redirect('changet');
});

router.post('/changet',function(req,res){
  const sql='UPDATE type SET tname=?';
  db.query(sql, [req.body.tname],
  function (err, result) {
     if (err) return err;
     res.redirect('changet');
});
})


module.exports = router;
