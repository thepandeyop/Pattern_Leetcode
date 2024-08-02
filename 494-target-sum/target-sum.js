/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function solve(nums, target, i, sum, dp) {
    // Base case: if we've processed all numbers, check if the current sum equals the target
    if (i === nums.length) {
        return sum === target ? 1 : 0;
    }
    
    // Memoization check
    if (dp[i][sum + 1000] !== undefined) return dp[i][sum + 1000];
    
    // Recursive case: include the current number with both + and - signs
    let add = solve(nums, target, i + 1, sum + nums[i], dp);
    let subtract = solve(nums, target, i + 1, sum - nums[i], dp);
    
    // Memoize the result
    dp[i][sum + 1000] = add + subtract;
    return dp[i][sum + 1000];
}

var findTargetSumWays = function(nums, target) {
    // Create a memoization table
    // We use a range from -1000 to 1000 (hence the shift by 1000) to accommodate sum values
    let dp = Array.from({ length: nums.length }, () => Array(2001));
    return solve(nums, target, 0, 0, dp);
};
