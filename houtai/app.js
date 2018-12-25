var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-mate');
var mysql = require('mysql');

//===路由信息 （接口地址）开始 存放在./routes目录下===//
var index = require('./routes/index');
var message = require('./routes/message');
var user = require('./routes/user');
var movement = require('./routes/movement');
var comment = require('./routes/comment');
var type = require('./routes/type');
var supergirl = require('./routes/supergirl');
var report = require('./routes/report');
var bodyParser = require("body-parser")

//var usersRouter = require('./routes/users');
var login = require('./routes/login');
//var permission = require('./routes/permission');
//引入api路由
var apiuser=require('./routes/api/user');
var apimovement=require('./routes/api/movement');


var app = express();

var connection = mysql.createConnection({      //创建mysql实例
  host:'localhost',
  port:'3306',
  user:'root',
  password:'',
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
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs',engine);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 这两行是post获取参数(repress已分离body-parser组建)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user',user);
app.use('/index',index);
app.use('/report',report);
app.use('/index',user);
//app.use('/report',report);
app.use('/movement',movement);
app.use('/comment',comment);
app.use('/type',type);
app.use('/supergirl',supergirl);
app.use('/message',message);
app.use('/',login);
//app.use('/permission',permission);
//app.use('/users', usersRouter);
//api接口
app.use('/api/user',apiuser);
app.use('/api/movement',apimovement);

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
