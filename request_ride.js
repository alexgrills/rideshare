var driver_database = require('./driver_database')

function find_driver(pickup, dropoff) {
  driver_database.find_close_drivers(pickup, function(drivers){
		for (var driver in drivers){

		} 
	})

  //contact a close driver
  //if they don't accept, contact a different close driver
  //if n don't accept, failout out saying no riders are available
  //if driver accepts, send a realtime connection and the driver's info to rider
  return {'driver_info': {}}
}

module.exports = {
  find_driver: find_driver
};
