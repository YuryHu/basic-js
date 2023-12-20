const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const chunks = []
  let chunk = ''
  for (let i = 0; i < str.length; i++) {
    if (!chunk.includes(str[i])) {
      chunks.push(chunk)
      chunk = str[i]
    } else {
      chunk += str[i]
    }
  }
  chunks.push(chunk)
  return chunks.map(el => el.length > 1 ? el.length + el[0] : el).join('')
}

module.exports = {
  encodeLine
};
