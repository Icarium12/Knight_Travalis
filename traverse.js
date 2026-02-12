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

knightMoves([3, 3], [4, 3]);

function knightMoves(start, end, queue = [], visited = []) {
    const node = board[start[0]][start[1]];
    console.log(node);
    queue.push(node);

    const vists = traverse(end, queue, visited);
    console.log(vists);

}

function traverse(end, queue, visited) {
    // if (queue.length === 0) {
    //     return;
    // }

    const node = queue.shift();
    console.log(node.value);
    
    if (node.value === end) {
        return visited;
    }

    if (node.sideLeftUp !== null && node.sideLeftUp.visit === false) {
        queue.push(node.sideLeftUp);
    }

    if (node.sideRightUp !== null && node.sideRightUp.visit === false) {
        queue.push(node.sideRightUp);
    }

    if (node.sideLeftDown !== null && node.sideLeftDown.visit === false) {
        queue.push(node.sideLeftDown);
    }

    if (node.sideRightDown !== null && node.sideRightDown.visit === false) {
        queue.push(node.sideRightDown);
    }

    if (node.upLeft !== null && node.upLeft.visit === false) {
        queue.push(node.upLeft);
    }

    if (node.upRight !== null && node.upRight.visit === false) {
        queue.push(node.upRight);
    }

    if (node.downLeft !== null && node.downLeft.visit === false) {
        queue.push(node.downLeft);
    }

    if (node.downRight !== null && node.downRight.visit === false) {
        queue.push(node.downRight);
    }

    node.visit = true;
    visited.push(node);

    return traverse(end, queue, visited);
}