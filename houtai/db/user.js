var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();
var user = function(){};

/*增*/
user.prototype.addItem = function(e,callback){
  const sql = 'INSERT INTO users VALUES(?,?,?,?,?)';
  db.query(sql,[e.uid,e.uname,e.uimg,e.utel,e.upwd],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

/*删*/
user.prototype.delItem = function(uid,callback){
  const sql = 'DELETE FROM users WHERE uid=?';
  db.query(sql,[uid],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

user.prototype.delAll = function(callback){
  const sql = 'DELETE FROM users';
  db.query(sql,function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};

/*改*/
user.prototype.update = function(id,username,callback){
  const sql = 'UPDATE users SET uname = ? WHERE uid = ?';
  db.query(sql,[uname,uid],function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};

/*查*/
user.prototype.getAll = function(callback){
  const sql = 'SELECT * from users';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.uid,e.uname,e.uimg,e.utel,e.upwd,e.udate)});
    callback(false,result);
  });
};
module.exports = user;
