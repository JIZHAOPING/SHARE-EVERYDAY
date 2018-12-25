var express=require('express');
var router=express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
  database:'two-cylinder'
});

router.get('/',function(req,res){
    const sql = 'select count(*) as c from users';
    const sql1 = 'select count(*) as d from movement';
    const sql2 = 'select count(*) as a from users where udate between NOW() - INTERVAL 2 DAY  and NOW() - INTERVAL 1 DAY';
    const sql3 = 'select count(*) as b from movement where mdate between NOW() - INTERVAL 2 DAY  and NOW() - INTERVAL 1 DAY';


    const sql4 = "select count(*) as e from movement where mtype='升学'";
    const sql5 = "select count(*) as f from movement where mtype='技能'";
    const sql6 = "select count(*) as g from movement where mtype='艺能'";
    const sql7 = "select count(*) as h from movement where mtype='工作日常'";
    const sql8 = "select count(*) as i from movement where mtype='工作烦恼'";
    const sql9 = "select count(*) as j from movement where mtype='职场经验'";
    const sql10 = "select count(*) as k from movement where mtype='亲情'";
    const sql11 = "select count(*) as l from movement where mtype='友情'";
    const sql12 = "select count(*) as m from movement where mtype='爱情'";
    const sql13 = "select count(*) as n from movement where mtype='旅行'";
    const sql14 = "select count(*) as o from movement where mtype='娱乐'";
    const sql15 = "select count(*) as p from movement where mtype='健身'";

    db.query(sql,function (err, result) {
        console.log(result);
      if (err) {
          console.error(err);
          return;
      }
      db.query(sql1,function(err,jieguo){
          if(err){
              console.error(err);
              return;
          }
          db.query(sql2,function(err,jieguo2){
              console.log(jieguo2);
              if(err){
                  console.error(err);
                  return;
              }
              db.query(sql3,function(err,jieguo3){
                  console.log(jieguo3);
                if(err){
                    console.error(err);
                    return;
                }
                db.query(sql4,function(err,jieguo4){
                  if(err){
                      console.error(err);
                      return;
                  }
                  db.query(sql5,function(err,jieguo5){
                    if(err){
                        console.error(err);
                        return;
                    }
                    db.query(sql6,function(err,jieguo6){
                        if(err){
                            console.error(err);
                            return;
                        }
                        db.query(sql7,function(err,jieguo7){
                            if(err){
                                console.error(err);
                                return;
                            }
                            db.query(sql8,function(err,jieguo8){
                                if(err){
                                    console.error(err);
                                    return;
                                }
                                db.query(sql9,function(err,jieguo9){
                                    if(err){
                                        console.error(err);
                                        return;
                                    }
                                    db.query(sql10,function(err,jieguo10){
                                        if(err){
                                            console.error(err);
                                            return;
                                        }
                                        db.query(sql11,function(err,jieguo11){
                                            if(err){
                                                console.error(err);
                                                return;
                                            }
                                            db.query(sql12,function(err,jieguo12){
                                                if(err){
                                                    console.error(err);
                                                    return;
                                                }
                                                db.query(sql13,function(err,jieguo13){
                                                    if(err){
                                                        console.error(err);
                                                        return;
                                                    }
                                                    db.query(sql14,function(err,jieguo14){
                                                        if(err){
                                                            console.error(err);
                                                            return;
                                                        }
                                                        db.query(sql15,function(err,jieguo15){
                                                            if(err){
                                                                console.error(err);
                                                                return;
                                                            }
                                                            res.render('index',{newuser:JSON.stringify(jieguo2[0].a),
                                                                newmovement:JSON.stringify(jieguo3[0].b),
                                                                totaluser:JSON.stringify(result[0].c),
                                                                totalmovement:JSON.stringify(jieguo[0].d),
                                                                e:JSON.stringify(jieguo4[0].e),
                                                                f:JSON.stringify(jieguo5[0].f),
                                                                g:JSON.stringify(jieguo6[0].g),
                                                                h:JSON.stringify(jieguo7[0].h),
                                                                i:JSON.stringify(jieguo8[0].i),
                                                                j:JSON.stringify(jieguo9[0].j),
                                                                k:JSON.stringify(jieguo10[0].k),
                                                                l:JSON.stringify(jieguo11[0].l),
                                                                m:JSON.stringify(jieguo12[0].m),
                                                                n:JSON.stringify(jieguo13[0].n),
                                                                o:JSON.stringify(jieguo14[0].o),
                                                                p:JSON.stringify(jieguo15[0].p)
                                                            });
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
          })
      })
    })
})
});

module.exports=router;
