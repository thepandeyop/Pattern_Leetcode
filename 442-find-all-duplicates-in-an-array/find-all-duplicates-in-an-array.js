/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {  // cyclic sort
    let res = [];
   let i =0;
    
   if(nums.length<2){
       return res;
   } 
    
    while(i<nums.length){
        let correct = nums[i]-1;
        if(nums[i]!==nums[correct]){
            [nums[i],nums[correct]] = [nums[correct],nums[i]];
        }
        else i++;
    }
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=j+1){
            res.push(nums[j])
        }
    }
    return res;
};
// overall time complexity: O(n) + O(nlogn);
            // space complexity : O(n);