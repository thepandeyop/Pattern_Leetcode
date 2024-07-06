/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = new Array();
    nums = nums.sort((a,b)=>a-b); // time complexity = O(nlogn);
    for(let i=0;i<nums.length;i++){    //O(n);
        if(nums[i-1]===nums[i]){
            res.push(nums[i]);
        }
    }
    return res;
};
// overall time complexity: O(n) + O(nlogn);
            // space complexity : O(n);