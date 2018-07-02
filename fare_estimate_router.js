var express = require('express')
var router = express.Router()
var fare_estimate = require('./fare_estimate')

router.get('/', function(request, response) {
	estimate = JSON.stringify({'estimate': fare_estimate.request(request.query.pickup, request.query.dropoff)})
	response.send(estimate)
})

module.exports = router