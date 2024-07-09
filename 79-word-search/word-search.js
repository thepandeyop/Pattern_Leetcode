/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function find(board, i, j, idx, word, row, col) {
    if (idx >= word.length) return true;

    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] === '$') {
        return false;
    }

    if (board[i][j] !== word[idx]) return false;

    // Mark the cell as visited
    let temp = board[i][j];
    board[i][j] = '$';

    // Explore in all 4 directions
    let found = find(board, i + 1, j, idx + 1, word, row, col) ||
                find(board, i - 1, j, idx + 1, word, row, col) ||
                find(board, i, j + 1, idx + 1, word, row, col) ||
                find(board, i, j - 1, idx + 1, word, row, col);

    // Unmark the cell
    board[i][j] = temp;

    return found;
}

var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0] && find(board, i, j, 0, word, row, col)) {
                return true;
            }
        }
    }
    return false;
};
