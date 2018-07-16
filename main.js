
var dice = require('./utils/dice.js')
var _ = require('lodash');
// if (dieRoll === 1) {
//   console.log(monster1)
// } else if (dieRoll === 2) {
//   console.log(monster1)
//   console.log(monster2)
// } else if (dieRoll === 3) {
//   console.log(monster1)
//   console.log(monster2)
//   console.log(monster3)
// } else if (dieRoll === 5) {
//   console.log(monster1)
//   console.log(monster2)
//   console.log(monster3)
//   console.log(monster4)
// } else if (dieRoll === 6) {
//   if (monster1.Level != 3){
//     console.log(monster7)
//   }
//   console.log(monster1)
//   console.log(monster2)
//   console.log(monster3)
//   console.log(monster4)
//   console.log(monster5)
//   console.log(monster6)
// } else {
//   console.log('No eniemies spotted!')
// }
// console.log(i('loot'))



const sample = (x = []) => {
  if (!x || !x.length) {
    return
  }

  const l = x.length
  const i = dice.roll(l)
  return x[i - 1]
}


module.exports = () => {
  return sample([
    'Battlemind',
    'Bishop',
    'Cavalier',
    'Cleric',

  ])
}
