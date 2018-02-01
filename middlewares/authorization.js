var auth = require('./auth')


exports.isAuth = (req, res, next) => {
	if (!req.headers.authorization){
      return res.status(403).send({ message: 'No tienees autorizacion'})
    }
    const tokin = req.headers.authorization.split(" ")[1]

    req.nombre= auth.decodeToken(tokin)
    if (req.nombre){next()}
        else{res.status(403).send({message: "NO"})}
}