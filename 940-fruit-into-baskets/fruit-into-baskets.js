/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let left = 0;
    let ans = 0;
    let window = new Map();

    for (let right = 0; right < fruits.length; right++) {
        window.set(fruits[right], (window.get(fruits[right]) || 0) + 1);

        while (window.size > 2) {
            window.set(fruits[left], window.get(fruits[left]) - 1);
            if (window.get(fruits[left]) === 0) {
                window.delete(fruits[left]);
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};
