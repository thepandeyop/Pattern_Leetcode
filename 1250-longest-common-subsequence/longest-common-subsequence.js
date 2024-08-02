/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function solve(m, n, text1, text2, dp) {
    if (m === 0 || n === 0) {
        return 0;
    }

    if (dp[m][n] !== -1) {
        return dp[m][n];
    }

    if (text1.charAt(m - 1) === text2.charAt(n - 1)) {
        dp[m][n] = 1 + solve(m - 1, n - 1, text1, text2, dp);
    } else {
        let right = solve(m - 1, n, text1, text2, dp);
        let left = solve(m, n - 1, text1, text2, dp);
        dp[m][n] = Math.max(right, left);
    }

    return dp[m][n];
}

var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    // Initialize the dp array with -1 to indicate uncomputed states
    let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(-1));
    return solve(m, n, text1, text2, dp);
};
