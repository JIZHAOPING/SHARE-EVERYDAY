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
  if(req.body.uname!==''){
    db.query(sql.insert, [req.body.uid, req.body.uname, req.body.uimg, req.body.utel, req.body.upwd, new Date().toLocaleString()],
    function (err, result) {
      if (err) return err;
      res.redirect('user');
    });
}else if(req.body.uid!==''&&req.body.uname==''){
  console.log(req.body.uid)
  db.query(sql.queryById,[req.body.uid],function(err,result){
    if (err) return err;
    res.end('user');
  });
}
});



router.delete('/',function(req,res){
  // console.log(2);
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
module.exports = router;
