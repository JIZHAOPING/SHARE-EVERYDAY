var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'192.168.189.144',
  port:'3306',
  user:'root',
  password:'ddd',
  database:'two-cylinder'
});
db.connect();

var report = function(){};


/*删*/
report.prototype.delItem = function(id,callback){
  const sql = 'DELETE FROM report WHERE rid=?';
  db.query(sql,[rid],function(err,result){
    if(err){
      callback(true);
      return;
    }
    callback(false,result);
  });
};

report.prototype.delAll = function(callback){
  const sql = 'DELETE FROM report';
  db.query(sql,function(err,results){
    if(err){
      callback(true);
      return;
    }
    callback(false,results);
  });
};

/*查*/
report.prototype.getAll = function(callback){
  const sql = 'SELECT * from report';
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



module.exports = report;
