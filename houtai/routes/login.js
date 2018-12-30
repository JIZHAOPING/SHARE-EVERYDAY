var express = require('express');
var router = express.Router();
var  mysql  =  require('mysql')
router.get('/',(req,res,next)=>{
  res.render('login');//渲染
});


// router.post('/search',function(req,res){
// 	var account=req.body.tel;
// 	var password=req.body.password;
// 	res.header('Access-Control-Allow-Origin','*');
// 	res.header('Content-Type','text/plain; charset="utf-8"');
// 	const sql =  "select * from users where utel = '"+ account +"'and upwd = '"+password+"' ";
// 	db.query(sql,(err,result)=>{
// 	  if(err){
// 		res.send('查询失败：'+err);
// 	  }else{
// 		res.send(result);
  
// 	  }
  
//   })
	  
//   });
  
router.post('/', function (req, res) {
	//获得用户名和密码
	var username = req.body.username;
	var password = req.body.password;
	//定义数据库连接池
	var pool = mysql.createPool({
    host: 'localhost',
    port:'3306',
	user: 'root',
	password: '',
	database: 'two-cylinder'
	});
	pool.getConnection(function (err, connection) {
		connection.query('select * from supergirl', function (err, result) {
			if (err) {
				throw err;
			} else {
				for (var i = 0;i<result.length;i++){ 
					if(result[i].sname == username ){
						if(result[i].spwd == password){
							res.redirect('index');
						}else{
							res.end('密码错误');
						}
					}else{
						console.log('继续尝试');
					}
				}
			}
		});
		connection.release();
	});
});
module.exports = router;
