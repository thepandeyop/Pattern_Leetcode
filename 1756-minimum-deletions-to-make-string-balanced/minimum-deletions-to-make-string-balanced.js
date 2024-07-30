/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let deletions = 0, counts = 0;
    for (let ch of s) {
        if (ch === 'b') {
            counts += 1;
        } else if (counts > 0) {
            deletions += 1;
            counts -= 1;
        }
    }
    return deletions;
};