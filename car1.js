var Car = function (color, convertible) {
  this.color = color
  this.convertible = convertible
  this.speed = 0

  this.accelerate = function(num) {
    this.speed += num

    // old code
    // var oldSpeed = this.speed
    // this.speed = this.speed + num
    // return oldSpeed + " " + this.speed
  }

  this.decelerate = function(num) {
    this.speed -= num

    // old code
    // var oldSpeed = this.speed
    // this.speed = this.speed - num
    // return oldSpeed + " " + this.speed
  }

  // this.newcolor

}

module.exports = Car
