var querys = require('./querys')
var connection = require('../connection')
var auth = require('../middlewares/auth')

exports.signin = (req, res) => {
	var loger = req.body;
	console.log(loger.nombre)

connection.query('SELECT name, pass FROM users WHERE name = "'+ loger.nombre + '"', function(err, result){
		console.log("llego al query")
		if (err) throw err;
		if (!result || result.length == 0) return res.status(404).send({message: 'datos mal cargados o problema de sistema'})

if(res) {res.send(200, {message: "te has logeado",
				token: auth.createToken(loger)})};


})


}