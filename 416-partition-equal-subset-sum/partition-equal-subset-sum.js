/**
 * @param {number[]} nums
 * @return {boolean}
 */

function subsetSumUtil(ind, target, arr, dp) {
        // If the target sum is 0, we have found a valid subset
        if (target === 0) return true;

        // If we have processed all elements in the array
        if (ind === 0) return arr[0] === target;

        // If this subproblem has already been solved, return the result
        if (dp[ind][target] !== -1) return dp[ind][target] === 1;

        // Try not taking the current element into the subset
        let notTaken = subsetSumUtil(ind - 1, target, arr, dp);

        // Try taking the current element into the subset if it doesn't exceed the target
        let taken = false;
        if (arr[ind] <= target) {
            taken = subsetSumUtil(ind - 1, target - arr[ind], arr, dp);
        }

        // Memoize the result and return true if either choice results in a valid subset
        dp[ind][target] = notTaken || taken ? 1 : 0;
        return dp[ind][target] === 1;
    }

    // Main function to check if the array can be partitioned into two equal subsets
    var canPartition = function(nums) {
        let n = nums.length;
        // Calculate the total sum of the array elements
        let totSum = nums.reduce((a, b) => a + b, 0);

        // If the total sum is odd, it cannot be partitioned into equal subsets
        if (totSum % 2 === 1) return false;

        // Calculate the target sum for each subset
        let k = Math.floor(totSum / 2);
        // Create a memoization table
        let dp = Array.from({ length: n }, () => Array(k + 1).fill(-1));

        // Call the helper function to check if a valid subset exists
        return subsetSumUtil(n - 1, k, nums, dp);
    }

