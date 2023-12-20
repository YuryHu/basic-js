const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const fixedAddition = options.addition === null ? 'null' : options.addition
  const addition = Array(options.additionRepeatTimes).fill(fixedAddition).join(options.additionSeparator ?? '|')
  return Array(options.repeatTimes).fill(str + addition).join(options.separator ?? '+')
}

module.exports = {
  repeater
};
