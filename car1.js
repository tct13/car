var Car = function (color, convertible, speed) {
  this.color = color
  this.convertible = convertible
  this.speed = speed

  this.accelerate = function(num) {
    var oldSpeed = this.speed
    this.speed = this.speed + num
    return oldSpeed + " " + this.speed
  }

  this.decelerate = function(num) {
    var oldSpeed = this.speed
    this.speed = this.speed - num
    return oldSpeed + " " + this.speed
  }

}

module.exports = Car
