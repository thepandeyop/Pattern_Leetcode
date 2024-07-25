/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map =  new Map();
    let res = [];
    numbers.forEach((value,key)=>{
        let diff = target - value;
        if(map.has(diff)){
            res =[  map.get(diff)+1,key+1];
        }
        map.set(value,key);
    });
    return res;
        
    }