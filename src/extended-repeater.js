module.exports = function repeater(str, options) {
    if (!options) options = {};
    if (typeof str !== 'string') str = String(str);
    if (options.hasOwnProperty('addition') &&
        typeof options.addition !== 'string')
        options.addition = String(options.addition);
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.separator) options.separator = '+';
    if (!options.addition) options.addition = '';
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (!options.additionSeparator) options.additionSeparator = '|';
    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;
            if (j + 1 !== options.additionRepeatTimes)
                result += options.additionSeparator;
        }
        if (i + 1 !== options.repeatTimes)
            result += options.separator;
    }
    return result;
};
  