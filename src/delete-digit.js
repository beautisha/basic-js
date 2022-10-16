const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n));
  let arr1 = [];
  let k = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    arr1 = Array.from(String(n));
    arr1.splice(i, 1);
    for (let j = arr1.length - 1; j >= 0; j--) {
      k = k + arr1[j] * (10 ** (arr1.length - 1 - j));
    }
    if (max < k) { max = k }
    k = 0;
  }
  return max;
}

module.exports = {
  deleteDigit
};
