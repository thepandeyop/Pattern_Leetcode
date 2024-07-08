/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
     let res = [];
    
    function backtrack(nums, i, temp) {
        if (i >= nums.length) {
            res.push(temp.slice()); // Make a copy of temp
            return;
        }
        
        // Include nums[i]
        temp.push(nums[i]);
        backtrack(nums, i + 1, temp);
        
        // Exclude nums[i]
        temp.pop();
        backtrack(nums, i + 1, temp);
    }
    
    backtrack(nums, 0, []);
    return res;
};