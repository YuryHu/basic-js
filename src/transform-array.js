const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let finalRes = []
  let res = []
  let elToBePushed = {}
  let flags = ['--discard-prev', '--double-prev', '--discard-next', '--double-next']
  arr.forEach(el =>{
    if (el === '--discard-next') {
      elToBePushed.discard = true
    } else if (el === '--double-next') {
      elToBePushed.doublenext = true
    } else if (el === '--discard-prev') {
        if (res.length) {
          res[res.length - 1].discard = true
        }
    } else if (el === '--double-prev') {
        if (res.length) {
          res[res.length - 1].doubleprev = true
        }
    } else {
      elToBePushed.value = el
      res.push(elToBePushed)
      elToBePushed = {}
    }
  })
  res.forEach(el => {/// play here for advanced
    if (el.doublenext && el.doubleprev) {
      finalRes.push(el.value, el.value, el.value)
    } else if (el.doublenext && el.discard) {
      finalRes.push(el.value)
    } else if (!el.discard) {
      finalRes.push(el.value)
      if (el.doublenext || el.doubleprev) {
        finalRes.push(el.value)
      }
    }
  })
  return finalRes
}

module.exports = {
  transform
};
