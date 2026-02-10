class Node {
    constructor(value = null, sideLeftUp = null, sideRightUp = null, sideLeftDown = null, sideRightDown = null,
        upLeft = null, upRight= null, downLeft = null, downRight = null, visit = false
    ) {
        this.value = value,
        this.sideLeftUp = sideLeftUp;
        this.sideRightUp = sideRightUp;
        this.sideLeftDown = sideLeftDown;
        this.sideRightDown = sideRightDown;
        this.upLeft = upLeft;
        this.upRight = upRight;
        this.downLeft = downLeft;
        this.downRight = downRight;
        this.visit = visit;
    }
}

const board = [];

for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
        board[i][j] = new Node;
        board[i][j].value = [i, j];
    }
}


for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
        const node = board[i][j];
        if (i + 1 <= 7 && j - 2 >= 0) {
            node.sideLeftUp = board[i + 1][j - 2];
        }

        if (i + 1 <= 7 && j + 2 <= 7) {
            node.sideRightUp = board[i + 1][j + 2];
        }

        if (i - 1 >= 0 && j - 2 >= 0) {
            node.sideLeftDown = board[i - 1][j - 2];
        }

        if (i - 1 >= 0 && j + 2 <= 7) {
            node.sideRightDown = board[i - 1][j + 2];
        }

        if ( i + 2 <= 7 && j - 1 >= 0) {
            node.upLeft = board[i + 2][j - 1];
        }

        if (i + 2 <= 7 && j + 1 <= 7) {
            node.upRight = board[i + 2][j + 1];
        }

        if (i - 2 >= 0 && j - 1 >= 0) {
            node.downLeft = board[i - 2][j - 1];
        }

        if (i - 2 >= 0 && j + 1 <= 7) {
            node.downRight = board[i - 2][j + 1];
        }

    }

}


