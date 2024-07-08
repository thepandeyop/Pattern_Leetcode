/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
      let res = [];
    
    function solve(idx, temp, sum) {
        if (sum === target) {
            res.push([...temp]);
            return;
        }
        
        if (sum > target || idx >= candidates.length) {
            return;
        }
        
        // Include the current candidate
        temp.push(candidates[idx]);
        solve(idx, temp, sum + candidates[idx]);
        temp.pop();
        
        // Exclude the current candidate
        solve(idx + 1, temp, sum);
    }
    
    solve(0, [], 0);
    return res;
};