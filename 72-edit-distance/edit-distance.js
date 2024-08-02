/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    
let dp = new Array(m+1).fill(-1).map(()=>Array(n+1).fill(-1))

for(let i=0;i<=m;i++) dp[i][0] = i;
    for(let j=0;j<=n;j++) dp[0][j] = j;
    
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
          if(word1.charAt(i-1)===word2.charAt(j-1)) {
              dp[i][j]=  dp[i-1][j-1];
          } 
            else {
                dp[i][j]= 1 + Math.min(dp[i-1][j-1],Math.min(dp[i][j-1],dp[i-1][j]));
            }
        }
    }
    return dp[m][n];
 };