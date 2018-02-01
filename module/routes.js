var express = require('express')
var api = express.Router()
var querys = require('./querys')
var singer = require('./singer')
var auth = require('../middlewares/authorization')
var http = require('http')
var fs = require('fs')
var filemanager = require('../filemanager/filemanager')

api.use(express.static('views/styles'));
api.get('', (req,res) => {fs.readFile('./views/test2.html', function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
});
})
api.get('/logon', (req, res) => {fs.readFile('./views/logon.html', function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	res.end();
});
})

api.post('/api/test', filemanager.agregar)
api.get('/debug', querys.mostrarUsuarios)
api.post('/signup', querys.cargaUsuarios)
api.post('/signin', singer.signin)
api.post('/tester', auth.isAuth, querys.mostrarUnUsuario)
api.get('/private', auth.isAuth, (req, res) => {
	res.status(200).send({ message: 'Tienes acceso'})
})
module.exports= api 