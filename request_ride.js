var driver_database = require('./driver_database')
var trip = require('./trip')
var contact_driver = require('./contact_driver')

function find_driver(pickup, dropoff, callback) {
  driver_database.find_close_driver(pickup, function(driver){
    contact_driver.send_ride_request(driver, function(reply){
      if(reply) {
        trip.connect(function(connection){
          callback(connection)
        })
      }else {
        callback({'error': 'no driver available'})
      }
    })
	})
}

module.exports = {
  find_driver: find_driver
};
