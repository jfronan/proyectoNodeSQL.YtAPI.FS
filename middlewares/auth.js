var jwt = require('jsonwebtoken')
var moment = require('moment')

exports.createToken = (user) => {
	var payload = {
		sub: user.nombre,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix(),
	}
	return jwt.sign(payload, 'laclavelocaespecial')
}

exports.decodeToken = (token) => {
try{
	var payload = jwt.decode(token, 'laclavelocaespecial')
	if (payload.exp <= moment().unix()){
		console.log("token expirado")
	}else{
		return payload.sub
	}
} catch (err) {
	console.log(err)
	console.log("token invalido")
}

}