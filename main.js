
var dice = require('./utils/dice.js')
var _ = require('lodash');
var e = require('./monsters.js')

var num = dice.roll(6)
var myArray = e.enemies;
var myNewArray = [];
for (var i=0; i<dice.roll(6); i++) {
    myNewArray.push(myArray.splice(Math.random()*(myArray.length-1),1).pop());
}


console.log(_.sample(e.enemies))


// console.log(_.sample(e.enemies))
