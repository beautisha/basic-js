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
  let arr = [];
  let k = 0;
  for (let i = 0; i < matrix.length; i++) {
    arr[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if ((i - 1 >= 0) && (j - 1 >= 0)) {
        if (matrix[i - 1][j - 1] == true) {
          k++;
        }
      }
      if (i - 1 >= 0) {
        if (matrix[i - 1][j] == true) {
          k++;
        }
      }
      if ((i - 1 >= 0) && (j + 1 < matrix[i].length)) {
        if (matrix[i - 1][j + 1] == true) {
          k++;
        }
      }
      if (j - 1 >= 0) {
        if (matrix[i][j - 1] == true) {
          k++;
        }
      }
      if (j + 1 < matrix[i].length) {
        if (matrix[i][j + 1] == true) {
          k++;
        }
      }
      if ((i + 1 < matrix.length) && (j - 1 >= 0)) {
        if (matrix[i + 1][j - 1] == true) {
          k++;
        }
      }
      if (i + 1 < matrix.length) {
        if (matrix[i + 1][j] == true) {
          k++;
        }
      }
      if ((i + 1 < matrix.length) && (j + 1 < matrix[i].length)) {
        if (matrix[i + 1][j + 1] == true) {
          k++;
        }
      }
      arr[i][j] = k;
      k = 0;
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
