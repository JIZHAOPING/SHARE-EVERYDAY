var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'192.168.189.144',
  port:'3306',
  user:'root',
  password:'ddd',
  database:'two-cylinder'
});
db.connect();

var manager = function(){};
/*查*/
manager.prototype.getAll = function(callback){
  const sql = 'SELECT * from supergirl';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.sid,e.sname,e.spwd);});
    callback(false,result);
  });
};

/*增*/
manager.prototype.addItem = function(e,callback){
  const sql = 'INSERT INTO supergirl VALUES(?,?,?)';
  db.query(sql,[e.sid,e.sname,e.spwd],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

/*删*/
manager.prototype.delItem = function(sid,callback){
  const sql = 'DELETE FROM supergirl WHERE sid=?';
  db.query(sql,[sid],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

manager.prototype.delAll = function(callback){
  const sql = 'DELETE FROM supergirl';
  db.query(sql,function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};



module.exports = manager;
