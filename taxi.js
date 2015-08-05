function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengers.push(passengerName);
};


//passenger count
Taxi.prototype.passengerCount = function (passengers) {
  return this.passengers.length;
};

//full -- in progress
Taxi.prototype.full = function () {
  if (this.passengers.length >= this.maxNumberOfPassengers) {
    return true;
  } else {
    return false;
  }
};

// drop off passengers
Taxi.prototype.dropOffPassengers = function () {
  return this.passengers =[];
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
