/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    const board = new Array(n).fill().map(() => Array(n).fill('.'));
    solve(board, 0, res);
    return res;
};

function solve(board, row, res) {
    if (row === board.length) {
        res.push(board.map(r => r.join('')));
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 'Q';
            solve(board, row + 1, res);
            board[row][col] = '.';
        }
    }
}

function isSafe(board, row, col) {
    // Check vertically above
    for (let i = row - 1; i >= 0; i--) {
        if (board[i][col] === 'Q') return false;
    }

    // Check diagonally left-up
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }

    // Check diagonally right-up
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] === 'Q') return false;
    }

    return true;
}
