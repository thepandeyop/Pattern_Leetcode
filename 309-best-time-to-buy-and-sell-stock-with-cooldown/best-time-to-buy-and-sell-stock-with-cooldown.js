/**
 * @param {number[]} prices
 * @return {number}
 */

function helper(arr, idx, ableToBuy, memo) {
    if (idx >= arr.length) return 0;

    if (memo[idx][ableToBuy] !== -1) return memo[idx][ableToBuy];

    if (ableToBuy) {
        let take = -arr[idx] + helper(arr, idx + 1, 0, memo); // Buy the stock
        let notTake = helper(arr, idx + 1, 1, memo); // Do not buy the stock
        memo[idx][ableToBuy] = Math.max(take, notTake);
    } else {
        let take = arr[idx] + helper(arr, idx + 2, 1, memo); // Sell the stock and enter cooldown
        let notTake = helper(arr, idx + 1, 0, memo); // Do not sell the stock
        memo[idx][ableToBuy] = Math.max(take, notTake);
    }

    return memo[idx][ableToBuy];
}

var maxProfit = function(prices) {
    let n = prices.length;
    let memo = new Array(n).fill(null).map(() => new Array(2).fill(-1));
    return helper(prices, 0, 1, memo);
};
