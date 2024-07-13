/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
     const n = positions.length;
        const indices = Array.from({ length: n }, (_, i) => i);
        const result = [];
        const stack = [];

        // Sort indices based on positions
        indices.sort((lhs, rhs) => positions[lhs] - positions[rhs]);

        for (const currentIndex of indices) {
            if (directions[currentIndex] === 'R') {
                stack.push(currentIndex);
            } else {
                while (stack.length > 0 && healths[currentIndex] > 0) {
                    const topIndex = stack.pop();

                    if (healths[topIndex] > healths[currentIndex]) {
                        healths[topIndex] -= 1;
                        healths[currentIndex] = 0;
                        stack.push(topIndex);
                    } else if (healths[topIndex] < healths[currentIndex]) {
                        healths[currentIndex] -= 1;
                        healths[topIndex] = 0;
                    } else {
                        healths[currentIndex] = 0;
                        healths[topIndex] = 0;
                    }
                }
            }
        }

        // Collect surviving robots
        for (let index = 0; index < n; ++index) {
            if (healths[index] > 0) {
                result.push(healths[index]);
            }
        }

        return result;  
};