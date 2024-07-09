/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
   let watingtime=0
    let currtime= 0
    for(let i=0; i<customers.length; i++){
        if(currtime>customers[i][0]){
            currtime=currtime+customers[i][1]
        }else{
            currtime = customers[i][1]+customers[i][0]
        }
        watingtime = watingtime + currtime -customers[i][0]

    }
    return watingtime/customers.length
};