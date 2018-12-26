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

router.get('/',function(req, res) {
    res.render('change');
});

router.post('/',function(req,res){
    const sql='UPDATE type SET tname = ? WHERE tid = ?';
    db.query(sql, [req.body.tname,req.body.tid],
    function (err, result) {
       if (err) return err;
       res.redirect('type');
  });
});



module.exports = router;
