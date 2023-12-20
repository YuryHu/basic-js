const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0
  let replaced
  const num = '' + n
  for (let i = 0; i < num.length; i++) {
    replaced = num.slice(0, i).concat(num.slice(i + 1))
    if (parseInt(replaced) > max) {
      max = parseInt(replaced)
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
