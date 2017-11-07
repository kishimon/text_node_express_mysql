var mysql = require('mysql');

// DB設定_ローカル
// var dbConfig = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '',
//   database: 'bulletin_board'
// };

// DB設定_本番
var dbConfig = {
  host: 'awsworkshop02.cptxi3ftleus.ap-northeast-1.rds.amazonaws.com',
  user: 'awsworkshop02',
  password: 'awsworkshop02',
  database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;  //  外部からrequireできる形に
