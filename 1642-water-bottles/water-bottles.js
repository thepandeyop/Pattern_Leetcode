/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drink = numBottles;
    
    while (numBottles>=numExchange){
      let temp = Math.floor(numBottles/numExchange);
        let rem = Math.floor(numBottles%numExchange);
        drink += temp;
        numBottles = temp + rem;
    }
    return drink;
    
};