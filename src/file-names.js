const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const existing = {}
  let newName
  return names.map(el => {
    if (existing[el]) {
      newName = `${el}(${existing[el]})`
      existing[el] += 1
      existing[newName] = 1
      return newName
    } else {
      existing[el] = 1
      return el
    }
  })
}

module.exports = {
  renameFiles
};
