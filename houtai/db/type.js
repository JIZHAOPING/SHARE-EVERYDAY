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
/*查*/
type.prototype.getAll = function(callback){
  const sql = 'SELECT * from type order by tid ASC ';
  var items = [];
  db.query(sql,function(err,result){
    if(err){
      callback(true);
      return;                
    }
    result.forEach((e) => {items.push(e.uid,e.uname,e.uimg,e.utel,e.pwd,e.udate);});
    callback(false,result);
  });
};

/*增*/
type.prototype.addItem = function(e,callback){
  const sql = 'INSERT INTO users VALUES(?,?,?,?,?,?)';
  db.query(sql,[e.uid,e.uname,e.uimg,e.utel,e.pwd,e.udate],function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
};




module.exports = type;
