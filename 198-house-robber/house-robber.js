/**
 * @param {number[]} nums
 * @return {number}
 */
function solve(i, nums, dp) {
    if (i >= nums.length) return 0;

    if (dp[i] !== -1) return dp[i];

    // Either rob the current house and move to the house after the next, or skip the current house
    dp[i] = Math.max(nums[i] + solve(i + 2, nums, dp), solve(i + 1, nums, dp));
    return dp[i];
}

var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);

    return solve(0, nums, dp);
};
