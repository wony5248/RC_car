var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '3.35.8.78',
    port: 3306,
    user: 'SSAFY15_08_1',
    password: '1234',
    database: 'DB_15_08'
});

module.exports = connection;