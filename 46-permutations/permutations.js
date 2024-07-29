/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function backtrack(nums, temp, res, used) {
    if (temp.length === nums.length) {
        res.push([...temp]);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        temp.push(nums[i]);
        backtrack(nums, temp, res, used);
        temp.pop();
        used[i] = false;
    }
}

var permute = function(nums) {
    let res = [];
    backtrack(nums, [], res, Array(nums.length).fill(false));
    return res;
};