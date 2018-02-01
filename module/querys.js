var connection = require('../connection')
var bcrypt = require('bcrypt-nodejs')
var auth = require('../middlewares/auth')

exports.mostrarUsuarios = (req, res) => {
	  connection.query( "SELECT * FROM users ", function (err, result) {
    if (err) throw err;
    if (!result || result.length == 0) return res.status(404).send({message: 'no hay usuarios aun'})
    
    res.send(200, {result})
})
}

exports.cargaUsuarios = (req, res) => {
	console.log('POSTED new user')
	console.log(req.body)
	let newUser = req.body
	newUser.password = bcrypt.hashSync(newUser.password)//, 10, function(err, res) {
 //   return res;
//})
	connection.query('INSERT INTO users (name, pass) VALUES ("'+newUser.nombre+'", "'+newUser.password+'")', function (err, result) {
		if (err) throw err;
		if (!result) return res.status(404).send({message: 'datos mal cargados o problema de sistema'})
	
	res.send(200, {message: result,
		token: auth.createToken(newUser)
	})
	})

}

exports.mostrarUnUsuario = (req, res) => {

	connection.query('SELECT name, pass FROM users WHERE name = "'+ req.body.nombre + '"', function(err, result){
		if (res){res.send(200, {result})};
		res= result
		console.log(res)
		
	})
	return res
}
	

