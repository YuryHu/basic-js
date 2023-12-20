const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let samples = new Set()
  let chunks
  domains.forEach(el => {
		samples.add(el.split('.').reverse().join('.'))
    chunks = el.split('.')
    if (chunks.length > 2) {
      samples.add(chunks[2], chunks[2] + '.' + chunks[1])
    } else {
      samples.add(chunks[1])
    }
  })
  samples = [...samples]
  console.log(samples)
  const res = {}
  samples.forEach(sample => {
    domains.forEach(domain => {
      domain = domain.split('.').reverse().join('.')
      if (domain.includes(sample)) {
        if (res[`.${sample}`]) {
          res[`.${sample}`] += 1
        } else (
          res[`.${sample}`] = 1
        )
      }
    })
  })
  return res
}

module.exports = {
  getDNSStats
};
