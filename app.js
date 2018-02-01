var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var api = require('./module/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('', api)

module.exports = app