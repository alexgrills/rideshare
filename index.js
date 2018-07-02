var express = require('express')
var app = express()
var fare_estimate = require('./fare_estimate_router')
var ride_request = require('./ride_request_router')

app.use('/fare_estimate', fare_estimate)
app.use('/ride_request', ride_request)


app.get('/', function(request, response) {
	response.send('hello world')
})

app.listen(3000)