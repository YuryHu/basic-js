const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const width = matrix[0].length
  const res = [...matrix].map(row => [...row])
  for (let i =  0; i < matrix.length; i++) {
    for (let j = 0; j < width; j++) {
      res[i][j] = 0
      if (i) {
        res[i][j] += checkN(i, j)
        if (j) {
          res[i][j] += checkNE(i, j)
        }
        if (j < width - 1) {
          res[i][j] += checkNW(i, j)
        }
      }
      if (j) {
        res[i][j] += checkE(i, j)
      }
      if (j < width - 1) {
        res[i][j] += checkW(i, j)
      }
      if (i < matrix.length - 1) {
        res[i][j] += checkS(i, j)
        if (j) {
          res[i][j] += checkSE(i, j)
        }
        if (j < width - 1) {
          res[i][j] += checkSW(i, j)
        }
      }
    }
  }
  function checkN(i,j) {
    return matrix[i - 1][j] ? 1 : 0
  }
  function checkNE(i,j) {
    return matrix[i - 1][j - 1] ? 1 : 0
  }
  function checkNW(i,j) {
    return matrix[i - 1][j + 1] ? 1 : 0
  }
  function checkE(i,j) {
    return matrix[i][j - 1] ? 1 : 0
  }
  function checkW(i,j) {
    return matrix[i][j + 1] ? 1 : 0
  }
  function checkS(i,j) {
    return matrix[i + 1][j] ? 1 : 0
  }
  function checkSE(i,j) {
    return matrix[i + 1][j - 1] ? 1 : 0
  }
  function checkSW(i,j) {
    return matrix[i + 1][j + 1] ? 1 : 0
  }
  return res
}

module.exports = {
  minesweeper
};
