const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.length) {
      return 1
    }
    const temp = this.removeNonArrayElements(arr)
    let step = temp.length ? 1 : 0
    return step + this.calculateDepth(this.flattenArrayOfArrays(temp))
  }
  removeNonArrayElements(arr) {
    return arr.filter(el => Array.isArray(el))
  }
  flattenArrayOfArrays(arr) {
    if (arr.length) {
      const res = []
      arr.forEach(el => res.push(...el))
      return res
    }
    return arr
  }
}

module.exports = {
  DepthCalculator
};
