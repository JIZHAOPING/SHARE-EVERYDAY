var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-mate');
var mysql = require('mysql');

//===路由信息 （接口地址）开始 存放在./routes目录下===//
var index = require('./routes/index');
//var usersRouter = require('./routes/users');
var login = require('./routes/login');
//var permission = require('./routes/permission');
//引入api路由
var apiuser=require('./routes/api/user');



var app = express();

/*var connection = mysql.createConnection({      //创建mysql实例
  host:'192.168.189.144',
  port:'3306',
  user:'root',
  password:'ddd',
  database:'two-cylinder'
});
connection.connect();
var sql = 'SELECT * FROM supergirl';
connection.query(sql, function (err,result) {
  if(err){
      console.log('[SELECT ERROR]:',err.message);
  }
  str = JSON.stringify(result);
  console.log(str);
  //数据库查询结果返回到result中
});*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs',engine);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index',index);
app.use('/',login);
//app.use('/permission',permission);
//app.use('/users', usersRouter);
//api接口
app.use('/api/user',apiuser);

// catch 404 and forward to error handler
app.use(function(req, res,next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
