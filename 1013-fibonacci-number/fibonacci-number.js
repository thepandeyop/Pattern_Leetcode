/**
 * @param {number} n
 * @return {number}
 */
function solve(n, dp) {
    if (n <= 1) return n;

    if (dp[n] !== -1) return dp[n];

    dp[n] = solve(n - 1, dp) + solve(n - 2, dp);
    return dp[n];
}

var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    let dp = new Array(n + 1).fill(-1);
    return solve(n, dp);
};
