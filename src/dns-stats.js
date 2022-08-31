/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let mem = new Map();

  const toCountSubdom = subdom => {
    if (mem.has(subdom)) {
      mem.set(subdom, mem.get(subdom) + 1)
    }
    else {
      mem.set(subdom, 1)
    }
  }

  const combineSubdom = str => {
    str.split('.')
      .reduceRight((acc, curr) => {
        toCountSubdom(`${acc}.${curr}`)
        return `${acc}.${curr}`
      }, '')
  }

  for (let elem of domains) {
    combineSubdom(elem);
  }

  return Object.fromEntries(mem);
}

module.exports = {
  getDNSStats
};