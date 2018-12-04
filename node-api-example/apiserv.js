/*
    本程序使用了一个小框架：ant-army，你可以在npm网站上搜索ant-army获取详细信息。
    这个框架仅仅是用两天开发出来的产品，之后经历过多次更新，还没有经受过实际场景测试，
    不要用于生产环境。可以作为教学以及个人学习使用。

    ant-upload-ware是一个针对ant-army编写的过滤上传文件的中间件，可以过滤上传文件的类型，大小等。
*/

const ant = require('ant-army');
const antuw = require('ant-upload-ware');
const fs = require('fs');
const crypto = require('crypto');
const mysql      = require('mysql');

//请设置成你自己的数据库信息
var sqlconn = mysql.createPool({
  host     : '127.0.0.1',
  user     : '',
  password : '',
  database : ''
});

//sqlconn.connect();

ant.config.static_path = './static';
ant.config.static_on = true;
ant.config.upload_path = `${ant.config.static_path}/upload`;

//中间件实现跨域
ant.addmiddle((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return next.method(req, res, next.next);
}, /.*/);

/*
文件上传过滤 中间件
*/
antuw.config['mime_type'] = [
    'image/jpeg', 'image/png'
];
//只对/upload/image路径有效
ant.middleware.preg = '/upload/image';
ant.usemiddle(antuw);

//Error Code
var errorCode = {
    SUCCESS  : 0,

    ERR_BAD_DATA : 4001,

    ERR_RUN_TIM : 4002,
    
    ERR_COMMON : 41001
};


/*
    接口：
        /article/get
        /article/list
        /article/add
        /article/delete
*/


var route_table = [
    {
        path        : '/article/get/:id',
        method      : 'GET',
        callback    : function(req, res, args) {
            sqlconn.query('SELECT id,a_title,a_keywords,a_content FROM articles where `id` = ' + args['id'],
            (err, results, fields) => {
                console.log(results);
                if (err) {
                    res.send({
                        status  : errorCode.ERR_BAD_DATA,
                        errinfo : err.message
                    });
                } else if (results.length > 0){
                    res.send({
                        status  : errorCode.SUCCESS,
                        article : results[0]
                    });
                } else {
                    res.send({
                        status  : errorCode.ERR_BAD_DATA,
                        errinfo : 'article not found'
                    });
                }
            });
            
        }
    },

    {
        path        : '/article/add',
        method      : 'POST',
        callback    : function(req, res) {

            if (req.POST['title'] === undefined || req.POST['title'].length == 0) {
                res.send({
                    status  : errorCode.ERR_BAD_DATA,
                    errinfo : 'title not be empty'
                });
                return ;
            }

            var article = {
                a_title    : req.POST['title'],
                a_keywords : ( (req.POST['keywords'] !== undefined) ? req.POST['keywords'] : '' ),
                a_content  : ( (req.POST['content']!==undefined) ? req.POST['content'] : '' )
            };

            sqlconn.query('INSERT INTO articles SET ?', article, (err, results, fields) => {
                console.log(results);
                if (err) {
                    res.send({
                        status  : errorCode.ERR_RUN_TIM,
                        errinfo : err.message
                    });
                } else {
                    res.send({
                        status  : 0,
                        id      : results.insertId
                    });
                }
            });
        }
    },

    {
        path        : '/article/delete',
        method      : 'POST',
        callback    : function (req, res) {

            if (req.POST['article_id'] === undefined
               || isNaN(req.POST['article_id'])
               || parseInt(req.POST['article_id']) <= 0)
            {
                res.send({
                    status  : errorCode.ERR_BAD_DATA,
                    errinfo : 'Error: article_id not set or not a number or not great than 0'
                })
            }
            var aid = req.POST['article_id'];
            sqlconn.query('DELETE from articles where `id` = ' + aid, (err, results, fields) => {
                if (err) {
                    res.send({
                        status  : errorCode.ERR_RUN_TIM,
                        errinfo : err.message
                    });
                } else {
                    res.send({
                        status  : errorCode.SUCCESS,
                        info    : 'ok'
                    });
                }
            });
        }
    },

    {
        path        : '/article/update',
        method      : 'POST',
        callback    : function(req, res) {
            if (req.POST['id'] === undefined 
                || isNaN(req.POST['id']) 
                || parseInt(req.POST['id']) <= 0)
            {
                res.send({
                    status  : errorCode.ERR_BAD_DATA,
                    errinfo : 'id not set or illegal'
                });
                return ;
            }

            var article = {
                a_title    : req.POST['a_title'],
                a_keywords : ( (req.POST['a_keywords'] !== undefined) ? req.POST['a_keywords'] : '' ),
                a_content  : ( (req.POST['a_content']!==undefined) ? req.POST['a_content'] : '' )
            };

            sqlconn.query('UPDATE articles SET ? WHERE `id` = ' + req.POST['id'],
                article,
                (err, results, fields) => {
                    if (err) {
                        res.send({
                            status  : errorCode.ERR_RUN_TIM,
                            errinfo : err.message
                        });
                    } else {
                        res.send({
                            status : errorCode.SUCCESS,
                            info   : 'ok'
                        });
                    }
            });

        }
    },

    {
        path        : '/article/list',
        method      : 'GET',
        callback    : function(req, res) {
            var sql = 'SELECT id,a_title,a_keywords FROM articles ';
            if (req.GET['kwd'] !== undefined && req.GET['kwd'].length > 0) {
                sql += " WHERE kwd like '%" + req.GET['kwd'] + "%' ";
            }

            var page = 1;
            if (req.GET['page'] !== undefined && !isNaN(req.GET['page'])) {
                page = parseInt(req.GET['page']);
                if (page <= 0) {
                    page = 1;
                }
            }
            var pagesize = 12;
            sql += ` LIMIT ${(page - 1) * pagesize}, ${pagesize} `;

            sqlconn.query(sql, (err, results, fields) => {
                if (err) {
                    res.send({
                        status  : errorCode.ERR_RUN_TIM,
                        errinfo : err.message
                    });
                } else {
                    res.send({
                        status    : errorCode.SUCCESS,
                        articles  : results
                    });
                }
            });

        }
    }

];

ant.autoRoute(route_table);

ant.post('/upload/image', (req, res) => {
    
    var up_after = null;
    if (req.upload_files['image'] !== undefined) {
        up_after = ant.moveUploadFile(req.upload_files['image'], 0, 'image');
    } else {
        res.send({
            status  : errorCode.ERR_BAD_DATA,
            errinfo : 'Please named your file be "image"'
        });
    }

    req.upload_files = undefined;

    if (up_after === false) {
        res.send({
            status  : errorCode.ERR_BAD_DATA,
            errinfo : 'Error: file not found'
        });
    }

    if (up_after.message !== undefined) {
        res.send({
            status  : errorCode.ERR_RUN_TIM,
            errinfo : up_after.message
        });
    }

    res.send({
        status : errorCode.SUCCESS,
        filename : up_after.filename
    });
});

ant.run('127.0.0.1', 5678);
