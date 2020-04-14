const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
}

Park.prototype.addDinosaurs = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurs = function (dinosaur) {
  const indexOfDinosaurs = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaurs, 1);
}

Park.prototype.popularDinosaurs = function (dinosaur) {
  
}

module.exports = Park;
