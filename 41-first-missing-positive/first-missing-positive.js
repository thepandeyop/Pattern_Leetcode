/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    let exist = false;
    
    for(let i=0;i<n;i++){
        if(nums[i]==1){
            exist = true;
        }
        if(nums[i]<=0 || nums[i]>n){
            nums[i]=1;
        }
    }
    
    if(exist===false){
        return 1;
    }
    
    for(let i=0;i<n;i++){
        let num = Math.abs(nums[i]);
        let idx = num-1;
        if(nums[idx]<0)continue;
        nums[idx]*=-1;
    }
    
    for(i=0;i<n;i++){
        if(nums[i]>0){
            return i+1;;
        }
    }
    return n+1;
};