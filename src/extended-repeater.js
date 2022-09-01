/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(text, options) {
    let concat = (elem, times, sep) => Array(times).fill(elem).join(sep)
    let addition = options.addition === undefined ? '' : new String(options.addition).toString();
    let textElement = new String(text).toString() +
        concat(addition,
            options.additionRepeatTimes || 1,
            options.additionSeparator || '|')
    return concat(textElement, options.repeatTimes || 1, options.separator || '+');
}

module.exports = {
    repeater
};