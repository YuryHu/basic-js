const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.hasOwn(date, 'getDay')) {
    throw new Error('Invalid date!');
  }
  const seasons = [
    'winter',
    'winter',
    'spring',
    'spring',
    'spring',
    'summer',
    'summer',
    'summer',
    'autumn',
    'autumn',
    'autumn',
    'winter'
  ]
  try {
    const monthN = date.getMonth()
    return seasons[monthN]
  } catch (err) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
