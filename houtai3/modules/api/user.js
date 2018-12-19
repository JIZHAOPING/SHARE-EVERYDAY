var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();
var User = function(){};

User.prototype.getAll=function(cb){
  const sql="select * from users where uid = 1";
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}


module.exports=User;
