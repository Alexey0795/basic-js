/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let shortarr = arr.filter(elem => elem != -1).map(elem => parseInt(elem));
  shortarr.sort((a, b) => a - b);
  let pos = 0;
  return arr.map(elem => elem === -1 ? -1 : shortarr[pos++])
}

module.exports = {
  sortByHeight
};