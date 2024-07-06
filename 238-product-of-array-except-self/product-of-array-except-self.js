/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let L = [];
    let R = [];
    let n = nums.length;
    L[0] = 1;
    R[n-1]= 1;
    
    for(let i=1;i<n;i++){
        L[i] = nums[i-1]*L[i-1];
    }
    for(let i=n-2;i>=0;i--){
        R[i] = nums[i+1]*R[i+1];
    }
    let result = [];
    for(let i=0;i<n;i++){
        result[i] = L[i]*R[i];
    }
    return result;
};