/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    function solve(idx, set) {
        if (idx === s.length) {
            return set.size;
        }
        
        let substr = '', maxsize = 0;
        for (let i = idx; i < s.length; i++) {
            substr += s[i];
            if (set.has(substr)) continue;
            set.add(substr);
            maxsize = Math.max(maxsize, solve(i + 1, set));
            set.delete(substr);
        }
        return maxsize;
    }
    
    return solve(0, new Set());
};
