/**
 * @param {string} s
 * @return {number}
 */
function solve(i, s, n, dp) {
    if (i === n) {
        return 1;
    }
    if (dp[i] !== -1) return dp[i];
    if (s[i] === '0') return 0;
    
    dp[i] = solve(i + 1, s, n, dp);
    if (i + 1 < n) {
        if (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6')) {
            dp[i] += solve(i + 2, s, n, dp);
        }
    }
    return dp[i];
}

var numDecodings = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(-1);
    return solve(0, s, n, dp);
};


