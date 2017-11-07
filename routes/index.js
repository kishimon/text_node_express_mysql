var express  = require('express');
var router   = express.Router();
var moment   = require('moment'); //  moment.jsを読み込む
var os       = require('os');
var connection = require('../mysqlConnection'); //  Mysql接続

/* GET home page. */
// router.get('/', function(req, res, next) {    //  '/'はここではlocalhost:3000/(ルート直下)
//                                               //  functionはここではコールバック関数
//   res.render('index', { title: 'Express' });  //  render(viewファイル,←に渡すオブジェクト)
// });

router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM boards';
  connection.query(query, function(err, rows) {
    console.log(rows);
    res.render('index', {
      title: 'testApp',
      boardList: rows
    });
  });
});

router.post('/', function(req, res, next){
  var title = req.body.title; //  フォームから送られたリクエストを受け取り、name属性titleを格納
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');  //  現在時刻を格納
  var serverIP = os.networkInterfaces().address;  //  サーバIPを格納
  console.log(os.networkInterfaces());
  //  MySQL
  var query = 'INSERT INTO boards (title, created_at) VALUES ("' + title + serverIP + '", ' + '"' + createdAt + '")';
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
});

module.exports = router;
