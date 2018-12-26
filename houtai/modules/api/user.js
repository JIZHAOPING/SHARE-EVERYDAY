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

//获取用户信息
User.prototype.getAll=function(cb,result){
  const sql="select * from users where uid = 1";
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

//插入用户
User.prototype.insertItem=function(obj,cb){
  const sql="insert into users(utel,upwd) values(?,?)";
  db.query(sql,[obj.utel,obj.upwd],(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;
    }
    cb(false,result);
  })
}

//获取用户的动态
User.prototype.getMovement=function(obj,cb){
  const sql = 'select mcontent from movement where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

//获取用户的收藏
User.prototype.getKeep = function(obj,cb){
  const sql = 'select mid from keep where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

//获取用户的关注
User.prototype.getAttention = function(obj,cb){
  const sql = 'select * from attention where uid = ?';
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

//获取用户的粉丝
User.prototype.getFans = function(obj,cb){
  const sql = 'select * from attention where aid = ?';
  db.query(sql,[obj.aid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  })
}

User.prototype.selectUid = function(cb){
  const sql = 'select min(uid+1) c from users c where not exists (select uid from users where uid = c.uid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  });
}

module.exports=User;
