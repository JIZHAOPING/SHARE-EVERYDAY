let SQL = {
    insert: 'INSERT INTO users(uid,uname,uimg,utel,upwd,udate) VALUES(?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM users',
    update:'UPDATE users SET uname=?, uimg=?, utel=?, upwd=?',
    delete: 'DELETE FROM users WHERE uid=?',
    queryById: 'SELECT * FROM users WHERE uid=?',
  };
  
  module.exports = SQL;
  