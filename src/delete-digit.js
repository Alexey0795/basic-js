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
  let maxval = 0;
  let str = `${n}`;
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    let newarr = [...arr];
    newarr.splice(i, 1);
    let curnum = Number(newarr.join(''));
    if (curnum > maxval) maxval = curnum;
  }
  return maxval;
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(10))