/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let left  = new Map();
    let right = new Map();
    let count  = new Map();
    
   for(let i=0;i<nums.length;i++){
       let x = nums[i];
       
       if(!left.has(x)){
           left.set(x,i);
       }
    
    right.set(x,i)
       count.set(x, (count.get(x)||0) + 1);
   }
    
    let ans = nums.length;
     const degree = Math.max(...count.values());
    
    
    for(let x of count.keys()){
        if(count.get(x)==degree){
            ans = Math.min(ans, right.get(x)-left.get(x)+1);
        }
    }
    return ans;
};