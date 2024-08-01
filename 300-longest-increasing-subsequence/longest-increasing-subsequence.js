/**
 * @param {number[]} nums
 * @return {number}
 */
function solve(i, p, dp, nums) {
    if (i >= nums.length) return 0;
    if (dp[i][p + 1] !== -1) return dp[i][p + 1];
    
    let take = 0;
    if (p === -1 || nums[p] < nums[i]) {
        take = 1 + solve(i + 1, i, dp, nums);
    }
    
    let skip = solve(i + 1, p, dp, nums);
    dp[i][p + 1] = Math.max(take, skip);
    return dp[i][p + 1];
}

var lengthOfLIS = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill().map(() => Array(n + 1).fill(-1));
    return solve(0, -1, dp, nums);
};
