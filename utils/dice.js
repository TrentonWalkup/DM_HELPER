function getRandomInteger (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function roll (sides) {
  return getRandomInteger(1, sides)
}


module.exports = {
roll
}
