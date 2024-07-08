/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    function backtrack(start,k,temp){
        if(k===0){
            res.push([...temp])
        }
    for(let i=start;i<=n;i++){
       temp.push(i);
        backtrack(i+1,k-1,temp);
        temp.pop(i);
    }
    }
    backtrack(1,k,[]);
    return res;
    
};