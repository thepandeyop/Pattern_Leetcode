var maxProduct = function(nums) {
    let mini, maxi, res;
    mini = maxi = res = nums[0];
    
    for (let num of nums.slice(1)) {
        const currMini = Math.min(num, num * maxi, num * mini);
        const currMaxi = Math.max(num, num * maxi, num * mini);
        maxi = currMaxi
        mini = currMini
        res = Math.max(res, maxi)
    }
    
    return res
};