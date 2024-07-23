/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
   nums.forEach(i =>{
       map.set(i,(map.get(i)||0)+1);
   });
    
    nums.sort((a,b)=>{
        const feq = map.get(a);
        const feq2 = map.get(b);
        
        if(feq !==feq2){
            return feq-feq2;
        }
        else {
            return b-a;
        }
    });
    return nums;
};