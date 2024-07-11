/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
     while (s.includes('(')) {
        const right = s.indexOf(')');
        const left = s.lastIndexOf('(', right);

        const reversed = s.slice(left + 1, right).split('').reverse().join('');
        const rest = s.slice(right + 1);

        s = s.slice(0, left) + reversed + rest;
    }
    return s;
};