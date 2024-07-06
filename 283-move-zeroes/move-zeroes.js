/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let L =0;
    for(let R=0;R<nums.length;R++){
        if(nums[R]!==0){
            [nums[R],nums[L]]=[nums[L],nums[R]];
        L++;
        }
    }
  return nums;
};