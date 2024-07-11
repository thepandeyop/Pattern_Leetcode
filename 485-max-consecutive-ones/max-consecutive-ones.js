/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left =0;
    let window=0;
    let ans =0;
    
    for(let right=0;right<nums.length;right++){
    window += nums[right];
        while(right-left+1 !=window){
              window -=nums[left];
        left++;
              }
      ans = Math.max(right-left+1,ans);  
    }
    return ans;
};