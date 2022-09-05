/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;

  let res = [...arr];

  for (let pos = 0; pos < arr.length; pos++) {
    if (res[pos] === '--discard-next') {
      res[pos] = undefined;
      res[pos + 1] = undefined;
      continue;
    }
    if (res[pos] === '--discard-prev') {
      res[pos] = undefined;
      res[pos - 1] = undefined;
      continue;
    }
    if (res[pos] === '--double-next') {
      res[pos] = res[pos + 1];
      continue;
    }
    if (res[pos] === '--double-prev') {
      res[pos] = res[pos - 1];
      continue;
    }
  }

  return res.filter(elem => elem != undefined);
}

console.log(transform(['--double-prev', 1, 2, 3]))

module.exports = {
  transform
};
