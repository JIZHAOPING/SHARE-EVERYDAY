var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();

var type = function(){};

type.prototype.getAll = function(callback){
  const sql = 'SELECT * from type order by tid ASC';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.tid,e.tname);});
    callback(false,result);
  });
};






module.exports = type;
