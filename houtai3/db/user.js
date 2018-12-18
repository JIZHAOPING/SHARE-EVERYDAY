var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'192.168.189.144',
  port:'3306',
  user:'root',
  password:'ddd',
  database:'two-cylinder'
});
db.connect();
var user = function(){};

/*增*/
user.prototype.addItem = function(e,cb){
  const sql = 'INSERT INTO users VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.uid,e.uname,e.uimg,e.utel,e.pwd,e.udate],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

/*删*/
user.prototype.delItem = function(id,cb){
  const sql = 'DELETE FROM users WHERE uid=?';
  db.query(sql,[uid],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};

user.prototype.delAll = function(cb){
  const sql = 'DELETE FROM users';
  db.query(sql,function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*改*/
user.prototype.update = function(id,username,cb){
  const sql = 'UPDATE users SET username = ? WHERE id = ?';
  db.query(sql,[username,id],function(err,results){
    if(err){
      cb(true);
      return;
    }
    cb(false,results);
  });
};

/*查*/
user.prototype.getAll = function(cb){
  const sql = 'SELECT * from users';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;                
    }
    result.forEach((e) => {items.push(e.uid,e.uname,e.uimg,e.utel,e.pwd,e.udate);});
    cb(false,result);
  });
};
module.exports = user;
