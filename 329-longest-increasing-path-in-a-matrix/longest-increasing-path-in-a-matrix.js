/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
     const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    let res = 0;

    function dfs(i, j, prevVal) {
        if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= prevVal) {
            return 0;
        }

        if (dp[i][j] !== 0) {
            return dp[i][j];
        }

        let temp = 0;
        const curr = matrix[i][j];
        temp = Math.max(temp, dfs(i + 1, j, curr));
        temp = Math.max(temp, dfs(i - 1, j, curr));
        temp = Math.max(temp, dfs(i, j + 1, curr));
        temp = Math.max(temp, dfs(i, j - 1, curr));

        dp[i][j] = ++temp;
        return dp[i][j];
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(dfs(i, j, Number.MIN_SAFE_INTEGER), res);
        }
    }

    return res;
};