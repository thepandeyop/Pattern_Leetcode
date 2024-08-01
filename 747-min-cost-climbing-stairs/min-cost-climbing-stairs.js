/**
 * @param {number[]} cost
 * @return {number}
 */
 //                             using dp bro :)
function solve(i, cost, dp) {
    if (i >= cost.length) {
        return 0;
    }
    if (dp[i] !== -1) return dp[i];
    
    let a = cost[i] + solve(i + 1, cost, dp);
    let b = cost[i] + solve(i + 2, cost, dp);
    
    dp[i] = Math.min(a, b);
    return dp[i];
}

var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(-1);
    return Math.min(solve(0, cost, dp), solve(1, cost, dp));
};
