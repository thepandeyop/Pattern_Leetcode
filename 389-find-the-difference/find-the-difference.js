/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
   let mp = new Map();

        for (let char of t) {
            mp.set(char, (mp.get(char) || 0) + 1);
        }

        for (let char of s) {
            mp.set(char, mp.get(char) - 1);
            if (mp.get(char) === 0) {
                mp.delete(char);
            }
        }

        return mp.keys().next().value;
};