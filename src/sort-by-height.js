const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const auxArr = arr.filter(el => el !== -1)
  auxArr.sort((a, b) => a - b)
  let i = -1
  return arr.map(el => {
    if (el !== -1) {
      i += 1
      el = auxArr[i]
    }
    return el
  })
}

module.exports = {
  sortByHeight
};
