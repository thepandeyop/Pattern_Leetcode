/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const mod = 1e9 + 7;
    let sum = [];
    
    // Create subarray sums
    for (let i = 0; i < n; i++) {
        let x = 0;
        for (let j = i; j < n; j++) {
            x += nums[j];
            sum.push(x);
        }
    }
    
    // Sort the subarray sums
    sum.sort((a, b) => a - b);
    
    // Calculate the sum of the range [left, right]
    let sumsum = 0;
    for (let i = left - 1; i < right; i++) {
        sumsum = (sumsum + sum[i]) % mod;
    }

    return sumsum;
};
