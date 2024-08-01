/**
 * @param {number} n
 * @return {number}
 **/

var fib = function(n) {
    let a = 0;
    let b = 1;
    let c = 0;
    
    if (n === 0) return a;
    if (n === 1) return b;
    
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return b;
};

