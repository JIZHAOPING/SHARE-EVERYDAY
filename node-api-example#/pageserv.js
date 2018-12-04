const ant = require('ant-army');
const fs = require('fs');


ant.config.static_path = './static';
ant.config.static_on = true;
ant.config.upload_path = `${ant.config.static_path}/upload`;

/*
    flag :
        false : 不自动拼接文件
        true  : 会在当前目录查找header和footer文件自动拼接
*/
function page_data(path, name, flag = true) {
    try {
        var page  = '';
        if (flag) {
            page = fs.readFileSync(`${path}/header.html`, {encoding : 'utf8'});
        }

        page += fs.readFileSync(`${path}/${name}`, {encoding : 'utf8'});

        if (flag) {
            page += fs.readFileSync(`${path}/footer.html`, {encoding : 'utf8'});
        }

        return page;
    } catch (err) {
        return 'Page not found';
    }

}

ant.get('/backend/', (req, res) => {
    res.send(page_data('view/backend/', 'index.html'));
});

ant.get('/backend/add', (req, res) => {
    res.send(page_data('view/backend/', 'add.html'));
});

ant.get('/backend/edit/:id', (req, res) => {
    res.send(page_data('view/backend/', 'edit.html'));
});

ant.get('/', (req, res) => {
    res.send(page_data('view/', 'index.html'));
});

ant.get('/show/:id', (req, res) => {
    res.send(page_data('view/', 'show.html'));
});

ant.run('127.0.0.1', 5679);
