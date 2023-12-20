const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const less = s1.length < s2.length ? s1 : s2
  let more = s1.length < s2.length ? s2 : s1
  let count= 0
  for (let i = 0; i < less.length; i++) {
    if (more.includes(less[i])) {
      count++
      more = more.replace(less[i], '')
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
