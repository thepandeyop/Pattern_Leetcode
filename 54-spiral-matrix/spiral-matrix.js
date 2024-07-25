/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    
    let ans = [];
    
    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let j = left; j <= right; j++) {
            ans.push(matrix[top][j]);
        }
        top++;
        
        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        
        if (top <= bottom) {
            // Traverse from right to left along the bottom row
            for (let j = right; j >= left; j--) {
                ans.push(matrix[bottom][j]);
            }
            bottom--;
        }
        
        if (left <= right) {
            // Traverse from bottom to top along the left column
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return ans;

};