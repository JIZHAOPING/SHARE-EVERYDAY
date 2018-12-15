const db=require('../database.js');
var User=function(){};

User.prototype.getAll=function(obj,cb){
  const sql="select * from User where uid = ?";
  db.query(sql,[obj.uid],(err,result)=>{
    if(err){
      cb(true);
      return;
    }
    cb(false,result);
  })
}

module.exports=User;
