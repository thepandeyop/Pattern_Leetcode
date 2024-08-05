/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  
    let seen  = new Map();
    
    for(let i of arr){
        if(seen.has(i)){
          let count = seen.get(i) +1;  
            seen.set(i);
        }else
        {
            seen.set(i,1);
        }
    }
    
    let dis = 0;
    
    for(let [i,count] of seen.entries()){
        if(count==1) {
         dis++;
        if(dis ===k)
            return i;   
        }
            
    }
    
    return "";
    
    
};