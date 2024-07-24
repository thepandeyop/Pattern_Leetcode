/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const translateInteger = (num) => {
        if(num ===0){
            return mapping[0];
        }
        let res = 0;
        let curmul = 1;
        while(num>0){
            const digit = num % 10;
            num = Math.floor(num/10);
            res += mapping[digit]*curmul;
            curmul *= 10;
        }
        return res;
    };
    
    const numberMapping = {};
    for(let i of nums){
        if(!(i in numberMapping)){
            numberMapping[i] = translateInteger(i);
        }
    }
    nums.sort((a,b)=> numberMapping[a] - numberMapping[b]);
    return nums;
};