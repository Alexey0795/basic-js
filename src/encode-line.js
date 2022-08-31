const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 0;
  let prev = '';

  const doConcate = () => {
    res += `${count > 1 ? count : ''}${prev}`;
    count = 0;
    prev = '';
  }

  const check = char => {
    if (char === prev) {
      count++;
      return;
    }
    doConcate();
    prev = char;
    count = 1;
  }

  for (let pos = 0; pos < str.length; pos++) {
    check(str[pos]);
  }

  if (count > 0) doConcate();
  return res;
}

module.exports = {
  encodeLine
};