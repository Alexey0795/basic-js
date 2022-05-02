const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if (date == null) throw new Error('Unable to determine the time of year!');
    if ((date instanceof Date === false ||
            Object.getOwnPropertyNames(date).length > 0) &&
        arguments.length > 0) {
        throw new Error('Invalid date!')
    };
    let mth = date.getMonth() + 1;

    if (mth >= 3 && mth <= 5) { return 'spring' }
    if (mth >= 6 && mth <= 8) { return 'summer' }
    if (mth >= 9 && mth <= 11) { return 'autumn' }
    if ((mth >= 1 && mth <= 2) || mth == 12) { return 'winter' }

}

module.exports = {
    getSeason
};