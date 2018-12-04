接口文档：
    api host : http://127.0.0.1:5678
    
    后续文档描述不再加入api host信息

    所有接口错误都会返回
    {
        status  : ERROR_CODE,
        errinfo : ERROR_INFO
    }
    成功返回
    {
        status : 0,
        //对应数据
    }

    获取article：
        接口：/article/get/:id
        请求：GET
        参数：id
        调用形式：/article/get/123
        成功返回值：
                {
                    status : 0,
                    article : {
                        id          : ID,
                        a_title     : TITLE,
                        a_keywords  : KEYWORDS,
                        a_content   : CONTENT
                    }
                }

    创建article：
        接口：/article/add
        请求：POST
        参数：
            title    : TITLE,
            keywords : KEYWORDS,
            content  : CONTENT,
          所有参数都是必需的
        成功返回值：
            {
                status : 0,
                id     : ID
            }

    更新article：
        接口：/article/update
        请求：POST
        参数：
            id  : ID 必须

            a_title, a_keywords, a_content只提供需要更新的字段即可。

        成功返回值：
            {
                status : 0,
                info   : 'ok'
            }

    删除article：
        接口：/article/delete
        请求：POST
        参数：
            id  :ID 必须
        成功返回值：
            {
                status  : 0,
                info    : 'ok'
            }


    获取article列表：
        接口：/article/list
        请求：GET
        参数：
            kwd  : KEYWORDS    非必须
            page : PAGE NUMBER 非必须
            
        成功返回值：
            {
                status   : 0,
                articles : [
                    {
                        id         : ID,
                        a_title    : TITLE,
                        a_keywords : KEYWORDS
                    },
                    ...
                    ...
                ]
            }
    上传图片：
        接口：/upload/image
        请求：POST
        参数：
            上传name值为image的文件数据
        成功返回值：
            {
                status   : 0,
                filename : FILENAME
            }

