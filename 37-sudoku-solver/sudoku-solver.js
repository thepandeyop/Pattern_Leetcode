/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solver(board);
};


function solver(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                for (let count = 1; count <= 9; count++) {
                    let char = String(count);
                    if (isValid(i, j, board, char)) {
                        board[i][j] = char;
                        if (solver(board)) {
                            return true;
                        } else {
                            // If no number fits in the next cell, reset and try a new number for the current cell
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(row, col, board, char) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === char) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (board[i][col] === char) {
            return false;
        }
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === char) {
                return false;
            }
        }
    }
    return true;
}

