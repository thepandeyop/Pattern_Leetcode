/**
 * @param {string} s
 * @return {number}
 */
function pal(s,i,j,dp){
    if(i>=j){
        return true;
    }
    if(dp[i][j]!==false)return dp[i][j]
    
     if (s[i] === s[j] && pal(s, i + 1, j - 1, dp)) {
        dp[i][j] = true;
    } else {
        dp[i][j] = false;
    }
    return dp[i][j];
}
var countSubstrings = function(s) {
    let count = 0;
    let n = s.length;
    let dp = new Array(n).fill().map(()=>Array(n).fill(false));
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(pal(s,i,j,dp)===true){
                count ++;
            }
        }
    }
    return count;
};