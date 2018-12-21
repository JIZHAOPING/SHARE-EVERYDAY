var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();

var comment = function(){};

/*增*/
comment.prototype.addItem = function(e,callback){
  const sql = 'INSERT INTO comment VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.cid,e.mid,e.uid,e.ccontent,e.cdate],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

/*删*/
comment.prototype.delItem = function(id,callback){
  const sql = 'DELETE FROM comment WHERE uid=?';
  db.query(sql,[uid],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

comment.prototype.delAll = function(callback){
  const sql = 'DELETE FROM comment';
  db.query(sql,function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};

/*查*/
comment.prototype.getAll = function(callback){
  const sql = 'SELECT * from comment';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.cid,e.mid,e.uid,e.ccontent,e.cdate);});
    callback(false,result);
  });
};



module.exports = comment;
