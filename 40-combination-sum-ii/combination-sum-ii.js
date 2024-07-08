/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
     let res = [];
    candidates.sort((a,b)=>a-b);
    function solve(idx, temp, sum) {
        if (sum === target) {
            res.push([...temp]);
            return;
        }
        
        if (sum > target || idx >= candidates.length) {
            return;
        }
      for (let i = idx; i < candidates.length; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) {
                continue; // Skip duplicates
            }
            temp.push(candidates[i]);
            solve(i + 1, temp, sum + candidates[i]);
            temp.pop();
        }
    }
    
    solve(0, [], 0);
    return res;

};