/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  let arr = new String(n).split('-')
  for (let pair of arr) {
    if (!result) return false
    if (pair.length != 2) return false
    if (isNaN(parseInt(pair, 16))) result = false
  }
  return result;
}
module.exports = {
  isMAC48Address
};
