var app = require('./app')
var connection = require('./connection')
var sql = require('./module/querys')






connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	};
	console.log('connected');


});

app.listen(3001, () => { 
console.log('Api corriendo en port 3001')})