var mysql = require('mysql')

var connection = mysql.createConnection({
	connectionLimit: 100,
	port: 3306,
	user: 'root',
	password: '',
	connectTimeout: 5000,
	database: 'mydb'
});



module.exports= connection