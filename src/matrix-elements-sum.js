/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let pos = 0; pos < matrix[row].length; pos++) {
      if (row === 0) {
        sum += matrix[row][pos];
        continue;
      }
      let cond = matrix[row - 1][pos] === 0;
      if (!cond) sum += matrix[row][pos];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
