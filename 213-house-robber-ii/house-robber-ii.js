/**
 * @param {number[]} nums
 * @return {number}
 */
function solve(i, nums, dp) {
    if (i >= nums.length) return 0;

    if (dp[i] !== -1) return dp[i];

    dp[i] = Math.max(nums[i] + solve(i + 2, nums, dp), solve(i + 1, nums, dp));
    return dp[i];
}

function solveRange(start, end, nums) {
    let dp = new Array(end - start + 1).fill(-1);
    return solve(0, nums.slice(start, end + 1), dp);
}

var rob = function(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let maxExcludingLast = solveRange(0, n - 2, nums);
    let maxExcludingFirst = solveRange(1, n - 1, nums);

    return Math.max(maxExcludingLast, maxExcludingFirst);
};

