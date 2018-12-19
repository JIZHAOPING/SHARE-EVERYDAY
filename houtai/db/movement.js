var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();
var movement = function(){};

/*增*/
movement.prototype.addItem = function(e,callback){
  const sql = 'INSERT INTO movement VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.mid,e.mcontent,e.mimg,e.mtype,e.uid,e.mdate],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

/*删*/
movement.prototype.delItem = function(id,callback){
  const sql = 'DELETE FROM movement WHERE uid=?';
  db.query(sql,[uid],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

movement.prototype.delAll = function(callback){
  const sql = 'DELETE FROM users';
  db.query(sql,function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};

/*查*/
movement.prototype.getAll = function(callback){
  const sql = 'SELECT * from movement';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.mid,e.mcontent,e.mimg,e.mtype,e.uid,e.mdate);});
    callback(false,result);
  });
};

module.exports = movement;
