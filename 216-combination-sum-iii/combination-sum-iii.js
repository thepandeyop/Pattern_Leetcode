/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    function solve(idx,temp,sum){
        if(sum===n && temp.length===k){
            res.push([...temp]);
        }
        if(idx>k.length || sum>n ){
           return ;
           }
        for(let i=idx;i<=9;i++){
          temp.push(i);
            solve(i+1,temp,sum+i);
            temp.pop();
        }
    }
    solve(1,[],0);
    return res;
};