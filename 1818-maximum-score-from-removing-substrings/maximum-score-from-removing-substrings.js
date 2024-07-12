/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let res = 0;
    let top, bot;
    let top_score, bot_score;

    if (y > x) {
        top = "ba";
        top_score = y;
        bot = "ab";
        bot_score = x;
    } else {
        top = "ab";
        top_score = x;
        bot = "ba";
        bot_score = y;
    }

    // Removing first top substrings cause they give more points
    let stack = [];
    for (let char of s) {
        if (char == top[1] && stack.length > 0 && stack[stack.length - 1] == top[0]) {
            res += top_score;
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    // Removing bot substrings cause they give less or equal amount of scores
    let new_stack = [];
    for (let char of stack) {
        if (char == bot[1] && new_stack.length > 0 && new_stack[new_stack.length - 1] == bot[0]) {
            res += bot_score;
            new_stack.pop();
        } else {
            new_stack.push(char);
        }
    }

    return res;
};