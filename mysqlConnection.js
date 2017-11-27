var mysql = require('mysql');

// DB設定
var dbConfig = {
  host: 'XXXXXXXXXXXXXX.ap-northeast-1.rds.amazonaws.com',
  user: 'awsworkshop02',
  password: 'awsworkshop02',
  database: 'bulletin_board'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
