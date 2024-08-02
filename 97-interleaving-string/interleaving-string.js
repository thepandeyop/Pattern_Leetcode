/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
function solve(i, j, k, s1, s2, s3, dp) {
    // Base case: if all strings are processed, return true
    if (i === s1.length && j === s2.length && k === s3.length) {
        return true;
    }

    // If we exceed the length of s3, return false
    if (k >= s3.length) {
        return false;
    }

    // If we have already computed this state, return the stored result
    if (dp[i][j][k] !== -1) {
        return dp[i][j][k];
    }

    // Initialize the current state as false
    dp[i][j][k] = false;

    // Check if we can take a character from s1
    if (i < s1.length && s1[i] === s3[k]) {
        dp[i][j][k] = solve(i + 1, j, k + 1, s1, s2, s3, dp);
    }

    // Check if we can take a character from s2 (only if taking from s1 did not work)
    if (!dp[i][j][k] && j < s2.length && s2[j] === s3[k]) {
        dp[i][j][k] = solve(i, j + 1, k + 1, s1, s2, s3, dp);
    }

    return dp[i][j][k];
}

var isInterleave = function(s1, s2, s3) {
    let m = s1.length;
    let n = s2.length;
    let N = s3.length;

    // If the total length does not match, it cannot be an interleaving
    if (m + n !== N) {
        return false;
    }

    // Create a 3D dp array and initialize it with -1 (to signify uncomputed states)
    let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null).map(() => new Array(N + 1).fill(-1)));

    return solve(0, 0, 0, s1, s2, s3, dp);
};
