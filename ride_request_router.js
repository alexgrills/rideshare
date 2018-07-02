var express = require('express')
var router = express.Router()
var request_ride = require('./request_ride')

router.get('/request_ride', function(request, response) {
	driver = request_ride.find_driver(request.query.pickup, request.query.dropoff)
	response.send(JSON.stringify(driver))
})

module.exports = router