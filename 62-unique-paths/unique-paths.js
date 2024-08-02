function solve(i, j, m, n, dp) {
    // Base case: if we've reached the bottom-right corner, there's 1 way to stay there
    if (i == m - 1 && j == n - 1) return 1;

    // If out of bounds, return 0 as this is not a valid path
    if (i < 0 || j < 0 || i >= m || j >= n) return 0;

    // If we've already solved this subproblem, return the stored result
    if (dp[i][j] !== -1) return dp[i][j];

    // Recursively calculate the number of ways to reach the bottom-right corner
    let right = solve(i, j + 1, m, n, dp);
    let down = solve(i + 1, j, m, n, dp);

    // Store the result in the dp array
    dp[i][j] = right + down;

    return dp[i][j];
}

var uniquePaths = function(m, n) {
    // Initialize the dp array with -1 to indicate uncomputed states
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(-1));
    return solve(0, 0, m, n, dp);
};
