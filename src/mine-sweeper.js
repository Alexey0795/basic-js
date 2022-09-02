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
  let res = new Array(matrix.length);
  for (let row = 0; row < res.length; row++) {
    res[row] = new Array(matrix[0].length).fill(0);
  }

  let row = 0;
  for (; row < matrix.length; row++) {
    let pos = 0;
    for (; pos < matrix[0].length; pos++) {
      if (matrix[row][pos]) {
        res[row][pos] = 1;
        addOne(row - 1, pos - 1);
        addOne(row - 1, pos);
        addOne(row - 1, pos + 1);
        addOne(row, pos + 1);
        addOne(row + 1, pos + 1);
        addOne(row + 1, pos);
        addOne(row + 1, pos - 1);
        addOne(row, pos - 1);
      }
    }
  }

  function addOne(row, pos) {
    if (row < 0 || pos < 0) return;
    if (!matrix[row][pos]) res[row][pos] += 1
  }

  return res;
}

module.exports = {
  minesweeper
};