var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();

var report = function(){};


/*删*/
report.prototype.delItem = function(rid,callback){
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
    result.forEach((e) => {items.push(e.rid,e.uid);});
    callback(false,result);
  });
};



module.exports = report;
