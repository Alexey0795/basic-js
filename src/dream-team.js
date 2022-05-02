const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!members) { return false; }
    if (members.length == 0) { return false; }
    let arr = [];
    Array.from(members)
        .forEach(elem => {
            if (typeof elem === 'string') {
                arr.push(elem.trim().charAt(0).toUpperCase())
            }
        })
    arr2 = arr.filter(ch => ch.match(/[a-z]/i))
    arr3 = arr2.sort();
    return arr3.join('').toUpperCase();
}

module.exports = {
    createDreamTeam
};