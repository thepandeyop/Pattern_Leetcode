var minSwaps = function(nums) {
    let count=0
    for(let x of nums){
        if(x==1)count++
    }
    let max1=0
    let si=0
    let ei=si+count
    let ic=0    
    for(let i=si;i<ei;i++){
        if(nums[i]==1)ic++
    }
    ei--
    while(si<nums.length){
        if(nums[si]==0 && nums[(ei+1)%nums.length]==1){
            ic++
        }
        else if(nums[si]==1 && nums[(ei+1)%nums.length]==0){
            ic--
        }
        if(ic>max1)max1=ic
        si++
        ei++
    }
    return count-max1
};