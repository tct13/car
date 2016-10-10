// var carConstructor = require('./car')
//
// var car1 = new carConstructor('100', 'red', 'up', 'down')
// var car2 = new carConstructor('50', 'blue', 'down', 'up')
//
// console.log(car1.color + ' color car\'s speed is ' + car1.speed)
// console.log(car2.color + ' color car\'s speed is ' + car2.speed)




var carConstructor1 = require('./car1')

var car1 = new carConstructor1('red', true)

console.log(car1.color + " car's speed is " + car1.speed)

car1.accelerate(10)
console.log ( car1.accelerate(10) )
console.log ( typeof car1.accelerate(10) )
