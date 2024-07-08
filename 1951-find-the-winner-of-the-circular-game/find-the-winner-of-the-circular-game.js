/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// using simulation array 
var findTheWinner = function(n, k) {
   // using queue
    
    let queue = [];    // space: O(n)
    for(let i =1;i<=n;i++){
        queue.push(i);
    }
    while(queue.length>1){  //  T.C:  O(n.k)
        for(let i=1;i<k;i++){
            let front =queue.shift();
            queue.push(front);
        }
        queue.shift();
    }
    return queue[0];
};