var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});
db.connect();
var Comment = function(){};

Comment.prototype.selectCid = function(cb){
    const sql = 'select min(cid+1) c from comment c where not exists (select cid from comment where cid = c.cid+1);';
    db.query(sql,(err,result)=>{
      if(err){
        throw err;
        cb(true);
        return;                  
      }
      cb(false,result);     
    });
}
Comment.prototype.getComment = function(obj,cb){
    const sql = 'select cid,ccontent,cdate,uname,uimg,mid from comment,users where comment.uid = users.uid and mid = ?';
    db.query(sql,[obj.mid],(err,result)=>{
      if(err){
        cb(true);
        return;
      }
      cb(false,result);
    });
  }
Comment.prototype.insertItem =function(obj,cb){
    const sql = 'insert into comment(cid,mid,uid,ccontent) values(?,?,?,?)';
    db.query(sql,[obj.cid,obj.mid,obj.uid,obj.ccontent],(err,result)=>{
      if(err){
        throw err;
        cb(true);
        return;
      }
      cb(false,result);
    });
  }
  module.exports = Comment;  