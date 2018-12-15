var mysql=require('mysql');
var cfg=require('./config.json');
var pool=mysql.cratePool;
module.exports=pool;
