var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();
var Movement = function(){};

Movement.prototype.selectMid = function(cb){
  const sql = 'select min(mid+1) c from movement c where not exists (select aid from movement where mid = c.mid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.getAll = function(cb){
const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from Article,User where Article.uid = User.uid';
db.query(sql,(err,result)=>{
  if(err){
    cb(true);
    return;
  }
  cb(false,result);
});
}

Movement.prototype.getArtile = function(obj,cb){
const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from Article,User where Article.uid = User.uid and aid = ?';
db.query(sql,[obj.aid],(err,result)=>{
  if(err){
    cb(true);
    return;
  }
  cb(false,result);
});
}
Movement.prototype.insertItem =function(obj,cb){
const sql = 'insert into Movement values(?,?,?,?,?,?,?,?,?)';
db.query(sql,[obj.mid,obj.muid,obj.mcontent,Date().slice(0,24),obj.obj.aimage,1],(err,result)=>{
  if(err){
    cb(true);
    return;
  }
  cb(false,result);
});
}

Movement.prototype.insertColumn =function(obj,cb){
const sql = 'insert into type values(?,"学习")';
db.query(sql,[obj.aid],(err,result)=>{
  if(err){
    cb(true);
    return;
  }
  cb(false,result);
});
}

module.exports=Movement;