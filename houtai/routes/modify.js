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
    res.render('modify');
});

router.post('/',function(req,res){
    const sql='UPDATE supergirl SET sname = ?,spwd=? WHERE sid = ?';
    db.query(sql, [req.body.sname,req.body.spwd,req.body.sid],
    function (err, result) {
       if (err) return err;
       res.redirect('supergirl');
  });
});



module.exports = router;
