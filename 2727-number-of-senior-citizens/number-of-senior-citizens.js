/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for (let i of details) {
        let age = parseInt(i.substring(11, 13), 10);
        if (age > 60) {
            count++;
        }
    }
    return count;
};
