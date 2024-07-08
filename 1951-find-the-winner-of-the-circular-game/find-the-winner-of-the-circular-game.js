/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// using simulation array 
var findTheWinner = function(n, k) {
    let arr = [];  // O(n) space;
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    let i=0;
    while(arr.length>1){     // O(n) 
        let idx = (i+k-1)%arr.length;
        arr.splice(idx,1);     //O(n)
        i = idx;
    }
    // overal time complexity => O(n^2);
    return arr[0];
};