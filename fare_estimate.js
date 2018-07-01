var express = require('express')
var router = express.Router()

router.get('/', function(request, response) { 
	//req.query.pickup
	//req.query.dropoff
	estimate = JSON.stringify({'fare_estimate': 10.00})
	response.send(estimate)
})

module.exports = router