/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minInRows = new Set();
    const result = [];
    
    for (const row of matrix) {
        const minInRow = Math.min(...row);
        minInRows.add(minInRow);
    }
    
    for (let col = 0; col < matrix[0].length; ++col) {
        let maxInCol = matrix[0][col];
        for (let row = 1; row < matrix.length; ++row) {
            maxInCol = Math.max(maxInCol, matrix[row][col]);
        }
        if (minInRows.has(maxInCol)) {
            result.push(maxInCol);
        }
    }
    
    return result;
};