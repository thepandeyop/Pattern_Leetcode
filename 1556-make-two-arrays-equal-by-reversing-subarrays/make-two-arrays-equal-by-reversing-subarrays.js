/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
function solve(target, arr, i) {
    if (i >= target.length) return true;
    
    if (target[i] === arr[i]) {
        return solve(target, arr, i + 1);
    } else {
        return false;
    }
}

var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) return false;
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    return solve(target, arr, 0);
};
