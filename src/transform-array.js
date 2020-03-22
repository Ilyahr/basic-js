module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;

    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                mas.pop();
                break;
            case '--double-next':
                if (i + 1 !== arr.length)
                    mas.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i >= 1)
                    mas.push(arr[i - 1]);
                break;
            default:
                mas.push(arr[i]);
        }
    }
    return mas;
};

