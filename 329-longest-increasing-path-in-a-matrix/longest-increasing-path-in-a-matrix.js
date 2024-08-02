function longestIncreasingPath(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = Array.from({ length: m }, () => new Array(n).fill(0));

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(dfs(matrix, i, j, -Infinity, dp), res);
        }
    }

    return res;
}

function dfs(matrix, i, j, prevVal, dp) {
    const m = matrix.length;
    const n = matrix[0].length;

    if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= prevVal) {
        return 0;
    }

    if (dp[i][j] !== 0) {
        return dp[i][j];
    }

    let temp = 0;
    const curr = matrix[i][j];
    temp = Math.max(temp, dfs(matrix, i + 1, j, curr, dp));
    temp = Math.max(temp, dfs(matrix, i - 1, j, curr, dp));
    temp = Math.max(temp, dfs(matrix, i, j + 1, curr, dp));
    temp = Math.max(temp, dfs(matrix, i, j - 1, curr, dp));

    dp[i][j] = ++temp;
    return dp[i][j];
}
