'use strict'
const fs = require("fs")

exports.agregar = (req, res) => {
fs.appendFile('mynewfile1.txt', req.body.data.name, function(err) {
  if (err) throw err
  console.log('Saved!');
	console.log(req.body)
})

}

