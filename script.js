class Node {
    constructor(value = null, left = null, right = null, up =null, down = null) {
        this.value = value,
        this.left = left,
        this.right = right,
        this.up = up,
        this.down = down
    }
}

const board = [];

for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = new Node;
    }
}




for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
        if (j  - 1 < 0) {
            board[i][j].left === null
        }
        else {
            board[i][j].left === board[i][j-1];
        }

        if (j + 1 > 7) {
            board[i][j].right = null
        }
        else {
            board[i][j].right = board[i][j+1]
        }

        if (i + 1 > 7) {
            board[i][j].up = null;
        }
        else {
            board[i][j].up = board[i + 1][j];
        }

        if (i - 1 < 0) {
            board[i][j].down = null;
        }
        else {
            board[i][j].down = board[i-1][j];
        }
    }
}

console.log(board[0][0]);