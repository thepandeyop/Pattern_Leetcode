/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

function solve(amount, coins, i, memo) {
    if (amount === 0) return 1; // Base case: valid combination found
    if (amount < 0 || i >= coins.length) return 0; // Base case: invalid combination

    if (memo[i][amount] !== -1) return memo[i][amount]; // Return memoized result if available

    // Calculate the number of ways by including the current coin
    let take = solve(amount - coins[i], coins, i, memo); // Do not increment index to allow multiple use of the same coin

    // Calculate the number of ways by excluding the current coin
    let notake = solve(amount, coins, i + 1, memo);

    memo[i][amount] = take + notake; // Memoize the result
    return memo[i][amount];
}

var change = function(amount, coins) {
    let memo = new Array(coins.length).fill(null).map(() => new Array(amount + 1).fill(-1));
    return solve(amount, coins, 0, memo);
};
