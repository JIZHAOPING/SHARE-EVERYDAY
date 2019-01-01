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
  const sql = 'select min(mid+1) c from movement c where not exists (select mid from movement where mid = c.mid+1);';
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype1 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='升学' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype2 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='艺能' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype3 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='技能' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype4 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='工作日常' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype5 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='工作烦恼' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype6 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='职场经验' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype7 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='亲情' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype8 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='爱情' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype9 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='友情' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype10 =function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='娱乐' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype11 =function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='健身' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.selectMtype12 = function(cb){
  const sql = "select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where mtype='旅行' and movement.uid=users.uid;"
  db.query(sql,(err,result)=>{
    if(err){
      throw err;
      cb(true);
      return;                  
    }
    cb(false,result);     
  });
}

Movement.prototype.getAll = function(cb){
const sql = 'select mid,mimg,mcontent,mdate,uname,uimg,movement.uid,users.uid from movement,users where movement.uid = users.uid';
db.query(sql,(err,result)=>{
  if(err){
    throw err;
    cb(true);
    return;
  }
  cb(false,result);
});
}

// Movement.prototype.getArtile = function(obj,cb){
// const sql = 'select aid,atitle,acontent,atime,acomment,aimage,uname from Article,User where Article.uid = User.uid and aid = ?';
// db.query(sql,[obj.aid],(err,result)=>{
//   if(err){
//     cb(true);
//     return;
//   }
//   cb(false,result);
// });
// }
Movement.prototype.insertItem =function(obj,cb){
const sql = 'insert into movement(mid,mcontent,uid) values(?,?,?)';
db.query(sql,[obj.mid,obj.mcontent,obj.uid],(err,result)=>{
  if(err){
    throw err;
    cb(true);
    return;
  }
  cb(false,result);
});
}

Movement.prototype.insertColumn =function(obj,cb){
const sql = 'insert into type(tid) values(?,"学习")';
db.query(sql,[obj.tid],(err,result)=>{
  if(err){
    throw err;
    cb(true);
    return;
  }
  cb(false,result);
});
}

module.exports=Movement;