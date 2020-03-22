module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            arr = arr.filter(val => Array.isArray(val));
            let depth = 0;
            for (let i = 0; i < arr.length; i++)
                depth = Math.max(depth, this.calculateDepth(arr[i]));
            return 1 + depth;
        }
        return 0;
    }
};