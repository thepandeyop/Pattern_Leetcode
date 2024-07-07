/**
 * @param {number[]} nums
 * @return {number}
 */
// Function to find the length of the longest consecutive sequence in an array of numbers
var longestConsecutive = function(nums) {
    // Create a map to store each number in the array as a key with a value of true
    const map = new Map();
    for (const num of nums) {
        map.set(num, true);
    }

    // Update the map to mark numbers that are not the start of a sequence
    for (const num of nums) {
        if (map.has(num - 1)) {
            map.set(num, false);
        }
    }

    let max = 0; // Variable to keep track of the maximum length of consecutive sequence found

    // Iterate over the array to find the longest consecutive sequence
    for (const num of nums) {
        if (map.get(num)) { // If the number is the start of a sequence
            let cnt = 0; // Counter for the current sequence length
            let n = num; // Start number of the current sequence
            while (map.has(n)) { // Count the length of the sequence
                cnt++;
                n++;
            }
            max = Math.max(max, cnt); // Update the maximum length found
        }
    }
    
    return max; // Return the length of the longest consecutivesequence
};
