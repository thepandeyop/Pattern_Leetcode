/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    backtrack(res, nums, 0, nums.length);
    return res;
};

function backtrack(res, nums, idx, n) {
    if (idx === n) {
        res.push([...nums]);
        return;
    }
    let seen = new Set();
    for (let i = idx; i < n; i++) {
        if (seen.has(nums[i])) continue; // Skip duplicates
        seen.add(nums[i]);
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        backtrack(res, nums, idx + 1, n);
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
    }
}
