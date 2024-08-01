function pall(s, i, j, memo) {
    if (i >= j) return true;
    if (memo[i][j] !== undefined) return memo[i][j];
    
    if (s[i] === s[j]) {
        memo[i][j] = pall(s, i + 1, j - 1, memo);
        return memo[i][j];
    }
    
    memo[i][j] = false;
    return false;
}

var longestPalindrome = function(s) {
    let n = s.length;
    let max = 0;
    let sp = 0;
    let memo = Array.from({ length: n }, () => Array(n));
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (pall(s, i, j, memo) === true) {
                if (j - i + 1 > max) {
                    max = j - i + 1;
                    sp = i;
                }
            }
        }
    }
    return s.substring(sp, sp + max);
};
