/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left =0;
    let ans =0;
    let  n = nums.length;
    let window =0;
    
    for(let i=0;i<k;i++){
        window += nums[i]
    }
    ans = window/k;
    for(let right = k;right<n;right++){
        window += nums[right] -nums[right-k];
        ans = Math.max(ans,window/k);
    }
    
    return ans;
};