var express = require('express')
var app = express()
var fare_estimate = require('./fare_estimate')

app.use('/fare_estimate', fare_estimate)

app.get('/', function(request, response) {
	response.send('hello world')
})

app.listen(3000)