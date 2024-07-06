/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let res = new Array();
    nums = nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length;i++){
        if(nums[i-1]===nums[i]){
            res.push(nums[i]);
        }
    }
    return res;
};