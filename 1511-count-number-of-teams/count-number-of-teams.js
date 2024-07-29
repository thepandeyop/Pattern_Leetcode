/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    let n = rating.length;
    
    for (let i = 1; i < n; i++) {
        let ls = 0, lg = 0, rs = 0, rg = 0;
        
        for (let j = 0; j < i; j++) {
            if (rating[j] < rating[i]) {
                ls++;
            } else {
                lg++;
            }
        }
        
        for (let j = i + 1; j < n; j++) {
            if (rating[j] < rating[i]) {
                rs++;
            } else {
                rg++;
            }
        }
        
        res += (ls * rg) + (rs * lg);
    }
    return res;
};