const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let k = 0;
  let yard = [].concat(...matrix);
  for (let i = 0; i <= yard.length; i++) {
    if (yard[i] == '^^') k++
  }
  return k;
}

module.exports = {
  countCats
};
