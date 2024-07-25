/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 nums.sort((a, b) => a - b); // Sort the array to handle duplicates easily
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

        let map = new Map();
        for (let j = i + 1; j < nums.length; j++) {
            let complement = -nums[i] - nums[j];
            if (map.has(complement)) {
                result.push([nums[i], nums[j], complement]);
                // Skip duplicates for the second number
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
            }
            map.set(nums[j], j);
        }
    }

    return result;
    
};