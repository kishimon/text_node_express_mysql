var express  = require('express');
var router   = express.Router();
var moment   = require('moment'); //  moment.jsを読み込む
var os       = require('os');
var connection = require('../mysqlConnection'); //  Mysql接続

router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM boards ORDER BY board_id DESC LIMIT 20';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: 'testApp',
      boardList: rows
    });
  });
});

router.post('/', function(req, res, next){
  var title = req.body.title; //  フォームから送られたリクエストを受け取り、name属性titleを格納
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');  //  現在時刻を格納
  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }
  var query = 'INSERT INTO boards (title, created_at) VALUES ("' + title + " from " + addresses + '", ' + '"' + createdAt + '")';
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});

module.exports = router;
