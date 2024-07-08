/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
   let res=[];
    backtrack(res,nums,0,nums.length);
    return res;
};

function backtrack(res,nums,idx,n){
    if(idx===n){
        res.push([...nums]);
        return;
    }
    for(let i=idx;i<n;i++){
        [nums[i],nums[idx]]=[nums[idx],nums[i]];
        backtrack(res,nums,idx+1,n);
          [nums[i],nums[idx]]=[nums[idx],nums[i]];
    }
}