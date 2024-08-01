/**
 * @param {string} s
 * @return {number}
 */
function pal(s,i,j){
    if(i>=j){
        return true;
    }
    if(s[i]===s[j]){
       return pal(s,i+1,j-1);
    }
    return false;
}
var countSubstrings = function(s) {
    let count = 0;
    let n = s.length;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            if(pal(s,i,j)===true){
                count ++;
            }
        }
    }
    return count;
};