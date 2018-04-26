const sum = require('./sum')
module.exports = getAdder

function getAdder(a) {
  return b => sum(a, b)
}