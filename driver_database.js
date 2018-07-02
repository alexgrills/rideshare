function find_close_drivers(pickup, callback) {
  drivers = [{'name': 'driver one'},{'name': 'driver two'},{'name': 'driver three'}]
  callback(drivers)
}

module.exports = {
  find_close_drivers: find_close_drivers
};